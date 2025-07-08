  
  // Hamburger Toggle JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar Section
    const navToggler = document.querySelector(".nav-toggler");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebarClose = document.querySelector(".sidebar-close");
    const body = document.body;

    // Check if all required elements exist
    if (!navToggler || !sidebar || !sidebarOverlay || !sidebarClose) {
        console.warn('Some hamburger menu elements are missing from the DOM');
        return;
    }

    // Function to open sidebar
    function openSidebar() {
        navToggler.classList.add("active");
        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
        body.style.overflow = "hidden ";
    }

    // Function to close sidebar
    function closeSidebar() {
        navToggler.classList.remove("active");
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
        body.style.overflow = "";
    }

    // Event listeners
    navToggler.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (sidebar.classList.contains("active")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    sidebarClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeSidebar();
    });

    sidebarOverlay.addEventListener("click", (e) => {
        if (e.target === sidebarOverlay) {
            closeSidebar();
        }
    });

    // Prevent sidebar from closing when clicking inside sidebar
    sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close sidebar when clicking on sidebar links
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            closeSidebar();
        });
    });

    // Close sidebar on escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });

    // Close sidebar when clicking anywhere outside (fallback)
    document.addEventListener("click", (e) => {
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(e.target) &&
            !navToggler.contains(e.target)
        ) {
            closeSidebar();
        }
    });

    // Make closeSidebar function globally accessible for other scripts
    window.closeSidebar = closeSidebar;
    window.openSidebar = openSidebar;
});

// Debug function to check if elements exist
function debugHamburgerMenu() {
    console.log('Hamburger Menu Debug:');
    console.log('navToggler:', document.querySelector(".nav-toggler"));
    console.log('sidebar:', document.querySelector(".sidebar"));
    console.log('sidebarOverlay:', document.querySelector(".sidebar-overlay"));
    console.log('sidebarClose:', document.querySelector(".sidebar-close"));
}













//   const navcontent = document.querySelector(".nav-content");

// function openNav() {
//   if (navcontent.style.width === "50vh") {
//     sidebar.style.width = "0";
//   } else {
//     navcontent.style.width = "54vh";
//   }
// }

// function closeNav() {
//   navcontent.style.width = "0";
// }

//  testimonial section js 

 const swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
       autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
      
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });


      // automobile swiper js 

       const swiper5 = new Swiper("#automobile-services", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
         slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });



      // for spare-part js 

      const products = [
    {
        id: 1,
        name: "Car Steering Wheel",
        price: 230.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Steering+Wheel",
        category: "steering-wheel",
        brand: "audi"
    },
    {
        id: 2,
        name: "Car Steering Wheel",
        price: 95.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Steering+Wheel",
        category: "steering-wheel",
        brand: "bmw"
    },
    {
        id: 3,
        name: "Car Wheel",
        price: 340.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Car+Wheel",
        category: "wheel",
        brand: "mercedes"
    },
    {
        id: 4,
        name: "Car Steering Wheel",
        price: 135.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Steering+Wheel",
        category: "steering-wheel",
        brand: "ford"
    },
    {
        id: 5,
        name: "Car Steering Wheel",
        price: 95.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Steering+Wheel",
        category: "steering-wheel",
        brand: "toyota"
    },
    {
        id: 6,
        name: "Car Oil Filter",
        price: 69.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Oil+Filter",
        category: "oil-filter",
        brand: "nissan"
    },
    {
        id: 7,
        name: "Auto Repair and Tool",
        price: 69.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Repair+Tool",
        category: "repair-tool",
        brand: "volkswagen"
    },
    {
        id: 8,
        name: "Car Rear View",
        price: 58.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Rear+View",
        category: "rear-view",
        brand: "audi"
    },
    {
        id: 9,
        name: "Car Spare Plug",
        price: 58.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Spare+Plug",
        category: "spare-plug",
        brand: "bmw"
    },
    {
        id: 10,
        name: "Auto Repair and Tool",
        price: 69.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Repair+Tool",
        category: "repair-tool",
        brand: "mercedes"
    },
    {
        id: 11,
        name: "Car Spare Plug",
        price: 58.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Spare+Plug",
        category: "spare-plug",
        brand: "ford"
    },
    {
        id: 12,
        name: "Car Spare Plug",
        price: 58.00,
        rating: 5,
        image: "https://via.placeholder.com/150x150/f0f0f0/666?text=Spare+Plug",
        category: "spare-plug",
        brand: "toyota"
    }
];

let currentCategoryFilter = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    initializeFilters();
    initializeBrandSearch();
    syncMobileFilters();
});

