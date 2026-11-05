// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   MessageCircle,
//   X,
//   Send,
//   UserRound,
//   ChevronRight,
//   CircleHelp,
//   Sparkles,
// } from "lucide-react";

// import { useAskEngineer } from "./AskEngineerProvider";
// import "./AskEngineer.css";

// const knowledgeBase = {
//   landing: {
//     title: "NovoSriti",
//     welcome:
//       "Welcome to NovoSriti! I can help you understand this project and what you can explore here.",
//     questions: [
//       "What is NovoSriti?",
//       "What is this project about?",
//       "What can I explore here?",
//       "Why is this project important?",
//     ],
//     answers: [
//       {
//         keywords: ["what is novosriti", "define novosriti", "about novosriti"],
//         answer:
//           "NovoSriti is an interactive space storytelling experience about human-made equipment left behind on the Moon and Mars. It helps young explorers discover the stories behind these forgotten machines.",
//       },
//       {
//         keywords: ["project about", "main purpose", "purpose of this project"],
//         answer:
//           "The project tells the stories of space equipment that continued to matter even after its original mission ended. It combines storytelling, exploration, and learning.",
//       },
//       {
//         keywords: ["explore", "what can i do", "what can i see"],
//         answer:
//           "You can explore the introduction, read the Prologue, discover six space-history chapters, complete the mission game, and review what you learned in the Overview.",
//       },
//       {
//         keywords: ["important", "importance", "why this project"],
//         answer:
//           "Abandoned equipment can still provide scientific value and teach us about exploration, engineering, and the history of space missions. NovoSriti makes those stories easier to discover.",
//       },
//     ],
//   },

//   prologue: {
//     title: "The Prologue",
//     welcome:
//       "Welcome to the Prologue. Ask me about the story, the abandoned equipment, and why these machines still matter.",
//     questions: [
//       "Why do humans leave equipment in space?",
//       "What does abandoned but not forgotten mean?",
//       "Why can old equipment still be useful?",
//       "What is the main story of the Prologue?",
//     ],
//     answers: [
//       {
//         keywords: ["why", "leave equipment", "left behind", "abandon equipment"],
//         answer:
//           "Space missions have limited time, power, fuel, and resources. Returning every instrument to Earth is often impractical, so some equipment remains on the Moon or Mars after its mission ends.",
//       },
//       {
//         keywords: ["abandoned but not forgotten", "meaning", "not forgotten"],
//         answer:
//           "It means that equipment may be physically left behind, but its discoveries, scientific contributions, and stories are still remembered.",
//       },
//       {
//         keywords: ["old equipment", "still useful", "useful", "value"],
//         answer:
//           "Old space equipment can continue to provide scientific information, help future researchers understand past missions, and inspire new technologies.",
//       },
//       {
//         keywords: ["main story", "prologue", "story about"],
//         answer:
//           "The Prologue introduces the idea that the end of a mission does not mean the end of its story. It invites us to explore the machines humans left behind and discover what they still teach us.",
//       },
//     ],
//   },

//   chapters: {
//     "apollo-reflectors": {
//       title: "Apollo Laser Reflectors",
//       welcome:
//         "You are exploring Apollo Laser Reflectors. Ask me about laser reflection, lunar distance, and the Apollo experiments.",
//       questions: [
//         "What are Apollo laser reflectors?",
//         "How do laser reflectors work?",
//         "How do scientists measure the distance to the Moon?",
//         "Why were reflectors left on the Moon?",
//       ],
//       answers: [
//         {
//           keywords: ["what are", "laser reflectors", "reflectors"],
//           answer:
//             "Apollo astronauts placed special retroreflector arrays on the Moon. These devices reflect laser light sent from observatories on Earth back toward its source.",
//         },
//         {
//           keywords: ["how", "work", "laser reflection", "reflect"],
//           answer:
//             "A laser pulse travels from Earth to the reflector on the Moon. The reflector sends the light back toward Earth, where scientists measure how long the round trip takes.",
//         },
//         {
//           keywords: ["distance", "measure", "earth", "moon"],
//           answer:
//             "Scientists measure the time taken by a laser pulse to travel to the Moon and return. Using the speed of light, they calculate the distance between Earth and the Moon very precisely.",
//         },
//         {
//           keywords: ["why", "left", "purpose", "moon"],
//           answer:
//             "The reflectors were left on the Moon so scientists could continue conducting lunar laser-ranging experiments long after the Apollo astronauts returned to Earth.",
//         },
//       ],
//     },

