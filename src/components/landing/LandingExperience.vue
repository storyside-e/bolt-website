<template>
    <div
        id="landing-top"
        :class="[
            'landing-page min-h-screen overflow-x-hidden bg-[#050606] text-white',
            isLightMode ? 'landing-light' : 'landing-dark',
        ]"
    >
        <header
            class="landing-site-header supports-[backdrop-filter]:bg-[#070808]/80 sticky top-0 z-30 border-b border-white/10 bg-[#070808]/90 backdrop-blur-xl backdrop-saturate-150"
        >
            <nav
                class="relative flex h-[72px] w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
                aria-label="Public navigation"
            >
                <a
                    href="#landing-top"
                    class="flex items-center gap-2"
                    aria-label="Bolt TMS landing page"
                >
                    <img
                        :src="landingLogo"
                        alt="Bolt TMS"
                        class="h-7 w-auto"
                    />
                </a>

                <div
                    class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[12px] font-medium text-white/55 md:flex"
                >
                    <a href="#landing-top" class="transition hover:text-white">
                        Home
                    </a>
                    <a href="#features" class="transition hover:text-white">
                        What we built
                    </a>
                    <a href="#integrations" class="transition hover:text-white">
                        Integrations
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button
                        type="button"
                        class="landing-theme-toggle inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:text-white"
                        :aria-label="
                            isLightMode
                                ? 'Switch landing page to dark mode'
                                : 'Switch landing page to light mode'
                        "
                        @click="toggleLandingTheme"
                    >
                        <Moon v-if="isLightMode" class="size-4" />
                        <Sun v-else class="size-4" />
                    </button>
                    <a
                        href="https://app.bolttms.com/"
                        class="hidden rounded-md px-3 py-2 text-[12px] font-medium text-white/55 hover:text-white sm:inline-flex"
                    >
                        Sign in
                    </a>
                    <a
                        href="https://app.bolttms.com/register?step=registration"
                        class="landing-cta inline-flex h-10 items-center rounded-full bg-white px-5 text-[12px] font-medium text-black shadow-xs transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15] active:translate-y-px"
                    >
                        Start free
                    </a>
                </div>
            </nav>
        </header>

        <main class="landing-main">
            <section
                class="landing-section landing-section-hero relative z-10 isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-12"
            >
                <div
                    class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),rgba(255,255,255,0.045)_32%,rgba(5,6,6,0)_68%)]"
                    aria-hidden="true"
                />
                <div
                    class="pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-[420px] max-w-5xl rounded-full bg-white/[0.035] blur-3xl"
                    aria-hidden="true"
                />
                <div
                    class="mx-auto grid max-w-[1240px] grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-x-10"
                >
                    <div class="lg:col-span-7 xl:col-span-7">
                        <span
                            class="landing-hero-pill mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 backdrop-blur"
                        >
                            <span class="landing-hero-pulse relative flex size-2">
                                <span class="absolute inset-0 rounded-full bg-emerald-400/45" aria-hidden="true" />
                                <span class="relative size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                            </span>
                            Built to replace your TMS — or your spreadsheets
                        </span>
                        <h1
                            class="max-w-[760px] text-balance font-semibold leading-[0.94] tracking-tight text-white"
                            style="font-size: clamp(2.85rem, 4.4vw, 4.6rem)"
                        >
                            We built the TMS we couldn’t find.
                        </h1>
                        <p
                            class="mt-6 max-w-xl text-pretty text-[16px] leading-relaxed text-white/55 sm:text-[18px]"
                        >
                            If your TMS quote is higher than your truck payment, you’re paying for sales calls. Bolt is self-serve and live in an hour.
                        </p>
                        <div class="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
                            <a
                                href="https://app.bolttms.com/register?step=registration"
                                class="landing-cta inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-black shadow-xs transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]"
                            >
                                Start your free trial
                            </a>
                            <a
                                href="#preview"
                                class="landing-hero-secondary inline-flex h-11 items-center justify-center rounded-full border border-white/14 px-5 text-[14px] font-medium text-white/72 transition hover:border-white/28 hover:text-white"
                            >
                                See the live preview
                            </a>
                        </div>
                        <p class="mt-4 text-[13px] text-white/45">
                            7 days, no contract, no commitment
                        </p>
                        <dl
                            class="mt-12 grid w-full max-w-xl grid-cols-3 grid-rows-[auto_auto] gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left backdrop-blur"
                        >
                            <div
                                v-for="stat in heroStats"
                                :key="stat.label"
                                class="landing-hero-stat row-span-2 grid grid-rows-subgrid items-start gap-1 bg-[#070808]/55 px-4 py-4 sm:px-5 sm:py-5"
                            >
                                <dt
                                    class="m-0 w-full font-mono text-[10px] uppercase leading-tight tracking-[0.16em] text-white/38"
                                >
                                    {{ stat.label }}
                                </dt>
                                <dd
                                    class="m-0 w-full tabular-nums font-semibold tracking-tight text-white"
                                    style="font-size: clamp(1.3rem, 1.7vw, 1.7rem)"
                                >
                                    {{ stat.value }}
                                    <span
                                        v-if="stat.note"
                                        class="mt-1 block font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-white/45"
                                    >
                                        {{ stat.note }}
                                    </span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div class="hidden lg:col-span-5 lg:flex lg:justify-end xl:col-span-5">
                        <div class="landing-hero-card relative w-full max-w-[420px]">
                            <div
                                class="landing-hero-card-glow pointer-events-none absolute -inset-6 -z-10"
                                aria-hidden="true"
                            />
                            <div
                                class="landing-hero-card-inner overflow-hidden rounded-2xl border border-white/12 bg-[#0c0d0e]/90 shadow-[0_28px_70px_-25px_rgba(0,0,0,0.7)] backdrop-blur"
                            >
                                <div
                                    class="flex items-center justify-between border-b border-white/8 bg-white/[0.04] px-5 py-3"
                                >
                                    <span
                                        class="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
                                    >
                                        Today · live
                                    </span>
                                    <span class="landing-hero-card-dot relative flex size-1.5">
                                        <span class="absolute inset-0 rounded-full bg-emerald-400/40" aria-hidden="true" />
                                        <span class="relative size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                                    </span>
                                </div>
                                <div class="grid grid-cols-3 gap-px bg-white/8">
                                    <div class="landing-hero-card-stat">
                                        <span class="landing-hero-card-stat-label">Open dispatches</span>
                                        <span class="landing-hero-card-stat-value">14</span>
                                    </div>
                                    <div class="landing-hero-card-stat">
                                        <span class="landing-hero-card-stat-label">In transit</span>
                                        <span class="landing-hero-card-stat-value">46</span>
                                    </div>
                                    <div class="landing-hero-card-stat">
                                        <span class="landing-hero-card-stat-label">Delivered</span>
                                        <span class="landing-hero-card-stat-value">28</span>
                                    </div>
                                </div>
                                <ul class="divide-y divide-white/6">
                                    <li class="landing-hero-card-row">
                                        <span class="landing-hero-card-row-tone bg-emerald-400" aria-hidden="true" />
                                        <span class="font-mono text-[11px] text-white/55">SHP-219</span>
                                        <span class="truncate text-[13px] text-white/85">M. Calderón · Murfreesboro → Knoxville</span>
                                        <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-300/85">06:40</span>
                                    </li>
                                    <li class="landing-hero-card-row">
                                        <span class="landing-hero-card-row-tone bg-amber-400" aria-hidden="true" />
                                        <span class="font-mono text-[11px] text-white/55">SHP-220</span>
                                        <span class="truncate text-[13px] text-white/85">Unassigned · Atlanta → Asheville</span>
                                        <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-amber-300/85">flag</span>
                                    </li>
                                    <li class="landing-hero-card-row">
                                        <span class="landing-hero-card-row-tone bg-white/40" aria-hidden="true" />
                                        <span class="font-mono text-[11px] text-white/55">SHP-218</span>
                                        <span class="truncate text-[13px] text-white/85">R. Okafor · Memphis → Nashville</span>
                                        <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">done</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="preview"
                class="landing-section landing-section-preview relative z-0 scroll-mt-20 overflow-hidden border-t border-white/[0.06] bg-[#050606] px-0 py-10 sm:py-12"
            >
                <div
                    class="pointer-events-none absolute inset-x-[10%] bottom-8 h-[280px] rounded-[40px] bg-[rgb(250_204_21_/0.06)] blur-3xl"
                    aria-hidden="true"
                />
                <div
                    class="preview-browser-stack relative"
                >
                    <div
                        class="preview-browser-shadow pointer-events-none absolute -bottom-5 left-8 h-12 rounded-[24px] bg-slate-950/18 blur-2xl"
                        aria-hidden="true"
                    />
                    <div
                        class="preview-browser-shell relative overflow-hidden rounded-2xl"
                    >
                        <div
                            class="preview-browser-frame overflow-hidden rounded-2xl border-2 border-[rgb(250_204_21_/0.28)] bg-[#111212]"
                        >
                            <div
                                class="flex h-10 items-center gap-2 border-b border-white/10 bg-[#151616] px-3 sm:gap-3 sm:px-4"
                                aria-label="Browser preview frame"
                            >
                            <div class="flex items-center gap-1.5">
                                <span
                                    class="size-2.5 rounded-full bg-[#ff5f57] sm:size-3"
                                    aria-hidden="true"
                                />
                                <span
                                    class="size-2.5 rounded-full bg-[#ffbd2e] sm:size-3"
                                    aria-hidden="true"
                                />
                                <span
                                    class="size-2.5 rounded-full bg-[#28c840] sm:size-3"
                                    aria-hidden="true"
                                />
                            </div>
                            <div
                                class="mx-auto hidden h-7 w-full max-w-md items-center justify-center gap-2 rounded-md border border-white/[0.045] bg-white/[0.045] px-3 text-[11px] font-medium text-white/30 sm:flex"
                            >
                                <Lock class="size-3" />
                                <span
                                    class="font-mono"
                                    data-test="landing-preview-url"
                                >
                                    app.bolttms.com/{{ previewPath }}
                                </span>
                            </div>
                            <div
                                class="hidden w-10 justify-end text-white/32 sm:flex sm:w-[52px]"
                                aria-hidden="true"
                            >
                                <RefreshCw class="size-3 sm:size-3.5" />
                            </div>
                            </div>

                            <div
                                class="relative flex h-[760px] min-h-0 flex-col overflow-hidden bg-body text-foreground"
                                data-test="landing-preview-body"
                            >
                            <header
                                class="flex h-14 shrink-0 items-center justify-between border-b border-neutral-800 bg-[hsl(240_5.9%_10%)] px-2 text-gray-50"
                                data-test="landing-app-header"
                            >
                                <div
                                    class="flex min-w-0 shrink-0 items-center gap-2"
                                >
                                    <button
                                        type="button"
                                        class="inline-flex size-8 items-center justify-center rounded-md text-white hover:bg-neutral-700"
                                        aria-label="Toggle sidebar"
                                    >
                                        <Menu class="size-4" />
                                    </button>
                                    <img
                                        :src="logoFullYellowWhite"
                                        alt="Bolt"
                                        class="h-6 w-auto"
                                    />
                                    <span class="text-neutral-500">/</span>
                                    <button
                                        type="button"
                                        class="inline-flex min-w-0 items-center gap-1 rounded-md px-1.5 py-1 text-[14px] font-medium text-white hover:bg-neutral-800"
                                    >
                                        Larson Inc
                                        <ChevronDown class="size-3" />
                                    </button>
                                </div>

                                <div
                                    class="flex items-center justify-end gap-1 sm:gap-2"
                                >
                                    <button
                                        type="button"
                                        class="inline-flex size-8 items-center justify-center rounded-md text-gray-50 hover:bg-neutral-700"
                                        aria-label="Quick Create"
                                    >
                                        <PlusCircle class="size-4" />
                                    </button>
                                    <button
                                        type="button"
                                        class="relative inline-flex size-8 items-center justify-center rounded-md text-gray-50 hover:bg-neutral-700"
                                        aria-label="Notifications"
                                    >
                                        <Bell class="size-4" />
                                        <span
                                            class="absolute right-1.5 top-1.5 size-2 rounded-full bg-red-500"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-flex size-8 items-center justify-center rounded-md text-gray-50 hover:bg-neutral-700"
                                        aria-label="Announcements"
                                    >
                                        <Megaphone class="size-4" />
                                    </button>
                                    <button
                                        type="button"
                                        class="ml-1 inline-flex size-8 items-center justify-center rounded-full bg-purple-600 text-[12px] font-semibold text-white"
                                        aria-label="User menu"
                                    >
                                        AR
                                    </button>
                                </div>
                            </header>

                            <div class="flex min-h-0 flex-1">
                                <aside
                                    class="flex min-h-0 w-44 shrink-0 flex-col border-r bg-sidebar"
                                >
                                    <div
                                        class="min-h-0 flex-1 overflow-y-auto px-2 py-4"
                                    >
                                        <p
                                            class="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-muted-foreground"
                                        >
                                            Navigation
                                        </p>
                                        <template
                                            v-for="item in sidebarItems"
                                            :key="item.label"
                                        >
                                            <button
                                                type="button"
                                                :class="[
                                                    'mb-1 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] font-medium transition-colors',
                                                    isSidebarItemActive(item)
                                                        ? 'bg-background text-foreground shadow-xs'
                                                        : 'text-muted-foreground hover:bg-background/80 hover:text-foreground',
                                                ]"
                                                :aria-current="
                                                    isSidebarItemActive(item)
                                                        ? 'page'
                                                        : undefined
                                                "
                                                :data-test="item.testId"
                                                @click="
                                                    showScreen(
                                                        item.screen,
                                                        item.label
                                                    )
                                                "
                                            >
                                                <component
                                                    :is="item.icon"
                                                    class="size-4"
                                                />
                                                <span>{{ item.label }}</span>
                                            </button>
                                            <div
                                                v-if="
                                                    item.items &&
                                                    isSidebarItemActive(item)
                                                "
                                                class="mb-2 ml-5 border-l border-neutral-300 py-1 pl-2"
                                            >
                                                <button
                                                    v-for="child in item.items"
                                                    :key="child.label"
                                                    type="button"
                                                    :class="[
                                                        'mb-1 flex h-7 w-full items-center rounded-md px-2 text-left text-[12px] transition-colors',
                                                        child.active
                                                            ? 'bg-background font-semibold text-foreground shadow-xs'
                                                            : 'text-muted-foreground hover:bg-background/80 hover:text-foreground',
                                                    ]"
                                                    @click="
                                                        showScreen(
                                                            child.screen ||
                                                                item.screen,
                                                            item.label
                                                        )
                                                    "
                                                >
                                                    {{ child.label }}
                                                </button>
                                            </div>
                                        </template>
                                    </div>
                                </aside>

                                <div class="min-w-0 flex-1 overflow-y-auto">
                                    <section
                                        v-if="screen === DASHBOARD"
                                        class="p-4 md:p-5"
                                        data-test="landing-dashboard"
                                    >
                                        <div
                                            class="mb-5 flex items-center justify-between gap-3"
                                        >
                                            <div
                                                class="flex items-center gap-3"
                                            >
                                                <h1 class="text-[18px] font-medium">
                                                    Dashboard
                                                </h1>
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-[12px] font-medium"
                                                >
                                                    All My Terminals
                                                    <span
                                                        class="rounded-full bg-foreground px-1.5 text-[10px] text-background"
                                                    >
                                                        3
                                                    </span>
                                                    <ChevronDown
                                                        class="size-3"
                                                    />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                class="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-[12px] font-medium text-muted-foreground"
                                            >
                                                <Calendar class="size-4" />
                                                Today
                                                <ChevronDown class="size-3" />
                                            </button>
                                        </div>

                                        <div class="grid grid-cols-4 gap-3">
                                            <button
                                                v-for="metric in metrics"
                                                :key="metric.title"
                                                type="button"
                                                :disabled="!metric.clickable"
                                                :class="[
                                                    'rounded-lg border bg-card p-3 text-left shadow-xs',
                                                    metric.clickable
                                                        ? 'cursor-pointer transition hover:bg-muted/40 hover:shadow-sm'
                                                        : 'cursor-default',
                                                ]"
                                                @click="
                                                    metric.clickable &&
                                                    showScreen(
                                                        TRIPS,
                                                        'Trips'
                                                    )
                                                "
                                            >
                                                <div
                                                    class="mb-2 flex items-center justify-between text-[14px] text-muted-foreground"
                                                >
                                                    <span>{{
                                                        metric.title
                                                    }}</span>
                                                    <component
                                                        :is="metric.icon"
                                                        class="size-4"
                                                    />
                                                </div>
                                                <div
                                                    class="text-[24px] font-semibold"
                                                >
                                                    {{ metric.value }}
                                                    <span
                                                        v-if="metric.sub"
                                                        class="text-[16px] font-normal text-muted-foreground"
                                                    >
                                                        {{ metric.sub }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="mt-4 grid gap-2"
                                                    :style="{
                                                        gridTemplateColumns:
                                                            'repeat(auto-fit, minmax(4.5rem, 1fr))',
                                                    }"
                                                >
                                                    <div
                                                        v-for="detail in metric.items"
                                                        :key="detail.label"
                                                        class="rounded-md bg-muted px-1.5 py-2 text-center text-[11px] leading-tight"
                                                        :title="detail.label"
                                                    >
                                                        <div
                                                            class="font-semibold tabular-nums"
                                                        >
                                                            {{ detail.value }}
                                                        </div>
                                                        <div
                                                            class="mt-1 hyphens-auto break-words text-muted-foreground"
                                                        >
                                                            {{
                                                                detail.shortLabel ||
                                                                detail.label
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="mt-4 h-1.5 rounded-full bg-muted"
                                                >
                                                    <div
                                                        class="h-full rounded-full bg-green-700"
                                                        :style="{
                                                            width:
                                                                metric.progress +
                                                                '%',
                                                        }"
                                                    />
                                                </div>
                                                <div
                                                    class="mt-2 text-right text-[12px] text-muted-foreground"
                                                >
                                                    {{ metric.label }}
                                                </div>
                                            </button>
                                        </div>

                                        <div
                                            class="mt-6 rounded-lg border bg-card shadow-xs"
                                        >
                                            <div
                                                class="flex flex-row flex-wrap items-center justify-between gap-3 border-b p-4"
                                            >
                                                <div class="min-w-0 flex-1">
                                                    <h2
                                                        class="text-[16px] font-semibold"
                                                    >
                                                        Dispatch Matrix
                                                    </h2>
                                                    <p
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        Click any cell to drill
                                                        down
                                                    </p>
                                                </div>
                                                <div
                                                    class="flex shrink-0 items-center gap-2"
                                                >
                                                    <button
                                                        type="button"
                                                        class="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-3 py-1.5 text-[12px] font-medium !text-white [&_svg]:!text-white"
                                                    >
                                                        <Package
                                                            class="size-3.5"
                                                        />
                                                        Dispatches
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-[12px] font-medium text-muted-foreground"
                                                    >
                                                        <Navigation
                                                            class="size-3.5"
                                                        />
                                                        Trips
                                                    </button>
                                                    <RefreshCw
                                                        class="size-4 text-muted-foreground"
                                                    />
                                                </div>
                                            </div>

                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[720px] text-[14px]"
                                                >
                                                    <thead
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        <tr class="border-b">
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Status
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium text-red-600"
                                                            >
                                                                Overdue
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium text-amber-600"
                                                            >
                                                                Today
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium text-green-700"
                                                            >
                                                                Tomorrow
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium"
                                                            >
                                                                This Week
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium"
                                                            >
                                                                Later
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-center font-medium"
                                                            >
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="row in matrixRows"
                                                            :key="row.status"
                                                            class="cursor-pointer border-b transition hover:bg-muted/50"
                                                            @click="
                                                                showScreen(
                                                                    TRIPS,
                                                                    'Trips'
                                                                )
                                                            "
                                                        >
                                                            <td
                                                                class="px-4 py-3 font-medium"
                                                            >
                                                                <span
                                                                    :class="[
                                                                        'mr-2 inline-block size-2 rounded-full',
                                                                        row.color,
                                                                    ]"
                                                                />
                                                                {{ row.status }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center"
                                                            >
                                                                {{
                                                                    row.overdue
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center"
                                                            >
                                                                {{ row.today }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center"
                                                            >
                                                                {{
                                                                    row.tomorrow
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center"
                                                            >
                                                                {{ row.week }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center"
                                                            >
                                                                {{ row.later }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-center font-semibold"
                                                            >
                                                                {{ row.total }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div
                                            class="mt-6 grid grid-cols-5 gap-4"
                                        >
                                            <div
                                                class="col-span-2 rounded-lg border bg-card p-4 shadow-xs"
                                            >
                                                <h2
                                                    class="text-[16px] font-semibold"
                                                >
                                                    Fleet Map
                                                </h2>
                                                <div
                                                    class="mt-4 h-64 overflow-hidden rounded-md border bg-neutral-50"
                                                >
                                                    <div
                                                        class="relative h-full"
                                                    >
                                                        <svg
                                                            class="absolute inset-0 h-full w-full"
                                                            viewBox="0 0 420 260"
                                                            role="img"
                                                            aria-label="Fleet route map"
                                                        >
                                                            <path
                                                                d="M18 54 C80 38 138 58 204 38 C270 18 330 34 404 18"
                                                                class="stroke-neutral-300"
                                                                fill="none"
                                                                stroke-width="3"
                                                                stroke-linecap="round"
                                                            />
                                                            <path
                                                                d="M24 204 C94 174 156 188 214 154 C278 116 322 126 398 92"
                                                                class="stroke-neutral-300"
                                                                fill="none"
                                                                stroke-width="3"
                                                                stroke-linecap="round"
                                                            />
                                                            <path
                                                                d="M80 18 C102 80 96 134 132 190 C150 218 182 234 230 242"
                                                                class="stroke-neutral-200"
                                                                fill="none"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                            />
                                                            <path
                                                                d="M284 32 C258 90 260 148 292 202"
                                                                class="stroke-neutral-200"
                                                                fill="none"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                            />
                                                            <path
                                                                d="M54 178 C120 146 172 132 228 102 C286 70 338 54 384 42"
                                                                class="stroke-blue-500"
                                                                fill="none"
                                                                stroke-width="3"
                                                                stroke-linecap="round"
                                                            />
                                                            <path
                                                                d="M94 72 C154 94 206 124 262 166 C294 190 330 204 374 218"
                                                                class="stroke-green-600"
                                                                fill="none"
                                                                stroke-width="3"
                                                                stroke-linecap="round"
                                                                stroke-dasharray="8 7"
                                                            />
                                                        </svg>

                                                        <div
                                                            v-for="marker in fleetMapMarkers"
                                                            :key="marker.label"
                                                            class="absolute"
                                                            :style="{
                                                                left: marker.left,
                                                                top: marker.top,
                                                            }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'flex size-7 items-center justify-center rounded-full border-2 bg-background shadow-sm',
                                                                    marker.statusClass,
                                                                ]"
                                                            >
                                                                <Truck
                                                                    class="size-3.5"
                                                                />
                                                            </div>
                                                            <div
                                                                class="mt-1 whitespace-nowrap rounded-md border bg-background px-2 py-1 text-[10px] font-medium shadow-xs"
                                                            >
                                                                {{
                                                                    marker.label
                                                                }}
                                                            </div>
                                                        </div>

                                                        <div
                                                            class="absolute left-3 top-3 rounded-md border bg-background/95 px-3 py-2 shadow-xs"
                                                        >
                                                            <div
                                                                class="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                                                            >
                                                                Live fleet
                                                            </div>
                                                            <div
                                                                class="mt-1 text-[14px] font-semibold"
                                                            >
                                                                5 active assets
                                                            </div>
                                                        </div>

                                                        <div
                                                            class="absolute bottom-3 right-3 flex gap-2 rounded-md border bg-background/95 px-3 py-2 text-[10px] text-muted-foreground shadow-xs"
                                                        >
                                                            <span
                                                                class="flex items-center gap-1"
                                                            >
                                                                <span
                                                                    class="size-2 rounded-full bg-blue-500"
                                                                />
                                                                On track
                                                            </span>
                                                            <span
                                                                class="flex items-center gap-1"
                                                            >
                                                                <span
                                                                    class="size-2 rounded-full bg-green-600"
                                                                />
                                                                Available
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="col-span-3 rounded-lg border bg-card p-4 shadow-xs"
                                            >
                                                <div
                                                    class="flex min-w-0 flex-row items-center justify-between gap-3"
                                                >
                                                    <h2
                                                        class="shrink-0 text-[16px] font-semibold"
                                                    >
                                                        Driver Availability
                                                    </h2>
                                                    <div
                                                        class="-mx-1 flex min-w-0 gap-3 overflow-x-auto px-1 pb-1 text-[12px]"
                                                    >
                                                        <span
                                                            class="shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1"
                                                        >
                                                            All - 18
                                                        </span>
                                                        <span
                                                            class="shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 text-muted-foreground"
                                                        >
                                                            Available - 6
                                                        </span>
                                                        <span
                                                            class="shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 text-muted-foreground"
                                                        >
                                                            On Duty - 12
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="mt-4 space-y-2">
                                                    <div
                                                        v-for="driver in drivers"
                                                        :key="driver.name"
                                                        class="flex items-center justify-between rounded-md border p-2"
                                                    >
                                                        <div>
                                                            <div
                                                                class="text-[14px] font-medium"
                                                            >
                                                                {{
                                                                    driver.name
                                                                }}
                                                            </div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                {{
                                                                    driver.detail
                                                                }}
                                                            </div>
                                                        </div>
                                                        <StatusBadge
                                                            :status="
                                                                driver.status
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === SHIPMENTS"
                                        class="p-5 md:p-6"
                                        data-test="landing-shipments"
                                    >
                                        <div
                                            class="mb-5 flex items-center justify-between"
                                        >
                                            <h1 class="text-[18px] font-medium">
                                                Shipments
                                            </h1>
                                            <button
                                                type="button"
                                                class="rounded-md bg-primary px-3 py-2 text-[12px] font-medium text-primary-foreground"
                                            >
                                                New Shipment
                                            </button>
                                        </div>
                                        <div class="mb-4 flex flex-wrap gap-2">
                                            <button
                                                v-for="tabName in shipmentFilters"
                                                :key="tabName"
                                                type="button"
                                                class="rounded-md border bg-card px-3 py-1 text-[12px] font-medium"
                                            >
                                                {{ tabName }}
                                            </button>
                                        </div>
                                        <div
                                            class="overflow-hidden rounded-lg border bg-card shadow-xs"
                                        >
                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[860px] text-[14px]"
                                                >
                                                    <thead
                                                        class="bg-muted/40 text-[12px] text-muted-foreground"
                                                    >
                                                        <tr>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Shipment
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Status
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Terminal
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Route
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Customer
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-right font-medium"
                                                            >
                                                                Miles
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="shipment in shipments"
                                                            :key="shipment.id"
                                                            class="cursor-pointer border-t transition hover:bg-muted/50"
                                                            :data-test="
                                                                'landing-shipment-row-' +
                                                                shipment.id
                                                            "
                                                            @click="
                                                                openShipment(
                                                                    shipment.id
                                                                )
                                                            "
                                                        >
                                                            <td
                                                                class="px-4 py-3 font-semibold"
                                                            >
                                                                {{
                                                                    shipment.id
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <StatusBadge
                                                                    :status="
                                                                        shipment.status
                                                                    "
                                                                />
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    shipment.terminal
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    shipment.origin
                                                                }}
                                                                ->
                                                                {{
                                                                    shipment.destination
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    shipment.customer
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-right"
                                                            >
                                                                {{
                                                                    shipment.miles
                                                                }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === TRIPS"
                                        class="landing-trips-board min-h-full bg-[#f7f7f4] p-3 text-neutral-900"
                                        data-test="landing-trips"
                                    >
                                        <div
                                            class="landing-trips-toolbar mb-3 rounded-xl border bg-white px-3 py-2 shadow-sm"
                                        >
                                            <div
                                                class="landing-trips-filterbar flex items-center gap-2"
                                            >
                                                <div
                                                    class="landing-trips-input flex h-9 w-[300px] items-center gap-2 rounded-lg border bg-white px-3 text-[11px] text-neutral-500"
                                                >
                                                    <Search class="size-3.5" />
                                                    Search in All
                                                </div>
                                                <button
                                                    type="button"
                                                    class="landing-trips-input flex h-9 items-center gap-2 rounded-lg border bg-white px-3 text-[11px] font-semibold text-neutral-700"
                                                >
                                                    Filters
                                                    <span
                                                        class="landing-trips-count rounded-full px-1.5 py-0.5 text-[9px]"
                                                    >
                                                        1
                                                    </span>
                                                </button>
                                                <span
                                                    class="ml-auto rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700"
                                                >
                                                    Next best move · TRP-36
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            class="overflow-x-auto"
                                            data-test="landing-trips-kanban"
                                        >
                                            <div
                                                class="grid min-w-[1180px] grid-cols-4 gap-3"
                                            >
                                                <div
                                                    v-for="column in tripKanbanColumns"
                                                    :key="column.status"
                                                    class="landing-trips-lane flex min-w-0 flex-col overflow-hidden rounded-xl border bg-white text-neutral-900 shadow-xs"
                                                >
                                                    <div
                                                        class="flex shrink-0 items-center border-b px-3 py-2.5"
                                                    >
                                                        <div
                                                            class="flex items-center gap-2 text-[12px] font-semibold"
                                                        >
                                                            <span
                                                                :class="[
                                                                    'size-1.5 rounded-full',
                                                                    column.dotClass,
                                                                ]"
                                                            />
                                                            {{ column.status }}
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="landing-trips-lane-body space-y-2 bg-white p-2"
                                                    >
                                                        <article
                                                            v-for="trip in column.trips"
                                                            :key="trip.id"
                                                            class="landing-trips-card group rounded-xl border bg-white p-3 text-[11px] text-neutral-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                                        >
                                                            <div
                                                                class="mb-2 flex items-start justify-between gap-2"
                                                            >
                                                                <div
                                                                    class="min-w-0 font-semibold"
                                                                >
                                                                    <div
                                                                        class="flex items-center gap-1.5"
                                                                    >
                                                                        <span
                                                                            class="text-[12px] font-semibold text-neutral-950"
                                                                        >
                                                                            {{
                                                                                trip.id
                                                                            }}
                                                                        </span>
                                                                        <span
                                                                            class="text-[10px] font-medium text-neutral-400"
                                                                        >
                                                                            {{
                                                                                trip.shipment
                                                                            }}
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        class="mt-1 truncate text-[10px] font-medium text-neutral-500"
                                                                    >
                                                                        {{
                                                                            trip.mission
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    class="shrink-0 text-right"
                                                                >
                                                                    <p
                                                                        class="text-[16px] font-semibold leading-none tracking-[-0.03em]"
                                                                    >
                                                                        {{
                                                                            trip.score
                                                                        }}
                                                                    </p>
                                                                    <p
                                                                        class="text-[7px] font-semibold uppercase tracking-[0.12em] text-neutral-400"
                                                                    >
                                                                        move score
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <span
                                                                    :class="[
                                                                        'rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em]',
                                                                        trip.riskClass,
                                                                    ]"
                                                                >
                                                                    {{ trip.risk }}
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="landing-trips-route relative space-y-2 pl-4 leading-tight"
                                                            >
                                                                <p
                                                                    class="truncate font-semibold"
                                                                >
                                                                    <span
                                                                        class="landing-trips-stop-dot absolute left-0 mt-1 inline-block size-2 rounded-full bg-green-500"
                                                                    />
                                                                    {{ trip.pickup }}
                                                                </p>
                                                                <p
                                                                    class="text-neutral-500"
                                                                >
                                                                    {{ trip.pickupAt }}
                                                                </p>
                                                                <p
                                                                    class="truncate font-semibold"
                                                                >
                                                                    <span
                                                                        class="landing-trips-stop-dot absolute left-0 mt-1 inline-block size-2 rounded-full bg-red-500"
                                                                    />
                                                                    {{ trip.delivery }}
                                                                </p>
                                                                <p
                                                                    class="text-neutral-500"
                                                                >
                                                                    {{
                                                                        trip.deliveryAt
                                                                    }}
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === SHIPMENT_DETAIL"
                                        class="p-5 md:p-6"
                                        data-test="landing-shipment-detail"
                                    >
                                        <div
                                            class="mb-4 flex items-center justify-between"
                                        >
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <button
                                                    type="button"
                                                    class="rounded-md p-1 text-muted-foreground hover:bg-muted"
                                                    aria-label="Back to shipments"
                                                    data-test="landing-shipment-back"
                                                    @click="
                                                        showScreen(
                                                            SHIPMENTS,
                                                            'Shipments'
                                                        )
                                                    "
                                                >
                                                    <ArrowLeft class="size-4" />
                                                </button>
                                                <h1 class="text-[18px] font-medium">
                                                    Dispatch #{{
                                                        activeShipment.id.replace(
                                                            'SHP-',
                                                            ''
                                                        )
                                                    }}
                                                </h1>
                                                <StatusBadge
                                                    :status="
                                                        activeShipment.status
                                                    "
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                class="rounded-md border bg-card px-3 py-2 text-[12px] font-medium"
                                            >
                                                Actions
                                            </button>
                                        </div>

                                        <div
                                            class="mb-5 rounded-lg border border-green-200 bg-green-50 p-4"
                                        >
                                            <div
                                                class="flex items-center justify-between gap-3"
                                            >
                                                <div
                                                    class="flex items-center gap-3"
                                                >
                                                    <CheckCircle2
                                                        class="size-5 text-green-700"
                                                    />
                                                    <div>
                                                        <div
                                                            class="text-[14px] font-semibold text-green-700"
                                                        >
                                                            {{
                                                                activeShipment.status
                                                            }}
                                                        </div>
                                                        <p
                                                            class="text-[12px] text-muted-foreground"
                                                        >
                                                            Ready to dispatch,
                                                            no movement yet
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="rounded-md bg-green-800 px-3 py-2 text-[12px] font-medium !text-white shadow-sm"
                                                >
                                                    View 1st Trip
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            class="mb-5 grid gap-3 md:grid-cols-4"
                                        >
                                            <QuickStat
                                                label="PROGRESS"
                                                value="0 of 2 stops"
                                                sub="0/0 freight items delivered"
                                            />
                                            <QuickStat
                                                label="BILLABLE MILES"
                                                value="0"
                                                sub="Actual miles pending"
                                            />
                                            <QuickStat
                                                label="RATE TOTAL"
                                                value="$0"
                                                sub="Uninvoiced"
                                            />
                                            <QuickStat
                                                label="CUSTOMER"
                                                :value="activeShipment.customer"
                                                sub="Current"
                                            />
                                        </div>

                                        <div class="mb-4 flex gap-1">
                                            <button
                                                v-for="tabName in shipmentDetailTabs"
                                                :key="tabName"
                                                type="button"
                                                :class="[
                                                    'rounded-md px-3 py-1.5 text-[12px] font-medium',
                                                    activeShipmentTab ===
                                                    tabName
                                                        ? 'bg-muted text-foreground'
                                                        : 'text-muted-foreground hover:bg-muted/60',
                                                ]"
                                                :data-test="
                                                    'landing-shipment-tab-' +
                                                    tabName
                                                "
                                                @click="
                                                    activeShipmentTab = tabName
                                                "
                                            >
                                                {{ tabName }}
                                            </button>
                                        </div>

                                        <div
                                            class="grid gap-4 xl:grid-cols-[1fr_280px]"
                                        >
                                            <div
                                                class="rounded-lg border bg-card p-4 shadow-xs"
                                            >
                                                <div
                                                    class="mb-4 flex items-center justify-between"
                                                >
                                                    <span
                                                        class="text-[14px] font-semibold text-green-700"
                                                    >
                                                        {{
                                                            activeShipmentTab ===
                                                            'Trips'
                                                                ? 'Trip 273'
                                                                : 'Trip 273'
                                                        }}
                                                    </span>
                                                    <span
                                                        class="whitespace-nowrap text-[12px] text-muted-foreground"
                                                    >
                                                        Pending
                                                    </span>
                                                </div>
                                                <p
                                                    class="mb-5 text-[14px] text-muted-foreground"
                                                >
                                                    {{ activeShipment.origin }}
                                                    -
                                                    {{
                                                        activeShipment.destination
                                                    }}
                                                    2/13 7:00 am
                                                </p>
                                                <div class="space-y-5">
                                                    <StopRow
                                                        active
                                                        title="192 S Nixon Rd"
                                                        address="192 S Nixon Rd, State College, PA 16803, USA"
                                                        time="Scheduled: 2/13 7:00 am"
                                                    />
                                                    <StopRow
                                                        title="2021 Anglers Retreat Dr"
                                                        address="2021 Anglers Retreat Dr, Murfreesboro, TN 37129, USA"
                                                        time="Scheduled: 2/13 8:25 pm"
                                                    />
                                                </div>
                                                <div class="mt-5 border-t pt-4">
                                                    <div
                                                        class="mb-3 text-[14px] font-medium"
                                                    >
                                                        Route Overview
                                                    </div>
                                                    <div
                                                        class="mb-3 flex items-center gap-2 text-[14px] text-muted-foreground"
                                                    >
                                                        <MapPin
                                                            class="size-4 text-green-700"
                                                        />
                                                        {{
                                                            activeShipment.origin
                                                        }}
                                                        -
                                                        {{
                                                            activeShipment.destination
                                                        }}
                                                    </div>
                                                    <div
                                                        class="grid gap-3 sm:grid-cols-3"
                                                    >
                                                        <div
                                                            class="rounded-md bg-muted p-3 text-center"
                                                        >
                                                            <div
                                                                class="font-semibold"
                                                            >
                                                                712.6 mi
                                                            </div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Total Distance
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="rounded-md bg-muted p-3 text-center"
                                                        >
                                                            <div
                                                                class="font-semibold"
                                                            >
                                                                11h 13m
                                                            </div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Estimated Time
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="rounded-md bg-muted p-3 text-center"
                                                        >
                                                            <div
                                                                class="font-semibold"
                                                            >
                                                                1
                                                            </div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Segments
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="space-y-4">
                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[14px] font-semibold"
                                                    >
                                                        Overview
                                                    </h2>
                                                    <DetailLine
                                                        label="Shipping Customer"
                                                        :value="
                                                            activeShipment.customer
                                                        "
                                                    />
                                                    <DetailLine
                                                        label="Terminal"
                                                        :value="
                                                            activeShipment.terminal
                                                        "
                                                    />
                                                    <DetailLine
                                                        label="Dispatch type"
                                                        value="Full truck (FTL)"
                                                    />
                                                </div>
                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[14px] font-semibold"
                                                    >
                                                        Details
                                                    </h2>
                                                    <DetailLine
                                                        label="Reference ID"
                                                        value="Not specified"
                                                    />
                                                    <DetailLine
                                                        label="Attention"
                                                        value="None"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === INVOICING"
                                        class="flex h-full min-h-0 flex-col p-5 md:p-6"
                                        data-test="landing-invoicing"
                                    >
                                        <div
                                            class="mb-5 flex shrink-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
                                        >
                                            <div>
                                                <div
                                                    class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                                >
                                                    <Receipt class="size-3.5" />
                                                    Accounting
                                                    <span>/</span>
                                                    Invoices
                                                </div>
                                                <h1 class="text-[18px] font-medium">
                                                    Invoicing
                                                </h1>
                                            </div>
                                            <div
                                                class="flex flex-wrap items-center gap-2"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md border bg-background px-3 text-[12px] font-medium shadow-xs"
                                                >
                                                    Sync accounting
                                                </button>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground shadow-xs"
                                                >
                                                    Create Invoice
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            class="mb-4 grid shrink-0 gap-3 sm:grid-cols-2 xl:grid-cols-4"
                                        >
                                            <QuickStat
                                                v-for="summary in invoiceSummaries"
                                                :key="summary.label"
                                                :label="summary.label"
                                                :value="summary.value"
                                                :sub="summary.sub"
                                            />
                                        </div>

                                        <div
                                            class="grid min-h-0 flex-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]"
                                        >
                                            <div
                                                class="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-lg border bg-card shadow-xs"
                                            >
                                                <div class="shrink-0 border-b p-4">
                                                    <div
                                                        class="mb-3 flex items-center justify-between"
                                                    >
                                                        <h2
                                                            class="text-[14px] font-semibold"
                                                        >
                                                            Invoice Queue
                                                        </h2>
                                                        <span
                                                            class="text-[12px] text-muted-foreground"
                                                        >
                                                            24 open
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="flex h-9 items-center gap-2 rounded-md border bg-background px-3 text-[12px] text-muted-foreground"
                                                    >
                                                        <Search
                                                            class="size-3.5"
                                                        />
                                                        Search invoices,
                                                        dispatches
                                                    </div>
                                                </div>
                                                <div
                                                    class="min-h-0 flex-1 overflow-y-auto overscroll-contain"
                                                    data-test="landing-invoice-queue-list"
                                                    @wheel.stop
                                                >
                                                    <button
                                                        v-for="invoice in invoices"
                                                        :key="invoice.id"
                                                        type="button"
                                                        :class="[
                                                            'w-full border-b p-2.5 text-left transition-colors last:border-b-0 hover:bg-muted/50',
                                                            selectedInvoiceId ===
                                                            invoice.id
                                                                ? 'bg-muted/45'
                                                                : 'bg-card',
                                                        ]"
                                                        :data-test="
                                                            'landing-invoice-row-' +
                                                            invoice.id
                                                        "
                                                        @click="
                                                            selectedInvoiceId =
                                                                invoice.id
                                                        "
                                                    >
                                                        <div
                                                            class="mb-1 flex items-start justify-between gap-3"
                                                        >
                                                            <div>
                                                                <div
                                                                    class="text-[14px] font-semibold"
                                                                >
                                                                    {{
                                                                        invoice.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="text-[12px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        invoice.customer
                                                                    }}
                                                                </div>
                                                            </div>
                                                            <StatusBadge
                                                                :status="
                                                                    invoice.status
                                                                "
                                                            />
                                                        </div>
                                                        <div
                                                            class="truncate text-[12px] text-muted-foreground"
                                                        >
                                                            {{
                                                                invoice.dispatch
                                                            }}
                                                            -
                                                            {{ invoice.route }}
                                                        </div>
                                                        <div
                                                            class="mt-1 flex items-end justify-between gap-3 text-[12px]"
                                                        >
                                                            <div
                                                                class="truncate text-muted-foreground"
                                                            >
                                                                Due
                                                                {{
                                                                    invoice.due
                                                                }}
                                                                ·
                                                                {{
                                                                    invoice.owner
                                                                }}
                                                            </div>
                                                            <span
                                                                class="shrink-0 font-semibold"
                                                            >
                                                                {{
                                                                    invoice.total
                                                                }}
                                                            </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="min-w-0 space-y-4">
                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <div
                                                        class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                                                    >
                                                        <StatusBadge
                                                            :status="
                                                                activeInvoice.status
                                                            "
                                                        />
                                                        <div
                                                            class="sm:text-right"
                                                        >
                                                            <h2
                                                                class="text-[20px] font-semibold"
                                                            >
                                                                {{
                                                                    activeInvoice.id
                                                                }}
                                                            </h2>
                                                            <p
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Created
                                                                {{
                                                                    activeInvoice.created
                                                                }}
                                                                by
                                                                {{
                                                                    activeInvoice.owner
                                                                }}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="grid gap-3 sm:grid-cols-2"
                                                    >
                                                        <div
                                                            class="rounded-md border bg-background p-3"
                                                        >
                                                            <div
                                                                class="mb-1 text-[12px] font-medium text-muted-foreground"
                                                            >
                                                                From
                                                            </div>
                                                            <div
                                                                class="text-[14px] font-semibold"
                                                            >
                                                                Larson Inc
                                                            </div>
                                                            <div
                                                                class="break-words text-[12px] text-muted-foreground"
                                                            >
                                                                Chicago Terminal
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="rounded-md border bg-background p-3"
                                                        >
                                                            <div
                                                                class="mb-1 text-[12px] font-medium text-muted-foreground"
                                                            >
                                                                Bill To
                                                            </div>
                                                            <div
                                                                class="text-[14px] font-semibold"
                                                            >
                                                                {{
                                                                    activeInvoice.customer
                                                                }}
                                                            </div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                {{
                                                                    activeInvoice.billingContact
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[16px] font-semibold"
                                                    >
                                                        Invoice Details
                                                    </h2>
                                                    <div
                                                        class="grid gap-3 text-[14px] sm:grid-cols-4"
                                                    >
                                                        <div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Issue Date
                                                            </div>
                                                            <div
                                                                class="font-medium"
                                                            >
                                                                {{
                                                                    activeInvoice.issued
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Payment Terms
                                                            </div>
                                                            <div
                                                                class="font-medium"
                                                            >
                                                                {{
                                                                    activeInvoice.terms
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Dispatch
                                                            </div>
                                                            <div
                                                                class="font-medium"
                                                            >
                                                                {{
                                                                    activeInvoice.dispatch
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Reference
                                                            </div>
                                                            <div
                                                                class="font-medium"
                                                            >
                                                                {{
                                                                    activeInvoice.reference
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <div
                                                        class="mb-3 flex items-center justify-between"
                                                    >
                                                        <h2
                                                            class="text-[16px] font-semibold"
                                                        >
                                                            Invoice Items
                                                        </h2>
                                                        <button
                                                            type="button"
                                                            class="inline-flex h-7 items-center rounded-md border bg-background px-2 text-[12px] font-medium"
                                                        >
                                                            Import dispatch
                                                            rates
                                                        </button>
                                                    </div>
                                                    <div class="divide-y">
                                                        <div
                                                            v-for="invoiceItem in activeInvoice.items"
                                                            :key="
                                                                invoiceItem.name
                                                            "
                                                            class="flex items-start justify-between gap-4 py-3 text-[14px] first:pt-0 last:pb-0"
                                                        >
                                                            <div
                                                                class="min-w-0"
                                                            >
                                                                <div
                                                                    class="font-medium"
                                                                >
                                                                    {{
                                                                        invoiceItem.name
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="text-[12px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        invoiceItem.note
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="mt-1 text-[11px] text-muted-foreground"
                                                                >
                                                                    Qty
                                                                    {{
                                                                        invoiceItem.qty
                                                                    }}
                                                                    x
                                                                    {{
                                                                        invoiceItem.rate
                                                                    }}
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="shrink-0 text-right font-semibold"
                                                            >
                                                                {{
                                                                    invoiceItem.amount
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="grid gap-3 lg:col-start-2"
                                            >
                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[14px] font-semibold"
                                                    >
                                                        Invoice Summary
                                                    </h2>
                                                    <div
                                                        class="space-y-2 text-[14px]"
                                                    >
                                                        <div
                                                            class="flex items-center justify-between gap-4"
                                                        >
                                                            <span
                                                                class="text-muted-foreground"
                                                            >
                                                                Subtotal
                                                            </span>
                                                            <span
                                                                class="shrink-0 font-medium tabular-nums"
                                                            >
                                                                {{
                                                                    activeInvoice.subtotal
                                                                }}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="flex items-center justify-between gap-4"
                                                        >
                                                            <span
                                                                class="text-muted-foreground"
                                                            >
                                                                Tax
                                                            </span>
                                                            <span
                                                                class="shrink-0 font-medium tabular-nums"
                                                            >
                                                                {{
                                                                    activeInvoice.tax
                                                                }}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="flex items-center justify-between gap-4"
                                                        >
                                                            <span
                                                                class="text-muted-foreground"
                                                            >
                                                                Payments
                                                            </span>
                                                            <span
                                                                class="shrink-0 font-medium tabular-nums"
                                                            >
                                                                {{
                                                                    activeInvoice.payments
                                                                }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="mt-3 flex items-end justify-between gap-4 border-t pt-3"
                                                    >
                                                        <div>
                                                            <div
                                                                class="text-[12px] text-muted-foreground"
                                                            >
                                                                Balance due
                                                            </div>
                                                            <div
                                                                class="text-[20px] font-semibold tabular-nums"
                                                            >
                                                                {{
                                                                    activeInvoice.balance
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[14px] font-semibold"
                                                    >
                                                        Status Timeline
                                                    </h2>
                                                    <div
                                                        class="grid gap-x-4 gap-y-3 sm:grid-cols-2"
                                                    >
                                                        <div
                                                            v-for="step in activeInvoice.timeline"
                                                            :key="step.label"
                                                            class="flex gap-2 text-[12px]"
                                                        >
                                                            <span
                                                                :class="[
                                                                    'mt-1 size-2 rounded-full',
                                                                    step.done
                                                                        ? 'bg-green-600'
                                                                        : 'bg-muted-foreground/35',
                                                                ]"
                                                            />
                                                            <div
                                                                class="min-w-0"
                                                            >
                                                                <div
                                                                    class="font-medium"
                                                                >
                                                                    {{
                                                                        step.label
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="text-[12px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        step.date
                                                                    }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="rounded-lg border bg-card p-4 shadow-xs"
                                                >
                                                    <h2
                                                        class="mb-3 text-[14px] font-semibold"
                                                    >
                                                        Quick Actions
                                                    </h2>
                                                    <div
                                                        class="grid gap-2 sm:grid-cols-2"
                                                    >
                                                        <button
                                                            v-for="action in invoiceActions"
                                                            :key="action"
                                                            type="button"
                                                            class="flex h-8 min-w-0 items-center justify-between gap-2 rounded-md border bg-background px-3 text-[12px] font-medium"
                                                        >
                                                            <span
                                                                class="truncate"
                                                            >
                                                                {{ action }}
                                                            </span>
                                                            <ChevronDown
                                                                class="size-3 shrink-0 rotate-[-90deg]"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === FLEET"
                                        class="p-5 md:p-6"
                                        data-test="landing-fleet"
                                    >
                                        <div
                                            class="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
                                        >
                                            <div>
                                                <div
                                                    class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                                >
                                                    <Truck class="size-3.5" />
                                                    Fleet
                                                    <span>/</span>
                                                    Drivers
                                                </div>
                                                <h1 class="text-[18px] font-medium">
                                                    Fleet
                                                </h1>
                                            </div>
                                            <button
                                                type="button"
                                                class="inline-flex h-8 items-center rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground shadow-xs"
                                            >
                                                Create Driver
                                            </button>
                                        </div>

                                        <div class="grid gap-4 lg:grid-cols-3">
                                            <div
                                                v-for="item in fleetSummary"
                                                :key="item.label"
                                                class="rounded-lg border bg-card p-4 shadow-xs"
                                            >
                                                <div
                                                    class="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                                                >
                                                    {{ item.label }}
                                                </div>
                                                <div
                                                    class="mt-3 text-[24px] font-semibold"
                                                >
                                                    {{ item.value }}
                                                </div>
                                                <p
                                                    class="mt-1 text-[12px] text-muted-foreground"
                                                >
                                                    {{ item.detail }}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            class="mt-5 overflow-hidden rounded-lg border bg-card shadow-xs"
                                        >
                                            <div
                                                class="flex items-center justify-between border-b px-4 py-3"
                                            >
                                                <div>
                                                    <h2
                                                        class="text-[16px] font-semibold"
                                                    >
                                                        Drivers
                                                    </h2>
                                                    <p
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        Current assignments and
                                                        equipment pairing
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md border bg-background px-3 text-[12px] font-medium"
                                                >
                                                    All My Terminals
                                                </button>
                                            </div>
                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[760px] text-[14px]"
                                                >
                                                    <thead
                                                        class="bg-muted/40 text-[12px] text-muted-foreground"
                                                    >
                                                        <tr>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Driver
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Terminal
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Vehicle
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Assignment
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="driver in fleetDrivers"
                                                            :key="driver.id"
                                                            class="border-t"
                                                        >
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <div
                                                                    class="font-semibold"
                                                                >
                                                                    {{
                                                                        driver.name
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="text-[12px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        driver.id
                                                                    }}
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    driver.terminal
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    driver.vehicle
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    driver.assignment
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <StatusBadge
                                                                    :status="
                                                                        driver.status
                                                                    "
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === EXPENSES"
                                        class="p-5 md:p-6"
                                        data-test="landing-expenses"
                                    >
                                        <div
                                            class="mb-5 flex items-center justify-between"
                                        >
                                            <div>
                                                <div
                                                    class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                                >
                                                    <Wallet class="size-3.5" />
                                                    Accounting
                                                    <span>/</span>
                                                    Expenses
                                                </div>
                                                <h1 class="text-[18px] font-medium">
                                                    Expenses
                                                </h1>
                                            </div>
                                            <button
                                                type="button"
                                                class="rounded-md bg-primary px-3 py-2 text-[12px] font-medium text-primary-foreground"
                                            >
                                                Create Expense
                                            </button>
                                        </div>

                                        <div
                                            class="overflow-hidden rounded-lg border bg-card shadow-xs"
                                        >
                                            <div
                                                class="flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                                            >
                                                <div>
                                                    <h2
                                                        class="text-[16px] font-semibold"
                                                    >
                                                        Expense
                                                    </h2>
                                                    <p
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        Reimbursements and
                                                        recurring operating
                                                        costs
                                                    </p>
                                                </div>
                                                <div
                                                    class="flex h-8 items-center gap-2 rounded-md border bg-background px-3 text-[12px] text-muted-foreground"
                                                >
                                                    <Search class="size-3.5" />
                                                    Search expenses
                                                </div>
                                            </div>
                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[820px] text-[14px]"
                                                >
                                                    <thead
                                                        class="bg-muted/40 text-[12px] text-muted-foreground"
                                                    >
                                                        <tr>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Occurred
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Category
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Attributed To
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Description
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-right font-medium"
                                                            >
                                                                Amount
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="expense in expenses"
                                                            :key="expense.id"
                                                            class="border-t"
                                                        >
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    expense.date
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 font-medium"
                                                            >
                                                                {{
                                                                    expense.category
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    expense.entity
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    expense.description
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-right font-semibold"
                                                            >
                                                                {{
                                                                    expense.amount
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <StatusBadge
                                                                    :status="
                                                                        expense.status
                                                                    "
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === SETTLEMENT"
                                        class="p-5 md:p-6"
                                        data-test="landing-settlement"
                                    >
                                        <div
                                            class="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
                                        >
                                            <div>
                                                <div
                                                    class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                                >
                                                    <Scale class="size-3.5" />
                                                    Accounting
                                                    <span>/</span>
                                                    Settlements
                                                </div>
                                                <h1 class="text-[18px] font-medium">
                                                    Settlement
                                                </h1>
                                            </div>
                                            <div class="flex gap-2">
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md border bg-background px-3 text-[12px] font-medium"
                                                >
                                                    Generate Batch
                                                </button>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground"
                                                >
                                                    New Settlement
                                                </button>
                                            </div>
                                        </div>

                                        <div class="grid gap-4 lg:grid-cols-3">
                                            <QuickStat
                                                label="Ready"
                                                value="12 settlements"
                                                sub="$42,880 net pay"
                                            />
                                            <QuickStat
                                                label="Pending Review"
                                                value="4 drivers"
                                                sub="2 deductions flagged"
                                            />
                                            <QuickStat
                                                label="Current Period"
                                                value="Apr 15-30"
                                                sub="Closes in 3 days"
                                            />
                                        </div>

                                        <div
                                            class="mt-5 overflow-hidden rounded-lg border bg-card shadow-xs"
                                        >
                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[820px] text-[14px]"
                                                >
                                                    <thead
                                                        class="bg-muted/40 text-[12px] text-muted-foreground"
                                                    >
                                                        <tr>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Settlement #
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Payee
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Period
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-right font-medium"
                                                            >
                                                                Subtotal
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-right font-medium"
                                                            >
                                                                Deductions
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-right font-medium"
                                                            >
                                                                Net Pay
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="settlement in settlements"
                                                            :key="settlement.id"
                                                            class="border-t"
                                                        >
                                                            <td
                                                                class="px-4 py-3 font-semibold"
                                                            >
                                                                {{
                                                                    settlement.id
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    settlement.payee
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    settlement.period
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-right"
                                                            >
                                                                {{
                                                                    settlement.subtotal
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-right text-muted-foreground"
                                                            >
                                                                {{
                                                                    settlement.deductions
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-right font-semibold"
                                                            >
                                                                {{
                                                                    settlement.netPay
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <StatusBadge
                                                                    :status="
                                                                        settlement.status
                                                                    "
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === CUSTOMERS"
                                        class="p-5 md:p-6"
                                        data-test="landing-customers"
                                    >
                                        <div
                                            class="mb-5 flex items-center justify-between"
                                        >
                                            <div>
                                                <div
                                                    class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                                >
                                                    <Users class="size-3.5" />
                                                    Accounting
                                                    <span>/</span>
                                                    Customers
                                                </div>
                                                <h1 class="text-[18px] font-medium">
                                                    Customers
                                                </h1>
                                            </div>
                                            <button
                                                type="button"
                                                class="rounded-md bg-primary px-3 py-2 text-[12px] font-medium text-primary-foreground"
                                            >
                                                Create Customer
                                            </button>
                                        </div>

                                        <div
                                            class="overflow-hidden rounded-lg border bg-card shadow-xs"
                                        >
                                            <div
                                                class="flex items-center justify-between border-b px-4 py-3"
                                            >
                                                <div>
                                                    <h2
                                                        class="text-[16px] font-semibold"
                                                    >
                                                        Customers
                                                    </h2>
                                                    <p
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        Billing profiles,
                                                        references, and service
                                                        lanes
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md border bg-background px-3 text-[12px] font-medium"
                                                >
                                                    All Terminals
                                                </button>
                                            </div>
                                            <div class="overflow-x-auto">
                                                <table
                                                    class="w-full min-w-[780px] text-[14px]"
                                                >
                                                    <thead
                                                        class="bg-muted/40 text-[12px] text-muted-foreground"
                                                    >
                                                        <tr>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Customer
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Terminal
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Location
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Reference
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Open Balance
                                                            </th>
                                                            <th
                                                                class="px-4 py-3 text-left font-medium"
                                                            >
                                                                Updated
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="customer in customers"
                                                            :key="customer.id"
                                                            class="border-t"
                                                        >
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                <div
                                                                    class="font-semibold"
                                                                >
                                                                    {{
                                                                        customer.name
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="text-[12px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        customer.id
                                                                    }}
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    customer.terminal
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3"
                                                            >
                                                                {{
                                                                    customer.location
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    customer.reference
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 font-semibold"
                                                            >
                                                                {{
                                                                    customer.balance
                                                                }}
                                                            </td>
                                                            <td
                                                                class="px-4 py-3 text-muted-foreground"
                                                            >
                                                                {{
                                                                    customer.updated
                                                                }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === REPORTS"
                                        class="p-5 md:p-6"
                                        data-test="landing-reports"
                                    >
                                        <div class="mb-5">
                                            <div
                                                class="mb-1 flex items-center gap-2 text-[12px] text-muted-foreground"
                                            >
                                                <FileBarChart
                                                    class="size-3.5"
                                                />
                                                Reports
                                            </div>
                                            <h1 class="text-[18px] font-medium">
                                                Reports
                                            </h1>
                                            <p
                                                class="mt-1 text-[14px] text-muted-foreground"
                                            >
                                                Export operational snapshots for
                                                accounting, dispatch, and
                                                management.
                                            </p>
                                        </div>

                                        <div
                                            class="rounded-lg border bg-card p-4 shadow-xs"
                                        >
                                            <div
                                                class="mb-4 flex items-center justify-between"
                                            >
                                                <div>
                                                    <h2
                                                        class="text-[16px] font-semibold"
                                                    >
                                                        Available
                                                    </h2>
                                                    <p
                                                        class="text-[12px] text-muted-foreground"
                                                    >
                                                        Ready-to-run reports
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground"
                                                >
                                                    Generate
                                                </button>
                                            </div>
                                            <div
                                                class="grid gap-3 lg:grid-cols-2"
                                            >
                                                <div
                                                    class="rounded-lg border bg-background p-4"
                                                >
                                                    <div
                                                        class="flex items-center justify-between"
                                                    >
                                                        <div
                                                            class="inline-flex size-9 items-center justify-center rounded-md bg-muted"
                                                        >
                                                            <BarChart3
                                                                class="size-4"
                                                            />
                                                        </div>
                                                        <StatusBadge
                                                            status="Ready"
                                                        />
                                                    </div>
                                                    <h3
                                                        class="mt-4 text-[16px] font-semibold"
                                                    >
                                                        Profit & Loss
                                                    </h3>
                                                    <p
                                                        class="mt-1 text-[14px] text-muted-foreground"
                                                    >
                                                        Revenue, direct costs,
                                                        and operating margin by
                                                        terminal.
                                                    </p>
                                                    <div
                                                        class="mt-4 flex flex-wrap gap-2 text-[12px]"
                                                    >
                                                        <span
                                                            v-for="format in reportFormats"
                                                            :key="format"
                                                            class="rounded-md border bg-muted px-2 py-1 font-medium"
                                                        >
                                                            {{ format }}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="grid gap-3">
                                                    <div
                                                        v-for="report in upcomingReports"
                                                        :key="report.title"
                                                        class="rounded-lg border bg-background p-4"
                                                    >
                                                        <div
                                                            class="flex items-start justify-between gap-3"
                                                        >
                                                            <div>
                                                                <h3
                                                                    class="font-semibold"
                                                                >
                                                                    {{
                                                                        report.title
                                                                    }}
                                                                </h3>
                                                                <p
                                                                    class="mt-1 text-[14px] text-muted-foreground"
                                                                >
                                                                    {{
                                                                        report.description
                                                                    }}
                                                                </p>
                                                            </div>
                                                            <StatusBadge
                                                                status="Draft"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        v-if="screen === SETTINGS"
                                        class="p-4 md:p-6"
                                        data-test="landing-settings"
                                    >
                                        <div
                                            class="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-xl border bg-background shadow-lg shadow-foreground/5"
                                        >
                                            <div
                                                class="flex items-center justify-between border-b px-5 py-4"
                                            >
                                                <div>
                                                    <h1
                                                        class="text-[20px] font-semibold"
                                                    >
                                                        Settings
                                                    </h1>
                                                    <p
                                                        class="text-[14px] text-muted-foreground"
                                                    >
                                                        Manage company
                                                        preferences and workflow
                                                        defaults.
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-flex h-8 items-center rounded-md border bg-background px-3 text-[12px] font-medium"
                                                    @click="
                                                        showScreen(
                                                            DASHBOARD,
                                                            'Dashboard'
                                                        )
                                                    "
                                                >
                                                    Close
                                                </button>
                                            </div>

                                            <div
                                                class="grid min-h-[560px] lg:grid-cols-[260px_1fr]"
                                            >
                                                <aside
                                                    class="border-b bg-muted/25 p-4 lg:border-b-0 lg:border-r"
                                                >
                                                    <p
                                                        class="mb-4 text-[14px] text-muted-foreground"
                                                    >
                                                        Manage your system
                                                        preferences
                                                    </p>
                                                    <div
                                                        class="mb-4 flex h-10 items-center gap-2 rounded-md border bg-background px-3 text-[14px] text-muted-foreground"
                                                    >
                                                        <Search
                                                            class="size-4"
                                                        />
                                                        Search settings
                                                    </div>
                                                    <div class="space-y-1">
                                                        <button
                                                            v-for="section in settingsSections"
                                                            :key="section.label"
                                                            type="button"
                                                            :class="[
                                                                'flex h-10 w-full items-center gap-3 rounded-md px-3 text-left text-[14px] font-medium transition-colors',
                                                                activeSettingsSection ===
                                                                section.label
                                                                    ? 'bg-background text-foreground shadow-xs'
                                                                    : 'text-muted-foreground hover:bg-background/80 hover:text-foreground',
                                                            ]"
                                                            :data-test="
                                                                'landing-settings-section-' +
                                                                section.label
                                                            "
                                                            @click="
                                                                activeSettingsSection =
                                                                    section.label
                                                            "
                                                        >
                                                            <component
                                                                :is="
                                                                    section.icon
                                                                "
                                                                class="size-4"
                                                            />
                                                            {{ section.label }}
                                                        </button>
                                                    </div>
                                                </aside>

                                                <div
                                                    class="min-w-0 overflow-y-auto p-5"
                                                >
                                                    <div
                                                        class="mb-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between"
                                                    >
                                                        <div>
                                                            <h2
                                                                class="text-[24px] font-bold tracking-tight"
                                                            >
                                                                {{
                                                                    activeSettingsSection
                                                                }}
                                                                Settings
                                                            </h2>
                                                            <p
                                                                class="text-[14px] text-muted-foreground"
                                                            >
                                                                {{
                                                                    activeSettings.description
                                                                }}
                                                            </p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            class="inline-flex h-9 items-center rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground shadow-xs"
                                                        >
                                                            Save Settings
                                                        </button>
                                                    </div>

                                                    <div
                                                        class="grid gap-4 xl:grid-cols-[1fr_280px]"
                                                    >
                                                        <div class="space-y-4">
                                                            <div
                                                                v-for="group in activeSettings.groups"
                                                                :key="
                                                                    group.title
                                                                "
                                                                class="rounded-lg border bg-card p-4 shadow-xs"
                                                            >
                                                                <div
                                                                    class="mb-4 flex items-start gap-3"
                                                                >
                                                                    <component
                                                                        :is="
                                                                            group.icon
                                                                        "
                                                                        class="mt-0.5 size-5 text-muted-foreground"
                                                                    />
                                                                    <div>
                                                                        <h3
                                                                            class="text-[16px] font-semibold"
                                                                        >
                                                                            {{
                                                                                group.title
                                                                            }}
                                                                        </h3>
                                                                        <p
                                                                            class="text-[14px] text-muted-foreground"
                                                                        >
                                                                            {{
                                                                                group.description
                                                                            }}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="grid gap-3 md:grid-cols-2"
                                                                >
                                                                    <div
                                                                        v-for="field in group.fields"
                                                                        :key="
                                                                            field.label
                                                                        "
                                                                        class="space-y-1"
                                                                    >
                                                                        <label
                                                                            class="text-[12px] font-medium text-muted-foreground"
                                                                        >
                                                                            {{
                                                                                field.label
                                                                            }}
                                                                        </label>
                                                                        <div
                                                                            :class="[
                                                                                'flex min-h-10 items-center justify-between rounded-md border bg-background px-3 text-[14px]',
                                                                                field.type ===
                                                                                'toggle'
                                                                                    ? 'gap-3'
                                                                                    : '',
                                                                            ]"
                                                                        >
                                                                            <span
                                                                                class="truncate font-medium"
                                                                            >
                                                                                {{
                                                                                    field.value
                                                                                }}
                                                                            </span>
                                                                            <span
                                                                                v-if="
                                                                                    field.type ===
                                                                                    'toggle'
                                                                                "
                                                                                :class="[
                                                                                    'relative h-5 w-9 rounded-full',
                                                                                    field.enabled
                                                                                        ? 'bg-primary'
                                                                                        : 'bg-muted',
                                                                                ]"
                                                                            >
                                                                                <span
                                                                                    :class="[
                                                                                        'absolute top-0.5 size-4 rounded-full bg-background shadow-xs transition-transform',
                                                                                        field.enabled
                                                                                            ? 'translate-x-4'
                                                                                            : 'translate-x-0.5',
                                                                                    ]"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="space-y-4">
                                                            <div
                                                                class="rounded-lg border bg-card p-4 shadow-xs"
                                                            >
                                                                <h3
                                                                    class="mb-3 text-[14px] font-semibold"
                                                                >
                                                                    Tenant Scope
                                                                </h3>
                                                                <div
                                                                    class="space-y-3"
                                                                >
                                                                    <div>
                                                                        <div
                                                                            class="text-[12px] text-muted-foreground"
                                                                        >
                                                                            Company
                                                                        </div>
                                                                        <div
                                                                            class="text-[14px] font-medium"
                                                                        >
                                                                            Larson
                                                                            Inc
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            class="text-[12px] text-muted-foreground"
                                                                        >
                                                                            Active
                                                                            Terminal
                                                                        </div>
                                                                        <div
                                                                            class="text-[14px] font-medium"
                                                                        >
                                                                            Chicago
                                                                            Terminal
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            class="text-[12px] text-muted-foreground"
                                                                        >
                                                                            Last
                                                                            Saved
                                                                        </div>
                                                                        <div
                                                                            class="text-[14px] font-medium"
                                                                        >
                                                                            4
                                                                            minutes
                                                                            ago
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="rounded-lg border bg-card p-4 shadow-xs"
                                                            >
                                                                <h3
                                                                    class="mb-3 text-[14px] font-semibold"
                                                                >
                                                                    Connected
                                                                    Areas
                                                                </h3>
                                                                <div
                                                                    class="space-y-2"
                                                                >
                                                                    <div
                                                                        v-for="area in settingsConnectedAreas"
                                                                        :key="
                                                                            area.label
                                                                        "
                                                                        class="flex items-center justify-between text-[14px]"
                                                                    >
                                                                        <span>
                                                                            {{
                                                                                area.label
                                                                            }}
                                                                        </span>
                                                                        <span
                                                                            :class="[
                                                                                'rounded-md border px-2 py-0.5 text-[10px] font-medium',
                                                                                getStatusClass(
                                                                                    area.status
                                                                                ),
                                                                            ]"
                                                                        >
                                                                            {{
                                                                                area.status
                                                                            }}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <p class="mt-5 text-center text-[14px] text-white/45">
                    Use the nav. Click a row. It’s a live preview of the app — not a static deck.
                </p>

            </section>

            <section
                id="features"
                class="landing-section landing-section-features scroll-mt-20 border-t border-white/10 bg-[#080a0b] px-4 py-10 sm:px-6 sm:py-12"
            >
                <div class="mx-auto max-w-[1240px]">
                    <div class="max-w-[980px]">
                        <p
                            class="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40"
                        >
                            What we built
                        </p>
                        <h2
                            class="mt-5 max-w-4xl text-[40px] font-semibold leading-[1.02] tracking-tight text-white sm:text-[56px]"
                        >
                            Less retyping. Less reconciling. More miles billed.
                        </h2>
                        <p
                            class="mt-6 max-w-3xl text-[18px] leading-8 text-white/64"
                        >
                            Dispatches, drivers, equipment, accessorials, AR, and driver pay live on one record. No hand-offs between dispatch, billing, and the back office.
                        </p>
                    </div>

                    <div class="mt-14 border-t border-white/12">
                        <div
                            v-for="(capability, capabilityIndex) in capabilities"
                            :key="capability.title"
                            class="scroll-reveal group grid grid-cols-1 gap-y-8 border-b border-white/10 py-14 last:border-b-0 lg:grid-cols-12 lg:gap-x-10"
                            :style="{
                                '--reveal-delay':
                                    capabilityIndex * 50 + 'ms',
                            }"
                        >
                            <div
                                class="flex flex-col items-start gap-5"
                                :class="
                                    capabilityIndex % 2 === 0
                                        ? 'lg:col-span-4 lg:col-start-1'
                                        : 'lg:order-2 lg:col-span-4 lg:col-start-9'
                                "
                            >
                                <div
                                    class="flex size-14 items-center justify-center rounded-full bg-white/[0.04] transition duration-300 group-hover:bg-white/[0.06]"
                                >
                                    <component
                                        :is="capability.icon"
                                        class="size-6 text-white/68"
                                    />
                                </div>
                                <p
                                    class="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-white/50"
                                >
                                    {{ capability.label }}
                                </p>
                                <p
                                    class="text-[15px] font-medium leading-relaxed text-white/70"
                                >
                                    {{ capability.summary }}
                                </p>
                                <div
                                    v-if="capability.artifact"
                                    class="capability-artifact mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d0e]/80 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)]"
                                >
                                    <div
                                        class="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-2.5"
                                    >
                                        <span
                                            class="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
                                        >
                                            {{ capability.artifact.heading }}
                                        </span>
                                        <span class="capability-artifact-dot relative flex size-1.5">
                                            <span class="absolute inset-0 rounded-full bg-emerald-400/40" aria-hidden="true" />
                                            <span class="relative size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <ul class="divide-y divide-white/6">
                                        <li
                                            v-for="row in capability.artifact.rows"
                                            :key="(row.tag || row.label) + (row.driver || row.place || row.value)"
                                            class="flex items-center justify-between gap-3 px-4 py-2.5 text-[13px]"
                                            :class="row.emphasis ? 'bg-white/[0.03]' : ''"
                                        >
                                            <template v-if="capability.artifact.kind === 'board'">
                                                <span class="flex items-center gap-2.5 min-w-0">
                                                    <span
                                                        class="capability-tone-dot size-1.5 rounded-full shrink-0"
                                                        :class="{
                                                            'bg-emerald-400': row.tone === 'go',
                                                            'bg-amber-400': row.tone === 'wait',
                                                            'bg-rose-400': row.tone === 'flag',
                                                            'bg-white/40': row.tone === 'done',
                                                        }"
                                                        aria-hidden="true"
                                                    />
                                                    <span class="font-mono text-[11px] text-white/60 shrink-0">{{ row.tag }}</span>
                                                    <span class="truncate text-white/82">{{ row.driver }}</span>
                                                </span>
                                                <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/55 shrink-0">{{ row.state }}</span>
                                            </template>
                                            <template v-else-if="capability.artifact.kind === 'stops'">
                                                <span class="flex items-center gap-2.5 min-w-0">
                                                    <span class="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 w-12 shrink-0">{{ row.label }}</span>
                                                    <span class="truncate text-white/82">{{ row.place }}</span>
                                                </span>
                                                <span class="font-mono text-[12px] text-white/60 shrink-0">{{ row.time }}</span>
                                            </template>
                                            <template v-else>
                                                <span class="text-white/72 truncate">{{ row.label }}</span>
                                                <span
                                                    class="shrink-0 font-mono text-[12px]"
                                                    :class="row.emphasis ? 'text-white' : 'text-white/82'"
                                                >
                                                    {{ row.value }}
                                                </span>
                                            </template>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                :class="
                                    capabilityIndex % 2 === 0
                                        ? 'lg:col-span-7 lg:col-start-6'
                                        : 'lg:col-span-7 lg:col-start-1'
                                "
                            >
                                <h3
                                    class="text-[32px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[44px]"
                                >
                                    {{ capability.title }}
                                </h3>
                                <p
                                    class="mt-6 text-[20px] leading-9 text-white/66"
                                >
                                    {{ capability.description }}
                                </p>
                                <p
                                    class="mt-8 text-[20px] font-medium leading-8 text-white/88"
                                >
                                    {{ capability.pull }}
                                </p>
                                <dl
                                    class="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/12 pt-6"
                                >
                                    <div
                                        v-for="metric in capability.metrics"
                                        :key="metric.label"
                                        class="flex items-baseline gap-2"
                                    >
                                        <dt
                                            class="font-mono text-[12px] uppercase tracking-[0.14em] text-white/45"
                                        >
                                            {{ metric.label }}
                                        </dt>
                                        <dd
                                            class="text-[16px] font-semibold text-white/82"
                                        >
                                            {{ metric.value }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="integrations"
                class="landing-section landing-integrations-section scroll-mt-20 border-y px-4 py-10 sm:px-6 sm:py-12"
            >
                <div class="mx-auto max-w-[920px]">
                    <div class="max-w-[920px]">
                        <p class="integration-kicker">
                            Keep what works
                        </p>
                        <h2 class="integration-heading">
                            Native integrations with the tools your fleet already runs.
                        </h2>
                        <p class="integration-lede">
                            Two-way sync across the systems you already pay for — ELDs, load boards, accounting, and money tools. No nightly batch, no flat files. Bolt is phasing in native connectors across each category so dispatch, billing, and settlements stop living in five different tabs.
                        </p>
                    </div>

                    <div class="integration-board mt-14">
                        <article
                            v-for="(
                                integration, integrationIndex
                            ) in featuredIntegrations"
                            :key="integration.name"
                            class="integration-connector scroll-reveal group"
                            :style="{
                                '--reveal-delay':
                                    integrationIndex * 60 + 'ms',
                            }"
                        >
                            <div class="integration-connector-main">
                                <div>
                                    <span class="integration-type">
                                        {{ integration.type }}
                                    </span>
                                    <h3 class="integration-name">
                                        {{ integration.name }}
                                    </h3>
                                </div>
                                <p class="integration-description">
                                    {{ integration.description }}
                                </p>
                            </div>

                            <span class="integration-sync">
                                <span class="integration-sync-dot" aria-hidden="true" />
                                <template
                                    v-for="(syncLabel, syncIndex) in integration.sync"
                                    :key="syncLabel"
                                >
                                    <span>{{ syncLabel }}</span>
                                    <span
                                        v-if="syncIndex < integration.sync.length - 1"
                                        class="integration-sync-separator"
                                        aria-hidden="true"
                                    >
                                        ·
                                    </span>
                                </template>
                            </span>

                            <div class="integration-vendor-row">
                                <div
                                    v-for="vendor in integration.vendors"
                                    :key="vendor.name"
                                    class="integration-vendor"
                                >
                                    <span
                                        class="integration-vendor-mark"
                                        :class="[
                                            vendor.logo
                                                ? 'integration-vendor-mark-logo-frame'
                                                : 'integration-vendor-mark-fallback',
                                            vendor.logo && vendor.logoStyle
                                                ? vendor.logoStyle
                                                      .split(' ')
                                                      .map(
                                                          (style) =>
                                                              'integration-vendor-logo-' +
                                                              style
                                                      )
                                                : [],
                                            !vendor.logo && vendor.style
                                                ? vendor.style
                                                      .split(' ')
                                                      .map(
                                                          (style) =>
                                                              'integration-vendor-mark-' +
                                                              style
                                                      )
                                                : [],
                                        ]"
                                        :style="
                                            vendor.logo
                                                ? undefined
                                                : { backgroundColor: vendor.color }
                                        "
                                        aria-hidden="true"
                                    >
                                        <img
                                            v-if="vendor.logo"
                                            :src="integrationLogoPath(vendor.logo)"
                                            alt=""
                                            class="integration-vendor-logo"
                                            loading="lazy"
                                        />
                                        <span v-else>{{ vendor.mark }}</span>
                                    </span>
                                    <span class="integration-vendor-name">
                                        {{ vendor.name }}
                                    </span>
                                </div>
                            </div>

                            <div class="integration-point-grid">
                                <div
                                    v-for="point in integration.points"
                                    :key="point"
                                    class="integration-point"
                                >
                                    <CheckCircle2
                                        class="mt-0.5 size-5 shrink-0"
                                    />
                                    <span>{{ point }}</span>
                                </div>
                            </div>
                        </article>

                    </div>

                    <ol class="integration-handoff-flow mt-16">
                        <li
                            v-for="(handoff, handoffIndex) in integrationHandoffs"
                            :key="handoff.title"
                            class="integration-handoff-row scroll-reveal"
                            :style="{
                                '--reveal-delay':
                                    handoffIndex * 50 + 'ms',
                            }"
                        >
                            <span class="integration-handoff-step">
                                {{
                                    String(handoffIndex + 1).padStart(2, '0')
                                }}
                            </span>
                            <div class="integration-handoff-path">
                                <component
                                    :is="handoff.icon"
                                    class="integration-handoff-path-icon size-6 shrink-0"
                                />
                                <span class="integration-handoff-source">{{
                                    handoff.source
                                }}</span>
                                <span
                                    class="integration-handoff-line"
                                    aria-hidden="true"
                                />
                                <span class="integration-handoff-dest">{{
                                    handoff.destination
                                }}</span>
                            </div>
                            <div class="integration-handoff-copy">
                                <h3 class="integration-handoff-title">
                                    {{ handoff.title }}
                                </h3>
                                <p class="integration-handoff-description">
                                    {{ handoff.description }}
                                </p>
                            </div>
                        </li>
                    </ol>

                    <!-- Roadmap hidden until partner integrations have real commitments; flip v-if to true to restore. -->
                    <div v-if="false" class="partner-roadmap mt-20">
                        <div class="partner-roadmap-head">
                            <span class="partner-roadmap-kicker">On the roadmap</span>
                            <p class="partner-roadmap-title">
                                More fleets, more tools to plug in. We’re working through them.
                            </p>
                        </div>
                        <ul class="partner-roadmap-grid">
                            <li
                                v-for="partner in partnerRoadmap"
                                :key="partner.name"
                                class="partner-roadmap-tile scroll-reveal"
                            >
                                <span class="partner-roadmap-name">{{ partner.name }}</span>
                                <span
                                    class="partner-roadmap-status"
                                    :class="{ 'partner-roadmap-status-live': partner.status === 'Live' }"
                                >
                                    {{ partner.status }}
                                </span>
                            </li>
                        </ul>
                        <a
                            href="mailto:integrations@bolttms.com?subject=Integration%20request"
                            class="partner-roadmap-request"
                        >
                            <Plug class="size-4" />
                            Request an integration
                            <span class="partner-roadmap-request-arrow" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Testimonials hidden until we have real customer quotes; flip v-if to true to restore. -->
            <section
                v-if="false"
                id="testimonials"
                class="landing-section landing-section-testimonials scroll-mt-20 border-b border-white/10 bg-[#080a0b] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20"
            >
                <div class="mx-auto max-w-[1240px]">
                    <div
                        class="grid gap-8 lg:gap-10 xl:grid-cols-12 xl:items-start xl:gap-x-12"
                    >
                        <div class="shrink-0 lg:max-w-2xl xl:col-span-4 xl:max-w-none">
                            <p
                                class="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40"
                            >
                                Fleets that switched
                            </p>
                            <h2
                                class="mt-5 text-[40px] font-semibold leading-[1.04] tracking-tight text-white sm:text-[52px]"
                            >
                                What changed when they ditched the old stack.
                            </h2>
                            <p
                                class="mt-6 max-w-md text-[17px] leading-8 text-white/64"
                            >
                                Owners, dispatchers, and ops leads who switched off the old stack. Here’s what changed.
                            </p>
                        </div>
                        <div
                            class="landing-testimonials-grid grid min-w-0 gap-5 sm:grid-cols-2 xl:col-span-8"
                        >
                            <figure
                                v-for="(testimonial, testimonialIndex) in testimonials"
                                :key="testimonial.name"
                                class="testimonial-card scroll-reveal flex h-full min-h-0 flex-col gap-6 rounded-[20px] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm"
                                :class="{ 'testimonial-lead': testimonial.lead }"
                                :style="{ '--reveal-delay': testimonialIndex * 60 + 'ms' }"
                            >
                                <span
                                    class="testimonial-quote-mark"
                                    aria-hidden="true"
                                >
                                    &ldquo;
                                </span>
                                <blockquote
                                    class="leading-7 text-white/82"
                                    :class="testimonial.lead ? '' : 'text-[15px]'"
                                >
                                    {{ testimonial.quote }}
                                </blockquote>
                                <span
                                    v-if="testimonial.outcome"
                                    class="testimonial-outcome"
                                >
                                    <span class="testimonial-outcome-value">{{ testimonial.outcome.value }}</span>
                                    <span class="testimonial-outcome-label">{{ testimonial.outcome.label }}</span>
                                </span>
                                <figcaption class="mt-auto flex items-center gap-3 border-t border-white/8 pt-5">
                                    <span
                                        class="testimonial-avatar inline-flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-semibold tracking-[0.08em]"
                                    >
                                        {{ testimonial.initials }}
                                    </span>
                                    <span class="flex flex-col">
                                        <span class="text-[14px] font-semibold text-white">
                                            {{ testimonial.name }}
                                        </span>
                                        <span class="text-[12px] text-white/55">
                                            {{ testimonial.role }} · {{ testimonial.company }}
                                        </span>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="get-started"
                class="landing-section landing-section-get-started scroll-mt-20 border-t border-white/[0.07] bg-[#050606] px-4 py-10 sm:px-6 sm:py-12"
            >
                <div class="mx-auto max-w-[820px] text-center">
                    <p
                        class="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40"
                    >
                        Get started
                    </p>
                    <h2
                        class="mt-5 text-[36px] font-semibold leading-[1.04] tracking-tight text-white sm:text-[48px]"
                    >
                        Operational on
                        <span class="landing-get-started-pencil-strike">day</span>
                        <span class="landing-get-started-correction">hour</span>
                        <span class="landing-get-started-headline-tail"> one.</span>
                    </h2>
                    <p class="mt-6 text-[17px] leading-8 text-white/64">
                        Sign up. Connect. Run.
                    </p>
                    <ul class="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                        <li
                            v-for="point in [
                                '7 days free. No contract.',
                                'Connect accounting, invoicing, and telematics in minutes — e.g. QuickBooks Online and Samsara when you use them.',
                                'Invite your dispatch team once the trial proves it.',
                            ]"
                            :key="point"
                            class="flex items-start gap-3 text-[14px] leading-6 text-white/72"
                        >
                            <CheckCircle2 class="mt-0.5 size-4 shrink-0 text-emerald-400/80" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <a
                            href="https://app.bolttms.com/register?step=registration"
                            class="landing-cta inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-medium text-black shadow-xs transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]"
                        >
                            Start your free trial
                        </a>
                        <a
                            href="https://app.bolttms.com/"
                            class="landing-hero-secondary inline-flex h-12 items-center gap-2 rounded-full border border-white/14 px-6 text-[14px] font-medium text-white/72 transition hover:border-white/28 hover:text-white"
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <footer class="landing-footer border-t border-white/10 bg-[#050606] px-4 py-10 sm:px-6 sm:py-12">
            <div class="mx-auto max-w-[1240px]">
                <div class="grid gap-12 lg:grid-cols-12 lg:gap-x-10">
                    <div class="lg:col-span-4">
                        <a href="#landing-top" class="inline-flex items-center" aria-label="Bolt TMS">
                            <img :src="landingLogo" alt="Bolt TMS" class="h-7 w-auto" />
                        </a>
                        <p class="mt-5 max-w-sm text-[14px] leading-7 text-white/55">
                            Built to replace what you’ve got — not duct-tape it.
                        </p>
                        <div class="mt-6 flex items-center gap-2">
                            <span class="landing-footer-status size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                            <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                                All systems operational
                            </span>
                        </div>
                    </div>
                    <nav
                        class="grid gap-10 sm:grid-cols-4 lg:col-span-8"
                        aria-label="Footer navigation"
                    >
                        <div v-for="column in footerColumns" :key="column.heading">
                            <h3 class="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                                {{ column.heading }}
                            </h3>
                            <ul class="mt-5 space-y-3">
                                <li v-for="link in column.links" :key="link.label">
                                    <a
                                        :href="link.href"
                                        class="text-[14px] text-white/72 transition hover:text-white"
                                    >
                                        {{ link.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-7 sm:flex-row sm:items-center">
                    <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                        © {{ currentYear }} Bolt System · Built in Nashville, TN
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { computed, defineComponent, h, onMounted, onUnmounted, ref } from 'vue'
import logoFull from '../../assets/img/logo-full.png?url'
import logoFullYellowWhite from '../../assets/img/logo-full-yellow-white.png?url'
import {
    ArrowLeft,
    BarChart3,
    Bell,
    Calendar,
    CheckCircle2,
    ChevronDown,
    Circle,
    CircleDot,
    Clock,
    FileBarChart,
    FileText,
    LayoutDashboard,
    Lock,
    Megaphone,
    Menu,
    Moon,
    MapPin,
    Navigation,
    Package,
    Plug,
    PlusCircle,
    Receipt,
    RefreshCw,
    Scale,
    Search,
    Settings,
    Sun,
    Truck,
    Users,
    Wallet,
} from 'lucide-vue-next'
import {
    capabilities,
    featuredIntegrations,
    footerColumns,
    heroStats,
    integrationHandoffs,
    partnerRoadmap,
    testimonials,
} from '../../content'

const DASHBOARD = 'dashboard'
const SHIPMENTS = 'shipments'
const TRIPS = 'dispatch'
const SHIPMENT_DETAIL = 'shipment-detail'
const INVOICING = 'invoicing'
const FLEET = 'fleet'
const EXPENSES = 'expenses'
const SETTLEMENT = 'settlement'
const CUSTOMERS = 'customers'
const REPORTS = 'reports'
const SETTINGS = 'settings'
const basePath = import.meta.env.BASE_URL || '/'

const screen = ref(DASHBOARD)
const activeShipmentId = ref('SHP-91')
const activeShipmentTab = ref('Stops')
const activeNavigationLabel = ref('Dashboard')
const selectedInvoiceId = ref('INV-1048')
const activeSettingsSection = ref('General')
const isLightMode = ref(true)

const landingLogo = computed(() =>
    isLightMode.value ? logoFull : logoFullYellowWhite
)

function toggleLandingTheme() {
    isLightMode.value = !isLightMode.value
}

const currentYear = new Date().getFullYear()
const buildSignature = 'live workspace'

let revealObserver = null

const REVEAL_THRESHOLD = 0.16

onMounted(() => {
    if (typeof window === 'undefined') {
        return
    }

    const landingPage = document.getElementById('landing-top')
    const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        document
            .querySelectorAll('.scroll-reveal')
            .forEach((node) => node.classList.add('is-revealed'))
        return
    }

    landingPage?.classList.add('is-reveal-ready')

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                const node = entry.target
                node.classList.add('is-revealing')
                node.classList.add('is-revealed')
                node.addEventListener(
                    'animationend',
                    () => node.classList.remove('is-revealing'),
                    { once: true }
                )
                revealObserver.unobserve(node)
            })
        },
        { rootMargin: '0px 0px -10% 0px', threshold: REVEAL_THRESHOLD }
    )

    document
        .querySelectorAll('.scroll-reveal')
        .forEach((node) => revealObserver.observe(node))
})

onUnmounted(() => {
    revealObserver?.disconnect()
    revealObserver = null
    document.getElementById('landing-top')?.classList.remove('is-reveal-ready')
})

const shipments = [
    {
        id: 'SHP-92',
        status: 'Approved',
        terminal: 'Volkman Ltd',
        pickup: 'Feb 13, 2026 7:00 AM',
        delivery: 'Feb 13, 2026 8:55 PM',
        origin: 'State College, PA',
        destination: 'Murfreesboro, TN',
        customer: 'Atlas Equipment Co.',
        miles: '0 mi',
    },
    {
        id: 'SHP-91',
        status: 'Complete',
        terminal: 'Volkman Ltd',
        pickup: 'Feb 10, 2026 8:00 AM',
        delivery: 'Feb 10, 2026 9:48 PM',
        origin: 'Murfreesboro, TN',
        destination: 'State College, PA',
        customer: 'Atlas Equipment Co.',
        miles: '711 mi',
    },
    {
        id: 'SHP-89',
        status: 'In Transit',
        terminal: 'Jakubowski PLC',
        pickup: 'Feb 11, 2026 12:49 PM',
        delivery: 'Feb 12, 2026 12:49 PM',
        origin: 'South Rebekaport, MD',
        destination: 'N. Faustinochester, NY',
        customer: 'UrbanCore Safety Gear',
        miles: '807 mi',
    },
    {
        id: 'SHP-88',
        status: 'On Hold',
        terminal: 'Jakubowski PLC',
        pickup: 'Mar 8, 2026 4:57 AM',
        delivery: 'Mar 9, 2026 4:57 AM',
        origin: 'Port Antonette, CO',
        destination: 'West Chetshire, NJ',
        customer: 'UrbanCore Safety Gear',
        miles: '761 mi',
    },
    {
        id: 'SHP-86',
        status: 'Cancelled',
        terminal: 'Jakubowski PLC',
        pickup: 'Feb 14, 2026 9:08 PM',
        delivery: 'Feb 15, 2026 9:08 PM',
        origin: 'East Era, NV',
        destination: 'South Irmabury, TX',
        customer: 'UrbanCore Safety Gear',
        miles: '252 mi',
    },
]

const sidebarItems = [
    {
        icon: LayoutDashboard,
        label: 'Dashboard',
        screen: DASHBOARD,
        testId: 'landing-sidebar-dashboard',
    },
    {
        icon: Package,
        items: [
            { active: true, label: 'Shipments', screen: SHIPMENTS },
            { active: false, label: 'Templates', screen: SHIPMENTS },
        ],
        label: 'Shipments',
        screen: SHIPMENTS,
        testId: 'landing-sidebar-shipments',
    },
    {
        icon: Navigation,
        label: 'Trips',
        screen: TRIPS,
        testId: 'landing-sidebar-trips',
    },
    {
        icon: Truck,
        items: [
            { active: true, label: 'Drivers', screen: FLEET },
            { active: false, label: 'Vehicles', screen: FLEET },
            { active: false, label: 'Carriers', screen: FLEET },
        ],
        label: 'Fleet',
        screen: FLEET,
        testId: 'landing-sidebar-fleet',
    },
    {
        icon: Receipt,
        items: [
            { active: true, label: 'Invoices', screen: INVOICING },
            { active: false, label: 'Billing Rates', screen: INVOICING },
        ],
        label: 'Invoicing',
        screen: INVOICING,
        testId: 'landing-sidebar-invoicing',
    },
    {
        icon: Wallet,
        label: 'Expenses',
        screen: EXPENSES,
        testId: 'landing-sidebar-expenses',
    },
    {
        icon: Scale,
        items: [
            { active: true, label: 'Settlements', screen: SETTLEMENT },
            { active: false, label: 'Pay Rates', screen: SETTLEMENT },
            { active: false, label: 'Pay Periods', screen: SETTLEMENT },
        ],
        label: 'Settlement',
        screen: SETTLEMENT,
        testId: 'landing-sidebar-settlement',
    },
    {
        icon: Users,
        label: 'Customers',
        screen: CUSTOMERS,
        testId: 'landing-sidebar-customers',
    },
    {
        icon: FileBarChart,
        label: 'Reports',
        screen: REPORTS,
        testId: 'landing-sidebar-reports',
    },
]

const metrics = [
    {
        title: 'Drivers',
        value: '3',
        sub: '/15',
        progress: 20,
        label: '20% utilization',
        icon: Users,
        clickable: false,
        items: [
            { label: 'On Duty', value: '3' },
            { label: 'Available', value: '12' },
        ],
    },
    {
        title: 'Active Trips',
        value: '108',
        progress: 0,
        label: '0 of 108 completed',
        icon: Navigation,
        clickable: true,
        items: [
            { label: 'Scheduled', shortLabel: 'Sched.', value: '62' },
            { label: 'In Transit', shortLabel: 'Transit', value: '46' },
        ],
    },
    {
        title: 'Fleet',
        value: '5',
        sub: '/30',
        progress: 17,
        label: '17% utilization',
        icon: Truck,
        clickable: false,
        items: [
            { label: 'Trucks', value: '3/15' },
            { label: 'Trailers', value: '2/15' },
        ],
    },
    {
        title: 'Dispatches',
        value: '28',
        progress: 0,
        label: '0 of 28 completed',
        icon: Package,
        clickable: true,
        items: [
            { label: 'Pending', shortLabel: 'Pending', value: '7' },
            { label: 'Active', value: '21' },
        ],
    },
]

const fleetSummary = [
    { label: 'Drivers', value: '18', detail: '12 on duty, 6 available' },
    { label: 'Power Units', value: '15', detail: '3 in maintenance queue' },
    { label: 'Trailers', value: '27', detail: '21 paired to active work' },
]

const fleetDrivers = [
    {
        id: 'DRV-1042',
        name: 'John Martinez',
        terminal: 'Chicago Terminal',
        vehicle: 'TRK-402 / VAN-18',
        assignment: 'Chicago, IL -> Dallas, TX',
        status: 'In Transit',
    },
    {
        id: 'DRV-1098',
        name: 'Diane Roberts',
        terminal: 'Denver Terminal',
        vehicle: 'TRK-115 / REF-09',
        assignment: 'Denver, CO -> Phoenix, AZ',
        status: 'Assigned',
    },
    {
        id: 'DRV-1120',
        name: 'Samir Khan',
        terminal: 'Chicago Terminal',
        vehicle: 'TRK-240',
        assignment: 'Available at Terminal 2',
        status: 'Ready',
    },
    {
        id: 'DRV-1184',
        name: 'Paula Liang',
        terminal: 'Atlanta Terminal',
        vehicle: 'TRK-088 / VAN-31',
        assignment: 'Atlanta, GA -> Miami, FL',
        status: 'In Transit',
    },
]

const expenses = [
    {
        id: 'EXP-3341',
        date: 'Apr 23',
        category: 'Fuel',
        entity: 'TRK-402',
        description: 'Pilot Travel Center - Memphis',
        amount: '$684.21',
        status: 'Approved',
    },
    {
        id: 'EXP-3338',
        date: 'Apr 22',
        category: 'Lumper',
        entity: 'SHP-1842',
        description: 'Receiver unload fee',
        amount: '$210.00',
        status: 'Pending',
    },
    {
        id: 'EXP-3331',
        date: 'Apr 21',
        category: 'Maintenance',
        entity: 'TRK-115',
        description: 'Roadside tire replacement',
        amount: '$1,248.90',
        status: 'Approved',
    },
    {
        id: 'EXP-3327',
        date: 'Apr 19',
        category: 'Recurring',
        entity: 'Terminal',
        description: 'Yard parking - weekly',
        amount: '$475.00',
        status: 'Paid',
    },
]

const settlements = [
    {
        id: 'SET-2048',
        payee: 'John Martinez',
        period: 'Apr 15-30',
        subtotal: '$4,820.00',
        deductions: '$312.40',
        netPay: '$4,507.60',
        status: 'Ready',
    },
    {
        id: 'SET-2047',
        payee: 'Diane Roberts',
        period: 'Apr 15-30',
        subtotal: '$3,940.00',
        deductions: '$0.00',
        netPay: '$3,940.00',
        status: 'Pending',
    },
    {
        id: 'SET-2042',
        payee: 'Paula Liang',
        period: 'Apr 1-15',
        subtotal: '$5,120.00',
        deductions: '$180.00',
        netPay: '$4,940.00',
        status: 'Paid',
    },
]

const customers = [
    {
        id: 'CUS-2201',
        name: 'Northstar Grocers',
        terminal: 'Chicago Terminal',
        location: 'Memphis, TN',
        reference: 'NSG-1048',
        balance: '$4,892.75',
        updated: 'Today',
    },
    {
        id: 'CUS-2187',
        name: 'Prairie Tools Co.',
        terminal: 'Omaha Terminal',
        location: 'Tulsa, OK',
        reference: 'PTC-2219',
        balance: '$0.00',
        updated: 'Apr 23',
    },
    {
        id: 'CUS-2144',
        name: 'Harborline Supply',
        terminal: 'Savannah Terminal',
        location: 'Raleigh, NC',
        reference: 'HLS-7093',
        balance: '$2,275.00',
        updated: 'Apr 22',
    },
    {
        id: 'CUS-2098',
        name: 'Cascadia Paper',
        terminal: 'Portland Terminal',
        location: 'Reno, NV',
        reference: 'CP-44018',
        balance: '$8,430.50',
        updated: 'Apr 20',
    },
]

const reportFormats = ['PDF', 'CSV', 'Email']

const upcomingReports = [
    {
        title: 'Aging Report',
        description: 'Open receivables by customer and due date.',
    },
    {
        title: 'Driver Performance',
        description: 'Miles, revenue, exceptions, and on-time delivery.',
    },
    {
        title: 'Lane Analysis',
        description: 'Volume, margin, and accessorial trends by lane.',
    },
]

const matrixRows = [
    {
        status: 'Pending',
        color: 'bg-neutral-400',
        overdue: '2',
        today: '3',
        tomorrow: '1',
        week: '1',
        later: '0',
        total: '7',
    },
    {
        status: 'Approved',
        color: 'bg-blue-500',
        overdue: '1',
        today: '4',
        tomorrow: '2',
        week: '5',
        later: '3',
        total: '15',
    },
    {
        status: 'Assigned',
        color: 'bg-violet-500',
        overdue: '-',
        today: '2',
        tomorrow: '3',
        week: '4',
        later: '1',
        total: '10',
    },
    {
        status: 'Dispatched',
        color: 'bg-indigo-500',
        overdue: '-',
        today: '5',
        tomorrow: '4',
        week: '6',
        later: '2',
        total: '17',
    },
    {
        status: 'En Route',
        color: 'bg-amber-500',
        overdue: '1',
        today: '8',
        tomorrow: '6',
        week: '12',
        later: '4',
        total: '31',
    },
    {
        status: 'In Transit',
        color: 'bg-green-500',
        overdue: '-',
        today: '6',
        tomorrow: '5',
        week: '14',
        later: '6',
        total: '31',
    },
]

const drivers = [
    {
        name: 'John Martinez',
        detail: 'TRK-402 - Chicago -> Dallas',
        status: 'In Transit',
    },
    {
        name: 'Diane Roberts',
        detail: 'TRK-115 - Denver -> Phoenix',
        status: 'Assigned',
    },
    {
        name: 'Samir Khan',
        detail: 'TRK-240 - Available at Terminal 2',
        status: 'Complete',
    },
    {
        name: 'Paula Liang',
        detail: 'TRK-088 - Atlanta -> Miami',
        status: 'In Transit',
    },
]

const fleetMapMarkers = [
    {
        label: 'TRK-402',
        left: '18%',
        statusClass: 'border-blue-500 text-blue-600',
        top: '58%',
    },
    {
        label: 'TRK-115',
        left: '56%',
        statusClass: 'border-violet-500 text-violet-600',
        top: '35%',
    },
    {
        label: 'TRK-240',
        left: '74%',
        statusClass: 'border-green-600 text-green-700',
        top: '68%',
    },
    {
        label: 'TRK-088',
        left: '34%',
        statusClass: 'border-blue-500 text-blue-600',
        top: '21%',
    },
]

const shipmentFilters = [
    'All',
    'Draft',
    'Approved',
    'In Transit',
    'Complete',
    'Cancelled',
]

const tripKanbanColumns = [
    {
        automation: 'score first',
        dotClass: 'bg-slate-400',
        goal: 'Prioritize the shipments that need a decision.',
        status: 'Pending',
        trips: [
            {
                action: 'Assign now',
                bonus: '+18 min saved if moved now',
                combo: 'Driver match',
                delivery: 'Welch Ltd, South Kenview, KS',
                deliveryAt: 'Apr 25, 12:30 AM',
                driver: 'Audra Kohler',
                eta: 'Driver match ready',
                id: 'TRP-36',
                initials: 'AK',
                meterLabel: 'cover meter',
                miles: '151 mi',
                mission: 'Beat the first customer call',
                pickup: "Hettinger, Jacobson and O'Kon, East Brade...",
                pickupAt: 'Apr 24, 2:30 AM',
                points: '+420 xp',
                progress: 28,
                risk: 'Hot',
                riskClass: 'border-amber-200 bg-amber-50 text-amber-700',
                score: '94',
                shipment: 'SHP-24',
                tier: 'A1',
            },
            {
                action: 'Tender',
                bonus: '2 trailers nearby',
                combo: 'Capacity play',
                delivery: 'Hagenes and Sons, New Raina, ME',
                deliveryAt: 'May 28, 10:26 PM',
                driver: 'Kareem Lynch',
                eta: 'Slot opens 10:45',
                id: 'TRP-34',
                initials: 'KL',
                meterLabel: 'capacity fit',
                miles: '244 mi',
                mission: 'Grab the cleanest trailer match',
                pickup: 'Durgan-Veum, Vonview, LA',
                pickupAt: 'May 28, 12:26 AM',
                points: '+310 xp',
                progress: 36,
                risk: 'Ready',
                riskClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
                score: '88',
                shipment: 'SHP-23',
                tier: 'B2',
            },
            {
                action: 'Watch',
                bonus: 'No check call yet',
                combo: 'Hold lane',
                delivery: 'Mayert Inc, Caleburgh, MO',
                deliveryAt: 'May 9, 7:27 AM',
                driver: 'Franz Walker MD',
                eta: 'Needs update',
                id: 'TRP-30',
                initials: 'FW',
                meterLabel: 'attention',
                miles: '243 mi',
                mission: 'Keep it from becoming urgent',
                pickup: 'Watsica Group, Lake Margaret, MT',
                pickupAt: 'May 8, 9:27 AM',
                points: '+120 xp',
                progress: 18,
                risk: 'Check',
                riskClass: 'border-slate-200 bg-slate-50 text-slate-600',
                score: '71',
                shipment: 'SHP-22',
                tier: 'C3',
            },
        ],
    },
    {
        automation: 'hold capacity',
        dotClass: 'bg-violet-500',
        goal: 'Keep the right driver on the right freight.',
        status: 'Assigned',
        trips: [
            {
                action: 'Confirm',
                bonus: 'Driver accepted 8m ago',
                combo: 'Clean handoff',
                delivery: 'Gleason, Green and Friesen, Lake Kiarasta...',
                deliveryAt: 'May 18, 12:09 AM',
                driver: 'Franz Walker MD',
                eta: 'Pickup in 1h 12m',
                id: 'TRP-39',
                initials: 'FW',
                meterLabel: 'handoff',
                miles: '232 mi',
                mission: 'Lock the driver before dispatch drift',
                pickup: 'Macejkovic, Maggio and Powlowski, Port L...',
                pickupAt: 'May 17, 2:09 AM',
                points: '+360 xp',
                progress: 52,
                risk: 'On track',
                riskClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
                score: '91',
                shipment: 'SHP-25',
                tier: 'A2',
            },
            {
                action: 'Nudge',
                bonus: 'Customer window tight',
                combo: 'Time save',
                delivery: 'Hagenes and Sons, New Raina, ME',
                deliveryAt: 'Apr 23, 12:19 PM',
                driver: 'Christopher Hickle',
                eta: '14 min to roll',
                id: 'TRP-35',
                initials: 'CH',
                meterLabel: 'window risk',
                miles: '149 mi',
                mission: 'Protect the appointment window',
                pickup: 'Durgan-Veum, Vonview, LA',
                pickupAt: 'Apr 22, 2:19 PM',
                points: '+280 xp',
                progress: 47,
                risk: 'Tight',
                riskClass: 'border-amber-200 bg-amber-50 text-amber-700',
                score: '86',
                shipment: 'SHP-23',
                tier: 'B1',
            },
        ],
    },
    {
        automation: 'push plan',
        dotClass: 'bg-indigo-500',
        goal: 'Move plans to drivers before wheels turn.',
        status: 'Dispatched',
        trips: [
            {
                action: 'Stage',
                bonus: 'Backhaul candidate',
                combo: 'Backhaul chain',
                delivery: "Denesik-O'Reilly, Bennyport, KS",
                deliveryAt: 'May 18, 11:04 AM',
                driver: 'Kareem Lynch',
                eta: 'Pretrip pending',
                id: 'TRP-26',
                initials: 'KL',
                meterLabel: 'route chain',
                miles: '164 mi',
                mission: 'Set up the next profitable leg',
                pickup: 'Lockman, Franecki and Langosh, Leighton...',
                pickupAt: 'May 17, 1:04 PM',
                points: '+240 xp',
                progress: 42,
                risk: 'Ready',
                riskClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
                score: '82',
                shipment: 'SHP-20',
                tier: 'B3',
            },
            {
                action: 'Track',
                bonus: 'HOS clear to destination',
                combo: 'No-login track',
                delivery: 'Gleason, Green and Friesen, Lake Kiarasta...',
                deliveryAt: 'May 9, 7:29 AM',
                driver: 'Elody Howell',
                eta: 'Arrives 6:40',
                id: 'TRP-40',
                initials: 'EH',
                meterLabel: 'plan sent',
                miles: '106 mi',
                mission: 'Keep the driver moving without another portal',
                pickup: 'Macejkovic, Maggio and Powlowski, Port L...',
                pickupAt: 'May 8, 9:29 AM',
                points: '+390 xp',
                progress: 78,
                risk: 'Safe',
                riskClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
                score: '96',
                shipment: 'SHP-25',
                tier: 'S1',
            },
        ],
    },
    {
        automation: 'protect eta',
        dotClass: 'bg-orange-500',
        goal: 'Surface the exceptions while freight is moving.',
        status: 'En Route',
        trips: [
            {
                action: 'Call',
                bonus: 'Stop skipped geofence',
                combo: 'Exception save',
                delivery: 'Lindgren Ltd, Earlineport, SC',
                deliveryAt: 'Apr 24, 3:57 AM',
                driver: 'Franz Walker MD',
                eta: '16 min late risk',
                id: 'TRP-28',
                initials: 'FW',
                meterLabel: 'save chance',
                miles: '96 mi',
                mission: 'Catch the miss before ops hears about it',
                pickup: 'Hickle LLC, Gilesview, NV',
                pickupAt: 'Apr 23, 5:57 AM',
                points: '+500 xp',
                progress: 63,
                risk: 'Flag',
                riskClass: 'border-red-200 bg-red-50 text-red-700',
                score: '79',
                shipment: 'SHP-21',
                tier: 'X1',
            },
            {
                action: 'Clear',
                bonus: 'POD expected next',
                combo: 'Billing unlock',
                delivery: 'Simonis Ltd, Botsfordhaven, MA',
                deliveryAt: 'May 15, 6:51 PM',
                driver: 'Kareem Lynch',
                eta: 'Final stop',
                id: 'TRP-20',
                initials: 'KL',
                meterLabel: 'pod ready',
                miles: '253 mi',
                mission: 'Turn movement into money',
                pickup: 'Buckridge-Emmerich, Carlottaside, GA',
                pickupAt: 'May 14, 8:51 PM',
                points: '+330 xp',
                progress: 84,
                risk: 'POD',
                riskClass: 'border-sky-200 bg-sky-50 text-sky-700',
                score: '90',
                shipment: 'SHP-18',
                tier: 'A3',
            },
        ],
    },
]

const shipmentDetailTabs = ['Stops', 'Trips', 'All Stops']

const invoiceSummaries = [
    {
        label: 'Ready To Send',
        value: '8',
        sub: '$31,420 pending approval',
    },
    {
        label: 'Outstanding',
        value: '$147.8k',
        sub: '42 open invoices',
    },
    {
        label: 'Overdue',
        value: '$18.6k',
        sub: '6 need follow-up',
    },
    {
        label: 'Paid This Week',
        value: '$63.2k',
        sub: '18 payments matched',
    },
]

const invoices = [
    {
        id: 'INV-1048',
        balance: '$4,892.75',
        billingContact: 'Avery Milton - ap@northstar.example',
        created: 'Apr 22, 2026 4:18 PM',
        customer: 'Northstar Grocers',
        due: 'May 22',
        issued: 'Apr 22, 2026',
        owner: 'M. Reyes',
        payments: '$0.00',
        reference: 'NSG-88421',
        route: 'Chicago, IL to Memphis, TN',
        dispatch: 'SHP-1842',
        status: 'Sent',
        subtotal: '$4,892.75',
        tax: '$0.00',
        terms: 'Net 30',
        total: '$4,892.75',
        items: [
            {
                amount: '$3,950.00',
                name: 'Linehaul',
                note: 'Dry van freight - 527 laden miles',
                qty: '1',
                rate: '$3,950.00',
            },
            {
                amount: '$612.75',
                name: 'Fuel surcharge',
                note: '15.5% FSC on linehaul',
                qty: '1',
                rate: '$612.75',
            },
            {
                amount: '$330.00',
                name: 'Detention',
                note: '2.0 hours at receiver',
                qty: '2',
                rate: '$165.00',
            },
        ],
        timeline: [
            { done: true, label: 'Draft created', date: 'Apr 22, 4:18 PM' },
            { done: true, label: 'Rates imported', date: 'Apr 22, 4:22 PM' },
            { done: true, label: 'Sent to customer', date: 'Apr 22, 4:41 PM' },
            { done: false, label: 'Payment received', date: 'Pending' },
        ],
    },
    {
        id: 'INV-1047',
        balance: '$0.00',
        billingContact: 'Jordan Lee - invoices@prairietools.example',
        created: 'Apr 21, 2026 11:06 AM',
        customer: 'Prairie Tools Co.',
        due: 'May 21',
        issued: 'Apr 21, 2026',
        owner: 'C. Walker',
        payments: '$6,140.00',
        reference: 'PTC-2219',
        route: 'Omaha, NE to Tulsa, OK',
        dispatch: 'SHP-1837',
        status: 'Paid',
        subtotal: '$6,140.00',
        tax: '$0.00',
        terms: 'Net 30',
        total: '$6,140.00',
        items: [
            {
                amount: '$5,500.00',
                name: 'Linehaul',
                note: 'Flatbed equipment transfer',
                qty: '1',
                rate: '$5,500.00',
            },
            {
                amount: '$640.00',
                name: 'Tarping and straps',
                note: 'Accessorial approved by dispatch',
                qty: '1',
                rate: '$640.00',
            },
        ],
        timeline: [
            { done: true, label: 'Draft created', date: 'Apr 21, 11:06 AM' },
            { done: true, label: 'Approved', date: 'Apr 21, 11:18 AM' },
            { done: true, label: 'Payment matched', date: 'Apr 23, 9:12 AM' },
            { done: true, label: 'Closed', date: 'Apr 23, 9:15 AM' },
        ],
    },
    {
        id: 'INV-1046',
        balance: '$2,275.00',
        billingContact: 'Morgan Blair - billing@harborline.example',
        created: 'Apr 18, 2026 2:44 PM',
        customer: 'Harborline Supply',
        due: 'Apr 25',
        issued: 'Apr 18, 2026',
        owner: 'D. Singh',
        payments: '$1,500.00',
        reference: 'HLS-7093',
        route: 'Savannah, GA to Raleigh, NC',
        dispatch: 'SHP-1824',
        status: 'Partial',
        subtotal: '$3,775.00',
        tax: '$0.00',
        terms: 'Net 7',
        total: '$3,775.00',
        items: [
            {
                amount: '$3,125.00',
                name: 'Linehaul',
                note: 'Port pickup and inland delivery',
                qty: '1',
                rate: '$3,125.00',
            },
            {
                amount: '$650.00',
                name: 'Chassis split',
                note: 'Approved accessorial',
                qty: '1',
                rate: '$650.00',
            },
        ],
        timeline: [
            { done: true, label: 'Draft created', date: 'Apr 18, 2:44 PM' },
            { done: true, label: 'Sent to customer', date: 'Apr 18, 3:10 PM' },
            { done: true, label: 'Partial payment', date: 'Apr 20, 8:31 AM' },
            { done: false, label: 'Balance cleared', date: 'Pending' },
        ],
    },
    {
        id: 'INV-1043',
        balance: '$8,430.50',
        billingContact: 'Taylor Brooks - payables@cascadia-paper.example',
        created: 'Apr 3, 2026 9:30 AM',
        customer: 'Cascadia Paper',
        due: 'Apr 17',
        issued: 'Apr 3, 2026',
        owner: 'M. Reyes',
        payments: '$0.00',
        reference: 'CP-44018',
        route: 'Portland, OR to Reno, NV',
        dispatch: 'SHP-1789',
        status: 'Overdue',
        subtotal: '$8,430.50',
        tax: '$0.00',
        terms: 'Net 14',
        total: '$8,430.50',
        items: [
            {
                amount: '$7,900.00',
                name: 'Linehaul',
                note: 'Paper rolls - team service',
                qty: '1',
                rate: '$7,900.00',
            },
            {
                amount: '$530.50',
                name: 'Layover',
                note: 'Mill pickup delay',
                qty: '1',
                rate: '$530.50',
            },
        ],
        timeline: [
            { done: true, label: 'Draft created', date: 'Apr 3, 9:30 AM' },
            { done: true, label: 'Sent to customer', date: 'Apr 3, 9:45 AM' },
            { done: true, label: 'Reminder sent', date: 'Apr 18, 10:05 AM' },
            { done: false, label: 'Payment received', date: 'Pending' },
        ],
    },
]

const invoiceActions = [
    'Send reminder',
    'Record payment',
    'Download PDF',
    'Open dispatch',
]

const settingsSections = [
    {
        icon: Settings,
        label: 'General',
        description: 'Manage company information and regional preferences.',
        groups: [
            {
                description:
                    'Details shown on invoices, documents, and customer messages.',
                fields: [
                    { label: 'Company Name', value: 'Larson Inc' },
                    {
                        label: 'Billing Address',
                        value: '1100 W Fulton Market, Chicago, IL',
                    },
                    { label: 'Timezone', value: 'Central Time (CT)' },
                    { label: 'Date Format', value: 'MM/DD/YYYY' },
                ],
                icon: Settings,
                title: 'Company Information',
            },
            {
                description: 'Default operating context for this tenant.',
                fields: [
                    { label: 'Default Terminal', value: 'Chicago Terminal' },
                    { label: 'Distance Units', value: 'Miles' },
                    {
                        enabled: true,
                        label: 'Require Location Validation',
                        type: 'toggle',
                        value: 'Enabled',
                    },
                    {
                        enabled: false,
                        label: 'Show Archived Records',
                        type: 'toggle',
                        value: 'Disabled',
                    },
                ],
                icon: MapPin,
                title: 'Regional Settings',
            },
        ],
    },
    {
        icon: Truck,
        label: 'Dispatch',
        description: 'Configure dispatch behavior and assignment rules.',
        groups: [
            {
                description:
                    'Defaults used when planners build trips from dispatches.',
                fields: [
                    { label: 'Default Dwell Time', value: '90 minutes' },
                    { label: 'Start Location', value: 'Terminal' },
                    { label: 'End Location', value: 'Previous Trip' },
                    {
                        enabled: true,
                        label: 'Auto-dispatch after assignment',
                        type: 'toggle',
                        value: 'Enabled',
                    },
                ],
                icon: Truck,
                title: 'General Dispatch Settings',
            },
            {
                description:
                    'What must be present before a trip can move forward.',
                fields: [
                    {
                        label: 'Required For Assignment',
                        value: 'Driver & Truck',
                    },
                    {
                        enabled: true,
                        label: 'Auto-assign trailer with truck',
                        type: 'toggle',
                        value: 'Enabled',
                    },
                    {
                        enabled: false,
                        label: 'Allow Empty Assignments',
                        type: 'toggle',
                        value: 'Disabled',
                    },
                    { label: 'Geofence Radius', value: '0.5 mi' },
                ],
                icon: CheckCircle2,
                title: 'Assignment Requirements',
            },
        ],
    },
    {
        icon: Receipt,
        label: 'Invoicing',
        description: 'Configure invoice numbering and payment defaults.',
        groups: [
            {
                description: 'Format and sequence for generated invoices.',
                fields: [
                    { label: 'Invoice Prefix', value: 'INV-' },
                    { label: 'Invoice Suffix', value: '-26' },
                    { label: 'Starting Invoice Number', value: '1049' },
                    { label: 'Increment By', value: '1' },
                ],
                icon: Receipt,
                title: 'Invoice Numbering',
            },
            {
                description:
                    'Defaults applied when dispatch rates become invoice lines.',
                fields: [
                    { label: 'Payment Terms', value: 'Net 30' },
                    { label: 'Tax Mode', value: 'No tax by default' },
                    {
                        enabled: true,
                        label: 'Import dispatch rates',
                        type: 'toggle',
                        value: 'Enabled',
                    },
                    {
                        enabled: true,
                        label: 'Sync payments',
                        type: 'toggle',
                        value: 'Enabled',
                    },
                ],
                icon: Receipt,
                title: 'Invoice Defaults',
            },
        ],
    },
    {
        icon: Wallet,
        label: 'Billing',
        description: 'Review subscription and customer billing preferences.',
        groups: [
            {
                description: 'Fictional demo billing profile for the tenant.',
                fields: [
                    { label: 'Plan', value: 'Operations Pro' },
                    { label: 'Billing Contact', value: 'ops@larson.example' },
                    { label: 'Payment Method', value: 'Visa ending 4242' },
                    { label: 'Renewal', value: 'May 1, 2026' },
                ],
                icon: Wallet,
                title: 'Subscription',
            },
        ],
    },
    {
        icon: Plug,
        label: 'Integrations',
        description: 'Connect accounting and ELD/telematics — this demo uses QuickBooks Online and Samsara as examples.',
        groups: [
            {
                description:
                    'Operational systems connected to this demo tenant.',
                fields: [
                    {
                        enabled: true,
                        label: 'QuickBooks Online',
                        type: 'toggle',
                        value: 'Connected',
                    },
                    {
                        enabled: true,
                        label: 'Samsara (telematics)',
                        type: 'toggle',
                        value: 'Connected',
                    },
                    { label: 'Last Sync', value: '2 minutes ago' },
                ],
                icon: Plug,
                title: 'Connected Services',
            },
        ],
    },
]

const settingsConnectedAreas = [
    { label: 'QuickBooks Online', status: 'Connected' },
    { label: 'Samsara', status: 'Connected' },
]

const previewPath = computed(() => {
    if (screen.value === SHIPMENT_DETAIL) {
        return 'shipments/' + activeShipmentId.value
    }

    if (screen.value === SETTINGS) {
        return 'settings'
    }

    return screen.value
})

const activeShipment = computed(() => {
    return (
        shipments.find((shipment) => shipment.id === activeShipmentId.value) ||
        shipments[0]
    )
})

const activeInvoice = computed(() => {
    return (
        invoices.find((invoice) => invoice.id === selectedInvoiceId.value) ||
        invoices[0]
    )
})

const activeSettings = computed(() => {
    return (
        settingsSections.find(
            (section) => section.label === activeSettingsSection.value
        ) || settingsSections[0]
    )
})

function showScreen(nextScreen, navigationLabel = null) {
    // Marketing preview: settings are non-interactive (no fake admin UI).
    if (nextScreen === SETTINGS) {
        return
    }

    screen.value = nextScreen
    activeNavigationLabel.value =
        navigationLabel || getNavigationLabelForScreen(nextScreen)

    if (nextScreen !== SHIPMENT_DETAIL) {
        activeShipmentTab.value = 'Stops'
    }
}

function integrationLogoPath(logoPath) {
    const normalizedBase = basePath.endsWith('/') ? basePath : basePath + '/'
    return normalizedBase + logoPath.replace(/^\/+/, '')
}

function openShipment(shipmentId) {
    activeShipmentId.value = shipmentId
    screen.value = SHIPMENT_DETAIL
    activeNavigationLabel.value = 'Shipments'
    activeShipmentTab.value = 'Stops'
}

function isSidebarItemActive(item) {
    return item.label === activeNavigationLabel.value
}

function getNavigationLabelForScreen(nextScreen) {
    if (nextScreen === SETTINGS) {
        return 'Settings'
    }

    if (nextScreen === INVOICING) {
        return 'Invoicing'
    }

    if (nextScreen === FLEET) {
        return 'Fleet'
    }

    if (nextScreen === EXPENSES) {
        return 'Expenses'
    }

    if (nextScreen === SETTLEMENT) {
        return 'Settlement'
    }

    if (nextScreen === CUSTOMERS) {
        return 'Customers'
    }

    if (nextScreen === REPORTS) {
        return 'Reports'
    }

    if (nextScreen === TRIPS) {
        return 'Trips'
    }

    if (nextScreen === SHIPMENTS || nextScreen === SHIPMENT_DETAIL) {
        return 'Shipments'
    }

    return 'Dashboard'
}

function getStatusClass(status) {
    const classes = {
        Approved: 'border-green-400 bg-green-100 text-green-700',
        Complete: 'border-green-400 bg-green-100 text-green-700',
        'In Transit': 'border-blue-400 bg-blue-100 text-blue-700',
        Assigned: 'border-violet-400 bg-violet-100 text-violet-700',
        Dispatched: 'border-violet-400 bg-violet-100 text-violet-700',
        Pending: 'border-neutral-400 bg-neutral-100 text-neutral-700',
        Draft: 'border-neutral-400 bg-neutral-100 text-neutral-700',
        Sent: 'border-blue-400 bg-blue-100 text-blue-700',
        'On Hold': 'border-yellow-400 bg-yellow-100 text-yellow-800',
        Overdue: 'border-red-400 bg-red-100 text-red-700',
        Cancelled: 'border-red-400 bg-red-100 text-red-700',
        Unpaid: 'border-red-400 bg-red-100 text-red-700',
        Paid: 'border-green-400 bg-green-100 text-green-700',
        Partial: 'border-yellow-400 bg-yellow-100 text-yellow-800',
        Connected: 'border-green-400 bg-green-100 text-green-700',
        Enabled: 'border-green-400 bg-green-100 text-green-700',
        Ready: 'border-blue-400 bg-blue-100 text-blue-700',
    }

    return classes[status] || classes.Pending
}

function getStatusIcon(status) {
    if (
        [
            'Approved',
            'Complete',
            'Paid',
            'Connected',
            'Enabled',
            'Ready',
        ].includes(status)
    ) {
        return CheckCircle2
    }

    if (['In Transit', 'Assigned', 'Dispatched', 'Sent'].includes(status)) {
        return Truck
    }

    if (['On Hold', 'Partial', 'Overdue'].includes(status)) {
        return Clock
    }

    if (status === 'Draft') {
        return FileText
    }

    if (status === 'Unpaid') {
        return Circle
    }

    return CircleDot
}

const StatusBadge = defineComponent({
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () => {
            const StatusIcon = getStatusIcon(props.status)

            return h(
                'span',
                {
                    class: [
                        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium',
                        getStatusClass(props.status),
                    ],
                },
                [h(StatusIcon, { class: 'size-3' }), props.status]
            )
        }
    },
})

const QuickStat = defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        sub: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () =>
            h('div', { class: 'rounded-lg border bg-card p-3 shadow-xs' }, [
                h(
                    'div',
                    {
                        class: 'mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground',
                    },
                    props.label
                ),
                h('div', { class: 'text-[14px] font-semibold' }, props.value),
                h(
                    'div',
                    { class: 'mt-1 text-[12px] text-muted-foreground' },
                    props.sub
                ),
            ])
    },
})

const StopRow = defineComponent({
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        address: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () =>
            h('div', { class: 'flex gap-3' }, [
                h('span', {
                    class: [
                        'mt-1 size-5 rounded-full border-4',
                        props.active
                            ? 'border-green-700 bg-green-100'
                            : 'border-neutral-300 bg-background',
                    ],
                }),
                h('div', {}, [
                    h('div', { class: 'text-[14px] font-semibold' }, props.title),
                    h(
                        'div',
                        { class: 'text-[14px] text-muted-foreground' },
                        props.address
                    ),
                    h(
                        'div',
                        { class: 'text-[12px] text-muted-foreground' },
                        props.time
                    ),
                ]),
            ])
    },
})

const DetailLine = defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () =>
            h('div', { class: 'mb-3 last:mb-0' }, [
                h(
                    'div',
                    { class: 'text-[12px] text-muted-foreground' },
                    props.label
                ),
                h('div', { class: 'text-[14px] font-medium' }, props.value),
            ])
    },
})
</script>

<script>
export default {
    name: 'Landing',
}
</script>

<style>
/* ---- Marketing landing: depth, single accent, section rhythm (Geist stack) ---- */
#landing-top.landing-page {
    position: relative;
    font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
}

#landing-top.landing-dark {
    --landing-accent: #facc15;
    --landing-accent-soft: rgb(250 204 21 / 0.14);
    --landing-veil-warm: rgb(250 190 50 / 0.055);
    --landing-veil-cool: rgb(255 255 255 / 0.04);
}

#landing-top.landing-light {
    --landing-accent: hsl(45 94% 48%);
    --landing-accent-soft: rgb(180 120 0 / 0.12);
    --landing-veil-warm: rgb(255 220 120 / 0.2);
    --landing-veil-cool: rgb(15 23 42 / 0.04);
}

#landing-top.landing-page::before {
    background-image: radial-gradient(
        rgb(255 255 255 / 0.11) 0.45px,
        transparent 0.55px
    );
    background-size: 4px 4px;
    content: '';
    inset: 0;
    mix-blend-mode: overlay;
    opacity: 0.2;
    pointer-events: none;
    position: fixed;
    z-index: 0;
}

#landing-top.landing-light.landing-page::before {
    background-image: radial-gradient(
        rgb(15 23 42 / 0.1) 0.45px,
        transparent 0.55px
    );
    mix-blend-mode: multiply;
    opacity: 0.12;
}

#landing-top.landing-page::after {
    background:
        radial-gradient(
            100% 55% at 10% 0%,
            var(--landing-veil-warm) 0%,
            transparent 52%
        ),
        radial-gradient(
            90% 50% at 88% 25%,
            var(--landing-veil-cool) 0%,
            transparent 50%
        );
    content: '';
    inset: 0;
    pointer-events: none;
    position: fixed;
    z-index: 0;
}

#landing-top.landing-light.landing-page::after {
    background:
        radial-gradient(
            100% 50% at 12% 0%,
            var(--landing-veil-warm) 0%,
            transparent 55%
        ),
        radial-gradient(
            80% 45% at 100% 15%,
            var(--landing-veil-cool) 0%,
            transparent 50%
        );
    opacity: 0.9;
}

.landing-main {
    position: relative;
    z-index: 1;
}

/* Get Started: pencil-style strike (single pseudo line; not UA line-through + line) */
#get-started .landing-get-started-pencil-strike {
    position: relative;
    text-decoration: none;
    z-index: 0;
}

/* Hand-drawn line + correction: tuned for the dark get-started bar; see #landing-top.landing-light #get-started for cream. */
/* Replacement word: same ink as the h2 + weight + thin Bolt-yellow underline (no chip/panel). */
#get-started .landing-get-started-correction {
    box-shadow: 0 1px 0 0 rgb(250 204 21 / 0.38);
    color: inherit;
    font-weight: 800;
    margin-inline-start: 0.2em;
    padding: 0;
    text-decoration: none;
}

#get-started .landing-get-started-headline-tail {
    color: rgb(255 255 255 / 0.62);
    font-weight: 400;
}

#get-started .landing-get-started-pencil-strike::after {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgb(42 38 36 / 0.88) 8%,
        rgb(26 24 22 / 0.96) 22% 78%,
        rgb(42 38 36 / 0.88) 92%,
        transparent 100%
    );
    border-radius: 0.1em 0.18em 0.12em 0.08em;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.08);
    content: '';
    height: 0.16em;
    left: 0.02em;
    pointer-events: none;
    position: absolute;
    right: 0.04em;
    top: 52%;
    transform: translateY(-50%) rotate(-1.2deg) skewX(-4deg);
    z-index: 1;
}

/* Light theme: section uses cream via .landing-light .bg-[#050606] — override span colors that outrank .landing-light .text-white. */
#landing-top.landing-light #get-started .landing-get-started-headline-tail {
    color: rgb(15 23 42 / 0.75);
}

#landing-top.landing-light #get-started .landing-get-started-pencil-strike::after {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgb(15 23 42 / 0.5) 8%,
        rgb(15 23 42 / 0.78) 22% 78%,
        rgb(15 23 42 / 0.5) 92%,
        transparent 100%
    );
    box-shadow: 0 0 0 1px rgb(15 23 42 / 0.12);
}

