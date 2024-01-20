import React, { useEffect, useState } from "react";
import { Synth } from "tone";

const Piano = () => {
  const synth = new Synth().toDestination();
  const [currentNote, setCurrentNote] = useState("");

  const playNote = (note) => {
    synth.triggerAttackRelease(note, "8n");
    setCurrentNote(note);
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "a":
        playNote("C4");
        break;
      case "s":
        playNote("D4");
        break;
      case "d":
        playNote("E4");
        break;
      case "f":
        playNote("F4");
        break;
      case "g":
        playNote("G4");
        break;
      case "h":
        playNote("A4");
        break;
      case "j":
        playNote("B4");
        break;
      case "w":
        playNote("Db4");
        break;
      case "e":
        playNote("Eb4");
        break;
      case "t":
        playNote("F#4");
        break;
      case "y":
        playNote("Ab4");
        break;
      case "u":
        playNote("Bb4");
        break;
      default:
        break;
    }
  };

  const handleDivClick = (note) => {
    return () => {
      playNote(note);
    };
  };
  const handleKeyRelease = () => {
    setCurrentNote("");
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
    <div>
      <div
        style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}
      >
        Currently Playing Note: {currentNote}
      </div>
      <div
        style={{
          transform: "rotate(180deg)",
          width: "100%",
          height: "100%",
          paddingBottom: 58,
          paddingLeft: 63,
          paddingRight: 63,
          background: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
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
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("B4")}
              className="key1"
              id="B4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 102.57,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
                hover: "blue",
              }}
              onClick={handleDivClick("A4")}
              className="key1"
              id="A4"
            />
            <div
              style={{
                width: 68.38,
                height: 264.61,
                left: 68.38,
                top: 180,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("Bb4")}
              className="key2"
              id="Bb4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 205.14,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("G4")}
              className="key1"
              id="G4"
            />
            <div
              style={{
                width: 68.38,
                height: 264.61,
                left: 170.95,
                top: 180,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("Ab4")}
              className="key2"
              id="Ab4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 307.71,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("F4")}
              className="key1"
              id="F4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 410.29,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("E4")}
              className="key1"
              id="E4"
            />
            <div
              style={{
                width: 68.38,
                height: 264.61,
                left: 270.42,
                top: 180,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("F#4")}
              className="key2"
              id="F#4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 512.86,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("D4")}
              className="key1"
              id="D4"
            />
            <div
              style={{
                width: 102.57,
                height: 444.91,
                left: 615.43,
                top: 1.09,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("C4")}
              className="key1"
              id="C4"
            />
            <div
              style={{
                width: 68.38,
                height: 264.61,
                left: 479,
                top: 180,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("Eb4")}
              className="key2"
              id="Eb4"
            />
            <div
              style={{
                width: 68.38,
                height: 264.61,
                left: 581,
                top: 180,
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                border: "1px black solid",
              }}
              onClick={handleDivClick("Db4")}
              className="key2"
              id="Db4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piano;
