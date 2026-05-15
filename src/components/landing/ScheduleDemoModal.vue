<script setup>
import {
    ArrowRight,
    Calendar,
    Check,
    ChevronLeft,
    ChevronRight,
    Clock,
    User,
    X,
} from 'lucide-vue-next'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    logoSrc: { type: String, required: true },
    /** Matches landing page theme tokens (`landing-light` / `landing-dark`). */
    theme: {
        type: String,
        default: 'light',
    },
})

const emit = defineEmits(['update:modelValue'])

const CHICAGO = 'America/Chicago'
const DOW_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const TIME_SLOTS = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
]

const FLEET_SIZES = ['1-10 trucks', '11-50 trucks', '51-200 trucks', '200+ trucks']

const dialogRef = ref(null)
const step = ref(0)
const selectedDateKey = ref(null)
const selectedTime = ref(null)
const fullName = ref('')
const workEmail = ref('')
const company = ref('')
const fleetSize = ref(null)

const selectableDates = ref([])
const selectableKeySet = computed(() => new Set(selectableDates.value.map((r) => r.key)))

const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

const calendarYear = ref(new Date().getFullYear())
const calendarMonth = ref(new Date().getMonth() + 1)

let escapeHandler = null

/** Avoid Teleport-to-body during SSR + first paint so Astro islands hydrate cleanly. */
const teleportReady = ref(false)
onMounted(() => {
    teleportReady.value = true
})

function frCaKeyForUtcMs(ms) {
    return new Intl.DateTimeFormat('fr-CA', {
        timeZone: CHICAGO,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date(ms))
}

function resolveChicagoNoon(y, month1Based, day) {
    const pad = (n) => String(n).padStart(2, '0')
    const want = `${y}-${pad(month1Based)}-${pad(day)}`
    const fmt = new Intl.DateTimeFormat('fr-CA', {
        timeZone: CHICAGO,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
    let ms = Date.UTC(y, month1Based - 1, day, 5, 0, 0)
    for (let i = 0; i < 48; i++) {
        if (fmt.format(new Date(ms)) === want) {
            return { noonMs: ms, key: want }
        }
        ms += 3600000
    }
    return { noonMs: ms, key: want }
}

/** @returns {string} */
function chicagoTodayKey() {
    return frCaKeyForUtcMs(Date.now())
}

function ymdFromKey(key) {
    const [y, m, d] = key.split('-').map(Number)
    return { y, m, d }
}

function compareKeys(a, b) {
    return a.localeCompare(b)
}

function daysInCivilMonth(y, month1) {
    return new Date(y, month1, 0).getDate()
}

function buildChicagoWeekdaySlots(count) {
    const out = []
    let ms = Date.now()
    const dayMs = 86400000
    for (let i = 0; out.length < count && i < 120; i++) {
        ms += dayMs
        const wdShort = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            timeZone: CHICAGO,
        }).format(new Date(ms))
        if (wdShort === 'Sat' || wdShort === 'Sun') {
            continue
        }
        const key = frCaKeyForUtcMs(ms)
        const label = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            timeZone: CHICAGO,
        }).format(new Date(ms))
        out.push({ key, label })
    }
    return out
}

const calendarTitle = computed(() => {
    const { noonMs } = resolveChicagoNoon(
        calendarYear.value,
        calendarMonth.value,
        15
    )
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric',
        timeZone: CHICAGO,
    }).format(new Date(noonMs))
})

const calendarCells = computed(() => {
    const y = calendarYear.value
    const m = calendarMonth.value
    const dim = daysInCivilMonth(y, m)
    const { noonMs } = resolveChicagoNoon(y, m, 1)
    const wdLabel = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        timeZone: CHICAGO,
    }).format(new Date(noonMs))
    const startPad = Math.max(0, DOW_SHORT.indexOf(wdLabel))
    const todayK = chicagoTodayKey()
    const cells = []
    for (let i = 0; i < startPad; i++) {
        cells.push({ day: null, key: null, selectable: false, muted: true })
    }
    for (let d = 1; d <= dim; d++) {
        const { key } = resolveChicagoNoon(y, m, d)
        const inSet = selectableKeySet.value.has(key)
        const notPast = compareKeys(key, todayK) >= 0
        const selectable = inSet && notPast
        cells.push({
            day: d,
            key,
            selectable,
            muted: !selectable,
        })
    }
    while (cells.length % 7 !== 0) {
        cells.push({ day: null, key: null, selectable: false, muted: true })
    }
    return cells
})

