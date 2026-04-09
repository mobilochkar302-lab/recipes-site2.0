document.addEventListener("DOMContentLoaded", () => {

    // ==================== БАЗА РЕЦЕПТІВ ====================
    const recipes = [
        {
            id: 1,
            title: { uk: "Млинці", en: "Pancakes" },
            category: "breakfast",
            img: "img/Pancakes.png",
            desc: { uk: "Смачні млинці", en: "Tasty pancakes" },
            ingredients: {
                uk: ["1 склянка молока", "1 яйце", "1 склянка борошна", "2 ст.л. цукру", "щіпка солі", "масло для смаження"],
                en: ["1 cup milk", "1 egg", "1 cup flour", "2 tbsp sugar", "pinch of salt", "butter for frying"]
            },
            steps: {
                uk: ["Змішати молоко, яйце, цукор та сіль", "Додати борошно і збити тісто", "Смажити на розігрітій сковороді з маслом по 1–2 хв з кожного боку"],
                en: ["Mix milk, egg, sugar, and salt", "Add flour and whisk batter", "Fry on a heated pan with butter 1–2 min each side"]
            }
        },
        {
            id: 2,
            title: { uk: "Омлет", en: "Omelette" },
            category: "breakfast",
            img: "img/Omelette.png",
            desc: { uk: "Яєчний омлет", en: "Egg omelette" },
            ingredients: {
                uk: ["2 яйця", "2 ст.л. молока", "щіпка солі", "щіпка перцю", "масло для смаження"],
                en: ["2 eggs", "2 tbsp milk", "pinch of salt", "pinch of pepper", "butter for frying"]
            },
            steps: {
                uk: ["Збити яйця з молоком, сіллю і перцем", "Налити на сковороду з маслом", "Смажити на середньому вогні 3–4 хвилини"],
                en: ["Whisk eggs with milk, salt, and pepper", "Pour into a pan with butter", "Cook on medium heat 3–4 minutes"]
            }
        },
        {
            id: 3,
            title: { uk: "Борщ", en: "Borscht" },
            category: "lunch",
            img: "img/Borscht.png",
            desc: { uk: "Український борщ", en: "Ukrainian soup" },
            ingredients: {
                uk: ["1 буряк", "1 морква", "1 картопля", "1 цибуля", "капуста", "томатна паста", "сіль, перець, лавровий лист", "сметана"],
                en: ["1 beetroot", "1 carrot", "1 potato", "1 onion", "cabbage", "tomato paste", "salt, pepper, bay leaf", "sour cream"]
            },
            steps: {
                uk: ["Нарізати овочі", "Відварити буряк, додати інші овочі", "Додати томатну пасту та приправи", "Варити 20–30 хвилин"],
                en: ["Chop vegetables", "Boil beetroot, add other vegetables", "Add tomato paste and seasonings", "Cook 20–30 minutes"]
            }
        },
        {
            id: 4,
            title: { uk: "Суп", en: "Soup" },
            category: "lunch",
            img: "img/Soup.png",
            desc: { uk: "Легкий овочевий суп", en: "Light vegetable soup" },
            ingredients: {
                uk: ["2 картоплі", "1 морква", "1 цибуля", "зелень", "сіль, перець"],
                en: ["2 potatoes", "1 carrot", "1 onion", "herbs", "salt, pepper"]
            },
            steps: {
                uk: ["Нарізати овочі", "Відварити у воді до готовності", "Додати сіль, перець та зелень"],
                en: ["Chop vegetables", "Boil in water until cooked", "Add salt, pepper, and herbs"]
            }
        },
        {
            id: 5,
            title: { uk: "Салат", en: "Salad" },
            category: "dinner",
            img: "img/Salad.png",
            desc: { uk: "Овочевий салат", en: "Vegetable salad" },
            ingredients: {
                uk: ["Помідори", "Огірки", "Салатні листя", "Олія", "Сіль, перець"],
                en: ["Tomatoes", "Cucumbers", "Lettuce", "Oil", "Salt, pepper"]
            },
            steps: {
                uk: ["Нарізати овочі", "Змішати з олією та спеціями"],
                en: ["Chop vegetables", "Mix with oil and seasonings"]
            }
        },
        {
            id: 6,
            title: { uk: "Паста", en: "Pasta" },
            category: "dinner",
            img: "img/Pasta.png",
            desc: { uk: "Італійська паста", en: "Italian pasta" },
            ingredients: {
                uk: ["200 г пасти", "томатний соус", "сіль, перець, зелень"],
                en: ["200g pasta", "tomato sauce", "salt, pepper, herbs"]
            },
            steps: {
                uk: ["Відварити пасту", "Змішати з соусом і спеціями", "Подавати гарячим"],
                en: ["Boil pasta", "Mix with sauce and seasonings", "Serve hot"]
            }
        },
        {
            id: 7,
            title: { uk: "Каша", en: "Porridge" },
            category: "breakfast",
            img: "img/Porridge.png",
            desc: { uk: "Вівсяна каша", en: "Oatmeal porridge" },
            ingredients: {
                uk: ["1 склянка вівсянки", "2 склянки молока", "сіль, цукор"],
                en: ["1 cup oats", "2 cups milk", "salt, sugar"]
            },
            steps: {
                uk: ["Довести молоко до кипіння", "Додати вівсянку та варити 5–7 хв", "Додати сіль та цукор"],
                en: ["Boil milk", "Add oats and cook 5–7 min", "Add salt and sugar"]
            }
        },
        {
            id: 8,
            title: { uk: "Курка", en: "Chicken" },
            category: "lunch",
            img: "img/Chicken.png",
            desc: { uk: "Запечена курка", en: "Baked chicken" },
            ingredients: {
                uk: ["1 курка", "сіль, перець, спеції", "олія"],
                en: ["1 chicken", "salt, pepper, spices", "oil"]
            },
            steps: {
                uk: ["Натерти курку спеціями", "Запікати 40–50 хв при 180°C"],
                en: ["Rub chicken with spices", "Bake 40–50 min at 180°C"]
            }
        },
        {
            id: 9,
            title: { uk: "Рис", en: "Rice" },
            category: "dinner",
            img: "img/Rice.png",
            desc: { uk: "Відварений рис", en: "Boiled rice" },
            ingredients: {
                uk: ["1 склянка рису", "2 склянки води", "сіль"],
                en: ["1 cup rice", "2 cups water", "salt"]
            },
            steps: {
                uk: ["Промити рис", "Відварити в підсоленій воді 15–20 хв"],
                en: ["Rinse rice", "Boil in salted water 15–20 min"]
            }
        },
        {
            id: 10,
            title: { uk: "Сирники", en: "Cheesecakes" },
            category: "breakfast",
            img: "img/Cheesecakes.png",
            desc: { uk: "Сирники зі смачною скоринкою", en: "Cheesecakes with a tasty crust" },
            ingredients: {
                uk: ["200 г сиру", "1 яйце", "2 ст.л. цукру", "2 ст.л. борошна", "олія для смаження"],
                en: ["200g cottage cheese", "1 egg", "2 tbsp sugar", "2 tbsp flour", "oil for frying"]
            },
            steps: {
                uk: ["Змішати сир з яйцем, цукром і борошном", "Сформувати коржики", "Смажити на сковороді до золотистої скоринки"],
                en: ["Mix cottage cheese with egg, sugar, and flour", "Form small patties", "Fry in pan until golden"]
            }
        },
        {
            id: 11,
            title: { uk: "Піца", en: "Pizza" },
            category: "dinner",
            img: "img/Pizza.png",
            desc: { uk: "Домашня піца", en: "Homemade pizza" },
            ingredients: {
                uk: ["тісто для піци", "томатний соус", "сир", "ковбаса", "гриби", "оливки"],
                en: ["pizza dough", "tomato sauce", "cheese", "sausage", "mushrooms", "olives"]
            },
            steps: {
                uk: ["Розкатати тісто", "Змастити томатним соусом", "Додати начинку", "Посипати сиром", "Випікати 15–20 хв при 180°C"],
                en: ["Roll out the dough", "Spread tomato sauce", "Add toppings", "Sprinkle cheese", "Bake 15–20 min at 180°C"]
            }
        },
        {
            id: 12,
            title: { uk: "Шоколадний кекс", en: "Chocolate cake" },
            category: "desserts",
            img: "img/Cake.png",
            desc: { uk: "Ніжний шоколадний кекс", en: "Soft chocolate cake" },
            ingredients: {
                uk: ["2 яйця", "100 г цукру", "150 г борошна", "2 ст.л. какао", "100 мл молока", "1 ч.л. розпушувача"],
                en: ["2 eggs", "100g sugar", "150g flour", "2 tbsp cocoa", "100 ml milk", "1 tsp baking powder"]
            },
            steps: {
                uk: ["Збити яйця з цукром", "Додати молоко", "Додати борошно, какао і розпушувач", "Перемішати до однорідності", "Випікати 30 хв при 180°C"],
                en: ["Beat eggs with sugar", "Add milk", "Add flour, cocoa, and baking powder", "Mix until smooth", "Bake 30 min at 180°C"]
            }
        },
        {
            id: 13,
            title: { uk: "Торт Наполеон", en: "Napoleon Cake" },
            category: "desserts",
            img: "img/Napoleon.png",
            desc: { uk: "Смачний торт з листкового тіста з кремом", en: "Delicious puff pastry cake with cream" },
            ingredients: {
                uk: ["500 г листкового тіста", "500 мл молока", "4 яйця", "150 г цукру", "50 г борошна", "200 г масла"],
                en: ["500 g puff pastry", "500 ml milk", "4 eggs", "150 g sugar", "50 g flour", "200 g butter"]
            },
            steps: {
                uk: ["Приготувати крем: збити яйця з цукром та борошном, додати молоко і варити до загустіння", "Збити масло і додати до крему", "Випекти листкове тісто, скласти торт шарами з кремом"],
                en: ["Make the cream: whisk eggs with sugar and flour, add milk and cook until thickened", "Whip butter and mix into cream", "Bake puff pastry and layer cake with cream"]
            }
        },
        {
            id: 14,
            title: { uk: "Торт Червоний оксамит", en: "Red Velvet Cake" },
            category: "desserts",
            img: "img/RedVelvet.png",
            desc: { uk: "М'який торт з червоного тіста з крем-сиром", en: "Soft red cake with cream cheese frosting" },
            ingredients: {
                uk: ["250 г борошна", "200 г цукру", "2 яйця", "240 мл олії", "1 ст.л. какао", "150 г сиру для крему", "червоний барвник"],
                en: ["250 g flour", "200 g sugar", "2 eggs", "240 ml oil", "1 tbsp cocoa", "150 g cream cheese", "red food coloring"]
            },
            steps: {
                uk: ["Змішати сухі інгредієнти", "Додати яйця, олію, барвник та збити тісто", "Випекти коржі, остудити та промазати кремом"],
                en: ["Mix dry ingredients", "Add eggs, oil, coloring and whisk batter", "Bake layers, cool and fill with cream cheese"]
            }
        },
        {
            id: 15,
            title: { uk: "Тертий пиріг", en: "Grated Pie" },
            category: "desserts",
            img: "img/GratedPie.png",
            desc: { uk: "Пиріг із тертого тіста з варенням", en: "Pie with grated dough and jam" },
            ingredients: {
                uk: ["300 г борошна", "200 г масла", "100 г цукру", "2 яйця", "варення на смак"],
                en: ["300 g flour", "200 g butter", "100 g sugar", "2 eggs", "jam to taste"]
            },
            steps: {
                uk: ["Зробити тісто з борошна, масла та цукру", "Викласти половину тіста в форму, додати варення, накрити другою половиною, потерти зверху", "Випікати 30–40 хв при 180°C"],
                en: ["Make dough from flour, butter and sugar", "Place half in pan, add jam, cover with remaining dough and grate on top", "Bake 30–40 min at 180°C"]
            }
        },
        {
            id: 16,
            title: { uk: "Зефір", en: "Marshmallow" },
            category: "desserts",
            img: "img/Marshmallow.png",
            desc: { uk: "Ніжний домашній зефір", en: "Soft homemade marshmallow" },
            ingredients: {
                uk: ["100 г цукру", "100 мл води", "1 білок", "10 г желатину", "ваніль"],
                en: ["100 g sugar", "100 ml water", "1 egg white", "10 g gelatin", "vanilla"]
            },
            steps: {
                uk: ["Замочити желатин у воді", "Збити білок до піків", "Варити сироп з цукру, додати желатин та збити з білком", "Вилити у форму та остудити"],
                en: ["Soak gelatin in water", "Whip egg white to peaks", "Cook sugar syrup, add gelatin and mix with egg white", "Pour into mold and cool"]
            }
        },
        {
            id: 17,
            title: { uk: "Мармелад", en: "Fruit Jelly" },
            category: "desserts",
            img: "img/Marmalade.png",
            desc: { uk: "Домашній мармелад з фруктів", en: "Homemade fruit jelly" },
            ingredients: {
                uk: ["500 г фруктів", "300 г цукру", "10 г желатину"],
                en: ["500 g fruits", "300 g sugar", "10 g gelatin"]
            },
            steps: {
                uk: ["Подрібнити фрукти та варити з цукром", "Додати желатин та перемішати", "Вилити у форми та остудити"],
                en: ["Chop fruits and cook with sugar", "Add gelatin and stir", "Pour into molds and cool"]
            }
        },
        {
            id: 18,
            title: { uk: "Морозиво", en: "Ice Cream" },
            category: "desserts",
            img: "img/IceCream.png",
            desc: { uk: "Домашнє ванільне морозиво", en: "Homemade vanilla ice cream" },
            ingredients: {
                uk: ["500 мл вершків", "200 мл молока", "100 г цукру", "ваніль"],
                en: ["500 ml cream", "200 ml milk", "100 g sugar", "vanilla"]
            },
            steps: {
                uk: ["Збити вершки з молоком, цукром та ваніллю", "Заморозити, періодично перемішуючи", "Подавати охолодженим"],
                en: ["Whip cream with milk, sugar, and vanilla", "Freeze, stirring occasionally", "Serve chilled"]
            }
        },
        {
            id: 19,
            title: { uk: "Чізкейк", en: "Cheesecake" },
            category: "desserts",
            img: "img/Cheesecake.png",
            desc: { uk: "Класичний чізкейк із сирною начинкою", en: "Classic cheesecake with cream cheese filling" },
            ingredients: {
                uk: ["200 г печива", "100 г масла", "400 г сиру", "150 г цукру", "3 яйця", "ваніль"],
                en: ["200 g biscuits", "100 g butter", "400 g cream cheese", "150 g sugar", "3 eggs", "vanilla"]
            },
            steps: {
                uk: ["Подрібнити печиво та змішати з маслом для основи", "Збити сир з цукром, яйцями та ваніллю", "Викласти на основу та випікати 50 хв при 160°C"],
                en: ["Crush biscuits and mix with butter for base", "Whip cream cheese with sugar, eggs, and vanilla", "Pour on base and bake 50 min at 160°C"]
            }
        },
        {
            id: 20,
            title: { uk: "Штрудель", en: "Strudel" },
            category: "desserts",
            img: "img/Strudel.png",
            desc: { uk: "Тонкий яблучний штрудель", en: "Thin apple strudel" },
            ingredients: {
                uk: ["1 листкове тісто", "3 яблука", "50 г цукру", "50 г родзинок", "кориця", "масло для змазування"],
                en: ["1 puff pastry", "3 apples", "50 g sugar", "50 g raisins", "cinnamon", "butter for brushing"]
            },
            steps: {
                uk: ["Нарізати яблука та змішати з цукром, родзинками та корицею", "Розкачати тісто, викласти начинку, скрутити рулет", "Змазати маслом та випікати 30–35 хв при 180°C"],
                en: ["Chop apples and mix with sugar, raisins, and cinnamon", "Roll out pastry, add filling, roll up", "Brush with butter and bake 30–35 min at 180°C"]
            }
        }
    ];

    // ==================== СТАН ДОДАТКУ ====================
    let state = {
        search: "",
        filter: "all",
        lang: localStorage.getItem("lang") || "uk",
        theme: localStorage.getItem("theme") || "light"
    };

    // ==================== ВИЗНАЧЕННЯ ПОТОЧНОЇ СТОРІНКИ ====================
    const isRecipePage = window.location.pathname.includes("recipe.html");

    // ==================== ФУНКЦІЯ ДЛЯ РЕНДЕРИНГУ РЕЦЕПТІВ НА ГОЛОВНІЙ ====================
    function renderRecipes() {
        const container = document.getElementById("recipes");
        if (!container) return;

        let data = recipes.filter(r => {
            const matchesFilter = state.filter === "all" || r.category === state.filter;
            const matchesSearch = r.title[state.lang].toLowerCase().includes(state.search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        container.innerHTML = data.map(r => `
            <div class="card">
                <img src="${r.img}" alt="${r.title[state.lang]}">
                <h3>${r.title[state.lang]}</h3>
                <p>${r.desc[state.lang]}</p>
                <a href="recipe.html?id=${r.id}">${state.lang === "uk" ? "Деталі" : "Details"}</a>
            </div>
        `).join("");
    }

    // ==================== ФУНКЦІЯ ДЛЯ ВІДОБРАЖЕННЯ ДЕТАЛЕЙ РЕЦЕПТУ ====================
    function renderRecipeDetails() {
        const detailsContainer = document.getElementById("recipeDetails");
        if (!detailsContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get("id");

        if (!recipeId) {
            detailsContainer.innerHTML = `<h2>${state.lang === "uk" ? "Рецепт не знайдено" : "Recipe not found"}</h2>`;
            return;
        }

        const recipe = recipes.find(r => r.id == recipeId);

        if (!recipe) {
            detailsContainer.innerHTML = `<h2>${state.lang === "uk" ? "Рецепт не знайдено" : "Recipe not found"}</h2>`;
            return;
        }

        detailsContainer.innerHTML = `
            <h2>${recipe.title[state.lang]}</h2>
            <img src="${recipe.img}" alt="${recipe.title[state.lang]}">
            <p><strong>${state.lang === "uk" ? "Опис:" : "Description:"}</strong> ${recipe.desc[state.lang]}</p>
            
            <h3>${state.lang === "uk" ? "📝 Інгредієнти:" : "📝 Ingredients:"}</h3>
            <ul>
                ${recipe.ingredients[state.lang].map(i => `<li>${i}</li>`).join("")}
            </ul>
            
            <h3>${state.lang === "uk" ? "👨‍🍳 Приготування:" : "👨‍🍳 Instructions:"}</h3>
            <ol>
                ${recipe.steps[state.lang].map(s => `<li>${s}</li>`).join("")}
            </ol>
        `;
    }

    // ==================== ФУНКЦІЯ ДЛЯ ОНОВЛЕННЯ ІНТЕРФЕЙСУ ====================
    function updateInterface() {
        const langBtn = document.getElementById("langToggle");
        if (langBtn) langBtn.textContent = state.lang === "uk" ? "EN" : "UA";

        const themeToggle = document.getElementById("themeToggle");
        
        // Оновлення тексту на головній сторінці
        if (!isRecipePage) {
            const optAll = document.getElementById("optAll");
            const optBreakfast = document.getElementById("optBreakfast");
            const optLunch = document.getElementById("optLunch");
            const optDinner = document.getElementById("optDinner");
            const optDesserts = document.getElementById("optDesserts");
            const homeText = document.getElementById("homeText");
            const heroText = document.getElementById("heroText");
            const apiTitle = document.getElementById("apiTitle");
            const searchInput = document.getElementById("search");

            if (optAll) optAll.textContent = state.lang === "uk" ? "Всі" : "All";
            if (optBreakfast) optBreakfast.textContent = state.lang === "uk" ? "Сніданок" : "Breakfast";
            if (optLunch) optLunch.textContent = state.lang === "uk" ? "Обід" : "Lunch";
            if (optDinner) optDinner.textContent = state.lang === "uk" ? "Вечеря" : "Dinner";
            if (optDesserts) optDesserts.textContent = state.lang === "uk" ? "Десерти" : "Desserts";
            if (homeText) homeText.textContent = state.lang === "uk" ? "ГОЛОВНА" : "HOME";
            if (heroText) heroText.textContent = state.lang === "uk" ? "Смачні рецепти щодня" : "Delicious recipes every day";
            if (apiTitle) apiTitle.textContent = state.lang === "uk" ? "Пошук рецептів світу 🍲" : "World recipes search 🍲";
            if (searchInput) searchInput.placeholder = state.lang === "uk" ? "Пошук..." : "Search...";
            
            renderRecipes();
        } 
        // Оновлення тексту на сторінці рецепту
        else {
            const backBtn = document.getElementById("backBtn");
            if (backBtn) backBtn.textContent = state.lang === "uk" ? "⬅ Назад" : "⬅ Back";
            renderRecipeDetails();
        }
    }

    // ==================== НАЛАШТУВАННЯ ТЕМИ ====================
    function initTheme() {
        document.body.classList.toggle("dark", state.theme === "dark");
    }
    
    initTheme();

    // ==================== ОБРОБНИКИ ПОДІЙ ДЛЯ ГОЛОВНОЇ СТОРІНКИ ====================
    if (!isRecipePage) {
        const container = document.getElementById("recipes");
        const searchInput = document.getElementById("search");
        const filterSelect = document.getElementById("filter");
        const themeBtn = document.getElementById("themeToggle");
        const langBtn = document.getElementById("langToggle");

        if (searchInput) {
            searchInput.addEventListener("input", e => {
                state.search = e.target.value;
                renderRecipes();
            });
        }

        if (filterSelect) {
            filterSelect.addEventListener("change", e => {
                state.filter = e.target.value;
                renderRecipes();
            });
        }

        if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                document.body.classList.toggle("dark");
                state.theme = document.body.classList.contains("dark") ? "dark" : "light";
                localStorage.setItem("theme", state.theme);
            });
        }

        if (langBtn) {
            langBtn.addEventListener("click", () => {
                state.lang = state.lang === "uk" ? "en" : "uk";
                localStorage.setItem("lang", state.lang);
                updateInterface();
            });
        }
    }

    // ==================== ОБРОБНИКИ ПОДІЙ ДЛЯ СТОРІНКИ РЕЦЕПТУ ====================
    if (isRecipePage) {
        const themeBtn = document.getElementById("themeToggle");
        const langBtn = document.getElementById("langToggle");
        const backBtn = document.getElementById("backBtn");

        if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                document.body.classList.toggle("dark");
                state.theme = document.body.classList.contains("dark") ? "dark" : "light";
                localStorage.setItem("theme", state.theme);
            });
        }

        if (langBtn) {
            langBtn.addEventListener("click", () => {
                state.lang = state.lang === "uk" ? "en" : "uk";
                localStorage.setItem("lang", state.lang);
                updateInterface();
            });
        }

        if (backBtn) {
            backBtn.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        }
    }

    // ==================== API ПОШУК СТРАВ ====================
    const mealSearchBtn = document.getElementById('searchBtnMeal');
    const mealInput = document.getElementById('mealInput');
    const mealResult = document.getElementById('result');

    if (mealSearchBtn && !isRecipePage) {
        mealSearchBtn.addEventListener('click', async () => {
            const mealName = mealInput.value.trim();

            if (!mealName) {
                mealResult.innerHTML = '<p class="error">Будь ласка, введіть назву страви.</p>';
                return;
            }

            mealResult.innerHTML = '<p>Завантаження...</p>';

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);

                if (!response.ok) throw new Error('Помилка мережі');

                const data = await response.json();

                if (!data.meals) {
                    mealResult.innerHTML = '<p>Страву не знайдено. Спробуйте іншу назву.</p>';
                    return;
                }

                const meal = data.meals[0];

                mealResult.innerHTML = `
                    <div class="meal-card">
                        <h2>${meal.strMeal}</h2>
                        <p><strong>Категорія:</strong> ${meal.strCategory} | <strong>Кухня:</strong> ${meal.strArea}</p>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <h3>Інструкція:</h3>
                        <p>${meal.strInstructions}</p>
                        ${meal.strYoutube ? `<p><a href="${meal.strYoutube}" target="_blank">Дивитися відео на YouTube</a></p>` : ''}
                    </div>
                `;

            } catch (error) {
                mealResult.innerHTML = `<p class="error">Сталася помилка: ${error.message}</p>`;
            }
        });
    }

    // ==================== КОКТЕЙЛІ (TheCocktailDB) ====================
    const cocktailSearchInput = document.getElementById('cocktailSearchInput');
    const cocktailSearchBtn = document.getElementById('cocktailSearchBtn');
    const randomCocktailBtn = document.getElementById('randomCocktailBtn');
    const cocktailResult = document.getElementById('cocktailResult');
    const COCKTAIL_API = 'https://www.thecocktaildb.com/api/json/v1/1/';

    async function fetchCocktail(endpoint) {
        try {
            cocktailResult.innerHTML = '<p>Завантаження...</p>';
            const response = await fetch(`${COCKTAIL_API}${endpoint}`);

            if (!response.ok) throw new Error('Помилка мережі');

            const data = await response.json();

            if (!data.drinks) {
                cocktailResult.innerHTML = '<p>Нічого не знайдено 😔</p>';
                return;
            }

            displayCocktail(data.drinks[0]);
        } catch (err) {
            cocktailResult.innerHTML = `<p style="color: red;">Помилка: ${err.message}</p>`;
        }
    }

    function displayCocktail(drink) {
        let ingredients = '';
        for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            if (ingredient) {
                ingredients += `<li>${ingredient} ${measure ? `- ${measure}` : ''}</li>`;
            }
        }

        cocktailResult.innerHTML = `
            <div class="cocktail-card">
                <h2>${drink.strDrink}</h2>
                <p><strong>Категорія:</strong> ${drink.strCategory || '—'}</p>
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h3>Інгредієнти:</h3>
                <ul>${ingredients}</ul>
                <h3>Інструкція:</h3>
                <p>${drink.strInstructions || 'Інструкція відсутня'}</p>
                ${drink.strVideo ? `<p><a href="https://www.youtube.com/watch?v=${drink.strVideo}" target="_blank">Дивитися відео</a></p>` : ''}
            </div>
        `;
    }

    if (cocktailSearchBtn && !isRecipePage) {
        cocktailSearchBtn.addEventListener('click', () => {
            const term = cocktailSearchInput.value.trim();
            if (term) fetchCocktail(`search.php?s=${term}`);
        });
    }

    if (randomCocktailBtn && !isRecipePage) {
        randomCocktailBtn.addEventListener('click', () => {
            fetchCocktail('random.php');
        });
    }

    if (cocktailSearchInput && !isRecipePage) {
        cocktailSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const term = cocktailSearchInput.value.trim();
                if (term) fetchCocktail(`search.php?s=${term}`);
            }
        });
    }
    updateInterface();
});