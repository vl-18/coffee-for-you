// Recipe Data
const recipes = [
    {
        id: 1,
        name: 'Espresso',
        type: 'coffee',
        icon: '☕',
        caffeine: 3,
        description: 'A strong, concentrated shot of coffee. Perfect for those who love intense flavors.',
        ingredients: [
            '18-20g finely ground coffee',
            'Hot water (90-96°C)',
            'Espresso machine'
        ],
        instructions: [
            'Use a fine grind espresso roast coffee.',
            'Fill the portafilter and tamp evenly.',
            'Insert into the espresso machine.',
            'Extract for 25-30 seconds.',
            'Serve immediately in a small cup.'
        ]
    },
    {
        id: 2,
        name: 'Americano',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Espresso diluted with hot water. A smooth, full-bodied coffee experience.',
        ingredients: [
            '1-2 shots espresso',
            '150-200ml hot water',
            'Cup'
        ],
        instructions: [
            'Brew 1-2 shots of espresso.',
            'Fill a cup halfway with hot water.',
            'Pour the espresso into the water.',
            'Stir well.',
            'Serve hot.'
        ]
    },
    {
        id: 3,
        name: 'Cappuccino',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Equal parts espresso, steamed milk, and milk foam. A classic Italian favorite.',
        ingredients: [
            '1 shot espresso',
            '120ml steamed milk',
            '60ml milk foam',
            'Cocoa powder (optional)'
        ],
        instructions: [
            'Brew 1 shot of espresso into a cup.',
            'Steam milk to create microfoam.',
            'Pour steamed milk into the espresso.',
            'Top with thick milk foam.',
            'Dust with cocoa powder if desired.'
        ]
    },
    {
        id: 4,
        name: 'Latte',
        type: 'coffee',
        icon: '☕',
        caffeine: 1,
        description: 'Smooth espresso with plenty of steamed milk and a thin layer of foam.',
        ingredients: [
            '1 shot espresso',
            '200-250ml steamed milk',
            '25ml milk foam',
            'Optional: vanilla syrup or hazelnut syrup'
        ],
        instructions: [
            'Brew 1 shot of espresso into a cup.',
            'Steam milk to 60-65°C.',
            'Pour steamed milk into the espresso.',
            'Top with a thin layer of foam.',
            'Add syrup if desired.'
        ]
    },
    {
        id: 5,
        name: 'Mocha',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Espresso combined with steamed milk and chocolate. A delightful indulgence.',
        ingredients: [
            '1 shot espresso',
            '150ml steamed milk',
            '30ml chocolate syrup or cocoa',
            'Whipped cream and cocoa powder (optional)'
        ],
        instructions: [
            'Brew 1 shot of espresso.',
            'Add chocolate syrup to the cup.',
            'Pour in steamed milk and stir well.',
            'Top with whipped cream if desired.',
            'Dust with cocoa powder and serve.'
        ]
    },
    {
        id: 6,
        name: 'Vietnamese Latte',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Strong coffee brewed through a traditional filter and mixed with condensed milk.',
        ingredients: [
            '2-3 tbsp finely ground Vietnamese coffee',
            'Vietnamese phin filter',
            '30-40ml sweetened condensed milk',
            'Hot water'
        ],
        instructions: [
            'Place condensed milk in a cup.',
            'Insert phin filter on top.',
            'Add ground coffee to the filter.',
            'Pour hot water and let it brew (3-5 minutes).',
            'Stir well and serve hot or over ice.'
        ]
    },
    {
        id: 7,
        name: 'Indian Filter Coffee',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Traditional South Indian coffee with chicory blend, brewed through a metal filter.',
        ingredients: [
            '1-2 tbsp Indian filter coffee powder',
            '150ml hot water',
            '100ml hot milk',
            '1-2 tsp sugar',
            'Metal filter'
        ],
        instructions: [
            'Add coffee to the filter vessel.',
            'Pour hot water slowly.',
            'Let it brew for 3-4 minutes.',
            'Heat milk with sugar.',
            'Pour brewed coffee and milk together, whisking vigorously.',
            'Serve hot in a cup.'
        ]
    },
    {
        id: 8,
        name: 'Macchiato',
        type: 'coffee',
        icon: '☕',
        caffeine: 3,
        description: 'Strong espresso marked with just a dollop of milk foam. Bold and concentrated.',
        ingredients: [
            '1-2 shots espresso',
            '15-20ml milk foam',
            'Small cup'
        ],
        instructions: [
            'Brew 1-2 shots of espresso.',
            'Steam milk to create a thick microfoam.',
            'Pour just a dollop of foam on top.',
            'Serve immediately in a small cup.'
        ]
    },
    {
        id: 9,
        name: 'Cortado',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Equal parts espresso and steamed milk. A balanced, smooth coffee.',
        ingredients: [
            '1 shot espresso',
            '60ml steamed milk',
            '30ml milk foam',
            'Small cup'
        ],
        instructions: [
            'Brew 1 shot of espresso.',
            'Steam milk to 60°C.',
            'Pour equal amounts of espresso and milk.',
            'Top with a small layer of foam.',
            'Serve in a small cup.'
        ]
    },
    {
        id: 10,
        name: 'Flat White',
        type: 'coffee',
        icon: '☕',
        caffeine: 2,
        description: 'Espresso with velvety microfoam steamed milk. A velvet-smooth coffee experience.',
        ingredients: [
            '1-2 shots espresso',
            '150-180ml steamed milk',
            'Thin layer of microfoam',
            'Medium cup'
        ],
        instructions: [
            'Brew 1-2 shots of espresso.',
            'Steam milk to create velvety microfoam.',
            'Pour steamed milk into espresso.',
            'Top with a very thin layer of foam.',
            'Serve immediately.'
        ]
    },
    {
        id: 11,
        name: 'Matcha Latte',
        type: 'matcha',
        icon: '🍵',
        caffeine: 2,
        description: 'Traditional green tea powder whisked with hot water and steamed milk.',
        ingredients: [
            '1-2 tsp matcha powder',
            '50ml hot water (70°C)',
            '150-180ml steamed milk',
            'Whisk or frother',
            'Optional: honey or sugar'
        ],
        instructions: [
            'Sift matcha powder into a bowl.',
            'Add hot water and whisk until frothy.',
            'Heat milk to 60-65°C.',
            'Pour matcha mixture into a cup.',
            'Add steamed milk and stir well.',
            'Serve with a touch of honey if desired.'
        ]
    },
    {
        id: 12,
        name: 'Strawberry Matcha',
        type: 'matcha',
        icon: '🍵',
        caffeine: 2,
        description: 'Vibrant matcha combined with sweet strawberry for a fruity twist.',
        ingredients: [
            '1 tsp matcha powder',
            '30ml strawberry puree or syrup',
            '50ml hot water (70°C)',
            '150-180ml steamed milk',
            'Whisk',
            'Optional: fresh strawberries, honey'
        ],
        instructions: [
            'Sift matcha powder into a bowl.',
            'Add hot water and whisk until frothy.',
            'Add strawberry puree to a cup.',
            'Pour matcha mixture into the cup.',
            'Add steamed milk and stir well.',
            'Top with fresh strawberries if available.',
            'Serve chilled or hot.'
        ]
    }
];

// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');
const modalBody = document.getElementById('modalBody');

let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(recipes);
    setupEventListeners();
});

// Render Recipes
function renderRecipes(recipesToRender) {
    recipesGrid.innerHTML = '';
    
    recipesToRender.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="recipe-image">${recipe.icon}</div>
            <div class="recipe-details">
                <span class="recipe-type ${recipe.type}">${recipe.type === 'coffee' ? '☕ Coffee' : '🍵 Matcha'}</span>
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="caffeine-level">${'☕'.repeat(recipe.caffeine)}</div>
                <p class="recipe-description">${recipe.description}</p>
                <button class="view-recipe-btn" onclick="openModal(${recipe.id})">View Recipe</button>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

// Filter Recipes
function filterRecipes(type) {
    currentFilter = type;
    
    let filtered = recipes;
    if (type !== 'all') {
        filtered = recipes.filter(recipe => recipe.type === type);
    }
    
    renderRecipes(filtered);
}

// Setup Event Listeners
function setupEventListeners() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterRecipes(btn.dataset.filter);
        });
    });
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Open Modal
function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    modalBody.innerHTML = `
        <h2 class="modal-title">${recipe.icon} ${recipe.name}</h2>
        
        <div class="modal-section">
            <h3>Caffeine Level</h3>
            <div class="modal-caffeine">${'☕'.repeat(recipe.caffeine)}</div>
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${recipe.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(instr => `<li>${instr}</li>`).join('')}
            </ol>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}
