const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

export { hex, getRandomNumber };
