<script setup lang="ts">
import Aboutb from "~/components/banner/aboutb.vue";

definePageMeta({
  layout: 'nosidebar'
})
const vehiclesStore = useVehiclesStore()
const title = "How to prepare furniture for moving?";
const description = "Large pieces of furniture such as wardrobes, beds or tables should be disassembled into smaller parts. Disassembly makes handling easier, reduces the risk of damage and simplifies transport. When disassembling, carefully label the individual parts and keep all screws and other components in labeled bags.";

</script>
<template>
  <!-- Main -->
  <section id="main" class="!pt-4">
    <div class="container">
      <div >
        <div>
          <section class="!mb-5">
            <h2 class="major"><span class="!bg-white">{{$t('Fleet')}}</span></h2>
          </section>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div class="flex justify-center content-center">
                      <img decoding="async"
                                                                    class="details-image aligncenter lazy entered loaded"
                                                                    :title="$t('Box van 20 m3')" draggable="false"
                                                                    src="/assets/images/car_2.webp"
                                                                    data-src="/assets/images/car_2.webp"
                                                                    :alt="$t('Box van 20 m3')" width="351"
                                                                    height="263" data-ll-status="loaded"></div>
                      <div>
                        <h2 style="text-align: center;"><strong>{{$t("Box van")}}</strong></h2>
                        <h2 style="text-align: center;"><strong>20 m3</strong></h2></div>
                      <div class="fusion-text fusion-text-2"><p class="fusion-responsive-typography-calculated"
                                                                data-fontsize="19" data-lineheight="21.0833px">
                        {{$t('We use it for moving apartments and houses ranging in size from 1+kk to smaller 3+kk, smaller offices and companies, clearing various spaces and transporting heavy loads (piano, grand piano, safe, etc.)')}}
                        <img :title="$t('Box van 20 m3')"
                             width="351"
                             height="263"
                             src="/assets/images/37.webp" />
                           </p>
                        <div class="table-wrapper">
                          <table class="table-auto border border-gray-400 border-collapse w-full">
                            <tbody>
                            <tr>
                              <td class="border border-gray-400 p-2 font-bold">{{$t("Vehicle")}}</td>
                              <td class="border border-gray-400 p-2 font-bold">
                                {{ $t(vehiclesStore.vehicles[0].name) }}
                              </td>
                            </tr>
                            <tr v-for="(value, key) in vehiclesStore.vehicles[0].specs" :key="key">
                              <td class="border border-gray-400 p-2 font-semibold">{{ $t(key) }}</td>
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
  <aboutb :title="$t(title)" :description="$t(description)"/>
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