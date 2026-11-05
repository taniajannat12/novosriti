
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  ContactShadows,
  OrbitControls,
  Stars,
  useGLTF,
} from "@react-three/drei";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ZoomIn,
  Info,
  Box,
} from "lucide-react";
import { useAskEngineer } from "@/components/AskEngineerProvider";
import "./chapters.css";

const chapters = [
  {
    number: "01",
    period: "APOLLO MISSIONS · 1969–1972",
    title: "Apollo Laser Reflectors",
    subtitle: "A mirror that still talks to Earth.",
    model: "/models/apollo-reflector.glb",
    purpose: "To measure the distance between Earth and the Moon using laser light.",
    description:
      "Apollo astronauts placed laser retroreflector arrays on the Moon. Scientists on Earth send laser pulses toward these reflectors and measure how long the light takes to return. This helps measure the Earth–Moon distance with extraordinary precision.",
    fact: "The reflectors continue to support lunar laser ranging experiments.",
    components: [
      {
        name: "Corner-cube reflectors",
        description:
          "Special optical elements that return incoming light toward their source, even when the reflector is not perfectly aligned.",
      },
      {
        name: "Reflector array",
        description:
          "A group of corner-cube reflectors mounted together to return laser pulses sent from observatories on Earth.",
      },
      {
        name: "Support frame",
        description:
          "The frame holds the reflector elements in position on the lunar surface.",
      },
    ],
  },
  {
    number: "02",
    period: "APOLLO MISSIONS · 1969–1972",
    title: "Apollo Seismometers",
    subtitle: "Listening to the Moon's hidden movements.",
    model: "/models/apollo-seismometer.glb",
    purpose: "To detect moonquakes and study the Moon's internal structure.",
    description:
      "Apollo astronauts deployed seismometers on the lunar surface. These instruments detected moonquakes and impacts, helping scientists understand the Moon's internal structure and how it moves.",
    fact: "Apollo seismic experiments collected data for years after the astronauts left.",
    components: [
      {
        name: "Seismic sensors",
        description:
          "Sensitive instruments that detect ground motion and vibrations travelling through the lunar surface.",
      },
      {
        name: "Electronics package",
        description:
          "The electronics process and record the signals detected by the sensors.",
      },
      {
        name: "Thermal protection",
        description:
          "Protective elements help the equipment operate through the Moon's extreme temperature changes.",
      },
    ],
  },
  {
    number: "03",
    period: "VIKING PROGRAM · 1976",
    title: "Viking Mars Lander",
    subtitle: "Humanity's first successful landing on Mars.",
    model: "/models/viking-lander.glb",
    purpose: "To study the Martian surface, atmosphere and possible signs of life.",
    description:
      "NASA's Viking 1 and Viking 2 landers reached Mars in 1976. They photographed the surface, studied the atmosphere and soil, and performed experiments searching for signs of life.",
    fact: "Viking 1 operated on Mars for more than six years.",
    components: [
      {
        name: "Camera system",
        description:
          "The cameras captured panoramic images of the Martian landscape and sent them back to Earth.",
      },
      {
        name: "Sample arm",
        description:
          "The robotic sampling arm collected Martian soil and delivered samples to onboard experiments.",
      },
      {
        name: "Landing legs",
        description:
          "The landing structure supported the spacecraft after touchdown on the Martian surface.",
      },
      {
        name: "Science instruments",
        description:
          "Scientific instruments examined the atmosphere, soil and environmental conditions on Mars.",
      },
    ],
  },
  {
    number: "04",
    period: "MARS EXPLORATION ROVERS · 2004",
    title: "Spirit & Opportunity",
    subtitle: "Two explorers. One extraordinary journey.",
    model: "/models/spirit-opportunity.glb",
    purpose: "To investigate Martian geology and evidence of ancient water.",
    description:
      "Spirit and Opportunity were twin robotic rovers that explored Mars. They studied rocks, soil and geological features, finding evidence that liquid water had once changed the Martian environment.",
    fact: "Opportunity worked on Mars for nearly 15 years, far beyond its original 90-sol mission.",
    components: [
      {
        name: "Panoramic cameras",
        description:
          "These cameras captured wide views of the Martian landscape and helped scientists choose places to explore.",
      },
      {
        name: "Rock abrasion tool",
        description:
          "The tool ground away the outer surface of rocks so instruments could examine the material underneath.",
      },
      {
        name: "Robotic arm",
        description:
          "The arm positioned scientific instruments close to rocks and soil for detailed investigation.",
      },
      {
        name: "Solar panels",
        description:
          "Solar panels converted sunlight into electrical energy to power the rover.",
      },
      {
        name: "Wheels",
        description:
          "The six-wheel mobility system allowed the rover to travel across the Martian terrain.",
      },
    ],
  },
  {
    number: "05",
    period: "MARS HELICOPTER · 2021–2024",
    title: "Ingenuity",
    subtitle: "The first aircraft to fly on another world.",
    model: "/models/ingenuity.glb",
    purpose: "To demonstrate powered flight on Mars.",
    description:
      "Ingenuity was a small robotic helicopter that travelled to Mars with the Perseverance rover. It demonstrated powered, controlled flight in the extremely thin Martian atmosphere and completed 72 flights.",
    fact: "Ingenuity completed 72 flights before its mission ended in January 2024.",
    components: [
      {
        name: "Rotor blades",
        description:
          "Two sets of counter-rotating blades generated lift in the thin Martian atmosphere.",
      },
      {
        name: "Solar panel",
        description:
          "The solar panel collected sunlight to recharge the helicopter's batteries.",
      },
      {
        name: "Landing legs",
        description:
          "Four lightweight legs supported the helicopter during landing and on the Martian surface.",
      },
      {
        name: "Fuselage",
        description:
          "The central body housed the flight computer, batteries and communication equipment.",
      },
    ],
  },
  {
    number: "06",
    period: "VOYAGER MISSION · 1977–PRESENT",
    title: "Voyager 1",
    subtitle: "A message from the edge of interstellar space.",
    model: "/models/voyager.glb",
    purpose: "To explore the outer Solar System and study interstellar space.",
    description:
      "Voyager 1 launched in 1977 to explore the outer planets. It later travelled beyond the heliosphere and entered interstellar space. It carries the Golden Record, a message from Earth intended for any potential discoverer.",
    fact: "Voyager 1 is the most distant human-made object from Earth.",
    components: [
      {
        name: "High-gain antenna",
        description:
          "The large dish antenna communicates with Earth across enormous distances.",
      },
      {
        name: "Golden Record",
        description:
          "A gold-plated record carries sounds, images and greetings representing life and culture on Earth.",
      },
      {
        name: "Science instruments",
        description:
          "Scientific instruments measure magnetic fields, plasma waves and particles in space.",
      },
      {
        name: "Power system",
        description:
          "Radioisotope thermoelectric generators provide electrical power far from the Sun.",
      },
    ],
  },
];

