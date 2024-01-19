import React, { useEffect, useState } from "react";
import { Synth } from "tone";

const Piano = () => {
  const synth = new Synth().toDestination();
  const [backgroundColor, setBackgroundColor] = useState("#D9D9D9");
  const [backgroundColor1, setBackgroundColor1] = useState("#D9D9D9");

  const playNote = (note) => {
    synth.triggerAttackRelease(note, "8n");
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "h":
        playNote("C4");
        setBackgroundColor("C0BDBD"); // Change background color for C4
        break;
      case "j":
        playNote("D4");
        setBackgroundColor("blue"); // Change background color for D4
        break;
      default:
        // Do nothing for other keys
        break;
    }
  };

  const handleDivClick = (note) => {
    return () => {
      playNote(note);
      setBackgroundColor("blue"); // Change background color on click
    };
  };
  const handleKeyRelease = () => {
    // Change the background color back to the default color (white)
    setBackgroundColor("#D9D9D9");
  };
  const handleRelease = () => {
    // Reset both background colors to default (white) when the mouse click is released
    setBackgroundColor("#D9D9D9");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyRelease);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyRelease);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotate(180deg)",
        width: "100%",
        height: "100%",
        paddingBottom: 58,
        paddingLeft: 63,
        paddingRight: 64,
        background: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div style={{ width: 718, height: 446, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 0,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("B4")}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 102.57,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
              hover: "blue",
            }}
            onClick={() => playNote("A4")}
          />
          <div
            style={{
              width: 68.38,
              height: 264.61,
              left: 68.38,
              top: 180,
              position: "absolute",
              background: "#141212",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("Bb4")}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 205.14,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("G4")}
          />
          <div
            style={{
              width: 68.38,
              height: 264.61,
              left: 170.95,
              top: 180,
              position: "absolute",
              background: "#141212",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("Ab4")}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 307.71,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("F4")}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 410.29,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("E4")}
          />
          <div
            style={{
              width: 68.38,
              height: 264.61,
              left: 270.42,
              top: 180,
              position: "absolute",
              background: "#141212",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("F#4")}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 512.86,
              top: 1.09,
              position: "absolute",
              backgroundColor,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onMouseDown={handleDivClick("D4")}
            onMouseUp={handleRelease}
          />
          <div
            style={{
              width: 102.57,
              height: 444.91,
              left: 615.43,
              top: 1.09,
              position: "absolute",
              background: "#D9D9D9",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("C4")}
          />
          <div
            style={{
              width: 68.38,
              height: 264.61,
              left: 479,
              top: 180,
              position: "absolute",
              background: "#141212",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("Eb4")}
          />
          <div
            style={{
              width: 68.38,
              height: 264.61,
              left: 581,
              top: 180,
              position: "absolute",
              background: "#141212",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              border: "1px black solid",
            }}
            onClick={() => playNote("Db4")}
          />
        </div>
      </div>
    </div>
  );
};

export default Piano;
