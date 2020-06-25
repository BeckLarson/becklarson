$(function () {
    ChangePage("portfolio");
    $('.nav-link').click(PageManager);
});

function PageManager(event) {
    let page = event.target.innerText;
    switch (page) {
        case "About":
            $('.portfolio').removeClass('active');
            $('.about').addClass('active');
            $('.unity').removeClass('active');
            $('.login').removeClass('active');
            ChangePage(page);
            break;
            case "Portfolio":
                $('.about').removeClass('active');
                $('.portfolio').addClass('active');
                $('.unity').removeClass('active');
                $('.login').removeClass('active');
                ChangePage(page);
                break;
            case "Products":
                $('.about').removeClass('active');
                $('.portfolio').removeClass('active');
                $('.unity').removeClass('active');
                $('.unity').addClass('active');
                $('.login').removeClass('active');
                ChangePage(page);
                break;
            case "Login":
            $('.about').removeClass('active');
            $('.portfolio').removeClass('active');
            $('.unity').removeClass('active');
            $('.login').addClass('active');
            ChangePage(page);
            $(function(){ // let page load before setting listeners
                $(".btn-primary").click(function(event){
                    event.preventDefault();//prevent default action
                    LoginController();
                  });
                console.log('trigger set');
            });
            break;
    }

}

function ChangePage(page) {
    page = page.toLowerCase();
    $.ajax({
        type: "GET",
        url: page + ".html",
        dataType: "html",
        success: function (msg) {
            $('.display').html(msg);
        }
    });

}

function LoginController(){
    console.log('Attempted login...Unauth');
    alert("You are not an Admin!");
}