const chapterIds = [
  "apollo-reflectors",
  "apollo-seismometers",
  "viking-landers",
  "spirit-opportunity",
  "ingenuity",
  "voyager-1",
];

function Model({ url, onMeshClick, onLoad }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    onLoad();
  }, [url, onLoad]);

  return (
    <Center>
      <primitive
        object={scene}
        onClick={(event) => {
          event.stopPropagation();

          if (event.object?.isMesh) {
            onMeshClick(event.object.name || "Model component");
          }
        }}
      />
    </Center>
  );
}

function ModelViewer({ chapter, onMeshClick, resetKey }) {
  const controls = useRef(null);
  const [loading, setLoading] = useState(true);
  const [modelError, setModelError] = useState(false);

  const handleModelLoad = useCallback(() => {
    setLoading(false);
    setModelError(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    setModelError(false);
  }, [chapter.model]);

  useEffect(() => {
    controls.current?.reset();
  }, [resetKey]);

  return (
    <div className="model-viewer">
      <div className="model-aura" />

      <Canvas
        camera={{ position: [4, 3, 6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 8, 5]} intensity={2.4} />
        <pointLight
          position={[-5, 1, -4]}
          intensity={1.4}
          color="#8195ff"
        />
        <pointLight
          position={[4, -2, 3]}
          intensity={0.8}
          color="#e8bd73"
        />

        <Stars
          radius={65}
          depth={35}
          count={1300}
          factor={2.5}
          fade
          speed={0.35}
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.3}>
            <Model
              url={chapter.model}
              onMeshClick={onMeshClick}
              onLoad={handleModelLoad}
            />
          </Bounds>

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.3}
            scale={7}
            blur={2.5}
            far={4}
          />
        </Suspense>

        <OrbitControls
          ref={controls}
          makeDefault
          enablePan
          enableZoom
          minDistance={2}
          maxDistance={14}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>

      {loading && !modelError && (
        <div className="model-loading-overlay">
          <div className="loading-model">
            <span className="loading-spinner" />
            LOADING 3D MODEL...
          </div>
        </div>
      )}

      {modelError && (
        <div className="model-loading-overlay">
          <div className="loading-model">
            Unable to load 3D model.
          </div>
        </div>
      )}

      <div className="model-controls">
        <span>
          <RotateCcw size={13} /> DRAG TO ROTATE
        </span>
        <i />
        <span>
          <ZoomIn size={13} /> SCROLL TO ZOOM
        </span>
      </div>
    </div>
  );
}

