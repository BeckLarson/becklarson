$(function () {
    console.log('Loading in single page application');
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
    page = page.toLowerCase();
    console.log('Page changed to: ' + page);
    $.ajax({
        type: "GET",
        url: page + ".html",
        dataType: "html",
        success: function (msg) {
            $('.display').html(msg);
        }
    });
}
