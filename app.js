

var express = require("express");
var app = express();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var assert = require('assert');// for testing connection with db cause error or not
var path = require("path"); // path to render express file
var USer = require('./places')
var User_Data = require('./register_Schema') ;
var morgan = require('morgan')
var cookieParser = require('cookie-parser');
var session = require('express-session')
const port = process.env.PORT || 8000;
// cookie code
app.use(cookieParser("There is a Secret"));
// Authentication BCrypt
var bcrypt = require('bcrypt')

// session code
var sessionOptions = {secret: 'ThisIsNotASecret',resave:false,saveUninitialized:false}
app.use(session(sessionOptions))
// Middleware which give all the information of url at run time
// app.use(morgan('tiny'));

var bodypar = require('body-parser')

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({extended:true})); // used to convert incoming data into JSON data
app.set("view engine","ejs"); // use to view ejs file without using ejs extension
app.use(express.static(__dirname + '/public'));        // used to view css file in ejs file 

// Database connection
var MongoClient = require('mongodb').MongoClient;
// const { eventNames } = require("npm");
// const { error } = require("console");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology' , true);
mongoose.connect('mongodb://localhost:27017/Minor_Project?readPreference=primary&ssl=false');


var url = "mongodb://localhost:27017/";


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Minor_Project");
//   var myobj = { 
//     name : "DB Mall",
//     city : "Bhopal",
//     State : "Madhya Pradesh",
//     history : `Birla Mandir also known as Lakshami Narayan temple is one of the must places to visit when in Bhopal .It is perched atop the Arrera hills.
// It's garbhagriha houses elegant marble statues of Lord Narayan and Goddess Laxmi.
// A very beautiful temple on a very good location. Behind the temple, you will have a glimpse of beautiful lower lake. There is a small garden beside the main template where you can sit an relax. There is also a small museum in the temple premises.
// It offers amazing views of the city. The temple premises are quite clean and peaceful. The temple closes in the afternoon between 12-4 pm. Photography is not allowed inside the temple.
// `,
//     about : `Birla Mandir also known as Lakshami Narayan temple is one of the must places to visit when in Bhopal .It is perched atop the Arrera hills.
// It's garbhagriha houses elegant marble statues of Lord Narayan and Goddess Laxmi.
// A very beautiful temple on a very good location. Behind the temple, you will have a glimpse of beautiful lower lake. There is a small garden beside the main template where you can sit an relax. There is also a small museum in the temple premises.
// It offers amazing views of the city. The temple premises are quite clean and peaceful. The temple closes in the afternoon between 12-4 pm. Photography is not allowed inside the temple.
// `,
//     timing : '2 pm to 3 pm',
//     type : 'city for all'
//    };
//   dbo.collection("places").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });



var pageTitle = "Mid Way Guide";

USer.find({},function(err,places){
  if(err) console.warn(err);

  // console.warn(places[0].name);
})

var verify = (req,res,next) =>{
  var { pasword } = req.query;
  console.log("yes you are right")
     if(pasword == 'hacker'){
       console.log(password)
       next()
     }
    //  res.send("Enter password to react at website")
    //  throw new Error('Hey error is there');
    
  }

  
// Index Page

