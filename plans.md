# Update Guide for Klarpath.co.uk

**Objective:** Update `klarpath.co.uk` to match the pricing, T&Cs, and compliance features of `klarpath.com`.
also when the action button on each plan is pressed redirect to klarpath.com. also keep the themes and style of the actual website.thanks

---

## 1. Pricing Plans HTML

**Instruction:** Replace the existing pricing grid in the HTML with the following code. This includes the **Launchpad**, **Growth Starter**, **Custom Scale**, and the new **Enterprise** plan, along with the specific code ownership details.

```html
<div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto items-stretch">
    
    <!-- Launchpad -->
    <div class="relative group bg-surface-color rounded-2xl border flex flex-col p-8 transition-all duration-300 ease-in-out border-border-color hover:border-accent-color/50 hover:-translate-y-2 info-btn cursor-pointer" data-title="Launchpad Package Details" data-image="https://picsum.photos/seed/launchpad_pkg_v2/800/400" data-description="Designed for speed and conversion. We host your site on a global enterprise network. Includes a professional template, SSL security, and automatic protection against cyber attacks.">
      <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
          <i class="fas fa-info-circle text-gray-500 group-hover:text-accent-color transition-colors text-lg animate-pulse-scale"></i>
      </div>
      <h3 class="text-2xl font-bold text-primary-text-color">Launchpad</h3>
      <p class="mt-2 text-secondary-text-color h-12">The essential toolkit to get your business online and looking professional.</p>
      <div class="my-8">
          <span class="text-5xl font-bold text-primary-text-color">£150</span><span class="text-secondary-text-color ml-2">/month</span>
          <p class="text-sm text-secondary-text-color mt-2">+ £150 Setup Fee</p>
      </div>
      <div class="mt-[-1.5rem] mb-6 text-xs text-secondary-text-color text-center border-t border-b border-border-color py-2">
          <p class="font-semibold text-primary-text-color">Code Ownership Options</p>
          <p>Own the code after 24 months, or pay a <strong>£3,000 one-time fee</strong> for immediate ownership & documentation.</p>
      </div>
      <ul class="space-y-4 text-secondary-text-color flex-grow">
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Professional Template Website</span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>'Emergency Call' Lead Magnet</span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Global Speed & Cyber Protection</span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Flawlessly Responsive Design</span></li>
      </ul>
      <div class="mt-10"><a href="#contact" onclick="event.stopPropagation()" class="select-plan-btn block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.08)] text-primary-text-color hover:bg-accent-color hover:text-white hover:scale-105 hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-110">Get Started</a></div>
    </div>
    
    <!-- Growth Starter -->
    <div class="relative group bg-surface-color rounded-2xl border flex flex-col p-8 transition-all duration-300 ease-in-out border-accent-color shadow-[0_0_30px_var(--glow-color)] md:scale-105 overflow-hidden info-btn cursor-pointer" data-title="Growth Starter Package Details" data-image="https://picsum.photos/seed/growth_starter_v2/800/400" data-description="Our best-selling package. Includes everything in Launchpad, plus powerful automation, calendar booking, and automated review management.">
      <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
          <i class="fas fa-info-circle text-gray-500 group-hover:text-accent-color transition-colors text-lg animate-pulse-scale"></i>
      </div>
      <div class="bg-accent-color text-white text-xs font-bold py-2 uppercase tracking-wider text-center -mt-8 -mx-8 mb-8">Most Popular</div>
      <h3 class="text-2xl font-bold text-primary-text-color">Growth Starter</h3>
      <p class="mt-2 text-secondary-text-color h-12">Perfect for businesses ready to attract and convert more customers.</p>
      <div class="my-8">
          <span class="text-5xl font-bold text-primary-text-color">£300</span><span class="text-secondary-text-color ml-2">/month</span>
          <p class="text-sm text-accent-color font-bold mt-2">No Setup Fee</p>
      </div>
      <div class="mt-[-1.5rem] mb-6 text-xs text-secondary-text-color text-center border-t border-b border-border-color py-2">
          <p class="font-semibold text-primary-text-color">Code Ownership Options</p>
          <p>Own the code after 24 months, or pay a <strong>£6,000 one-time fee</strong> for immediate ownership & documentation.</p>
      </div>
      <ul class="space-y-4 text-secondary-text-color flex-grow">
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span><strong>Everything in Launchpad, plus:</strong></span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Advanced Lead Capture (Forms & Chatbot)</span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Integrated Calendar Booking</span></li>
        <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Automated Review Management</span></li>
      </ul>
      <div class="mt-10"><a href="#contact" onclick="event.stopPropagation()" class="select-plan-btn block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.08)] text-primary-text-color hover:bg-accent-color hover:text-white hover:scale-105 hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-110">Select Plan</a></div>
    </div>

    <!-- Custom Scale -->
    <div class="relative group bg-surface-color rounded-2xl border flex flex-col p-8 transition-all duration-300 ease-in-out border-border-color hover:border-accent-color/50 hover:-translate-y-2 info-btn cursor-pointer" data-title="Custom Scale Package Details" data-image="https://picsum.photos/seed/custom_scale_v2/800/400" data-description="For brands that need a unique identity. Includes custom design, AI-driven SEO, and dedicated account management.">
      <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
          <i class="fas fa-info-circle text-gray-500 group-hover:text-accent-color transition-colors text-lg animate-pulse-scale"></i>
      </div>
      <h3 class="text-2xl font-bold text-primary-text-color">Custom Scale</h3>
      <p class="mt-2 text-secondary-text-color h-12">For ambitious brands ready to dominate their market.</p>
      <div class="my-8">
          <span class="text-5xl font-bold text-primary-text-color">£650</span><span class="text-secondary-text-color ml-2">/month</span>
          <p class="text-sm text-secondary-text-color mt-2">+ £4,000 - £6,000 Setup Fee</p>
      </div>
      <div class="mt-[-1.5rem] mb-6 text-xs text-secondary-text-color text-center border-t border-b border-border-color py-2">
          <p class="font-semibold text-primary-text-color">Client Growth Platform</p>
          <p>Includes access to our client dashboard & mobile app to manage leads, conversations, and analytics in one place.</p>
      </div>
      <ul class="space-y-4 text-secondary-text-color flex-grow">
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span><strong>Everything in Growth Starter</strong></span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Custom Website Design & Dev</span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Advanced AI-Driven SEO</span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Content Strategy & Creation</span></li>
      </ul>
      <div class="mt-10"><a href="#contact" onclick="event.stopPropagation()" class="select-plan-btn block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.08)] text-primary-text-color hover:bg-accent-color hover:text-white hover:scale-105 hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-110">Request Consultation</a></div>
    </div>

    <!-- Enterprise -->
    <div class="relative group bg-surface-color rounded-2xl border flex flex-col p-8 transition-all duration-300 ease-in-out border-border-color hover:border-accent-color/50 hover:-translate-y-2 info-btn cursor-pointer" data-title="Enterprise Package Details" data-image="https://picsum.photos/seed/enterprise_v1/800/400" data-description="The ultimate solution for market leaders. Dedicated infrastructure, 24/7 priority support, and advanced security audits.">
      <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
          <i class="fas fa-info-circle text-gray-500 group-hover:text-accent-color transition-colors text-lg animate-pulse-scale"></i>
      </div>
      <h3 class="text-2xl font-bold text-primary-text-color">Enterprise</h3>
      <p class="mt-2 text-secondary-text-color h-12">Unparalleled performance and dedicated support for industry leaders.</p>
      <div class="my-8">
          <span class="text-5xl font-bold text-primary-text-color">From £1500</span><span class="text-secondary-text-color ml-2">/month</span>
          <p class="text-sm text-secondary-text-color mt-2">+ Custom Setup Fee</p>
      </div>
      <div class="mt-[-1.5rem] mb-6 text-xs text-secondary-text-color text-center border-t border-b border-border-color py-2">
          <p class="font-semibold text-primary-text-color">Dedicated Growth Platform</p>
          <p>Full access to a dedicated UI, unified dashboard, and mobile app for complete control over leads, analytics, and communications.</p>
      </div>
      <ul class="space-y-4 text-secondary-text-color flex-grow">
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span><strong>Everything in Custom Scale, plus:</strong></span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Dedicated Infrastructure & SLA</span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>24/7 Priority Support</span></li>
          <li class="flex items-start"><i class="fas fa-check text-accent-color mt-1 mr-3 flex-shrink-0"></i><span>Advanced Security Audits</span></li>
      </ul>
      <div class="mt-10"><a href="#contact" onclick="event.stopPropagation()" class="select-plan-btn block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.08)] text-primary-text-color hover:bg-accent-color hover:text-white hover:scale-105 hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-110">Book a Call</a></div>
    </div>
</div>
```

