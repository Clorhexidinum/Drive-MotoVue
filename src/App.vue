<template>
  <header class="page-section">
    <div class="container">
      <div class="header__top">
        <div class="header__top-inner">
          <menu-mobile></menu-mobile>
          <main-menu></main-menu>
          <main-logo></main-logo>
          <div class="header__box">
            <header-adress></header-adress>
            <user-list></user-list>
          </div>
        </div>
      </div>

      <div>
        <menu-categories></menu-categories>
      </div>
    </div>
    <div class="menu-mobile-box">
      <menu-mobile-line>
        <main-menu></main-menu>
      </menu-mobile-line>
    </div>
  </header>

  <main>
    <div class="container">
      <section class="page-section">
        <div class="inner banner-inner">
          <splide :options="options">
            <splide-slide v-for="slide in slides" :key="slide">
              <img :src="`images/content/${slide}`" />
            </splide-slide>
          </splide>
          <sale-item></sale-item>
        </div>
      </section>

      <section class="page-section">
        <search-tabs></search-tabs>
      </section>

      <section class="page-section">
        <categories-with-image></categories-with-image>
      </section>

      <section class="page-section">
        <h4 class="title">Популярные товары</h4>
        <tabs-with-slider
          :tabs="[
            'запчасти',
            'моторы',
            'шины',
            'электроника',
            'инструменты',
            'аксессуары',
          ]"
          @clicked="clickCategoryTab"
        >
          <product-item
            v-bind="item"
            v-for="item in sortGoods(activeCategoryTab).slice(0, 4)"
            :key="item"
          ></product-item>
        </tabs-with-slider>
        <more-btn></more-btn>
      </section>

      <section class="page-section">
        <main-banner></main-banner>
      </section>

      <section class="page-section">
        <div class="products__inner">
          <h4 class="title">Чо нибудь написать</h4>
          пихнуть слайдер
        </div>
      </section>

      <breadcrumbs></breadcrumbs>

      <section class="page-section">
        <h2 class="title">Гидроциклы</h2>

        <div class="filter-box">
          <active-filter
            :activeFilter="activeFilters"
            @removeActiveFilter="clickedActiveFilter"
          ></active-filter>
          <div class="catalog-sort">
            <select class="catalog-sort__select-item">
              <option value="">По полулярности</option>
              <option value="">По цене</option>
              <option value="">По названию</option>
            </select>
            <button
              @click.prevent="gridCatalog = true"
              class="catalog-sort__btn-grid catalog-sort__btn"
              :class="gridCatalog ? 'catalog-sort__btn--active' : ''"
            >
              <img src="/images/grid-btn.svg" alt="" />
            </button>
            <button
              @click.prevent="gridCatalog = false"
              class="catalog-sort__btn-line catalog-sort__btn"
              :class="gridCatalog ? '' : 'catalog-sort__btn--active'"
            >
              <img src="/images/line-btn.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="filter-btn" @click="openFilter = !openFilter">
          {{ openFilter ? "Скрыть" : "Фильтр" }}
        </div>
        <div class="catalog-inner">
          <asside class="aside-filter" v-if="openFilter">
            <tabs :tabs="['параметры', 'по марке']" @clicked="clickFilterTab">
              <form
                v-if="activeFilterTab === 'параметры'"
                class="aside-filter__form"
              >
                <ul class="aside-filter__list">
                  <li class="aside-filter__item">
                    <topdrop-title title="Наличие" titleClass="filter-title">
                      <filter-input
                        :type="'checkbox'"
                        :name="'availability'"
                        :labels="['В наличии', 'Под заказ']"
                      ></filter-input>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Новинки" titleClass="filter-title">
                      <filter-input
                        :type="'radio'"
                        :name="'radio'"
                        :labels="['Все', 'Новинки', 'Акции']"
                      ></filter-input>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Цена" titleClass="filter-title">
                      <div class="aside-filter__content">
                        <div id="id66" class="range">
                          <input
                            id="id66i1"
                            class="range__inpt range__inpt--left"
                            name="price"
                            type="number"
                            min="0"
                            max="500000"
                            value="100000"
                          />
                          <input
                            id="id66i2"
                            class="range__inpt range__inpt--right"
                            name="price"
                            type="number"
                            min="0"
                            max="500000"
                            value="400000"
                          />
                          <div id="id66b" class="range__between"></div>
                          <a id="id661" class="range__button"></a>
                          <a id="id662" class="range__button"></a>
                        </div>
                      </div>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <filter-select
                      :name="'power'"
                      :title="'Мощность, л.с.'"
                      :options="[90, 134, 150, 230, 320]"
                    ></filter-select>
                    <filter-select
                      :name="'release'"
                      :title="'Год выпуска'"
                      :options="[90, 134, 150, 230, 320]"
                    ></filter-select>
                    <filter-select
                      :name="'maxSpeed'"
                      :title="'Макс. скорость'"
                      :options="[90, 134, 150, 230, 320]"
                    ></filter-select>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Бренд" titleClass="filter-title">
                      <filter-input
                        :type="'checkbox'"
                        :name="'model'"
                        :labels="['BRP', 'Spark 2', 'Spark 3']"
                      ></filter-input>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Бренд" titleClass="filter-title">
                      <input
                        class="aside-filter__search"
                        type="text"
                        placeholder="Введите модель"
                      />
                      <filter-input
                        :type="'checkbox'"
                        :name="'model'"
                        :labels="[
                          'Sea-doo Spark 2',
                          'SeaDoo Spark 90',
                          'SeaDoo GTI 155',
                          'SeaDoo GTR 230',
                          'SeaDoo GTI 155',
                          'SeaDoo GTR 230',
                        ]"
                      ></filter-input>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Акции" titleClass="filter-title">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input
                            class="filter__checkbox-txt visually-hidden"
                            name="promo"
                            type="checkbox"
                            checked
                          />
                          <span class="btn-checked__txt">SALE</span>
                        </label>
                      </div>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item">
                    <topdrop-title title="Страны" titleClass="filter-title">
                      <filter-input
                        :type="'checkbox'"
                        :name="'model'"
                        :labels="['Россия', 'Германия', 'Китай', 'CША']"
                      ></filter-input>
                    </topdrop-title>
                  </li>

                  <li class="aside-filter__item aside-filter__item-btn">
                    <button class="aside-filter__btn-send btn" type="submit">
                      ВЫБРАТЬ
                    </button>
                    <button class="aside-filter__btn-reset" type="reset">
                      Сбросить фильтр
                    </button>
                  </li>
                </ul>
              </form>
            </tabs>
          </asside>
          <div class="products-inner">
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
            <product-item
              :class="gridCatalog ? '' : 'product-item__wrapper--line'"
            ></product-item>
          </div>
        </div>
        <pagination></pagination>
      </section>

      <section class="page-section">
        <product-card></product-card>
      </section>

      <section class="card">
        <div class="tabs__wrapper">
          <div class="tabs__box">
            <tabs
              :tabs="[
                'О товаре',
                'Характеристики',
                'Отзывы',
                'Самовывоз',
                'Доставка',
                'Сервис',
                'Гарантия',
              ]"
              @clicked="clickProductTab"
            >
              <div v-if="activeProductTab === 'Самовывоз'">
                <pickup-form></pickup-form>
                <pickup-box></pickup-box>
              </div>
            </tabs>
          </div>
        </div>
      </section>

      <section class="page-section">
        пихнуть слайдер
        <!-- <splide>
          <splide-slide v-for="slide in slides" :key="slide">
            <img :src="`images/content/${slide}`" />
          </splide-slide>
        </splide> -->
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__top-inner">
          <div class="footer__top-item">
            <footer-form></footer-form>
          </div>
          <div class="footer__top-item">
            <topdrop-title title="Информация" titleClass="footer-title"
              ><footer-menu
                :categorys="['О компании', 'Контакты', 'Акции', 'Магазины']"
              ></footer-menu>
            </topdrop-title>
          </div>
          <div class="footer__top-item">
            <topdrop-title title="Интернет-магазин" titleClass="footer-title"
              ><footer-menu
                :categorys="[
                  'Доставка и самовывоз',
                  'Оплата',
                  'Возврат-обмен',
                  'Новости',
                ]"
              ></footer-menu>
            </topdrop-title>
          </div>
          <div class="footer__top-item">
            <footer-social></footer-social>
          </div>
        </div>
      </div>
      <policy-box></policy-box>
    </div>
  </footer>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import MainLogo from "./components/MainLogo.vue";
