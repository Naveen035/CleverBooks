//for blog scrooler
let currentSlide = 0;

function slideLeft() {
    const slides = document.querySelector('.blog-cards');
    const totalSlides = document.querySelectorAll('.blog-card').length;

    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;

    const slideWidth = document.querySelector('.blog-card').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function slideRight() {
    const slides = document.querySelector('.blog-cards');
    const totalSlides = document.querySelectorAll('.blog-card').length;

    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;

    const slideWidth = document.querySelector('.blog-card').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

//hide navbar or header

var lastScrollTop = 0;
var header = document.getElementById("header");

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {

        header.style.top = "-100px";
    } else {

        header.style.top = "0";
    }

    lastScrollTop = currentScroll;
});

//for popup button 

const productLink = document.getElementById('product-link');
const productPopup = document.getElementById('product-popup');
const closePopupBtn = productPopup.querySelector('.close-popup');

productLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    productPopup.style.display = 'block';
});

closePopupBtn.addEventListener('click', function() {
    productPopup.style.display = 'none';
});

//for stockouts

function showContent(id) {
    // Hide all content items
    document.querySelectorAll('.content-item').forEach(item => {
        item.classList.remove('active');
    });
    // Show the selected content item
    document.getElementById(id).classList.add('active');
}

//for profile 
function goToComponentTwo() {
    document.getElementById('componentOne').classList.remove('active');
    document.getElementById('componentTwo').classList.add('active');
}

function goToComponentOne() {
    document.getElementById('componentTwo').classList.remove('active');
    document.getElementById('componentOne').classList.add('active');
}

// for the spreadsheet

function toggleProfile(profileIndex) {
    // Hide all paragraphs
    var contents = document.querySelectorAll('.profile-content24');
    contents.forEach(function(content, index) {
        content.style.display = (index === profileIndex) ? 'block' : 'none';
    });

    // Change the profile image
    var profileImage = document.getElementById('profile-image');
    var images = [
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%2520type-2-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-800.webp',
        'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-800.png'
    ];
    profileImage.src = images[profileIndex];

    // Update the active heading
    var headings = document.querySelectorAll('.side-heading');
    headings.forEach(function(heading, index) {
        heading.classList.toggle('active', index === profileIndex);
    });
}

// Initialize the first profile as active
document.addEventListener('DOMContentLoaded', function() {
    toggleProfile(0);
});