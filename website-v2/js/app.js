window.onload = function foo() {
    login();
    navbar();
    document.getElementById('nav').addEventListener('click', eventController);
}

function login() {
    document.getElementById("myPage").style.backgroundImage = "url('../images/computer-device-electronics-884453.jpg')";
    let section = document.getElementById('content');
    document.getElementById('page').innerHTML = '';
    fetch('pages/login.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
        document.getElementById('register').addEventListener('click', eventController);
    });
}
function navbar() {
    let section = document.getElementById('nav');
    fetch('pages/navbar.html').then((resp) => {
        return resp.text();
    }).then((text) => {
        section.innerHTML = text;
        document.getElementById('login').style.backgroundColor = 'blue';
        document.getElementById('login').style.boxShadow = '5px 5px 5px 3px black';
    });
}

 