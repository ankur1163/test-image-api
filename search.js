var express = require('express');
var app = express();
var request = require('request');
var parser = require('body-parser');
app.use(parser.json());

var Bing = require('node-bing-api');
({accKey: "7e792dc10eed41b9a079f6d1a30a97bd"})

//this calls your Search methods for bing for searching images.
//you can use this to defined other types of bing searches
   var Search = (function(){
       function searchImages(search_Value,numberOf_Results,skip_Results,response){        
         Bing.images(search_Value, {
         top:numberOf_Results,   // Number of results (max 50) 
         skip:skip_Results   // Skip first 3 result 
         }, function(error, res, body){
             response.json(body)
        });
       }
       return{
        searchImages:searchImages
       }
    })()

module.exports = Search; 