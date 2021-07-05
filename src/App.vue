<template>
<header class="header">
  <div class="header__top">
    <div class="container">
      <div class="header__top-inner">
        <main-menu></main-menu>
        <logo></logo>
        <div class="header__box">
          <header-adress></header-adress>
          <user-list></user-list>
        </div>
      </div>
    </div>
  </div>
  <div class="menu-mobile-box">
    <menu-mobile></menu-mobile>
    <!--Тут был menuMobileLine-->
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
        <categories></categories>
      </div>
    </div>
  </section>

  <section class="products page-section">
    <div class="container">
      <div class="products__inner">
        <!--Тут был title-->
        <!--Тут был tabsCategories-->
        <!--Тут был tabsContainer-->
        <!--Тут был moreBtn-->
      </div>
    </div>
  </section>

  <div class="banner-promo">
    <div class="container">
      <!--Тут был banner-->
    </div>
  </div>

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
      <!--Тут был breadcrumbs-->
    </div>
  </div>

  <section class="product-card">
    <div class="container">
      <div class="product-card__inner">
        <div class="product-card__img-box product-item--sale">
          <img class="product-card__img" src="images/content/gidrotsikl-large.png" alt="" />
          <p class="product-card__price-old">1 200 475 ₽</p>
          <p class="product-card__price-new">1 100 475 ₽</p>
          <a class="product-card__link" href="#">Нашли дешевле? Снизим цену!</a>
          <div class="
                                    product-card__btn product-card__btn-mobile
                                ">
            <button>купить</button>
          </div>
        </div>
        <div class="product-card__content">
          <h1 class="product-card__title">
            Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue
            Metallic
          </h1>
          <p class="product-card__code">
            Код товара: 366666-2
          </p>
          <div class="product-card__buttons">
            <a href="#" class="product-card__icon-favorite">
              <img src="images/favorite.svg" alt="" />
            </a>
            <a href="#" class="product-card__icon-comparison">
              <img src="images/comparison.svg" alt="" />
            </a>
            <a class="rate" href="#">
              <div class="rate-yo" data-rateyo-rating="4"></div>
            </a>
          </div>
          <div class="tabs__wrapper product-card__tabs">
            <div class="tabs">
              <a class="
                                            tabs__item
                                            tab tab--active
                                            product-card__tab
                                        " href="#prc-tab-1">Характеристики</a>
              <a class="tabs__item tab product-card__tab" href="#prc-tab-2">Наличие в магазине</a>
            </div>
            <div class="tabs__container">
              <div class="
                                            tabs__content
                                            product-card__tab-content
                                            tabs__content--active
                                        " id="prc-tab-1">
                <ul class="product-card__list">
                  <li class="product-card__item">
                    <div class="
                                                        product-card__item-left
                                                    ">
                      Производитель
                    </div>
                    <div class="
                                                        product-card__item-right
                                                    ">
                      Канада
                    </div>
                  </li>
                  <li class="product-card__item">
                    <div class="
                                                        product-card__item-left
                                                    ">
                      Количество мест, шт:
                    </div>
                    <div class="
                                                        product-card__item-right
                                                    ">
                      3
                    </div>
                  </li>
                  <li class="product-card__item">
                    <div class="
                                                        product-card__item-left
                                                    ">
                      Мощность, л.с.
                    </div>
                    <div class="
                                                        product-card__item-right
                                                    ">
                      155
                    </div>
                  </li>
                  <li class="product-card__item">
                    <div class="
                                                        product-card__item-left
                                                    ">
                      Тип двигателя
                    </div>
                    <div class="
                                                        product-card__item-right
                                                    ">
                      Бензиновый
                    </div>
                  </li>
                  <li class="product-card__item">
                    <div class="
                                                        product-card__item-left
                                                    ">
                      Год выпуска
                    </div>
                    <div class="
                                                        product-card__item-right
                                                    ">
                      2018
                    </div>
                  </li>
                </ul>
                <a class="product-card__more" href="#">Показать еще</a>
                <div>
                  <button class="product-card__btn btn">
                    купить
                  </button>
                </div>
              </div>
              <div class="
                                            tabs__content
                                            product-card__tab-content
                                        " id="prc-tab-2">
                content-2
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div class="tabs__content card__content" id="prod-tab-3">
          Отзывы
        </div>
        <div class="
                                tabs__content tabs__content--active
                                card__content
                            " id="prod-tab-4">
          <form action="#">
            <div class="card__top-line">
              <label class="card__label-search">Магазин
                <input class="card__input-search" type="text" />
              </label>
              <label class="card__label-pickup">
                <input class="filter-style" type="radio" name="pickup" />
                Забрать сегодня
              </label>
              <label class="card__label-pickup">
                <input class="filter-style" type="radio" name="pickup" checked />
                Забрать в течение недели
              </label>
            </div>
          </form>
          <ul class="card__list">
            <li class="
                                        card__list-item card__list-item-title
                                    ">
              <div class="card__list-address">Адрес</div>
              <div class="card__list-workhours">
                Режим работы
              </div>
              <div class="card__list-avialable">
                Доступно
              </div>
              <div class="card__list-num">Количество</div>
              <div class="card__list-btn btn"></div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">
                Москва, ул. Науки 25
              </div>
              <div class="card__list-workhours">
                <div class="card__list-workhours-columns">
                  <span>пн-сб: </span><span>08:00-19:00</span>
                </div>
                <div class="card__list-workhours-columns">
                  <span>вс: </span><span>09:00-17:00</span>
                </div>
              </div>
              <div class="card__list-avialable">
                В наличии
              </div>
              <div class="card__list-num">1</div>
              <div class="card__list-btn btn">
                <button class="card__list-button btn" type="submit">
                  купить
                </button>
              </div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">
                Москва, ул. Южная 134
              </div>
              <div class="card__list-workhours">
                <div class="card__list-workhours-columns">
                  <span>пн-сб: </span><span>08:00-19:00</span>
                </div>
                <div class="card__list-workhours-columns">
                  <span>вс: </span><span>09:00-17:00</span>
                </div>
              </div>
              <div class="card__list-avialable">
                В наличии
              </div>
              <div class="card__list-num">2</div>
              <div class="card__list-btn btn">
                <button class="card__list-button btn" type="submit">
                  купить
                </button>
              </div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">
                Санкт-Петербург,<br />ул. Красная 19
              </div>
              <div class="card__list-workhours">
                <div class="card__list-workhours-columns">
                  <span>пн-сб: </span><span>08:00-19:00</span>
                </div>
                <div class="card__list-workhours-columns">
                  <span>вс: </span><span>09:00-17:00</span>
                </div>
              </div>
              <div class="card__list-avialable">
                Нет в наличии
              </div>
              <div class="card__list-num">0</div>
              <div class="card__list-btn">
                <button class="card__list-button btn" type="submit">
                  купить
                </button>
              </div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">
                Киев, ул Шевченко 167
              </div>
              <div class="card__list-workhours">
                <div class="card__list-workhours-columns">
                  <span>пн-сб: </span><span>08:00-19:00</span>
                </div>
                <div class="card__list-workhours-columns">
                  <span>вс: </span><span>09:00-17:00</span>
                </div>
              </div>
              <div class="card__list-avialable">
                Нет в наличии
              </div>
              <div class="card__list-num">0</div>
              <div class="card__list-btn">
                <button class="card__list-button btn" type="submit">
                  купить
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div class="tabs__content card__content" id="prod-tab-5">
          Доставка
        </div>
        <div class="tabs__content card__content" id="prod-tab-6">
          Cервис
        </div>
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
      <!--Тут был breadcrumbs-->
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
          <button class="catalog__btn-grid catalog__filter-button catalog__filter-button--active">
            <img src="images/grid-btn.svg" alt="">
          </button>
          <button class="catalog__btn-line catalog__filter-button">
            <img src="images/line-btn.svg" alt="">
          </button>
        </div>
      </div>
      <div class="catalog__inner">
        <div class="aside-filter__btn">Фильтр</div>
        <asside class="catalog__inner-asside aside-filter">
          <div class="tabs__wrapper tabs__wrapper-noscroll">
            <div class="tabs aside-filter__tabs">
              <a class="aside-filter__tab tab tab--active" href="#as-tab-1"><span>Параметры</span></a>
              <a class="aside-filter__tab tab" href="#as-tab-2"><span>по марке</span></a>
            </div>
          </div>
          <div class="tabs__container">
            <div class="tabs__content tabs__content--active aside-filter__tabs-content" id="as-tab-1">
              <form class="aside-filter__form">
                <ul class="aside-filter__list">
                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Наличие</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="availability" type="checkbox">
                          <span>В наличии
                        </label></span>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="availability" type="checkbox">
                          <span>Под заказ</span>
                        </label>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Новинки</p>
                    <div class="aside-filter__content aside-filter__content-radio">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__radio visually-hidden" name="radio" type="radio" checked>
                          <span>Все</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__radio visually-hidden" name="radio" type="radio">
                          <span>Новинки</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__radio visually-hidden" name="radio" type="radio">
                          <span>Акции</span>
                        </label>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Цена</p>
                    <div class="aside-filter__content">
                      <div id='id66' class="range">
                        <input id='id66i1' class='range__inpt range__inpt--left' name="price" type='number' min='0' max='500000' value="100000">
                        <input id='id66i2' class='range__inpt range__inpt--right' name="price" type='number' min='0' max='500000' value="400000">
                        <div id='id66b' class='range__between'></div>
                        <a id='id661' class="range__button"></a>
                        <a id='id662' class="range__button"></a>
                      </div>
                    </div>

                  </li>

                  <li class="aside-filter__item-list">
                    <div class="aside-filter__item-box">
                      <p class="aside-filter__item-list-title">Мощность, л.с.</p>
                      <select class="aside-filter__select" name="power">
                        <option value="90">90</option>
                        <option value="130">130</option>
                        <option value="154">154</option>
                        <option value="230">230</option>
                        <option value="300">300</option>
                      </select>
                    </div>
                    <div class="aside-filter__item-box">
                      <p class="aside-filter__item-list-title">Мощность двигателя, л.с.</p>
                      <select class="aside-filter__select" name="engine_power">
                        <option value="90">90</option>
                        <option value="130">130</option>
                        <option value="154">154</option>
                        <option value="230">230</option>
                        <option value="300">300</option>
                      </select>
                    </div>
                    <div class="aside-filter__item-box">
                      <p class="aside-filter__item-list-title">Макс. скорость</p>
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
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Бренд</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="brand" type="checkbox" checked>
                          <span>BRP</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="brand" type="checkbox" checked>
                          <span>Spark 2</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="brand" type="checkbox">
                          <span>Spark 3 </span>
                        </label>
                      </div>
                      <div class="aside-filter__more">
                        <button class="aside-filter__more-btn" href="#">Показать еще</button>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Бренд</p>
                    <div class="aside-filter__content">
                      <input class="aside-filter__search" type="text" placeholder="Введите модель">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="model" type="checkbox" checked>
                          <span>Sea-doo Spark 2</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="model" type="checkbox" checked>
                          <span>SeaDoo Spark 90</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="model" type="checkbox">
                          <span>SeaDoo GTI 155</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="model" type="checkbox">
                          <span>SeaDoo GTR 230</span>
                        </label>
                      </div>
                      <div class="aside-filter__more">
                        <button class="aside-filter__more-btn" href="#">Показать еще</button>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop btn-checked">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Акции</p>
                    <div class="aside-filter__content action">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox-txt visually-hidden" name="promo" type="checkbox" checked>
                          <span class="btn-checked__txt">SALE</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox-txt visually-hidden" name="promo" type="checkbox" checked>
                          <span class="btn-checked__txt">NEW</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox-txt visually-hidden" name="promo" type="checkbox">
                          <span class="btn-checked__txt">HIT</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox-txt visually-hidden" name="promo" type="checkbox">
                          <span class="btn-checked__txt">ДИЛЕР</span>
                        </label>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title aside-filter__item-title-drop aside-filter__item-title-drop--active">Страны</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="country" type="checkbox" checked>
                          <span>Россия</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="country" type="checkbox" checked>
                          <span>Германия</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="country" type="checkbox">
                          <span>Китай</span>
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter__checkbox visually-hidden" name="country" type="checkbox">
                          <span>CША</span>
                        </label>
                      </div>
                      <div class="aside-filter__more">
                        <button class="aside-filter__more-btn" href="#">Показать еще</button>
                      </div>
                    </div>
                  </li>

                  <li class="aside-filter__item-drop aside-filter__item-btn">
                    <button class="aside-filter__btn-send btn" type="submit">ВЫБРАТЬ</button>
                    <p class="aside-filter__extra">Дополнительные параметры</p>
                    <div class="aside-filter__extra-content">more</div>
                    <button class="aside-filter__btn-reset" type="reset">Сбросить фильтр</button>
                  </li>
                </ul>
              </form>
            </div>
            <div class="tabs__content aside-filter__tabs-content" id="as-tab-2">
              по марке
            </div>
          </div>
        </asside>
        <div class="catalog__inner-list">
          <div class="catalog__product-list">
            <!--Тут был product-item-->
          </div>
          <!--Тут был pagination-->
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__top-inner">
        <div class="footer__top-item footer__top-lewsletter">
          <!--Тут был footerForm-->
        </div>
        <div class="footer__top-item">
          <!--Тут был footerMenu-->
        </div>
        <div class="footer__top-item">
          <!--Тут был footerMenu-->
        </div>
        <div class="footer__top-item footer__top-social">
          <!--Тут был footerSocial-->
        </div>
      </div>
    </div>
    <!--Тут был policy-->
  </div>
</footer>
</template>

<script>
import MainMenu from "components/MainMenu.vue";
import Logo from './components/Logo.vue';
import HeaderAdress from './components/HeaderAdress.vue';
import UserList from './components/UserList.vue';
import MenuMobile from './components/MenuMobile.vue';
// menuMobileLine
import MenuCategories from './components/MenuCategories.vue';
// BannerSlider
import SaleItem from './components/SaleItem.vue';
// SearchTabs
// SearchTabsContent
import Categories from './components/Categories.vue';

export default {
  name: "App",
  components: {
    MainMenu
    Logo,
    HeaderAdress,
    UserList,
    MenuMobile,
    MenuCategories,
    SaleItem,
    Categories,
  },
};
</script>

<style lang="scss">

</style>
