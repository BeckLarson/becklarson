var express = require('express');
var app = express();

let port = 3000;
app.listen(port, ()=> console.log('Portfolio King ready on port: ' + port));

app.get('',function(req,resp,next){
    resp.sendFile('/Users/becklarson-Work/Desktop/my_git_repos/website/website-v2/index.html');
});
app.use('/pages', express.static('pages'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));