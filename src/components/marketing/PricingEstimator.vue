<script setup>
import { computed, ref } from 'vue'

import pricing from '../../content/home/pricing.json'

const trucks = ref(5)
const drivers = ref(8)
const brokerage = ref(false)

const activeCount = computed(() =>
    Math.max(0, Number(trucks.value) || 0, Number(drivers.value) || 0)
)

const baseMonthly = computed(() => Math.max(100, activeCount.value * 20))

const totalMonthly = computed(() => baseMonthly.value + (brokerage.value ? 200 : 0))

function formatUsd(n) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(n)
}
</script>

<template>
    <section
        class="pricing-surface rounded-xl border border-white/10 p-6 sm:p-8"
        aria-labelledby="pricing-estimator-heading"
    >
        <h2
            id="pricing-estimator-heading"
            class="text-lg font-semibold tracking-tight text-white"
        >
            Estimate your monthly bill
        </h2>
        <p class="mt-2 text-[14px] leading-relaxed text-white/55">
            We bill the greater of active trucks or active drivers. Minimum
            {{ pricing.rates.minimumAmount }} per month applies before add-ons.
        </p>

        <div class="mt-8 grid gap-6 sm:grid-cols-2">
            <label class="block text-left">
                <span class="demo-field-label mb-2 block text-[12px] font-medium">
                    {{ pricing.estimator.trucksLabel }}
                </span>
                <input
                    v-model.number="trucks"
                    type="number"
                    min="0"
                    step="1"
                    class="demo-field-input min-h-11 tabular-nums"
                />
            </label>
            <label class="block text-left">
                <span class="demo-field-label mb-2 block text-[12px] font-medium">
                    {{ pricing.estimator.driversLabel }}
                </span>
                <input
                    v-model.number="drivers"
                    type="number"
                    min="0"
                    step="1"
                    class="demo-field-input min-h-11 tabular-nums"
                />
            </label>
        </div>

        <label class="pricing-estimator-check mt-6 flex cursor-pointer items-start gap-3 text-left">
            <input
                v-model="brokerage"
                type="checkbox"
                class="mt-1 size-4 shrink-0 rounded border-white/25 bg-[#050606] text-[#facc15] focus:ring-[#facc15]/40"
            />
            <span class="text-[14px] leading-snug text-white/72">
                {{ pricing.estimator.brokerageToggle }}
            </span>
        </label>

        <div class="pricing-estimator-total mt-8 rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/38">
                        Estimated total
                    </p>
                    <p class="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-white">
                        {{ formatUsd(totalMonthly) }}
                        <span class="text-base font-medium text-white/45">/ mo</span>
                    </p>
                </div>
                <p class="max-w-xs text-[13px] leading-relaxed text-white/50">
                    {{ formatUsd(Math.max(100, activeCount * 20)) }} platform
                    <span v-if="brokerage"> + {{ formatUsd(200) }} brokerage</span>
                    <span v-if="activeCount === 0"> — minimum {{ pricing.rates.minimumAmount }} applies</span>
                    .
                </p>
            </div>
        </div>
    </section>
</template>
