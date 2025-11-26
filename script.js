// ===============================
// Page Load Animations (Anime.js v4)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    // Animate main title with elastic bounce
    animate('#inicio .title', {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 3000,
        ease: 'outElastic(1, .8)'
    });

    // Animate lead text with upward motion
    animate('#inicio .lead', {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: 500,
        duration: 900,
        ease: 'outQuad'
    });

    // Animate couple names with special effect
    animate('#inicio .couple', {
        scale: [0.9, 1],
        opacity: [0, 1],
        delay: 800,
        duration: 1200,
        ease: 'outBack'
    });

    // Animate date banner with elastic effect
    animate('.date-banner .day', {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1200,
        ease: 'outElastic(1, .8)',
        delay: 500
    });

    // Animate date lines
    animate('.date-banner .line', {
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 800,
        delay: 1000,
        ease: 'outQuart'
    });

    // Animate month and time text
    animate('.date-banner .month, .date-banner .time', {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 600,
        delay: 1200,
        ease: 'outCubic'
    });
});

// ===============================
// RSVP Form Handling (Anime.js v4)
// ===============================
document.getElementById('sendRsvp').addEventListener('click', () => {
    const msg = document.getElementById('rsvpMsg');
    console.log('✉️ RSVP Confirmed - Opening WhatsApp');
    
    // Open WhatsApp link
    window.open('https://wa.me/51956347175?text=Hola,%20quiero%20confirmar%20mi%20asistencia', '_blank');
    
});

// ===============================
// Bank Info Toggle Functionality
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBankInfo');
    const bankInfo = document.getElementById('bankInfo');
    
    if (toggleBtn && bankInfo) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = bankInfo.classList.contains('hidden');
            
            if (isHidden) {
                // Show bank info
                bankInfo.classList.remove('hidden');
                toggleBtn.textContent = 'Ocultar detalles bancarios';
                
                // Animate in with Anime.js
                animate(bankInfo, {
                    opacity: [0, 1],
                    maxHeight: ['0px', '120px'],
                    paddingTop: ['0px', '1rem'],
                    paddingBottom: ['0px', '1rem'],
                    marginTop: ['0px', '1rem'],
                    duration: 400,
                    ease: 'outCubic'
                });
            } else {
                // Hide bank info
                animate(bankInfo, {
                    opacity: [1, 0],
                    maxHeight: ['120px', '0px'],
                    paddingTop: ['1rem', '0px'],
                    paddingBottom: ['1rem', '0px'],
                    marginTop: ['1rem', '0px'],
                    duration: 300,
                    ease: 'outCubic',
                    complete: () => {
                        bankInfo.classList.add('hidden');
                        toggleBtn.textContent = 'Pero...';
                    }
                });
            }
        });
    }
});

// ===============================
// TikTok-Style Scroll Enhancement
// ===============================
// Native CSS scroll-snap handles the snapping, 
// but we can add touch/swipe enhancements here if needed

// Optional: Add keyboard navigation for desktop users
document.addEventListener('keydown', (e) => {
    const sections = [...document.querySelectorAll('header, section, footer')];
    const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
    });
    
    if (!currentSection) return;
    
    const currentIndex = sections.indexOf(currentSection);
    
    // Arrow Down or Space - go to next section
    if ((e.key === 'ArrowDown' || e.key === ' ') && currentIndex < sections.length - 1) {
        e.preventDefault();
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
    
    // Arrow Up - go to previous section
    if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

// ===============================
// Section Tracking with Console Logging
// ===============================
let currentSectionIndex = -1;

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id || entry.target.tagName.toLowerCase();
            const sectionName = getSectionName(sectionId);
            
            // Only log if it's a different section
            const sections = [...document.querySelectorAll('section, header, footer')];
            const newIndex = sections.indexOf(entry.target);
            
            if (newIndex !== currentSectionIndex) {
                currentSectionIndex = newIndex;
                console.log(`📍 Now viewing: ${sectionName} (Section ${newIndex + 1}/${sections.length})`);
                
                // Reset animations for previous and next sections
                resetAdjacentSections(sections, newIndex);
                
                // Trigger section-specific animations
                triggerSectionAnimations(sectionId);
            }
        }
    });
}, {
    threshold: [0.1, 0.5, 0.7],
    rootMargin: '-20% 0px -20% 0px' // Only trigger when section is well within view
});

