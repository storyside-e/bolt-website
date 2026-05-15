<script setup>
import { Check, X } from 'lucide-vue-next'

defineProps({
    content: {
        type: Object,
        required: true,
    },
    /** Dark chrome pages (e.g. /pricing) — skip landing section borders / full-bleed tricks */
    embedded: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <section
        id="tms-comparison"
        class="market-comparison-section scroll-mt-20 text-white"
        :class="
            embedded
                ? 'market-comparison--embedded'
                : 'border-y border-white/10 bg-[#050606] px-4 py-14 sm:px-6 sm:py-16'
        "
        aria-labelledby="tms-comparison-heading"
    >
        <div class="mx-auto max-w-[1240px]">
            <h2
                id="tms-comparison-heading"
                class="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem] sm:leading-snug"
            >
                {{ content.title }}
            </h2>
            <p
                class="market-comparison-intro mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/58 sm:mt-4 sm:text-[16px]"
            >
                {{ content.subtitle }}
            </p>

            <div
                class="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-5 lg:items-stretch"
            >
                <div
                    v-for="col in content.columns"
                    :key="col.variant"
                    class="market-comparison-column flex h-full flex-col"
                >
                    <p
                        v-if="col.badge"
                        class="market-comparison-ribbon mb-3 text-center text-[12px] font-semibold leading-snug sm:text-[12.5px]"
                    >
                        <span class="market-comparison-ribbon-dot" aria-hidden="true" />
                        {{ col.badge }}
                    </p>
                    <p
                        v-else
                        class="market-comparison-ribbon market-comparison-ribbon--placeholder mb-3 text-center text-[12px] font-semibold leading-snug sm:text-[12.5px]"
                        aria-hidden="true"
                    >
                        &nbsp;
                    </p>

                    <article
                        class="market-comparison-card flex h-full flex-col rounded-xl border p-5 sm:p-6"
                        :class="
                            col.variant === 'bolt'
                                ? 'market-comparison-card--bolt'
                                : 'market-comparison-card--other border-white/10 bg-[#0a0b0c]'
                        "
                    >
                        <p
                            class="market-comparison-eyebrow font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50"
                        >
                            {{ col.eyebrow }}
                        </p>
                        <p class="market-comparison-descriptor mt-2 text-[13px] leading-snug text-white/50">
                            {{ col.descriptor }}
                        </p>

                        <h3 class="market-comparison-title mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                            {{ col.name }}
                        </h3>

                        <ul
                            class="market-comparison-bullets mt-6 flex flex-1 flex-col gap-3.5 text-[14px] leading-snug text-white/78"
                        >
                            <li
                                v-for="(b, i) in col.bullets"
                                :key="i"
                                class="flex gap-3"
                            >
                                <span
                                    class="market-comparison-icon mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full"
                                    :data-bullet="b.type"
                                    :class="
                                        b.type === 'pro'
                                            ? 'bg-white/[0.08] text-white/72'
                                            : 'bg-white/[0.08] text-white/55'
                                    "
                                    aria-hidden="true"
                                >
                                    <Check v-if="b.type === 'pro'" class="size-3.5" stroke-width="2.5" />
                                    <X v-else class="size-3.5" stroke-width="2.25" />
                                </span>
                                <span>{{ b.text }}</span>
                            </li>
                        </ul>

                        <p
                            class="market-comparison-foot mt-8 border-t border-white/10 pt-5 text-[12px] font-medium leading-relaxed text-white/55"
                        >
                            {{ col.pricingLine }}
                        </p>
                    </article>
                </div>
            </div>

            <slot name="after" />
        </div>
    </section>
</template>

<style>
/* Full-page compare band (homepage) */
#landing-top.landing-light .market-comparison-section:not(.market-comparison--embedded) {
    background: hsl(42 30% 96%);
    border-color: rgb(0 0 0 / 0.08);
    color: #0f172a;
}

/* Pricing: no extra slab — sits on the same cream as the rest of the page */
#landing-top.landing-light .market-comparison--embedded {
    background: transparent;
    border: none;
    padding: 0;
    color: #0f172a;
}

#landing-top.landing-light .market-comparison--embedded #tms-comparison-heading,
#landing-top.landing-light .market-comparison-section #tms-comparison-heading {
    color: #0f172a;
}

#landing-top.landing-light .market-comparison-intro {
    color: rgb(71 85 105 / 0.95);
}

/* Ribbon (lifted out of the card) ----------------------------------------- */
.market-comparison-ribbon {
    align-items: center;
    border-radius: 999px;
    color: rgb(15 23 42 / 0.88);
    display: inline-flex;
    gap: 0.55rem;
    justify-content: center;
    margin-inline: auto;
    max-width: max-content;
    padding: 0.45rem 0.9rem;
    background: linear-gradient(180deg, rgb(255 255 255 / 0.92), rgb(255 248 220 / 0.85));
    border: 1px solid rgb(15 23 42 / 0.08);
    box-shadow:
        0 1px 0 rgb(255 255 255 / 0.7) inset,
        0 6px 14px -10px rgb(15 23 42 / 0.35);
}