.landing-section-hero {
    background: linear-gradient(180deg, #050606 0%, #080a0c 100%);
}

#landing-top.landing-light .landing-section-hero {
    background: linear-gradient(
        180deg,
        hsl(42 38% 97%) 0%,
        hsl(40 33% 95%) 100%
    );
}

#landing-top.landing-light .landing-section-hero h1 {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .landing-section-hero > .mx-auto > .lg\:col-span-7 p {
    color: rgb(75 85 99);
}

#landing-top.landing-dark a.landing-cta {
    transition:
        background-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

#landing-top.landing-dark a.landing-cta:hover {
    box-shadow:
        0 0 0 1px var(--landing-accent-soft),
        0 12px 36px -6px rgb(0 0 0 / 0.55);
    transform: translateY(-1px);
}

#landing-top.landing-dark a.landing-cta:active {
    box-shadow: 0 0 0 1px var(--landing-accent-soft);
    transform: translateY(0) scale(0.99);
}

#landing-top.landing-light a.landing-cta {
    transition:
        background-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

#landing-top.landing-light a.landing-cta:hover {
    box-shadow: 0 10px 32px -8px rgb(15 23 42 / 0.2);
    transform: translateY(-1px);
}

#landing-top.landing-light a.landing-cta:active {
    transform: scale(0.99);
}

