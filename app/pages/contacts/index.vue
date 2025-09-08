<script setup lang="ts">
import 'maplibre-gl/dist/maplibre-gl.css'

definePageMeta({
  layout: 'nosidebar'
})

import {ref, onMounted} from 'vue'
import maplibregl from 'maplibre-gl'

const mapContainer = ref<HTMLDivElement | null>(null)
let map: maplibregl.Map

onMounted(() => {
  if (mapContainer.value) {
    map = new maplibregl.Map({
      container: mapContainer.value,
      style: 'https://tiles.openfreemap.org/styles/bright',
      center: [14.5279861, 50.1018614],
      attributionControl: false,
      zoom: 11.15
    })

    // Додаємо свій кастомний блок
    const attributionEl = document.createElement('div');
    attributionEl.className = 'mapboxgl-ctrl mapboxgl-ctrl-attrib';
    attributionEl.innerHTML = '© Obchodní firma společnosti zní: Kivenko s.r.o.';
    attributionEl.style.position = 'absolute';
    attributionEl.style.bottom = '0';
    attributionEl.style.right = '0';
    attributionEl.style.padding = '5px';
    attributionEl.style.fontSize = '12px';
    attributionEl.style.background = 'rgba(255,255,255,0.7)';
    map.getContainer().appendChild(attributionEl);

    map.on('load', async () => {
      const image = await map.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png');
      map.addImage('custom-marker', image.data);

      map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                    `<img src="/assets/images/vintage_truck.svg"/><strong>Obchodní firma společnosti zní: Kivenko s.r.o.</strong>
                    <p style="margin: 0">Můj e-mail: <a href="mailto:kivenko1997@meta.ua">kivenko1997@meta.ua</a></p>
                    <p style="margin: 0">Telefon: <a href="tel:+420722767091">+420 722 767 091</a></p>
                    <p style="margin: 0">Sídlo společnosti je: Praha 9, Hloubětín, Nademlejnská 600/1, PSČ 198 00.</p>`,
                'icon': 'theatre'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [14.5279861, 50.1018614]
              }
            }]
        }
      });
      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'icon-image': 'custom-marker',
          'icon-overlap': 'always'
        }
      });

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    });
  }
})

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')


const sendMessage = async () => {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: name.value, email: email.value, message: message.value }
    })
    status.value = '✅ Zpráva odeslána'
  } catch (e) {
    status.value = '❌ Promiňte, když je to přetížené'
  }
}


</script>
<template>
  <!-- Main -->
  <section id="main">
    <div class="container">
      <div class="w-full h-screen border-t-2 pt-4 px-2 border-gray-500">
        <div class="w-full h-screen  max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="w-full h-screen  bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div id="map" ref="mapContainer" class="w-full h-screen object-cover"></div>
          </div>
        </div>
      </div>
      <div class="w-full pt-4 px-2 !mt-8">
        <h3>
                      <span data-index="296-0" data-translated="false" data-source-lang="cs" data-target-lang="uk"
                            data-value="📞 Objednejte si převoz snadno a rychle"
                            data-translation="📞 Замовлення для легкої і швидкої транспортування" data-ch="0"
                            data-type="trSpan" style="visibility: inherit !important;">📞 Objednejte si převoz
                        snadno a rychle
                      </span>
        </h3>
        <span data-index="297-0" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value=" Stačí nám zavolat nebo napsat. "
              data-translation=" Просто зателефонуйте або напишіть нам. " data-ch="0"
              data-type="trSpan" style="visibility: inherit !important;"> Stačí nám zavolat nebo
                      napsat.
                    </span>
        <span data-index="297-1" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value="Sdělíte, co a kdy potřebujete převézt, a my se o vše postaráme. "
              data-translation="Скажіть, що і коли вам потрібно перевезти, і ми про все подбаємо. "
              data-ch="0" data-type="trSpan" style="visibility: inherit !important;">Sdělíte, co a kdy
                      potřebujete převézt, a my se o vše postaráme.
                    </span>
        <span data-index="297-2" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value="Přistavíme vhodné vozidlo, zajistíme personál i materiál. "
              data-translation="Ми пригнам підходящий транспортний засіб, надамо персонал і матеріали. "
              data-ch="0" data-type="trSpan" style="visibility: inherit !important;">Přistavíme vhodné
                      vozidlo, zajistíme personál i materiál.
                    </span>
        <strong>
                      <span data-index="297-3" data-translated="true" data-source-lang="cs" data-target-lang="uk"
                            data-value="Realizujeme převozy po celé Praze a okolí"
                            data-translation="Ми здійснюємо перевезення по Празі та околицях" data-ch="0"
                            data-type="trSpan" style="visibility: inherit !important;">Realizujeme převozy po celé
                        Praze a okolí
                      </span>
        </strong>
        <span data-index="297-4" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value="v ten samý den.📱 " data-translation="в той же день.📱 " data-ch="0"
              data-type="trSpan" style="visibility: inherit !important;"> v ten samý den.📱
                    </span>
        <strong>
                      <span data-index="297-5" data-translated="true" data-source-lang="cs" data-target-lang="uk"
                            data-value="Telefon:" data-translation="Телефон:" data-ch="0" data-type="trSpan"
                            style="visibility: inherit !important;">Telefon:
                      </span>
        </strong>
        <span data-index="297-6" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value="+420 722767091 📧 " data-translation="+420 722767091 📧 " data-ch="0"
              data-type="trSpan" style="visibility: inherit !important;"> <a
            href="tel:+420722767091">+420 722 767 091</a> 📧
                    </span>
        <strong>
                      <span data-index="297-7" data-translated="true" data-source-lang="cs" data-target-lang="uk"
                            data-value="E-mail:" data-translation="Електронна пошта:" data-ch="0"
                            data-type="trSpan" style="visibility: inherit !important;">E-mail:
                      </span>
        </strong>
        <span data-index="297-9" data-translated="true" data-source-lang="cs" data-target-lang="uk"
              data-value="kivenko1997@meta.ua" data-translation="kivenko1997@meta.ua" data-ch="0"
              data-type="trSpan" style="visibility: inherit !important;"><a href="mailto:kivenko1997@meta.ua">kivenko1997@meta.ua</a>
                    </span>
      </div>
      <div class="w-full pt-4 px-2 !mt-8">
        <form @submit.prevent="sendMessage" class="space-y-2">
          <input v-model="name" type="string" placeholder="Vaše jméno"
                 class="border border-gray-600 rounded p-2 !mt-5"/>
          <input v-model="email" type="email" placeholder="Váš e-mail"
                 class="border border-gray-600 rounded p-2 !mt-5"/>
          <textarea v-model="message" placeholder="Zprávy" class="border border-gray-600 rounded p-2 !mt-5"></textarea>
          <button type="submit" class="bg-blue-600 text-white p-2">Poslat</button>
          <p>{{ status }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
.maplibregl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
</style>