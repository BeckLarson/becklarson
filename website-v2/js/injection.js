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
        document.getElementById('url').addEventListener('change', createPageUrl);
        document.getElementById('title').addEventListener('change', createPageTitle);
        document.getElementById('imgUrl').addEventListener('change', createPageProfilePic);
        document.getElementById('introduction').addEventListener('change', createPageIntro);
        document.getElementById('school-input').addEventListener('change', educationController);
        document.getElementById('degree-input').addEventListener('change', educationController);
        document.getElementById('gpa-input').addEventListener('change', educationController);
        changeBackground();
        document.getElementById("loginBox").innerHTML = "";
    });
}
function loginRef() {
    console.log("login hit");
    login();
}
function search() {
    document.getElementById("myPage").style.backgroundImage = "url('../images/computer-device-electronics-884453.jpg')";
    let section = document.getElementById('content');
    document.getElementById('page').innerHTML = '';
    fetch('pages/search.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
    });
}
function register() {
    let section = document.getElementById('content');
    fetch('pages/register.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
    });
}  