import React, { useState } from "react";
import { ImageBackground, View } from "react-native";

import ButtonsGroup from "../../components/ButtonsGroup/ButtonsGroup";
import HeaderText from "../../components/HeaderText/HeaderText";
import Modal from "../../components/Modal/Modal";

import getRandomColor from "../../utilities/randomColor";
import useActivateButton from "../../hooks/useActivateButton";
import playSoundColor from "../../utilities/sounds";
import styles from "./styles";
import sendScore from "../../utilities/sendScore";
import Screen from "../../components/Screen/Screen";
import OfflineNotice from "../../components/OfflineNotice/OfflineNotice";
import useChangeBackground from "../../hooks/useChangeBackground";
import backgrounds from "../../config/backgroundsHome";

function Home() {
  const { buttonColor, autoPressButton } = useActivateButton();
  const { loseBackground, gameOver } = useChangeBackground();

  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [score, setScore] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const startGame = () => {
    setIsStarted(true);
    setLevel(1);
    generateNewSequence();
  };

  const generateNewSequence = () => {
    const color = getRandomColor();
    playSoundColor(color);
    autoPressButton(color);
    setSequence([...sequence, color]);
  };

  const handleColor = (color) => {
    playSoundColor(color);
    if (isStarted) {
      if (sequence[count] === color) {
        if (count === sequence.length - 1) {
          setTimeout(() => {
            generateNewSequence();
            setCount(0);
            setLevel(level + 1);
          }, 300);
        }
        setCount(count + 1);
        setScore(score + 1);
      } else {
        playSoundColor("wrong");
        gameOver();
        setIsModalOpen(true);
        setIsStarted(false);
        setCount(0);
        setLevel(0);

        setSequence([]);
        console.log("GameOver");
      }
    }
  };

  handleSubmit = (nick) => {
    sendScore(nick, score);
    setScore(0);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Screen>
        <OfflineNotice />
        <ImageBackground
          source={!loseBackground ? backgrounds.normal : backgrounds.defeat}
          resizeMode={"cover"}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <HeaderText
              isStarted={isStarted}
              handleStart={startGame}
              level={level}
              score={score}
            />
            <ButtonsGroup
              handleColor={(color) => handleColor(color)}
              buttonActivated={buttonColor}
            />
            <Modal isOpen={isModalOpen} handleSubmit={(e) => handleSubmit(e)} />
          </View>
        </ImageBackground>
      </Screen>
    </>
  );
}

export default Home;
