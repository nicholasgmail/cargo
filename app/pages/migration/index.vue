<script setup lang="ts">
import Aboutb from "~/components/banner/aboutb.vue";

definePageMeta({
  layout: 'nosidebar'
})

const title = "How to prepare furniture for moving?";
const description = "Large pieces of furniture such as wardrobes, beds or tables should be disassembled into smaller parts. Disassembly makes handling easier, reduces the risk of damage and simplifies transport. When disassembling, carefully label the individual parts and keep all screws and other components in labeled bags.";

</script>
<template>
  <!-- Main -->
  <article id="main" class="!p-0 !my-2">
    <div class="container">
      <section class="!pt-8 !mb-0">
        <h2 class="major"><span>{{$t('Moving price Prague')}}</span></h2>
        <div class="!px-8">
        <p> {{
            $t('Are you looking for professional and affordable moving services? Our price list for moving Prague is designed to be transparent and meet your needs.The price depends on the size of the space being moved, distance and specific requirements, such as dismantling furniture or packaging materials.We offer the option of a free individual calculation so that we can provide you with the most accurate estimate.Thanks to our experience and professional approach, moving with us is easy and worry - free!')}}</p>
        </div>
      </section>
      <section class="container-fluid !py-2 !mb-0">
        <div class="row content w-screen w-max justify-center items-center">
          <div class="col-11 table-wrapper">
            <table class="border-separate border-spacing-2 border border-gray-400">
              <thead>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Service')}}
                              </span>
                </td>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Picture')}}
                              </span>
                </td>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Price (per hour)')}}
                              </span>
                </td>
                <td>
                              <span style="visibility: inherit !important;">{{$t(`Price (Minimum price)`)}}
                              </span>
                </td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t(`Work without a car + 1 worker`)}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/pracovnik.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/pracovnik.jpg"
                         :alt="$t('Work without a car + 1 worker')" data-ll-status="loaded"></td>
                <td>500</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t("Delivery Van 17m³ + driver")}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/117.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/117.jpg"
                         :alt="$t('Delivery Van 17m³ + driver')" data-ll-status="loaded"></td>
                <td>1000</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Price of moving Prague 17m³ delivery with workers')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/172.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/172.jpg"
                         :alt="$t('Price of moving Prague 17m³ delivery with workers')" data-ll-status="loaded"></td>
                <td>1500</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t("Delivery Van 17 m3 + 3 workers")}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/317.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/317.jpg"
                         :alt="$t('Moving price Prague')" data-ll-status="loaded"></td>
                <td>2000</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Box van 20m3+driver')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/120.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/120.jpg"
                         :alt="$t('Price of moving Prague Delivery 20m³')" data-ll-status="loaded"></td>
                <td>1000</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t("Box van 20m3+2 workers")}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/220.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/220.jpg"
                         :alt="$t('Box van 20m3+2 workers')" data-ll-status="loaded"></td>
                <td>1500</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Box van 20m3+3 workers')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/320.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/04/320.jpg"
                         :alt="$t('Worker')" data-ll-status="loaded"></td>
                <td>2000</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Truck 36m3+driver')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2019/12/Презентация9.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2019/12/Презентация9.jpg"
                         :alt="$t('Price of moving Prague Delivery 36m³')" data-ll-status="loaded"></td>
                <td>1100</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Truck 36m3+2 workers')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2022/11/362.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2022/11/362.jpg"
                         :alt="$t('Price of moving Prague 36m³ delivery with workers')" data-ll-status="loaded"></td>
                <td>2000</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>
                              <span style="visibility: inherit !important;">{{$t('Truck 36m3+3 workers')}}
                              </span>
                </td>
                <td><img class="lazy entered loaded" decoding="async"
                         src="https://www.stehovanicz.cz/wp-content/uploads/2019/12/Презентация7.jpg"
                         data-src="https://www.stehovanicz.cz/wp-content/uploads/2019/12/Презентация7.jpg"
                         :alt="$t('17m³ delivery with workers')" data-ll-status="loaded"></td>
                <td>2500</td>
                <td>2500</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="w-screen !py-2 !mb-0"><h2 class="major !m-0"><span>{{$t("Moving price Prague")}}</span></h2>
        <div class="!p-2">
        <p class="text-center">{{$t('We believe that the price of moving Prague should be transparent and correspond to the quality of services. We have prepared a clear price list for you, which includes all costs.')}}
        </p>
        </div>
      </section>
      <section class="w-screen !px-8">
        <div class="container">
          <div class="main-content">
            <div class="table-wrapper">
              <table border="1">
                <thead>
                <tr>
                  <th>
                                <span style="visibility: inherit !important;">{{$t("Service type")}}
                                </span>
                  </th>
                  <th>
                                <span style="visibility: inherit !important;">{{$t('Price from (CZK)')}}
                                </span>
                  </th>
                  <th>
                                <span style="visibility: inherit !important;">{{$t("Comment")}}
                                </span>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                                <span style="visibility: inherit !important;">{{$t("Apartment moving (1+kk)")}}
                                </span>
                  </td>
                  <td>
                                <span style="visibility: inherit !important;">2 500 Kč
                                </span>
                  </td>
                  <td>
                                <span style="visibility: inherit !important;">{{$t("Including packaging material")}}
                                </span>
                  </td>
                </tr>
                <tr>
                  <td>
                                <span style="visibility: inherit !important;">
                                  {{$t("Apartment moving (3+kk and more)")}}
                                </span>
                  </td>
                  <td>
                                <span data-index="106-0" data-translated="false" data-source-lang="cs"
                                      data-target-lang="uk" data-value="5 000 Kč"
                                      data-translation="5 000 чеських крон" data-ch="0" data-type="trSpan"
                                      style="visibility: inherit !important;">5 000 Kč
                                </span>
                  </td>
                  <td>
                                <span style="visibility: inherit !important;">{{$t("Includes up to 3 workers")}}
                                </span>
                  </td>
                </tr>
                <tr>
                  <td>
                                <span style="visibility: inherit !important;">{{$t("Office moving")}}
                                </span>
                  </td>
                  <td>
                                <span data-index="111-0" data-translated="false" data-source-lang="cs"
                                      data-target-lang="uk" data-value="3 500 Kč" data-translation="3 500 Крон"
                                      data-ch="0" data-type="trSpan" style="visibility: inherit !important;">3 500
                                  Kč
                                </span>
                  </td>
                  <td>
                                <span style="visibility: inherit !important;">{{$t('Possibility of moving outside of working hours')}}
                                </span>
                  </td>
                </tr>
                <tr>
                  <td>
                                <span style="visibility: inherit !important;">{{$t('Heavy loads (piano, safe)')}}
                                </span>
                  </td>
                  <td>
                                <span data-index="115-0" data-translated="false" data-source-lang="cs"
                                      data-target-lang="uk" data-value="1 200 Kč/kus"
                                      data-translation="1 200 Czk/piece" data-ch="0" data-type="trSpan"
                                      style="visibility: inherit !important;">1 200 Kč/kus
                                </span>
                  </td>
                  <td>
                                <span style="visibility: inherit !important;">{{$t('Price depends on weight and floor')}}
                                </span>
                  </td>
                </tr>
                <tr>
                  <td>
                                <span style="visibility: inherit !important;">{{$t('Express moving')}}
                                </span>
                  </td>
                  <td>+20 %</td>
                  <td>
                                <span style="visibility: inherit !important;">{{$t('Moving within 24 hours')}}
                                </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <p><strong>
                          <span style="visibility: inherit !important;">{{$t('Note:')}}
                          </span>
            </strong>
              <span style="visibility: inherit !important;">
                          </span>
              <span style="visibility: inherit !important;"> {{$t('The exact price depends on the order specification.')}}
                          </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>
  <aboutb :title="$t(title)" :description="$t(description)"/>
