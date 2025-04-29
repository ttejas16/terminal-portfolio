import React, { createContext, useContext } from "react";

interface ContextType {
  pause: boolean,
  setPause: React.Dispatch<React.SetStateAction<boolean>>
}

const animationControlContext = createContext<ContextType>({
  pause: false,
  setPause: () => false
});

function useAnimationControl() {
  return useContext(animationControlContext);
}

export { animationControlContext, useAnimationControl }
