const exprress = require("express")

const app = exprress();

app.use(exprress.json());
app.use(exprress.urlencoded({extended:false}));



app.use("/", (req, res, next)=> {
    res.send(
       `
        <h1>New Camping Places</h1> 
        <form action="/campinPlace" method="POST">
         <input type="select" placeholder="images"  />
        <img src={}>
        <p >Name</p>
        <input type="text" name="name" placeholder="name"/>
        <p>License</p>
        <input type="text" name="Licensce"/>  <br> 
        <p>Link</p>
        <input type="text" name="Link" placeholder="url"/>  <br> 
        <p>Date</p>
        <input type="date" name="date"/>    
        <p>Location</p>
        <input type="text" name="location"/>  <br>  
        
        <p>Send</p>
        <input type="submit" value= "submit"/>  <br>
        </form>
        
        `
    );
});


app.use("/campinPlace", (req, res, next) => {
    console.log(req.body);
    res.end('<h1>Camping Place HomePage</h1>')
    res.redirect("/");
});



// app.use("/", (req, res, next) => {
//     console.log("Midlwaves");
//     res.send("<h1>Bismillah</h1>")
//     next();
// });


const PORT = process.env.PORT  || 5051;


app.listen(PORT, ()=> {
    console.log('Running:', PORT);
});



// app.use("/students", (req, res, next) => {
//     console.log(req.body);

// });
