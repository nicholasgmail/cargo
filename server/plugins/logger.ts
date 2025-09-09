export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', (event) => {
        console.log('📥 Request:', event.path)
    })

    nitroApp.hooks.hook('response', (event, response) => {
        console.log('📤 Response:', event.path, response.status)
    })
})
