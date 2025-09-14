<script setup lang="ts">
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
</script>
<template>
  <div id="page-wrapper" class="homepage is-preload px-20">
    <div class="row justify-center content-center">
      <div class="col-auto md:hidden">
        <div class="flex flex-row justify-around items-center gap-4 !my-4">
          <button class="!bg-green-800 lang_it" @click="switchLanguage('en')">CS</button>
          <button class="!bg-blue-800 lang_it" @click="switchLanguage('cs')">EN</button>
        </div>
      </div>
    </div>
    <TheNav/>
    <!-- Main -->
    <slot/>
    <TheFooter/>
  </div>
</template>
