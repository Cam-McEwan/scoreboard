let homeScoreBtnOne = document.getElementById("home-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function homeplus1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-2")
function homeplus2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-3")
function homeplus3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
let awayScoreBtnOne = document.getElementById("away-1")
let awayStoreEl =document.getElementById("away-score")
let awayScore = 0

function awayplus1(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

function awayplus2(){
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

function awayplus3(){
    awayScore += 3
    awayStoreEl.textContent = awayScore
}