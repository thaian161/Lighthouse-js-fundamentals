const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = function (moves) {
  let currentX = 0;
  let currentY = 0;
  for (const move of moves) {
    if (move === "north") {
      currentY = currentY + 1;
    }
    if (move === "south") {
      currentY = currentY - 1;
    }
    if (move === "west") {
      currentX = currentX - 1;
    }
    if (move === "east") {
      currentX = currentX + 1;
    }
  }
  return [currentX, currentY];
};

finalPosition(moves);