// Render products
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
            ${generateStars(product.rating)}
        </div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="btn btn-secondary" onclick="viewDetails(${product.id})">View Details</button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star star"></i>';
        } else {
            starsHTML += '<i class="fas fa-star star empty"></i>';
        }
    }
    return starsHTML;
}

// Initialize brand search functionality
function initializeBrandSearch() {
    // Desktop brand search
    const brandSearch = document.getElementById('brandSearch');
    if (brandSearch) {
        brandSearch.addEventListener('input', function() {
            filterBrandList('brandList', this.value);
        });
    }

    // Mobile brand search
    const mobileBrandSearch = document.getElementById('mobileBrandSearch');
    if (mobileBrandSearch) {
        mobileBrandSearch.addEventListener('input', function() {
            filterBrandList('mobileBrandList', this.value);
        });
    }
}

// Filter brand list based on search term
function filterBrandList(listId, searchTerm) {
    const brandList = document.getElementById(listId);
    const brandItems = brandList.querySelectorAll('.checkbox-item, .mobile-checkbox-item');
    
    brandItems.forEach(item => {
        const brandName = item.textContent.trim().toLowerCase();
        const matches = brandName.includes(searchTerm.toLowerCase());
        item.style.display = matches ? 'flex' : 'none';
    });
}

// Toggle desktop filter sections
function toggleFilter(filterId) {
    const content = document.getElementById(filterId + '-content');
    const icon = document.getElementById(filterId + '-icon');
    const header = icon.parentElement;
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        header.classList.add('active');
    } else {
        content.classList.add('collapsed');
        header.classList.remove('active');
    }
}

// Toggle mobile filter dropdowns
function toggleMobileFilter(filterId) {
    const content = document.getElementById('mobile-' + filterId + '-content');
    const icon = document.getElementById('mobile-' + filterId + '-icon');
    const button = icon.parentElement;
    
    // Close all other mobile filters
    const allMobileContents = document.querySelectorAll('.mobile-filter-content');
    const allMobileButtons = document.querySelectorAll('.mobile-filter-btn');
    
    allMobileContents.forEach(c => {
        if (c !== content) {
            c.classList.remove('active');
        }
    });
    
    allMobileButtons.forEach(b => {
        if (b !== button) {
            b.classList.remove('active');
        }
    });
    
    // Toggle current filter
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        button.classList.remove('active');
    } else {
        content.classList.add('active');
        button.classList.add('active');
    }
}

// Close mobile filters when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-filter-dropdown')) {
        const allMobileContents = document.querySelectorAll('.mobile-filter-content');
        const allMobileButtons = document.querySelectorAll('.mobile-filter-btn');
        
        allMobileContents.forEach(c => c.classList.remove('active'));
        allMobileButtons.forEach(b => b.classList.remove('active'));
    }
});

// Filter by category
function filterByCategory(category) {
    currentCategoryFilter = currentCategoryFilter === category ? '' : category;
    applyFilters();
}

// Initialize filters
function initializeFilters() {
    // Desktop brand filter
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Mobile brand filter
    const mobileBrandCheckboxes = document.querySelectorAll('input[name="mobile-brand"]');
    mobileBrandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncDesktopCheckbox('brand', this.value, this.checked);
            applyFilters();
        });
    });

    // Desktop service filter
    const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Mobile service filter
    const mobileServiceCheckboxes = document.querySelectorAll('input[name="mobile-service"]');
    mobileServiceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncDesktopCheckbox('service', this.value, this.checked);
            applyFilters();
        });
    });

    // Desktop discount filter
    const discountCheckboxes = document.querySelectorAll('input[name="discount"]');
    discountCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Mobile discount filter
    const mobileDiscountCheckboxes = document.querySelectorAll('input[name="mobile-discount"]');
    mobileDiscountCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncDesktopCheckbox('discount', this.value, this.checked);
            applyFilters();
        });
    });

    // Desktop price inputs
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    
    if (minPrice) minPrice.addEventListener('input', function() {
        syncMobilePriceInputs();
        applyFilters();
    });
    if (maxPrice) maxPrice.addEventListener('input', function() {
        syncMobilePriceInputs();
        applyFilters();
    });

    // Mobile price inputs
    const mobileMinPrice = document.getElementById('mobilePriceMin');
    const mobileMaxPrice = document.getElementById('mobilePriceMax');
    
    if (mobileMinPrice) mobileMinPrice.addEventListener('input', function() {
        syncDesktopPriceInputs();
        applyFilters();
    });
    if (mobileMaxPrice) mobileMaxPrice.addEventListener('input', function() {
        syncDesktopPriceInputs();
        applyFilters();
    });
}

