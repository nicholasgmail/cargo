<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <!-- Footer -->
  <footer id="footer" class="!pt-1">
    <div class="container">
      <p style="margin: 0">E-mail: <a href="mailto:kivenko1997@meta.ua">kivenko1997@meta.ua</a></p>
      <p style="margin: 0">{{$t("Phone:")}} <a href="tel:+420722767091">+420 722 767 091</a></p>
      <p style="margin: 0">{{$t("The company's registered office is: Prague 9, Hloubětín, Nademlejnská 600/1, ZIP code 198 00.")}}</p>
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