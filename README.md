Welcome to fully functional MongoDB Database Application

This data base is used to get, post, delete, and update an api given the correct exection of the code. 
The Database deals with resturants, happy hour menus for the resturants, and also some reviews. The data is not entirely accurate and is repetitive for the happy hour menus. 

There are paramaters for indexes and vailidation in the HappyHourMenu.js models file, as well as some index created in the resturants model file

I also only used mongoose. So lets go!!


For each data collection you are able to Seed the Data to MongoDb by using the route /api/resturants||happyhour||reviews/seed
For each data collection you are able to retrieve all of what is in the data collection by using the route api/resturants||happyhour||reviews
For each data collection you are able to get one single item of the data by using the special _id mongoDb gives you by using this route api/resturants||happyhour||reviews/_id(the actual id of the document)
For each data collection you are able to add in or create a new docuement as long as you follow the models for each data collection. You can use his route to do that api/resturants||happyhour||reviews/ 
For each data collection you are able to delete a key or the whole document by using this route api/resturants||happyhour||reviews/_id(the actual id of the document). and using the appropriate syntax
lastly,
For each data collection you can update a document by going to api/resturants||happyhour||reviews/_id(the actual id of the document) and using the apporpriate syntax. 


to use these features I would use postman!!

