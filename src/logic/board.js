import { WINNER_COMBOS } from "../constants";
// revisar si hay ganador
export const chekWinner = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // si no hay mas espacios vacios y no hay ganador
  return boardToCheck.every((square) => square !== null);
};
