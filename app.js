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
            ChangePage(page);
            break;
        case "Portfolio":
            $('.about').removeClass('active');
            $('.portfolio').addClass('active');
            ChangePage(page);
            break;
    }

}

function ChangePage(page) {
    console.log('Page changed ' + page);
    $.ajax({
        type: "GET",
        url: page + ".html",
        dataType: "html",
        success: function (msg) {
            $('.display').html(msg);
        }
    });
}
