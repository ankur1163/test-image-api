var express = require('express');
var app = express();
var request = require('request');
var parser = require('body-parser');
app.use(parser.json());
var path = require('path');
var Search = require('./search');




app.use(express.static(path.join(__dirname, 'views')));

  //sets Iffe to place in diffrent search methods

//Search the results dynamicly by what ever you place into the query
app.get("/api/searchbing/",function(req,response){
  
          var search_Value = req.query.search;
          var numberOf_Results = req.query.results;
          var skip_Results = req.query.skip;
          //set the results dynamicly

          Search.searchImages(search_Value,numberOf_Results,skip_Results,response);
         
         
})


//Search by a specific skip value that will determine the amount of returned values
app.get("/api/returnresults/:search/:skip",function(req,response){
  
          var search_Value = req.params.search;
          var skip_Results = req.params.skip;
          //set the results dynamicly
          
         if(skip_Results == 2 ){
            var numberOf_Results = 10 ;
            Search.searchImages(search_Value,numberOf_Results,skip_Results,response);
          }else if(skip_Results == 3){
            var numberOf_Results = 20 ;
            Search.searchImages(search_Value,numberOf_Results,skip_Results,response);
          }else if(skip_Results == 4) {
             var numberOf_Results = 30 ;
            Search.searchImages(search_Value,numberOf_Results,skip_Results,response);
          }else{
            var noValue = JSON.stringify("sorry please enter a correct value");
            response.json(noValue)
          }
         
})


app.listen(process.env.PORT || 3000);

