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
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });

                // If the clicked item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                    if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    // --- Universal Policy Modal Logic (New & Final Version) ---
    const policyModal = document.getElementById('policy-modal');

    if (policyModal) {
    // --- 1. Define the content for each policy ---

        const termsContent = `
        <h1 class="text-2xl font-bold text-primary-text-color mb-6">Terms & Conditions</h1>
        <p class="text-sm mb-8">Last Updated: January 24, 2026</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">1. Acceptance of Terms</h3>
        <p class="mb-4">By accessing and using the KlarPath website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">2. Service Description</h3>
        <p class="mb-4">KlarPath provides digital marketing services including SEO, paid media management, content strategy, web design, and data analytics. All services are described in our service packages and are subject to the specific terms of your signed service agreement.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">3. Pricing & Payment</h3>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Growth Starter Plan (£150/month):</strong> Template website, chatbot, calendar booking, review automation. No setup fee.</li>
            <li><strong>Custom Scale Plan (£300/month + £4,000-£6,000 setup):</strong> Custom website, all AI services, dedicated account manager.</li>
            <li>Monthly billing begins on the start date specified in your agreement.</li>
            <li>Setup fees are non-refundable once service implementation begins.</li>
            <li>We accept bank transfer and credit card payments.</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">4. Service Timeline & Results</h3>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Digital marketing results typically appear within 4-12 weeks depending on service and market conditions.</li>
            <li>SEO results are not guaranteed but are based on best practices and current algorithm standards.</li>
            <li>We provide weekly reporting on all metrics and KPIs relevant to your campaigns.</li>
            <li>Results depend on market conditions, competition, and implementation of our recommendations.</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">5. Client Responsibilities</h3>
        <p class="mb-4">The Client agrees to:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Provide timely feedback and content as requested</li>
            <li>Maintain accurate business information (address, phone, business hours)</li>
            <li>Grant access to necessary accounts (Google Analytics, Google Search Console, ad platforms)</li>
            <li>Maintain current business licensing and comply with local regulations</li>
            <li>Promptly report any issues or concerns with service delivery</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">6. Cancellation & Refund Policy</h3>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Either party may cancel with 30 days written notice.</li>
            <li>Setup fees are non-refundable.</li>
            <li>Monthly service fees are non-refundable except in cases of service failure or non-performance.</li>
            <li>Early termination may result in loss of accumulated optimization benefits.</li>
            <li>Upon cancellation, all accounts and assets created remain the property of the Client.</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">7. Intellectual Property</h3>
        <p class="mb-4">The Client retains ownership of all content, data, and assets created during the engagement. KlarPath retains ownership of our methodologies, processes, and proprietary tools. The Client grants KlarPath the right to reference the engagement as a case study (with permission).</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">8. Limitations of Liability</h3>
        <p class="mb-4">KlarPath is not liable for indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the fees paid in the preceding 12 months. We are not responsible for third-party platform changes (Google algorithm updates, ad platform policy changes, etc.) that impact results.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">9. Confidentiality</h3>
        <p class="mb-4">Both parties agree to maintain confidentiality of proprietary information disclosed during the engagement. This does not prevent either party from disclosing information required by law or regulation, or using aggregated/anonymized data for case studies.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">10. Data Privacy</h3>
        <p class="mb-4">KlarPath processes personal data in accordance with GDPR and UK data protection laws. See our <a href="#" id="privacy-link-in-terms" class="text-accent-color hover:underline">Privacy Policy</a> for details. You consent to KlarPath collecting and using your business data for analytics and reporting purposes.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">11. Warranty Disclaimer</h3>
        <p class="mb-4">KlarPath provides services on an "as-is" basis. We make no warranties regarding specific results, rankings, or revenue increases. We warrant that we will perform services professionally using industry-standard practices.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">12. Changes to Terms</h3>
        <p class="mb-4">KlarPath reserves the right to modify these terms at any time. Continued use of services constitutes acceptance of modified terms. We will notify clients of significant changes via email.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">13. Dispute Resolution</h3>
        <p class="mb-4">Any disputes will be resolved through good-faith negotiation. If unresolved within 30 days, disputes will be governed by English law and heard in the courts of England and Wales.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">14. Contact</h3>
        <p class="mb-4">For questions about these terms, contact: <strong>hello@klarpath.com</strong></p>

        <hr class="border-border-color my-8">
        <p class="text-sm text-secondary-text-color">By using KlarPath services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
    `;

        const privacyContent = `
        <h1 class="text-2xl font-bold text-primary-text-color mb-6">Privacy Policy</h1>
        <p class="text-sm mb-8">Last Updated: January 24, 2026</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">1. Introduction</h3>
        <p class="mb-4">KlarPath ("we," "our," or "us") operates the klarpath.com website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">2. Information We Collect</h3>
        <p class="mb-2"><strong>Personal Information You Provide:</strong></p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Name, email, phone number, company information</li>
            <li>Billing and payment information (processed by secure payment providers)</li>
            <li>Business data including analytics, performance metrics, customer information</li>
            <li>Communications with our team via contact forms, email, or phone</li>
        </ul>

        <p class="mb-2"><strong>Information Automatically Collected:</strong></p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>IP address, browser type, device type, operating system</li>
            <li>Pages visited, time spent on pages, referring website</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Location information (city/country level from IP address)</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">3. How We Use Your Information</h3>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Provide and improve our digital marketing services</li>
            <li>Send service updates, billing information, and customer support</li>
            <li>Process payments and prevent fraud</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
            <li>Create anonymized case studies and marketing materials</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">4. Legal Basis for Processing</h3>
        <p class="mb-4">Under GDPR, we process your data based on:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Contract:</strong> Necessary to provide services you've requested</li>
            <li><strong>Consent:</strong> For marketing communications and tracking</li>
            <li><strong>Legitimate Interest:</strong> For analytics, fraud prevention, and service improvement</li>
            <li><strong>Legal Compliance:</strong> To meet regulatory requirements</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">5. Cookies & Tracking Technologies</h3>
        <p class="mb-4">We use:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Google Analytics to understand user behavior</li>
            <li><strong>Marketing Cookies:</strong> To track conversions and optimize campaigns</li>
        </ul>
        <p class="mb-4">You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">6. Third-Party Services</h3>
        <p class="mb-4">We use third-party services including:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Google Analytics:</strong> Website analytics</li>
            <li><strong>Google Ads:</strong> Conversion tracking</li>
            <li><strong>Payment Processors:</strong> Stripe, Square (secure payment processing)</li>
            <li><strong>Email Services:</strong> Mailchimp, SendGrid (email communications)</li>
        </ul>
        <p class="mb-4">These services have their own privacy policies. We recommend reviewing them.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">7. Data Retention</h3>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>Client data: Retained for duration of service + 3 years after termination</li>
            <li>Analytics data: Retained for 26 months</li>
            <li>Marketing cookies: Retained for 2 years</li>
            <li>You may request deletion of your data at any time</li>
        </ul>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">8. Data Security</h3>
        <p class="mb-4">We implement industry-standard security measures including:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li>SSL/TLS encryption for data in transit</li>
            <li>Secure password hashing</li>
            <li>Regular security audits</li>
            <li>Limited access to personal data</li>
        </ul>
        <p class="mb-4">While we implement strong security, no method is 100% secure. We cannot guarantee absolute security of your data.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">9. Your Privacy Rights</h3>
        <p class="mb-4">Under GDPR and UK CCPA, you have the right to:</p>
        <ul class="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate information</li>
            <li><strong>Erasure:</strong> Request deletion of your data ("Right to be Forgotten")</li>
            <li><strong>Restriction:</strong> Limit how we use your data</li>
            <li><strong>Portability:</strong> Receive your data in portable format</li>
            <li><strong>Objection:</strong> Opt-out of marketing communications</li>
        </ul>
        <p class="mb-4">To exercise these rights, contact: <strong>hello@klarpath.com</strong></p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">10. Marketing Communications</h3>
        <p class="mb-4">We send marketing emails only with your consent. You can unsubscribe at any time using the link in any email or by contacting us directly.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">11. Children's Privacy</h3>
        <p class="mb-4">Our services are not directed to children under 13. We do not knowingly collect information from children. If you believe a child has provided information, please contact us immediately.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">12. International Data Transfers</h3>
        <p class="mb-4">If you're outside the UK/EU, data transferred to us may be subject to different laws. By using our services, you consent to such transfers. We use Standard Contractual Clauses where required.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">13. Changes to This Policy</h3>
        <p class="mb-4">We may update this policy periodically. Changes take effect when posted. Continued use constitutes acceptance of the updated policy.</p>

        <h3 class="text-xl font-semibold text-primary-text-color mt-6 mb-3">14. Data Protection Officer</h3>
        <p class="mb-4">For privacy-related questions or complaints, contact: <strong>hello@klarpath.com</strong></p>
        <p class="mb-4">You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <strong>ico.org.uk</strong></p>

        <hr class="border-border-color my-8">
        <p class="text-sm text-secondary-text-color">By using KlarPath services, you acknowledge that you have read and agree to this Privacy Policy.</p>
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

    // --- Info Modal Handler (For Plans & Features) ---
    // Uses event delegation for better reliability
    document.body.addEventListener('click', function(e) {
        // Check if the clicked element or its parent has the class 'info-btn'
        const infoBtn = e.target.closest('.info-btn');
        
        if (infoBtn) {
            // Don't trigger if clicking a link or button inside the card (like "Get Started")
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            e.preventDefault();
            
            const infoModal = document.getElementById('info-modal');
            if (!infoModal) return;

            const infoModalTitle = document.getElementById('info-modal-title');
            const infoModalDescription = document.getElementById('info-modal-description');
            
            const title = infoBtn.getAttribute('data-title');
            const description = infoBtn.getAttribute('data-description');
            
            if (title && description) {
                infoModalTitle.textContent = title;
                infoModalDescription.textContent = description;
                infoModal.classList.remove('hidden');
                infoModal.classList.add('is-active');
                infoModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Handle closing the modal
        if (e.target.closest('#info-modal-close-btn') || 
            e.target.closest('#info-modal-close-footer-btn') || 
            e.target.id === 'info-modal-backdrop') {
            
            const infoModal = document.getElementById('info-modal');
            if (infoModal) {
                infoModal.classList.add('hidden');
                infoModal.classList.remove('is-active');
                infoModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', function(e) {
        const infoModal = document.getElementById('info-modal');
        if (e.key === 'Escape' && infoModal && !infoModal.classList.contains('hidden')) {
            infoModal.classList.add('hidden');
            infoModal.classList.remove('is-active');
            infoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    /* 
    // OLD IMPLEMENTATION REMOVED - Replaced with delegation above
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
        const infoModalTitle = document.getElementById('info-modal-title');
        // ... (rest of old code)
    } 
    */

});