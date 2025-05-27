// JavaScript functionality will be added here

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Order form submission
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your order! Justice will contact you soon.');
            orderForm.reset();
        });
    }

    // Job application buttons
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.parentElement.querySelector('h3').textContent;
            alert(`Thank you for your interest in the ${jobTitle} position! Justice will review your application.`);
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Order functionality
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const productName = button.parentElement.querySelector('h3').textContent;
        const price = button.parentElement.querySelector('.price').textContent;
        
        // Show order confirmation
        alert(`Order placed for ${productName} (${price})\n\nPlease call 09025229337 to confirm your order`);
        
        // In a real implementation, you would:
        // 1. Open an order modal
        // 2. Collect customer details
        // 3. Send order to backend
      });
    });

    // View details functionality
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const imgSrc = e.target.closest('.product-image-container').querySelector('img').src;
        window.open(imgSrc, '_blank');
      });
    });

    // Profile icon click effect
    document.querySelector('.profile-container').addEventListener('click', function() {
      this.classList.toggle('expanded');
      if (this.classList.contains('expanded')) {
        this.style.width = '200px';
        this.style.borderRadius = '20px';
        this.innerHTML = `
          <div class="profile-expanded">
            <img src="images/justice-profile.jpg" class="profile-pic">
            <div class="profile-info">
              <div class="profile-name">Justice</div>
              <div class="profile-title">Founder & CEO</div>
            </div>
          </div>
        `;
      } else {
        this.style.width = '';
        this.style.borderRadius = '';
        this.innerHTML = '<img src="images/justice-profile.jpg" class="profile-pic">';
      }
    });
});

console.log('Justice\'s Business Website - Ready for Business!');
