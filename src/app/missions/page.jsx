
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAskEngineer } from "@/components/AskEngineerProvider";
import "./missions.css";

const missions = [
  {
    id: "apollo",
    title: "Apollo Laser Reflector",
    place: "MOON",
    year: "1969–1972",
    question: "How far away is the Moon?",
    description: "Explore the lunar surface, collect a reflector and help Earth measure the distance to the Moon.",
    fact: "Apollo astronauts left special reflectors on the Moon. Observatories on Earth send laser pulses toward them and measure how long the light takes to return.",
    source: "NASA — Lunar Laser Ranging",
    url: "https://science.nasa.gov/solar-system/moon/",
    tasks: [
      { x: 24, y: 65, label: "Exit the lunar lander", action: "Leave the lander" },
      { x: 45, y: 48, label: "Collect the reflector", action: "Collect reflector" },
      { x: 72, y: 34, label: "Reach the golden marker", action: "Place reflector" },
      { x: 72, y: 34, label: "Send a laser pulse from Earth", action: "Send laser pulse" },
    ],
    quiz: [
      ["Where does the laser pulse begin?", ["On Earth", "On the Moon", "In an astronaut's hand"], 0, "Observatories on Earth send the laser pulses."],
      ["What does the reflector do?", ["Bounces light back", "Makes oxygen", "Moves the Moon"], 0, "The reflector sends the laser light back toward Earth."],
      ["How do scientists measure the distance?", ["By timing the light", "By taking a photo", "By listening to sound"], 0, "Scientists measure the time taken by light to travel there and back."],
    ],
  },
  {
    id: "seismic",
    title: "Apollo Seismometer",
    place: "MOON",
    year: "1969–1977",
    question: "Can the Moon shake?",
    description: "Explore the lunar ground and set up an instrument that listens for moonquakes.",
    fact: "Apollo astronauts installed seismometers on the Moon. These instruments recorded moonquakes and helped scientists study the Moon's interior.",
    source: "NASA — Apollo Lunar Surface Experiments",
    url: "https://science.nasa.gov/moon/",
    tasks: [
      { x: 30, y: 60, label: "Find a flat landing spot", action: "Scan ground" },
      { x: 58, y: 42, label: "Carry the seismometer", action: "Deploy instrument" },
      { x: 76, y: 65, label: "Point the antenna toward Earth", action: "Align antenna" },
      { x: 76, y: 65, label: "Listen for Moon vibrations", action: "Start listening" },
    ],
    quiz: [
      ["What does a seismometer detect?", ["Ground vibrations", "Sunlight", "Wind speed"], 0, "A seismometer detects tiny movements of the ground."],
      ["What is a moonquake?", ["A quake on the Moon", "A storm on Mars", "A solar flare"], 0, "Moonquakes are vibrations inside or on the Moon."],
      ["Why place it on stable ground?", ["To get steady readings", "To grow plants", "To make it move"], 0, "Stable ground helps the instrument collect clearer readings."],
    ],
  },
  {
    id: "viking",
    title: "Viking Landers",
    place: "MARS",
    year: "1976",
    question: "Was there ever life on Mars?",
    description: "Explore the landing zone, photograph the soil and collect a sample for an experiment.",
    fact: "Viking 1 and Viking 2 landed on Mars in 1976. Their experiments tested Martian soil for possible signs of life, but the results did not settle whether life existed.",
    source: "NASA — Viking Mission",
    url: "https://science.nasa.gov/mission/viking/",
    tasks: [
      { x: 28, y: 62, label: "Explore the landing zone", action: "Explore area" },
      { x: 52, y: 38, label: "Photograph the Martian surface", action: "Take photograph" },
      { x: 72, y: 58, label: "Extend the robotic arm", action: "Extend arm" },
      { x: 72, y: 58, label: "Collect a soil sample", action: "Collect soil" },
    ],
    quiz: [
      ["What did Viking investigate?", ["Martian soil", "Jupiter's rings", "Ocean currents"], 0, "Viking's experiments investigated Martian soil."],
      ["Did Viking prove Mars has no life?", ["No, the results were not conclusive", "Yes, for certain", "It never studied Mars"], 0, "The experiments did not settle the question of life on Mars."],
      ["Which part collected soil?", ["The robotic arm", "The parachute", "The antenna"], 0, "The robotic arm reached out and collected soil."],
    ],
  },
  {
    id: "rovers",
    title: "Spirit and Opportunity",
    place: "MARS",
    year: "2004",
    question: "What stories do Martian rocks tell?",
    description: "Drive a rover across the Martian landscape and investigate a rock.",
    fact: "Spirit and Opportunity explored Mars and found evidence that liquid water had affected Martian rocks and soil in the past.",
    source: "NASA — Mars Exploration Rovers",
    url: "https://science.nasa.gov/mission/mer/",
    tasks: [
      { x: 28, y: 65, label: "Drive across the rocky ground", action: "Explore terrain" },
      { x: 53, y: 43, label: "Approach the target rock", action: "Approach rock" },
      { x: 74, y: 58, label: "Take a science photograph", action: "Take photograph" },
      { x: 74, y: 58, label: "Grind the rock surface", action: "Grind rock" },
    ],
    quiz: [
      ["What did the rovers find evidence of?", ["Past liquid water", "Modern oceans", "Living dinosaurs"], 0, "Some rocks showed signs that water had affected them long ago."],
      ["How did the rovers move?", ["On wheels", "With wings", "With propellers"], 0, "Spirit and Opportunity were wheeled robotic rovers."],
      ["Why grind a rock?", ["To study fresh rock underneath", "To build a road", "To change the weather"], 0, "Grinding exposed fresh rock for scientific instruments."],
    ],
  },
  {
    id: "curiosity",
    title: "Curiosity Rover",
    place: "MARS",
    year: "2012–Present",
    question: "Could ancient Mars support life?",
    description: "Choose a promising rock, line up the drill and send rock powder to the rover's instruments.",
    fact: "Curiosity found evidence that ancient environments on Mars could have supported microbial life.",
    source: "NASA — Mars Science Laboratory",
    url: "https://science.nasa.gov/mission/msl-curiosity/",
    tasks: [
      { x: 28, y: 64, label: "Explore the crater floor", action: "Explore crater" },
      { x: 52, y: 42, label: "Find a layered rock", action: "Choose rock" },
      { x: 75, y: 58, label: "Line up the drill", action: "Align drill" },
      { x: 75, y: 58, label: "Drill and collect rock powder", action: "Start drilling" },
    ],
    quiz: [
      ["What does Curiosity use to study rocks?", ["A drill and instruments", "A fishing net", "A telescope only"], 0, "Curiosity drills rocks and analyses the collected powder."],
      ["What does Curiosity investigate?", ["Whether ancient Mars was habitable", "How to build roads", "How to carry astronauts"], 0, "It studies whether ancient Mars had conditions suitable for life."],
      ["Which crater does Curiosity explore?", ["Gale Crater", "Jezero Crater", "Tycho Crater"], 0, "Curiosity landed in Gale Crater."],
    ],
  },
  {
    id: "perseverance",
    title: "Perseverance Rover",
    place: "MARS",
    year: "2021–Present",
    question: "Can we bring a piece of Mars home?",
    description: "Explore Jezero Crater, collect a rock core and store it safely in a sample tube.",
    fact: "Perseverance collects and stores carefully selected rock samples in sealed tubes. They may help future scientists study pieces of Mars.",
    source: "NASA — Mars 2020",
    url: "https://science.nasa.gov/mission/mars-2020-perseverance/",
    tasks: [
      { x: 28, y: 64, label: "Explore Jezero Crater", action: "Explore crater" },
      { x: 52, y: 42, label: "Choose a solid rock", action: "Choose rock" },
      { x: 74, y: 58, label: "Collect a rock core", action: "Collect core" },
      { x: 74, y: 58, label: "Seal the sample tube", action: "Seal tube" },
      { x: 30, y: 28, label: "Drive to the sample depot", action: "Drive to depot" },
      { x: 30, y: 28, label: "Leave the sample safely", action: "Store sample" },
    ],
    quiz: [
      ["What does Perseverance collect?", ["Rock samples", "Ocean water", "Moon dust"], 0, "It collects rock cores and stores them in sample tubes."],
      ["Why seal the sample tube?", ["To protect the sample", "To make it fly", "To create power"], 0, "The sealed tube protects the sample."],
      ["Where did Perseverance land?", ["Jezero Crater", "Gale Crater", "The Moon"], 0, "Perseverance landed in Jezero Crater."],
    ],
  },
  {
    id: "ingenuity",
    title: "Ingenuity Helicopter",
    place: "MARS",
    year: "2021–2024",
    question: "Can a helicopter fly on Mars?",
    description: "Prepare the helicopter, spin its rotors, fly above the surface and land safely.",
    fact: "Ingenuity demonstrated powered, controlled flight on another planet. It completed 72 flights on Mars.",
    source: "NASA — Ingenuity Mars Helicopter",
    url: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
    tasks: [
      { x: 28, y: 64, label: "Find a clear take-off area", action: "Scan landing area" },
      { x: 52, y: 42, label: "Release the helicopter", action: "Release helicopter" },
      { x: 74, y: 30, label: "Spin up the rotors", action: "Start rotors" },
      { x: 74, y: 30, label: "Fly above the Martian ground", action: "Take off" },
      { x: 52, y: 64, label: "Capture an aerial photograph", action: "Take aerial photo" },
      { x: 28, y: 64, label: "Land safely", action: "Land helicopter" },
    ],
    quiz: [
      ["What was Ingenuity?", ["A robotic helicopter", "A Mars submarine", "A space telescope"], 0, "Ingenuity was a small robotic helicopter."],
      ["Where did it fly?", ["Mars", "The Moon", "Earth's oceans"], 0, "Ingenuity flew in the thin atmosphere of Mars."],
      ["How many flights did it complete?", ["72", "2", "700"], 0, "Ingenuity completed 72 flights."],
    ],
  },
];

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

