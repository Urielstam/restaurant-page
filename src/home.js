export  default function home () {
    const main = document.createElement('div');
    main.classList.add('main');

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroContent = document.createElement('div');
    hero.classList.add('hero-content');
    const heroH = document.createElement('h1');
    heroH.innerText = 'Salad Corner';
    const heroP = document.createElement('p');
    heroP.innerText = 'Offering the most delicous and nutriticous salads since never. Yes beer goes with salad!';

    heroContent.append(heroH, heroP);
    hero.appendChild(heroContent)
    heroSection.appendChild(hero);

    const bodySection = document.createElement('section');
    bodySection.classList.add('body-section');
    const bodyHeader = document.createElement('div');
    bodyHeader.classList.add('body-header');
    const bodyH = document.createElement('h1');
    bodyH.innerText = 'Philosphy';
    const bodyP = document.createElement('p');
    bodyP.innerText = 'Here at salad corner, we believe that you can be healthy as well as having a good time. And that is why we promote beer as the preferred drink to go with any salad!';

    bodyHeader.append(bodyH, bodyP);
    bodySection.appendChild(bodyHeader);

    main.append(heroSection, bodySection);

    return main;
};

