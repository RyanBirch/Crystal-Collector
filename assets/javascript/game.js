$(document).ready(function() {

  let $targetNumText = $('#target-number'),
      $winsText = $('#wins'),
      $lossesText = $('#losses'),
      $totalScoreText = $('#total-score')
      $alertText = $('#alert')


  // initial game state

  // target number is between 19 and 120
  let targetNum = Math.floor(Math.random() * 102) + 19,
      wins = 0,
      losses = 0,
      totalScore = 0

  // crystal values are between 1 and 12
  let crystal_1 = Math.floor(Math.random() * 12) + 1,
      crystal_2 = Math.floor(Math.random() * 12) + 1,
      crystal_3 = Math.floor(Math.random() * 12) + 1,
      crystal_4 = Math.floor(Math.random() * 12) + 1

  $targetNumText.html(targetNum)
  $winsText.html(wins)
  $lossesText.html(losses)
  $totalScoreText.html(totalScore)


  // resets the game after a win or loss
  function reset() {
    targetNum = Math.floor(Math.random() * 102) + 19
    $targetNumText.html(targetNum)
    totalScore = 0
    $totalScoreText.html(totalScore)
    crystal_1 = Math.floor(Math.random() * 12) + 1
    crystal_2 = Math.floor(Math.random() * 12) + 1
    crystal_3 = Math.floor(Math.random() * 12) + 1
    crystal_4 = Math.floor(Math.random() * 12) + 1
  }

  // resets the alert at the beginning of a new game
  function wipeAlert() {
    if (totalScore === 0) $alertText.html('')
  }

  function addToTotal(crystal) {
    totalScore += crystal
    $totalScoreText.html(totalScore)
  }


  $('.c1').on('click', function() {
    wipeAlert()

    totalScore += crystal_1
    $totalScoreText.html(totalScore)
    if (totalScore === targetNum) {
      $alertText.html('You win!')
      reset()
    }
    if (totalScore > targetNum) {
      $alertText.html('You lose :(')
      reset()
    }
  })

  $('.c2').on('click', function() {
    wipeAlert()

    totalScore += crystal_2
    $totalScoreText.html(totalScore)

    if (totalScore === targetNum) {
      $alertText.html('You win!')
      reset()
    }
    if (totalScore > targetNum) {
      $alertText.html('You lose :(')
      reset()
    }
  })

  $('.c3').on('click', function() {
    wipeAlert()

    totalScore += crystal_3
    $totalScoreText.html(totalScore)

    if (totalScore === targetNum) {
      $alertText.html('You win!')
      reset()
    }
    if (totalScore > targetNum) {
      $alertText.html('You lose :(')
      reset()
    }
  })

  $('.c4').on('click', function() {
    wipeAlert()

    totalScore += crystal_4
    $totalScoreText.html(totalScore)

    if (totalScore === targetNum) {
      $alertText.html('You win!')
      reset()
    }
    if (totalScore > targetNum) {
      $alertText.html('You lose :(')
      reset()
    }
  })
})