import HeaderAdress from "./components/HeaderAdress.vue";
import UserList from "./components/UserList.vue";
import MenuMobile from "./components/MenuMobile.vue";
import MenuMobileLine from "./components/MenuMobileLine.vue";
import MenuCategories from "./components/MenuCategories.vue";

import SaleItem from "./components/SaleItem.vue";
import SearchTabs from "./components/SearchTabs.vue";
import CategoriesWithImage from "./components/CategoriesWithImage.vue";
import MoreBtn from "./components/MoreBtn.vue";
import MainBanner from "./components/MainBanner.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import PickupBox from "./components/PickupBox.vue";
import PickupForm from "./components/PickupForm.vue";
import ProductItem from "./components/ProductItem.vue";
import ProductCard from "./components/ProductCard.vue";
import Pagination from "./components/Pagination.vue";
import FooterForm from "./components/FooterForm.vue";
import TopdropTitle from "./components/TopdropTitle.vue";
import FooterMenu from "./components/FooterMenu.vue";
import FooterSocial from "./components/FooterSocial.vue";
import PolicyBox from "./components/PolicyBox.vue";
import Tabs from "./components/Tabs.vue";
import TabsWithSlider from "./components/TabsWithSlider.vue";
import ActiveFilter from "./components/ActiveFilter.vue";
import FilterInput from "./components/FilterInput.vue";
import FilterSelect from "./components/FilterSelect.vue";
// import BannerSlider from "./components/BannerSlider.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import goods from "./goods.json";

