import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'

import {
    capabilitiesSchema,
    demoSchema,
    footerSchema,
    heroSchema,
    integrationsSchema,
    testimonialsSchema,
} from './content/schemas'

// Each homepage section is a singleton JSON file. The `file()` loader expects
// an array of entries (or an id-keyed object), so we wrap each singleton as a
// single entry whose id matches the section name.
const wrapSingleton = (name: string) => (text: string) => [
    { id: name, ...JSON.parse(text) },
]

const hero = defineCollection({
    loader: file('src/content/home/hero.json', { parser: wrapSingleton('hero') }),
    schema: heroSchema,
})

const capabilities = defineCollection({
    loader: file('src/content/home/capabilities.json', {
        parser: wrapSingleton('capabilities'),
    }),
    schema: capabilitiesSchema,
})

const integrations = defineCollection({
    loader: file('src/content/home/integrations.json', {
        parser: wrapSingleton('integrations'),
    }),
    schema: integrationsSchema,
})

const testimonials = defineCollection({
    loader: file('src/content/home/testimonials.json', {
        parser: wrapSingleton('testimonials'),
    }),
    schema: testimonialsSchema,
})

const footer = defineCollection({
    loader: file('src/content/home/footer.json', {
        parser: wrapSingleton('footer'),
    }),
    schema: footerSchema,
})

const demo = defineCollection({
    loader: file('src/content/home/demo.json', { parser: wrapSingleton('demo') }),
    schema: demoSchema,
})

export const collections = {
    hero,
    capabilities,
    integrations,
    testimonials,
    footer,
    demo,
}
