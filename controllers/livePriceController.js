import { prices } from "../data/prices.js"

export function livePriceController(req, res) {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * prices.length)

        res.write(
            `data: ${JSON.stringify({
                event: 'price-update',
                price: prices[randomIndex]
            })}\n\n`
        )
    }, 3000)
}