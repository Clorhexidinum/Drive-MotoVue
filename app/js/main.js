//Menu
Vue.component("menu", {
    template: `
    <nav class="menu">
        <!--Тут был mobileMenuBtn-->
        <ul class="menu__list">
            <li v-for="category in сategories">{{ category }} class="menu__item" >
                <a class="menu__link" href="#">Магазины</a>
            </li>
        </ul>
    </nav>
      `,
    data: {
        сategories: ["Магазины", "Акции", "Доставка и оплата"],
    },
});

Vue.component("mobileMenuBtn", {
    template: `
        <button class="menu__btn">
            <span class="menu__btn-line"></span>
            <span class="menu__btn-line"></span>
            <span class="menu__btn-line"></span>
        </button>
    `,
});

Vue.component("menuMobile", {
    template: `
        <ul class="menu-mobile">
            <li v-for="(value, property) in сategories" class="menu-mobile__item">
                <a class="menu-mobile__link" href="#">{{ value }}</a>
                <img v-if="property !== ''" class="menu-mobile__img" src="../images/{{ property }}" alt="" />
            </li>
            <li v-for="category in сategories" class="menu-mobile__item">
                <a class="menu-mobile__link" href="#">Москва,<br />ул. Науки 25</a>
            </li>
        </ul>
    `,
    data: {
        сategories: {
            Войти: "user.svg",
            Регистрация: "heart.svg",
            Избранное: "heart.svg",
            Корзина: "basket.svg",
            Магазины: "house.svg",
            Акции: "percent.svg",
            "Доставка и оплата": "box.svg",
            Квадроциклы: "",
            Катера: "",
            Гидроциклы: "",
            Лодки: "",
            Вездеходы: "",
            Снегоходы: "",
            Двигатели: "",
            Запчасти: "",
        },
    },
});

Vue.component("menuMobileLine", {
    template: `
        <div class="menu-mobile-line">
            <ul class="menu-mobile-line__wrapper">
                <li v-for="category in сategories" class="menu-mobile-line__item" >
                    <a href="#">Магазины</a>
                </li>
            </ul>
        </div>
    `,
    data: {
        сategories: ["Магазины", "Акции", "Доставка и оплата"],
    },
});

Vue.component("logo", {
    template: `
        <a class="logo" href="#">
            <img class="logo__img" src="images/logo.svg" alt="логотип драйв мото"/>
        </a>
      `,
});

Vue.component("adress", {
    template: `
        <a target="_blank" class="header__adress" href="https://yandex.ru/maps/-/CBFIIMryLB">Москва, ул. Науки 25</a>
    `,
});

Vue.component("userList", {
    template: `
        <ul class="user-list">
            <li v-for="(image, index) in images" class="user-list__item">
                <a class="user-list__link" href="">{{ image }}</a>
                <p v-if="index == images.length - 1" class="user-list__num">0</p>
            </li>
        </ul>
      `,
    data: {
        images: [
            '<svg class="user-list__icon" width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z"/></svg>',
            '<svg class="user-list__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.8225 18.096C17.3835 17.302 14.1825 16.606 15.7325 13.678C20.4525 4.766 16.9835 0 12.0005 0C6.91849 0 3.53649 4.949 8.26849 13.678C9.86549 16.623 6.54349 17.319 3.17849 18.096C0.105486 18.806 -0.00951398 20.332 0.000486018 23L0.00448602 24H23.9945L23.9985 23.031C24.0105 20.343 23.9065 18.809 20.8225 18.096Z"/></svg>',
            '<svg class="user-list__icon" width="30" height="23" viewBox="0 0 30 23" xmlns="http://www.w3.org/2000/svg"><path d="M29.999 0L29.0703 2.5H26.659L22.3165 17.5H5.76777L-0.000976562 3.75H21.014L20.309 6.25H3.75902L7.43027 15H20.4653L24.7553 0H29.999ZM10.624 18.75C9.58902 18.75 8.74902 19.59 8.74902 20.625C8.74902 21.6612 9.58902 22.5 10.624 22.5C11.659 22.5 12.499 21.6612 12.499 20.625C12.499 19.59 11.659 18.75 10.624 18.75ZM19.249 10L16.874 18.75C15.839 18.75 14.999 19.5888 14.999 20.625C14.999 21.6612 15.839 22.5 16.874 22.5C17.909 22.5 18.749 21.6612 18.749 20.625C18.749 19.59 17.909 18.75 16.874 18.75L19.249 10Z"/></svg>',
        ],
    },
});

