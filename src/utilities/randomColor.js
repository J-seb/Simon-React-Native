const colors = ["blue", "green", "red", "yellow"];

export default getRandomColor = () => {
  const number = Math.floor(Math.random() * 4);
  return colors[number];
};