//     "apollo-seismometers": {
//       title: "Apollo Seismometers",
//       welcome:
//         "You are exploring Apollo Seismometers. Ask me about moonquakes, seismic waves, and the Moon's interior.",
//       questions: [
//         "What is a seismometer?",
//         "What are moonquakes?",
//         "How did Apollo seismometers work?",
//         "What did scientists learn about the Moon?",
//       ],
//       answers: [
//         {
//           keywords: ["what is", "seismometer", "seismometers"],
//           answer:
//             "A seismometer is an instrument that detects and measures vibrations and ground movement. Apollo astronauts placed seismometers on the Moon to study its seismic activity.",
//         },
//         {
//           keywords: ["moonquake", "moonquakes", "earthquake"],
//           answer:
//             "Moonquakes are seismic events that cause vibrations inside or on the surface of the Moon. They can happen for several reasons, including tidal forces and impacts.",
//         },
//         {
//           keywords: ["how", "work", "apollo", "detect"],
//           answer:
//             "Apollo seismometers detected ground vibrations and recorded seismic waves. Scientists studied these signals to understand what was happening inside the Moon.",
//         },
//         {
//           keywords: ["learn", "inside", "interior", "discovered"],
//           answer:
//             "The seismic measurements helped scientists investigate the Moon's internal structure, including information about its crust, mantle, and deeper interior.",
//         },
//       ],
//     },

//     "viking-landers": {
//       title: "Viking Landers",
//       welcome:
//         "You are exploring Viking Landers. Ask me about the first successful US Mars landings and their scientific experiments.",
//       questions: [
//         "What were the Viking landers?",
//         "How did Viking land on Mars?",
//         "What experiments did Viking perform?",
//         "Did Viking find life on Mars?",
//       ],
//       answers: [
//         {
//           keywords: ["what were", "viking landers", "viking"],
//           answer:
//             "Viking 1 and Viking 2 were NASA missions that successfully landed spacecraft on Mars in 1976. They studied the Martian surface, atmosphere, and soil.",
//         },
//         {
//           keywords: ["how", "land", "landing", "mars"],
//           answer:
//             "The Viking landers used a combination of a heat shield, parachute, and retrorockets to slow down before safely reaching the Martian surface.",
//         },
//         {
//           keywords: ["experiment", "experiments", "scientific"],
//           answer:
//             "The Viking landers carried cameras, weather instruments, and biology experiments. They also analyzed Martian soil to investigate its chemical properties.",
//         },
//         {
//           keywords: ["life", "living", "alive", "organism"],
//           answer:
//             "Viking performed experiments designed to look for signs of microbial life. The results were complex and did not provide conclusive evidence of life on Mars.",
//         },
//       ],
//     },

//     "spirit-opportunity": {
//       title: "Spirit & Opportunity",
//       welcome:
//         "You are exploring Spirit and Opportunity. Ask me about the Mars rovers, their discoveries, and their exploration journeys.",
//       questions: [
//         "What were Spirit and Opportunity?",
//         "What did the rovers discover?",
//         "How did the rovers move on Mars?",
//         "Why were their missions important?",
//       ],
//       answers: [
//         {
//           keywords: ["what were", "spirit", "opportunity", "rovers"],
//           answer:
//             "Spirit and Opportunity were NASA's twin Mars Exploration Rovers. They landed on Mars in January 2004 to study rocks, soil, and the planet's geological history.",
//         },
//         {
//           keywords: ["discover", "discovery", "water", "evidence"],
//           answer:
//             "The rovers found geological evidence that liquid water had affected parts of Mars in the past. Their observations helped scientists understand the planet's ancient environments.",
//         },
//         {
//           keywords: ["move", "drive", "wheel", "travel"],
//           answer:
//             "Spirit and Opportunity used six wheels, cameras, and scientific instruments to travel across the Martian surface and investigate interesting rocks and locations.",
//         },
//         {
//           keywords: ["important", "mission", "contribution"],
//           answer:
//             "Their missions greatly exceeded their original planned duration. They sent valuable images and scientific data that changed our understanding of Mars.",
//         },
//       ],
//     },

