
        document.addEventListener('DOMContentLoaded', function() {
            // Modal elements
            const loginBtn = document.getElementById('loginBtn');
            const modalOverlay = document.getElementById('modalOverlay');
            const modalClose = document.getElementById('modalClose');
            const loginForm = document.getElementById('loginForm');
            const googleBtn = document.getElementById('googleBtn');
            const facebookBtn = document.getElementById('facebookBtn');

            // Open modal function
            function openModal() {
                if (modalOverlay) {
                    modalOverlay.classList.add('active');
                    document.body.classList.add('modal-active');
                }
            }

            // Close modal function
            function closeModal() {
                if (modalOverlay) {
                    modalOverlay.classList.remove('active');
                    document.body.classList.remove('modal-active');
                }
            }

            // Event listeners for opening modal
            if (loginBtn) {
                loginBtn.addEventListener('click', openModal);
            }

            // Event listeners for closing modal
            if (modalClose) {
                modalClose.addEventListener('click', closeModal);
            }

            // Close modal when clicking on overlay (outside modal)
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
                    
                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        alert('Please enter a valid email address');
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
            if (googleBtn) {
                googleBtn.addEventListener('click', function() {
                    alert('Google login clicked! (This is a demo)');
                });
            }

            if (facebookBtn) {
                facebookBtn.addEventListener('click', function() {
                    alert('Facebook login clicked! (This is a demo)');
                });
            }

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

            // Prevent form submission on social buttons
            const socialBtns = document.querySelectorAll('.social-btn');
            socialBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
        });
    