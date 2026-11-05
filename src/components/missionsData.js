// ৭টি মিশনের সব তথ্য এখানে। জোন = [x%, y%, ব্যাসার্ধ%]।
// ধাপের ধরন:
//   label            -> বোতাম (zone থাকলে শুধু জোনের ভেতরে দেখা যায়)
//   auto             -> জোনে পৌঁছালেই নিজে এগোয়
//   choices          -> দৃশ্যের ওপর বাছাইয়ের বোতাম
//   effect           -> "laser" | "waveform" | { title, art, caption }
// walk: হাঁটা/চালানো যাবে কি না;  moveFrom: কোন ধাপ থেকে চলাচল চালু।

const LANDER = [12, 62, 12];

export const MISSIONS = [
  {
    id: "apollo-mirror",
    name: "Apollo Laser Reflector",
    place: "THE MOON",
    world: "moon",
    question: "How far away is the Moon?",
    description:
      "Apollo astronauts placed special mirrors on the Moon. Scientists on Earth send laser pulses toward them and measure the returning light.",
    object: "LASER REFLECTOR",
    objectives: ["Reach the deployment area carrying the reflector", "Place the reflector array", "Return a laser pulse from Earth"],
    walk: true,
    moveFrom: 1,
    start: [14, 66],
    carry: { from: 3, to: 3, icon: "🪞" },
    placed: { from: 4, zone: [78, 55], icon: "🪞" },
    steps: [
      { id: "exit", label: "Exit Lander", hint: "You are inside the lunar lander. Step outside." },
      { id: "site", zone: [78, 55, 9], auto: true, toast: "Checkpoint Received!", hint: "Walk to the golden circle." },
      { id: "pick", label: "Pick Up Reflector", zone: LANDER, hint: "Return to the lander. The reflector is stored there." },
      { id: "place", label: "Place Reflector", zone: [78, 55, 9], hint: "Carry the reflector to the golden circle." },
      { id: "laser", label: "Send Laser Pulse", effect: "laser", hint: "The laser comes from an observatory on Earth, not from the Moon." },
    ],
    facts: [
      { label: "FACT", text: "The reflector has no battery, wires or computer. Its corner mirrors send light straight back the way it came." },
      { label: "FACT", text: "Observatories on Earth send laser pulses and time the round trip. Because the speed of light is known, the time gives the distance." },
    ],
    simNote: "The pulse in this game is slowed down and simplified. It is not a real measurement.",
    source: { name: "ILRS: Apollo reflector information", url: "https://ilrs.cddis.eosdis.nasa.gov/missions/satellite_missions/current_missions/ap11_reflector.html" },
    quiz: [
      { type: "choice", question: "Where does the laser pulse come from?", options: ["The Moon", "Earth", "The astronaut's hand"], answer: 1, explanation: "The laser is sent from an observatory on Earth. The Moon reflector only sends it back." },
      { type: "truefalse", question: "The reflector on the Moon has a battery.", options: ["True", "False"], answer: 1, explanation: "It is passive: no battery and no computer. That is why it can keep working for decades." },
      { type: "choice", question: "How do scientists calculate the distance?", options: ["By measuring how long the light takes to return", "By listening to sound", "By counting astronauts"], answer: 0, explanation: "Light travels at a known speed, so travel time becomes distance." },
    ],
  },

  {
    id: "apollo-seismo",
    name: "Apollo Seismometer",
    place: "THE MOON",
    world: "moon",
    question: "Does the Moon shake?",
    description:
      "Apollo astronauts installed seismometers on the Moon. These instruments detected vibrations and helped scientists study the Moon's interior. This game uses an Apollo 12 style station.",
    object: "SEISMOMETER",
    objectives: ["Deploy the seismometer", "Prepare the station", "Detect a vibration signal"],
    walk: true,
    moveFrom: 1,
    start: [14, 66],
    carry: { from: 3, to: 3, icon: "📦" },
    placed: { from: 4, zone: [76, 52], icon: "📡" },
    steps: [
      { id: "exit", label: "Exit Lander", hint: "Step outside the lunar lander." },
      { id: "site", zone: [76, 52, 9], auto: true, toast: "Checkpoint Received!", hint: "Walk to the marked station site." },
      { id: "collect", label: "Collect Equipment", zone: LANDER, hint: "Return to the lander and collect the station equipment." },
      { id: "deploy", label: "Deploy Seismometer", zone: [76, 52, 9], hint: "Carry it to the marked site and set it down." },
      { id: "connect", label: "Connect to Central Station", hint: "Connect the sensor to the central station." },
      { id: "antenna", label: "Deploy Antenna", hint: "Point the antenna toward Earth." },
      { id: "listen", label: "Start Listening", effect: "waveform", hint: "Everything is ready. Start listening." },
    ],
    facts: [
      { label: "FACT", text: "Apollo seismometers detected moonquakes and impacts and sent the data to Earth." },
      { label: "INFERRED", text: "Scientists studied how the shaking travelled and worked out that the Moon has layers inside. This is their best explanation of the data." },
    ],
    simNote: "The wave you saw is an illustration. It is not a live Apollo recording. You cannot create a real moonquake.",
    source: { name: "NASA PDS: Apollo 12 Passive Seismic Experiment", url: "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument%3Apse.a12a&version=1.0" },
    quiz: [
      { type: "choice", question: "What does a seismometer detect?", options: ["Vibrations", "Clouds", "Colours"], answer: 0, explanation: "A seismometer detects ground movement and vibrations." },
      { type: "choice", question: "Which part sent the data back toward Earth?", options: ["The antenna", "The rotor", "The drill"], answer: 0, explanation: "Even the best sensor is silent without a way to talk. The antenna sent data home." },
      { type: "choice", shuffle: false, question: "\"Scientists used the wave patterns to learn about the Moon's interior.\" Is this a fact, an inference, or imagined?", options: ["FACT", "INFERRED", "IMAGINED"], answer: 1, explanation: "It is a scientists' interpretation of data: their best explanation, so it is INFERRED." },
    ],
  },

  {
    id: "viking",
    name: "Viking Landers",
    place: "MARS",
    world: "mars",
    question: "Could life exist in Martian soil?",
    description:
      "The Viking landers stayed in one place on Mars. They photographed their surroundings, collected soil with a robot arm and ran experiments. This game uses one landing site.",
    object: "SOIL SAMPLER",
    objectives: ["Photograph the landing site", "Collect a soil sample", "Analyze the sample"],
    walk: false,
    static: true,
    start: [50, 60],
    base: { icon: "🛰️", pos: [50, 62], label: "VIKING LANDER" },
    steps: [
      { id: "ready", label: "Begin Experiments", hint: "Touchdown complete. Lander Ready." },
      { id: "pano", label: "Take Panorama", hint: "Photograph the landing site.", effect: { title: "Simulated panorama", art: "🏜️🪨🌄", caption: "A game illustration of what a lander camera sees. It is not a real NASA photo." } },
      {
        id: "patch",
        hint: "Choose a soil patch the robot arm can reach.",
        choices: [
          { id: "A", label: "Patch A: open dust", pos: [22, 78] },
          { id: "B", label: "Patch B: beside a rock", pos: [50, 84] },
          { id: "C", label: "Patch C: shallow dip", pos: [78, 78] },
        ],
      },
      { id: "scoop", label: "Collect Soil", hint: "Scoop soil and drop it into the instrument inlet.", effect: { title: "Soil collected", art: "🦾🟤", caption: "The arm delivers soil to the lander's tiny labs." } },
      { id: "analyze", label: "Start Analysis", hint: "Run the soil experiment.", effect: { title: "Result received", art: "🧪📊", caption: "Interesting chemistry, but no clear sign of living things." } },
      { id: "send", label: "Transmit Results", hint: "Send the results to Earth.", effect: { title: "Transmitting", art: "📡 ➜ 🌍", caption: "Viking was a lander. It never drove anywhere." } },
    ],
    facts: [
      { label: "FACT", text: "Viking carried experiments designed to look for signs of microbial life. The results did not give clear evidence of living microorganisms at the tested sites." },
      { label: "INFERRED", text: "The answer was not yes or no. Scientists decided they needed a better clue, and water became the next thing to follow." },
    ],
    simNote: "The experiment results are simplified for the game. Viking did not prove that Mars has no life.",
    source: { name: "NASA Science: Viking", url: "https://science.nasa.gov/mission/viking/" },
    quiz: [
      { type: "truefalse", question: "Viking proved that life does not exist on Mars.", options: ["True", "False"], answer: 1, explanation: "The experiments did not confirm life, but they did not prove Mars never had life." },
      { type: "choice", question: "Which part collected Martian soil?", options: ["The sampling arm", "A camera lens", "A landing leg"], answer: 0, explanation: "The robot arm scooped soil and delivered it to the lander's experiments." },
      { type: "truefalse", question: "Viking drove across Mars on wheels.", options: ["True", "False"], answer: 1, explanation: "Viking was a lander. It stayed where it touched down." },
    ],
  },

  {
    id: "rovers",
    name: "Spirit & Opportunity",
    place: "MARS",
    world: "mars",
    question: "What can rocks tell us about Mars?",
    description:
      "Spirit and Opportunity were twin Mars rovers. They drove across the surface, photographed targets and used a Rock Abrasion Tool to look under the dusty surface of rocks. Opportunity was built for 90 days and worked for almost 15 years.",
    object: "ROCK ABRASION TOOL",
    objectives: ["Reach and photograph target A", "Reach and photograph target B", "Inspect a rock surface"],
    walk: true,
    moveFrom: 2,
    start: [50, 50],
    player: "🚙",
    steps: [
      {
        id: "choose",
        hint: "Choose your rover.",
        choices: [
          { id: "Spirit · Gusev Crater", label: "Spirit (Gusev Crater)", pos: [28, 50] },
          { id: "Opportunity · Meridiani Planum", label: "Opportunity (Meridiani Planum)", pos: [72, 50] },
        ],
      },
      { id: "begin", label: "Begin Exploration", hint: "Your rover has landed. Start driving." },
      { id: "a", label: "Take Photo", zone: [28, 28, 9], hint: "Drive to target A and take a photo.", effect: { title: "Target A captured", art: "📷🏜️", caption: "A simulated camera view made for this game, not a live NASA feed." } },
      { id: "b", label: "Take Photo", zone: [72, 64, 9], hint: "Drive to target B and take a photo.", effect: { title: "Target B captured", art: "📷🪨", caption: "A simulated camera view made for this game, not a live NASA feed." } },
      { id: "rat", label: "Use Rock Abrasion Tool", zone: [72, 64, 9], hint: "Grind away the dusty surface of the rock.", effect: { title: "Fresh rock surface", art: "⚙️🪨✨", caption: "The tool grinds away a thin layer. It does not drill a deep core or collect a sample to send home." } },
    ],
    facts: [
      { label: "FACT", text: "The Rock Abrasion Tool ground away a small amount of rock surface so instruments could inspect fresher material." },
      { label: "INFERRED", text: "Both rovers found minerals that usually form in water. Scientists inferred that parts of ancient Mars were wet." },
    ],
    simNote: "The photos here are simulations. Real rover photos come from NASA/JPL-Caltech archives.",
    source: { name: "NASA Science: MER science instruments", url: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/" },
    quiz: [
      { type: "choice", question: "Why did the rovers grind rocks?", options: ["To look at fresh rock under the dust", "To make food", "To create rain"], answer: 0, explanation: "Fresh rock tells a truer story than dusty rock." },
      { type: "truefalse", question: "Opportunity worked for only 90 days.", options: ["True", "False"], answer: 1, explanation: "90 days was the plan. It worked for almost 15 years." },
      { type: "choice", shuffle: false, question: "\"Parts of ancient Mars were wet.\" Is this a fact, an inference, or imagined?", options: ["FACT", "INFERRED", "IMAGINED"], answer: 1, explanation: "Scientists reasoned this from water-formed minerals, so it is INFERRED." },
    ],
  },

  {
    id: "curiosity",
    name: "Curiosity",
    place: "MARS",
    world: "mars",
    question: "Can rocks reveal the history of Mars?",
    description:
      "Curiosity is a mobile science laboratory. It drills into rocks, collects powder and analyzes it with instruments inside the rover.",
    object: "ROCK DRILL",
    objectives: ["Reach the target rock", "Drill and collect powder", "Analyze the sample inside the rover"],
    walk: true,
    moveFrom: 1,
    start: [14, 66],
    player: "🚜",
    steps: [
      { id: "begin", label: "Begin Exploration", hint: "Curiosity has landed. Start driving." },
      { id: "rock", zone: [70, 40, 9], auto: true, toast: "Target rock reached!", hint: "Drive to the marked rock." },
      { id: "drill", label: "Drill Rock", zone: [70, 40, 9], hint: "Drill into the rock.", effect: { title: "Drilling", art: "🔩🪨", caption: "The drill turns a little rock into fine powder." } },
      { id: "transfer", label: "Transfer Powder", hint: "Move the powder into the rover's instrument.", effect: { title: "Powder transferred", art: "🦾➜🧪", caption: "The powder goes inside the rover." } },
      { id: "analyze", label: "Analyze Sample", hint: "Analyze the powder inside the rover.", effect: { title: "Analysis complete", art: "🧪📈", caption: "Curiosity analyzes samples on board. The powder is not sent back to Earth." } },
    ],
    facts: [
      { label: "FACT", text: "Curiosity drills rock into powder and delivers it to instruments inside the rover for analysis." },
      { label: "FACT", text: "The sample is analyzed on Mars. It is not collected into a cache for return to Earth." },
    ],
    simNote: "Drilling and analysis are simplified animations.",
    source: { name: "NASA Science: Curiosity's drill holes", url: "https://science.nasa.gov/resource/curiositys-42-drill-holes/" },
    quiz: [
      { type: "choice", question: "What happens to the drilled powder?", options: ["It is analyzed inside the rover", "It is sent straight to Earth", "It is thrown away"], answer: 0, explanation: "Rock powder is delivered to instruments inside the rover." },
      { type: "truefalse", question: "Curiosity sends rock samples back to Earth.", options: ["True", "False"], answer: 1, explanation: "The samples stay on Mars. Only the results are sent home." },
      { type: "choice", question: "Which tool turns rock into powder?", options: ["A drill", "A parachute", "A camera"], answer: 0, explanation: "Curiosity's drill makes the powder." },
    ],
  },

  {
    id: "perseverance",
    name: "Perseverance",
    place: "MARS",
    world: "mars",
    question: "Can we bring pieces of Mars back to Earth?",
    description:
      "Perseverance studies rocks and collects carefully chosen core samples. It seals some in tubes so they could be returned in the future.",
    object: "SAMPLE TUBE",
    objectives: ["Inspect the rock", "Collect and seal a core sample", "Store the tube at the cache location"],
    walk: true,
    moveFrom: 1,
    start: [14, 66],
    player: "🛻",
    carry: { from: 3, to: 4, icon: "🧪" },
    steps: [
      { id: "begin", label: "Begin Exploration", hint: "Perseverance has landed. Start driving." },
      { id: "inspect", label: "Inspect Rock", zone: [68, 35, 9], hint: "Drive to the marked rock and inspect it.", effect: { title: "Rock inspected", art: "🔍🪨", caption: "Instruments check whether this rock is worth sampling." } },
      { id: "core", label: "Collect Core Sample", zone: [68, 35, 9], hint: "Cut a core sample and place it in a tube.", effect: { title: "Core collected", art: "🔩🪨➜🧪", caption: "A rock core slides into an empty sample tube." } },
      { id: "seal", label: "Seal Tube", hint: "Seal the tube to keep the sample safe.", effect: { title: "Tube sealed", art: "🧪🔒", caption: "Sealing protects the sample." } },
      { id: "cache", label: "Store Sample Tube", zone: [24, 70, 9], hint: "Carry the tube to the marked cache location.", effect: { title: "Tube stored", art: "🧪📍", caption: "The tube waits for a possible future pickup." } },
    ],
    facts: [
      { label: "FACT", text: "Perseverance collects rock samples and seals them in tubes." },
      { label: "FACT", text: "The goal is to leave samples where they could be collected for return to Earth in the future. Samples are not on Earth yet." },
    ],
    simNote: "The sampling steps are simplified for the game.",
    source: { name: "NASA Science: Perseverance rover components", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" },
    quiz: [
      { type: "choice", question: "Why are samples sealed in tubes?", options: ["To keep them safe", "To make them heavier", "To paint them"], answer: 0, explanation: "Sealing protects the sample until it can be studied." },
      { type: "truefalse", question: "All of Perseverance's samples are already on Earth.", options: ["True", "False"], answer: 1, explanation: "They remain on Mars. Returning them is a goal for the future." },
      { type: "choice", question: "What does Perseverance cut out of a rock?", options: ["A core sample", "A leaf", "A cloud"], answer: 0, explanation: "A drill cuts a small cylinder of rock called a core." },
    ],
  },

  {
    id: "ingenuity",
    name: "Ingenuity",
    place: "MARS",
    world: "mars",
    question: "Can a helicopter fly on another planet?",
    description:
      "Ingenuity rode to Mars attached to the Perseverance rover and was then set down on the surface. It was a technology test: could a helicopter fly in Mars's thin air?",
    object: "ROTOR SYSTEM",
    objectives: ["Deploy and prepare Ingenuity", "Fly the route and capture an image", "Land inside the marked zone"],
    walk: true,
    moveFrom: 4,
    start: [15, 70],
    player: "🚁",
    base: { icon: "🛻", pos: [6, 80], label: "ROVER" },
    steps: [
      { id: "deploy", label: "Deploy Ingenuity", hint: "Perseverance is stationary. Lower the helicopter to the ground." },
      { id: "check", label: "Run Pre-flight Check", hint: "Check the rotors and battery.", effect: { title: "Pre-flight check", art: "✅🔋✅", caption: "These are game indicators, not real mission telemetry." } },
      { id: "spin", label: "Spin Rotors", hint: "Spin up the rotors." },
      { id: "take", label: "Take Off", hint: "Lift off!" },
      { id: "w1", zone: [35, 28, 8], auto: true, toast: "Waypoint 1!", hint: "Fly to the first marker." },
      { id: "w2", zone: [75, 30, 8], auto: true, toast: "Waypoint 2!", hint: "Fly to the second marker." },
      { id: "photo", label: "Capture Image", zone: [75, 30, 8], hint: "Take an aerial photo.", effect: { title: "Aerial view captured", art: "📷🏜️", caption: "A simulated view made for this game." } },
      { id: "land", label: "Land", zone: [15, 70, 10], hint: "Fly back over the landing zone and land." },
    ],
    facts: [
      { label: "FACT", text: "Ingenuity made the first powered, controlled flights on another planet. NASA planned up to five flights. It completed 72." },
      { label: "FACT", text: "Its final flight was on January 18, 2024. Rotor-blade damage ended its flying, and the mission was declared complete on January 25, 2024." },
    ],
    simNote: "This is a historical recreation, not a flight simulator. Ingenuity is not flying today.",
    source: { name: "NASA: Ingenuity mission ends", url: "https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/" },
    quiz: [
      { type: "choice", question: "How many flights did Ingenuity complete?", options: ["5", "72", "1,000"], answer: 1, explanation: "NASA planned a few flights. Ingenuity completed 72." },
      { type: "truefalse", question: "Ingenuity flew to Mars on its own rocket.", options: ["True", "False"], answer: 1, explanation: "It travelled to Mars attached to Perseverance." },
      { type: "choice", question: "Why do the rotor blades spin so fast?", options: ["Mars air is very thin", "To look cool", "To make noise"], answer: 0, explanation: "Thin air gives little lift, so the blades must spin very fast." },
    ],
  },
];