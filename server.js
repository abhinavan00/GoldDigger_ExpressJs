import express from "express";
import { livePriceRouter } from "./routes/livePrice.js";

const PORT = 8000
const app = express()

app.use(express.static('public'))

app.use('/api', livePriceRouter)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))