//     ingenuity: {
//       title: "Ingenuity",
//       welcome:
//         "You are exploring Ingenuity. Ask me about the first powered, controlled flight on another planet.",
//       questions: [
//         "What is Ingenuity?",
//         "How did Ingenuity fly on Mars?",
//         "Why was flying on Mars difficult?",
//         "What did Ingenuity prove?",
//       ],
//       answers: [
//         {
//           keywords: ["what is", "ingenuity", "helicopter"],
//           answer:
//             "Ingenuity was NASA's small robotic helicopter that travelled to Mars with the Perseverance rover. It became the first aircraft to achieve powered, controlled flight on another planet.",
//         },
//         {
//           keywords: ["how", "fly", "flight", "rotor"],
//           answer:
//             "Ingenuity used two sets of rapidly spinning rotor blades to generate lift. Its flight system was designed to operate in the very thin Martian atmosphere.",
//         },
//         {
//           keywords: ["difficult", "thin atmosphere", "atmosphere", "challenge"],
//           answer:
//             "Mars has a very thin atmosphere compared with Earth. That means an aircraft must spin its rotor blades much faster and be carefully designed to generate enough lift.",
//         },
//         {
//           keywords: ["prove", "demonstrate", "achievement", "important"],
//           answer:
//             "Ingenuity demonstrated that powered flight is possible on Mars. Its success opened new possibilities for future aerial exploration of other worlds.",
//         },
//       ],
//     },

//     "voyager-1": {
//       title: "Voyager 1",
//       welcome:
//         "You are exploring Voyager 1. Ask me about its journey, communication, and exploration beyond our Solar System.",
//       questions: [
//         "What is Voyager 1?",
//         "Why was Voyager 1 launched?",
//         "How does Voyager 1 communicate with Earth?",
//         "What is the interstellar space?",
//       ],
//       answers: [
//         {
//           keywords: ["what is", "voyager 1", "voyager"],
//           answer:
//             "Voyager 1 is a NASA spacecraft launched in 1977. It explored the outer planets and later travelled into interstellar space, becoming the most distant human-made spacecraft.",
//         },
//         {
//           keywords: ["why", "launched", "mission", "purpose"],
//           answer:
//             "Voyager 1 was launched to study the outer Solar System, especially Jupiter and Saturn. Its journey later continued far beyond the planets.",
//         },
//         {
//           keywords: ["communicate", "communication", "signal", "earth"],
//           answer:
//             "Voyager 1 communicates with Earth using radio signals. NASA's Deep Space Network receives its extremely weak signals through large antennas.",
//         },
//         {
//           keywords: ["interstellar", "space", "beyond solar system"],
//           answer:
//             "Interstellar space is the region between stars. Voyager 1 entered interstellar space in 2012, beyond the heliosphere that surrounds our Solar System.",
//         },
//       ],
//     },
//   },

//   game: {
//     title: "Mission Game",
//     welcome:
//       "Welcome to Mission Control! Ask me about the missions, destinations, and how to explore the game.",
//     questions: [
//       "What is the mission game?",
//       "How do I complete a mission?",
//       "Why are some destinations locked?",
//       "What can I learn from the game?",
//     ],
//     answers: [
//       {
//         keywords: ["what is", "mission game", "game"],
//         answer:
//           "The NovoSriti mission game is an interactive exploration experience. Players travel through space destinations and discover stories about human-made equipment left behind.",
//       },
//       {
//         keywords: ["complete", "finish", "mission", "play"],
//         answer:
//           "Follow the mission route, explore the available destination, and complete its activities to progress through the game.",
//       },
//       {
//         keywords: ["locked", "unlock", "destination"],
//         answer:
//           "Some destinations remain locked until you complete the required mission. This helps guide your exploration step by step.",
//       },
//       {
//         keywords: ["learn", "learning", "game teach"],
//         answer:
//           "The game helps you remember the history of space missions, the purpose of scientific equipment, and the discoveries made on the Moon and Mars.",
//       },
//     ],
//   },

//   overview: {
//     title: "Project Overview",
//     welcome:
//       "Welcome to the project overview. Ask me about the key stories, learning outcomes, and the main message of NovoSriti.",
//     questions: [
//       "What are the six stories about?",
//       "What will I learn from NovoSriti?",
//       "Who is this project for?",
//       "What is the main message of the project?",
//     ],
//     answers: [
//       {
//         keywords: ["six stories", "six chapters", "chapters about"],
//         answer:
//           "The six stories cover Apollo Laser Reflectors, Apollo Seismometers, Viking Landers, Spirit and Opportunity, Ingenuity, and Voyager 1. Each reveals a different part of humanity's journey into space.",
//       },
//       {
//         keywords: ["learn", "learning outcome", "knowledge"],
//         answer:
//           "You can learn about space exploration, scientific instruments, Moon and Mars missions, engineering challenges, and how discoveries continue beyond a mission's end.",
//       },
//       {
//         keywords: ["who", "audience", "age", "children"],
//         answer:
//           "NovoSriti is designed especially for young explorers aged 9–14, with interactive storytelling and exploration that make space science easier to understand.",
//       },
//       {
//         keywords: ["main message", "message", "meaning"],
//         answer:
//           "The main message is that a mission may end, but its discoveries and contributions can continue. The equipment left behind still has a story worth remembering.",
//       },
//     ],
//   },
// };

