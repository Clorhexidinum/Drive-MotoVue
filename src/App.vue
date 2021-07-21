<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <mobile-menu-btn
            :class="{ active: menuActive }"
            @click="menuActive = !menuActive"
          ></mobile-menu-btn>
          <main-menu></main-menu>
          <main-logo></main-logo>
          <div class="header__box">
            <header-adress></header-adress>
            <user-list></user-list>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-mobile-box">
      <menu-mobile :class="{ active: menuActive }"></menu-mobile>
      <menu-mobile-line>
        <main-menu></main-menu>
      </menu-mobile-line>
    </div>
    <div class="header__bottom">
      <div class="container">
        <menu-categories></menu-categories>
      </div>
    </div>
  </header>

  <main>
    <section class="banner page-section">
      <div class="container">
        <div class="banner__inner">
          <!--Тут был BannerSlider-->
          <sale-item></sale-item>
        </div>
      </div>
    </section>

    <div class="search page-section">
      <div class="container">
        <div class="search__inner">
          <search-tabs></search-tabs>
        </div>
      </div>
    </div>

    <section class="categories page-section">
      <div class="container">
        <div class="categories__inner">
          <categories-with-image></categories-with-image>
        </div>
      </div>
    </section>

    <section class="products page-section">
      <div class="container">
        <div class="products__inner">
          <h4 class="product-title">Популярные товары</h4>
          <tabs
            :tabs="[
              'запчасти',
              'моторы',
              'шины',
              'электроника',
              'инструменты',
              'аксесуары',
            ]"
            ><!--пихаем слайдер--></tabs
          >
          <more-btn></more-btn>
        </div>
      </div>
    </section>

    <div class="banner-promo">
      <div class="container">
        <main-banner></main-banner>
      </div>
    </div>

    <section class="products page-section">
      <div class="container">
        <div class="products__inner">
          <h4 class="product-title">С этим товаром покупают</h4>
          <!-- <tabs :tabs="[ 'запчасти', 'моторы', 'шины', 'электроника', 'инструменты', 'аксесуары',]"></tabs> -->
          <tabs-with-slider
            :tabs="[
              'запчасти',
              'моторы',
              'шины',
              'электроника',
              'инструменты',
              'аксесуары',
            ]"
            ><product-item
              v-bind="good"
              v-for="(good, idx) in sortGoods('инструменты')"
              :key="idx"
            ></product-item
          ></tabs-with-slider>
        </div>
      </div>
    </section>
  </main>

  <main>
    <div class="breadcrumbs">
      <div class="container">
        <breadcrumbs></breadcrumbs>
      </div>
    </div>

    <section class="catalog">
      <div class="container">
        <h2 class="catalog__title">Гидроциклы</h2>
        <active-filter
          :activeFilter="activeFilters"
          @removeActiveFilter="clickedActiveFilter"
        ></active-filter>
        <!-- <div class="catalog__filter">
          <div class="catalog__filter-inner">
            <div class="catalog__filter-items mobile-overflow">
              <button>Полноприводные</button>
              <button>от 5000</button>
              <button>BRP</button>
              <button>еще</button>
            </div>
          </div>
          <div class="catalog__filter-btn">
            <select class="catalog__select-item">
              <option value="">По полулярности</option>
              <option value="">По цене</option>
              <option value="">По названию</option>
            </select>
            <button
              class="
                catalog__btn-grid
                catalog__filter-button
                catalog__filter-button--active
              "
            >
              <img src="images/grid-btn.svg" alt="" />
            </button>
            <button class="catalog__btn-line catalog__filter-button">
              <img src="images/line-btn.svg" alt="" />
            </button>
          </div>
        </div> -->
        <div class="catalog__inner">
          <div class="filter-btn">Фильтр</div>
          <asside class="catalog__inner-asside aside-filter">
            <div class="tabs__wrapper tabs__wrapper-noscroll">
              <div class="tabs aside-filter__tabs">
                <tabs
                  :tabs="['параметры', 'по марке']"
                  @clicked="clickFilterTab"
                >
                  <form
                    v-if="activeFilterTab === 'параметры'"
                    class="aside-filter__form"
                  >
                    <ul class="aside-filter__list">
                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Наличие
                        </p>
                        <filter-input :type="'checkbox'" :name="'availability'" :labels="['В наличии','Под заказ']"></filter-input>
                      </li>

                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Новинки
                        </p>
                        <filter-input :type="'radio'" :name="'radio'" :labels="['Все','Новинки', 'Акции']"></filter-input>
                      </li>

                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Цена
                        </p>
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
                      </li>

                      <li class="aside-filter__item-list">
                        <div class="aside-filter__item-box">
                          <p class="aside-filter__item-list-title">
                            Мощность, л.с.
                          </p>
                          <select class="aside-filter__select" name="power">
                            <option value="90">90</option>
                            <option value="130">130</option>
                            <option value="154">154</option>
                            <option value="230">230</option>
                            <option value="300">300</option>
                          </select>
                        </div>
                        <div class="aside-filter__item-box">
                          <p class="aside-filter__item-list-title">
                            Мощность двигателя, л.с.
                          </p>
                          <select
                            class="aside-filter__select"
                            name="engine_power"
                          >
                            <option value="90">90</option>
                            <option value="130">130</option>
                            <option value="154">154</option>
                            <option value="230">230</option>
                            <option value="300">300</option>
                          </select>
                        </div>
                        <div class="aside-filter__item-box">
                          <p class="aside-filter__item-list-title">
                            Макс. скорость
                          </p>
                          <select class="aside-filter__select" name="max_speed">
                            <option value="90">90</option>
                            <option value="130">130</option>
                            <option value="154">154</option>
                            <option value="230">230</option>
                            <option value="300">300</option>
                          </select>
                        </div>
                      </li>

                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Бренд
                        </p>
                        <filter-input :type="'checkbox'" :name="'model'" :labels="['Sea-doo Spark 2','SeaDoo Spark 90', 'SeaDoo GTI 155', 'SeaDoo GTR 230']"></filter-input>
                      </li>

                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Модель
                        </p>
                        <div class="aside-filter__content">
                          <input
                            class="aside-filter__search"
                            type="text"
                            placeholder="Введите модель"
                          />
                          <filter-input :type="'checkbox'" :name="'model'" :labels="['Sea-doo Spark 2','SeaDoo Spark 90', 'SeaDoo GTI 155', 'SeaDoo GTR 230']"></filter-input>
                          <div class="aside-filter__more">
                            <button class="aside-filter__more-btn" href="#">
                              Показать еще
                            </button>
                          </div>
                        </div>
                      </li>

                      <li class="aside-filter__item-drop btn-checked">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Акции
                        </p>
                        <div class="aside-filter__content action">
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
                          <div class="aside-filter__content-box">
                            <label class="aside-filter__content-label">
                              <input
                                class="filter__checkbox-txt visually-hidden"
                                name="promo"
                                type="checkbox"
                                checked
                              />
                              <span class="btn-checked__txt">NEW</span>
                            </label>
                          </div>
                          <div class="aside-filter__content-box">
                            <label class="aside-filter__content-label">
                              <input
                                class="filter__checkbox-txt visually-hidden"
                                name="promo"
                                type="checkbox"
                              />
                              <span class="btn-checked__txt">HIT</span>
                            </label>
                          </div>
                          <div class="aside-filter__content-box">
                            <label class="aside-filter__content-label">
                              <input
                                class="filter__checkbox-txt visually-hidden"
                                name="promo"
                                type="checkbox"
                              />
                              <span class="btn-checked__txt">ДИЛЕР</span>
                            </label>
                          </div>
                        </div>
                      </li>

                      <li class="aside-filter__item-drop">
                        <p
                          class="
                            aside-filter__item-title
                            aside-filter__item-title-drop
                            aside-filter__item-title-drop--active
                          "
                        >
                          Страны
                        </p>
                        <filter-input :type="'checkbox'" :name="'model'" :labels="['Россия','Германия', 'Китай', 'CША']"></filter-input>
                      </li>

                      <li
                        class="aside-filter__item-drop aside-filter__item-btn"
                      >
                        <button
                          class="aside-filter__btn-send btn"
                          type="submit"
                        >
                          ВЫБРАТЬ
                        </button>
                        <p class="aside-filter__extra">
                          Дополнительные параметры
                        </p>
                        <div class="aside-filter__extra-content">more</div>
                        <button class="aside-filter__btn-reset" type="reset">
                          Сбросить фильтр
                        </button>
                      </li>
                    </ul>
                  </form>
                </tabs>
              </div>
            </div>
          </asside>
          <div class="catalog__inner-list">
            <div class="catalog__product-list">
              <product-item></product-item>
            </div>
            <pagination></pagination>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main>
    <div class="breadcrumbs">
      <div class="container">
        <breadcrumbs></breadcrumbs>
      </div>
    </div>

    <section class="product-card">
      <div class="container">
        <div class="product-card__inner">
          <div class="tabs__wrapper product-card__tabs"></div>
        </div>
        <product-card></product-card>
      </div>
    </section>

    <section class="card">
      <div class="container">
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
              @clicked="click"
            ></tabs>
          </div>
        </div>
        <div class="tabs__container">
          <div v-if="activeProductTab === 'Самовывоз'">
            <pickup-form></pickup-form>
            <pickup-box></pickup-box>
          </div>
        </div>
      </div>
    </section>

    <section class="products page-section">
      <div class="container">
        <div class="products__inner">
          <tabs-with-slider
            :tabs="[
              'запчасти',
              'моторы',
              'шины',
              'электроника',
              'инструменты',
              'аксесуары',
            ]"
            ><product-item
              v-bind="good"
              v-for="(good, idx) in sortGoods('инструменты')"
              :key="idx"
            ></product-item
          ></tabs-with-slider>
        </div>
      </div>
    </section>
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
import MobileMenuBtn from "./components/MobileMenuBtn.vue";
// BannerSlider
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
    MobileMenuBtn,
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
  },
  data: function () {
    return {
      menuActive: false,
      goods,
      activeProductTab: "Самовывоз",
      activeFilterTab: "параметры",
      activeFilters: [
        "запчасти",
        "моторы",
        "шины",
        "электроника",
        "инструменты",
        "аксесуары",
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
    },

    sortGoods(cat) {
      return goods.filter((item) => item.category == cat);
    },

    click({ tab }) {
      this.activeProductTab = tab;
    },

    clickFilterTab({ tab }) {
      this.activeFilterTab = tab;
    },

    clickedActiveFilter(idx) {
      this.activeFilters.splice(idx, 1);
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

  &__bottom {
    margin-bottom: 80px;
  }
}

.banner {
  &__inner {
    display: flex;
    justify-content: space-between;
  }
}

.tabs__wrapper {
  margin-bottom: 50px;
  overflow-x: hidden;
}

.tabs__box {
  padding: 17px 0;
  background: #f0f0f4;
  

  & > .tabs > .tabs__list {
    margin: 0;
    justify-content: space-around;
  }
}

.filter-btn {
  display: none;
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