</template>
<style scoped>
.page-wrapper {
  width: 100%; /* Занимает всю ширину экрана */
  margin: 0; /* Убираем отступы */
}

header, .container {
  width: 100%; /* Шапка и контент занимают всю ширину родительского контейнера */
  padding: 0px;
}

header {
  background-color: #0056b3;
}

.container {
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
}

/* Устанавливаем основной контент и боковую панель на 100% ширины на мобильных устройствах */
.main-content, .sidebar {
  flex: 1 1 100%;
  padding: 20px;
  margin-bottom: 20px; /* Отступ для боковой панели */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.main-content {
  background-color: #fff;
}

.sidebar {
  background-color: #f5f5f5;
  text-align: center;
}

@media (min-width: 768px) {
  /* Устанавливаем соотношение сторон для десктопной версии */
  .main-content {
    flex: 3; /* Основное содержание занимает больше места */
  }

  .sidebar {
    flex: 1; /* Боковая панель занимает меньшую ширину */
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .main-content, .sidebar {
    flex: 1 1 100%; /* Занимают 100% ширины */
    margin: 0;
  }
}

/* Общее оформление */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

h2, h3 {
  color: #0056b3;
}

h2 {
  font-size: 1.6em;
}

h3 {
  font-size: 1.2em;
}

.service-links {
  list-style: none;
  padding: 0;
}

.service-links li {
  margin-bottom: 20px;
}

.service-links a {
  color: #0056b3;
  text-decoration: none;
}

.service-links a:hover {
  text-decoration: underline;
}

.calculator-link img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
}

.nezavazna-poptavka {
  margin-top: 20px;
  text-align: center;
}

.btn-poptavka {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn-poptavka:hover {
  background-color: #003d80;
}

/* Styl pro formulář */
.form-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #e8f4ff;
  border: 1px solid #cce7ff;
  border-radius: 8px;
}

.form-container input[type="text"],
.form-container textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
}

