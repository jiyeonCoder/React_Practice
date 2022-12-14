import React from "react";
import img from "./등산다람쥐.png";


const Start = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxSizing: "border-box",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img
        src={img}
        style={{
          width: "60vw",
          margin: "16px",
        }}
      />
      <h1
        style={{
          fontSize: "1.5em",
          lineHeight: "1.5",
        }}>
        나는{" "}
        <span
          style={{
            backgroundColor: "#fef5d4",
            padding: "5px 10px",
            borderRadius: "30px",
          }}>
          {props.name}
        </span>
        에 대해 얼마나 알고 있을까?
      </h1>
      <input
        style={{
          border: "1px solid #dadafc",
          borderRadius: "30px",
          padding: "10px",
          width: "100%",
        }}
      />
      <button
        style={{
          padding: "10px 36px",
          backgroundColor: "#dadafc",
          border: "#dadafc",
          borderRadius: "30px",
          margin: "36px 0px",
        }}>
        Start
      </button>
    </div>
  );
};

export default Start;