---

## 2. Terms & Conditions (T&Cs) Update

**Instruction:** Update the "Pricing & Payment" and "Intellectual Property" sections in your T&Cs (likely in `main.js` or a separate policy file) to reflect the new ownership terms.

**Pricing & Payment Section:**
> *   **Launchpad Plan (£150/month + £150 Setup Fee):** Includes a professional template website and essential features. Code ownership is granted after 24 monthly payments. An upfront payment of **£3,000** grants immediate code ownership and handover documentation.
> *   **Growth Starter Plan (£300/month):** Our most popular package with advanced lead capture tools. Code ownership is granted after 24 monthly payments. An upfront payment of **£6,000** grants immediate code ownership and handover documentation.
> *   **Custom Scale Plan (£650/month + £4,000-£6,000 Setup Fee):** Custom website design, advanced AI-driven SEO, content strategy, and dedicated account manager. Includes access to our client growth platform with a unified dashboard and mobile app.
> *   **Enterprise Plan (From £1500/month + Custom Setup Fee):** A bespoke solution for industry leaders, including dedicated infrastructure, 24/7 priority support with an SLA, and advanced security audits. Includes full access to our dedicated growth platform with a custom UI, dashboard, and mobile app. Immediate code ownership is included as part of the setup fee.

**Intellectual Property & Code Ownership Section:**
> **7.1 Ownership Transfer Conditions:** Full ownership of the compiled website source code ("the Code") is transferred to the Client upon fulfillment of one of the following conditions:
> *   **Subscription Plans:** Completion of the full 24-month payment term for the Launchpad or Growth Starter plans.
> *   **Upfront Payment:** Full payment of the one-time buyout fee for the Launchpad (£3,000) or Growth Starter (£6,000) plans.
> *   **Custom & Enterprise Plans:** Full payment of the setup fee for the Custom Scale or Enterprise plan.
>
> **7.2 License Prior to Ownership Transfer:** For clients on a monthly payment plan, KlarPath grants a limited, non-exclusive, non-transferable license to use the website for the duration of the payment term. This license is contingent upon timely monthly payments.

