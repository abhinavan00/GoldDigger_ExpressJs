const eventSource = new EventSource('http://localhost:8000/api/liveprice')

const priceDisplay = document.getElementById('price-display')

eventSource.onmessage = (event) => {
    console.log(event.data)
}

eventSource.onerror = (err) => {
    console.log(err.data)
}