export default {
  name: "App",
  components: {
    MainMenu,
    MainLogo,
    HeaderAdress,
    UserList,
    MenuMobile,
    MenuMobileLine,
    MenuCategories,
    SaleItem,
    SearchTabs,
    CategoriesWithImage,
    MoreBtn,
    MainBanner,
    Breadcrumbs,
    ProductItem,
    ProductCard,
    Pagination,
    FooterForm,
    FooterMenu,
    TopdropTitle,
    FooterSocial,
    PolicyBox,
    Tabs,
    TabsWithSlider,
    PickupBox,
    PickupForm,
    ActiveFilter,
    FilterInput,
    FilterSelect,
    // BannerSlider,
    Splide,
    SplideSlide,
  },
  data: function () {
    return {
      goods,
      activeProductTab: "Самовывоз",
      activeFilterTab: "параметры",
      activeCategoryTab: "запчасти",
      openFilter: true,
      gridCatalog: true,
      activeFilters: [
        "запчасти",
        "моторы",
        "шины",
        "электроника",
        "инструменты",
        "аксессуары",
      ],
      options: {
        rewind: true,
        perPage: 1,
        gap: "10rem",
        speed: 1000,
        // autoplay: true,
      },
      slides: [
        'banner-slider1.jpg',
        'banner-slider.jpg',
        'banner-slider1.jpg',
        'banner-slider.jpg',
      ],
    };
  },

  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth > 968) {
        this.menuActive = false;
      }

      if (window.innerWidth < 910) {
        this.openFilter = false;
      } else {
        this.openFilter = true;
      }
    },

    sortGoods(cat) {
      return goods.filter((item) => item.category == cat);
    },

    clickProductTab(tab) {
      this.activeProductTab = tab.tab;
    },

    clickFilterTab(tab) {
      this.activeFilterTab = tab.tab;
    },

    clickedActiveFilter(idx) {
      this.activeFilters.splice(idx, 1);
    },

    clickCategoryTab(tab) {
      this.activeCategoryTab = tab.tab;
    },
  },
};
</script>

<style lang="scss">
.header {
  &__top-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 122px;
    @extend %sf-bold;
  }

  &__box {
    display: flex;
    align-items: baseline;
  }
}

.tabs__box {
  background: $background;
  margin-bottom: 25px;

  & > .tabs > .tabs__list {
    background: #f0f0f4;
    margin-bottom: 20px;
    padding: 17px 0;
    justify-content: space-around;
  }
}

.filter-btn {
  display: none;
  cursor: pointer;
}

.footer {
  background: $base;

  &__top {
    padding-top: 43px;
  }

  &__top-inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
