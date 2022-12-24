export default function contact () {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    const phoneDiv = document.createElement('div');
    const phoneSpan = document.createElement('span');
    phoneSpan.innerText = "Phone: ";
    const addressDiv = document.createElement('div');
    const addressSpan = document.createElement('span');
    addressSpan.innerText = "Address: ";
    const emailDiv = document.createElement('div');
    const emailSpan = document.createElement('span');
    emailSpan.innerText = "Email: ";

    phoneDiv.append(phoneSpan, "+123456789");
    addressDiv.append(addressSpan, "14 boulevard street country name")
    emailDiv.append(emailSpan, "pizzaplace@email.com");

    contactDetails.append(phoneDiv, addressDiv, emailDiv);
    

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    const formContainerH = document.createElement('h1');
    formContainerH.innerText = "Contact";

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    const details = document.createElement('div');
    details.classList.add('details');
    const name = document.createElement('input');
    name.setAttribute('id', 'name');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Name');
    const email = document.createElement('input');
    email.setAttribute('id', 'email');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email');
    
    const msg = document.createElement('textarea');
    msg.setAttribute('name', 'message');
    msg.setAttribute('placeholder', 'Message');
    msg.setAttribute('id', 'msg');
    msg.setAttribute('cols', '30');
    msg.setAttribute('rows', '1');
    const btn = document.createElement('button');
    btn.classList.add('contact-btn');
    btn.innerText = "Submit";

    details.append(name, email);
    form.append(details, msg, btn);
    formContainer.append(form);

    contactWrapper.append(contactDetails, formContainer);

    contact.append(contactWrapper);

    return contact;
}