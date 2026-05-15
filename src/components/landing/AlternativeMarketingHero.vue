<script setup>
import { Cloud, Headphones, Plug, Sparkles, Truck, Zap } from 'lucide-vue-next'

const emit = defineEmits(['schedule-demo'])

const features = [
    {
        icon: Zap,
        title: 'Fast to onboard',
        description:
            'Most teams are fully live in under a week. No 6-month implementation projects.',
    },
    {
        icon: Cloud,
        title: 'Fully cloud-based',
        description: 'Access from anywhere. No servers to maintain, no software to install.',
    },
    {
        icon: Sparkles,
        title: 'Easiest user experience',
        description:
            'Designed so your whole team can use it, not just your most technical people.',
    },
    {
        icon: Plug,
        title: 'Integrates with your tools',
        description:
            'ELD, accounting, load boards, fuel cards — connect what you already use.',
    },
    {
        icon: Truck,
        title: 'End-to-end for carriers & brokers',
        description:
            'Full TMS functionality from dispatch to settlement, for any operation model.',
    },
    {
        icon: Headphones,
        title: 'Nashville-based white glove service',
        description: 'Real people who pick up the phone. Dedicated support, not a ticket queue.',
    },
]
</script>

<template>
    <section
        class="landing-section alternative-marketing-hero border-t border-white/10 bg-[#080a0b] px-4 py-8 text-white sm:px-6 sm:py-10"
        aria-labelledby="alt-hero-heading"
    >
        <div class="mx-auto max-w-[1240px]">
            <h2
                id="alt-hero-heading"
                class="text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
                Why Bolt?
            </h2>
            <p class="mt-3 max-w-2xl text-pretty text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
                We rebuilt dispatch, money, and visibility from scratch—cloud-native, fast to
                roll out, and easy to use whether you’re a handful of trucks or a national
                fleet. Same product either way.
            </p>

            <div class="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-12">
                <div v-for="item in features" :key="item.title" class="flex gap-3.5">
                    <div
                        class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/68"
                        aria-hidden="true"
                    >
                        <component :is="item.icon" class="size-[20px] stroke-[1.75]" />
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-[14px] font-semibold tracking-tight text-white">
                            {{ item.title }}
                        </h3>
                        <p class="mt-1 text-[13px] leading-relaxed text-white/58">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="alt-hero-cta mt-10 flex flex-wrap items-center gap-3">
                <a
                    href="https://app.bolttms.com/register?step=registration"
                    class="landing-cta inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-black shadow-xs transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]"
                >
                    Start your field test
                </a>
                <button
                    type="button"
                    class="alt-hero-cta-secondary inline-flex h-11 items-center justify-center rounded-full border border-white/14 px-5 text-[14px] font-medium text-white/78 transition hover:border-white/28 hover:text-white"
                    @click="emit('schedule-demo')"
                >
                    Schedule a demo
                </button>
                <span class="alt-hero-cta-fineprint text-[12px] leading-snug text-white/50">
                    30-day field test · Month-to-month after · No long-term contract
                </span>
            </div>
        </div>
    </section>
</template>
