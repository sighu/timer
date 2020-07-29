let finish
let intervalId
let startButton = document.querySelector("#startbutton")
startButton.addEventListener("click", function(){
  startTimer()
})
let stopButton = document.querySelector("#stopbutton")
stopButton.addEventListener("click", function(){
  stopTimer()
})
function startTimer(){
  let second  = document.querySelector("#timeinput").value
  finish = Date.now() + second * 1000
  intervalId = setInterval(remainingTimer, 50)
  startButton.disabled = true
}
function stopTimer(){
  clearInterval(intervalId)
  setDisplay(0)
  startButton.disabled = false
}

function remainingTimer(){
  let remain = finish - Date.now()
  let second = Math.floor(remain / 1000) + 1
  setDisplay(second)
  if(remain <= 0){
    stopTimer()
    alert("時間になりました")
  }
}
function setDisplay(second){
  let countDown = document.querySelector("#countdown")
  countDown.textContent = second
}