---

## 3. Cookie Consent & Purchase Protection

**Instruction:** Implement a bottom banner that forces users to accept T&Cs and Cookies before they can click any "Buy Now" or "Select Plan" buttons.

### Step A: Add HTML for the Banner
Add this code at the very bottom of your `<body>` tag in `index.html`:

```html
<!-- START: Cookie Consent Banner -->
<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-surface-color border-t border-accent-color p-6 z-[60] transform translate-y-full transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="text-sm text-secondary-text-color text-center md:text-left max-w-3xl">
        <p>We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. By continuing to visit this site you agree to our use of cookies. Read our <a href="#" id="cookie-policy-link" class="text-accent-color hover:underline">Privacy Policy</a> and <a href="#" id="cookie-terms-link" class="text-accent-color hover:underline">Terms & Conditions</a>.</p>
    </div>
    <div class="flex gap-4">
        <button id="cookie-accept" class="px-6 py-2 rounded-full bg-accent-color text-white hover:shadow-[0_0_15px_var(--glow-color)] transition-all text-sm font-medium">Accept</button>
        <button id="cookie-decline" class="px-6 py-2 rounded-full border border-border-color text-secondary-text-color hover:bg-white/5 transition-colors text-sm font-medium">Decline</button>
    </div>
</div>
<!-- END: Cookie Consent Banner -->
```

