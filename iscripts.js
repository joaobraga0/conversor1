const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
       const inputCurrencyValue = document.querySelector('.input-currency').value
       const currencyValueToCovert = document.querySelector('.currency-value-to-convert')
       const CurrencyValueCoverted = document.querySelector('.currency-value')


       console.log(currencySelect)
       const dolarToday = 5.2
       const euroToday = 6.2
       const libraToday = 7.7
       const bitcoin = 2496.96
       const realToday = 0.18

       if (currencySelect.value == 'real') {

              CurrencyValueCoverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                     style: 'currency',
                     currency: 'BRL',
              }).format(inputCurrencyValue / realToday)
       }
       if (currencySelect.value == 'dolar') {

              CurrencyValueCoverted.innerHTML = new Intl.NumberFormat('en-US', {
                     style: 'currency',
                     currency: 'USD',
              }).format(inputCurrencyValue / dolarToday)
       }
       if (currencySelect.value == 'euro') {

              CurrencyValueCoverted.innerHTML = new Intl.NumberFormat('de-DE', {
                     style: 'currency',
                     currency: 'EUR',
              }).format(inputCurrencyValue / euroToday)

       }
       if (currencySelect.value == 'libra') {

              CurrencyValueCoverted.innerHTML = new Intl.NumberFormat('GBP', {
                     style: 'currency',
                     currency: 'GBP',
              }).format(inputCurrencyValue / libraToday)

       }
       if (currencySelect.value == 'bitcoin') {

              CurrencyValueCoverted.innerHTML = new Intl.NumberFormat('de-DE', {
                     style: 'currency',
                     currency: 'BTC',
              }).format(inputCurrencyValue / bitcoin)

       }

       currencyValueToCovert.innerHTML = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
       }).format(inputCurrencyValue)

       currencyValueToCovert.innerHTML = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
       }).format(inputCurrencyValue)

}


function changeCurrency() {

       const currencyName = document.getElementById('currency-name')
       const currencyImage = document.querySelector('.currency-img')
       

       if (currencySelect.value == 'dolar') {
               currencyName.innerHTML = 'Dólar americano'
               currencyImage.src = './assets/dolar.png'
       }
        if (currencySelect.value == 'euro') {
                currencyName.innerHTML = 'Euro'
               currencyImage.src = './assets/euro.png'
        }
       if (currencySelect.value == 'libra') {
               currencyName.innerHTML = 'Libra'
               currencyImage.src = './assets/libra 1.png'
       }
       if (currencySelect.value == 'bitcoin') {
               currencyName.innerHTML = 'Bitcoin'
               currencyImage.src = './assets/bitcoin 1.png'

        }
        if (currencySelect.value == 'real') {
               currencyName.innerHTML = 'Real'
               currencyImage.src = 'assets/brasil .png'
        }

              convertValues()
       


}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)


