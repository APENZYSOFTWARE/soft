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

    // Enhanced product ordering with contact form
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;
            
            // Create order form modal
            const orderModal = document.createElement('div');
            orderModal.className = 'order-modal';
            orderModal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Order ${productName}</h3>
                    <p>Price: ${price}</p>
                    <form id="orderForm">
                        <input type="hidden" name="product" value="${productName}">
                        <input type="hidden" name="price" value="${price}">
                        <div class="form-group">
                            <label>Your Name*</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>Phone Number*</label>
                            <input type="tel" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label>Delivery Address</label>
                            <textarea name="address"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Submit Order</button>
                    </form>
                </div>
            `;
            
            document.body.appendChild(orderModal);
            
            // Close modal
            orderModal.querySelector('.close-modal').addEventListener('click', () => {
                orderModal.remove();
            });
            
            // Form submission
            orderModal.querySelector('#orderForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const orderDetails = Object.fromEntries(formData.entries());
                
                // Format WhatsApp message
                const message = `New Order:\n\n` +
                               `Product: ${orderDetails.product}\n` +
                               `Price: ${orderDetails.price}\n` +
                               `Customer: ${orderDetails.name}\n` +
                               `Phone: ${orderDetails.phone}\n` +
                               `Address: ${orderDetails.address || 'Not specified'}`;
                
                // Open WhatsApp with order details
                window.open(`https://wa.me/2349025229337?text=${encodeURIComponent(message)}`, '_blank');
                
                orderModal.remove();
                alert('Order submitted successfully! Please check WhatsApp to confirm with Justice.');
            });
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

    // Temu-style Countdown Timer
    function updateCountdown() {
        let hours = 2;
        let minutes = 45;
        let seconds = 30;
        
        const countdown = setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            if (hours < 0) {
                clearInterval(countdown);
                document.querySelector('.deals-countdown').innerHTML = '<div class="sale-ended">SALE ENDED!</div>';
                return;
            }
            
            document.querySelector('.countdown-timer .number:nth-child(1)').textContent = hours.toString().padStart(2, '0');
            document.querySelector('.countdown-timer .number:nth-child(3)').textContent = minutes.toString().padStart(2, '0');
            document.querySelector('.countdown-timer .number:nth-child(5)').textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    // Cart Functionality
    let cartItems = [];

    function updateCartCount() {
        document.querySelector('.cart-count').textContent = cartItems.length;
    }

    // Add to Cart Buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('order-btn')) {
            const product = e.target.dataset.product;
            cartItems.push(product);
            updateCartCount();
            
            // Show added to cart animation
            e.target.textContent = 'Added! ✓';
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
            }, 2000);
        }
    });

    // Category Navigation
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initialize
    updateCountdown();
    updateCartCount();

    console.log('Justice\'s Business Website - Ready for Business!');
});
