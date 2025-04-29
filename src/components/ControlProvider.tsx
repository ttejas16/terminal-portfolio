import { PropsWithChildren, ReactNode, useState } from "react";
import { animationControlContext } from "../hooks/useAnimationControl";

interface Props extends PropsWithChildren {
  children?: ReactNode
}

function ControlProvider({ children }: Props) {
  const [pause, setPause] = useState(false);

  return (
    <animationControlContext.Provider value={{ pause: pause, setPause: setPause }}>
      {children}
    </animationControlContext.Provider>
  )
}

export default ControlProvider;
