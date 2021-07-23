import { useState } from "react";

function useActivateButton() {
  const [buttonColor, setButtonColor] = useState("");

  const autoPressButton = (color) => {
    setButtonColor(color + "Dark");
    setTimeout(() => {
      setButtonColor(color);
    }, 300);
  };

  return { buttonColor, autoPressButton };
}

export default useActivateButton;
