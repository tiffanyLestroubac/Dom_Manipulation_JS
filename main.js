const homeContent = document.getElementById('home').innerHTML;

const menuContent = document.getElementById('menuContent').innerHTML;


/******************************
 * THP MENU ALÉATOIRE
 *******************************/

var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var randomMenu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`



const clickHome = (e) => {
  e.preventDefault();
  const homeLink = document.getElementById('homeLink');
  const menuLink = document.getElementById('menuLink');
  const homeElement = document.getElementById('home');
  if (homeElement === null) {
    menuLink.style = '';
    homeLink.style.color = 'red';
    homeLink.style.border = '3px solid red';
    document.getElementById('content').innerHTML = `<div id='home'>${homeContent}</div>`;
  }
};


const clickMenu = (e) => {
  e.preventDefault();
  const homeLink = document.getElementById('homeLink');
  const menuLink = document.getElementById('menuLink');
  const menuElement = document.getElementById('menu');
  if (menuElement === null) {
    homeLink.style = '';
    menuLink.style.color = 'red';
    menuLink.style.border = '3px solid red';
    document.getElementById('content').innerHTML = menuContent;
    const buttonMixMenu = document.getElementById('mixMenu');
    buttonMixMenu.addEventListener('click', clickMixMenu);
  }
};

const homeLink = document.getElementById('homeLink');
const menuLink = document.getElementById('menuLink');


const clickMixMenu = (e) => {
  e.preventDefault();
  random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
  random_technique = techniques[Math.floor(Math.random()*techniques.length)];
  random_side = sides[Math.floor(Math.random()*sides.length)];
  random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)];

  randomMenu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`;

  const menuLink = document.getElementById('menuLink');
  const menuElement = document.getElementById('menu');
  menuLink.style.color = 'yellow';
  menuLink.style.border = '5px solid green';
  menuElement.innerHTML = `ET BAH VOILÀ : <br> <h3>${randomMenu}</h3>`;
};

homeLink.addEventListener('click', clickHome);
menuLink.addEventListener('click', clickMenu);

/*******************
 * EXIT POPUP
********************** */


const exitPopUpElement = document.getElementById('exit-pop-up');
const greyBackgroundPopElement = document.getElementById('bg-out');

const closePopup = () => {
  exitPopUpElement.style.display = 'none';
  greyBackgroundPopElement.style.width = '0';
  greyBackgroundPopElement.style.height = '0';
};

document.body.addEventListener('mouseleave', () => {
  greyBackgroundPopElement.style.opacity = '0.5';
  greyBackgroundPopElement.style.width = `${document.body.clientWidth}px`;
  greyBackgroundPopElement.style.height = `${document.body.clientHeight}px`;
  exitPopUpElement.style.display = 'block';
  
  const closePopupElement = document.getElementById('closePopup');
  closePopupElement.addEventListener('click', closePopup);
});
