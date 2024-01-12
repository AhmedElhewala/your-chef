import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeContext = createContext();

function DarkModeProvider ({children}) {
  const [isDark, setIsDark] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode"
  )

  useEffect(
    function () {
      if(isDark) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDark]
  );

    function toggleDarkMode () {
      setIsDark((isDark) => !isDark)
    }

    return <DarkModeContext.Provider value={{isDark, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
}

function useDarkMode () {
  const modeContext = useContext(DarkModeContext);
  if (modeContext === undefined) 
    throw new Error("There is an error in using the dark mode context");
  return modeContext;
}

export {DarkModeProvider, useDarkMode}