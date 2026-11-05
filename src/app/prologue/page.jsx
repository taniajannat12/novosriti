
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAskEngineer } from "@/components/AskEngineerProvider";
import "./prologue.css";

const beats = [
  { id: "p1", title: "The last signal", height: 300 },
  { id: "p2", title: "The wait", height: 300 },
  { id: "p3", title: "The word", height: 300 },
  { id: "p4", title: "The twist", height: 250 },
  { id: "p5", title: "Three rules", height: 250 },
  { id: "p6", title: "The first question", height: 200 },
];

const glossary = [
  ["ROVER", "A robot with wheels. It drives across the ground and studies it."],
  ["LANDER", "A robot that stays where it lands. It studies what is around it."],
  ["PROBE", "A spacecraft that keeps traveling through space, far from home."],
  ["INSTRUMENT", "A science tool left in one place, quietly measuring."],
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function Truth({ type = "FACT" }) {
  return (
    <span className={`truth-chip ${type.toLowerCase()}`}>
      {type}
    </span>
  );
}

function Line({ children, className = "", at = 0 }) {
  return (
    <p
      className={`story-line ${className}`}
      style={{ "--at": at }}
    >
      {children}
    </p>
  );
}

function Continue({ target, reduced }) {
  const go = () => {
    document.getElementById(target)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <button className="continue-btn" onClick={go}>
      Continue <span>↓</span>
    </button>
  );
}

function Signal() {
  return (
    <div className="signal-visual" aria-hidden="true">
      <svg viewBox="0 0 900 150">
        <path
          className="signal-line"
          d="M0 75 H280 L300 72 L320 78 L340 75 H420 L435 20 L450 130 L465 75 H900"
        />
        <path className="signal-flat" d="M0 75 H900" />
      </svg>

      <div className="mars-ground" />

      <div className="rover-illustration">
        <svg viewBox="0 0 120 60">
          <rect x="30" y="24" width="60" height="14" rx="3" />
          <rect x="14" y="20" width="92" height="4" rx="1" />
          <rect x="62" y="8" width="4" height="16" />
          <rect x="57" y="4" width="14" height="6" rx="1" />
          <circle cx="30" cy="46" r="8" />
          <circle cx="60" cy="46" r="8" />
          <circle cx="90" cy="46" r="8" />
        </svg>
        <small>Illustration</small>
      </div>
    </div>
  );
}

function SolarMap() {
  return (
    <div
      className="solar-map"
      role="img"
      aria-label="Map showing the Moon, Mars and deep space, each with left-behind machines."
    >
      <div className="map-orbit orbit-one" />
      <div className="map-orbit orbit-two" />

      <div className="map-earth">
        <img
          src="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/2023/12/ImageWall5_1920x1200-80.jpg"
          alt="Earth"
        />
        <span>EARTH</span>
      </div>

      <div className="map-planet map-moon">
        <img
          src="https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005001/Moon_4K.png"
          alt="The Moon"
        />
        <span>MOON</span>
        <strong>796</strong>
      </div>

      <div className="map-planet map-mars">
        <img
          src="https://science.nasa.gov/wp-content/uploads/2023/04/mars-globe-valles-marineris-enhanced-full2.jpg"
          alt="Mars"
        />
        <span>MARS</span>
      </div>

      <div className="deep-space-pin">
        <span className="pin-dot" />
        <strong>DEEP SPACE</strong>
      </div>

      <div className="map-caption">
        A map of places where machines remain
      </div>
    </div>
  );
}

function RuleIcon({ type }) {
  if (type === "alone") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="20" />
        <path d="M32 2 V15 M32 49 V62 M2 32 H15 M49 32 H62" />
        <circle cx="32" cy="32" r="5" />
      </svg>
    );
  }

  if (type === "late") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="24" />
        <path d="M32 15 V32 L44 39" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 48 L24 36 L34 43 L52 20" />
      <path d="M42 20 H52 V30" />
      <path d="M10 55 H54" />
    </svg>
  );
}

