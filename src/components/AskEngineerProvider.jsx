"use client";

import { createContext, useContext, useState } from "react";

const AskEngineerContext = createContext(null);

export function AskEngineerProvider({ children }) {
  const [activePage, setActivePage] = useState("landing");
  const [activeChapter, setActiveChapter] = useState("apollo-reflectors");

  return (
    <AskEngineerContext.Provider
      value={{
        activePage,
        setActivePage,
        activeChapter,
        setActiveChapter,
      }}
    >
      {children}
    </AskEngineerContext.Provider>
  );
}

export function useAskEngineer() {
  const context = useContext(AskEngineerContext);

  if (!context) {
    throw new Error(
      "useAskEngineer must be used inside AskEngineerProvider"
    );
  }

  return context;
}