app.get('/session',(req,res)=>{
  if(req.session.count){
    req.session.count+=1;
  }
  else{
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`)
})


app.get('/', (req,res) => {
  console.log("=======");
  // res.send("yeah u r a hacker")
   pageTitle = "Mid Way Guide | Home"
   res.cookie('Site Name','Mid Way Guide',{signed:true})
  res.render('index',{title : pageTitle});
  
})
// Register page route

app.get("/map",(req,res)=>{
  pageTitle = "Map | Mid Way Guide";
  res.render('map',{title : pageTitle});
})
app.get("/culture",(req,res)=>{
  pageTitle = "Culture | Mid Way Guide";
  res.render('culture',{title : pageTitle});
})
app.get("/wildlife",(req,res)=>{
  pageTitle = "WildLife | Mid Way Guide";
  res.render('wildlife',{title : pageTitle});
}
)
app.get("/nature",(req,res)=>{
  pageTitle = "Nature | Mid Way Guide";
  res.render('nature',{title : pageTitle});
})
app.get("/adventure",(req,res)=>{
  pageTitle = "Adventure | Mid Way Guide";
  res.render('adventure',{title : pageTitle});
})
app.get("/reccom",(req,res)=>{
  pageTitle = "Recommendation | Mid Way Guide";
  res.render('reccom',{title : pageTitle});
})
app.get("/heritage",(req,res)=>{
  pageTitle = "Heritage | Mid Way Guide";
  res.render('heritage',{title : pageTitle});
})



// Bhopal page
app.get("/bhopal",(req,res)=>{
      res.render("Bhopal");
})



var name;
app.post('/search',function(req,res){
  
   name = req.body.search;
  //  console.warn(name);
   res.redirect('search')
})

app.get('/places/:c',function(req,res){
  // console.log("hiiiiiiiiiiiiiiiiiii");
  var h3 = "";
  var i = req.params.c;
pageTitle = "Mid Way Guide | "+i; 
var regex = new RegExp(i,'i');
    // console.log(regex);
    const arr = [];    
    const arr1= [];
    if(i == "Bhopal"){
      h3 = "Capital of M.p. and the city of lake";
    }else{
      h3 = "";
    }
 
    USer.find({city : regex}).then((result) =>{
      // res.json(result);
  var obj = result;
  obj.map(ele => {
    ele.name
  arr1.push(ele)
  });
  // arr1.forEach(ele => console.log("QQQQQQQQQQQQ"+ele.name)); 
  
  })
  

    USer.find({name : regex}).then((result) =>{
            // res.json(result);
        var obj = result;
        obj.map(ele => {
          ele.name
        arr.push(ele)
        });
        // arr.forEach(ele => console.log("after"+ ele.header_image)); 
        res.render('place', {title : pageTitle,pla : arr, h3tag : h3,related : arr1});
   })
   
   //  res.render('place', {title : pageTitle});
})

app.get("/search",function(req,res,next){
  pageTitle = "Mid Way Guide | Search"
 console.log(name,"--------")
  const arr = [];
  var searchcity = name;
  // console.log("---",searchcity);
  if(searchcity != ""){
    var regex = new RegExp(searchcity,'i');
    // console.log(regex);
    
  
    USer.find({name : regex}).then((result) =>{
            // res.json(result);
            
        var obj = result;
        obj.map(ele => {
          ele.name
        arr.push(ele.name)
        });
        // arr.forEach(ele => console.log("after"+ele)); 
        res.render('search',{sea : arr, title : pageTitle})
   })   
      }else{
        arr.push("Search not found");
        res.render('search',{sea : arr, title : pageTitle})
    
  }
  // console.log("get "+searchcity);
  
})

app.get("/register",function(req,res){
   pageTitle = "Register | Mid Way Guide";
    res.render('register',{title : pageTitle});
    
  });  


app.get("/result",function(req,res){
    res.render('result',{fullname:name, username : user, email : email , phone : phone, dob : dob});
    
  });

app.get("/login",function(req,res){
  pageTitle = "Login | Mid Way Guide";
    res.render("login", {title : pageTitle});
})


app.post('/login', async (req,res)=>{
  const {Username , password} = req.body;
  let name="" ;
  let pass = "";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Minor_Project");
  var mysearch = {
    Username : Username
  }
  const data = dbo.collection("User").findOne(mysearch).then(result =>{
    return result
  })
  data.then(async innerData=>{
      const user =await bcrypt.compare(password,innerData.Password)
      // console.log(password,"=====",innerData.Password,"=======",user);
    if( user ){
        res.send("You Loged In Successfully");
    }else{
        res.send("Incorrect Password")
    }
  })
})
 
})

app.post("/register", async function(req,res,next){
  const {fullname , Username, email, password} = req.body;

  const salt = await bcrypt.genSalt(12);
  const hash_conv = await bcrypt.hash(password,salt);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Minor_Project");
  var myobj = { 
    FullName : fullname, 
Username : Username,
Password : hash_conv,
Email    : email
};

  dbo.collection("User").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });


});
  
    // res.render('result' ,{data : dataEnter});
    res.send('Data Enter By U is stored in Database.')
    // console.log(username + " yes the input is correct."); 
})
app.get('/err',(req,res)=>{
  requestAnimationFrame.fly();
})



app.use((err,req,res,next)=>{
  console.log("*************ERROR************")
  next(err);
  // res.status(500).send("Hey error is here");
})

app.listen(port,function(){
    console.log("Running at port 3009");
})