const investmentForm = document.getElementById('investment-form')
const investmentAmount = document.getElementById('investment-amount')
const priceDisplay = document.getElementById('price-display')
const outputsDialog = document.getElementById('outputs')
const investmentSummary = document.getElementById('investment-summary')
const dialogCloseBtn = document.getElementById('dialog-close-btn')

investmentForm.addEventListener('submit', async function(e) {
    e.preventDefault()

    const amountPaid = Number(investmentAmount.value)
    const pricePerOz = Number(priceDisplay.textContent)
    const goldSold = Number(amountPaid/pricePerOz).toFixed(4)
    
    const data = {
        date: new Date().toISOString(),
        amount_paid: `￡${amountPaid}`,
        price_per_Oz: `￡${pricePerOz}`,
        gold_sold: `${goldSold} Oz`
    }

    const res = await fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const resData = await res.json()

    console.log(resData)

    outputsDialog.showModal();
    investmentSummary.textContent = `
        You just bought ${resData.gold_sold} of gold for ${resData.amount_paid}. \n You will receive documentation shortly.
    `

})

dialogCloseBtn.addEventListener('click', function(e) {
    outputsDialog.close()
})