@media (prefers-reduced-motion: reduce) {
    #landing-top a.landing-cta:hover,
    #landing-top a.landing-cta:active {
        transform: none;
    }
}

#landing-top.landing-dark .landing-section-preview {
    box-shadow: 0 1px 0 0 var(--landing-accent-soft);
}

#landing-top.landing-dark .landing-section-demo {
    background-image: linear-gradient(
        180deg,
        rgb(5 6 6 / 0) 0%,
        rgb(250 200 20 / 0.03) 100%
    );
}

#landing-top.landing-light .landing-section-demo {
    background-image: linear-gradient(
        180deg,
        rgb(255 255 255 / 0) 0%,
        rgb(250 220 160 / 0.15) 100%
    );
}

#landing-top.landing-light .landing-section-preview {
    box-shadow: 0 1px 0 0 rgb(15 23 42 / 0.08);
}

.preview-browser-stack {
    --preview-frame-width: 1240px;

    margin-left: clamp(1rem, 4vw, 1.5rem);
    max-width: none;
    width: calc(100vw - clamp(1rem, 4vw, 1.5rem));
}

.preview-browser-stack::after {
    content: '';
    inset-block: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    width: 0;
    z-index: 10;
}

.preview-browser-shell {
    box-shadow:
        0 70px 90px -56px rgb(15 23 42 / 0.58),
        0 28px 52px -36px rgb(15 23 42 / 0.34),
        0 1px 0 rgb(255 255 255 / 0.45) inset;
    width: var(--preview-frame-width);
}

