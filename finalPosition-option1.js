const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = function (moves) {
  let currentX = 0;
  let currentY = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      currentY = currentY + 1;
    }
    if (moves[i] === "south") {
      currentY = currentY - 1;
    }
    if (moves[i] === "west") {
      currentX = currentX - 1;
    }
    if (moves[i] === "east") {
      currentX = currentX + 1;
    }
  }
  return [currentX, currentY];
};

finalPosition(moves);