Vue.component("menuCategories", {
    template: `
      <ul class="menu-categories">
          <li v-for="category in сategories">{{ category }}</li>
      </ul>
      `,
    data: {
        сategories: [
            "Квадроциклы",
            "Катера",
            "Гидроциклы",
            "Лодки",
            "Вездеходы",
            "Снегоходы",
            "Двигатели",
            "Запчасти",
        ],
    },
});

//banner
Vue.component("bannerSlider", {
    template: `
        <div class="banner-slider">
            <a v-for="slide in slides"> class="banner-slider__item" href="#">
                <img class="banner-slider__img" src="images/content/{{ slide }}" alt=""/>
            </a>
        </div>
    `,
    data: {
        сategories: [
            "banner-slider.jpg",
            "banner-slider.jpg",
            "banner-slider.jpg",
            "banner-slider.jpg",
            "banner-slider.jpg",
        ],
    },
});

Vue.component("saleItem", {
    template: `
        <div class="sale-item">
            <div class="sale-item__top">
                <p class="sale-item__info">акция</p>
                <div class="sale-item__price">
                    <div class="price price__new">190 000</div>
                    <div class="price price__old">225 000</div>
                </div>
            </div>
            <img class="sale-item__img" src="images/content/sale-1.png" alt=""/>
            <h5 class="sale-item__title"> Лодочный мотор Suzuki DF9.9BRS </h5>
            <p class="sale-item__footer"> Акция действует до <span>31.08.2020</span></p>
        </div>
    `,
});

//search
Vue.component("searchTabs", {
    template: `
        <div class="search__tabs tabs__wrapper">
            <div class="mobile-overflow">
                <a class="tab search__tabs-item tab--active" href="#tab-1" >Поиск по номеру</a>
            </div>
        </div>
    `,
    data: {
        tabs: ["номеру", "марке", "названию товара"],
    },
});

Vue.component("searchTabsContent", {
    template: `
        <div class="search__content">
            <div class=" tabs__content search__content-item tabs__content--active" id="tab-1">
                <form class="search__content-form">
                    <input class="search__content-input" type="text" placeholder="Введите номер"/>
                    <button class="search__content-btn btn" type="submit">искать</button>
                </form>
            </div>
        </div>
    `,
    data: {
        content: ["номер", "марку", "названию товара"],
    },
});

//categories
Vue.component("categories", {
    template: `
        <ul class="categories__inner">
            <li v-for="(value, property) in сategories">
                <a class="categories__item" href="#">
                    <div class="categories__item-info">
                        <h4 class="categories__item-title">
                        {{ property }}
                        </h4>
                        <p class="categories__item-text">
                            Подробее
                        </p>
                    </div>
                    <div class="categories__item-img">
                        <img src="images/{{ value }}" alt="" />
                    </div>
                </a>
            </li>
        <ul>`,
    data: {
        сategories: {
            Квадроциклы: "categories-1.png",
            Гидроциклы: "categories-2.png",
            Катера: "categories-3.png",
            Снегоходы: "categories-4.png",
            Вездеходы: "categories-5.png",
            Двигатели: "categories-6.png",
        },
    },
});

