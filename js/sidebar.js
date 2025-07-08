// Store scroll position
let scrollPosition = 0;

// Function to lock body scroll
function lockBodyScroll() {
  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add class to body to prevent scrolling
  document.body.classList.add('sidebar-open');
  
  // Set body position to maintain scroll position
  document.body.style.top = `-${scrollPosition}px`;
}

// Function to unlock body scroll
function unlockBodyScroll() {
  // Remove class from body
  document.body.classList.remove('sidebar-open');
  
  // Reset body styles
  document.body.style.top = '';
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
}

// Example usage with your sidebar toggle functions
function openSidebar() {
  // Your existing sidebar opening code
  document.querySelector('.sidebar').classList.add('active');
  document.querySelector('.sidebar-overlay').classList.add('active');
  
  // Lock body scroll
  lockBodyScroll();
}

function closeSidebar() {
  // Your existing sidebar closing code
  document.querySelector('.sidebar').classList.remove('active');
  document.querySelector('.sidebar-overlay').classList.remove('active');
  
  // Unlock body scroll
  unlockBodyScroll();
}

// Event listeners for sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu button (replace with your actual button selector)
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const closeBtn = document.querySelector('.sidebar-close');
  const overlay = document.querySelector('.sidebar-overlay');
  
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openSidebar);
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }
  
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // Close sidebar on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.querySelector('.sidebar').classList.contains('active')) {
      closeSidebar();
    }
  });
});