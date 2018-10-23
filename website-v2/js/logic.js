function changeBackground(){
 document.getElementById('portfolio-background').style.backgroundImage = "url('https://image.pushauction.com/0/0/53f56ff7-cbf4-44a9-9556-c7f7c1462512/04b49504-b58e-49b9-957b-1a81c3cef1d9.jpg')";
 document.getElementById('portfolio-background').style.backgroundSize = "cover";
}

function createPageUrl(){
    let url = document.getElementById('url').value;
    let http = new XMLHttpRequest();
  try {
    http.open('HEAD', url, false);
    http.send();
  } catch (error) {
      console.log("An error occured: " + error);
  }
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

function createPageTitle(){
    let title = document.getElementById('title').value;
    if(title == ""){
        title = "Create a Portfolio!";
    }
    document.getElementById('newTitleText').innerText = title;

}

function createPageProfilePic(){
    let url = document.getElementById('imgUrl').value;
    if(url == ""){
       url = 'https://www.shareicon.net/download/2016/07/26/801997_user_512x512.png';
    }
    document.getElementById('imgId').src= ''+url;
}

function createPageIntro(){
    let intro = document.getElementById('introduction').value;
    if(intro == ""){
        intro = "Put your introduction here!";
    }
    document.getElementById('intro-text').innerText = intro;
}

function educationController(){
    let key = event.target.id;
    switch (key) {
        case 'school-input':
            key = document.getElementById(key).value;
            if(key == ""){
                document.getElementById('school').innerText = 'School here!';
            }else{
                document.getElementById('school').innerText = key;
            }
            break;
        case 'degree-input':
        key = document.getElementById(key).value;
        if(key == ""){
            document.getElementById('degree').innerText = 'Degree here!';
        }else{
            document.getElementById('degree').innerText = key;
        }
            break;
        case 'gpa-input':
        key = document.getElementById(key).value;
        if(key == ""){
            document.getElementById('gpa').innerText = 'GPA here!';
        }else{
            document.getElementById('gpa').innerText = key;
        }
            break;
    }
}