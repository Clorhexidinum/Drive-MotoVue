//Menu

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

//Banner

//footer

//breadcrumbs

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