### Step B: Add JavaScript Logic
Add this to your `main.js` file inside the `DOMContentLoaded` event listener. This script handles showing the banner and **blocking purchase buttons** if consent hasn't been given.

```javascript
// --- Cookie Consent Logic ---
const cookieBanner = document.getElementById('cookie-banner');
const cookieAcceptBtn = document.getElementById('cookie-accept');
const cookieDeclineBtn = document.getElementById('cookie-decline');
const cookiePolicyLink = document.getElementById('cookie-policy-link');
const cookieTermsLink = document.getElementById('cookie-terms-link');

if (cookieBanner) {
    // Check if user has already made a choice
    const cookieConsent = sessionStorage.getItem('klarpath_cookie_consent');

    if (!cookieConsent) {
        // Show banner after a small delay
        setTimeout(() => {
            cookieBanner.classList.remove('translate-y-full');
        }, 500);
    }

    cookieAcceptBtn.addEventListener('click', () => {
        sessionStorage.setItem('klarpath_cookie_consent', 'accepted');
        cookieBanner.classList.add('translate-y-full');
    });

    cookieDeclineBtn.addEventListener('click', () => {
        sessionStorage.setItem('klarpath_cookie_consent', 'declined');
        cookieBanner.classList.add('translate-y-full');
    });

    // Optional: Link to open modals if you have them
    if (cookiePolicyLink) {
        cookiePolicyLink.addEventListener('click', (e) => {
            e.preventDefault();
            const openPrivacyLink = document.getElementById('open-privacy-link');
            if (openPrivacyLink) openPrivacyLink.click();
        });
    }

    if (cookieTermsLink) {
        cookieTermsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const openTermsLink = document.getElementById('open-terms-link');
            if (openTermsLink) openTermsLink.click();
        });
    }
}

// --- Purchase Protection Logic ---
// This blocks the "Select Plan" buttons if cookies/T&Cs are not accepted
const packageButtons = document.querySelectorAll('.select-plan-btn');
packageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const consent = sessionStorage.getItem('klarpath_cookie_consent');
        if (consent !== 'accepted') {
            e.preventDefault();
            const banner = document.getElementById('cookie-banner');
            
            // Show the banner again if it was hidden
            if (banner) banner.classList.remove('translate-y-full');
            
            // Alert the user
            setTimeout(() => {
                alert("Please accept our Terms & Conditions and Cookies policy to proceed with your purchase.");
            }, 50);
        }
    });
});

// Also block "Buy Now" buttons in the template grid
const templatesGrid = document.getElementById('templates-grid');
if (templatesGrid) {
    templatesGrid.addEventListener('click', (e) => {
        const button = e.target.closest('.view-demo-btn'); // Assuming 'Buy Now' uses this class or similar
        if (button && button.textContent.trim().toLowerCase().includes('buy')) {
            const consent = sessionStorage.getItem('klarpath_cookie_consent');
            if (consent !== 'accepted') {
                e.preventDefault();
                const banner = document.getElementById('cookie-banner');
                if (banner) banner.classList.remove('translate-y-full');
                setTimeout(() => {
                    alert("Please accept our Terms & Conditions and Cookies policy to proceed with your purchase.");
                }, 50);
            }
        }
    });
}
```