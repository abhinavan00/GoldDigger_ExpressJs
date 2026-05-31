import { addNewInvestment } from "../utils/addNewInvestment.js"

export async function purchaseController(req, res) {
    const rawBody = req.body
    await addNewInvestment(rawBody)

    res.json('Working')
}