// function normalizeText(value) {
//   return value
//     .toLowerCase()
//     .replace(/[^\w\s]/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();
// }

// function getCurrentKnowledge(activePage, activeChapter) {
//   if (activePage === "chapters") {
//     return (
//       knowledgeBase.chapters[activeChapter] ||
//       knowledgeBase.chapters["apollo-reflectors"]
//     );
//   }

//   return knowledgeBase[activePage] || knowledgeBase.landing;
// }

// function findAnswer(question, knowledge) {
//   const normalizedQuestion = normalizeText(question);

//   if (!normalizedQuestion) {
//     return "Please enter a question.";
//   }

//   let bestMatch = null;
//   let highestScore = 0;

//   for (const item of knowledge.answers) {
//     let score = 0;

//     for (const keyword of item.keywords) {
//       const normalizedKeyword = normalizeText(keyword);

//       if (
//         normalizedQuestion.includes(normalizedKeyword) ||
//         normalizedKeyword.includes(normalizedQuestion)
//       ) {
//         score += normalizedKeyword.split(" ").length + 2;
//       } else {
//         const words = normalizedKeyword.split(" ");

//         words.forEach((word) => {
//           if (word.length > 2 && normalizedQuestion.includes(word)) {
//             score += 1;
//           }
//         });
//       }
//     }

//     if (score > highestScore) {
//       highestScore = score;
//       bestMatch = item;
//     }
//   }

//   if (bestMatch && highestScore >= 2) {
//     return bestMatch.answer;
//   }

//   return `I can only answer questions about ${knowledge.title} while you are exploring this section. Please try one of the suggested questions.`;
// }

// export default function AskEngineer() {
//   const {
//     activePage,
//     activeChapter,
//   } = useAskEngineer();

//   const knowledge = getCurrentKnowledge(activePage, activeChapter);

//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     setMessages([
//       {
//         role: "assistant",
//         text: knowledge.welcome,
//       },
//     ]);

//     setInput("");
//   }, [activePage, activeChapter]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages]);

//   function sendMessage(value = input) {
//     const question = value.trim();

//     if (!question) return;

//     const answer = findAnswer(question, knowledge);

//     setMessages((previous) => [
//       ...previous,
//       {
//         role: "user",
//         text: question,
//       },
//       {
//         role: "assistant",
//         text: answer,
//       },
//     ]);

//     setInput("");
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     sendMessage();
//   }

//   return (
//     <>
//       <button
//         className="ask-floating-btn"
//         onClick={() => setIsOpen((previous) => !previous)}
//         aria-label="Open Ask the Engineer"
//         type="button"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>

//       {isOpen && (
//         <div className="ask-panel">
//           <div className="ask-header">
//             <div className="ask-header-info">
//               <div className="ask-avatar">
//                 <Sparkles size={20} />
//               </div>

//               <div>
//                 <h3>Ask the Engineer</h3>
//                 <p>{knowledge.title}</p>
//               </div>
//             </div>

//             <button
//               className="ask-close-btn"
//               onClick={() => setIsOpen(false)}
//               type="button"
//               aria-label="Close assistant"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           <div className="ask-question-list">
//             <div className="ask-question-title">
//               <CircleHelp size={15} />
//               <span>Suggested Questions</span>
//             </div>

//             {knowledge.questions.map((question, index) => (
//               <button
//                 className="ask-question-item"
//                 key={`${knowledge.title}-${index}`}
//                 onClick={() => sendMessage(question)}
//                 type="button"
//               >
//                 <span>{question}</span>
//                 <ChevronRight size={15} />
//               </button>
//             ))}
//           </div>

//           <div className="ask-messages">
//             {messages.map((message, index) => (
//               <div
//                 className={`ask-message ${
//                   message.role === "user" ? "user-message" : "ai-message"
//                 }`}
//                 key={`${message.role}-${index}`}
//               >
//                 {message.role === "assistant" ? (
//                   <div className="ask-message-avatar">
//                     <Sparkles size={15} />
//                   </div>
//                 ) : (
//                   <div className="ask-user-avatar">
//                     <UserRound size={15} />
//                   </div>
//                 )}

//                 <div className="ask-message-content">
//                   {message.text}
//                 </div>
//               </div>
//             ))}

//             <div ref={messagesEndRef} />
//           </div>

