/* =====================================================
   FOOD DATA
===================================================== */

const foods = [

    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        price: 249,
        originalPrice: 299,
        discount: 17,
        rating: 4.8,
        reviews: 324,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        description: "Classic pizza with tomato, mozzarella and basil."
    },

    {
        id: 2,
        name: "Cheese Burger",
        category: "burger",
        price: 149,
        originalPrice: 199,
        discount: 25,
        rating: 4.7,
        reviews: 218,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: "Juicy grilled burger loaded with melted cheese."
    },

    {
        id: 3,
        name: "Chicken Biryani",
        category: "biryani",
        price: 199,
        originalPrice: 249,
        discount: 20,
        rating: 4.9,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
        description: "Aromatic basmati rice cooked with tender chicken."
    },

    {
        id: 4,
        name: "Chocolate Cake",
        category: "dessert",
        price: 129,
        originalPrice: 159,
        discount: 19,
        rating: 4.6,
        reviews: 180,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        description: "Rich and creamy chocolate cake."
    },

    {
        id: 5,
        name: "Cold Coffee",
        category: "drink",
        price: 99,
        originalPrice: 129,
        discount: 23,
        rating: 4.5,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        description: "Creamy chilled coffee with a delicious flavour."
    },

    {
        id: 6,
        name: "Chicken Burger",
        category: "burger",
        price: 179,
        originalPrice: 229,
        discount: 22,
        rating: 4.8,
        reviews: 265,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
        description: "Crispy chicken patty with fresh vegetables."
    },

    {
        id: 7,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 299,
        originalPrice: 349,
        discount: 14,
        rating: 4.9,
        reviews: 391,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        description: "Loaded pizza topped with spicy pepperoni."
    },

    {
        id: 8,
        name: "Gulab Jamun",
        category: "dessert",
        price: 89,
        originalPrice: 119,
        discount: 25,
        rating: 4.7,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1666190094760-3c7c0f1e7c2f?auto=format&fit=crop&w=800&q=80",
        description: "Soft and delicious Indian sweet."
    },

    {
        id: 9,
        name: "Paneer Biryani",
        category: "biryani",
        price: 179,
        originalPrice: 219,
        discount: 18,
        rating: 4.6,
        reviews: 205,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d4c1d?auto=format&fit=crop&w=800&q=80",
        description: "Flavourful biryani with soft paneer pieces."
    },

    {
        id: 10,
        name: "French Fries",
        category: "burger",
        price: 99,
        originalPrice: 129,
        discount: 23,
        rating: 4.5,
        reviews: 190,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        description: "Crispy golden fries with a perfect crunch."
    },

    {
        id: 11,
        name: "Strawberry Cake",
        category: "dessert",
        price: 159,
        originalPrice: 199,
        discount: 20,
        rating: 4.7,
        reviews: 155,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        description: "Soft strawberry cake with creamy frosting."
    },

    {
        id: 12,
        name: "Fresh Orange Juice",
        category: "drink",
        price: 79,
        originalPrice: 99,
        discount: 20,
        rating: 4.6,
        reviews: 108,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
        description: "Freshly prepared and refreshing orange juice."
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let cart = [];

let currentFoods = [...foods];

let appliedCoupon = false;

let favorites =
    JSON.parse(
        localStorage.getItem("foodieFavorites")
    ) || [];


/* =====================================================
   DISPLAY FOOD
===================================================== */

function displayFood(foodList) {

    const container =
        document.getElementById("foodContainer");

    container.innerHTML = "";


    if (foodList.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h3>😔 No food found</h3>

                <p>
                    Try searching for something else.
                </p>

            </div>

        `;

        return;
    }


    foodList.forEach(food => {

        const isFavorite =
            favorites.includes(food.id);


        const card =
            document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <div class="food-image">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                >

                <span class="discount">
                    ${food.discount}% OFF
                </span>

                <button
                    class="favorite ${isFavorite ? "active" : ""}"
                    onclick="toggleFavorite(${food.id}, this)"
                >

                    <i class="${
                        isFavorite
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-heart"></i>

                </button>

            </div>


            <div class="food-info">

                <h3>
                    ${food.name}
                </h3>

                <p class="description">
                    ${food.description}
                </p>


                <div class="food-bottom">

                    <div>

                        <span class="rating">
                            ⭐ ${food.rating}
                            (${food.reviews})
                        </span>

                    </div>

                    <div>

                        <span class="price">
                            ₹${food.price}
                        </span>

                        <span class="original-price">
                            ₹${food.originalPrice}
                        </span>

                    </div>

                </div>


                <button
                    class="add-cart"
                    onclick="addToCart(${food.id})"
                >

                    <i class="fa-solid fa-cart-plus"></i>

                    Add to Cart

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const food =
        foods.find(item => item.id === id);


    if (!food) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    updateCart();


    showToast(
        `${food.name} added to cart!`
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = count;


    displayCart();

}


/* =====================================================
   DISPLAY CART
===================================================== */

function displayCart() {

    const container =
        document.getElementById("cartItems");

    const empty =
        document.getElementById("emptyCart");

    const summary =
        document.getElementById("cartSummary");


    container.innerHTML = "";


    if (cart.length === 0) {

        empty.style.display = "block";

        summary.style.display = "none";

        return;

    }


    empty.style.display = "none";

    summary.style.display = "block";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div>

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-item-price">
                    ₹${item.price}
                </div>


                <button
                    class="remove-cart"
                    onclick="removeFromCart(${item.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                    Remove

                </button>

            </div>


            <div class="quantity-control">

                <button
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

            </div>

        `;


        container.appendChild(cartItem);

    });


    updateSummary();

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    updateCart();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(id) {

    const item =
        cart.find(item => item.id === id);


    cart =
        cart.filter(
            item => item.id !== id
        );


    updateCart();


    if (item) {

        showToast(
            `${item.name} removed`
        );

    }

}


/* =====================================================
   CART TOTAL
===================================================== */

function updateSummary() {

    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,
            0
        );


    let deliveryFee =
        subtotal >= 499 ? 0 : 40;


    let discount = 0;


    if (appliedCoupon) {

        discount =
            subtotal * 0.30;

    }


    const total =
        Math.max(
            0,
            subtotal +
            deliveryFee -
            discount
        );


    document.getElementById(
        "subtotal"
    ).textContent =
        Math.round(subtotal);


    document.getElementById(
        "deliveryFee"
    ).textContent =
        deliveryFee;


    document.getElementById(
        "grandTotal"
    ).textContent =
        Math.round(total);


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        Math.round(total);

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document.getElementById(
        "cartModal"
    ).classList.add("show");


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document.getElementById(
        "cartModal"
    ).classList.remove("show");


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   CLOSE CART OUTSIDE
===================================================== */

function closeCartOutside(event) {

    if (
        event.target.id === "cartModal"
    ) {

        closeCart();

    }

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterFood(
    category,
    button
) {

    document
        .querySelectorAll(".category-card")
        .forEach(card =>
            card.classList.remove("active")
        );


    if (button) {

        button.classList.add("active");

    }


    if (category === "all") {

        currentFoods = [...foods];

    } else {

        currentFoods =
            foods.filter(
                food =>
                    food.category === category
            );

    }


    displayFood(currentFoods);

}


/* =====================================================
   SEARCH
===================================================== */

function searchFood() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (!search) {

        currentFoods = [...foods];

    } else {

        currentFoods =
            foods.filter(food =>

                food.name
                    .toLowerCase()
                    .includes(search)

                ||

                food.category
                    .toLowerCase()
                    .includes(search)

                ||

                food.description
                    .toLowerCase()
                    .includes(search)

            );

    }


    displayFood(currentFoods);

}


/* =====================================================
   CLEAR SEARCH
===================================================== */

function clearSearch() {

    document.getElementById(
        "searchInput"
    ).value = "";


    currentFoods = [...foods];

    displayFood(currentFoods);

}


/* =====================================================
   SORT
===================================================== */

function sortFood() {

    const value =
        document.getElementById(
            "sortSelect"
        ).value;


    let sorted =
        [...currentFoods];


    if (value === "low") {

        sorted.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (value === "high") {

        sorted.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (value === "rating") {

        sorted.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    displayFood(sorted);

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(
    id,
    button
) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );


        button.classList.remove(
            "active"
        );


        button.innerHTML =
            '<i class="fa-regular fa-heart"></i>';


        showToast(
            "Removed from favourites"
        );

    } else {

        favorites.push(id);


        button.classList.add(
            "active"
        );


        button.innerHTML =
            '<i class="fa-solid fa-heart"></i>';


        showToast(
            "Added to favourites ❤️"
        );

    }


    localStorage.setItem(
        "foodieFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   APPLY COUPON
===================================================== */

function applyCoupon() {

    const input =
        document
            .getElementById("couponInput")
            .value
            .trim()
            .toUpperCase();


    const result =
        document.getElementById(
            "couponResult"
        );


    if (input === "FOODIE30") {

        appliedCoupon = true;


        result.textContent =
            "✓ 30% discount applied!";


        updateSummary();


        showToast(
            "Coupon applied successfully!"
        );

    } else {

        appliedCoupon = false;


        result.textContent =
            "Invalid coupon code.";

        result.style.color =
            "#e53935";


        updateSummary();

    }

}


/* =====================================================
   COPY COUPON
===================================================== */

function copyCoupon() {

    navigator.clipboard.writeText(
        "FOODIE30"
    );


    document.getElementById(
        "copyMessage"
    ).textContent =
        "✓ Coupon copied!";


    setTimeout(() => {

        document.getElementById(
            "copyMessage"
        ).textContent = "";

    }, 2500);

}


/* =====================================================
   CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty!"
        );

        return;

    }


    updateSummary();


    document.getElementById(
        "checkoutModal"
    ).classList.add("show");


    document.body.style.overflow =
        "hidden";

}


function closeCheckout() {

    document.getElementById(
        "checkoutModal"
    ).classList.remove("show");


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   PLACE ORDER
===================================================== */

function placeOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "customerName"
        ).value;


    const orderId =
        "FOOD" +
        Math.floor(
            10000 +
            Math.random() * 90000
        );


    document.getElementById(
        "orderId"
    ).textContent =
        "#" + orderId;


    closeCheckout();

    closeCart();


    document.getElementById(
        "successModal"
    ).classList.add("show");


    cart = [];

    appliedCoupon = false;


    updateCart();


    showToast(
        `Thank you ${name}! Order placed.`
    );

}


/* =====================================================
   CLOSE SUCCESS
===================================================== */

function closeSuccess() {

    document.getElementById(
        "successModal"
    ).classList.remove("show");


    document.body.style.overflow =
        "auto";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    document.getElementById(
        "toastMessage"
    ).textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}


/* =====================================================
   SCROLL SEARCH
===================================================== */

function scrollToSearch() {

    document
        .getElementById("searchSection")
        .scrollIntoView({
            behavior: "smooth"
        });


    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 500);

}


/* =====================================================
   SCROLL MENU
===================================================== */

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   INITIALIZE
===================================================== */

displayFood(foods);

updateCart();