.preview-browser-frame {
    width: var(--preview-frame-width);
}

.preview-browser-shadow {
    background: rgb(15 23 42 / 0.16);
    bottom: -14px;
    filter: blur(28px);
    height: clamp(24px, 3.4vw, 42px);
    left: clamp(16px, 3vw, 32px);
    opacity: 0.72;
    width: min(
        calc(var(--preview-frame-width) - 4rem),
        calc(100% - clamp(32px, 6vw, 64px))
    );
}

#landing-top.landing-dark .preview-browser-shell {
    box-shadow:
        0 70px 110px -50px rgb(0 0 0 / 0.8),
        0 28px 56px -34px rgb(0 0 0 / 0.62),
        0 1px 0 rgb(255 255 255 / 0.12) inset;
}

#landing-top.landing-dark .preview-browser-shadow {
    background: rgb(0 0 0 / 0.42);
    opacity: 0.78;
}

@media (max-width: 1263px) {
    .preview-browser-stack::after {
        background: linear-gradient(
            90deg,
            rgb(15 23 42 / 0),
            rgb(15 23 42 / 0.34)
        );
        opacity: clamp(0.32, calc((1264px - 100vw) / 72), 1);
        width: clamp(14px, calc((1264px - 100vw) * 3), 88px);
    }

    #landing-top.landing-dark .preview-browser-stack::after {
        background: linear-gradient(
            90deg,
            rgb(5 6 6 / 0),
            rgb(5 6 6 / 0.82)
        );
        opacity: clamp(0.32, calc((1264px - 100vw) / 140), 1);
        width: min(
            clamp(14px, calc((1264px - 100vw) * 2.2), 380px),
            34vw
        );
    }
}

