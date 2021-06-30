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
