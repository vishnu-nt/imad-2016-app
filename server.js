var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 var articles={
                'article-one':{
            title:'article one| me',
            heading:'article one',
            date:'sep 5',
            content: `<p>this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the         contentthis is the content
                  </p>
                  <p>
                  this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content
                  </p>
                  <p>
                  this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content
                          </p>`
                },
                'article-two':{
                    title:'article two| me',
                    heading:'article two',
                    date:'sep 9',
                    content: `<p>this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the         contentthis is the content
                          </p>`
                    
                },
                'article-three':{
                    title:'article three| me',
                    heading:'article three',
                    date:'oct 9',
                    content: `<p>this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the         contentthis is the content
                          </p>`
                    },
};


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
        </head>
  <body>
      <div class="container">
          <div>
              <a href='/'>Home</a>
          </div>
          <br/>
          <h3>
              ${heading}
          </h3>
          <div>
             ${date}
          </div>
          <div>
              ${content}
          </div>
          </div>
  </body>
</html>
`;
return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]))});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
