

const hero = () => {

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroH = document.createElement('h1');
    heroH.innerText = 'Pizza Corner';
    const heroP = document.createElement('p');
    heroP.innerText = 'Offering the most delicous and nutriticous pizza since never!';

    hero.append(heroH, heroP)
    heroSection.appendChild(hero);

    return heroSection;
};

const imageGrid = () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container')
    const grid = document.createElement('div');
    grid.classList.add('grid')
    const img1 = document.createElement('div');
    img1.classList.add('cell');
    img1.classList.add('img1');
    img1.innerText = 'Delicous';
    const img2 = document.createElement('div');
    img2.classList.add('cell');
    img2.classList.add('img2');
    img2.innerText = 'Fun';
    const img3 = document.createElement('div');
    img3.classList.add('cell');
    img3.classList.add('img3');
    img3.innerText = 'Nutriticous';
    
    grid.append(img1, img2, img3);
    gridContainer.appendChild(grid);

    return gridContainer;
}

const aboutBlock = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    const aboutH = document.createElement('h1');
    aboutH.innerText = "About";
    const aboutP1 = document.createElement('p');
    aboutP1.innerText = "We are the best pizza makers in town, and that is definitely NOT a fact";
    const aboutP2 = document.createElement('p');
    aboutP2.innerText = "(Rather we probably don't make pizzas at all and are rather a fake site for the fun of it)";
    
    about.append(aboutH, aboutP1, aboutP2);

    return about;
}

const menuSample = () => {
    const menuSample = document.createElement('div');
    menuSample.classList.add('menu-sample');
    const menuSampleH = document.createElement('h1');
    menuSampleH.innerText = "Menu Sample";
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerText = "See full menu";

    const cards = document.createElement('div');
    cards.classList.add('cards');

    const card = document.createElement('div');
    card.classList.add('card');
    const cardH = document.createElement('h1');
    cardH.innerText = "Awesome Type of Pizza here!";
    const cardP = document.createElement('p');
    cardP.innerText = "Awesome type of pizza description goes here...";
    card.append(cardH, cardP);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const cardH2 = document.createElement('h1');
    cardH2.innerText = "Awesome Type of Pizza here!";
    const cardP2 = document.createElement('p');
    cardP2.innerText = "Awesome type of pizza description goes here...";
    card2.append(cardH2, cardP2);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const cardH3 = document.createElement('h1');
    cardH3.innerText = "Awesome Type of Pizza here!";
    const cardP3 = document.createElement('p');
    cardP3.innerText = "Awesome type of pizza description goes here...";
    card3.append(cardH3, cardP3);

    cards.append(card, card2, card3);

    menuSample.append(menuSampleH, menuBtn, cards);

    return menuSample;
}

const body = () => {

    const bodySection = document.createElement('section');
    bodySection.classList.add('body-section');

    bodySection.append(imageGrid(), aboutBlock(), menuSample());


    return bodySection;
}


export default function home () {

    const main = document.createElement('div');
    main.classList.add('main');
    main.append(hero(), body());

    return main;
}
