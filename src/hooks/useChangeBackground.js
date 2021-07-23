import { useState } from "react";

function useChangeBackground() {
  const [loseBackground, setLoseBackground] = useState(false);

  const gameOver = () => {
    setLoseBackground(true);
    setTimeout(() => {
      setLoseBackground(false);
    }, 300);
  };

  return { loseBackground, gameOver };
}

export default useChangeBackground;
