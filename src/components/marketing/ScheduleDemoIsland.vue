<script setup>
import { ref } from 'vue'

import logoFull from '../../assets/img/logo-full.png?url'
import ScheduleDemoModal from '../landing/ScheduleDemoModal.vue'

defineProps({
    /** Extra classes for the primary button */
    buttonClass: {
        type: String,
        default: '',
    },
    /** `dark` matches marketing subpages; `light` for cream landing sections */
    theme: {
        type: String,
        default: 'dark',
    },
    /** Button label (full text when not abbreviated) */
    label: {
        type: String,
        default: 'Schedule demo',
    },
    /** Short label when `abbreviateOnNarrow` and viewport &lt; `lg` */
    shortLabel: {
        type: String,
        default: 'Demo',
    },
    /** Abbreviate label below `lg` (nav / tight toolbars) */
    abbreviateOnNarrow: {
        type: Boolean,
        default: true,
    },
})

const open = ref(false)

const defaultButtonClass =
    'inline-flex h-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-6 text-[14px] font-medium text-white transition hover:border-white/28 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]'
</script>

<template>
    <span class="inline-flex w-full max-w-full flex-wrap items-center gap-3 sm:w-auto">
        <button type="button" :class="buttonClass || defaultButtonClass" @click="open = true">
            <template v-if="abbreviateOnNarrow">
                <span class="hidden lg:inline">{{ label }}</span>
                <span class="lg:hidden">{{ shortLabel }}</span>
            </template>
            <template v-else>
                {{ label }}
            </template>
        </button>
        <ScheduleDemoModal v-model="open" :logo-src="logoFull" :theme="theme" />
    </span>
</template>
