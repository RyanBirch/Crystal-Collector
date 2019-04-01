let randomNumText = document.getElementById('random-number'),
    winsText = document.getElementById('wins'),
    lossesText = document.getElementById('losses'),
    totalScoreText = document.getElementById('total-score')


// initial game state

// random number is between 19 and 120
let randomNum = Math.floor(Math.random() * 102) + 19,
    wins = 0,
    losses = 0,
    totalScore = 0

// crystal values are between 1 and 12
let crystal_1 = Math.floor(Math.random() * 12) + 1,
    crystal_2 = Math.floor(Math.random() * 12) + 1,
    crystal_3 = Math.floor(Math.random() * 12) + 1,
    crystal_4 = Math.floor(Math.random() * 12) + 1

randomNumText.textContent = randomNum
winsText.textContent = wins
lossesText.textContent = losses
totalScoreText.textContent = totalScore 


$('.c1').on('click', function() {

})

$('.c1').on('click', function() {

})

$('.c1').on('click', function() {

})

$('.c1').on('click', function() {

})