//           <form className="ask-input-area" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={input}
//               onChange={(event) => setInput(event.target.value)}
//               placeholder={`Ask about ${knowledge.title}...`}
//               aria-label="Ask a question"
//             />

//             <button
//               type="submit"
//               disabled={!input.trim()}
//               aria-label="Send question"
//             >
//               <Send size={18} />
//             </button>
//           </form>

//           <div className="ask-footer">
//             <span>Answers are limited to the current section.</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  ChevronRight,
  CircleHelp,
  Sparkles,
  Satellite,
} from "lucide-react";

import { useAskEngineer } from "./AskEngineerProvider";
import "./AskEngineer.css";

const knowledgeBase = {
  landing: {
    title: "NovoSriti",
    welcome:
      "Welcome to NovoSriti! I can help you understand this project and what you can explore here.",
    questions: [
      "What is NovoSriti?",
      "What is this project about?",
      "What can I explore here?",
      "Why is this project important?",
    ],
    answers: [
      {
        keywords: ["what is novosriti", "define novosriti", "about novosriti"],
        answer:
          "NovoSriti is an interactive space storytelling experience about human-made equipment left behind on the Moon and Mars. It helps young explorers discover the stories behind these forgotten machines.",
      },
      {
        keywords: ["project about", "main purpose", "purpose of this project"],
        answer:
          "The project tells the stories of space equipment that continued to matter even after its original mission ended. It combines storytelling, exploration, and learning.",
      },
      {
        keywords: ["explore", "what can i do", "what can i see"],
        answer:
          "You can explore the introduction, read the Prologue, discover six space-history chapters, complete the mission game, and review what you learned in the Overview.",
      },
      {
        keywords: ["important", "importance", "why this project"],
        answer:
          "Abandoned equipment can still provide scientific value and teach us about exploration, engineering, and the history of space missions. NovoSriti makes those stories easier to discover.",
      },
    ],
  },

  prologue: {
    title: "The Prologue",
    welcome:
      "Welcome to the Prologue. Ask me about the story, the abandoned equipment, and why these machines still matter.",
    questions: [
      "Why do humans leave equipment in space?",
      "What does abandoned but not forgotten mean?",
      "Why can old equipment still be useful?",
      "What is the main story of the Prologue?",
    ],
    answers: [
      {
        keywords: ["why", "leave equipment", "left behind", "abandon equipment"],
        answer:
          "Space missions have limited time, power, fuel, and resources. Returning every instrument to Earth is often impractical, so some equipment remains on the Moon or Mars after its mission ends.",
      },
      {
        keywords: ["abandoned but not forgotten", "meaning", "not forgotten"],
        answer:
          "It means that equipment may be physically left behind, but its discoveries, scientific contributions, and stories are still remembered.",
      },
      {
        keywords: ["old equipment", "still useful", "useful", "value"],
        answer:
          "Old space equipment can continue to provide scientific information, help future researchers understand past missions, and inspire new technologies.",
      },
      {
        keywords: ["main story", "prologue", "story about"],
        answer:
          "The Prologue introduces the idea that the end of a mission does not mean the end of its story. It invites us to explore the machines humans left behind and discover what they still teach us.",
      },
    ],
  },

  chapters: {
    "apollo-reflectors": {
      title: "Apollo Laser Reflectors",
      welcome:
        "You are exploring Apollo Laser Reflectors. Ask me about laser reflection, lunar distance, and the Apollo experiments.",
      questions: [
        "What are Apollo laser reflectors?",
        "How do laser reflectors work?",
        "How do scientists measure the distance to the Moon?",
        "Why were reflectors left on the Moon?",
      ],
      answers: [
        {
          keywords: ["what are", "laser reflectors", "reflectors"],
          answer:
            "Apollo astronauts placed special retroreflector arrays on the Moon. These devices reflect laser light sent from observatories on Earth back toward its source.",
        },
        {
          keywords: ["how", "work", "laser reflection", "reflect"],
          answer:
            "A laser pulse travels from Earth to the reflector on the Moon. The reflector sends the light back toward Earth, where scientists measure how long the round trip takes.",
        },
        {
          keywords: ["distance", "measure", "earth", "moon"],
          answer:
            "Scientists measure the time taken by a laser pulse to travel to the Moon and return. Using the speed of light, they calculate the distance between Earth and the Moon very precisely.",
        },
        {
          keywords: ["why", "left", "purpose", "moon"],
          answer:
            "The reflectors were left on the Moon so scientists could continue conducting lunar laser-ranging experiments long after the Apollo astronauts returned to Earth.",
        },
      ],
    },

    "apollo-seismometers": {
      title: "Apollo Seismometers",
      welcome:
        "You are exploring Apollo Seismometers. Ask me about moonquakes, seismic waves, and the Moon's interior.",
      questions: [
        "What is a seismometer?",
        "What are moonquakes?",
        "How did Apollo seismometers work?",
        "What did scientists learn about the Moon?",
      ],
      answers: [
        {
          keywords: ["what is", "seismometer", "seismometers"],
          answer:
            "A seismometer is an instrument that detects and measures vibrations and ground movement. Apollo astronauts placed seismometers on the Moon to study its seismic activity.",
        },
        {
          keywords: ["moonquake", "moonquakes", "earthquake"],
          answer:
            "Moonquakes are seismic events that cause vibrations inside or on the surface of the Moon. They can happen for several reasons, including tidal forces and impacts.",
        },
        {
          keywords: ["how", "work", "apollo", "detect"],
          answer:
            "Apollo seismometers detected ground vibrations and recorded seismic waves. Scientists studied these signals to understand what was happening inside the Moon.",
        },
        {
          keywords: ["learn", "inside", "interior", "discovered"],
          answer:
            "The seismic measurements helped scientists investigate the Moon's internal structure, including information about its crust, mantle, and deeper interior.",
        },
      ],
    },

    "viking-landers": {
      title: "Viking Landers",
      welcome:
        "You are exploring Viking Landers. Ask me about the first successful US Mars landings and their scientific experiments.",
      questions: [
        "What were the Viking landers?",
        "How did Viking land on Mars?",
        "What experiments did Viking perform?",
        "Did Viking find life on Mars?",
      ],
      answers: [
        {
          keywords: ["what were", "viking landers", "viking"],
          answer:
            "Viking 1 and Viking 2 were NASA missions that successfully landed spacecraft on Mars in 1976. They studied the Martian surface, atmosphere, and soil.",
        },
        {
          keywords: ["how", "land", "landing", "mars"],
          answer:
            "The Viking landers used a combination of a heat shield, parachute, and retrorockets to slow down before safely reaching the Martian surface.",
        },
        {
          keywords: ["experiment", "experiments", "scientific"],
          answer:
            "The Viking landers carried cameras, weather instruments, and biology experiments. They also analyzed Martian soil to investigate its chemical properties.",
        },
        {
          keywords: ["life", "living", "alive", "organism"],
          answer:
            "Viking performed experiments designed to look for signs of microbial life. The results were complex and did not provide conclusive evidence of life on Mars.",
        },
      ],
    },

    "spirit-opportunity": {
      title: "Spirit & Opportunity",
      welcome:
        "You are exploring Spirit and Opportunity. Ask me about the Mars rovers, their discoveries, and their exploration journeys.",
      questions: [
        "What were Spirit and Opportunity?",
        "What did the rovers discover?",
        "How did the rovers move on Mars?",
        "Why were their missions important?",
      ],
      answers: [
        {
          keywords: ["what were", "spirit", "opportunity", "rovers"],
          answer:
            "Spirit and Opportunity were NASA's twin Mars Exploration Rovers. They landed on Mars in January 2004 to study rocks, soil, and the planet's geological history.",
        },
        {
          keywords: ["discover", "discovery", "water", "evidence"],
          answer:
            "The rovers found geological evidence that liquid water had affected parts of Mars in the past. Their observations helped scientists understand the planet's ancient environments.",
        },
        {
          keywords: ["move", "drive", "wheel", "travel"],
          answer:
            "Spirit and Opportunity used six wheels, cameras, and scientific instruments to travel across the Martian surface and investigate interesting rocks and locations.",
        },
        {
          keywords: ["important", "mission", "contribution"],
          answer:
            "Their missions greatly exceeded their original planned duration. They sent valuable images and scientific data that changed our understanding of Mars.",
        },
      ],
    },

    ingenuity: {
      title: "Ingenuity",
      welcome:
        "You are exploring Ingenuity. Ask me about the first powered, controlled flight on another planet.",
      questions: [
        "What is Ingenuity?",
        "How did Ingenuity fly on Mars?",
        "Why was flying on Mars difficult?",
        "What did Ingenuity prove?",
      ],
      answers: [
        {
          keywords: ["what is", "ingenuity", "helicopter"],
          answer:
            "Ingenuity was NASA's small robotic helicopter that travelled to Mars with the Perseverance rover. It became the first aircraft to achieve powered, controlled flight on another planet.",
        },
        {
          keywords: ["how", "fly", "flight", "rotor"],
          answer:
            "Ingenuity used two sets of rapidly spinning rotor blades to generate lift. Its flight system was designed to operate in the very thin Martian atmosphere.",
        },
        {
          keywords: ["difficult", "thin atmosphere", "atmosphere", "challenge"],
          answer:
            "Mars has a very thin atmosphere compared with Earth. That means an aircraft must spin its rotor blades much faster and be carefully designed to generate enough lift.",
        },
        {
          keywords: ["prove", "demonstrate", "achievement", "important"],
          answer:
            "Ingenuity demonstrated that powered flight is possible on Mars. Its success opened new possibilities for future aerial exploration of other worlds.",
        },
      ],
    },

    "voyager-1": {
      title: "Voyager 1",
      welcome:
        "You are exploring Voyager 1. Ask me about its journey, communication, and exploration beyond our Solar System.",
      questions: [
        "What is Voyager 1?",
        "Why was Voyager 1 launched?",
        "How does Voyager 1 communicate with Earth?",
        "What is the interstellar space?",
      ],
      answers: [
        {
          keywords: ["what is", "voyager 1", "voyager"],
          answer:
            "Voyager 1 is a NASA spacecraft launched in 1977. It explored the outer planets and later travelled into interstellar space, becoming the most distant human-made spacecraft.",
        },
        {
          keywords: ["why", "launched", "mission", "purpose"],
          answer:
            "Voyager 1 was launched to study the outer Solar System, especially Jupiter and Saturn. Its journey later continued far beyond the planets.",
        },
        {
          keywords: ["communicate", "communication", "signal", "earth"],
          answer:
            "Voyager 1 communicates with Earth using radio signals. NASA's Deep Space Network receives its extremely weak signals through large antennas.",
        },
        {
          keywords: ["interstellar", "space", "beyond solar system"],
          answer:
            "Interstellar space is the region between stars. Voyager 1 entered interstellar space in 2012, beyond the heliosphere that surrounds our Solar System.",
        },
      ],
    },
  },

  game: {
    title: "Mission Game",
    welcome:
      "Welcome to Mission Control! Ask me about the missions, destinations, and how to explore the game.",
    questions: [
      "What is the mission game?",
      "How do I complete a mission?",
      "Why are some destinations locked?",
      "What can I learn from the game?",
    ],
    answers: [
      {
        keywords: ["what is", "mission game", "game"],
        answer:
          "The NovoSriti mission game is an interactive exploration experience. Players travel through space destinations and discover stories about human-made equipment left behind.",
      },
      {
        keywords: ["complete", "finish", "mission", "play"],
        answer:
          "Follow the mission route, explore the available destination, and complete its activities to progress through the game.",
      },
      {
        keywords: ["locked", "unlock", "destination"],
        answer:
          "Some destinations remain locked until you complete the required mission. This helps guide your exploration step by step.",
      },
      {
        keywords: ["learn", "learning", "game teach"],
        answer:
          "The game helps you remember the history of space missions, the purpose of scientific equipment, and the discoveries made on the Moon and Mars.",
      },
    ],
  },

  overview: {
    title: "Project Overview",
    welcome:
      "Welcome to the project overview. Ask me about the key stories, learning outcomes, and the main message of NovoSriti.",
    questions: [
      "What are the six stories about?",
      "What will I learn from NovoSriti?",
      "Who is this project for?",
      "What is the main message of the project?",
    ],
    answers: [
      {
        keywords: ["six stories", "six chapters", "chapters about"],
        answer:
          "The six stories cover Apollo Laser Reflectors, Apollo Seismometers, Viking Landers, Spirit and Opportunity, Ingenuity, and Voyager 1. Each reveals a different part of humanity's journey into space.",
      },
      {
        keywords: ["learn", "learning outcome", "knowledge"],
        answer:
          "You can learn about space exploration, scientific instruments, Moon and Mars missions, engineering challenges, and how discoveries continue beyond a mission's end.",
      },
      {
        keywords: ["who", "audience", "age", "children"],
        answer:
          "NovoSriti is designed especially for young explorers aged 9–14, with interactive storytelling and exploration that make space science easier to understand.",
      },
      {
        keywords: ["main message", "message", "meaning"],
        answer:
          "The main message is that a mission may end, but its discoveries and contributions can continue. The equipment left behind still has a story worth remembering.",
      },
    ],
  },
};

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getCurrentKnowledge(activePage, activeChapter) {
  if (activePage === "chapters") {
    return (
      knowledgeBase.chapters[activeChapter] ||
      knowledgeBase.chapters["apollo-reflectors"]
    );
  }

  return knowledgeBase[activePage] || knowledgeBase.landing;
}

