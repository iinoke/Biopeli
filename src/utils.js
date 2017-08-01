/**
 * Utility functions
 */
export default {
  centerGameObjects: (objects) => {
    objects.forEach(function (object) {
      object.anchor.setTo(0.5)
    })
  },
  randomNoBounds: () => {
    return Math.random()
  },
  randomWithBounds: (lower, upper) => {
    return Math.floor(Math.random() * upper + lower)
  },

  highscores: {
    /**
     * Fetches the top 10 scores
     * @return {{name: string, score: number}[]}
     */
    getScores: () => {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', config.highscoreURL, 'scores', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send()
      scores = xhr.response
    },

    /**
     * Submits the score
     * @param {string} name 
     * @param {number} score 
     */
    submitScore: (score, name) => {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', config.highscoreURL + '/submit_score', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify({name: name, score: score}))
    }
  }
}
