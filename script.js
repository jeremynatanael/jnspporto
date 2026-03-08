// Sticky Navigation & Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Offset untuk navbar
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Animation Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .service-box').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Mobile Menu Toggle (Optional logic)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

document.querySelectorAll('.card').forEach(card => {
    const video = card.querySelector('video.hover-video');
    
    if (video) {
        card.addEventListener('mouseenter', () => {
            video.play();
        });
        
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reset video ke awal
        });
    }
});

document.querySelectorAll('.card-media-slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    
    let currentIndex = 0;

    const updateSlider = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah klik link saat menekan tombol
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
});