@media (max-width: 960px) {
    .preview-browser-shell {
        box-shadow:
            0 34px 54px -42px rgb(15 23 42 / 0.52),
            0 16px 32px -28px rgb(15 23 42 / 0.28),
            0 1px 0 rgb(255 255 255 / 0.45) inset;
    }

    .preview-browser-shadow {
        bottom: -10px;
        filter: blur(22px);
        height: 26px;
        left: 16px;
        opacity: 0.58;
        width: calc(100% - 32px);
    }

    #landing-top.landing-dark .preview-browser-shell {
        box-shadow:
            0 36px 60px -40px rgb(0 0 0 / 0.7),
            0 16px 34px -28px rgb(0 0 0 / 0.48),
            0 1px 0 rgb(255 255 255 / 0.12) inset;
    }
}

@media (max-width: 640px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.47;
        --preview-mobile-height: 379px;

        height: var(--preview-mobile-height);
        margin-left: 16px;
        overflow: visible;
        width: calc(100vw - 32px);
    }

    .preview-browser-stack::after {
        display: none;
    }

    .preview-browser-shell {
        box-shadow:
            0 20px 34px -26px rgb(15 23 42 / 0.42),
            0 8px 20px -18px rgb(15 23 42 / 0.24),
            0 1px 0 rgb(255 255 255 / 0.45) inset;
        left: 50%;
        transform: translateX(-50%) scale(var(--preview-mobile-scale));
        transform-origin: top center;
    }

    #landing-top.landing-dark .preview-browser-shell {
        box-shadow:
            0 22px 38px -24px rgb(0 0 0 / 0.62),
            0 8px 22px -18px rgb(0 0 0 / 0.42),
            0 1px 0 rgb(255 255 255 / 0.12) inset;
    }

    .preview-browser-shadow {
        bottom: -6px;
        filter: blur(12px);
        height: 14px;
        left: 10px;
        opacity: 0.38;
        width: calc(100% - 20px);
    }
}

