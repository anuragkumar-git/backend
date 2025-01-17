// //Creating server using http------------------------------

// // require ('http') // inbuilt package 
// const http = require('http')

// //server creation
// const server = http.createServer(function (req, res) {
//     // console.log(req);
//     // console.log(req.url);
//     switch (req.url) {
//         case '/login':
//             res.end('login page');
//             break;
//         case '/contact':
//             res.end('654 58 587 88');
//             break;
//         case '/signup':
//             res.end('Sign Up page');
//             break;
//         default:
//             res.end('Home Page\n routs:\n -login\n -signup\n -contact ');
//             break;
//     }
//     // res.end('Hello world') //end:Default response
// })

// //Starting server
// server.listen(3000)

// //? npx nodemon <file name>[keep restarting server after a change in file]
//----------------------------------------------------------

//Using express
//? npm i express

// const express = require ('express')
// const app = express()

// app.get('/', (request, response)=>{
//     response.send('HomePage')
// })
// app.get('/about',function(req, res){
//     res.send('This is about page')
// })
// app.get('/contact', (requwst, responss) =>{
//     responss.send('987 456 3210')
// })
// app.listen(3000)
//----------------------------------------------------------
//! try body transparancy


//Randering html using ejs(view engine) in express
//# npm i ejs

// const express = require('express')
// const app = express()

// app.listen(3000)

// app.set('view engine', 'ejs')

// // app.get('/', (request, response)=>{
// //     response.send('Home Page\n routs:\n /about \n /contact')
// // })
// app.get('/', (request, response)=>{
//     response.render('index')  //rendering a page 
// })


// app.get('/about', (req, res)=>{
//     res.send('About Page')
// })

// app.get('/contact', (req, res)=>{
//     res.send('Contact no. 9875 4523 21')
// })

//---------------------------------------------------------------
//? middleware: before response
//npm i morgan 

// const express = require('express')
// const morgan = require('morgan')
// const app = express()

// app.listen(3000)

// app.set('view engine', 'ejs')
// //third party middleware
// app.use(morgan('dev')) //can't be used for specific routs

// //custom middleware for all routs
// app.use((req, res, next)=>{
//     console.log('For all custom, -middleware');
//     next()

// })

// //Custom middleware for spacific rout
// app.get(
//     // rout
//     '/',
//     //Coustom rout for middleware
//     (req, res, next) => {
//         console.log('Custom middleware for homePage');
//         next()
//     },
//     //response of requested rout
//     (req, res) => {
//         res.render('index')
//     }
// )


// app.get('/about', (req, res) => {
//     res.send('About us')
// })

// app.get('/contact', (requestt, responss) => {
//     responss.send('Contact no. +91 9876 9875 01')
// })

//-------------------------------------------------------------------
// Connecting with mongo, creating schema

const express = require('express')
const app = express()
app.listen(3000)

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Wellcome home')
})

app.get('/login', (req, res)=>{
    res.render('form')
})

app.post('/getFormData', (req, res)=>{
    console.log(req.body);
    res.send('Form submitted')
})