// Sync mobile and desktop filters
function syncMobileFilters() {
    // Sync brand checkboxes
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncMobileCheckbox('mobile-brand', this.value, this.checked);
        });
    });

    // Sync service checkboxes
    const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncMobileCheckbox('mobile-service', this.value, this.checked);
        });
    });

    // Sync discount checkboxes
    const discountCheckboxes = document.querySelectorAll('input[name="discount"]');
    discountCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            syncMobileCheckbox('mobile-discount', this.value, this.checked);
        });
    });
}

function syncDesktopCheckbox(name, value, checked) {
    const desktopCheckbox = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (desktopCheckbox) {
        desktopCheckbox.checked = checked;
    }
}

function syncMobileCheckbox(name, value, checked) {
    const mobileCheckbox = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (mobileCheckbox) {
        mobileCheckbox.checked = checked;
    }
}

function syncMobilePriceInputs() {
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const mobileMinPrice = document.getElementById('mobilePriceMin');
    const mobileMaxPrice = document.getElementById('mobilePriceMax');
    
    if (minPrice && mobileMinPrice) mobileMinPrice.value = minPrice.value;
    if (maxPrice && mobileMaxPrice) mobileMaxPrice.value = maxPrice.value;
}

function syncDesktopPriceInputs() {
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const mobileMinPrice = document.getElementById('mobilePriceMin');
    const mobileMaxPrice = document.getElementById('mobilePriceMax');
    
    if (minPrice && mobileMinPrice) minPrice.value = mobileMinPrice.value;
    if (maxPrice && mobileMaxPrice) maxPrice.value = mobileMaxPrice.value;
}

// Apply all filters
function applyFilters() {
    let filteredProducts = [...products];

    // Price filter
    const minPrice = parseFloat(document.getElementById('minPrice')?.value || document.getElementById('mobilePriceMin')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value || document.getElementById('mobilePriceMax')?.value) || 999999;
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    // Category filter
    if (currentCategoryFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentCategoryFilter
        );
    }

    // Brand filter
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked, input[name="mobile-brand"]:checked'))
        .map(checkbox => checkbox.value);
    const uniqueBrands = [...new Set(selectedBrands)];
    if (uniqueBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            uniqueBrands.includes(product.brand)
        );
    }

    // Service filter
    const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked, input[name="mobile-service"]:checked'))
        .map(checkbox => checkbox.value);
    const uniqueServices = [...new Set(selectedServices)];
    // Note: Service filtering would need product data to include service properties

    // Discount filter
    const selectedDiscounts = Array.from(document.querySelectorAll('input[name="discount"]:checked, input[name="mobile-discount"]:checked'))
        .map(checkbox => checkbox.value);
    const uniqueDiscounts = [...new Set(selectedDiscounts)];
    // Note: Discount filtering would need product data to include discount properties

    // Search filter
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    renderProducts(filteredProducts);
}

// Clear all filters
function clearAllFilters() {
    // Clear category filter
    currentCategoryFilter = '';
    
    // Clear checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => checkbox.checked = false);
    
    // Reset price inputs
    const priceInputs = document.querySelectorAll('#minPrice, #maxPrice, #mobilePriceMin, #mobilePriceMax');
    priceInputs.forEach(input => {
        if (input.id.includes('min') || input.id.includes('Min')) {
            input.value = '0';
        } else {
            input.value = '300';
        }
    });
    
    // Clear search inputs
    document.getElementById('searchInput').value = '';
    const brandSearchInputs = document.querySelectorAll('#brandSearch, #mobileBrandSearch');
    brandSearchInputs.forEach(input => {
        if (input) input.value = '';
    });
    
    // Reset brand lists visibility
    filterBrandList('brandList', '');
    filterBrandList('mobileBrandList', '');
    
    // Close mobile filters
    const allMobileContents = document.querySelectorAll('.mobile-filter-content');
    const allMobileButtons = document.querySelectorAll('.mobile-filter-btn');
    allMobileContents.forEach(c => c.classList.remove('active'));
    allMobileButtons.forEach(b => b.classList.remove('active'));
    
    // Re-render all products
    renderProducts(products);
}

// Search functionality
function performSearch() {
    applyFilters();
}

// Add search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Add search on input
document.getElementById('searchInput').addEventListener('input', function() {
    applyFilters();
});

// Product actions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added "${product.name}" to cart!`);
}

function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Viewing details for "${product.name}"\nPrice: $${product.price.toFixed(2)}\nRating: ${product.rating} stars`);
}

// Initialize automotive accessories filter as open by default
document.addEventListener('DOMContentLoaded', function() {
    const automotiveContent = document.getElementById('automotive-content');
    const automotiveIcon = document.getElementById('automotive-icon');
    const automotiveHeader = automotiveIcon?.parentElement;
    
    if (automotiveContent && automotiveHeader) {
        automotiveContent.classList.remove('collapsed');
        automotiveHeader.classList.add('active');
    }
});





