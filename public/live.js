const eventSource = new EventSource('http://localhost:8000/api/liveprice')

const priceDisplay = document.getElementById('price-display')
const connectionStatus = document.getElementById('connection-status')

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    const price = data.price

    connectionStatus.textContent = `Live Price 🟢`
    priceDisplay.textContent = price
}

eventSource.onerror = (err) => {
    connectionStatus.textContent = `Offline 🔴`
    priceDisplay.textContent = `----.--`
}