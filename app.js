const express=require('express')

const app=express()



app.listen(3000, () => {
    console.log("Server up and running on 3000");
})


app.get('/', (req, res) => {
    res.send("Index hit!");
})