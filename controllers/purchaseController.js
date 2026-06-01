import { addNewInvestment } from "../utils/addNewInvestment.js"
import { sanitizeJSONBody } from "../utils/sanitizeJSONBody.js"

export async function purchaseController(req, res) {
    const rawBody = req.body
    const cleanBody = sanitizeJSONBody(rawBody)
    await addNewInvestment(cleanBody)

    res.json(cleanBody)
}