const content = document.getElementById('content');
const navigation = document.createElement('nav');
const home = document.createElement('button');
const menu = document.createElement('button');
const drinks = document.createElement('button');
const accomodation = document.createElement('button');
const contacts = document.createElement('button');
const section = document.createElement('section');
const titleHeader =  document.createElement('h2');
const title = document.createElement('div');
const para = document.createElement('p');
const main = document.createElement('div');

// create a header
function header (){
    const heading = document.createElement('div');
    heading.classList.add('heading');
    content.appendChild(heading);
    // add h1 in the heading
    const title = document.createElement('h1');
    title.innerText = `KEVIN\'S COFFEE AND FOOD`;
    heading.appendChild(title);
}
header();
// create a navigation section
// const Btns = [];

function navigationBar (){
    navigation.classList.add('nav');
    content.appendChild(navigation);
   
    homeBtn();
    menuBtn();
    drinksBtn();
    accomodationBtn();
    contactsBtn();
}
navigationBar();

// create buttons for information about the sites
// home, foods, menus, accomodation, drinks and snacks
function homeBtn (){
    navigation.appendChild(home);
    home.classList.add('navBtns');
    home.textContent = 'HOME';
    home.addEventListener('click',(e) =>{
        content.appendChild(section);
        section.classList.add('home');
        section.style.display = 'flex';
    });
        title.classList.add('title');
        title.appendChild(titleHeader);
        titleHeader.textContent = 'ABOUT US';
        section.appendChild(title);
        main.classList.add('main');
        main.appendChild(para);
        section.appendChild(main);
        section.style.flexDirection = 'column';
        para.textContent = 'Kevin\'s coffee and food is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper quam et massa vehicula, vitae molestie diam porta. Vivamus vel gravida massa. Donec blandit hendrerit pellentesque. Mauris id libero at arcu pharetra pharetra. In hac habitasse platea dictumst. Vestibulum pretium ornare consequat. Phasellus laoreet, ex dignissim gravida rutrum, sem mauris volutpat mi, in consectetur eros quam vel leo. Fusce tristique tellus venenatis, dapibus eros eget, imperdiet lacus. Duis lacinia tincidunt sollicitudin. Nullam quam dolor, porta in ex et, ullamcorper rhoncus lorem. Ut sit amet odio sed felis consectetur elementum et et tortor.'
        para.classList.add('para');
    }
function menuBtn (){
    navigation.appendChild(menu);
    menu.classList.add('navBtns');
    menu.textContent = 'MENUS';
    menu.addEventListener('click',(e) =>{
        content.appendChild(section);
        section.classList.add('menu');
        section.style.display = 'flex';
        title.classList.add('title');
        title.appendChild(titleHeader);
        titleHeader.textContent = 'DRINKS AND FOODS';
        section.appendChild(title);
        section.appendChild(main);
        main.classList.add('main');
    });
    
}
function drinksBtn (){
    navigation.appendChild(drinks);
    drinks.classList.add('navBtns');
    drinks.textContent = 'DRINKS & SNACKS';
    drinks.addEventListener('click',(e) =>{
        content.appendChild(section);
        section.classList.add('drinks');
        section.style.display = 'flex';
        section.textContent = 'Hello there';
    });
}
function accomodationBtn (){
    navigation.appendChild(accomodation);
    accomodation.classList.add('navBtns');
    accomodation.textContent = 'ACCOMODATION';
    accomodation.addEventListener('click',(e) =>{
        content.appendChild(section);
        section.classList.add('accomodation');
        section.style.display = 'flex';
        section.textContent = 'Mine';
    });
}
function contactsBtn (){
    navigation.appendChild(contacts);
    contacts.classList.add('navBtns');
    contacts.textContent = 'CONTACTS';
    contacts.addEventListener('click',(e) =>{
        content.appendChild(section);
        section.classList.add('contacts');
        section.style.display = 'flex';
        section.textContent = 'Mine too';
    });
}




