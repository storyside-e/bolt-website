import {
    BarChart3,
    Navigation,
    Package,
    Receipt,
    Settings,
    Truck,
    Wallet,
} from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

export const ICON_REGISTRY = {
    'bar-chart-3': BarChart3,
    'navigation': Navigation,
    'package': Package,
    'receipt': Receipt,
    'settings': Settings,
    'truck': Truck,
    'wallet': Wallet,
} as const satisfies Record<string, FunctionalComponent>

export type IconSlug = keyof typeof ICON_REGISTRY
export const ICON_SLUGS = Object.keys(ICON_REGISTRY) as IconSlug[]

export function resolveIcon(slug: string): FunctionalComponent {
    if (!(slug in ICON_REGISTRY)) {
        throw new Error(
            `[content] Unknown icon slug "${slug}". Allowed: ${ICON_SLUGS.join(', ')}`
        )
    }
    return ICON_REGISTRY[slug as IconSlug]
}
