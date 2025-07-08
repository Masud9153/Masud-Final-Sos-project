 

document.addEventListener('DOMContentLoaded', function() {
    // Location Dropdown Functionality
    const dropdown = document.getElementById('locationDropdown');
    const dropdownContent = document.getElementById('dropdownContent');
    const selectedLocation = document.getElementById('selectedLocation');
    const options = dropdownContent.querySelectorAll('div[data-location]');

    // Toggle dropdown on click
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
        dropdownContent.classList.toggle('show');
    });

    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove selected class from all options
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Update displayed location
            const newLocation = this.getAttribute('data-location');
            selectedLocation.textContent = newLocation;
            
            // Close dropdown
            dropdown.classList.remove('active');
            dropdownContent.classList.remove('show');
            
            // Optional: Trigger custom event for other parts of your app
            const locationChangeEvent = new CustomEvent('locationChanged', {
                detail: { location: newLocation }
            });
            dropdown.dispatchEvent(locationChangeEvent);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdown.classList.remove('active');
        dropdownContent.classList.remove('show');
    });

    // Optional: Listen for location change events
    dropdown.addEventListener('locationChanged', function(e) {
        console.log('Location changed to:', e.detail.location);
        // You can add additional logic here, like updating other parts of your page
    });

    // Mobile Navigation
    const navToggler = document.querySelector('.nav-toggler');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarClose = document.querySelector('.sidebar-close');

    if (navToggler && sidebar && sidebarOverlay && sidebarClose) {
        navToggler.addEventListener('click', function() {
            navToggler.classList.toggle('active');
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });

        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        function closeSidebar() {
            navToggler.classList.remove('active');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Login Modal Functionality
    const loginBtn = document.getElementById('loginBtn');
    const sidebarLoginBtn = document.getElementById('sidebarLoginBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const loginForm = document.querySelector('.login-form');

    // Open modal functions
    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = "hidden" ; 
            // document.documentElement.style.overflow = " hidden " ;
            const scrollY = window.scrollY;
            document.documentElement.style.overflow = "hidden";
        }
    }

    // Close modal function
    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = "";
            window.scrollTo(0, scrollY);
        }
    }

    // Event listeners for opening modal
    if (loginBtn) {
        loginBtn.addEventListener('click', openModal);
    }
    
    if (sidebarLoginBtn) {
        sidebarLoginBtn.addEventListener('click', function() {
            if (typeof closeSidebar === 'function') {
                closeSidebar(); // Close sidebar first
            }
            setTimeout(openModal, 300); // Open modal after sidebar closes
        });
    }

    // Event listeners for closing modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to your server
            console.log('Login attempt:', { email, password });
            
            // For demo purposes, show success message
            alert('Login successful! (This is a demo)');
            closeModal();
            
            // Reset form
            loginForm.reset();
        });
    }

    // Social login buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.textContent.trim();
            alert(`${provider} login clicked! (This is a demo)`);
        });
    });

    // Add smooth focus transitions for form inputs
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

   