enum scoreMessage {
  IMPROVE = 'You really need to improve, keep trying',
  GOOD = 'The practice makes the master, keep trying',
  VERYGOOD = 'Well done, you are near to the perfect score, keep trying',
  EXCELLENT = 'Excellent work!, keep trying',
}

export function getScoreMessage(score: number): scoreMessage{
  switch(score){
    case 0:
    case 1:
    case 2: 
    case 3:
      return scoreMessage.IMPROVE;
    case 4:
    case 5:
    case 6:
    case 7:
      return scoreMessage.GOOD;
    case 8:
    case 9:
      return scoreMessage.VERYGOOD;
    case 10:
      return scoreMessage.EXCELLENT;
    default:
      return scoreMessage.GOOD;
  }
}