export default function ProloguePage() {
  const { setActivePage } = useAskEngineer();

  const reduced = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [activeBeat, setActiveBeat] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [reading, setReading] = useState(false);
  const [flipped, setFlipped] = useState({});
  const [progress, setProgress] = useState(0);
  const [visitedP6, setVisitedP6] = useState(false);
  const [question] = useState("");

  const audioRef = useRef(null);
  const audioNodes = useRef([]);
  const speechRef = useRef(null);

  useEffect(() => {
    setActivePage("prologue");
  }, [setActivePage]);

  // Prevent server/client hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const stopSound = useCallback(() => {
    audioNodes.current.forEach((node) => {
      try {
        node.stop?.();
        node.disconnect?.();
      } catch {}
    });

    audioNodes.current = [];
  }, []);

  const playStatic = useCallback(() => {
    if (!soundOn) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      if (!audioRef.current || audioRef.current.state === "closed") {
        audioRef.current = new AudioContextClass();
      }

      const ctx = audioRef.current;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const buffer = ctx.createBuffer(
        1,
        ctx.sampleRate * 1.2,
        ctx.sampleRate
      );

      const data = buffer.getChannelData(0);

      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.12;
      }

      const source = ctx.createBufferSource();
      const gain = ctx.createGain();

      source.buffer = buffer;
      source.loop = true;

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(
        0.045,
        ctx.currentTime + 0.4
      );

      source.connect(gain);
      gain.connect(ctx.destination);
      source.start();

      audioNodes.current.push(source, gain);
    } catch {}
  }, [soundOn]);

  const playTone = useCallback(() => {
    if (!soundOn) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      if (!audioRef.current || audioRef.current.state === "closed") {
        audioRef.current = new AudioContextClass();
      }

      const ctx = audioRef.current;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(280, ctx.currentTime);

      oscillator.frequency.exponentialRampToValueAtTime(
        620,
        ctx.currentTime + 1.5
      );

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(
        0.07,
        ctx.currentTime + 0.3
      );
      gain.gain.linearRampToValueAtTime(
        0,
        ctx.currentTime + 1.5
      );

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 1.6);

      audioNodes.current.push(oscillator, gain);
    } catch {}
  }, [soundOn]);

  const stopReading = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.speechSynthesis
    ) {
      window.speechSynthesis.cancel();
    }

    setReading(false);
  }, []);

  const readCurrentBeat = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      typeof window.SpeechSynthesisUtterance === "undefined"
    ) {
      return;
    }

    stopReading();

    const section = document.getElementById(
      `p${activeBeat + 1}`
    );

    if (!section) return;

    const text = section.innerText
      .replace(/Continue/g, "")
      .replace(/Sound on|Sound off|Skip the prologue/g, "");

    const utterance = new window.SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.88;
    utterance.pitch = 1;

    utterance.onstart = () => setReading(true);
    utterance.onend = () => setReading(false);
    utterance.onerror = () => setReading(false);

    speechRef.current = utterance;

    window.speechSynthesis.speak(utterance);
  }, [activeBeat, stopReading]);

  // Scroll-based reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".prologue .reveal, .prologue .story-line"
    );

    if (reduced) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [reduced]);

  // Scroll progress and active chapter tracking
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(max > 0 ? scrollTop / max : 0);

      let current = 0;

      beats.forEach((beat, index) => {
        const el = document.getElementById(beat.id);

        if (
          el &&
          el.getBoundingClientRect().top <= window.innerHeight * 0.55
        ) {
          current = index;
        }
      });

      setActiveBeat(current);

      if (current === 5) {
        setVisitedP6(true);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  // Background sound and P6 transition sound
  useEffect(() => {
    stopSound();

    if (activeBeat === 0 && soundOn) {
      playStatic();
    }

    if (activeBeat === 5 && soundOn) {
      playTone();
    }

    return () => stopSound();
  }, [
    activeBeat,
    soundOn,
    playStatic,
    playTone,
    stopSound,
  ]);

  // Handle direct hash navigation
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const target = document.getElementById(
      hash.replace("#", "")
    );

    if (target) {
      const timeout = setTimeout(() => {
        target.scrollIntoView();
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, []);

  // Stop or resume sound when the tab visibility changes
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopSound();
      } else if (soundOn && activeBeat === 0) {
        playStatic();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, [soundOn, activeBeat, playStatic, stopSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopReading();
      stopSound();

      const context = audioRef.current;
      audioRef.current = null;

      context?.close?.();
    };
  }, [stopReading, stopSound]);

  const skip = () => {
    stopReading();
    stopSound();

    document.getElementById("ch1")?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const toggleSound = async () => {
    if (!soundOn) {
      setSoundOn(true);

      try {
        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;

        if (
          AudioContextClass &&
          (!audioRef.current || audioRef.current.state === "closed")
        ) {
          audioRef.current = new AudioContextClass();
        }

        await audioRef.current?.resume?.();
      } catch {}
    } else {
      setSoundOn(false);
      stopSound();
    }
  };

  const toggleCard = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="prologue" id="prologue">
      <div className="space-stars" aria-hidden="true" />

      <div
        className={`letterbox ${visitedP6 ? "open" : ""}`}
        aria-hidden="true"
      >
        <div className="top" />
        <div className="bottom" />
      </div>

      <header className="prologue-controls">
        <div className="beat-counter">
          PROLOGUE {activeBeat + 1} / 6
        </div>

        <div className="control-actions">
          <button
            className="sound-btn"
            onClick={toggleSound}
            aria-label={soundOn ? "Sound off" : "Sound on"}
          >
            {soundOn ? "Sound on" : "Sound off"}
          </button>

          {mounted && "speechSynthesis" in window && (
            <button
              className="read-btn"
              onClick={reading ? stopReading : readCurrentBeat}
            >
              {reading ? "Stop reading" : "Read aloud"}
            </button>
          )}

          <button className="skip-btn" onClick={skip}>
            Skip the prologue
          </button>
        </div>
      </header>

      <div className="prologue-progress">
        <div style={{ transform: `scaleX(${progress})` }} />
      </div>

      <section
        className="beat beat-p1"
        id="p1"
        style={{ height: "300vh" }}
      >
        <div className="beat-stage">
          <div className="haze" />

          <div className="beat-content">
            <span
              className="date-stamp reveal"
              style={{ "--at": "5%" }}
            >
              JUNE 10, 2018
            </span>

            <Signal />

            <div className="narration">
              <Line at={0.2}>
                A robot on Mars sends its last message.
              </Line>

              <Line at={0.4}>
                Not words. Numbers.
              </Line>

              <div
                className="truth-row reveal"
                style={{ "--at": "40%" }}
              >
                <Truth />
              </div>

              <Line at={0.65}>
                Scientists read them to mean: no power left.
              </Line>

              <Line at={0.82}>Then, silence.</Line>
            </div>

            <Continue target="p2" reduced={reduced} />
          </div>
        </div>
      </section>

      <section
        className="beat beat-p2"
        id="p2"
        style={{ height: "300vh" }}
      >
        <div className="beat-stage">
          <div className="beat-content">
            <div className="narration">
              <Line at={0.05}>
                Its name was <strong className="gold">Opportunity.</strong>
              </Line>

              <Line at={0.2}>
                It was built to last 90 days. It lasted almost 15 years.
              </Line>

              <Line at={0.4}>
                Engineers did not give up. They sent more than a thousand
                wake-up commands. They even played songs.
              </Line>

              <div
                className="pulse-path reveal"
                style={{ "--at": "55%" }}
              >
                <span className="pulse-earth">EARTH</span>

                <div className="pulse-track">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} style={{ "--i": i }} />
                  ))}
                </div>

                <span className="pulse-mars">MARS</span>

                <small>Pulses shown faster than real life.</small>
              </div>

              <Line at={0.7}>Nothing came back.</Line>

              <Line at={0.82}>
                A message to Mars takes minutes to arrive. Nobody can drive
                over and press a button.
              </Line>
            </div>

            <div
              className="truth-card reveal"
              style={{ "--at": "82%" }}
            >
              <div className="truth-card-title">
                WAIT. YOU MAY HAVE READ THIS:
              </div>

              <div className="truth-card-quote">
                <Truth type="IMAGINED" />
                <p>“My battery is low and it's getting dark.”</p>
              </div>

              <div className="truth-card-fact">
                <Truth />
                <p>
                  A reporter wrote that as a poem. The real message was data.
                </p>
              </div>

              <p className="truth-extra">
                NASA's project manager said the sky had gone so dark it was
                night during the day.
              </p>

              <p className="truth-closing">
                In this story, every line is <strong>labeled.</strong>
              </p>

              <small>
                FACT: measured and sourced. IMAGINED: a story to help you feel it.
              </small>
            </div>

            <Continue target="p3" reduced={reduced} />
          </div>
        </div>
      </section>

      <section
        className="beat beat-p3"
        id="p3"
        style={{ height: "300vh" }}
      >
        <div className="beat-stage">
          <div className="beat-content">
            <div className="narration">
              <h1 className="big-word reveal">Abandoned?</h1>

              <Line at={0.2}>
                Some people use that word for machines like this one.
              </Line>

              <Line at={0.45}>
                NASA's own catalogue lists 796 human-made objects left on the
                Moon.
              </Line>

              <div
                className="truth-row reveal"
                style={{ "--at": "45%" }}
              >
                <Truth />
              </div>

              <Line at={0.7}>And that is only the Moon.</Line>
            </div>

            <SolarMap />

            <Continue target="p4" reduced={reduced} />
          </div>
        </div>
      </section>

      <section
        className="beat beat-p4"
        id="p4"
        style={{ height: "250vh" }}
      >
        <div className="beat-stage">
          <div className="beat-content">
            <div className="narration">
              <Line at={0.05}>
                Here is what that word hides.
              </Line>

              <Line at={0.25}>
                These machines were not sent there to sit.
              </Line>

              <h1
                className="asked-word reveal"
                style={{ "--at": "45%" }}
              >
                <span>Abandoned?</span>
                <strong>asked.</strong>
              </h1>

              <Line at={0.55}>They were sent to ask.</Line>

              <div
                className="truth-row reveal"
                style={{ "--at": "55%" }}
              >
                <Truth type="INFERRED" />
              </div>
            </div>

            <div
              className="glossary-grid reveal"
              style={{ "--at": "65%" }}
            >
              {glossary.map(([title, description], index) => (
                <button
                  key={title}
                  className={`glossary-card ${
                    flipped[index] ? "flipped" : ""
                  }`}
                  onClick={() => toggleCard(index)}
                  aria-pressed={!!flipped[index]}
                >
                  <span
                    className="card-front"
                    aria-hidden={flipped[index]}
                  >
                    <strong>{title}</strong>
                    <small>Tap to discover</small>
                  </span>

                  <span
                    className="card-back"
                    aria-hidden={!flipped[index]}
                  >
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                </button>
              ))}
            </div>

            <p
              className="tap-hint reveal"
              style={{ "--at": "65%" }}
            >
              Tap a card to turn it over.
            </p>

            <Continue target="p5" reduced={reduced} />
          </div>
        </div>
      </section>

      <section
        className="beat beat-p5"
        id="p5"
        style={{ height: "250vh" }}
      >
        <div className="beat-stage">
          <div className="beat-content">
            <div className="narration">
              <h2 className="rules-heading reveal">
                Three rules of the world out there
              </h2>
            </div>

            <div className="rules-grid">
              <article
                className="rule-card reveal"
                style={{ "--at": "20%" }}
              >
                <RuleIcon type="alone" />
                <h3>ALONE</h3>
                <p>
                  Nobody can repair them by hand. Nobody can reach them.
                </p>
                <Truth />
              </article>

              <article
                className="rule-card reveal"
                style={{ "--at": "40%" }}
              >
                <RuleIcon type="late" />
                <h3>LATE</h3>
                <p>
                  A message to the Moon takes about a second. To Mars, minutes.
                  To Voyager 1, almost a day.
                </p>
                <Truth />
              </article>

              <article
                className="rule-card reveal"
                style={{ "--at": "60%" }}
              >
                <RuleIcon type="nothing" />
                <h3>NOTHING LASTS</h3>
                <p>Power fades. Dust piles up. Mistakes happen.</p>
                <Truth />
              </article>
            </div>

            <Line className="remember-line" at={0.8}>
              Remember these. They explain every ending you are about to see.
            </Line>

            <Continue target="p6" reduced={reduced} />
          </div>
        </div>
      </section>

      <section
        className="beat beat-p6"
        id="p6"
        style={{ height: "200vh" }}
      >
        <div className="beat-stage">
          <div className="p6-glow" />

          <div className="beat-content p6-content">
            <div
              className="question-banner reveal"
              style={{ "--at": "35%" }}
            >
              <span>THE FIRST QUESTION</span>
              <h2>
                {question || "How far away is the Moon, exactly?"}
              </h2>
            </div>

            <div className="narration">
              <Line at={0.6}>
                Every machine here was built to answer one question.
              </Line>

              <div
                className="truth-row reveal"
                style={{ "--at": "60%" }}
              >
                <Truth type="INFERRED" />
              </div>

              <Line at={0.8}>Let's follow them.</Line>
            </div>

            <p
              className="scroll-prompt reveal"
              style={{ "--at": "85%" }}
            >
              Scroll to leave Earth <span>↓</span>
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-handoff" id="ch1">
        <div className="handoff-orb">
          <img
            src="https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005001/Moon_4K.png"
            alt="The Moon"
          />
        </div>

        <span className="handoff-label">
          THE JOURNEY BEGINS
        </span>

        <h2>One question at a time.</h2>

        <p>Chapter 1 · The Apollo Laser Mirrors</p>

        <Link href="/chapters" className="chapter-link">
          Enter Chapter <span>→</span>
        </Link>
      </section>
    </main>
  );
}
