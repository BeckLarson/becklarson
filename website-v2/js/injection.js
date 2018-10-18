function eventController() {
    let eventId = event.target.id;
    switch (eventId) {
        case 'home':
            document.getElementById(eventId).style.backgroundColor = 'blue';
            document.getElementById(eventId).style.boxShadow = '5px 5px 5px 3px black';
            home();
            document.getElementById('create-btn').removeAttribute('style');
            document.getElementById('login').removeAttribute('style');
            document.getElementById('search').removeAttribute('style');
            document.getElementById('register').removeAttribute('style');
            break;

        case 'login':
            document.getElementById(eventId).style.backgroundColor = 'blue';
            document.getElementById(eventId).style.boxShadow = '5px 5px 5px 3px black';
            loginRef();
            document.getElementById('create-btn').removeAttribute('style');
            document.getElementById('home').removeAttribute('style');
            document.getElementById('search').removeAttribute('style');
            document.getElementById('register').removeAttribute('style');
            break;

        case 'search':
            document.getElementById(eventId).style.backgroundColor = 'blue';
            document.getElementById(eventId).style.boxShadow = '5px 5px 5px 3px black';
            search();
            document.getElementById('create-btn').removeAttribute('style');
            document.getElementById('login').removeAttribute('style');
            document.getElementById('home').removeAttribute('style');
            document.getElementById('register').removeAttribute('style');
            break;

        case 'register':
            register();
            document.getElementById('create-btn').removeAttribute('style');
            document.getElementById('login').removeAttribute('style');
            document.getElementById('search').removeAttribute('style');
            document.getElementById('home').removeAttribute('style');
            break;
        case 'create-btn':
            document.getElementById(eventId).style.backgroundColor = 'blue';
            document.getElementById(eventId).style.boxShadow = '5px 5px 5px 3px black';
            create();
            document.getElementById('login').removeAttribute('style');
            document.getElementById('search').removeAttribute('style');
            document.getElementById('home').removeAttribute('style');
            break;
        case 'create':
            document.getElementById('create-btn').style.backgroundColor = 'blue';
            document.getElementById('create-btn').style.boxShadow = '5px 5px 5px 3px black';
            create();
            document.getElementById('login').removeAttribute('style');
            document.getElementById('search').removeAttribute('style');
            document.getElementById('home').removeAttribute('style');
            break;
    }
}
function home() {
    let section = document.getElementById('page');
    document.getElementById('content').innerHTML = '';
    fetch('pages/home.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
        document.getElementById("myPage").style.backgroundImage = "url('../images/white-brick-wall.jpg')";
        document.getElementById("create").addEventListener('click', eventController);
    });
}
function create() {
    let section = document.getElementById('page');
    fetch('pages/create.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
        document.getElementById("myPage").style.backgroundImage = "url('../images/white-brick-wall.jpg')";
        changeBackground();
    });
}
function loginRef() {
    console.log("login hit");
    login();
}
function search() {
}
function register() {
    let section = document.getElementById('content');
    fetch('pages/register.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
    });
}  