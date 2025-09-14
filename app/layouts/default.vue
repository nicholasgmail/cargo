<script setup lang="ts">

const link = { name: 'contact us', path: '/contacts', hash: '#contacts' };

const i18n = useI18n()
const localeCookie = useCookie('locale')

const switchLanguage = (locale: string) => {
  i18n.locale.value = locale
  localeCookie.value = locale
}

// при завантаженні
onMounted(() => {
  if (localeCookie.value) {
    i18n.locale.value = localeCookie.value
  }
})

setHeader(event, 'content-type', 'application/xml')

</script>
<template>
  <div id="page-wrapper" class="homepage is-preload px-20">
    <TheHeader/>
    <TheNav/>
    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <h2>{{ $t('Benefits of professional moving services')}}</h2>
        <p>{{ $t('High-quality and durable packaging materials, Fast and safe transportation, Professional advice and assistance')}}
        </p><NuxtLink :to="{ path: link.path, hash: link.hash }" class="button scrolly">
         {{ $t(link.name)}}
        </NuxtLink>
      </div>
    </section>
    <!-- Main -->
    <slot/>
    <TheFooter/>
  </div>
</template>
