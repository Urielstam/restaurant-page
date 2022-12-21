import '../src/Home/home.css';
import home from './Home/home';

const content = document.querySelector('.content');

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const tags = document.createElement('div')
    tags.classList.add('tags');

    const homeP = document.createElement('p');
    const menuP = document.createElement('p');
    const contactP = document.createElement('p');
    homeP.innerText = 'Home';
    menuP.innerText = 'Menu';
    contactP.innerText = 'Contact';
    nav.appendChild(tags);
    tags.append(homeP, menuP, contactP);

    return nav;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = '©2022 Made with <span></span> by Uriel stamelman<';

    return footer;
}

content.appendChild(createNav());
content.appendChild(home());
content.appendChild(createFooter());

const tags = document.querySelector('.tags');
tags.addEventListener('click', (e) => {
    if(e.target.innerText === 'Home') {
        console.log('Home!')
    }
    else if (e.target.innerText === 'Menu') {
        console.log('Menu!')
    }
})

