import { z } from 'astro/zod'
import { ICON_SLUGS, type IconSlug } from './icons'

export const iconSlugSchema = z.enum(ICON_SLUGS as [IconSlug, ...IconSlug[]])

export const heroStatSchema = z.object({
    label: z.string().min(1),
    value: z.string().min(1),
    note: z.string().min(1).optional(),
})

export const heroSchema = z.object({
    stats: z.array(heroStatSchema).min(1),
})

export const metricSchema = z.object({
    label: z.string().min(1),
    value: z.string().min(1),
})

const artifactRowSchema = z.record(z.union([z.string(), z.boolean()]))

export const artifactSchema = z.object({
    kind: z.string().min(1),
    heading: z.string().min(1),
    rows: z.array(artifactRowSchema).min(1),
})

export const capabilitySchema = z.object({
    icon: iconSlugSchema,
    label: z.string().min(1),
    summary: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    metrics: z.array(metricSchema).min(1),
    pull: z.string().min(1),
    artifact: artifactSchema,
})

export const capabilitiesSchema = z.object({
    items: z.array(capabilitySchema).min(1),
})

export const featuredIntegrationSchema = z.object({
    description: z.string().min(1),
    mark: z.string().min(1),
    markStyle: z.string().min(1),
    name: z.string().min(1),
    points: z.array(z.string().min(1)).min(1),
    sync: z.array(z.string().min(1)).min(2),
    type: z.string().min(1),
    vendors: z
        .array(
            z.object({
                color: z.string().min(1),
                logo: z.string().min(1).optional(),
                logoStyle: z.string().min(1).optional(),
                mark: z.string().min(1),
                name: z.string().min(1),
                style: z.string().min(1).optional(),
            })
        )
        .min(1),
})

export const integrationHandoffSchema = z.object({
    destination: z.string().min(1),
    description: z.string().min(1),
    icon: iconSlugSchema,
    source: z.string().min(1),
    title: z.string().min(1),
})

export const partnerRoadmapEntrySchema = z.object({
    name: z.string().min(1),
    status: z.string().min(1),
})

export const integrationsSchema = z.object({
    featured: z.array(featuredIntegrationSchema).min(1),
    handoffs: z.array(integrationHandoffSchema).min(1),
    roadmap: z.array(partnerRoadmapEntrySchema).min(1),
})

export const testimonialOutcomeSchema = z.object({
    label: z.string().min(1),
    value: z.string().min(1),
})

export const testimonialSchema = z.object({
    quote: z.string().min(1),
    name: z.string().min(1),
    role: z.string().min(1),
    company: z.string().min(1),
    initials: z.string().min(1),
    outcome: testimonialOutcomeSchema,
    lead: z.boolean().optional(),
})

export const testimonialsSchema = z.object({
    items: z.array(testimonialSchema).min(1),
})

export const footerLinkSchema = z.object({
    label: z.string().min(1),
    href: z.string().min(1),
})

export const footerColumnSchema = z.object({
    heading: z.string().min(1),
    links: z.array(footerLinkSchema).min(1),
})

export const footerSchema = z.object({
    columns: z.array(footerColumnSchema).min(1),
})

const siteContactChannelSchema = z.object({
    label: z.string().min(1),
    phoneDisplay: z.string().min(1),
    phoneHref: z.string().min(1),
    emailDisplay: z.string().min(1),
    emailHref: z.string().min(1),
})

export const siteContactSchema = z.object({
    sales: siteContactChannelSchema,
    support: siteContactChannelSchema,
})

export const pricingPageFaqSchema = z.object({
    q: z.string().min(1),
    a: z.string().min(1),
})

export const pricingPageSchema = z.object({
    meta: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
    }),
    hero: z.object({
        headline: z.string().min(1),
        subhead: z.string().min(1),
        contrastLine: z.string().min(1),
    }),
    rates: z.object({
        perUnitLabel: z.string().min(1),
        perUnitDetail: z.string().min(1),
        perUnitAmount: z.string().min(1),
        minimumLabel: z.string().min(1),
        minimumAmount: z.string().min(1),
        brokerageTitle: z.string().min(1),
        brokerageDescription: z.string().min(1),
        brokerageAmount: z.string().min(1),
        brokerageSuffix: z.string().min(1),
    }),
    estimator: z.object({
        trucksLabel: z.string().min(1),
        driversLabel: z.string().min(1),
        brokerageToggle: z.string().min(1),
    }),
    trialNote: z.string().min(1),
    faq: z.array(pricingPageFaqSchema).min(1),
    disclaimer: z.string().min(1),
})

export const demoSchema = z.object({
    fleetSizeOptions: z.array(z.string().min(1)).min(1),
})

export const comparisonBulletSchema = z.object({
    type: z.enum(['pro', 'con']),
    text: z.string().min(1),
})

export const comparisonCardSchema = z.object({
    variant: z.enum(['bolt', 'legacy', 'modern']),
    /** Short promo line (e.g. field test) — shown prominently on the card */
    badge: z.string().optional(),
    eyebrow: z.string().min(1),
    descriptor: z.string().min(1),
    name: z.string().min(1),
    bullets: z.array(comparisonBulletSchema).min(2),
    pricingLine: z.string().min(1),
})

export const comparisonSchema = z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    columns: z.array(comparisonCardSchema).length(3),
})