//Tabs
Vue.component("tabsCategories", {
    template: `
        <div class="tabs__wrapper">
            <div class="tabs products__tabs mobile-overflow-slider">
                <a v-for="(element, index) in сategories" class="products__tab tab tab--active" href="#pr-tab-{{ index + 1 }}">{{ element }}</a>
            </div>
         </div>
        `,
    data: {
        сategories: [
            "запчасти",
            "моторы",
            "шины",
            "электроник",
            "инструменты",
            "аксессуары",
        ],
    },
});

Vue.component("tabsContainer", {
    template: `
        <div class="tabs__container">
            <div class="products__content tabs__content tabs__content--active" id="pr-tab-1">
                <div class="product-slider">
                    <!--Тут был productSliderItem-->
                </div>
            </div>
        </div>
        `,
    data: {
        сategories: [
            "запчасти",
            "моторы",
            "шины",
            "электроник",
            "инструменты",
            "аксессуары",
        ],
    },
});

Vue.component("productSliderItem", {
    template: `
    <div class="product-slider__item">
        <div class="product-item__wrapper">
            <button class="product-item__favorite"></button>
            <button class="product-item__basket">
                <img src="images/basket-white.svg" alt=""/>
            </button>
            <a class="product-item__notify-link">
                <span>Сообщить о поступлении</span>
            </a>
            <a class="product-item" href="#">
                <p class="product-item__hover-text">посмотреть товар</p>
                <img class="product-item__img" src="images/content/product-1.png" alt=""
                />
                <h4 class="product-item__title">
                    Водонепроницаемый Рюкзак
                </h4>
                <p class="product-item__price price">9 800 ₽</p>
                <p class="product-item__notify-text">нет в наличии</p>
            </a>
        </div>
    </div>
        `,
    data: {
        сategories: [
            "запчасти",
            "моторы",
            "шины",
            "электроник",
            "инструменты",
            "аксессуары",
        ],
    },
});

Vue.component("tabsCategories", {
    template: `
        <div class="tabs__wrapper">
            <div class="tabs products__tabs mobile-overflow-slider">
                <a v-for="(element, index) in сategories" class="products__tab tab tab--active" href="#pr-tab-{{ index + 1 }}">{{ element }}</a>
            </div>
         </div>
        `,
    data: {
        сategories: [
            "запчасти",
            "моторы",
            "шины",
            "электроник",
            "инструменты",
            "аксессуары",
        ],
    },
});

Vue.component("title", {
    template: `
        <h4 class="products__title">Популярные товары</h4>
    `,
    data: {
        сategories: ["Популярные товары", "С этим товаром покупают"],
    },
});

Vue.component("moreBtn", {
    template: `
        <div class="more-btn">
            <a class="more-btn__link" href="">Показать еще</a>
        </div>
    `,
});

//Banner
Vue.component("banner", {
    template: `
        <a class="banner-promo-link" href="#">
            <picture>
                <source media="(max-width: 320px)" srcset="images/content/banner-mobile.jpg"/>
                <img src="images/content/banner.jpg" alt="" />
            </picture>
        </a>
    `,
});

//footer

Vue.component("footerFormBox", {
    template: `
        <div class="footer__top-item footer__top-lewsletter">
            <h6 class="footer__top-title">Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</h6>
            <!--Тут был footerForm-->
        </div>
    `,
});

Vue.component("footerForm", {
    template: `
        <div class="footer__top-item footer-form__lewsletter">
            <!--Тут был footerTitle-->
            <form class="footer-form">
                <input class="footer-form__input" type="text" placeholder="Введите ваш e-mail:"/>
                <button class="footer-form__btn btn" type="submit">Отправить</button>
            </form>
        </div>
    `,
});

Vue.component("footerMenu", {
    template: `
    <div class="footer-menu__top-item">
        <!--Тут был footerTitle-->
        <ul class="footer-menu__list">
            <li v-for="category in сategories">
                <a href="#">{{ category }}</a>
            </li>
        </ul>
    </div>
    `,
    data: {
        сategories: ["О компании", "Контакты", "Акции", "Магазины"],
        сategories2: [
            "Доставка и самовывоз",
            "Оплата",
            "Возврат-обмен",
            "Новости",
        ],
    },
});

