var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals={
    
    'artical-One':{
        
        title:"Artical One Arul jobin",
        heading:"Artical One",
        date:"Aug 19 2017",
        content:` 
            <p>
                This is a the first artical
            </p>
            
            <p>
                This is a the first artical
            </p>
            
            <p>
                This is a the first artical
            </p>`
    },
    'artical-Two':{ 
        
        title:"Artical Two Arul jobin",
        heading:"Artical Two",
        date:"Aug 19 2017",
        content:` 
            <p>
                This is a the 2nd artical
            </p>
            
            <p>
                This is a the 2nd artical
            </p>
            
            <p>
                This is a the 2nd artical
            </p>`
        
    },
    'artical-Three':{
        
        title:"Artical Three Arul jobin",
        heading:"Artical Three",
        date:"Aug 19 2017",
        content:` 
            <p>
                This is a the 3rd artical
            </p>
            
            <p>
                This is a the 3rd artical
            </p>
            
            <p>
                This is a the 3rd artical
            </p>`
        
    }
};

function createTemplate(data){

var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemp=`

<html>
    
    <head>
        <title>
            ${title}
        </title>
        
        <link href="/ui/style.css" rel="stylesheet" />
    
        </head>
        
        <body>
            
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                
                <hr/>
                
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

return htmlTemp;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName',function(req,res){
    var articalName=req.parmas.articalName;
    res.send(createTemplate(articals[articalName]));
});

app.get('/artical-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/artical-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
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
