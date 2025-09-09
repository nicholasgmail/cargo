<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <!-- Footer -->
  <footer id="footer" class="!pt-1">
    <div class="container">
      <!-- Copyright -->
      <div id="copyright">
        <ul class="menu">
          <li>&copy; {{ year }} {{ $t(`The company's business name is: Kivenko s.r.o.`)}}</li><li>
          <a href="/"></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>