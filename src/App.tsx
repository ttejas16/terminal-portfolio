import { JSX, useEffect, useRef, useState } from "react"
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Error from "./components/Error";

type CommandMap = {
  projects: () => JSX.Element,
  about: () => JSX.Element,
  home: () => JSX.Element,
  help: () => JSX.Element,
}

export const commands: CommandMap = {
  projects: Projects,
  about: About,
  home: Home,
  help: Help
}

function App() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [currentCommand, setCurrentCommand] = useState("home");
  const Comp = (currentCommand in commands) ? commands[currentCommand as keyof CommandMap] : Error;

  useEffect(() => {
    if (!inputRef.current) return;
    
  },[]);

  return (
    <div className='px-48 py-16 flex flex-col h-screen'>
      <section className="flex gap-x-2 bg-neutral-800 rounded-sm rounded-b-none">
        <div className="font-bold border-r-[1px] border-neutral-600 px-6 py-2 shrink-0 text-primary">
          /ttejas16/portfolio
        </div>
        <div className="flex gap-x-2 items-center justify-start w-full">
          <span className="text-primary">$</span>
          <input
            autoFocus
            type="text"
            className="outline-none border-none bg-inherit text-neutral-300 pr-2 caret-neutral-400"
            onKeyDown={e => {
              const command = e.currentTarget.value;
              if (e.key == 'Enter' && (command in commands)) {
                setCurrentCommand(command);
              }
              else if (e.key == 'Enter') {
                setCurrentCommand("Not found");
              }
            }}
          />
        </div>

      </section>
      <section className="h-full border-[1px] border-neutral-800">
        {
          <Comp />
        }
      </section>
    </div>
  )
}

export default App
