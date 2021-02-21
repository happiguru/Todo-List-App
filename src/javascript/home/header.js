function header(){
    const header = document.createElement('header');
    const div = document.createElement('div');
    const icon = document.createElement('i');
    const icon2 = document.createElement('i');
    const topic = document.createElement('h1');
    const but = document.createElement('button');

    header.classList.add('header');
    div.classList.add('logo');
    icon.classList.add('fas fa-clipboard-list');
    icon2.classList.add('fas fa-bars');
    topic.classList.add('page-name');
    but.classList.add('button-open-nav');
    but.setAttribute("id", "button-open-nav");

    topic.textContent ='Tudoist';
    div.append(icon, topic);
    but.append(icon2);
    header.append(div, but);
    document.body.appendChild(header);

}

export default header;
