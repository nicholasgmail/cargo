<script setup lang="ts">
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

// твої посилання з hash
const links = [
  {name: "Home", path: '/', hash: ''},
  {name: "Transportation", path: '/about', hash: '#banner'},
  {name: "Park", path: '/park', hash: '#park'},
  {name: "Moving", path: '/migration', hash: '#migration'},
  {name: "Contact", path: '/contacts', hash: '#contacts'}
]

// функція яка перевіряє активність
function isActive(link: { path: string; hash: string }) {
  return computed(() => {
    return route.path === link.path && route.hash === link.hash
  })
}

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
  (function($) {

    var	$window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
      xlarge:  [ '1281px',  '1680px' ],
      large:   [ '981px',   '1280px' ],
      medium:  [ '737px',   '980px'  ],
      small:   [ '361px',   '736px'  ],
      xsmall:  [ null,      '360px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-preload');
      }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
      mode: 'fade',
      noOpenerFade: true,
      speed: 300,
      alignment: 'center'
    });

    // Scrolly
    $('.scrolly').scrolly({
      speed: 1000,
      offset: function() { return $nav.height() - 5; }
    });

    // Nav.

    // Title Bar.
    $(
        '<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '<span class="title">Kivenko s.r.o.</span>' +
        '</div>'
    )
        .appendTo($body);

    // Panel.
    $(
        '<div id="navPanel">' +
        '<nav>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
    )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $body,
          visibleClass: 'navPanel-visible'
        });

  })(jQuery);
})

</script>
<template>
  <nav id="nav">
    <ul class="flex justify-center content-center">
      <li v-for="link in links" :key="link.hash"
          :class="{ current: isActive(link).value }">
        <NuxtLink :to="{ path: link.path, hash: link.hash }">
          {{ $t(link.name) }}
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