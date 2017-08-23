var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    `article-one`:  {    
        title: "Article One | Nihal Chandra",
        heading: "Article One",
        date: "Aug 22,2017",
        content:    `
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>`
    },
    `article-two`: {
        title: "Article Two | Nihal Chandra",
        heading: "Article Two",
        date: "Aug 23,2017",
        content:    `
            <p>
                This is the content for my second article.
            </p>`
    },
    `article-three`: {
        title: "Article Three | Nihal Chandra",
        heading: "Article Three",
        date: "Aug 24,2017",
        content:    `
            <p>
                This is the content for my third article.
            </p>`
    }
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate =`
    <html>
        <head>
            <title>
                Article One | Nihal Chandra
            </title>
            <meta name="viewport" content="width-device-width, initial-scale-1"/>
             <link href="/ui/style.css" rel="stylesheet" />
            <styLe>
                
            </styLe>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    Article One
                </h3>
                <div>
                    Aug 22,2017
                </div>
                <div>         
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    var articleName = req.params.ariticleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
