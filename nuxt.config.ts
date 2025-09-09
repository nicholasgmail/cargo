export default defineNuxtConfig({
    compatibilityDate: '2025-10-04',
    ssr: true,
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/tailwind.css'
    ],
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                {name: 'viewport', content: 'width=deviyace-width, initial-scale=1'}
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                {src: '/assets/js/jquery.min.js', tagPosition: "bodyClose"},
                {src: '/assets/js/jquery.dropotron.min.js', tagPosition: "bodyClose"},
                {src: '/assets/js/jquery.scrolly.min.js', tagPosition: "bodyClose"},
                {src: '/assets/js/browser.min.js', tagPosition: "bodyClose"},
                {src: '/assets/js/breakpoints.min.js', tagPosition: "bodyClose"},
                {src: '/assets/js/util.js', tagPosition: "bodyClose"},
                {src: '/assets/js/main.js', tagPosition: "bodyClose"},
            ],
            // link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            //  { rel: 'stylesheet', href: 'https://awesome-lib.css' }
            //],
            // please note that this is an area that is likely to change
            style: [
                // <style>:root { color: red }</style>
                {textContent: ':root { color: red }'}
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                {textContent: 'JavaScript is required'}
            ]
        },
        public: '/docs',
    },
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
            autoprefixer: {},
        },
    },
    devtools: {enabled: true},
    nitro: {
        prerender: {
            routes: [
                '/'
            ],
            crawlLinks: true
        },
        preset: 'static'
    },
    modules: [
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxt/content',
        'nuxt-og-image',
        '@pinia/nuxt',
        '@nuxtjs/i18n'
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: [
            {code: 'cs', name: 'Čeština', iso: 'cs-CZ', file: 'cs.json'},
            {code: 'en', name: 'English', iso: 'en-US', file: 'en.json'}
        ],
        defaultLocale: 'cs',
        lazy: true,
        vueI18n: './i18n.config.ts',
        langDir: 'locales/'
    }
})