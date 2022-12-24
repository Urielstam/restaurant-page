
import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

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
    footer.innerHTML = '©2022 Made with <span></span> by Uriel stamelman';

    return footer;
}

const createPage = (page) => {
    content.appendChild(createNav());
    content.appendChild(page());
    content.appendChild(createFooter());

    const tags = document.querySelector('.tags');
    tags.addEventListener('click', (e) => {
        if(e.target.innerText === 'Home') {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(home);
        }
        else if (e.target.innerText === 'Menu') {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(menu);
        }
        else if (e.target.innerText === "Contact") {
            while(content.hasChildNodes()) {
                content.removeChild(content.firstChild);
            }
            createPage(contact);
        }
    });

}

//Create page

createPage(home);


