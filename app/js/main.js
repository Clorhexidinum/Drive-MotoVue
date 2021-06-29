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
