const express = require('express')
const app = express()
 
// adding middleware
app.set("view engine", "ejs"); // setting up templating engine

//          for images:
// app.use(express.static('./public'));
// in public, create another folder called [css]
// then create a file in [css] that coresponds to the file name
//      (copy the raw code from github to have it all show up)

app.get('/about', function (req, res) {
  res.render('about');
})
app.get('/projects', function (req, res) {
    res.render('projects');
  })
  





 
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
});