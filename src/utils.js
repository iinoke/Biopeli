import config from './config'
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

  submitScore: (body) => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", config.scoreServer + '/submit_score', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
  },

  fetchScores: () => { // apua tänne jotain järkevää
    var xhr = new XMLHttpRequest()
    xhr.open("GET", config.scoreServer + 'haloo jotain tähän', false)
    //xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send()
    
    return xhr.responseText
  }
}
