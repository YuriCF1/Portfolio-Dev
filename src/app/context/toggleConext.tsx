'use client'

import React, { createContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

interface LanguageType {
  language: string;
  setLanguage: (newState: string) => void;
}

const initialValue: LanguageType = {
  language: "portuguese",
  setLanguage: () => { }
};

export const LanguageContext = createContext<LanguageType>(initialValue);

export const LanguageContextProvider = ({ children }: ContextProps) => {
  const [language, setLanguage] = useState(initialValue.language);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: (newLanguage: string) => setLanguage(newLanguage)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