@media (max-width: 600px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.44;
        --preview-mobile-height: 355px;
    }
}

@media (max-width: 560px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.41;
        --preview-mobile-height: 330px;
    }
}

@media (max-width: 480px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.36;
        --preview-mobile-height: 290px;
    }
}

@media (max-width: 400px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.29;
        --preview-mobile-height: 234px;
    }
}

@media (max-width: 360px) {
    .preview-browser-stack {
        --preview-mobile-scale: 0.26;
        --preview-mobile-height: 210px;
    }
}

@media (min-width: 1240px) {
    .preview-browser-stack {
        margin-left: max(1.5rem, calc((100vw - 1240px) / 2));
        width: calc(100vw - max(1.5rem, calc((100vw - 1240px) / 2)));
    }
}

#landing-top.landing-dark
    .landing-integrations-section
    .integration-connector:hover
    .integration-point
    svg {
    color: rgb(250 204 21 / 0.55);
    transition: color 0.2s ease;
}

.landing-dark .landing-integrations-section {
    --integration-background: #050606;
    --integration-border: rgb(255 255 255 / 0.14);
    --integration-border-strong: rgb(255 255 255 / 0.2);
    --integration-surface: rgb(255 255 255 / 0.045);
    --integration-surface-strong: rgb(255 255 255 / 0.07);
    --integration-text: rgb(255 255 255);
    --integration-muted: rgb(255 255 255 / 0.66);
    --integration-faint: rgb(255 255 255 / 0.42);
    --integration-vendor-row: rgb(255 255 255 / 0.035);
    --integration-mark-background: rgb(255 255 255);
    --integration-mark-text: #101111;
}

