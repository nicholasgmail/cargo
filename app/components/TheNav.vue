<script setup lang="ts">
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

// твої посилання з hash
const links = [
  {name: 'Domov', path: '/', hash: ''},
  {name: 'Přeprava', path: '/about', hash: '#banner'},
  {name: 'Park', path: '/park', hash: '#park'},
  {name: 'Stěhování', path: '/migration', hash: '#migration'},
  {name: 'Kontakt', path: '/contacts', hash: '#contacts'}
]

// функція яка перевіряє активність
function isActive(link: { path: string; hash: string }) {
  return computed(() => {
    return route.path === link.path && route.hash === link.hash
  })
}

const i18n = useI18n()
const switchLanguage = (locale: string) => {
  i18n.locale.value = locale
}
</script>

<template>
  <nav id="nav">
    <ul class="flex justify-center content-center">
      <li v-for="link in links" :key="link.hash"
          :class="{ current: isActive(link).value }">
        <NuxtLink :to="{ path: link.path, hash: link.hash }">
          {{ link.name }}
        </NuxtLink>
      </li>
      <li>
        <button class="!bg-green-800 lang_it" @click="switchLanguage('cs')">CS</button>
      </li>
      <li>
        <button class="!bg-blue-800 lang_it" @click="switchLanguage('en')">EN</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.lang_it {
  font-size: 1rem !important;
}
</style>