import { z } from 'astro/zod'
import type { FunctionalComponent } from 'vue'

import heroJson from './home/hero.json'
import capabilitiesJson from './home/capabilities.json'
import integrationsJson from './home/integrations.json'
import testimonialsJson from './home/testimonials.json'
import footerJson from './home/footer.json'
import demoJson from './home/demo.json'

import { resolveIcon } from './icons'
import {
    capabilitiesSchema,
    capabilitySchema,
    demoSchema,
    footerSchema,
    heroSchema,
    integrationHandoffSchema,
    integrationsSchema,
    testimonialsSchema,
} from './schemas'

function safeParse<T>(name: string, schema: z.ZodType<T>, value: unknown): T {
    const result = schema.safeParse(value)
    if (result.success) {
        return result.data
    }
    const message = result.error.issues
        .map((issue) => `${issue.path.join('.') || '<root>'}: ${issue.message}`)
        .join('; ')
    throw new Error(`[content] ${name}.json failed schema validation — ${message}`)
}

const heroParsed = safeParse('hero', heroSchema, heroJson)
const capabilitiesParsed = safeParse(
    'capabilities',
    capabilitiesSchema,
    capabilitiesJson
)
const integrationsParsed = safeParse(
    'integrations',
    integrationsSchema,
    integrationsJson
)
const testimonialsParsed = safeParse(
    'testimonials',
    testimonialsSchema,
    testimonialsJson
)
const footerParsed = safeParse('footer', footerSchema, footerJson)
const demoParsed = safeParse('demo', demoSchema, demoJson)

type Capability = z.infer<typeof capabilitySchema>
type IntegrationHandoff = z.infer<typeof integrationHandoffSchema>

type CapabilityResolved = Omit<Capability, 'icon'> & { icon: FunctionalComponent }
type IntegrationHandoffResolved = Omit<IntegrationHandoff, 'icon'> & {
    icon: FunctionalComponent
}

export const heroStats = heroParsed.stats

export const capabilities: CapabilityResolved[] = capabilitiesParsed.items.map(
    (capability) => ({ ...capability, icon: resolveIcon(capability.icon) })
)

export const featuredIntegrations = integrationsParsed.featured

export const integrationHandoffs: IntegrationHandoffResolved[] =
    integrationsParsed.handoffs.map((handoff) => ({
        ...handoff,
        icon: resolveIcon(handoff.icon),
    }))

export const partnerRoadmap = integrationsParsed.roadmap

export const testimonials = testimonialsParsed.items

export const fleetSizeOptions = demoParsed.fleetSizeOptions

export const footerColumns = footerParsed.columns
