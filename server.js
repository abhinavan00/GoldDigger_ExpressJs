import express from "express";

const PORT = 8000
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello From Server!'})

    console.log('Working!')
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))