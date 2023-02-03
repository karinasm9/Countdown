const daysText = document.querySelector('#days')
const hoursText = document.querySelector('#hours')
const minutesText = document.querySelector('#minutes')
const secondsText = document.querySelector('#seconds')

const newYearsDate = new Date ("02 Feb 2023")

setInterval (() => {
  const currentDate = new Date()
  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor((totalSeconds / 3600) / 24)
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)   
    
  daysText.innerText = addPadStart(days)
  hoursText.innerText = addPadStart(hours)
  minutesText.innerText = addPadStart(minutes)
  secondsText.innerText = addPadStart(seconds) 
},1000) 
  
function addPadStart(value){
  return value < 10 ? `0${value}` : value
}