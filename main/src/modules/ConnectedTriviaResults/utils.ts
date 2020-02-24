enum scoreText {
  IMPROVE = 'You really need to improve, keep trying',
  GOOD = 'The practice makes the master, keep trying',
  VERYGOOD = 'Well done, you are near to the perfect score, keep trying',
  EXCELLENT = 'Excellent work!, keep trying',
}

enum scoreFace {
  IMPROVE = '😢',
  GOOD = '😊',
  VERYGOOD = 'Well done, you are near to the perfect score, keep trying',
  EXCELLENT = '😎',
}

export interface ScoreMessage {
  text: scoreText,
  face: scoreFace,
}

function getScoreMessage(score: number): ScoreMessage{
  switch(score){
    case 0:
    case 1:
    case 2: 
    case 3:
      return {
        text: scoreText.IMPROVE,
        face: scoreFace.IMPROVE,
      }
    case 4:
    case 5:
    case 6:
    case 7:
      return {
        text: scoreText.GOOD,
        face: scoreFace.GOOD,
      }
    case 8:
    case 9:
      return {
        text: scoreText.VERYGOOD,
        face: scoreFace.VERYGOOD,
      }
    case 10:
      return {
        text: scoreText.EXCELLENT,
        face: scoreFace.EXCELLENT,
      }
    default:
      return {
        text: scoreText.GOOD,
        face: scoreFace.GOOD,
      }
  }
}

export default getScoreMessage;
