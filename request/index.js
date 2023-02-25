import express from "express"

const app = express()

app.get('/', (req, res) => {
    // res.send("Hello, world!")
    // res.send([1,2,3,4,5])
    res.send({
        name: 'zs',
        age: 10,
    })
})

app.listen((5000), () => {
    console.log('Sever is listening on port 5000');
})