// ===============================
// Section-Specific Animation Triggers
// ===============================
function triggerSectionAnimations(sectionId) {
    
    switch(sectionId) {
        case 'inicio':
            console.log('🎭 Triggering inicio animations');
            animateInicioElements();
            break;
            
        case 'countdown':
            console.log('⏰ Triggering countdown animations');
            animateCountdownElements();
            break;
            
        case 'timeline':
            console.log('📅 Triggering timeline animations');
            animateTimeline();
            break;
            
        case 'detalles':
            console.log('📋 Triggering detalles animations');
            animateDetallesElements();
            break;
            
        case 'ubicacion':
            console.log('📍 Triggering ubicacion animations');
            animateUbicacionElements();
            break;
            
        case 'rsvp':
            console.log('✉️ Triggering RSVP animations');
            animateRSVPElements();
            break;
            
        case 'footer':
            console.log('👥 Triggering footer animations');
            animateFooterElements();
            break;
            
        default:
            console.log(`❓ No specific animation for section: ${sectionId}`);
    }
}

// ===============================
// Individual Section Animation Functions
// ===============================

function animateInicioElements() {
    // Animate section title
    animate('#inicio .title', {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        ease: 'outQuad'
    });
    
    // Animate leads with delay
    animate('#inicio .lead', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(200),
        duration: 800,
        ease: 'outCubic'
    });
}

function animateCountdownElements() {
    // Animate countdown title
    animate('.countdown-title', {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        ease: 'outBack'
    });
    
    // Animate timer boxes
    animate('.time-box', {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(100),
        duration: 600,
        ease: 'outQuart'
    });
    
    // Animate celebrate text
    animate('.celebrate', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 800,
        duration: 600,
        ease: 'outCubic'
    });
}

function animateDetallesElements() {
    animate('#detalles .title', {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        ease: 'outQuad'
    });
    
    animate('#detalles .lead', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 300,
        duration: 600,
        ease: 'outCubic'
    });
}

function animateUbicacionElements() {
    animate('#ubicacion .title', {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        ease: 'outQuad'
    });
    
    animate('#ubicacion .lead', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(150),
        duration: 600,
        ease: 'outCubic'
    });
    
    animate('.map-container', {
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: 500,
        duration: 800,
        ease: 'outQuart'
    });
    
    animate('.map-link', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 800,
        duration: 600,
        ease: 'outCubic'
    });
}

function animateRSVPElements() {
    animate('#rsvp .title', {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        ease: 'outQuad'
    });
    
    animate('#rsvpForm', {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: 300,
        duration: 800,
        ease: 'outQuart'
    });
}

function animateFooterElements() {
    animate('footer small', {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        ease: 'outCubic'
    });
}