.landing-light .landing-integrations-section {
    --integration-background: hsl(42 38% 97%);
    --integration-border: rgb(15 23 42 / 0.10);
    --integration-border-strong: rgb(15 23 42 / 0.22);
    --integration-surface: rgb(255 255 255);
    --integration-surface-strong: rgb(255 255 255);
    --integration-text: hsl(210 16% 12%);
    --integration-muted: rgb(31 41 55 / 0.78);
    --integration-faint: rgb(71 85 105 / 0.72);
    --integration-vendor-row: rgb(255 255 255 / 0.42);
    --integration-mark-background: hsl(210 16% 12%);
    --integration-mark-text: white;
}

.landing-integrations-section {
    background:
        linear-gradient(
            180deg,
            var(--integration-background),
            var(--integration-background)
        );
    border-color: var(--integration-border);
    box-shadow: inset 0 1px 0 var(--integration-border);
    color: var(--integration-text);
    font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
}

.integration-kicker,
.integration-type {
    color: var(--integration-faint);
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.integration-kicker {
    font-size: 13px;
    letter-spacing: 0.1em;
}

.integration-heading {
    color: var(--integration-text);
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.02;
    margin-top: 20px;
    max-width: 920px;
}

.integration-lede {
    color: var(--integration-muted);
    font-size: 18px;
    line-height: 1.65;
    margin-top: 24px;
    max-width: 760px;
}

.integration-board {
    display: grid;
    gap: 16px;
}

.integration-connector {
    background:
        linear-gradient(
            90deg,
            var(--integration-surface-strong),
            var(--integration-surface)
        );
    border: 1px solid var(--integration-border);
    border-radius: 14px;
    overflow: hidden;
    padding: 30px 36px;
    position: relative;
    transition:
        border-color 220ms ease,
        background 220ms ease;
}

.landing-dark .integration-connector:hover {
    background:
        linear-gradient(
            90deg,
            rgb(255 255 255 / 0.09),
            rgb(255 255 255 / 0.06)
        );
    border-color: rgb(255 255 255 / 0.28);
}

.landing-light .integration-connector:hover {
    background: hsl(42 38% 97%);
    border-color: rgb(15 23 42 / 0.24);
}


.integration-connector-main {
    align-items: start;
    display: grid;
    gap: 24px;
}

.integration-name {
    color: var(--integration-text);
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-top: 10px;
}

.integration-description {
    color: var(--integration-muted);
    font-size: 14.5px;
    line-height: 1.6;
    max-width: 620px;
    padding-top: 6px;
}

.integration-vendor-row {
    background: var(--integration-vendor-row);
    border-bottom: 1px solid var(--integration-border);
    border-top: 1px solid var(--integration-border);
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 22px;
}

.integration-vendor {
    align-items: center;
    border-right: 1px solid var(--integration-border);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    min-width: 0;
    padding: 22px 8px;
    text-align: center;
    transition: background-color 180ms ease;
}

.integration-vendor:last-child {
    border-right: 0;
}

.integration-vendor:hover {
    background: rgb(15 15 15 / 0.025);
}

.landing-dark .integration-vendor:hover {
    background: rgb(255 255 255 / 0.05);
}

.integration-vendor-mark {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    line-height: 1;
}

.integration-vendor-mark-logo-frame {
    height: 42px;
    overflow: visible;
    width: 94px;
}

.integration-vendor-mark-fallback {
    border-radius: 8px;
    box-shadow:
        0 1px 2px rgb(0 0 0 / 0.06),
        inset 0 0 0 1px rgb(255 255 255 / 0.08);
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 34px;
    letter-spacing: -0.02em;
    overflow: hidden;
    padding: 5px;
    width: 34px;
}

.integration-vendor-logo-dark-surface {
    background: #111827;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.08);
    padding: 7px 10px;
}

.integration-vendor-mark-circle {
    border-radius: 999px;
}

.integration-vendor-mark-compact {
    font-size: 10.5px;
    letter-spacing: 0.02em;
}

.integration-vendor-mark-lower {
    text-transform: lowercase;
}

.integration-vendor-logo {
    display: block;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
}

.integration-vendor-name {
    color: var(--integration-text);
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.25;
    white-space: pre-line;
}

.integration-point-grid {
    border-top: 1px solid var(--integration-border);
    display: grid;
    gap: 0;
    margin-top: 30px;
}

.integration-point {
    color: var(--integration-muted);
    display: flex;
    gap: 12px;
    font-size: 13.5px;
    line-height: 1.5;
    padding: 22px 0 0;
}

.integration-point svg {
    color: var(--integration-faint);
}

.integration-handoff-flow {
    border-top: 1px solid var(--integration-border);
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 56px 0 0;
    padding: 0;
}

.integration-handoff-row {
    align-items: flex-start;
    border-bottom: 1px solid var(--integration-border);
    display: grid;
    gap: 14px 32px;
    grid-template-columns: 1fr;
    padding: 24px 0;
}

.integration-handoff-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.integration-handoff-step {
    align-items: center;
    color: var(--integration-faint);
    display: inline-flex;
    flex: 0 0 auto;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}

.integration-handoff-path {
    align-items: center;
    color: var(--integration-muted);
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    gap: 10px 14px;
    letter-spacing: 0;
    line-height: 1.4;
    row-gap: 6px;
}

.integration-handoff-path-icon {
    color: var(--integration-faint);
}

.integration-handoff-source,
.integration-handoff-dest {
    color: var(--integration-text);
    font-size: 1.0625rem;
    font-weight: 600;
    min-width: 0;
    text-wrap: balance;
}

.integration-handoff-line {
    background: var(--integration-border-strong);
    flex: 0 0 auto;
    height: 2px;
    width: 32px;
}

.integration-handoff-copy {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.integration-handoff-title {
    color: var(--integration-text);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.005em;
    line-height: 1.2;
}

.integration-handoff-description {
    color: var(--integration-muted);
    font-size: 16px;
    line-height: 1.6;
    max-width: 56ch;
}

@media (min-width: 768px) {
    .integration-point-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .integration-point {
        border-left: 1px solid var(--integration-border);
        padding: 18px 22px 0;
    }

    .integration-point:first-child {
        border-left: 0;
        padding-left: 0;
    }

    .integration-handoff-row {
        grid-template-columns: 52px minmax(0, 380px) minmax(0, 1fr);
        padding: 24px 0;
    }
}

@media (min-width: 1024px) {
    .integration-heading {
        font-size: 60px;
    }

    .integration-connector-main {
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    }

    .integration-handoff-title {
        font-size: 24px;
    }
}

@media (max-width: 640px) {
    .integration-connector {
        padding: 22px;
    }

    .integration-vendor-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .integration-vendor {
        border-bottom: 1px solid var(--integration-border);
    }

    .integration-vendor:nth-child(2n) {
        border-right: 0;
    }

    .integration-vendor:last-child {
        border-bottom: 0;
    }

    .integration-heading {
        font-size: 40px;
    }

    .integration-name {
        font-size: 32px;
    }

    .integration-handoff-title {
        font-size: 20px;
    }
}

.scroll-reveal {
    opacity: 1;
    transform: none;
}

.landing-page.is-reveal-ready .scroll-reveal {
    opacity: 0;
    transform: translate3d(0, 16px, 0);
}

.landing-page.is-reveal-ready .scroll-reveal.is-revealed {
    animation: scroll-reveal-fade 480ms
        cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay, 0ms) both;
}

.landing-page.is-reveal-ready .scroll-reveal.is-revealing {
    will-change: opacity, transform;
}

@keyframes scroll-reveal-fade {
    from {
        opacity: 0;
        transform: translate3d(0, 16px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .scroll-reveal,
    .scroll-reveal.is-revealed {
        animation: none;
        opacity: 1;
        transform: none;
    }
}

.resource-card {
    background-color: rgb(255 255 255 / 0.035);
    transition:
        border-color 220ms ease,
        background-color 220ms ease,
        transform 220ms ease,
        box-shadow 220ms ease;
    will-change: transform;
}

.resource-card:hover {
    background-color: rgb(255 255 255 / 0.085);
    border-color: rgb(255 255 255 / 0.42);
    box-shadow:
        0 22px 56px rgb(0 0 0 / 0.5),
        0 0 0 1px rgb(250 204 21 / 0.15) inset;
    transform: translateY(-6px);
}

.landing-light .resource-card {
    background-color: rgb(255 255 255);
    border-color: rgb(15 23 42 / 0.10);
}

.landing-light .resource-card:hover {
    background-color: hsl(42 38% 97%);
    border-color: rgb(15 23 42 / 0.36);
    box-shadow:
        0 22px 56px rgb(15 23 42 / 0.16),
        0 0 0 1px rgb(15 23 42 / 0.04) inset;
    transform: translateY(-6px);
}

.landing-light {
    --header-background: hsl(0 0% 100%);
    --background: hsl(0 0% 100%);
    --body: hsl(40 33% 96%);
    --foreground: hsl(210 16% 12%);
    --muted: hsl(40 24% 92%);
    --muted-foreground: hsl(220 8% 42%);
    --card: hsl(0 0% 100%);
    --border: hsl(36 17% 84%);
    --primary: hsl(45 94% 48%);
    --primary-foreground: hsl(210 20% 10%);
    --sidebar: hsl(40 28% 93%);
}

.landing-light,
.landing-light .landing-site-header {
    background: hsl(42 38% 97%);
    color: hsl(210 16% 12%);
}

.landing-light .landing-site-header {
    border-color: hsl(36 17% 84%);
    box-shadow: 0 12px 36px rgb(15 23 42 / 0.06);
}

#landing-top.landing-light .landing-site-header {
    background: hsl(42 38% 97% / 0.94);
    border-color: hsl(36 17% 84%);
    color: hsl(210 16% 12%);
}

.landing-light .landing-theme-toggle {
    border-color: rgb(15 23 42 / 0.12);
    color: rgb(15 23 42 / 0.62);
}

.landing-light .landing-theme-toggle:hover {
    background: rgb(15 23 42 / 0.04);
    color: rgb(15 23 42 / 0.9);
}

.landing-light .bg-\[\#050606\],
.landing-light .bg-\[\#070808\]\/85,
.landing-light .bg-\[\#070808\]\/80,
.landing-light .bg-\[\#070808\]\/90,
.landing-light .bg-\[\#070808\],
.landing-light .bg-\[\#080a0b\],
.landing-light .bg-\[\#090a0a\],
.landing-light .bg-\[\#101111\],
.landing-light .bg-\[\#111212\],
.landing-light .bg-\[\#151616\] {
    background-color: hsl(42 38% 97%);
}

.landing-light .text-white,
.landing-light .hover\:text-white:hover {
    color: hsl(210 16% 12%);
}

/* The inner app preview header is intentionally dark — keep its text light. */
.landing-light [data-test='landing-app-header'],
.landing-light [data-test='landing-app-header'] .text-white,
.landing-light [data-test='landing-app-header'] .text-gray-50,
.landing-light [data-test='landing-app-header'] .hover\:text-white:hover {
    color: rgb(255 255 255);
}

.landing-light .text-white\/90,
.landing-light .text-white\/88,
.landing-light .text-white\/85,
.landing-light .text-white\/82,
.landing-light .text-white\/80,
.landing-light .text-white\/65,
.landing-light .text-white\/70,
.landing-light .text-white\/78,
.landing-light .text-white\/72,
.landing-light .text-white\/68,
.landing-light .text-white\/66,
.landing-light .text-white\/64,
.landing-light .text-white\/62 {
    color: rgb(31 41 55 / 0.82);
}

.landing-light .text-white\/60,
.landing-light .text-white\/58,
.landing-light .text-white\/55,
.landing-light .text-white\/54,
.landing-light .text-white\/52,
.landing-light .text-white\/50,
.landing-light .text-white\/48,
.landing-light .text-white\/46,
.landing-light .text-white\/45,
.landing-light .text-white\/44,
.landing-light .text-white\/42,
.landing-light .text-white\/40 {
    color: rgb(75 85 99 / 0.8);
}

.landing-light .text-white\/38,
.landing-light .text-white\/32,
.landing-light .text-white\/30 {
    color: rgb(107 114 128 / 0.8);
}

.landing-light .border-white\/24,
.landing-light .border-white\/12,
.landing-light .border-white\/10,
.landing-light .border-white\/8,
.landing-light .divide-white\/12 > :not([hidden]) ~ :not([hidden]) {
    border-color: rgb(15 23 42 / 0.14);
}

.landing-light .border-white\/\[0\.06\],
.landing-light .border-white\/\[0\.07\] {
    border-color: rgb(15 23 42 / 0.1);
}

.landing-light .divide-white\/6 > :not([hidden]) ~ :not([hidden]) {
    border-color: rgb(15 23 42 / 0.08);
}

.landing-light .bg-white {
    background-color: hsl(210 16% 12%);
    color: white;
}

.landing-light .bg-white\/45,
.landing-light .bg-white\/12,
.landing-light .bg-white\/10,
.landing-light .bg-white\/\[0\.09\],
.landing-light .bg-white\/\[0\.035\],
.landing-light .bg-white\/\[0\.06\],
.landing-light .bg-white\/\[0\.04\],
.landing-light .bg-white\/\[0\.03\],
.landing-light .bg-white\/\[0\.025\] {
    background-color: rgb(15 23 42 / 0.08);
}

.landing-light .group:hover .group-hover\:bg-white\/\[0\.06\] {
    background-color: rgb(15 23 42 / 0.12);
}

.landing-light .bg-black\/25 {
    background-color: rgb(15 23 42 / 0.04);
}

.landing-light .hover\:bg-white\/90:hover {
    background-color: rgb(15 23 42 / 0.9);
    color: white;
}

.landing-light .shadow-\[0_28px_100px_rgba\(0\2c 0\2c 0\2c 0\.65\)\] {
    box-shadow: 0 28px 100px rgb(15 23 42 / 0.16);
}

.landing-light .shadow-\[0_18px_50px_-20px_rgba\(0\2c 0\2c 0\2c 0\.6\)\] {
    box-shadow: 0 18px 50px -20px rgb(15 23 42 / 0.12);
}

.landing-light [data-test='landing-preview-body'] {
    background-color: hsl(40 33% 96%);
    color: hsl(210 16% 12%);
}

#landing-top .landing-trips-board,
#landing-top.landing-light .landing-trips-board {
    background: hsl(48 22% 96%);
    color: hsl(220 13% 13%);
}

#landing-top .landing-trips-board .landing-trips-surface,
#landing-top .landing-trips-board .landing-trips-filterbar,
#landing-top .landing-trips-board .landing-trips-lane,
#landing-top .landing-trips-board .landing-trips-lane-body,
#landing-top .landing-trips-board .landing-trips-card {
    background: hsl(0 0% 100%) !important;
    border-color: rgb(15 23 42 / 0.12) !important;
    color: hsl(220 13% 13%) !important;
}

#landing-top .landing-trips-board .landing-trips-input {
    background: hsl(0 0% 98%) !important;
    border-color: rgb(15 23 42 / 0.12) !important;
    color: rgb(82 82 82) !important;
}

#landing-top .landing-trips-board .landing-trips-count,
#landing-top .landing-trips-board .landing-trips-active-tab {
    background: hsl(220 13% 13%) !important;
    color: hsl(0 0% 100%) !important;
}

#landing-top .landing-trips-board .landing-trips-toolbar {
    background: linear-gradient(135deg, hsl(0 0% 100%), hsl(46 38% 98%));
    border-color: rgb(15 23 42 / 0.1);
}

#landing-top .landing-trips-board .landing-trips-terminal,
#landing-top .landing-trips-board .landing-trips-view-toggle {
    border-color: rgb(15 23 42 / 0.1);
}

#landing-top .landing-trips-board .landing-trips-card-hot {
    background:
        linear-gradient(135deg, rgb(255 247 237 / 0.92), rgb(255 255 255 / 0.96))
        !important;
    border-color: rgb(245 158 11 / 0.35) !important;
    box-shadow: 0 12px 28px -24px rgb(180 83 9 / 0.55);
}

#landing-top .landing-trips-board .landing-trips-card-ready {
    background:
        linear-gradient(135deg, rgb(240 253 244 / 0.82), rgb(255 255 255 / 0.96))
        !important;
    border-color: rgb(16 185 129 / 0.28) !important;
}

#landing-top .landing-trips-board .landing-trips-live-dot::after {
    content: '';
    position: absolute;
    inset: -5px;
    border: 1px solid rgb(16 185 129 / 0.36);
    border-radius: 9999px;
    animation: landing-trip-live-pulse 2.2s ease-out infinite;
}

#landing-top .landing-trips-board .landing-trips-route::before {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 0.22rem;
    top: 0.5rem;
    width: 1px;
    background: linear-gradient(rgb(34 197 94 / 0.45), rgb(239 68 68 / 0.45));
}

#landing-top .landing-trips-board .landing-trips-stop-dot {
    box-shadow: 0 0 0 3px hsl(0 0% 100%);
}

