<script setup lang="ts">
import Aboutb from "~/components/banner/aboutb.vue";

definePageMeta({
  layout: 'nosidebar'
})
const vehiclesStore = useVehiclesStore()
const title = "Jak připravit nábytek na stěhování?";
const description = "Velké kusy nábytku, jako jsou skříně, postele nebo stoly, by měly být rozebrány na menší části. Demontáž usnadňuje manipulaci, snižuje riziko poškození a zjednodušuje přepravu. Při demontáži si důkladně označte jednotlivé díly a uchovejte všechny šrouby a další součástky v označených sáčcích.";
</script>
<template>
  <!-- Main -->
  <section id="main" class="!pt-4">
    <div class="container">
      <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-51027ef"
           data-id="51027ef" data-element_type="column">
        <div data-elementor-type="wp-page" data-elementor-id="13" class="elementor elementor-13">
          <section class="!mb-5">
            <h2 class="major"><span class="!bg-white">Vozový park</span></h2>
          </section>
          <section
              class="elementor-section elementor-top-section elementor-element elementor-element-9f75b68 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="9f75b68" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
              <div
                  class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-cc7ccd1"
                  data-id="cc7ccd1" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                      class="elementor-element elementor-element-9c266b6 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                      data-id="9c266b6" data-element_type="widget" data-widget_type="text-editor.default">
                    <div class="elementor-widget-container">
                      <div class="!pb-8 flex justify-center items-center">
                      <img decoding="async"
                                                                    class="details-image aligncenter lazy entered loaded"
                                                                    title="Dodávka skříňová 20 m3" draggable="false"
                                                                    src="/assets/images/car_2.webp"
                                                                    data-src="/assets/images/car_2.webp"
                                                                    alt="Dodávka skříňová 20 m3" width="351"
                                                                    height="263" data-ll-status="loaded"></div>
                      <div
                          class="fusion-title title fusion-title-3 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three">
                        <h2 class="fusion-responsive-typography-calculated" style="text-align: center;"
                            data-fontsize="23" data-lineheight="28.0667px"><strong>Dodávka skříňová </strong></h2>
                        <h2 class="fusion-responsive-typography-calculated" style="text-align: center;"
                            data-fontsize="23" data-lineheight="28.0667px"><strong>20 m3</strong></h2></div>
                      <div class="fusion-text fusion-text-2"><p class="fusion-responsive-typography-calculated"
                                                                data-fontsize="19" data-lineheight="21.0833px">Používáme
                        na stěhování bytů a domů o velikosti 1+kk až menší 3+kk, menších kanceláří a firem, vyklízení
                        různých prostor a převoz těžkých břemen (pianino, klavír, trezor, ap.)
                        <img decoding="async"
                             class="wp-image-1134 aligncenter lazy entered loaded"
                            title="Dodávka skříňová 20 m3"
                             width="351"
                             height="263"
                             src="/assets/images/37.webp" />
                           </p>
                        <div class="table-wrapper">
                          <table class="table-auto border border-gray-400 border-collapse w-full">
                            <tbody>
                            <tr>
                              <td class="border border-gray-400 p-2 font-bold">Vozidlo</td>
                              <td class="border border-gray-400 p-2 font-bold">
                                {{ vehiclesStore.vehicles[0].name }}
                              </td>
                            </tr>
                            <tr v-for="(value, key) in vehiclesStore.vehicles[0].specs" :key="key">
                              <td class="border border-gray-400 p-2 font-semibold">{{ key }}</td>
                              <td class="border border-gray-400 p-2">{{ value }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <aboutb :title :description/>
</template>
<style scoped>
.form-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #cce7ff;
  border: 1px solid #cce7ff;
  border-radius: 8px;
}
</style>