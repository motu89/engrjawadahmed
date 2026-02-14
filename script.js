// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const whatsappFloat = document.querySelector('.whatsapp-float');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .education-card, .stat-card, .timeline-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .education-card, .stat-card, .timeline-content');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Progress bar animation for language section
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
};

// Trigger progress bar animation when in view
const checkProgressBars = () => {
    const languageSection = document.querySelector('.languages');
    if (languageSection) {
        const sectionPosition = languageSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            animateProgressBars();
            // Remove the event listener after animation
            window.removeEventListener('scroll', checkProgressBars);
        }
    }
};

window.addEventListener('scroll', checkProgressBars);

// WhatsApp button hover effect
if (whatsappFloat) {
    whatsappFloat.addEventListener('mouseenter', () => {
        whatsappFloat.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    whatsappFloat.addEventListener('mouseleave', () => {
        whatsappFloat.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Add typing effect to hero text
const heroText = document.querySelector('.hero-text h1');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typingEffect = () => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typingEffect, 500);
}

// Add particle effect to hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(0, 255, 136, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroSection.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { transform: translateY(-100px) translateX(20px); opacity: 1; }
        }
        .particle {
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
}

// Add scroll to top functionality
const createScrollToTop = () => {
    const scrollTop = document.createElement('div');
    scrollTop.className = 'scroll-top';
    scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTop.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #00ff88;
        color: #000000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
    `;
    
    document.body.appendChild(scrollTop);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTop.style.opacity = '1';
            scrollTop.style.transform = 'translateY(0)';
        } else {
            scrollTop.style.opacity = '0';
            scrollTop.style.transform = 'translateY(20px)';
        }
    });
    
    // Scroll to top on click
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollTop.addEventListener('mouseenter', () => {
        scrollTop.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    scrollTop.addEventListener('mouseleave', () => {
        scrollTop.style.transform = 'translateY(0) scale(1)';
    });
};

// Initialize scroll to top button
createScrollToTop();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: '';
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        border: 3px solid #1a1a1a;
        border-top: 3px solid #00ff88;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 10000;
        transform: translate(-50%, -50%);
    }
    
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyle);

// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .education-card, .stat-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for intersection observer animations
const observerStyle = document.createElement('style');
observerStyle.textContent = `
    .skill-category, .project-card, .education-card, .stat-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .skill-category.visible, .project-card.visible, .education-card.visible, .stat-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(observerStyle);