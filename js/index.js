// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (would need to be expanded for a real implementation)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-btn');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const headerActions = document.querySelector('.header-actions');
    if (window.innerWidth <= 768) {
        headerActions.prepend(mobileMenuButton);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit, .ingredient-item, .guarantee-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.benefit, .ingredient-item, .guarantee-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    // Flavor selection
    const flavorOptions = document.querySelectorAll('.flavor-option input');
    const flavorImages = document.querySelectorAll('.flavor-image');
    
    flavorOptions.forEach(option => {
        option.addEventListener('change', function() {
            const selectedFlavor = this.value;
            
            // Update active flavor image
            flavorImages.forEach(image => {
                if (image.dataset.flavor === selectedFlavor) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        });
    });
    
    // Gallery navigation
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainProductImg = document.getElementById('main-product-img');
    const galleryDots = document.querySelectorAll('.gallery-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const maxIndex = thumbnails.length - 1;
    
    // Update gallery display
    function updateGallery(index) {
        // Update thumbnails
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        // Update dots
        galleryDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Update main image (in a real implementation, this would use the actual image src)
        // mainProductImg.src = thumbnails[index].querySelector('img').src;
        
        currentIndex = index;
    }
    
    // Thumbnail click
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateGallery(index);
        });
    });
    
    // Dot click
    galleryDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateGallery(index);
        });
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = maxIndex;
        updateGallery(newIndex);
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex > maxIndex) newIndex = 0;
        updateGallery(newIndex);
    });
    
    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    addToCartBtn.addEventListener('click', function() {
        // Get selected flavor
        const selectedFlavor = document.querySelector('.flavor-option input:checked').value;
        
        // Get selected subscription
        const selectedSubscription = document.querySelector('.subscription-option input:checked').value;
        
        // In a real implementation, this would add the product to the cart
        alert(`Added to cart: ${selectedFlavor} flavor with ${selectedSubscription} subscription`);
    });
    
    // Play video button
    const playBtn = document.querySelector('.play-btn');
    
    playBtn.addEventListener('click', function() {
        // In a real implementation, this would play the video
        alert('Video would play here');
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .ritual-step, .subscription-option');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.benefit-card, .ritual-step, .subscription-option');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.arrow-prev');
    const nextButton = document.querySelector('.arrow-next');
    
    let currentSlide = 0;
    const slidesPerView = window.innerWidth > 768 ? 3 : 1;
    const totalSlides = Math.ceil(testimonials.length / slidesPerView);
    
    // Initialize slider
    updateSlider();
    
    // Update slider based on current slide
    function updateSlider() {
        // Update testimonials visibility
        testimonials.forEach((testimonial, index) => {
            if (window.innerWidth > 768) {
                // Desktop view - show 3 at a time
                if (index >= currentSlide * 3 && index < (currentSlide * 3) + 3) {
                    testimonial.style.display = 'block';
                } else {
                    testimonial.style.display = 'none';
                }
            } else {
                // Mobile view - show 1 at a time
                testimonial.style.display = index === currentSlide ? 'block' : 'none';
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Next slide
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    
    // Previous slide
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Play button for video
    const playButton = document.querySelector('.play-button');
    const founderVideo = document.querySelector('.founders-video');
    
    if (playButton) {
        playButton.addEventListener('click', () => {
            // In a real implementation, you would replace the image with a video
            // For this demo, we'll just change the appearance
            playButton.style.display = 'none';
            
            // Create a message indicating video would play
            const videoMessage = document.createElement('div');
            videoMessage.textContent = 'Video playing...';
            videoMessage.style.position = 'absolute';
            videoMessage.style.top = '50%';
            videoMessage.style.left = '50%';
            videoMessage.style.transform = 'translate(-50%, -50%)';
            videoMessage.style.color = 'white';
            videoMessage.style.fontWeight = 'bold';
            
            founderVideo.appendChild(videoMessage);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    const footerForm = document.querySelector('.footer-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Email validation
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        updateSlider();
    });
});