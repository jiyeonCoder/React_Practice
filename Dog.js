import React from "react";
import { useNavigate } from "react-router-dom";

const Dog = (props) => {
  console.log(props);
  let history = useNavigate();

  return (
    <div
      onClick={() => {
        history("/");
      }}>
      강아지 화면입니다!
    </div>
  );
};

export default Dog;
