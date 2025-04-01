// Define menu items with more items added
const menuItems = [
    // Main Courses
    { name: 'Beef Burger 🍔', category: 'main', description: 'Juicy beef patty with lettuce, tomato, and cheese.', price: '200 MZN' },
    { name: 'Cheese Burger 🍔', category: 'main', description: 'Cheddar cheese, beef patty, and pickles.', price: '250 MZN' },
    { name: 'Chicken Burger 🍗', category: 'main', description: 'Grilled chicken patty with lettuce and mayo.', price: '220 MZN' },
    { name: 'Veggie Burger 🥗', category: 'main', description: 'Veggie patty with tomatoes, lettuce, and vegan mayo.', price: '200 MZN' },
    { name: 'Pepperoni Pizza 🍕', category: 'pizza', description: 'Classic pepperoni pizza with mozzarella.', price: '350 MZN' },
    { name: 'Margherita Pizza 🍕', category: 'pizza', description: 'Tomato, mozzarella, and basil pizza.', price: '300 MZN' },
    { name: 'BBQ Chicken Pizza 🍕', category: 'pizza', description: 'BBQ sauce, chicken, and red onions.', price: '400 MZN' },
    { name: 'Veggie Supreme Pizza 🍕', category: 'pizza', description: 'Bell peppers, olives, onions, and mushrooms.', price: '350 MZN' },
    // Coffees
    { name: 'Espresso ☕', category: 'drinks', description: 'Strong and bold espresso.', price: '100 MZN' },
    { name: 'Cappuccino ☕', category: 'drinks', description: 'Espresso topped with steamed milk and foam.', price: '150 MZN' },
    { name: 'Latte ☕', category: 'drinks', description: 'Espresso with steamed milk and a light foam.', price: '160 MZN' },
    { name: 'Americano ☕', category: 'drinks', description: 'Espresso diluted with hot water.', price: '130 MZN' },
    { name: 'Cola 🥤', category: 'drinks', description: 'Classic cola drink.', price: '80 MZN' },
    { name: 'Orange Juice 🍊', category: 'drinks', description: 'Freshly squeezed orange juice.', price: '90 MZN' },
    { name: 'Iced Tea 🍹', category: 'drinks', description: 'Refreshing iced tea with lemon.', price: '100 MZN' },
    { name: 'Water 💧', category: 'drinks', description: 'Cold refreshing water.', price: '50 MZN' },
    // Desserts
    { name: 'Chocolate Cake 🍫', category: 'desserts', description: 'Rich and moist chocolate cake.', price: '150 MZN' },
    { name: 'Ice Cream 🍦', category: 'desserts', description: 'Delicious vanilla ice cream.', price: '120 MZN' },
    { name: 'Apple Pie 🍏', category: 'desserts', description: 'Warm apple pie with cinnamon.', price: '130 MZN' },
    { name: 'Donut 🍩', category: 'desserts', description: 'Freshly made donuts with sugar glaze.', price: '90 MZN' },
    // Sides
    { name: 'French Fries 🍟', category: 'side', description: 'Crispy fries with ketchup.', price: '70 MZN' },
    { name: 'Onion Rings 🧅', category: 'side', description: 'Crispy battered onion rings.', price: '80 MZN' },
    { name: 'Coleslaw 🥗', category: 'side', description: 'Creamy coleslaw salad.', price: '50 MZN' },
    { name: 'Garlic Bread 🍞', category: 'side', description: 'Toasted garlic bread with butter.', price: '90 MZN' }
];

// Display the menu items in the DOM
function displayMenu(items) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';  // Clear any existing items before displaying new ones

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
            <button onclick="addToCart('${item.name}', '${item.price}')">Add to Cart</button>
        `;

        menu.appendChild(menuItem);
    });
}

// Call displayMenu initially to show all items
displayMenu(menuItems);

// Add items to the cart
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Update the cart display
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price}`;
        cartList.appendChild(listItem);
        total += parseInt(item.price.split(' ')[0]); // Extract number from the price
    });

    totalPrice.innerText = `Total: ${total} MZN`;
}

// Clear the cart
function clearCart() {
    cart = [];
    updateCart();
}

// Filter the menu based on category
function filterMenu(category) {
    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}

// Show/Hide cart on button click
const cartButton = document.getElementById('cart-button');
const cartDiv = document.getElementById('cart');

cartButton.addEventListener('click', () => {
    cartDiv.classList.toggle('active');
});