const minCalendarYM = computed(() => {
    const tk = chicagoTodayKey()
    const { y, m } = ymdFromKey(tk)
    return { y, m }
})

const maxCalendarYM = computed(() => {
    const last = selectableDates.value[selectableDates.value.length - 1]
    if (!last) {
        const { y, m } = minCalendarYM.value
        return { y: y + 1, m }
    }
    const { y, m } = ymdFromKey(last.key)
    return { y, m }
})

function resetFormState() {
    step.value = 0
    selectedDateKey.value = null
    selectedTime.value = null
    fullName.value = ''
    workEmail.value = ''
    company.value = ''
    fleetSize.value = null
    submitError.value = ''
    submitSuccess.value = false
}

function syncCalendarToFirstSlot() {
    const first = selectableDates.value[0]
    if (first) {
        const { y, m } = ymdFromKey(first.key)
        calendarYear.value = y
        calendarMonth.value = m
    } else {
        const tk = chicagoTodayKey()
        const { y, m } = ymdFromKey(tk)
        calendarYear.value = y
        calendarMonth.value = m
    }
}

function close() {
    emit('update:modelValue', false)
}

function prevCalMonth() {
    let y = calendarYear.value
    let m = calendarMonth.value - 1
    if (m < 1) {
        m = 12
        y -= 1
    }
    const min = minCalendarYM.value
    if (y < min.y || (y === min.y && m < min.m)) {
        return
    }
    calendarYear.value = y
    calendarMonth.value = m
}

function nextCalMonth() {
    let y = calendarYear.value
    let m = calendarMonth.value + 1
    if (m > 12) {
        m = 1
        y += 1
    }
    const max = maxCalendarYM.value
    if (y > max.y || (y === max.y && m > max.m)) {
        return
    }
    calendarYear.value = y
    calendarMonth.value = m
}

const canPrevCalMonth = computed(() => {
    const min = minCalendarYM.value
    return !(
        calendarYear.value < min.y ||
        (calendarYear.value === min.y && calendarMonth.value <= min.m)
    )
})

const canNextCalMonth = computed(() => {
    const max = maxCalendarYM.value
    return !(
        calendarYear.value > max.y ||
        (calendarYear.value === max.y && calendarMonth.value >= max.m)
    )
})

watch(
    () => props.modelValue,
    (open) => {
        if (typeof document === 'undefined') {
            return
        }
        if (open) {
            selectableDates.value = buildChicagoWeekdaySlots(120)
            resetFormState()
            syncCalendarToFirstSlot()
            document.body.style.overflow = 'hidden'
            escapeHandler = (e) => {
                if (e.key === 'Escape') {
                    close()
                }
            }
            document.addEventListener('keydown', escapeHandler)
            nextTick(() => {
                dialogRef.value?.focus()
            })
        } else {
            document.body.style.overflow = ''
            if (escapeHandler) {
                document.removeEventListener('keydown', escapeHandler)
                escapeHandler = null
            }
            resetFormState()
        }
    }
)

onBeforeUnmount(() => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
        if (escapeHandler) {
            document.removeEventListener('keydown', escapeHandler)
        }
    }
})

const selectedDateLabel = computed(() => {
    const row = selectableDates.value.find((r) => r.key === selectedDateKey.value)
    return row?.label ?? 'Not selected'
})

const timeSummary = computed(() => {
    if (!selectedTime.value) {
        return 'Not selected'
    }
    return `${selectedTime.value} CT`
})

const contactSummary = computed(() => {
    const name = fullName.value.trim()
    const email = workEmail.value.trim()
    if (!name && !email) {
        return 'Not provided'
    }
    if (name && email) {
        return `${name} · ${email}`
    }
    return name || email
})

const canContinueStep0 = computed(() => selectedDateKey.value != null)
const canContinueStep1 = computed(() => selectedTime.value != null)

const infoValid = computed(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.value.trim())
    return (
        fullName.value.trim().length > 1 &&
        emailOk &&
        company.value.trim().length > 1 &&
        fleetSize.value != null
    )
})

