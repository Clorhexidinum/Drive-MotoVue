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
