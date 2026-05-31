import express from 'express'

import { purchaseController } from '../controllers/purchaseController.js'

export const purchaseRouter = express.Router()

purchaseRouter.post('/', purchaseController)
