import express from 'express'

import { livePriceController } from '../controllers/livePriceController.js'

export const livePriceRouter = express.Router()

livePriceRouter.get('/liveprice', livePriceController)