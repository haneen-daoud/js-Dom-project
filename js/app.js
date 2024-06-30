/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const Allsec = document.querySelectorAll('section')
const navbar_list = document.getElementById('navbar__list');
let isScroll
let header = document.querySelector('.page__header');
const TopBtn = document.querySelector('button');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isView(section){
    const size = section.getBoundingClientRect();
    return size.bottom >= 0 && size.top< 70;
    
}
// Show or hide the scroll to top button and scroll to top
function scrollAndTopButton() {
    if (window.scrollY > window.innerHeight) {
        TopBtn.style.display = 'block';
    } else {
     TopBtn.style.display = 'none';
    }

}

// Scroll to top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildnavbar(){
    Allsec.forEach(sec =>{
   // const list_item = createListItem(sec.id,sec.dataset.nav);
    let item = document.createElement('li')
    let link = document.createElement('a')
    navbar_list.appendChild(item)
    item.appendChild(link)
    link.href= `#${sec.id}`;
    link.innerHTML = `${sec.dataset.nav}`
    // Add CSS to remove underline
    link.style.textDecoration = 'none';
    // Add CSS to change color
    link.style.color = 'black';
    
    })

}

// Add class 'active' to section when near top of viewport
function makeActive(){
    for (const section of Allsec) {
     const secActive = document.querySelector(`a[href="#${section.id}"]`).parentElement;
   
     if(isView(section)){
        secActive.classList.add('active')
        section.classList.add('your-active-class')
    }
    else
    {
        secActive.classList.remove('active')
        section.classList.remove('your-active-class')
    }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollfunction(event){
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'))
    targetSection.scrollIntoView({ behavior: 'smooth' });

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('DOMContentLoaded',()=>{
    // Build menu 
    buildnavbar();
    // Scroll to section on link click
    navbar_list.addEventListener('click',scrollfunction)
    // Set sections as active
    makeActive();


})
window.addEventListener('scroll', () => {

    scrollAndTopButton();

    header.style.display = 'block';

    clearTimeout(isScroll);
    //hide navbar after 3s
    isScroll= setTimeout(() => {
        header.style.display = 'none';
    }, 10000);
})
window.addEventListener('scroll', makeActive);




