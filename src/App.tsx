import { useCallback, useEffect, useRef, useState } from "react"
import Error from "./components/Error";
import { commands, CommandMap } from "./utils/commands";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentCommand, setCurrentCommand] = useState("abou");
  const Component = (currentCommand in commands) ? commands[currentCommand as keyof CommandMap] : Error;

  const handleFocus = useCallback((e: KeyboardEvent) => {
    if (e.key == '/' && inputRef.current) {
      e.preventDefault();
      inputRef.current.focus();
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleFocus);
    return () => document.removeEventListener("keydown", handleFocus);
  }, [handleFocus]);

  return (
    <div className='px-48 py-16 flex flex-col h-screen'>
      <section className="flex gap-x-2 bg-neutral-800 rounded-sm rounded-b-none">
        <div className="font-bold border-r-[1px] border-neutral-600 px-6 py-2 shrink-0 text-primary">
          /ttejas16/portfolio
        </div>
        <div className="flex gap-x-2 items-center justify-start w-full">
          <span className="text-primary">$</span>
          <input
            ref={inputRef}
            autoFocus
            type="text"
            className="outline-none border-none bg-inherit text-neutral-300 pr-4 caret-neutral-400 w-full"
            onKeyDown={e => {
              const command = e.currentTarget.value;
              if (e.key == 'Enter' && (command in commands)) {
                setCurrentCommand(command);
                if (inputRef.current) inputRef.current.value = ""; 
              }
              else if (e.key == 'Enter') {
                setCurrentCommand(command);
                if (inputRef.current) inputRef.current.value = "";
              }
            }}
          />
        </div>

      </section>
      <section className="h-full border-[1px] border-neutral-800">
        {
          <Component command={currentCommand} />
        }
      </section>
    </div>
  )
}

export default App