Vue.component("footerTitle", {
    template: `
        <h6 class="footer-menu__title footer__topdrop">{{ title }}</h6>
    `,
    data: {
        titles: [
            "Подпишитесь на нашу рассылку и узнавайте о акциях быстрее",
            "Информация",
            "Интернет-магазин",
        ],
    },
});

Vue.component("footerSocial", {
    template: `
        <div class="footer-social footer__top-social">
            <ul class="footer-social__list">
                <li v-for="item in items" class="footer-social__item">
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
        </div>
    `,
    data: {
        items: [
            '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs/><g clip-path="url(#clip0)" fill="#2F3035"><path d="M15.005 7.297a7.697 7.697 0 00-7.698 7.698 7.697 7.697 0 007.698 7.697 7.697 7.697 0 007.697-7.697 7.697 7.697 0 00-7.697-7.698zm0 12.694a4.995 4.995 0 01-4.997-4.996 4.995 4.995 0 014.997-4.996A4.995 4.995 0 0120 14.995a4.994 4.994 0 01-4.996 4.996z"/><path d="M21.185.095c-2.76-.128-9.596-.122-12.359 0C6.4.21 4.257.795 2.531 2.522-.354 5.407.015 9.294.015 14.996c0 5.835-.325 9.632 2.516 12.473 2.896 2.895 6.84 2.516 12.474 2.516 5.78 0 7.775.004 9.818-.787 2.78-1.079 4.877-3.563 5.082-8.024.13-2.761.122-9.596 0-12.359-.248-5.266-3.074-8.46-8.72-8.72zm4.369 25.466c-1.892 1.89-4.515 1.722-10.585 1.722-6.25 0-8.757.092-10.585-1.741-2.107-2.097-1.725-5.463-1.725-10.567 0-6.906-.71-11.88 6.222-12.235 1.592-.056 2.061-.075 6.07-.075l.056.038c6.662 0 11.888-.698 12.202 6.232.07 1.582.087 2.057.087 6.06-.001 6.177.116 8.698-1.742 10.566z"/><path d="M23.008 8.792a1.799 1.799 0 100-3.597 1.799 1.799 0 000 3.597z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>',
            '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs/><path d="M24.894 16.285c-.485-.613-.346-.885 0-1.433.006-.006 4.01-5.538 4.422-7.415h.003c.205-.684 0-1.187-.991-1.187h-3.28c-.835 0-1.22.431-1.427.914 0 0-1.67 3.997-4.032 6.588-.763.75-1.115.99-1.531.99-.206 0-.524-.24-.524-.925v-6.38c0-.82-.234-1.187-.925-1.187H11.45c-.524 0-.835.383-.835.739 0 .777 1.181.956 1.304 3.144v4.746c0 1.04-.189 1.231-.607 1.231-1.116 0-3.822-4.014-5.426-8.607-.323-.892-.64-1.252-1.48-1.252H1.124C.189 6.251 0 6.682 0 7.165c0 .853 1.115 5.091 5.185 10.691 2.713 3.823 6.532 5.894 10.008 5.894 2.088 0 2.343-.46 2.343-1.251 0-3.653-.189-3.998.858-3.998.485 0 1.32.24 3.27 2.084 2.228 2.186 2.595 3.165 3.842 3.165h3.28c.935 0 1.409-.46 1.136-1.367-.623-1.91-4.838-5.835-5.028-6.098z" fill="#2F3035"/></svg>',
            '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs/><path d="M17.419 29.805zM17.719 29.753c-.06.012-.12.022-.18.032.06-.01.12-.02.18-.032zM16.707 29.903zM16.995 29.867zM18.127 29.672zM19.14 29.42c-.042.013-.085.024-.127.036l.127-.035zM18.834 29.505l-.14.036.14-.037zM18.433 29.605l-.148.033.148-.033zM16.262 29.947zM30 15c0-8.283-6.717-15-15-15C6.717 0 0 6.717 0 15c0 8.283 6.717 15 15 15l.264-.003V18.32H12.04v-3.756h3.223V11.8c0-3.205 1.956-4.95 4.816-4.95 1.369 0 2.546.103 2.889.148v3.35h-1.972c-1.555 0-1.857.74-1.857 1.824v2.392h3.72l-.485 3.756H19.14v11.1C25.41 27.623 30 21.848 30 15zM15.991 29.967zM15.513 29.99z" fill="#2F3035"/></svg>',
            '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs/><path d="M13.132 17.81l4.88-2.81-4.88-2.81v5.62z" fill="#2F3035"/><path d="M15 0C6.717 0 0 6.717 0 15c0 8.283 6.717 15 15 15 8.283 0 15-6.717 15-15 0-8.283-6.717-15-15-15zm9.373 15.015s0 3.042-.386 4.51a2.349 2.349 0 01-1.652 1.651c-1.467.387-7.335.387-7.335.387s-5.852 0-7.335-.402a2.349 2.349 0 01-1.652-1.652C5.627 18.057 5.627 15 5.627 15s0-3.042.386-4.509a2.396 2.396 0 011.652-1.667C9.132 8.438 15 8.438 15 8.438s5.868 0 7.334.401c.803.216 1.436.85 1.653 1.652.401 1.467.386 4.524.386 4.524z" fill="#2F3035"/></svg>',
        ],
    },
});

