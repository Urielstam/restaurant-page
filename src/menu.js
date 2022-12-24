export default function menu () {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const header = document.createElement('header');
    header.classList.add('header');
    const headerH = document.createElement('h1');
    headerH.innerText = "Menu";
    const options = document.createElement('div');
    options.classList.add('options');

    const option1 = document.createElement('div');
    option1.classList.add('option');
    const a1 = document.createElement('a');
    a1.href = "#appetizer-section";
    a1.innerText = "Appetizers";

    const option2 = document.createElement('div');
    option2.classList.add('option');
    const a2 = document.createElement('a');
    a2.href = "#classic-section";
    a2.innerText = "Classics";

    const option3 = document.createElement('div');
    option3.classList.add('option');
    const a3 = document.createElement('a');
    a3.href = "#side-section";
    a3.innerText = "Sides";

    const option4 = document.createElement('div');
    option4.classList.add('option');
    const a4 = document.createElement('a');
    a4.href = "#specialty-section";
    a4.innerText = "Specials";

    option1.appendChild(a1);
    option2.appendChild(a2);
    option3.appendChild(a3);
    option4.appendChild(a4);

    options.append(option1, option2, option3, option4);
    header.append(headerH, options);

    const appSec = document.createElement('section');
    appSec.setAttribute('id', 'appetizer-section');
    const appH = document.createElement('h1');
    appH.innerText = "Appetizers";
    const appContainer  = document.createElement('div');
    appContainer.classList.add('container');
    appContainer.classList.add('appetizer-container');
    const appContainerP = document.createElement('p');
    appContainerP.innerText = "Cool menu of Appetizers here";
    appContainer.append(appContainerP);
    appSec.append(appH, appContainer);

    const classicSec = document.createElement('section');
    classicSec.setAttribute('id', 'classic-section');
    const classicH = document.createElement('h1');
    classicH.innerText = "Classics";
    const classicContainer  = document.createElement('div');
    classicContainer.classList.add('container');
    classicContainer.classList.add('classic-container');
    const classicContainerP = document.createElement('p');
    classicContainerP.innerText = "Cool classic pizza menu here";
    classicContainer.append(classicContainerP);
    classicSec.append(classicH, classicContainer);


    const sideSec = document.createElement('section');
    sideSec.setAttribute('id', 'side-section');
    const sideH = document.createElement('h1');
    sideH.innerText = "Sides";
    const sideContainer  = document.createElement('div');
    sideContainer.classList.add('container');
    sideContainer.classList.add('side-container');
    const sideContainerP = document.createElement('p');
    sideContainerP.innerText = "Awesome menu of sides her";
    sideContainer.append(sideContainerP);
    sideSec.append(sideH, sideContainer);

    const specialSec = document.createElement('section');
    specialSec.setAttribute('id', 'specialty-section');
    const specialH = document.createElement('h1');
    specialH.innerText = "Sides";
    const specialContainer  = document.createElement('div');
    specialContainer.classList.add('container');
    specialContainer.classList.add('specialty-container');
    const specialContainerP = document.createElement('p');
    specialContainerP.innerText = "Awesome menu of sides her";
    specialContainer.append(specialContainerP);
    specialSec.append(specialH, specialContainer);


    menu.append(header, appSec, classicSec, sideSec, specialSec);

    return menu;

} 