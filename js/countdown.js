
    
        // Animated counter function
        function animateCounter(element, start, end, duration, suffix = "") {
            const startTime = performance.now();
            const isPercentage = suffix === "%";

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(start + (end - start) * easeOutQuart);

                if (isPercentage) {
                    element.textContent = current + suffix;
                } else if (end >= 1000) {
                    // For large numbers, add 'k+' suffix
                    element.textContent = Math.floor(current / 1000) + "k+";
                } else {
                    element.textContent = current + suffix;
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);
        }

        // Track if animation has been triggered
        let animationTriggered = false;

        // Function to start counters
        function startCounters() {
            if (animationTriggered) return; // Prevent multiple triggers
            
            animationTriggered = true;
            
            const yearsElement = document.getElementById("years");
            const clientsElement = document.getElementById("clients");
            const satisfactionElement = document.getElementById("satisfaction");

            // Start animations with delays
            setTimeout(() => animateCounter(yearsElement, 0, 10, 2000, "+"), 200);
            setTimeout(() => animateCounter(clientsElement, 0, 50000, 2500), 500);
            setTimeout(() => animateCounter(satisfactionElement, 0, 99, 2000, "%"), 800);
        }

        // Intersection Observer to detect when section is visible
        function setupScrollTrigger() {
            const achievementsSection = document.getElementById('achievements-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Section is visible, start the counter animation
                        startCounters();
                    }
                });
            }, {
                threshold: 0.3 // Trigger when 30% of the section is visible
            });

            observer.observe(achievementsSection);
        }

        // Initialize everything when DOM is loaded
        document.addEventListener("DOMContentLoaded", () => {
            setupScrollTrigger();
        });
    