Vue.component("policy", {
    template: `
        <div class="policy">
            <a v-for="item in items" class="policy__link" href="#">{{ item }}</a>
        </div>
    `,
    data: {
        items: ["Договор оферты", "Политика обработки персональных данных"],
    },
});

//breadcrumbs
Vue.component("breadcrumbs", {
    template: `
         <div class="breadcrumbs">
            <ul class="breadcrumbs__list mobile-overflow">
                <li v-for="item in items" class="breadcrumbs__item"><a href="#">Главная</a></li>
            </ul>
        </div>
    `,
    data: {
        items: [
            "Главная",
            "Гидроциклы",
            "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        ],
    },
});

//Product
Vue.component("product-item", {
    template: `
        <div class="product-item__wrapper">
            <button class="product-item__favorite"></button>
            <button class="product-item__compare"></button>
            <button class="product-item__basket"><img src="images/basket-white.svg" alt=""></button>
            <a class="product-item__notify-link"><span>Сообщить о поступлении</span></a>
            <a class="product-item" href="#">
              <p class="product-item__hover-text">посмотреть товар</p>
              <img class="product-item__img" src="----------" alt="">
              <h4 class="product-item__title">----------</h4>
              <p class="product-item__price-old">----------</p>
              <p class="product-item__price price">----------</p>
              <p class="product-item__notify-text">нет в наличии</p>
            </a>
        </div>
    `,
});

//Pagination
Vue.component("pagination", {
    template: `
        <div class="pagination">
            <ul class="pagination__list">
              <li class="pagination__item pagination__item--active"><a href="#">1</a></li>
              <li class="pagination__item pagination__item--dots"><span>...</span></li>
              <li class="pagination__item"><a href="#">11</a></li>
            </ul>
        </div>
    `,
});

//productTabs
Vue.component("productTabs", {
    template: `
        <div class="tabs card__tab-box mobile-overflow">
            <a class="tab card__tab tab--active" href="#prod-tab-1">О товаре</a>
        </div>
    `,
    data: {
        items: [
            "О товаре",
            "Характеристики",
            "Отзывы",
            "Самовывоз",
            "Доставка",
            "Cервис",
            "Гарантия",
        ],
    },
});
