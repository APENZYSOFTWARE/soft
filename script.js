// Improved mobile-responsive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality for Tailwind
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('hidden');
            mainNav.classList.toggle('block');
            
            // Animate the menu
            if (mainNav.classList.contains('block')) {
                mainNav.classList.add('animate-slideDown');
                mainNav.classList.remove('animate-slideUp');
            } else {
                mainNav.classList.add('animate-slideUp');
                mainNav.classList.remove('animate-slideDown');
            }
        });
    }

    // Close menu when clicking a link (for mobile)
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('block');
            }
        });
    });

    // Order form handling
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(orderForm);
            const orderData = Object.fromEntries(formData.entries());
            
            // Show confirmation
            alert(`Thank you for your order, ${orderData.name}!\n\nJustice will contact you soon at ${orderData.email}.`);
            orderForm.reset();
        });
    }

    // Improved product ordering
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            const price = this.parentElement.querySelector('.price').textContent;
            
            // Show more detailed confirmation
            const confirmOrder = confirm(`You're ordering: ${productName}\nPrice: ${price}\n\nProceed to confirmation?`);
            
            if (confirmOrder) {
                alert(`Order confirmed for ${productName}!\n\nPlease call 09025229337 to finalize your order.`);
            }
        });
    });

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

    // Touch device optimizations
    if ('ontouchstart' in window) {
        document.querySelectorAll('a, button').forEach(el => {
            el.style.minHeight = '48px';
            el.style.minWidth = '48px';
        });
    }

    console.log('Justice\'s Business Website - Ready for Business!');
});
