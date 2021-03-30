const  express =require ('express');
const  mongoose =require ('mongoose')
const cors =require('cors')
const bodyParser=require('body-parser')
const route =require("./routes/router.js")
const app =express()
const port = process.env.port || 3002


app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
    res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    next()
})

// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
// header('Access-Control-Allow-Headers: *');
// header('Access-Control-Max-Age: 1728000');
// header("Content-Length: 0");
// header("Content-Type: text/plain"); 
 
app.use(bodyParser())
app.use(cors());

app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
    res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    next();
  
  })
app.use('/',route)

app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
    res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    next();
  })

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin: *");
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    res.header('Access-Control-Allow-res.Headers: *');
    res.header('Access-Control-Max-Age: 1728000');
    res.header("Content-Length: 0");
    res.header("Content-Type: text/plain"); 
      next()
   })


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:qasim321@cluster0.9yg5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true})

mongoose.connection.once('open',()=>{
    console.log('mongoose db is working properly yettt')
   // addUser()
})
.on("error",()=>{
    console.log('there is a mongo Db error')
})

  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'))
  }
    



app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
