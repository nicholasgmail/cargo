<script setup lang="ts">
const link = { name: 'kontaktujte nás', path: '/contacts', hash: '#contacts' };

</script>
<template>
  <div id="page-wrapper" class="homepage is-preload px-20">
    <TheHeader/>
    <TheNav/>
    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <h2>Výhody profesionálních stěhovacích služeb</h2>
        <p>Kvalitní a odolné balicí materiály,
          Rychlá a bezpečná přeprava,
          Profesionální poradenství a pomoc</p>
        <NuxtLink :to="{ path: link.path, hash: link.hash }" class="button scrolly">
          {{link.name}}
        </NuxtLink>
      </div>
    </section>
    <!-- Main -->
    <slot/>
    <TheFooter/>
  </div>
</template>
