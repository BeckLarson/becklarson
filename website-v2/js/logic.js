function changeBackground(){
 document.getElementById('portfolio-background').style.backgroundImage = "url('https://image.pushauction.com/0/0/53f56ff7-cbf4-44a9-9556-c7f7c1462512/04b49504-b58e-49b9-957b-1a81c3cef1d9.jpg')";
 document.getElementById('portfolio-background').style.backgroundSize = "cover";
}

function createPageUrl(){
    let url = document.getElementById('url').value;
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if(url == ""){
        url =  document.getElementById('portfolio-background').style.backgroundImage = "url('https://image.pushauction.com/0/0/53f56ff7-cbf4-44a9-9556-c7f7c1462512/04b49504-b58e-49b9-957b-1a81c3cef1d9.jpg')";
    }
        if(http.status == 404){
            url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Oxygen480-status-image-missing.svg/2000px-Oxygen480-status-image-missing.svg.png";
    }
    document.getElementById('portfolio-background').style.backgroundImage = "url('"+ url +"')";
    document.getElementById('portfolio-background').style.backgroundSize = "cover";
    document.getElementById('portfolio-background').style.backgroundRepeat = "no-repeat";
    document.getElementById('portfolio-background').style.backgroundPosition = "center";
}