#landing-top .landing-trips-board .landing-trips-progress::before {
    content: '';
    display: block;
    width: var(--trip-progress);
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, hsl(158 85% 34%), hsl(43 96% 56%));
}

#landing-top .landing-trips-board .landing-trips-action {
    background: hsl(220 13% 13%) !important;
    color: hsl(0 0% 100%) !important;
}

@keyframes landing-trip-live-pulse {
    0% {
        opacity: 0.65;
        transform: scale(0.8);
    }
    100% {
        opacity: 0;
        transform: scale(1.9);
    }
}

@keyframes landing-pulse-ring {
    0% {
        opacity: 0.55;
        transform: scale(1);
    }
    80% {
        opacity: 0;
        transform: scale(2.4);
    }
    100% {
        opacity: 0;
        transform: scale(2.4);
    }
}

.landing-hero-pulse > span:first-child {
    animation: landing-pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
    #landing-top .landing-trips-board .landing-trips-live-dot::after {
        animation: none;
    }

    .landing-hero-pulse > span:first-child {
        animation: none;
    }
}

#landing-top.landing-light .landing-hero-pill {
    background: rgb(255 255 255 / 0.55);
    border-color: rgb(15 23 42 / 0.12);
    color: rgb(31 41 55 / 0.78);
}

#landing-top.landing-light .landing-hero-secondary {
    border-color: rgb(15 23 42 / 0.12);
    color: rgb(31 41 55 / 0.85);
}

#landing-top.landing-light .landing-hero-secondary:hover {
    border-color: rgb(15 23 42 / 0.28);
    color: rgb(15 23 42);
}

#landing-top.landing-light .landing-hero-secondary .font-mono {
    color: rgb(71 85 105 / 0.7);
}

#landing-top.landing-light dl.grid.grid-cols-3 {
    background: rgb(15 23 42 / 0.06);
    border-color: rgb(15 23 42 / 0.10);
}

#landing-top.landing-light .landing-hero-stat {
    background: rgb(255 255 255 / 0.85);
}

#landing-top.landing-light .landing-hero-stat dt {
    color: rgb(71 85 105 / 0.78);
}

#landing-top.landing-light .landing-hero-stat dd {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .capability-artifact {
    background: rgb(255 255 255 / 0.92);
    border-color: rgb(15 23 42 / 0.10);
    box-shadow: 0 18px 50px -22px rgb(15 23 42 / 0.18);
}

#landing-top.landing-light .capability-artifact .border-white\/8 {
    border-color: rgb(15 23 42 / 0.08);
}

#landing-top.landing-light .capability-artifact .bg-white\/\[0\.03\] {
    background: rgb(15 23 42 / 0.03);
}

#landing-top.landing-light .capability-artifact .divide-white\/6 > * + * {
    border-color: rgb(15 23 42 / 0.06);
}

#landing-top.landing-light .capability-artifact .text-white\/82,
#landing-top.landing-light .capability-artifact .text-white {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .capability-artifact .text-white\/72 {
    color: rgb(31 41 55 / 0.78);
}

#landing-top.landing-light .capability-artifact .text-white\/55,
#landing-top.landing-light .capability-artifact .text-white\/60 {
    color: rgb(71 85 105 / 0.78);
}

#landing-top.landing-light .capability-artifact .text-white\/45 {
    color: rgb(71 85 105 / 0.55);
}

.integration-connector-mark.integration-mark-qb,
.integration-connector-mark.integration-mark-samsara {
    background: transparent !important;
    color: inherit !important;
    overflow: hidden;
}

.integration-connector-mark.integration-mark-qb {
    padding: 0;
}

/* Inset: wide wordmark+mark asset must sit inside the circular clip (no corner/bottom shearing). */
.integration-connector-mark.integration-mark-samsara {
    box-sizing: border-box;
    padding: 0.5rem;
}

.integration-mark-img {
    display: block;
    height: 100%;
    object-fit: contain;
    width: 100%;
}

.partner-roadmap {
    border-top: 1px solid var(--integration-border);
    padding-top: 48px;
}

.partner-roadmap-head {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 640px;
}

.partner-roadmap-kicker {
    color: var(--integration-faint);
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.partner-roadmap-title {
    color: var(--integration-text);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.25;
}

.partner-roadmap-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 28px;
}

@media (min-width: 768px) {
    .partner-roadmap-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .partner-roadmap-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
}

.partner-roadmap-tile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 14px 16px;
    border: 1px solid var(--integration-border);
    border-radius: 14px;
    background: var(--integration-surface);
    transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        transform 0.2s ease;
}

.partner-roadmap-tile:hover {
    border-color: var(--integration-border-strong);
    transform: translateY(-1px);
}

.partner-roadmap-name {
    color: var(--integration-text);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.005em;
}

.partner-roadmap-status {
    color: var(--integration-faint);
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.partner-roadmap-status-live {
    color: rgb(52 211 153);
}

.partner-roadmap-request {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 28px;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid var(--integration-border);
    color: var(--integration-text);
    font-size: 13px;
    font-weight: 500;
    transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        transform 0.2s ease;
}

.partner-roadmap-request:hover {
    border-color: var(--integration-border-strong);
    transform: translateY(-1px);
}

.partner-roadmap-request-arrow {
    transition: transform 0.2s ease;
}

.partner-roadmap-request:hover .partner-roadmap-request-arrow {
    transform: translateX(2px);
}

.testimonial-card {
    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background-color 0.25s ease;
}

.testimonial-card:hover {
    border-color: rgb(255 255 255 / 0.18);
    transform: translateY(-2px);
}

.testimonial-quote-mark {
    font-family: 'Cabinet Grotesk', 'Satoshi', ui-sans-serif, system-ui, sans-serif;
    font-size: 56px;
    font-weight: 600;
    line-height: 0.6;
    color: rgb(255 255 255 / 0.18);
    letter-spacing: -0.04em;
}

.testimonial-avatar {
    background: linear-gradient(140deg, rgb(255 255 255 / 0.12), rgb(255 255 255 / 0.04));
    border: 1px solid rgb(255 255 255 / 0.12);
    color: rgb(255 255 255 / 0.85);
}

#landing-top.landing-light .testimonial-card {
    border-color: rgb(15 23 42 / 0.10);
    background: rgb(255 255 255 / 0.85);
}

#landing-top.landing-light .testimonial-card:hover {
    border-color: rgb(15 23 42 / 0.18);
}

#landing-top.landing-light .testimonial-card .border-white\/8 {
    border-color: rgb(15 23 42 / 0.08);
}

#landing-top.landing-light .testimonial-card blockquote {
    color: hsl(210 16% 18%);
}

#landing-top.landing-light .testimonial-card .text-white {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .testimonial-card .text-white\/55 {
    color: rgb(71 85 105 / 0.85);
}

#landing-top.landing-light .testimonial-quote-mark {
    color: rgb(15 23 42 / 0.18);
}

#landing-top.landing-light .testimonial-avatar {
    background: linear-gradient(140deg, rgb(15 23 42 / 0.10), rgb(15 23 42 / 0.04));
    border-color: rgb(15 23 42 / 0.16);
    color: rgb(15 23 42 / 0.85);
}

.demo-form .grid {
    box-shadow: 0 24px 60px -28px rgb(0 0 0 / 0.6);
}

.demo-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.demo-field-label {
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgb(255 255 255 / 0.55);
}

.demo-field-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid rgb(255 255 255 / 0.10);
    background: rgb(255 255 255 / 0.04);
    color: rgb(255 255 255 / 0.92);
    font-size: 14px;
    line-height: 1.4;
    transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        box-shadow 0.2s ease;
}

.demo-field-input::placeholder {
    color: rgb(255 255 255 / 0.32);
}

.demo-field-input:focus {
    outline: none;
    border-color: rgb(255 255 255 / 0.32);
    background: rgb(255 255 255 / 0.06);
    box-shadow: 0 0 0 3px rgb(255 255 255 / 0.06);
}

.demo-field-textarea {
    resize: vertical;
    min-height: 96px;
    line-height: 1.55;
}

.demo-form-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.demo-form-success {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 6px 0;
}

.demo-form-success-icon {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: rgb(52 211 153 / 0.14);
    color: rgb(52 211 153);
    border: 1px solid rgb(52 211 153 / 0.32);
}

.demo-form-success-title {
    font-size: 15px;
    font-weight: 600;
    color: rgb(255 255 255 / 0.92);
}

.demo-form-success-sub {
    margin-top: 4px;
    font-size: 13px;
    color: rgb(255 255 255 / 0.55);
}

#landing-top.landing-light .demo-form .grid {
    background: rgb(255 255 255 / 0.85);
    border-color: rgb(15 23 42 / 0.10);
    box-shadow: 0 24px 60px -28px rgb(15 23 42 / 0.18);
}

#landing-top.landing-light .demo-field-label {
    color: rgb(71 85 105 / 0.85);
}

#landing-top.landing-light .demo-field-input {
    background: rgb(255 255 255 / 0.95);
    border-color: rgb(15 23 42 / 0.12);
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .demo-field-input::placeholder {
    color: rgb(71 85 105 / 0.55);
}

#landing-top.landing-light .demo-field-input:focus {
    border-color: rgb(15 23 42 / 0.32);
    background: rgb(255 255 255);
    box-shadow: 0 0 0 3px rgb(15 23 42 / 0.05);
}

#landing-top.landing-light .demo-form-success-title {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .demo-form-success-sub {
    color: rgb(71 85 105 / 0.85);
}

.landing-footer {
    position: relative;
    z-index: 1;
}

#landing-top.landing-light .landing-footer {
    background: hsl(42 38% 97%);
    border-color: rgb(15 23 42 / 0.10);
    color: hsl(210 16% 16%);
}

#landing-top.landing-light .landing-footer .text-white\/72 {
    color: rgb(31 41 55 / 0.78);
}

#landing-top.landing-light .landing-footer .text-white\/55 {
    color: rgb(71 85 105 / 0.78);
}

#landing-top.landing-light .landing-footer .text-white\/45 {
    color: rgb(71 85 105 / 0.65);
}

#landing-top.landing-light .landing-footer .border-white\/8 {
    border-color: rgb(15 23 42 / 0.08);
}

.landing-hero-card-glow {
    background: radial-gradient(
        80% 60% at 50% 50%,
        rgb(255 255 255 / 0.07) 0%,
        rgb(5 6 6 / 0) 65%
    );
    filter: blur(28px);
}

.landing-hero-card-stat {
    min-width: 0;
    background: rgb(7 8 8 / 0.7);
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.landing-hero-card-stat-label {
    font-family: var(--font-mono), ui-monospace, monospace;
    /* Hero 3-col grid: nowrap + slight size/track reduction so all three labels fit */
    font-size: 9.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgb(255 255 255 / 0.42);
    white-space: nowrap;
}

.landing-hero-card-stat-value {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: rgb(255 255 255);
}

.landing-hero-card-row {
    display: grid;
    grid-template-columns: 8px auto 1fr auto;
    align-items: center;
    gap: 10px;
    padding: 11px 18px;
}

.landing-hero-card-row-tone {
    width: 6px;
    height: 6px;
    border-radius: 999px;
}

.landing-hero-card-dot > span:first-child {
    animation: landing-pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
    .landing-hero-card-dot > span:first-child {
        animation: none;
    }
}

#landing-top.landing-light .landing-hero-card-inner {
    background: rgb(255 255 255 / 0.92);
    border-color: rgb(15 23 42 / 0.10);
    box-shadow: 0 28px 70px -28px rgb(15 23 42 / 0.22);
}

#landing-top.landing-light .landing-hero-card-inner .border-white\/8,
#landing-top.landing-light .landing-hero-card-inner .border-t {
    border-color: rgb(15 23 42 / 0.08);
}

#landing-top.landing-light .landing-hero-card-inner .bg-white\/\[0\.04\],
#landing-top.landing-light .landing-hero-card-inner .bg-white\/\[0\.025\] {
    background: rgb(15 23 42 / 0.04);
}

#landing-top.landing-light .landing-hero-card-inner .bg-white\/8 {
    background: rgb(15 23 42 / 0.10);
}

#landing-top.landing-light .landing-hero-card-stat {
    background: rgb(255 255 255 / 0.95);
}

#landing-top.landing-light .landing-hero-card-stat-label {
    color: rgb(71 85 105 / 0.72);
}

#landing-top.landing-light .landing-hero-card-stat-value,
#landing-top.landing-light .landing-hero-card-row .text-white\/85 {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .landing-hero-card-row .text-white\/55,
#landing-top.landing-light .landing-hero-card-inner .text-white\/55 {
    color: rgb(71 85 105 / 0.78);
}

#landing-top.landing-light .landing-hero-card-inner .text-white\/45,
#landing-top.landing-light .landing-hero-card-inner .text-white\/35 {
    color: rgb(71 85 105 / 0.55);
}

@keyframes landing-tone-flicker {
    0%, 100% {
        opacity: 1;
        filter: brightness(1);
    }
    50% {
        opacity: 0.55;
        filter: brightness(1.4);
    }
}

.capability-tone-dot.bg-emerald-400 {
    animation: landing-tone-flicker 3.2s ease-in-out infinite;
}

.capability-tone-dot.bg-amber-400 {
    animation: landing-tone-flicker 2.4s ease-in-out infinite;
    animation-delay: 0.4s;
}

.capability-tone-dot.bg-rose-400 {
    animation: landing-tone-flicker 2.8s ease-in-out infinite;
    animation-delay: 0.7s;
}

@media (prefers-reduced-motion: reduce) {
    .capability-tone-dot {
        animation: none !important;
    }
}

.preview-captions {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 720px) {
    .preview-captions {
        grid-template-columns: 1fr;
    }
}

.preview-caption {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 18px 20px;
    border-radius: 14px;
    border: 1px solid rgb(255 255 255 / 0.08);
    background: rgb(255 255 255 / 0.025);
}

.preview-caption-tag {
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgb(255 255 255 / 0.45);
}

.preview-caption-title {
    font-size: 14px;
    font-weight: 600;
    color: rgb(255 255 255 / 0.92);
    letter-spacing: -0.005em;
}

.preview-caption-body {
    font-size: 13px;
    line-height: 1.6;
    color: rgb(255 255 255 / 0.55);
}

#landing-top.landing-light .preview-caption {
    background: rgb(255 255 255 / 0.85);
    border-color: rgb(15 23 42 / 0.10);
}

#landing-top.landing-light .preview-caption-tag {
    color: rgb(71 85 105 / 0.65);
}

#landing-top.landing-light .preview-caption-title {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .preview-caption-body {
    color: rgb(31 41 55 / 0.78);
}

.integration-sync {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid var(--integration-border);
    background: var(--integration-surface);
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--integration-faint);
}

.integration-sync-dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: rgb(52 211 153);
    box-shadow: 0 0 0 3px rgb(52 211 153 / 0.18);
    animation: landing-tone-flicker 2.6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
    .integration-sync-dot {
        animation: none;
    }
}

.landing-testimonials-grid {
    align-items: stretch;
}

.testimonial-lead {
    background: linear-gradient(
        140deg,
        rgb(255 255 255 / 0.05) 0%,
        rgb(255 255 255 / 0.02) 100%
    );
    border-color: rgb(255 255 255 / 0.16);
    padding: 36px;
}

.testimonial-lead blockquote {
    font-size: 22px;
    line-height: 1.45;
    letter-spacing: -0.005em;
    color: rgb(255 255 255 / 0.92);
}

.testimonial-lead .testimonial-quote-mark {
    font-size: 88px;
}

.testimonial-outcome {
    display: inline-flex;
    align-items: baseline;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgb(255 255 255 / 0.10);
    background: rgb(255 255 255 / 0.04);
}

.testimonial-outcome-value {
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 12px;
    font-weight: 600;
    color: rgb(255 255 255 / 0.92);
    letter-spacing: -0.01em;
}

.testimonial-outcome-label {
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgb(255 255 255 / 0.5);
}

#landing-top.landing-light .testimonial-lead {
    background: rgb(255 255 255 / 0.92);
    border-color: rgb(15 23 42 / 0.12);
}

#landing-top.landing-light .testimonial-outcome {
    background: rgb(15 23 42 / 0.04);
    border-color: rgb(15 23 42 / 0.10);
}

#landing-top.landing-light .testimonial-outcome-value {
    color: hsl(210 16% 12%);
}

#landing-top.landing-light .testimonial-outcome-label {
    color: rgb(71 85 105 / 0.78);
}

</style>
