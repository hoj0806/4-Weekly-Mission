import styles from "./InputEyeButton.module.css";
import { useState } from "react";
import { SetStateAction, Dispatch } from "react";
interface InputEyeButtonProps {
  setPasswordInputType: Dispatch<SetStateAction<string>>;
}
const InputEyeButton = ({ setPasswordInputType }: InputEyeButtonProps) => {
  const [toggle, setToggle] = useState("open");
  return (
    <>
      <img
        src={`/assets/images/input_eye_${toggle}_icon.svg`}
        className={styles["input_eye_icon"]}
        onClick={() => {
          setToggle((prev) => {
            if (prev === "open") {
              setPasswordInputType("text");
              return "close";
            } else {
              setPasswordInputType("password");
              return "open";
            }
          });
        }}
      />
    </>
  );
};

export default InputEyeButton;
