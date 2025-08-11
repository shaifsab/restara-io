// Menu data with Unsplash images for each item
export const menuData = {
  starters: [
    {
      id: 1,
      name: "Crispy Calamari",
      description: "Fresh squid rings served with marinara sauce and lemon wedges",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&crop=center",
      category: "starters",
      isVegetarian: false,
      isSpicy: false
    },
    {
      id: 2,
      name: "Bruschetta Trio",
      description: "Three varieties of toasted bread with tomato basil, mushroom, and olive tapenade",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop&crop=center",
      category: "starters",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 3,
      name: "Spicy Buffalo Wings",
      description: "Crispy chicken wings tossed in our signature buffalo sauce",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center",
      category: "starters",
      isVegetarian: false,
      isSpicy: true
    },
    {
      id: 4,
      name: "Spinach & Artichoke Dip",
      description: "Creamy blend served with tortilla chips and fresh vegetables",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop&crop=center",
      category: "starters",
      isVegetarian: true,
      isSpicy: false
    }
  ],
  mains: [
    {
      id: 5,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb butter, served with roasted vegetables",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: false,
      isSpicy: false
    },
    {
      id: 6,
      name: "Ribeye Steak",
      description: "12oz premium cut with garlic mashed potatoes and seasonal vegetables",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: false,
      isSpicy: false
    },
    {
      id: 7,
      name: "Chicken Tikka Masala",
      description: "Tender chicken in creamy tomato curry sauce with basmati rice",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: false,
      isSpicy: true
    },
    {
      id: 8,
      name: "Vegetarian Pasta Primavera",
      description: "Fresh seasonal vegetables tossed in garlic olive oil with penne pasta",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 9,
      name: "Lobster Ravioli",
      description: "Handmade pasta filled with fresh lobster in a creamy cognac sauce",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d851?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: false,
      isSpicy: false
    },
    {
      id: 10,
      name: "BBQ Pulled Pork Burger",
      description: "Slow-cooked pulled pork with coleslaw on a brioche bun, served with fries",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center",
      category: "mains",
      isVegetarian: false,
      isSpicy: false
    }
  ],
  desserts: [
    {
      id: 11,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
      category: "desserts",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 12,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=center",
      category: "desserts",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 13,
      name: "Crème Brûlée",
      description: "Rich vanilla custard topped with caramelized sugar",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop&crop=center",
      category: "desserts",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 14,
      name: "New York Cheesecake",
      description: "Classic cheesecake with berry compote and whipped cream",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1567306301408-e3d5cc159a4d?w=400&h=300&fit=crop&crop=center",
      category: "desserts",
      isVegetarian: true,
      isSpicy: false
    }
  ],
  beverages: [
    {
      id: 15,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice served chilled",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&crop=center",
      category: "beverages",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 16,
      name: "Craft Beer Selection",
      description: "Local craft beer on tap - ask your server for today's selection",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop&crop=center",
      category: "beverages",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 17,
      name: "House Wine",
      description: "Red or white wine selection from our curated collection",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=300&fit=crop&crop=center",
      category: "beverages",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 18,
      name: "Artisan Coffee",
      description: "Freshly roasted coffee beans brewed to perfection",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&crop=center",
      category: "beverages",
      isVegetarian: true,
      isSpicy: false
    },
    {
      id: 19,
      name: "Fresh Smoothie",
      description: "Tropical fruit blend with mango, pineapple, and coconut",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop&crop=center",
      category: "beverages",
      isVegetarian: true,
      isSpicy: false
    }
  ]
};

export const categories = [
  { id: 'starters', name: 'Starters', icon: '🥗' },
  { id: 'mains', name: 'Main Courses', icon: '🍽️' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
];

// Helper functions
export const getAllItems = () => {
  return Object.values(menuData).flat();
};

export const getItemsByCategory = (category) => {
  return menuData[category] || [];
};

export const getItemById = (id) => {
  return getAllItems().find(item => item.id === parseInt(id));
};

export const searchItems = (query) => {
  const allItems = getAllItems();
  const searchTerm = query.toLowerCase();
  
  return allItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
};