function goNext() {
    if (step.value === 0 && canContinueStep0.value) {
        step.value = 1
    } else if (step.value === 1 && canContinueStep1.value) {
        step.value = 2
    }
}

function goBack() {
    if (step.value > 0) {
        step.value -= 1
    }
}

function stepDone(idx) {
    return step.value > idx
}

function stepActive(idx) {
    return step.value === idx
}

function pickCalendarDay(cell) {
    if (!cell.selectable || !cell.key) {
        return
    }
    selectedDateKey.value = cell.key
}

const SALES_INBOX = 'sales@boltsystem.com'

function buildMailtoFallback() {
    const subject = `Bolt demo request — ${fullName.value.trim() || 'New lead'} (${company.value.trim() || 'Company'})`
    const lines = [
        'New Bolt demo request',
        '',
        `Name:        ${fullName.value.trim()}`,
        `Email:       ${workEmail.value.trim()}`,
        `Company:     ${company.value.trim()}`,
        `Fleet size:  ${fleetSize.value ?? ''}`,
        '',
        `Preferred date: ${selectedDateLabel.value}`,
        `Preferred time: ${timeSummary.value}`,
        '',
        '— Sent from bolttms.com schedule-a-demo form',
    ]
    const body = lines.join('\n')
    return `mailto:${SALES_INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

async function confirmBooking() {
    submitError.value = ''
    submitting.value = true

    const payload = {
        form: 'bolt-demo-schedule',
        _subject: 'Bolt demo request',
        preferredDate: selectedDateLabel.value,
        preferredTime: timeSummary.value,
        fullName: fullName.value.trim(),
        email: workEmail.value.trim(),
        company: company.value.trim(),
        fleetSize: fleetSize.value,
        _replyto: workEmail.value.trim(),
    }

    const endpoint = import.meta.env.PUBLIC_DEMO_FORM_ENDPOINT
    const web3Key = import.meta.env.PUBLIC_DEMO_FORM_ACCESS_KEY
    if (web3Key) {
        payload.access_key = web3Key
    }

    if (endpoint) {
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const text = await res.text()
            let ok = res.ok
            if (!ok && text) {
                try {
                    const j = JSON.parse(text)
                    if (j.success === true) {
                        ok = true
                    }
                } catch {
                    /* ignore */
                }
            }

            if (!ok) {
                throw new Error(text || res.statusText)
            }

            submitSuccess.value = true
            return
        } catch {
            /* fall through to mailto fallback */
        } finally {
            submitting.value = false
        }
    }

    /* No endpoint configured (or POST failed): hand the request off via the
       user's email client so the lead is never lost. */
    try {
        if (typeof window !== 'undefined') {
            window.location.href = buildMailtoFallback()
        }
        submitSuccess.value = true
    } catch {
        submitError.value = `We could not open your email app. Please email ${SALES_INBOX} directly.`
    } finally {
        submitting.value = false
    }
}

function onDialogKeydown(e) {
    if (e.key !== 'Tab' || !dialogRef.value) {
        return
    }
    const root = dialogRef.value
    const sel =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const list = [...root.querySelectorAll(sel)].filter(
        (el) => el.offsetParent !== null || el === document.activeElement
    )
    if (list.length === 0) {
        return
    }
    const first = list[0]
    const last = list[list.length - 1]
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
    }
}
</script>

<template>
    <Teleport v-if="teleportReady" to="body">
        <div
            v-if="modelValue"
            class="schedule-demo-root fixed inset-0 z-[9999] flex justify-end p-3 sm:p-5 lg:p-6"
            aria-hidden="false"
            :data-landing-theme="theme"
        >
            <button
                type="button"
                class="absolute inset-0 z-0 bg-black/55 backdrop-blur-[2px]"
                aria-label="Close dialog"
                @click="close"
            />

            <div
                ref="dialogRef"
                role="dialog"
                aria-modal="true"
                aria-labelledby="schedule-demo-title"
                tabindex="-1"
                class="schedule-demo-dialog schedule-demo-dialog-animate relative z-10 flex h-full max-h-full w-full max-w-[min(900px,100%)] flex-col overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-[0_30px_90px_-24px_rgba(0,0,0,0.55)]"
                @keydown="onDialogKeydown"
            >
                <header class="flex shrink-0 items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                    <div class="flex min-w-0 items-center gap-3">
                        <img :src="logoSrc" alt="" class="h-7 w-auto shrink-0" />
                        <div class="min-w-0">
                            <p id="schedule-demo-title" class="truncate text-[15px] font-semibold tracking-tight">
                                Schedule a demo
                            </p>
                            <p class="truncate text-[12px] text-muted-foreground">
                                Bolt · Nashville, TN
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="rounded-[var(--radius)] p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                        aria-label="Close"
                        @click="close"
                    >
                        <X class="size-5" stroke-width="2" />
                    </button>
                </header>

                <div v-if="submitSuccess" class="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                    <div
                        class="flex size-14 items-center justify-center rounded-full bg-foreground text-background"
                        aria-hidden="true"
                    >
                        <Check class="size-7" stroke-width="2.5" />
                    </div>
                    <h3 class="text-[18px] font-semibold tracking-tight">
                        You&apos;re booked
                    </h3>
                    <p class="max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                        Thanks — we&apos;ll follow up at {{ workEmail.trim() }} with a calendar invite and anything we need before your walkthrough.
                    </p>
                    <button
                        type="button"
                        class="mt-4 inline-flex h-11 items-center rounded-[var(--radius)] bg-primary px-6 text-[14px] font-medium text-primary-foreground hover:opacity-90"
                        @click="close"
                    >
                        Done
                    </button>
                </div>

                <template v-else>
                    <div class="grid flex-1 grid-cols-1 gap-0 overflow-y-auto lg:grid-cols-[1fr_minmax(260px,320px)] lg:overflow-hidden">
                        <div class="order-1 flex min-h-0 flex-col border-border lg:order-none lg:border-r">
                            <div class="border-b border-border px-5 py-4 sm:px-6">
                                <div class="flex w-full items-center gap-0">
                                    <span
                                        class="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium"
                                        :class="
                                            stepActive(0)
                                                ? 'border-transparent bg-primary text-primary-foreground'
                                                : stepDone(0)
                                                  ? 'border-border bg-muted text-muted-foreground'
                                                  : 'border-border bg-background text-muted-foreground'
                                        "
                                    >
                                        <Check v-if="stepDone(0)" class="size-3.5" stroke-width="2.5" />
                                        <Calendar v-else class="size-3.5 opacity-80" />
                                        Date
                                    </span>
                                    <span
                                        class="mx-2 h-px min-w-[12px] flex-1 bg-border/90"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium"
                                        :class="
                                            stepActive(1)
                                                ? 'border-transparent bg-primary text-primary-foreground'
                                                : stepDone(1)
                                                  ? 'border-border bg-muted text-muted-foreground'
                                                  : 'border-border bg-background text-muted-foreground'
                                        "
                                    >
                                        <Check v-if="stepDone(1)" class="size-3.5" stroke-width="2.5" />
                                        <Clock v-else class="size-3.5 opacity-80" />
                                        Time
                                    </span>
                                    <span
                                        class="mx-2 h-px min-w-[12px] flex-1 bg-border/90"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium"
                                        :class="
                                            stepActive(2)
                                                ? 'border-transparent bg-primary text-primary-foreground'
                                                : 'border-border bg-background text-muted-foreground'
                                        "
                                    >
                                        <User class="size-3.5 opacity-90" />
                                        Info
                                    </span>
                                </div>
                            </div>

                            <div class="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
                                <div v-if="step === 0">
                                    <h3 class="text-[17px] font-semibold tracking-tight">
                                        Pick a date
                                    </h3>
                                    <p class="mt-1 text-[13px] text-muted-foreground">
                                        Choose a weekday in Central Time (Nashville, TN).
                                    </p>
                                    <div class="mt-5 flex items-center justify-between gap-3">
                                        <button
                                            type="button"
                                            class="inline-flex size-9 items-center justify-center rounded-[var(--radius)] border border-border bg-background text-foreground transition hover:bg-muted disabled:opacity-35"
                                            aria-label="Previous month"
                                            :disabled="!canPrevCalMonth"
                                            @click="prevCalMonth"
                                        >
                                            <ChevronLeft class="size-5" stroke-width="2" />
                                        </button>
                                        <p class="text-[14px] font-semibold tabular-nums text-foreground">
                                            {{ calendarTitle }}
                                        </p>
                                        <button
                                            type="button"
                                            class="inline-flex size-9 items-center justify-center rounded-[var(--radius)] border border-border bg-background text-foreground transition hover:bg-muted disabled:opacity-35"
                                            aria-label="Next month"
                                            :disabled="!canNextCalMonth"
                                            @click="nextCalMonth"
                                        >
                                            <ChevronRight class="size-5" stroke-width="2" />
                                        </button>
                                    </div>
                                    <div
                                        class="mt-4 grid grid-cols-7 gap-0.5 text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                                    >
                                        <span>Su</span>
                                        <span>Mo</span>
                                        <span>Tu</span>
                                        <span>We</span>
                                        <span>Th</span>
                                        <span>Fr</span>
                                        <span>Sa</span>
                                    </div>
                                    <div class="mt-1 grid grid-cols-7 gap-1">
                                        <template v-for="(cell, idx) in calendarCells" :key="idx">
                                            <button
                                                v-if="cell.day != null"
                                                type="button"
                                                class="flex h-10 items-center justify-center rounded-[var(--radius)] text-[13px] font-semibold transition"
                                                :disabled="!cell.selectable"
                                                :class="
                                                    selectedDateKey === cell.key
                                                        ? 'bg-primary text-primary-foreground ring-1 ring-foreground'
                                                        : cell.selectable
                                                          ? 'border border-border bg-background text-foreground hover:bg-muted'
                                                          : 'cursor-default border border-transparent text-muted-foreground/35'
                                                "
                                                @click="pickCalendarDay(cell)"
                                            >
                                                {{ cell.day }}
                                            </button>
                                            <span v-else class="h-10" aria-hidden="true" />
                                        </template>
                                    </div>
                                </div>

                                <div v-else-if="step === 1">
                                    <h3 class="text-[17px] font-semibold tracking-tight">
                                        Pick a time
                                    </h3>
                                    <p class="mt-1 text-[13px] text-muted-foreground">
                                        All times are Central (Nashville, TN).
                                    </p>
                                    <div class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                        <button
                                            v-for="t in TIME_SLOTS"
                                            :key="t"
                                            type="button"
                                            class="rounded-[var(--radius)] border px-3 py-2.5 text-center text-[13px] font-medium transition hover:bg-muted sm:text-[14px]"
                                            :class="
                                                selectedTime === t
                                                    ? 'border-foreground bg-muted ring-1 ring-foreground'
                                                    : 'border-border bg-background'
                                            "
                                            @click="selectedTime = t"
                                        >
                                            {{ t }}
                                        </button>
                                    </div>
                                </div>

                                <div v-else>
                                    <h3 class="text-[17px] font-semibold tracking-tight">
                                        A few details
                                    </h3>
                                    <p class="mt-1 text-[13px] text-muted-foreground">
                                        So we can tailor the demo to your operation.
                                    </p>

                                    <div class="mt-6 flex flex-col gap-4">
                                        <label class="block">
                                            <span class="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Full name</span>
                                            <input
                                                v-model="fullName"
                                                type="text"
                                                autocomplete="name"
                                                placeholder="Jane Smith"
                                                class="demo-field-input"
                                            />
                                        </label>
                                        <label class="block">
                                            <span class="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Work email</span>
                                            <input
                                                v-model="workEmail"
                                                type="email"
                                                autocomplete="email"
                                                placeholder="jane@company.com"
                                                class="demo-field-input"
                                            />
                                        </label>
                                        <label class="block">
                                            <span class="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Company</span>
                                            <input
                                                v-model="company"
                                                type="text"
                                                autocomplete="organization"
                                                placeholder="Smith Freight LLC"
                                                class="demo-field-input"
                                            />
                                        </label>
                                        <div>
                                            <span class="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fleet size</span>
                                            <div class="grid grid-cols-2 gap-2">
                                                <button
                                                    v-for="fs in FLEET_SIZES"
                                                    :key="fs"
                                                    type="button"
                                                    class="rounded-[var(--radius)] border px-3 py-2.5 text-[13px] font-medium transition hover:bg-muted sm:text-[14px]"
                                                    :class="
                                                        fleetSize === fs
                                                            ? 'border-foreground bg-muted ring-1 ring-foreground'
                                                            : 'border-border bg-background'
                                                    "
                                                    @click="fleetSize = fs"
                                                >
                                                    {{ fs }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <footer class="flex shrink-0 items-center justify-between gap-3 border-t border-border px-5 py-4 sm:px-6">
                                <button
                                    type="button"
                                    class="text-[13px] font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-30"
                                    :disabled="step === 0"
                                    @click="goBack"
                                >
                                    &lt; Back
                                </button>
                                <button
                                    v-if="step < 2"
                                    type="button"
                                    class="inline-flex h-10 items-center gap-1 rounded-[var(--radius)] bg-primary px-5 text-[13px] font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                                    :disabled="
                                        (step === 0 && !canContinueStep0) || (step === 1 && !canContinueStep1)
                                    "
                                    @click="goNext"
                                >
                                    Continue
                                    <ArrowRight class="size-4" />
                                </button>
                                <button
                                    v-else
                                    type="button"
                                    class="inline-flex h-10 items-center gap-1 rounded-[var(--radius)] bg-primary px-5 text-[13px] font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                                    :disabled="!infoValid || submitting"
                                    @click="confirmBooking"
                                >
                                    {{ submitting ? 'Sending…' : 'Confirm booking ✓' }}
                                </button>
                            </footer>

                            <p v-if="submitError" class="border-t border-border bg-muted/40 px-5 py-3 text-[13px] text-red-600 dark:text-red-400 sm:px-6">
                                {{ submitError }}
                            </p>
                        </div>

                        <aside
                            class="order-2 flex flex-col border-t border-border bg-muted/50 px-5 py-6 sm:px-6 lg:order-none lg:border-t-0 lg:py-8"
                        >
                            <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Your demo
                            </p>
                            <div class="mt-4 rounded-[var(--radius)] border border-border bg-card p-4 text-card-foreground shadow-sm">
                                <p class="text-[14px] font-semibold">
                                    30-min walkthrough
                                </p>
                                <p class="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                                    You&apos;ll meet with the Bolt team for a personalized tour of the platform.
                                </p>
                            </div>
                            <ul
                                class="relative mt-6 space-y-0 text-[13px] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border/90"
                            >
                                <li class="relative flex gap-3 pl-1">
                                    <span
                                        class="relative z-[1] flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
                                    >
                                        <Calendar class="size-3.5" aria-hidden="true" />
                                    </span>
                                    <div class="pb-5 pt-0.5">
                                        <p class="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                                            Date
                                        </p>
                                        <p class="font-semibold text-foreground">
                                            {{ selectedDateLabel }}
                                        </p>
                                    </div>
                                </li>
                                <li class="relative flex gap-3 pl-1">
                                    <span
                                        class="relative z-[1] flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
                                    >
                                        <Clock class="size-3.5" aria-hidden="true" />
                                    </span>
                                    <div class="pb-5 pt-0.5">
                                        <p class="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                                            Time
                                        </p>
                                        <p class="font-semibold text-foreground">
                                            {{ timeSummary }}
                                        </p>
                                    </div>
                                </li>
                                <li class="relative flex gap-3 pl-1">
                                    <span
                                        class="relative z-[1] flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
                                    >
                                        <User class="size-3.5" aria-hidden="true" />
                                    </span>
                                    <div class="pt-0.5">
                                        <p class="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                                            Contact
                                        </p>
                                        <p
                                            class="font-semibold"
                                            :class="
                                                contactSummary === 'Not provided'
                                                    ? 'text-muted-foreground'
                                                    : 'text-foreground'
                                            "
                                        >
                                            {{ contactSummary }}
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div class="mt-auto rounded-[var(--radius)] border border-border bg-muted/80 p-3 text-[12px] leading-relaxed text-muted-foreground lg:mt-8">
                                We&apos;ll customize the demo around your fleet size, operation type, and current tools. No generic slide decks.
                            </div>
                        </aside>
                    </div>
                </template>
            </div>
        </div>
    </Teleport>
</template>
