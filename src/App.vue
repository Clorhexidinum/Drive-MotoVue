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
          <!--Тут был searchTabs-->
          <!--Тут был searchTabsContent-->
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
          <tabs :tabs="[ 'запчасти', 'моторы', 'шины', 'электроника', 'инструменты', 'аксесуары',]" 
        :contents="[ 'Доставка и самовывоз', 'Оплата', 'Возврат-обмен', 'Новости',]"></tabs>
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
          <tabs :tabs="[ 'запчасти', 'моторы', 'шины', 'электроника', 'инструменты', 'аксесуары',]" 
        :contents="[ 'Доставка и самовывоз', 'Оплата', 'Возврат-обмен', 'Новости',]"></tabs>
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
            <div class="tabs__wrapper product-card__tabs">
              <div class="tabs">
                <a
                  class="tabs__item tab tab--active product-card__tab"
                  href="#prc-tab-1"
                  >Характеристики</a
                >
                <a class="tabs__item tab product-card__tab" href="#prc-tab-2"
                  >Наличие в магазине</a
                >
              </div>
              <div class="tabs__container">
                <div
                  class="
                    tabs__content
                    product-card__tab-content
                    tabs__content--active
                  "
                  id="prc-tab-1"
                >
                  <characteristics-list></characteristics-list>
                  <div>
                    <button class="product-card__btn btn">купить</button>
                  </div>
                </div>
                <div
                  class="tabs__content product-card__tab-content"
                  id="prc-tab-2"
                >
                  content-2
                </div>
              </div>
            </div>
          </div>
        <product-card></product-card>
        <characteristics-list></characteristics-list>
      </div>
    </section>

    <section class="card">
      <div class="container">
        <div class="tabs__wrapper">
          <!--Тут был productTabs-->
        </div>
        <div class="tabs__container">
          <div class="tabs__content card__content" id="prod-tab-1">
            О товаре
          </div>
          <div class="tabs__content card__content" id="prod-tab-2">
            Характеристики
          </div>
          <div class="tabs__content card__content" id="prod-tab-3">Отзывы</div>
          <div
            class="tabs__content tabs__content--active card__content"
            id="prod-tab-4"
          >
            <form action="#">
              <div class="card__top-line">
                <label class="card__label-search"
                  >Магазин
                  <input class="card__input-search" type="text" />
                </label>
                <label class="card__label-pickup">
                  <input class="filter-style" type="radio" name="pickup" />
                  Забрать сегодня
                </label>
                <label class="card__label-pickup">
                  <input
                    class="filter-style"
                    type="radio"
                    name="pickup"
                    checked
                  />
                  Забрать в течение недели
                </label>
              </div>
            </form>
            <pickup-box></pickup-box>
          </div>
          <div class="tabs__content card__content" id="prod-tab-5">
            Доставка
          </div>
          <div class="tabs__content card__content" id="prod-tab-6">Cервис</div>
          <div class="tabs__content card__content" id="prod-tab-7">
            Гарантия
          </div>
        </div>
      </div>
    </section>

    <section class="products page-section">
      <div class="container">
        <div class="products__inner">
          <!--Тут был title-->
          <!--Тут был tabsCategories-->
          <!--Тут был tabsContainer-->
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
        <div class="catalog__filter">
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
        </div>
        <div class="catalog__inner">
          <div class="aside-filter__btn">Фильтр</div>
          <asside class="catalog__inner-asside aside-filter">
            <div class="tabs__wrapper tabs__wrapper-noscroll">
              <div class="tabs aside-filter__tabs">
                <a class="aside-filter__tab tab tab--active" href="#as-tab-1"
                  ><span>Параметры</span></a
                >
                <a class="aside-filter__tab tab" href="#as-tab-2"
                  ><span>по марке</span></a
                >
              </div>
            </div>
            <div class="tabs__container">
              <div
                class="
                  tabs__content tabs__content--active
                  aside-filter__tabs-content
                "
                id="as-tab-1"
              >
                <form class="aside-filter__form">
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
                      <div class="aside-filter__content">
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="availability"
                              type="checkbox"
                            />
                            <span>В наличии</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="availability"
                              type="checkbox"
                            />
                            <span>Под заказ</span>
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
                        Новинки
                      </p>
                      <div
                        class="
                          aside-filter__content aside-filter__content-radio
                        "
                      >
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__radio visually-hidden"
                              name="radio"
                              type="radio"
                              checked
                            />
                            <span>Все</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__radio visually-hidden"
                              name="radio"
                              type="radio"
                            />
                            <span>Новинки</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__radio visually-hidden"
                              name="radio"
                              type="radio"
                            />
                            <span>Акции</span>
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
                      <div class="aside-filter__content">
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="brand"
                              type="checkbox"
                              checked
                            />
                            <span>BRP</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="brand"
                              type="checkbox"
                              checked
                            />
                            <span>Spark 2</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="brand"
                              type="checkbox"
                            />
                            <span>Spark 3 </span>
                          </label>
                        </div>
                        <div class="aside-filter__more">
                          <button class="aside-filter__more-btn" href="#">
                            Показать еще
                          </button>
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
                        Бренд
                      </p>
                      <div class="aside-filter__content">
                        <input
                          class="aside-filter__search"
                          type="text"
                          placeholder="Введите модель"
                        />
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="model"
                              type="checkbox"
                              checked
                            />
                            <span>Sea-doo Spark 2</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="model"
                              type="checkbox"
                              checked
                            />
                            <span>SeaDoo Spark 90</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="model"
                              type="checkbox"
                            />
                            <span>SeaDoo GTI 155</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="model"
                              type="checkbox"
                            />
                            <span>SeaDoo GTR 230</span>
                          </label>
                        </div>
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
                      <div class="aside-filter__content">
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="country"
                              type="checkbox"
                              checked
                            />
                            <span>Россия</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="country"
                              type="checkbox"
                              checked
                            />
                            <span>Германия</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="country"
                              type="checkbox"
                            />
                            <span>Китай</span>
                          </label>
                        </div>
                        <div class="aside-filter__content-box">
                          <label class="aside-filter__content-label">
                            <input
                              class="filter__checkbox visually-hidden"
                              name="country"
                              type="checkbox"
                            />
                            <span>CША</span>
                          </label>
                        </div>
                        <div class="aside-filter__more">
                          <button class="aside-filter__more-btn" href="#">
                            Показать еще
                          </button>
                        </div>
                      </div>
                    </li>

                    <li class="aside-filter__item-drop aside-filter__item-btn">
                      <button class="aside-filter__btn-send btn" type="submit">
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
              </div>
              <div
                class="tabs__content aside-filter__tabs-content"
                id="as-tab-2"
              >
                по марке
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
// SearchTabs
// SearchTabsContent
import CategoriesWithImage from "./components/CategoriesWithImage.vue";
import MoreBtn from "./components/MoreBtn.vue";
import MainBanner from "./components/MainBanner.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import ProductItem from "./components/ProductItem.vue";
import ProductCard from "./components/ProductCard.vue";
import CharacteristicsList from "./components/CharacteristicsList.vue";
import Pagination from "./components/Pagination.vue";
import FooterForm from "./components/FooterForm.vue";
import TopdropTitle from "./components/TopdropTitle.vue";
import FooterMenu from "./components/FooterMenu.vue";
import FooterSocial from "./components/FooterSocial.vue";
import PolicyBox from "./components/PolicyBox.vue";
import Tabs from "./components/Tabs.vue";

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
    CategoriesWithImage,
    MoreBtn,
    MainBanner,
    Breadcrumbs,
    ProductItem,
    ProductCard,
    CharacteristicsList,
    Pagination,
    FooterForm,
    FooterMenu,
    TopdropTitle,
    FooterSocial,
    PolicyBox,
    Tabs,
  },
  data: function () {
    return {
      menuActive: false,
    };
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
