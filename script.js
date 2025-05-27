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
      const isMobile = window.innerWidth <= 768;
      this.classList.toggle('expanded');
      
      if (this.classList.contains('expanded')) {
        const size = isMobile ? '150px' : '200px';
        this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        this.style.width = size;
        this.style.height = size;
        this.style.borderRadius = '50%';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.innerHTML = `
          <div class="profile-expanded">
            <img src="images/justice-profile.jpg" class="profile-pic" style="border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.1)">
            <div class="profile-info">
              <div class="profile-name" style="color: white; font-weight: bold; font-size: 1.2em">Justice</div>
              <div class="profile-title" style="color: rgba(255,255,255,0.8)">Founder & CEO</div>
              <div class="profile-social" style="margin-top: 10px">
                <a href="#" style="color: white; margin: 0 5px"><i class="fab fa-instagram"></i></a>
                <a href="#" style="color: white; margin: 0 5px"><i class="fab fa-twitter"></i></a>
                <a href="#" style="color: white; margin: 0 5px"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        `;
      } else {
        this.style.transition = 'all 0.5s ease-in-out';
        this.style.width = '';
        this.style.height = '';
        this.style.borderRadius = '';
        this.style.boxShadow = '';
        this.style.background = '';
        this.innerHTML = '<img src="images/justice-profile.jpg" class="profile-pic" style="border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.1)">';
      }
    });

    // Profile functionality
    const profileEditBtn = document.createElement('button');
    profileEditBtn.textContent = 'Edit Profile';
    profileEditBtn.className = 'profile-edit-btn';
    
    const profileSection = document.querySelector('#profile .profile-card');
    if (profileSection) {
        profileSection.appendChild(profileEditBtn);
        
        profileEditBtn.addEventListener('click', function() {
            alert('Profile edit functionality will be added here');
            // In a real implementation:
            // 1. Show edit form
            // 2. Allow updating profile info
            // 3. Save changes
        });
    }
});

console.log('Justice\'s Business Website - Ready for Business!');
