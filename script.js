// Navigation for the "Browse Properties" button on the landing page
const browsePropertiesButton = document.getElementById('browse-properties');
if (browsePropertiesButton) {
    browsePropertiesButton.addEventListener('click', () => {
        window.location.href = 'featured.html';
    });
}

// Navigation for the "View All FAQs" button on the Featured Properties page
const viewAllFaqsButton = document.getElementById('view-all-faqs');
if (viewAllFaqsButton) {
    viewAllFaqsButton.addEventListener('click', () => {
        window.location.href = 'faq.html';
    });
}

// Navigation for the "Contact Page" button on the FAQ page
const contactPageButton = document.getElementById('contact-page');
if (contactPageButton) {
    contactPageButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
}
