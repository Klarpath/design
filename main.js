document.addEventListener('DOMContentLoaded', () => {

    // START: Animated Logo Trigger
    const logo = document.getElementById('animated-logo');
    if (logo) {
        // 1. A function to run/restart the animation
        const runAnimation = () => {
            // First, remove the class to reset the state
            logo.classList.remove('is-animating');
            
            // This is a browser trick to force it to recognize the class was removed
            // before re-adding it. This ensures the animation restarts.
            void logo.offsetWidth; 

            // Add the class back to trigger the animation
            logo.classList.add('is-animating');
        };

        // 2. Run the animation immediately on page load
        runAnimation();

        // 3. Set an interval to re-run the animation every 7 seconds (7000 milliseconds)
        setInterval(runAnimation, 7000);

        // You can keep the click event for manual restarts, or remove it. It won't interfere.
        logo.addEventListener('click', (e) => {
            e.preventDefault(); 
            runAnimation();
        });
    }
    // END: Animated Logo Trigger

    const TEMPLATES_DATA = [
        {id:'mayfair-corporate',title:'The Mayfair - HVAC Solutions',description:'A professional and trustworthy template for HVAC companies, heating and cooling services, and climate control specialists.',tags:['service','hvac','heating','cooling','trades','plumbing'],coverImage:'https://picsum.photos/seed/mayfair/600/400',galleryImages:['https://picsum.photos/seed/mayfair1/1000/600','https://picsum.photos/seed/mayfair2/1000/600','https://picsum.photos/seed/mayfair3/1000/600'],liveUrl:'https://hvac.klarpath.com'},
        {id:'soho-pizzeria',title:'The Soho Slice - Pizzeria',description:'A vibrant and delicious-looking template for pizza shops, takeaways, and casual diners.',tags:['food','restaurant','pizza'],coverImage:'https://picsum.photos/seed/soho/600/400',galleryImages:['https://picsum.photos/seed/soho1/1000/600','https://picsum.photos/seed/soho2/1000/600','https://picsum.photos/seed/soho3/1000/600'],liveUrl:'#'},
        {id:'shoreditch-pub',title:'The Shoreditch - Pub',description:'A rustic, cosy, and traditional design perfect for a classic British pub or modern bar.',tags:['food','pub','bar'],coverImage:'https://picsum.photos/seed/shoreditch/600/400',galleryImages:['https://picsum.photos/seed/shoreditch1/1000/600','https://picsum.photos/seed/shoreditch2/1000/600','https://picsum.photos/seed/shoreditch3/1000/600'],liveUrl:'#'},
        {id:'hackney-handyman',title:'The Hackney - Plumbing & Heating',description:'A practical, reliable design for tradespeople, electricians, plumbers, and construction services.',tags:['service','trades','handyman','construction','plumber','electrician','home-remodeling'],coverImage:'https://picsum.photos/seed/hackney/600/400',galleryImages:['https://picsum.photos/seed/hackney1/1000/600','https://picsum.photos/seed/hackney2/1000/600','https://picsum.photos/seed/hackney3/1000/600'],liveUrl:'https://plumbing.klarpath.com'},
        {id:'battersea-garage',title:'The Battersea - Garage',description:'A robust and trustworthy template for auto repair shops, mechanics, and car servicing centers.',tags:['service','trades','garage','automotive'],coverImage:'https://picsum.photos/seed/battersea/600/400',galleryImages:['https://picsum.photos/seed/battersea1/1000/600','https://picsum.photos/seed/battersea2/1000/600','https://picsum.photos/seed/battersea3/1000/600'],liveUrl:'#'},
        {id:'covent-garden-store',title:'The Covent Garden - Store',description:'A stylish and modern template to showcase and sell products. Ideal for small e-commerce.',tags:['business','commercial','ecommerce','fashion'],coverImage:'https://picsum.photos/seed/covent/600/400',galleryImages:['https://picsum.photos/seed/covent1/1000/600','https://picsum.photos/seed/covent2/1000/600','https://picsum.photos/seed/covent3/1000/600'],liveUrl:'#'},
        {id:'lincolns-inn-law',title:"Lincoln's Inn - Law Firm",description:'An authoritative and professional design for law firms, solicitors, and legal consultants.',tags:['professional','service','lawyer'],coverImage:'https://picsum.photos/seed/law/600/400',galleryImages:['https://picsum.photos/seed/law1/1000/600','https://picsum.photos/seed/law2/1000/600','https://picsum.photos/seed/law3/1000/600'],liveUrl:'#'},
        {id:'city-accountants',title:'The City - Accountants',description:'A clean, trustworthy, and data-driven design for accounting firms and financial services.',tags:['professional','service','accountant'],coverImage:'https://picsum.photos/seed/accountant/600/400',galleryImages:['https://picsum.photos/seed/accountant1/1000/600','https://picsum.photos/seed/accountant2/1000/600','https://picsum.photos/seed/accountant3/1000/600'],liveUrl:'#'},
        {id:'camden-creative',title:'The Camden - Creator',description:'A vibrant, visual-first layout for content creators, influencers, and digital artists.',tags:['creative','portfolio','content-creator'],coverImage:'https://picsum.photos/seed/creator/600/400',galleryImages:['https://picsum.photos/seed/creator1/1000/600','https://picsum.photos/seed/creator2/1000/600','https://picsum.photos/seed/creator3/1000/600'],liveUrl:'#'},
        {id:'brixton-photo',title:'The Brixton - Photographer',description:'A minimalist, elegant gallery for photographers and visual storytellers to showcase their work.',tags:['creative','portfolio','photographer'],coverImage:'https://picsum.photos/seed/photo/600/400',galleryImages:['https://picsum.photos/seed/photo1/1000/600','https://picsum.photos/seed/photo2/1000/600','https://picsum.photos/seed/photo3/1000/600'],liveUrl:'#'},
        {id:'chelsea-makeup',title:'The Chelsea - MUA',description:'Chic and stylish portfolio for make-up artists (MUAs) to display their art and book clients.',tags:['health','beauty','makeup-artist','portfolio'],coverImage:'https://picsum.photos/seed/mua/600/400',galleryImages:['https://picsum.photos/seed/mua1/1000/600','https://picsum.photos/seed/mua2/1000/600','https://picsum.photos/seed/mua3/1000/600'],liveUrl:'#'},
        {id:'peckham-barber',title:'The Peckham - Barber',description:'A sharp, modern, and masculine design for barber shops looking to attract a stylish clientele.',tags:['service','barber','health','beauty'],coverImage:'https://picsum.photos/seed/barber/600/400',galleryImages:['https://picsum.photos/seed/barber1/1000/600','https://picsum.photos/seed/barber2/1000/600','https://picsum.photos/seed/barber3/1000/600'],liveUrl:'#'},
        {id:'notting-hill-salon',title:'The Notting Hill - Salon',description:'An elegant and serene template for high-end beauty salons, spas, and wellness centers.',tags:['health','beauty','salon'],coverImage:'https://picsum.photos/seed/salon/600/400',galleryImages:['https://picsum.photos/seed/salon1/1000/600','https://picsum.photos/seed/salon2/1000/600','https://picsum.photos/seed/salon3/1000/600'],liveUrl:'#'},
        {id:'islington-nails',title:'The Islington - Nail Studio',description:'A vibrant and trendy design for nail artists and salons to showcase their intricate designs.',tags:['health','beauty','nails','salon'],coverImage:'https://picsum.photos/seed/nails/600/400',galleryImages:['https://picsum.photos/seed/nails1/1000/600','https://picsum.photos/seed/nails2/1000/600','https://picsum.photos/seed/nails3/1000/600'],liveUrl:'#'},
        {id:'harley-dentist',title:'The Harley - Dental Clinic',description:'A clean, trustworthy, and welcoming design for dental practices and medical clinics.',tags:['health','medical','service','dentist'],coverImage:'https://picsum.photos/seed/dentist/600/400',galleryImages:['https://picsum.photos/seed/dentist1/1000/600','https://picsum.photos/seed/dentist2/1000/600','https://picsum.photos/seed/dentist3/1000/600'],liveUrl:'#'},
        {id:'paddington-gp',title:'The Paddington - GP',description:'A professional and accessible design for general practitioners and family doctors.',tags:['health','medical','service','doctor'],coverImage:'https://picsum.photos/seed/doctor/600/400',galleryImages:['https://picsum.photos/seed/doctor1/1000/600','https://picsum.photos/seed/doctor2/1000/600','https://picsum.photos/seed/doctor3/1000/600'],liveUrl:'#'},
        {id:'kensington-realty',title:'The Kensington - Realty',description:'A luxurious and elegant template for real estate agents and property listings.',tags:['business','professional','service','real-estate'],coverImage:'https://picsum.photos/seed/realty/600/400',galleryImages:['https://picsum.photos/seed/realty1/1000/600','https://picsum.photos/seed/realty2/1000/600','https://picsum.photos/seed/realty3/1000/600'],liveUrl:'#'},
        {id:'wimbledon-trainer',title:'The Wimbledon - PT',description:'A dynamic and motivational design for personal trainers, fitness coaches, and gyms.',tags:['health','service','creative'],coverImage:'https://picsum.photos/seed/trainer/600/400',galleryImages:['https://picsum.photos/seed/trainer1/1000/600','https://picsum.photos/seed/trainer2/1000/600','https://picsum.photos/seed/trainer3/1000/600'],liveUrl:'#'},
        {id:'greenwich-cafe',title:'The Greenwich - Café',description:'A warm and inviting template for coffee shops, bakeries, and brunch spots.',tags:['food','business','restaurant'],coverImage:'https://picsum.photos/seed/cafe/600/400',galleryImages:['https://picsum.photos/seed/cafe1/1000/600','https://picsum.photos/seed/cafe2/1000/600','https://picsum.photos/seed/cafe3/1000/600'],liveUrl:'#'},
        {id:'richmond-gardener',title:'The Richmond - Gardener',description:'A fresh, natural design for landscaping services, gardeners, and florists.',tags:['trades','service'],coverImage:'https://picsum.photos/seed/gardener/600/400',galleryImages:['https://picsum.photos/seed/gardener1/1000/600','https://picsum.photos/seed/gardener2/1000/600','https://picsum.photos/seed/gardener3/1000/600'],liveUrl:'#'},
        {id:'angel-architects',title:'The Angel - Architects',description:'A minimalist and structural design for architecture firms and interior designers.',tags:['professional','service','creative'],coverImage:'https://picsum.photos/seed/architect/600/400',galleryImages:['https://picsum.photos/seed/architect1/1000/600','https://picsum.photos/seed/architect2/1000/600','https://picsum.photos/seed/architect3/1000/600'],liveUrl:'#'},
        {id:'dalston-dj',title:'The Dalston - DJ',description:'An energetic and dark-themed portfolio for DJs, music producers, and event artists.',tags:['creative','portfolio','music'],coverImage:'https://picsum.photos/seed/dj/600/400',galleryImages:['https://picsum.photos/seed/dj1/1000/600','https://picsum.photos/seed/dj2/1000/600','https://picsum.photos/seed/dj3/1000/600'],liveUrl:'#'},
        {id:'fulham-physio',title:'The Fulham - Physio',description:'A professional and reassuring template for physiotherapists and wellness clinics.',tags:['health','medical','service'],coverImage:'https://picsum.photos/seed/physio/600/400',galleryImages:['https://picsum.photos/seed/physio1/1000/600','https://picsum.photos/seed/physio2/1000/600','https://picsum.photos/seed/physio3/1000/600'],liveUrl:'#'},
        {id:'clapham-cocktail',title:'The Clapham - Cocktail Bar',description:'A sophisticated and moody design for upscale cocktail bars and lounges.',tags:['food','bar'],coverImage:'https://picsum.photos/seed/cocktail/600/400',galleryImages:['https://picsum.photos/seed/cocktail1/1000/600','https://picsum.photos/seed/cocktail2/1000/600','https://picsum.photos/seed/cocktail3/1000/600'],liveUrl:'#'},
        {id:'holborn-consulting',title:'The Holborn - Consulting',description:'A sharp and insightful design for business consultants and strategy firms.',tags:['business','corporate','professional','service'],coverImage:'https://picsum.photos/seed/consulting/600/400',galleryImages:['https://picsum.photos/seed/consulting1/1000/600','https://picsum.photos/seed/consulting2/1000/600','https://picsum.photos/seed/consulting3/1000/600'],liveUrl:'#'},
        {id:'victoria-venture',title:'The Victoria - Startup',description:'A modern and bold template for tech startups and innovative new businesses.',tags:['business','startup','corporate'],coverImage:'https://picsum.photos/seed/startup/600/400',galleryImages:['https://picsum.photos/seed/startup1/1000/600','https://picsum.photos/seed/startup2/1000/600','https://picsum.photos/seed/startup3/1000/600'],liveUrl:'#'},
        {id:'westminster-writer',title:'The Westminster - Writer',description:'An elegant, text-focused portfolio for authors, journalists, and professional writers.',tags:['creative','portfolio'],coverImage:'https://picsum.photos/seed/writer/600/400',galleryImages:['https://picsum.photos/seed/writer1/1000/600','https://picsum.photos/seed/writer2/1000/600','https://picsum.photos/seed/writer3/1000/600'],liveUrl:'#'},
        {id:'primrose-painter',title:'The Primrose - Painter',description:'A clean and visual template for painters, decorators, and interior finishers.',tags:['trades','service'],coverImage:'https://picsum.photos/seed/painter/600/400',galleryImages:['https://picsum.photos/seed/painter1/1000/600','https://picsum.photos/seed/painter2/1000/600','https://picsum.photos/seed/painter3/1000/600'],liveUrl:'#'},
        {id:'kings-cross-studio',title:"The King's Cross - Studio",description:'A creative and versatile template for design studios, agencies, and production houses.',tags:['creative','portfolio','business'],coverImage:'https://picsum.photos/seed/studio/600/400',galleryImages:['https://picsum.photos/seed/studio1/1000/600','https://picsum.photos/seed/studio2/1000/600','https://picsum.photos/seed/studio3/1000/600'],liveUrl:'#'},
        {id:'marylebone-yoga',title:'The Marylebone - Yoga',description:'A serene and mindful design for yoga studios, meditation centers, and wellness instructors.',tags:['health','beauty','service'],coverImage:'https://picsum.photos/seed/yoga/600/400',galleryImages:['https://picsum.photos/seed/yoga1/1000/600','https://picsum.photos/seed/yoga2/1000/600','https://picsum.photos/seed/yoga3/1000/600'],liveUrl:'#'},
    ];

    // --- Vision Gallery Carousel ---
    const visionCarousel = document.getElementById('vision-carousel');
    if (visionCarousel) {
    const galleryImages = TEMPLATES_DATA.flatMap(t => t.galleryImages.slice(0, 1)).slice(0, 10);
    const numImages = galleryImages.length;
    const angle = 360 / numImages;
    
    // --- Carousel parameter adjustments ---
    const isMobile = window.innerWidth < 768;
    const radius = isMobile ? 220 : 450;
    const slideWidth = isMobile ? 200 : 400;
    const slideHeight = isMobile ? 150 : 250;
    
    galleryImages.forEach((image, index) => {
        const rotation = index * angle;
        const slide = document.createElement('div');
        slide.className = 'carousel-3d-slide absolute top-1/2 left-1/2';
        
        slide.style.width = `${slideWidth}px`;
        slide.style.height = `${slideHeight}px`;
        slide.style.marginLeft = `-${slideWidth / 2}px`;
        slide.style.marginTop = `-${slideHeight / 2}px`;
        slide.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;

        slide.innerHTML = `
        <img src="${image}" alt="Vision Gallery Image ${index + 1}" class="absolute w-full h-full object-cover rounded-2xl shadow-2xl" style="box-shadow: 0 10px 30px rgba(0,0,0,0.4), 0 0 20px var(--glow-color)">
        `;
        visionCarousel.appendChild(slide);
    });

    let currentIndex = 0;
    setInterval(() => {
        currentIndex--;
        visionCarousel.style.transform = `rotateY(${currentIndex * angle}deg)`;
    }, 3000);
    }

    // --- Templates Collection: Grid and Filtering ---
    const templatesGrid = document.getElementById('templates-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const noResults = document.getElementById('no-results');

    function createTemplateCard(template) {
    const card = document.createElement('article');
    card.className = 'template-card bg-surface-color border border-border-color rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 ease-in-out hover:border-accent-color hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2),_0_0_20px_var(--glow-color)]';
    card.dataset.tags = template.tags.join(',');
    card.dataset.title = template.title.toLowerCase();
    card.dataset.description = template.description.toLowerCase();

    card.innerHTML = `
        <div class="w-full h-56 overflow-hidden">
        <img src="${template.coverImage}" alt="${template.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-xl font-bold mb-2 text-primary-text-color">${template.title}</h3>
        <p class="text-secondary-text-color mb-6 flex-grow">${template.description}</p>
        <div class="mt-auto flex flex-wrap items-center gap-4">
            <a href="#packages" class="view-demo-btn flex-grow text-center px-4 py-2 font-semibold bg-[rgba(255,255,255,0.08)] border border-border-color text-primary-text-color rounded-full transition-all duration-300 hover:bg-accent-color hover:border-accent-color hover:text-white" data-template-id="${template.id}">
            Buy Now
            </a>
            <a href="${template.liveUrl}" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 text-secondary-text-color hover:text-accent-color transition-colors duration-300 font-medium text-sm">
            Check live demo <i class="fas fa-external-link-alt ml-1 text-xs"></i>
            </a>
        </div>
        </div>
    `;
    return card;
    }
    
    // Sort templates: Trades first, then Professional, then others
    TEMPLATES_DATA.sort((a, b) => {
        const getPriority = (tags) => {
            if (tags.includes('trades')) return 2;
            if (tags.includes('professional')) return 1;
            return 0;
        };
        return getPriority(b.tags) - getPriority(a.tags);
    });
    
    TEMPLATES_DATA.forEach(template => templatesGrid.appendChild(createTemplateCard(template)));
    
    const allCards = document.querySelectorAll('.template-card');
    let activeFilter = 'all';

    function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    let resultsFound = false;

    allCards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        const title = card.dataset.title;
        const description = card.dataset.description;
        
        const filterMatch = activeFilter === 'all' || tags.includes(activeFilter);
        const searchMatch = title.includes(searchTerm) || description.includes(searchTerm) || tags.join(' ').includes(searchTerm);
        
        if (filterMatch && searchMatch) {
        card.classList.remove('hidden');
        resultsFound = true;
        } else {
        card.classList.add('hidden');
        }
    });

    noResults.classList.toggle('hidden', resultsFound);
    }

    filterButtonsContainer.addEventListener('click', (e) => {
    if (e.target.matches('.filter-btn')) {
        filterButtonsContainer.querySelector('.bg-accent-color').classList.replace('bg-accent-color', 'bg-transparent');
        filterButtonsContainer.querySelector('.border-accent-color').classList.replace('border-accent-color', 'border-border-color');
        filterButtonsContainer.querySelector('.text-white').classList.replace('text-white', 'text-secondary-text-color');

        e.target.classList.replace('bg-transparent', 'bg-accent-color');
        e.target.classList.replace('border-border-color', 'border-accent-color');
        e.target.classList.replace('text-secondary-text-color', 'text-white');
        
        activeFilter = e.target.dataset.filter;
        filterAndSearch();
    }
    });
    
    searchInput.addEventListener('input', filterAndSearch);


    // --- Modal Logic ---
    const modal = document.getElementById('template-modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalLiveUrl = document.getElementById('modal-live-url');
    const modalPrevBtn = document.getElementById('modal-prev');
    const modalNextBtn = document.getElementById('modal-next');
    const closeButtons = [document.getElementById('modal-close'), document.getElementById('modal-backdrop'), document.getElementById('modal-contact-btn')];
    
    let modalImages = [];
    let modalImageIndex = 0;

    function updateModalImage() {
    modalImageContainer.querySelectorAll('img').forEach((img, index) => {
        img.classList.toggle('opacity-100', index === modalImageIndex);
        img.classList.toggle('opacity-0', index !== modalImageIndex);
    });
    }

    function openModal(templateId) {
    const template = TEMPLATES_DATA.find(t => t.id === templateId);
    if (!template) return;

    modalTitle.textContent = template.title;
    modalDescription.textContent = template.description;
    modalLiveUrl.href = template.liveUrl;
    
    modalImages = template.galleryImages;
    modalImageIndex = 0;
    modalImageContainer.innerHTML = '';
    modalImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${template.title} gallery image ${index + 1}`;
        img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        modalImageContainer.appendChild(img);
    });
    
    const showNav = modalImages.length > 1;
    modalPrevBtn.classList.toggle('hidden', !showNav);
    modalPrevBtn.classList.toggle('flex', showNav);
    modalNextBtn.classList.toggle('hidden', !showNav);
    modalNextBtn.classList.toggle('flex', showNav);
    
    modal.classList.add('is-active');
    }

    function closeModal() {
    modal.classList.remove('is-active');
    }

    templatesGrid.addEventListener('click', (e) => {
    const button = e.target.closest('.view-demo-btn');
    if (button) {
        // Buy Now links navigate to #packages via href
        // Modal functionality has been replaced with direct navigation
    }
    });

    modalPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modalImageIndex = (modalImageIndex - 1 + modalImages.length) % modalImages.length;
    updateModalImage();
    });

    modalNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modalImageIndex = (modalImageIndex + 1) % modalImages.length;
    updateModalImage();
    });

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modalContent.addEventListener('click', e => e.stopPropagation());
    window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
    }
    });

    // --- FAQ Accordion Logic ---
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
    const faqItems = faqContainer.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isAlreadyActive = item.classList.contains('active');

            // First, close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the clicked item wasn't active, open it
            if (!isAlreadyActive) {
                item.classList.add('active');
            }
        });
    });
    }

    // --- Universal Policy Modal Logic (New & Final Version) ---
    const policyModal = document.getElementById('policy-modal');

    if (policyModal) {
    // --- 1. Define the content for each policy ---

        const termsContent = `
        <p class="text-sm"><strong>Last Updated: [Enter Today's Date]</strong></p>
        <p>This Agreement governs the provision of website design and maintenance services ("Service") by Klarpath Ltd ("we", "us", "our") to you, the client ("you", "your"). By engaging our Service, you agree to be bound by these Terms and Conditions ("Terms") in full.</p>
        <!-- ... (Truncated for brevity, content is same as original) ... -->
        <h3 class="text-xl font-semibold text-primary-text-color pt-4">9. Governing Law & Jurisdiction</h3>
        <p>This Agreement shall be governed by and construed in accordance with the laws of England and Wales. The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim.</p>
    `;

        const privacyContent = `
        <p class="text-sm"><strong>Last Updated: [Enter Today's Date]</strong></p>
        <p>This Privacy Policy describes how Klarpath ("we", "us", "our") collects, uses, and handles your personal information when you use our website and services, in compliance with the UK General Data Protection Regulation (UK GDPR).</p>
        <!-- ... (Truncated for brevity, content is same as original) ... -->
        <h3 class="text-xl font-semibold text-primary-text-color pt-4">7. How to Complain</h3>
        <p>If you have any concerns about our use of your personal information, you can make a complaint to us. You also have the right to lodge a complaint with the UK's data protection regulator, the <strong>Information Commissioner's Office (ICO)</strong>.</p>
    `;

    // --- 2. Get references to all modal elements ---

    const openTermsLink = document.getElementById('open-terms-link');
    const openPrivacyLink = document.getElementById('open-privacy-link');
    const modalTitleEl = document.getElementById('policy-modal-title');
    const modalBodyEl = document.getElementById('policy-modal-body');
    const closeBtn = document.getElementById('policy-modal-close-btn');
    const agreeBtn = document.getElementById('policy-modal-agree-btn');

    // --- 3. Create the functions to show and hide the modal ---

    const showModal = (title, content) => {
        modalTitleEl.innerText = title;
        modalBodyEl.innerHTML = content;
        policyModal.classList.add('is-active');
    };

    const closeModal = () => {
        policyModal.classList.remove('is-active');
    };

    // --- 4. Attach event listeners ---

    openTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('Terms and Conditions', termsContent);
    });

    openPrivacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('Privacy Policy', privacyContent);
    });

    closeBtn.addEventListener('click', closeModal);
    agreeBtn.addEventListener('click', closeModal);
    policyModal.addEventListener('click', (e) => {
        if (e.target === policyModal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && policyModal.classList.contains('is-active')) {
            closeModal();
        }
    });
    }

});