import React, { useState } from "react";
import { ImageBackground, View } from "react-native";

import ButtonsGroup from "../../components/ButtonsGroup/ButtonsGroup";
import HeaderText from "../../components/HeaderText/HeaderText";
import Modal from "../../components/Modal/Modal";
import OfflineNotice from "../../components/OfflineNotice/OfflineNotice";
import Screen from "../../components/Screen/Screen";

import useActivateButton from "../../hooks/useActivateButton";
import useChangeBackground from "../../hooks/useChangeBackground";

import getRandomColor from "../../utilities/randomColor";
import playSoundColor from "../../utilities/sounds";
import sendScore from "../../utilities/sendScore";

import backgrounds from "../../config/backgroundsHome";

import styles from "./styles";

function Home() {
  const { buttonColor, autoPressButton } = useActivateButton();
  const { loseBackground, gameOver } = useChangeBackground();

  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [arrayOfColors, setArrayOfColors] = useState([]);
  const [score, setScore] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const startGame = () => {
    setIsStarted(true);
    setLevel(1);
    generateNewColor();
  };

  const generateNewColor = () => {
    const color = getRandomColor();
    playSoundColor(color);
    autoPressButton(color);
    setArrayOfColors([...arrayOfColors, color]);
  };

  const handleTouchColor = (color) => {
    playSoundColor(color);
    if (isStarted) {
      if (arrayOfColors[count] === color) {
        if (count === arrayOfColors.length - 1) {
          setTimeout(() => {
            generateNewColor();
            setCount(0);
            setLevel(level + 1);
          }, 400);
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

        setArrayOfColors([]);
        console.log("GameOver");
      }
    }
  };

  const handleSubmitNick = (nick) => {
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
              handleColor={(color) => handleTouchColor(color)}
              buttonActivated={buttonColor}
            />
            <Modal
              isOpen={isModalOpen}
              handleSubmit={(event) => handleSubmitNick(event)}
            />
          </View>
        </ImageBackground>
      </Screen>
    </>
  );
}

export default Home;