.market-comparison-ribbon-dot {
    background: #facc15;
    border-radius: 9999px;
    box-shadow: 0 0 0 3px rgb(250 204 21 / 0.18);
    display: inline-block;
    height: 0.45rem;
    width: 0.45rem;
}

.market-comparison-ribbon--placeholder {
    visibility: hidden;
    pointer-events: none;
    border: none;
    background: none;
    box-shadow: none;
}

/* Light theme: keep ribbon visually grounded on cream */
#landing-top.landing-light .market-comparison-ribbon {
    background: linear-gradient(180deg, #ffffff, #fff7d8);
    border-color: rgb(15 23 42 / 0.08);
    color: rgb(15 23 42 / 0.86);
}

/* Dark theme: subtle white wash so it doesn't shout */
#landing-top.landing-dark .market-comparison-ribbon {
    background: rgb(255 255 255 / 0.05);
    border-color: rgb(255 255 255 / 0.12);
    color: rgb(255 255 255 / 0.82);
    box-shadow: none;
}
#landing-top.landing-dark .market-comparison-ribbon-dot {
    box-shadow: 0 0 0 3px rgb(250 204 21 / 0.18);
}

/* Cards ------------------------------------------------------------------- */
#landing-top.landing-light .market-comparison-card--other {
    background: rgb(255 255 255 / 0.52);
    border-color: rgb(15 23 42 / 0.08);
    box-shadow: none;
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-eyebrow {
    color: rgb(71 85 105 / 0.95);
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-descriptor {
    color: rgb(100 116 139);
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-title {
    color: #0f172a;
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-bullets {
    color: rgb(51 65 85);
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-foot {
    color: rgb(71 85 105);
    border-color: rgb(15 23 42 / 0.08);
}

#landing-top.landing-light .market-comparison-card--other .market-comparison-icon[data-bullet='con'] {
    background: rgb(15 23 42 / 0.06);
    color: rgb(71 85 105);
}

/* Bolt card — refined, single-accent (no green) */
.market-comparison-card--bolt {
    background:
        linear-gradient(180deg, rgb(250 204 21 / 0.05), rgb(250 204 21 / 0.0) 70%),
        #0c0d0e;
    border-color: rgb(250 204 21 / 0.28);
    box-shadow:
        0 0 0 1px rgb(250 204 21 / 0.04),
        0 22px 50px -34px rgb(0 0 0 / 0.6);
    position: relative;
}

.market-comparison-card--bolt::before {
    background: linear-gradient(
        90deg,
        transparent 0%,
        #facc15 25%,
        #facc15 75%,
        transparent 100%
    );
    border-radius: 0.75rem 0.75rem 0 0;
    content: '';
    height: 2px;
    left: 12%;
    opacity: 0.55;
    pointer-events: none;
    position: absolute;
    right: 12%;
    top: -1px;
}

.market-comparison-card--bolt .market-comparison-eyebrow {
    color: rgb(250 204 21 / 0.92);
}

.market-comparison-card--bolt .market-comparison-icon[data-bullet='pro'] {
    background: rgb(250 204 21 / 0.16);
    color: rgb(250 204 21 / 0.95);
}

.market-comparison-card--bolt .market-comparison-foot {
    border-color: rgb(250 204 21 / 0.22);
    color: rgb(250 204 21 / 0.92);
}

#landing-top.landing-light .market-comparison-card--bolt {
    background:
        linear-gradient(180deg, #fff8d8, #fffdf2 60%, rgb(255 255 255 / 0.6) 100%);
    border-color: rgb(180 132 0 / 0.32);
    box-shadow:
        0 0 0 1px rgb(180 132 0 / 0.04),
        0 18px 40px -34px rgb(120 80 0 / 0.4);
}

#landing-top.landing-light .market-comparison-card--bolt::before {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgb(180 132 0 / 0.7) 25%,
        rgb(180 132 0 / 0.7) 75%,
        transparent 100%
    );
    opacity: 0.7;
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-eyebrow {
    color: rgb(146 105 0);
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-descriptor {
    color: rgb(71 85 105 / 0.95);
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-title {
    color: #0f172a;
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-bullets {
    color: rgb(30 41 59);
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-foot {
    border-color: rgb(180 132 0 / 0.22);
    color: rgb(146 105 0);
}

#landing-top.landing-light .market-comparison-card--bolt .market-comparison-icon[data-bullet='pro'] {
    background: rgb(180 132 0 / 0.14);
    color: rgb(146 105 0);
}
</style>