// Helper function to get readable section names
function getSectionName(sectionId) {
    const sectionNames = {
        'inicio': '💒 Inicio (Welcome)',
        'countdown': '⏰ Cuenta Regresiva (Countdown)',
        'timeline': '📅 Cronograma (Timeline)',
        'detalles': '📋 Detalles (Details)',
        'ubicacion': '📍 Ubicación (Location)',
        'rsvp': '✉️ RSVP (Confirmación)',
        'footer': '👥 Footer'
    };
    
    return sectionNames[sectionId] || `📄 ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
}

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const allSections = document.querySelectorAll('section, header, footer');
    
    // Pre-setup all animations to be ready
    prepareAllAnimations();
    
    allSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    console.log('🎉 Wedding Invitation Loaded - Section tracking enabled');
    console.log(`📊 Total sections: ${allSections.length}`);
    console.log('🎬 All animations pre-loaded and ready');
});

// ===============================
// Animation Preparation System
// ===============================
function prepareAllAnimations() {
    console.log('🎬 Preparing all section animations...');
    
    // Set all elements to their initial animation states
    setupInitialStates();
    
    console.log('✅ All animations prepared and ready to trigger');
}

function resetAdjacentSections(sections, currentIndex) {
    // Reset previous section (if exists)
    if (currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        const prevSectionId = prevSection.id || prevSection.tagName.toLowerCase();
        setupInitialStatesForSection(prevSectionId);
        console.log(`🔄 Reset animations for previous section: ${prevSectionId}`);
    }
    
    // Reset next section (if exists)
    if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        const nextSectionId = nextSection.id || nextSection.tagName.toLowerCase();
        setupInitialStatesForSection(nextSectionId);
        console.log(`🔄 Reset animations for next section: ${nextSectionId}`);
    }
}

function setupInitialStatesForSection(sectionId) {
    switch(sectionId) {
        case 'inicio':
            // Inicio elements are handled by page load animations
            break;
            
        case 'countdown':
            const countdownTitle = document.querySelector('.countdown-title');
            const timeBoxes = document.querySelectorAll('.time-box');
            const celebrate = document.querySelector('.celebrate');
            
            if (countdownTitle) {
                countdownTitle.style.opacity = '0';
                countdownTitle.style.transform = 'scale(0.9)';
            }
            timeBoxes.forEach(box => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(40px)';
            });
            if (celebrate) {
                celebrate.style.opacity = '0';
                celebrate.style.transform = 'translateY(20px)';
            }
            break;
            
        case 'timeline':
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(40px)';
            });
            break;
            
        case 'detalles':
            const detallesTitle = document.querySelector('#detalles .title');
            const detallesLeads = document.querySelectorAll('#detalles .lead');
            
            if (detallesTitle) {
                detallesTitle.style.opacity = '0';
                detallesTitle.style.transform = 'translateY(30px)';
            }
            detallesLeads.forEach(lead => {
                lead.style.opacity = '0';
                lead.style.transform = 'translateY(20px)';
            });
            break;
            
        case 'ubicacion':
            const ubicacionTitle = document.querySelector('#ubicacion .title');
            const ubicacionLeads = document.querySelectorAll('#ubicacion .lead');
            const mapContainer = document.querySelector('.map-container');
            const mapLink = document.querySelector('.map-link');
            
            if (ubicacionTitle) {
                ubicacionTitle.style.opacity = '0';
                ubicacionTitle.style.transform = 'translateY(30px)';
            }
            ubicacionLeads.forEach(lead => {
                lead.style.opacity = '0';
                lead.style.transform = 'translateY(20px)';
            });
            if (mapContainer) {
                mapContainer.style.opacity = '0';
                mapContainer.style.transform = 'scale(0.95)';
            }
            if (mapLink) {
                mapLink.style.opacity = '0';
                mapLink.style.transform = 'translateY(20px)';
            }
            break;
            
        case 'rsvp':
            const rsvpTitle = document.querySelector('#rsvp .title');
            const rsvpForm = document.querySelector('#rsvpForm');
            
            if (rsvpTitle) {
                rsvpTitle.style.opacity = '0';
                rsvpTitle.style.transform = 'translateY(30px)';
            }
            if (rsvpForm) {
                rsvpForm.style.opacity = '0';
                rsvpForm.style.transform = 'translateY(40px)';
            }
            break;
            
        case 'footer':
            const footerSmall = document.querySelector('footer small');
            if (footerSmall) {
                footerSmall.style.opacity = '0';
                footerSmall.style.transform = 'translateY(20px)';
            }
            break;
    }
}

function setupInitialStates() {
    // Setup initial states for all sections except inicio (handled by page load)
    const sections = ['countdown', 'timeline', 'detalles', 'ubicacion', 'rsvp', 'footer'];
    sections.forEach(sectionId => {
        setupInitialStatesForSection(sectionId);
    });
    
    console.log('🎯 Initial animation states set for all elements');
}

// Countdown Timer
const targetDate = new Date('December 12, 2025 15:00:00').getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};
setInterval(updateCountdown, 1000);
updateCountdown();

function animateTimeline() {
    // Always use Anime.js for consistent animations across all devices
    animate('.timeline-item', {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(200),
        duration: 800,
        ease: 'outQuart'
    });
}

// ===============================
// Mobile Performance Optimizations
// ===============================

// Force timeline visibility on mobile if animations fail
if (window.innerWidth <= 480) {
    setTimeout(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            if (window.getComputedStyle(item).opacity === '0') {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.visibility = 'visible';
            }
        });
    }, 3000); // Fallback after 3 seconds if animations don't trigger
}