function findAnswer(question, knowledge) {
  const normalizedQuestion = normalizeText(question);

  if (!normalizedQuestion) {
    return "Please enter a question.";
  }

  let bestMatch = null;
  let highestScore = 0;

  for (const item of knowledge.answers) {
    let score = 0;

    for (const keyword of item.keywords) {
      const normalizedKeyword = normalizeText(keyword);

      if (
        normalizedQuestion.includes(normalizedKeyword) ||
        normalizedKeyword.includes(normalizedQuestion)
      ) {
        score += normalizedKeyword.split(" ").length + 2;
      } else {
        normalizedKeyword.split(" ").forEach((word) => {
          if (word.length > 2 && normalizedQuestion.includes(word)) {
            score += 1;
          }
        });
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return bestMatch.answer;
  }

  return `I can only answer questions about ${knowledge.title} while you are exploring this section. Please try one of the suggested questions.`;
}

function ReactAvatar() {
  return (
    <div className="ask-react-avatar">
      <svg viewBox="0 0 256 256" aria-label="React logo">
        <circle cx="128" cy="128" r="12" fill="#61DAFB" />
        <g
          fill="none"
          stroke="#61DAFB"
          strokeWidth="10"
        >
          <ellipse cx="128" cy="128" rx="94" ry="36" />
          <ellipse
            cx="128"
            cy="128"
            rx="94"
            ry="36"
            transform="rotate(60 128 128)"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="94"
            ry="36"
            transform="rotate(120 128 128)"
          />
        </g>
      </svg>
    </div>
  );
}

function AIAvatar({ small = false }) {
  return (
    <div className={`ask-ai-avatar ${small ? "small" : ""}`}>
      <img
        src="/images/ask-engineer-girl.png"
        alt="AI astronaut"
      />
    </div>
  );
}

export default function AskEngineer() {
  const { activePage, activeChapter } = useAskEngineer();

  const knowledge = getCurrentKnowledge(activePage, activeChapter);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text: knowledge.welcome,
      },
    ]);
    setInput("");
  }, [activePage, activeChapter]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  function sendMessage(value = input) {
    const question = value.trim();

    if (!question) return;

    const answer = findAnswer(question, knowledge);

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);

    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <>
      <button
        className={`ask-floating-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Open Ask the Engineer"
        type="button"
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        {!isOpen && <span className="ask-btn-dot" />}
      </button>

      {isOpen && (
        <section className="ask-panel">
          <header className="ask-header">
            <AIAvatar />

            <div className="ask-header-info">
              <h3>Ask the Engineer</h3>
              <span>
                <i className="ask-online-dot" />
                NovoSriti Space Assistant
              </span>
              <div className="ask-current-topic">
                <Satellite size={12} />
                {knowledge.title}
              </div>
            </div>

            <div className="ask-header-sparkle">
              <Sparkles size={19} />
            </div>

            <button
              className="ask-close-btn"
              onClick={() => setIsOpen(false)}
              type="button"
              aria-label="Close assistant"
            >
              <X size={19} />
            </button>
          </header>

          <div className="ask-content">
            <div className="ask-topic-heading">
              <span>EXPLORE THIS SECTION</span>
              <span>{knowledge.questions.length} QUESTIONS</span>
            </div>

            <div className="ask-question-list">
              {knowledge.questions.map((question, index) => (
                <button
                  className="ask-question-item"
                  key={`${knowledge.title}-${index}`}
                  onClick={() => sendMessage(question)}
                  type="button"
                >
                  <span className="ask-question-number">
                    0{index + 1}
                  </span>
                  <span className="ask-question-text">{question}</span>
                  <ChevronRight
                    size={15}
                    className="ask-question-arrow"
                  />
                </button>
              ))}
            </div>

            <div className="ask-chat-heading">
              <CircleHelp size={14} />
              <span>CONVERSATION</span>
            </div>

            <div className="ask-messages">
              {messages.map((message, index) => (
                <div
                  className={`ask-message ${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  {message.role === "assistant" ? (
                    <AIAvatar small />
                  ) : (
                    <ReactAvatar />
                  )}

                  <div className="ask-message-body">
                    <span className="ask-message-name">
                      {message.role === "assistant"
                        ? "Space Engineer"
                        : "You"}
                    </span>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <form className="ask-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={`Ask about ${knowledge.title}...`}
              aria-label="Ask a question"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send question"
            >
              <Send size={17} />
            </button>
          </form>

          <footer className="ask-footer">
            <span className="ask-footer-star">✦</span>
            Answers are limited to the current section
          </footer>
        </section>
      )}
    </>
  );
}
