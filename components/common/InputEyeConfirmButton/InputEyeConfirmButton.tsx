import styles from "./InputEyeConfirmButton.module.css";
import { useState } from "react";
import { SetStateAction, Dispatch } from "react";
interface InputEyeButtonProps {
  setPasswordComfirmInputType: Dispatch<SetStateAction<string>>;
}
const InputEyeConfirmButton = ({
  setPasswordComfirmInputType,
}: InputEyeButtonProps) => {
  const [toggle, setToggle] = useState("open");
  return (
    <>
      <img
        src={`/assets/images/input_eye_${toggle}_icon.svg`}
        className={styles["input_eye_icon"]}
        onClick={() => {
          setToggle((prev) => {
            if (prev === "open") {
              setPasswordComfirmInputType("text");
              return "close";
            } else {
              setPasswordComfirmInputType("password");
              return "open";
            }
          });
        }}
      />
    </>
  );
};

export default InputEyeConfirmButton;
