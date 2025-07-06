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
        body.style.overflow = "hidden";
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