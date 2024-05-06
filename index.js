const express = require('express');
const app = express();

require ('dotenv').config();
const restaurants = require('./routes/resturants.js');
const reviews = require('./routes/reviews.js')
const HappyHour = require('./routes/HappyHourMenu.js')



//middleware
app.use(express.json())
app.use((req, res, next)=>{
   console.log(req.path, req.method)
   next();

})


app.get('/', (req, res) => {
    res.send('Welcome! If you want to access any of the routes, please use the URL: /users, /meals, or /comments');
  });

  app.use('/api/resturants', restaurants);
  app.use('/api/reviews', reviews);
  app.use('/api/happyhourf', HappyHour);

  app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:`, process.env.PORT)
  })
