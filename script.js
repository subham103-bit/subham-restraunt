const dishes = [
    { name: 'Pasta', price: 12.99, image: 'images/pasta.jpg' },
    { name: 'Burger', price: 9.99, image: 'images/burger.jpg' },
    { name: 'Pizza', price: 15.99, image: 'images/pizza.jpg' },
    { name: 'Sushi', price: 18.99, image: 'images/sushi.jpg' },
    { name: 'Salad', price: 8.99, image: 'images/salad.jpg' },
    { name: 'Steak', price: 22.99, image: 'images/steak.jpg' },
    { name: 'Tacos', price: 10.99, image: 'images/tacos.jpg' },
    { name: 'Ice Cream', price: 5.99, image: 'images/icecream.jpg' },
    { name: 'Pancakes', price: 7.99, image: 'images/pancakes.jpg' },
    { name: 'Fries', price: 3.99, image: 'images/fries.jpg' },
    { name: 'Hot Dog', price: 4.99, image: 'images/hotdog.jpg' },
    { name: 'Soup', price: 6.99, image: 'images/soup.jpg' }
  ];
  
  const menuContainer = document.getElementById('menu');
  
  function displayDishes(dishesToDisplay) {
    menuContainer.innerHTML = '';
    dishesToDisplay.forEach(dish => {
      const dishElement = document.createElement('div');
      dishElement.classList.add('dish');
      dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p>$${dish.price.toFixed(2)}</p>
        <button onclick="addToCart('${dish.name}', ${dish.price})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      `;
      menuContainer.appendChild(dishElement);
    });
  }
  
  function searchDishes() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredDishes = dishes.filter(dish =>
      dish.name.toLowerCase().includes(query)
    );
    displayDishes(filteredDishes);
  }
  
  function addToCart(name, price) {
    alert(`${name} added to cart at $${price.toFixed(2)}`);
  }
  
  displayDishes(dishes);
  