export default function ChaptersPage() {
  const router = useRouter();

  const {
    setActivePage,
    setActiveChapter,
  } = useAskEngineer();

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPart, setSelectedPart] = useState(0);
  const [meshName, setMeshName] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [changing, setChanging] = useState(false);

  const changeTimer = useRef(null);

  const chapter = chapters[activeIndex];
  const selectedComponent = chapter.components[selectedPart];

  useEffect(() => {
    setActivePage("chapters");
    setActiveChapter(chapterIds[0]);
  }, [setActivePage, setActiveChapter]);

  const changeChapter = useCallback(
    (index) => {
      if (changing) return;

      if (index >= chapters.length) {
        router.push("/missions");
        return;
      }

      if (
        index < 0 ||
        index === activeIndex
      ) {
        return;
      }

      setChanging(true);

      if (changeTimer.current) {
        window.clearTimeout(changeTimer.current);
      }

      changeTimer.current = window.setTimeout(() => {
        setActiveIndex(index);
        setActiveChapter(chapterIds[index]);
        setSelectedPart(0);
        setMeshName("");
        setResetKey((value) => value + 1);
        setChanging(false);
        changeTimer.current = null;
      }, 220);
    },
    [activeIndex, changing, router, setActiveChapter]
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowRight") {
        changeChapter(activeIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        changeChapter(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, changeChapter]);

  useEffect(() => {
    return () => {
      if (changeTimer.current) {
        window.clearTimeout(changeTimer.current);
      }
    };
  }, []);

  return (
    <main className="chapters-page">
      <div className="space-glow glow-a" />
      <div className="space-glow glow-b" />
      <div className="space-stars" />
      <div className="space-grid" />

      <header className="chapters-header">
        <div className="header-label">
          <span>THE STORY</span>
          <i />
          <strong>CHAPTERS</strong>
        </div>

        <a href="/" className="home-link">
          <ArrowLeft size={15} />
          HOME
        </a>
      </header>

      <section
        className={`chapter-slide ${changing ? "slide-out" : "slide-in"}`}
      >
        <div className="chapter-left">
          <div className="model-heading">
            <span>NASA 3D EXPLORER</span>
            <span className="live-status">
              <i /> INTERACTIVE MODEL
            </span>
          </div>

          <ModelViewer
            chapter={chapter}
            resetKey={resetKey}
            onMeshClick={setMeshName}
          />

          <div className="model-footer">
            <div>
              <span className="tiny-label">MISSION OBJECT</span>
              <h2>{chapter.title}</h2>
            </div>

            <span className="file-name">
              {chapter.model.split("/").pop()}
            </span>
          </div>

          {meshName && (
            <div className="mesh-selected">
              <Box size={13} />
              Selected mesh: <strong>{meshName}</strong>
              <button onClick={() => setMeshName("")}>×</button>
            </div>
          )}
        </div>

        <div className="chapter-right">
          <div className="chapter-meta">
            <span className="chapter-number">{chapter.number}</span>
            <span>{chapter.period}</span>
          </div>

          <h1>{chapter.title}</h1>
          <p className="subtitle">{chapter.subtitle}</p>

          <div className="gold-line" />

          <section className="story-section">
            <span className="section-label">THE STORY</span>
            <p>{chapter.description}</p>
          </section>

          <section className="purpose-section">
            <span className="section-label">MISSION PURPOSE</span>
            <p>{chapter.purpose}</p>
          </section>

          <section className="parts-section">
            <div className="parts-heading">
              <span className="section-label">EXPLORE COMPONENTS</span>
              <span>
                {String(chapter.components.length).padStart(2, "0")} PARTS
              </span>
            </div>

            <div className="parts-list">
              {chapter.components.map((part, index) => (
                <button
                  key={part.name}
                  className={
                    selectedPart === index
                      ? "part-button active"
                      : "part-button"
                  }
                  onClick={() => setSelectedPart(index)}
                >
                  <span className="part-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{part.name}</span>
                  <ChevronRight size={14} />
                </button>
              ))}
            </div>

            <div
              className="part-description"
              key={`${chapter.number}-${selectedPart}`}
            >
              <div>
                <Box size={14} /> {selectedComponent.name}
              </div>
              <p>{selectedComponent.description}</p>
            </div>
          </section>

          <section className="fact-section">
            <Info size={15} />
            <div>
              <span className="section-label">DID YOU KNOW?</span>
              <p>{chapter.fact}</p>
            </div>
          </section>
        </div>
      </section>

      <footer className="chapter-footer">
        <button
          className="footer-nav"
          onClick={() => changeChapter(activeIndex - 1)}
          disabled={activeIndex === 0 || changing}
        >
          <ChevronLeft size={17} />
          <span>PREVIOUS</span>
        </button>

        <div className="slide-progress">
          <div className="progress-top">
            <span>CHAPTER {chapter.number}</span>
            <span>06</span>
          </div>

          <div className="progress-bar">
            <div
              style={{
                width: `${((activeIndex + 1) / chapters.length) * 100}%`,
              }}
            />
          </div>

          <div className="slide-dots">
            {chapters.map((item, index) => (
              <button
                key={item.number}
                className={activeIndex === index ? "active" : ""}
                onClick={() => changeChapter(index)}
                aria-label={`Go to ${item.title}`}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <button
          className="footer-nav next"
          onClick={() => changeChapter(activeIndex + 1)}
          disabled={changing}
        >
          <span>NEXT</span>
          <ChevronRight size={17} />
        </button>
      </footer>
    </main>
  );
}