.form-container textarea {
  height: 80px;
  resize: none;
}

.form-container button {
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.form-container button:hover {
  background-color: #003d80;
}

.service-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-links li {
  margin-bottom: 10px;
}

.service-links a {
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
}

.service-links a:hover {
  text-decoration: underline;
}

.calculator-link img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
}

/* Styl jednotlivých odkazů v bočním panelu */
.sidebar a {
  display: block;
  background-color: #e8f4ff;
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
}

/* Efekt při najetí myší na odkaz */
.sidebar a:hover {
  background-color: #cce7ff;
}

.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FBEEC1;
  color: #333;
  text-decoration: none;
  border-radius: 20px;
  margin: 10px; /* Odstup mezi bloky */
  transition: background-color 0.3s ease, color 0.3s ease; /* Přechod při změně barvy */
}

.button-link:hover {
  background-color: #333; /* Barva pozadí při najetí myší */
  color: #FBEEC1; /* Barva textu při najetí myší */
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #E2E0E0;
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.table-container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: #E2E0E0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

thead {
  background-color: #33820A;
  color: white;
}

thead th {
  padding: 15px;
}

tbody tr:nth-child(even) {
  background-color: white;
}

tbody tr:hover {
  background-color: white;
}

tbody td {
  padding: 15px;
  border-bottom: 1px solid #33820A;
}

img {
  max-height: 80px;
}

.calculate-button {
  padding: 8px 15px;
  background-color: #33820A;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 15px;
  transition: background-color 0.3s ease;
}

.calculate-button:hover {
  background-color: #33820A;
}

/* Media Queries pro mobilní verzi */
@media (max-width: 768px) {
  .table-container {
    padding: 10px;
    margin: 20px;
  }

  table {
    font-size: 12px;
  }

  thead th {
    padding: 10px;
  }

  tbody td {
    padding: 10px;
  }

  .calculate-button {
    padding: 6px 12px;
    font-size: 14px;
  }

  img {
    max-height: 60px;
  }
}

/* Media Queries pro velmi malé obrazovky */
@media (max-width: 480px) {
  table {
    font-size: 10px;
  }

  thead th {
    padding: 8px;
  }

  tbody td {
    padding: 8px;
  }

  .calculate-button {
    padding: 5px 10px;
    font-size: 13px;
  }

  img {
    max-height: 50px;
  }
}</style>