function makeQuiz(mission) {
  return mission.quiz.map(([question, options, correct, explanation]) => {
    const mixed = shuffle(options.map((label, index) => ({ label, correct: index === correct })));
    return { question, options: mixed, explanation };
  });
}

export default function GameMission() {
  const { setActivePage } = useAskEngineer();

  const [screen, setScreen] = useState("map");
  const [missionIndex, setMissionIndex] = useState(0);
  const [completed, setCompleted] = useState({});
  const [taskIndex, setTaskIndex] = useState(0);
  const [player, setPlayer] = useState({ x: 12, y: 76 });
  const [toast, setToast] = useState("Use WASD or the arrow keys to explore.");
  const [quiz, setQuiz] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [muted, setMuted] = useState(false);
  const [question, setQuestion] = useState("");
  const [showExit, setShowExit] = useState(false);
  const [soundReady, setSoundReady] = useState(false);
  const audioRef = useRef(null);
  const keysRef = useRef({});

  useEffect(() => {
    setActivePage("game");
  }, [setActivePage]);

  const mission = missions[missionIndex];
  const task = mission.tasks[taskIndex];
  const unlocked = (index) => index === 0 || Boolean(completed[missions[index - 1].id]);
  const totalStars = Object.values(completed).reduce((sum, value) => sum + value, 0);
  const allComplete = missions.every((item) => completed[item.id]);

  const beep = useCallback((frequency = 520, duration = 0.1) => {
    if (muted || typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioRef.current) audioRef.current = new AudioContextClass();
      const context = audioRef.current;
      if (context.state === "suspended") context.resume();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.035, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    } catch {}
  }, [muted]);

  const beginMission = (index) => {
    if (!unlocked(index)) return;
    setMissionIndex(index);
    setTaskIndex(0);
    setPlayer({ x: 12, y: 76 });
    setToast("Mission ready. Explore the surface and find your objective.");
    setScreen("brief");
    setShowExit(false);
    beep(620);
  };

  const move = useCallback((dx, dy) => {
    setPlayer((current) => ({
      x: Math.max(5, Math.min(94, current.x + dx)),
      y: Math.max(12, Math.min(88, current.y + dy)),
    }));
  }, []);

  useEffect(() => {
    if (screen !== "play") return;

    const handleDown = (event) => {
      const key = event.key.toLowerCase();

      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
        event.preventDefault();
        keysRef.current[key] = true;
      }

      if (key === "escape") setShowExit(true);
    };

    const handleUp = (event) => {
      keysRef.current[event.key.toLowerCase()] = false;
    };

    const loop = window.setInterval(() => {
      const keys = keysRef.current;
      const dx = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0);
      const dy = (keys.s || keys.arrowdown ? 1 : 0) - (keys.w || keys.arrowup ? 1 : 0);
      if (dx || dy) move(dx * 1.25, dy * 1.25);
    }, 32);

    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);

    return () => {
      window.clearInterval(loop);
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
      keysRef.current = {};
    };
  }, [screen, move]);

  useEffect(() => () => {
    if (audioRef.current) audioRef.current.close();
  }, []);

  const nearTarget = Math.hypot(player.x - task.x, player.y - task.y) < 14;

  const performTask = () => {
    if (!nearTarget) {
      setToast("Keep exploring. Move closer to the glowing objective marker.");
      beep(180);
      return;
    }

    beep(760, 0.16);

    if (taskIndex + 1 < mission.tasks.length) {
      setTaskIndex((value) => value + 1);
      setToast("Objective complete. Find the next glowing marker.");
    } else {
      setToast("Mission objectives complete. Time to discover what scientists learned.");
      setScreen("fact");
    }
  };

  const startQuiz = () => {
    setQuiz(makeQuiz(mission));
    setQuizIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setScreen("quiz");
  };

  const answerQuestion = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    const isCorrect = quiz[quizIndex].options[optionIndex].correct;

    if (isCorrect) {
      setCorrectCount((value) => value + 1);
      beep(780);
    } else {
      beep(220);
    }
  };

  const nextQuestion = () => {
    if (selected === null) return;

    if (quizIndex < quiz.length - 1) {
      setQuizIndex((value) => value + 1);
      setSelected(null);
      return;
    }

    const score = Math.max(
      1,
      correctCount + (quiz[quizIndex].options[selected]?.correct ? 1 : 0)
    );

    setCompleted((previous) => ({
      ...previous,
      [mission.id]: Math.max(previous[mission.id] || 0, score),
    }));

    setScreen("result");
  };

  const restartToMap = () => {
    setShowExit(false);
    setScreen("map");
  };

  const award = totalStars >= 18 ? "GOLD" : totalStars >= 12 ? "SILVER" : "RUBY";

  const downloadCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 760;
    const context = canvas.getContext("2d");

    if (!context) return;

    const gradient = context.createLinearGradient(0, 0, 1200, 760);
    gradient.addColorStop(0, "#050505");
    gradient.addColorStop(1, "#182337");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1200, 760);

    for (let i = 0; i < 100; i++) {
      const x = (i * 137) % 1200;
      const y = (i * 83) % 760;
      context.fillStyle = "rgba(255,255,255,.7)";
      context.beginPath();
      context.arc(x, y, 1.5, 0, Math.PI * 2);
      context.fill();
    }

    context.textAlign = "center";
    context.fillStyle = "#f3c978";
    context.font = "bold 34px Arial";
    context.fillText("NOVOSRITI EXPLORER CARD", 600, 100);
    context.fillStyle = "#ffffff";
    context.font = "bold 52px Arial";
    context.fillText("A QUESTION AMONG THE STARS", 600, 560);
    context.font = "25px Arial";
    context.fillStyle = "#c7d5e6";
    context.fillText(question.trim() || "Keep exploring. Keep asking.", 600, 620, 1000);
    context.font = "20px Arial";
    context.fillText("An educational experience inspired by NASA missions. Not an official NASA product.", 600, 710);

    const link = document.createElement("a");
    link.download = "novosriti-explorer-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const worldClass = mission.place === "MOON" ? "moon-world" : "mars-world";

  return (
    <main className="nm-root">
      <div className="nm-stars" aria-hidden="true" />

      <div className="nm-top-actions">
        <span className="nm-progress">MISSIONS {Object.keys(completed).length}/7</span>
        <span className="nm-progress">STARS {totalStars}/21</span>
        <button className="nm-icon-button" onClick={() => setMuted((value) => !value)}>
          {muted ? "SOUND OFF" : "SOUND ON"}
        </button>
      </div>

      {screen === "map" && (
        <section className="nm-screen">
          <div className="nm-map-hero">
            <div>
              <p className="nm-eyebrow">NOVOSRITI · DEEP SPACE EXPLORATION</p>
              <h1>Some explorers never came home.</h1>
              <p className="nm-lead">
                Travel across the Moon and Mars. Discover the machines humans left behind and the questions they helped us answer.
              </p>
              <button className="nm-button" onClick={() => beginMission(missions.findIndex((_, index) => unlocked(index)))}>
                Continue exploring <span>→</span>
              </button>
            </div>

            <div className="nm-planet-orbit" aria-hidden="true">
              <div className="nm-planet-earth" />
              <div className="nm-orbit-moon" />
              <div className="nm-planet-mars" />
            </div>
          </div>

          <div className="nm-section-heading">
            <div>
              <p className="nm-eyebrow">YOUR EXPEDITION</p>
              <h2>Choose your next mission</h2>
            </div>
            <span>{Object.keys(completed).length} OF 7 COMPLETE</span>
          </div>

          <div className="nm-mission-grid">
            {missions.map((item, index) => {
              const isOpen = unlocked(index);
              const isDone = Boolean(completed[item.id]);

              return (
                <button
                  key={item.id}
                  disabled={!isOpen}
                  onClick={() => beginMission(index)}
                  className={`nm-mission-card ${isDone ? "is-done" : ""} ${!isOpen ? "is-locked" : ""}`}
                >
                  <div className={`nm-card-planet ${item.place === "MOON" ? "is-moon" : "is-mars"}`} />
                  <div className="nm-card-meta">
                    <span>MISSION 0{index + 1}</span>
                    <span>{isDone ? `${completed[item.id]}/3 STARS` : isOpen ? "AVAILABLE" : "LOCKED"}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="nm-card-bottom">
                    <span>{item.place}</span>
                    <span>{item.year}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {allComplete && (
            <div className="nm-final-unlock">
              <div>
                <p className="nm-eyebrow">EXPEDITION COMPLETE</p>
                <h2>Your journey across two worlds is complete.</h2>
                <p>All seven missions have been explored.</p>
              </div>
              <button className="nm-button" onClick={() => setScreen("award")}>View final award</button>
            </div>
          )}

        </section>
      )}

      {screen === "brief" && (
        <section className="nm-screen">
          <button className="nm-back" onClick={restartToMap}>Back to mission map</button>
          <div className="nm-brief-card">
            <div className={`nm-brief-planet ${worldClass}`} />
            <div>
              <p className="nm-eyebrow">MISSION 0{missionIndex + 1} · {mission.place} · {mission.year}</p>
              <h2>{mission.title}</h2>
              <h3>{mission.question}</h3>
              <p>{mission.description}</p>
              <div className="nm-brief-facts">
                <span>{mission.place}</span>
                <span>{mission.year}</span>
                <span>{mission.tasks.length} OBJECTIVES</span>
              </div>
              <button className="nm-button" onClick={() => setScreen("play")}>Begin exploration</button>
            </div>
          </div>
        </section>
      )}

      {screen === "play" && (
        <section className="nm-screen">
          <div className="nm-game-heading">
            <button className="nm-back" onClick={() => setShowExit(true)}>Exit mission</button>
            <div>
              <span>MISSION 0{missionIndex + 1}</span>
              <strong>{mission.title}</strong>
            </div>
            <span className="nm-task-count">OBJECTIVE {taskIndex + 1}/{mission.tasks.length}</span>
          </div>

          <div className="nm-game-layout">
            <div className={`nm-game-world ${worldClass}`}>
              <div className="nm-world-label">{mission.place} SURFACE</div>
              <div className="nm-horizon" />
              <div className="nm-distant-ridge" />
              <div className="nm-distant-ridge ridge-two" />
              <div className="nm-ground-grid" />

              <div className="nm-surface-rock rock-one" />
              <div className="nm-surface-rock rock-two" />
              <div className="nm-surface-rock rock-three" />

              <div className="nm-landmark">
                {missionIndex < 2 ? (
                  <div className="nm-lunar-lander"><i /><b /></div>
                ) : (
                  <div className="nm-rover-model"><i /><b /><span /></div>
                )}
              </div>

              {mission.place === "MOON" && <div className="nm-earth-in-sky" />}

              <div className="nm-objective" style={{ left: `${task.x}%`, top: `${task.y}%` }}>
                <span />
                <small>{task.label}</small>
              </div>

              <div className={`nm-player ${missionIndex >= 3 ? "is-rover" : ""}`} style={{ left: `${player.x}%`, top: `${player.y}%` }}>
                <i /><b /><span />
              </div>

              <div className="nm-radar"><span /><i /><b /></div>
            </div>

            <aside className="nm-control-panel">
              <p className="nm-eyebrow">MISSION CONTROL</p>
              <h2>{task.action}</h2>
              <p className="nm-panel-copy">{toast}</p>
              <div className="nm-objective-progress">
                <span style={{ width: `${(taskIndex / mission.tasks.length) * 100}%` }} />
              </div>
              <p className="nm-small-label">OBJECTIVE {taskIndex + 1} OF {mission.tasks.length}</p>
              <p className="nm-panel-copy">Use W A S D or the arrow keys to move. Reach the glowing marker, then complete the objective.</p>
              <button className="nm-button" onClick={performTask}>{nearTarget ? "Complete objective" : "I'm too far away"}</button>
              <button className="nm-button nm-button-outline" onClick={() => move(0, -5)}>Move forward</button>
              <button className="nm-button nm-button-outline" onClick={() => move(-5, 0)}>Move left</button>
              <button className="nm-button nm-button-outline" onClick={() => move(5, 0)}>Move right</button>
              <button className="nm-button nm-button-outline" onClick={() => move(0, 5)}>Move back</button>
            </aside>
          </div>
        </section>
      )}

      {screen === "fact" && (
        <section className="nm-screen nm-center-screen">
          <p className="nm-eyebrow">MISSION DISCOVERY</p>
          <h1>What did we learn?</h1>
          <div className="nm-fact-card">
            <h2>{mission.title}</h2>
            <p>{mission.fact}</p>
            <a href={mission.url} target="_blank" rel="noreferrer">{mission.source}</a>
            <button className="nm-button" onClick={startQuiz}>Take the mission quiz</button>
          </div>
        </section>
      )}

      {screen === "quiz" && quiz[quizIndex] && (
        <section className="nm-screen nm-center-screen">
          <p className="nm-eyebrow">MISSION KNOWLEDGE CHECK</p>
          <h1>Test what you discovered.</h1>
          <div className="nm-quiz-card">
            <div className="nm-quiz-progress"><span style={{ width: `${((quizIndex + 1) / quiz.length) * 100}%` }} /></div>
            <p className="nm-small-label">QUESTION {quizIndex + 1} OF {quiz.length}</p>
            <h2>{quiz[quizIndex].question}</h2>

            <div className="nm-answer-list">
              {quiz[quizIndex].options.map((option, index) => (
                <button
                  key={option.label}
                  onClick={() => answerQuestion(index)}
                  disabled={selected !== null}
                  className={`nm-answer ${selected === index ? "is-selected" : ""} ${selected === index && option.correct ? "is-correct" : ""} ${selected === index && !option.correct ? "is-wrong" : ""}`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {selected !== null && (
              <div className="nm-explanation">
                <p>{quiz[quizIndex].options[selected].correct ? "Correct!" : "Not quite."}</p>
                <span>{quiz[quizIndex].explanation}</span>
                <button className="nm-button" onClick={nextQuestion}>
                  {quizIndex === quiz.length - 1 ? "See mission result" : "Next question"}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {screen === "result" && (
        <section className="nm-screen nm-center-screen">
          <p className="nm-eyebrow">MISSION COMPLETE</p>
          <h1>Discovery achieved.</h1>
          <div className="nm-result-card">
            <div className="nm-result-orbit"><div className="nm-result-planet" /></div>
            <h2>{mission.title}</h2>
            <p>You earned</p>
            <strong>{completed[mission.id]} / 3</strong>
            <span className="nm-stars-earned">STARS</span>
            <p>{completed[mission.id] === 3 ? "Excellent exploration." : "Every discovery counts. Keep exploring."}</p>
            <button className="nm-button" onClick={restartToMap}>
              {missionIndex === missions.length - 1 ? "View expedition" : "Continue to next mission"}
            </button>
          </div>
        </section>
      )}

      {screen === "award" && (
        <section className="nm-screen nm-center-screen nm-award-screen">
          <p className="nm-eyebrow">NOVOSRITI · EXPEDITION COMPLETE</p>
          <h1>You explored two worlds.</h1>
          <div className={`nm-flower-award ${award.toLowerCase()}`}>
            <div className="nm-flower">
              {Array.from({ length: 8 }).map((_, i) => <i key={i} style={{ transform: `rotate(${i * 45}deg) translateY(-34px)` }} />)}
              <b />
            </div>
            <p>{award} FLOWER AWARD</p>
            <strong>{totalStars} / 21</strong>
            <span>YOUR TOTAL STARS</span>
          </div>
          <p className="nm-award-copy">Seven missions. Two worlds. Countless discoveries.</p>
          <button className="nm-button" onClick={() => setScreen("review")}>View final review</button>
        </section>
      )}

      {screen === "review" && (
        <section className="nm-screen nm-review-screen">
          <p className="nm-eyebrow">THE END OF THIS JOURNEY</p>
          <h1>But discovery never ends.</h1>
          <p className="nm-review-intro">
            NovoSriti takes young explorers across the Moon and Mars to discover the machines humans left behind. Through seven interactive missions, players learn how these machines helped scientists study distance, moonquakes, Martian soil, ancient water, rock samples and flight.
          </p>

          <div className="nm-review-grid">
            <article><strong>07</strong><span>MISSIONS COMPLETED</span></article>
            <article><strong>02</strong><span>WORLDS EXPLORED</span></article>
            <article><strong>{totalStars}/21</strong><span>STARS EARNED</span></article>
          </div>

          <div className="nm-review-quote">
            <p>"These machines may have gone silent, but their discoveries still speak."</p>
            <span>NOVOSRITI</span>
          </div>

          <button className="nm-button" onClick={restartToMap}>Explore again</button>
          <p className="nm-disclaimer">An educational experience inspired by NASA missions.</p>
        </section>
      )}

      {showExit && screen === "play" && (
        <div className="nm-modal-backdrop">
          <div className="nm-modal">
            <h2>Leave this mission?</h2>
            <p>Your current objective progress will not be saved.</p>
            <button className="nm-button" onClick={restartToMap}>Exit mission</button>
            <button className="nm-button nm-button-outline" onClick={() => setShowExit(false)}>Continue exploring</button>
          </div>
        </div>
      )}

      <a href="/project-summary" className="summary-link-button">
        EXPLORE THE COMPLETE JOURNEY
        <span>↗</span>
      </a>

      <footer className="nm-footer">NOVOSRITI · A JOURNEY THROUGH THE MOON AND MARS</footer>
    </main>
  );
}
