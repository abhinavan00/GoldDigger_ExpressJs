const investmentForm = document.getElementById('investment-form')
const investmentAmount = document.getElementById('investment-amount')

investmentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const data = {
        "date": new Date().toISOString(),
        "amount-paid": `￡${investmentAmount.value}`,
        "price per Oz": "£2009.57",
        "gold sold": `${(Number(investmentAmount.value)/2009.57).toFixed(4)} OZ`
    }

    console.log(data)

})