const express = require("express");
const app = express();
let lip = require("lorem-ipsum")

let output = lip({
        count: 3
      , units: 'paragraphs'
      , sentenceLowerBound: 5 
      , sentenceUpperBound: 15  
      , paragraphLowerBound: 3  
      ,paragraphUpperBound: 4  
      , format: 'html'
});


app.get("/lorem", function(req, res) {
    res.send(output);
});

app.get("/lorem/:pcount", function(req, res) {
    

    let secound = lip({
        count: req.params.pcount
      , units: 'paragraphs'
      , sentenceLowerBound: 5 
      , sentenceUpperBound: 15  
      , paragraphLowerBound: 3  
      ,paragraphUpperBound: 4  
      , format: 'html'
});

res.send(secound);
    
});



app.listen(3000, function () {
    console.log("whats up Maud");
})
