import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const drumKeys = [
    {
      name: "Heather-1",
      code: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      name: "Heather-2",
      code: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      name: "Heather-3",
      code: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      name: "Heather-4",
      code: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      name: "Clap",
      code: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      name: "Open HH",
      code: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      name: "Kick n' Hat",
      code: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      name: "Kick",
      code: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      name: "Closed HH",
      code: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playMusic(e.key.toUpperCase());
    });
  });

  const playMusic = (music) => {
    const audio = document.getElementById(music);
    audio.play();
    setDisplay(music);
  };

  const setDisplay = (key) => {
    switch (key) {
      case "Q":
        setActiveKey(drumKeys[0].name);
        break;
      case "W":
        setActiveKey(drumKeys[1].name);
        break;
      case "E":
        setActiveKey(drumKeys[2].name);
        break;
      case "A":
        setActiveKey(drumKeys[3].name);
        break;
      case "S":
        setActiveKey(drumKeys[4].name);
        break;
      case "D":
        setActiveKey(drumKeys[5].name);
        break;
      case "Z":
        setActiveKey(drumKeys[6].name);
        break;
      case "X":
        setActiveKey(drumKeys[7].name);
        break;
      case "C":
        setActiveKey(drumKeys[8].name);
        break;
    }
  };

  return (
    <>
      <div className="wrapper">
        <div id="drum-machine">
          <div className="keys">
            {drumKeys.map((drum) => (
              <div
                key={drum.code}
                onClick={() => playMusic(drum.text)}
                className="drum-pad"
                id={drum.src}
              >
                {drum.text}
                <audio className="clip" src={drum.src} id={drum.text}></audio>
              </div>
            ))}
          </div>
          <div id="display">
            <span>{activeKey ? activeKey : ""}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
