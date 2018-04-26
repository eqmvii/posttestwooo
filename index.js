var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.send(`
        <html>
            <head>
                <title>Hello</title>
            </head>
            <body>
                <h1>Welcome to page!</h1>
                <form action="/ratemyname" method="post">
                First name:<br>
                <input type="text" name="firstname">
                <input type="submit" value="Submit">
                </form>
            </body>
        </html>
    `
    );
});

// Create New Characters - takes in JSON input
app.post("/ratemyname", function(req, res) {
    console.log("Post request heard!");
    console.log(req.body);
    var userName = req.body.firstname;

    res.send(`
    <html>
        <head>
            <title>Hello ${userName}</title>
        </head>
        <body>
            <h1>Hello ${userName}, welcome to page!</h1>
        </body>
    </html>
`
);



    // var newcharacter = req.body;

    // console.log(newcharacter);

    // characters.push(newcharacter);

    // // We then display the JSON to the users
    // res.json(newcharacter);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
