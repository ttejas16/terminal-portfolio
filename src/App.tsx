import { useCallback, useEffect, useRef, useState } from "react"
import Error from "./components/Error";
import { commands, CommandMap } from "./utils/commands";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentCommand, setCurrentCommand] = useState("home");
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
    <div className="flex w-full justify-center">
      <div className='w-[90%] 2xl:w-[80%] py-4 xl:py-16 flex flex-col h-screen'>
        <section className="flex gap-x-2 bg-neutral-800 rounded-sm rounded-b-none">
          <div className="font-bold border-r-[1px] border-neutral-600 px-3 md:px-6 py-2 shrink-0 text-primary text-xs md:text-base">
            /ttejas16/portfolio
          </div>
          <div className="flex gap-x-2 items-center justify-start w-full text-xs md:text-base">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              autoFocus
              type="text"
              className="outline-none border-none bg-inherit text-neutral-300 pr-4 caret-neutral-400 w-full"
              onKeyDown={e => {
                const command = e.currentTarget.value;
                if (e.key == 'Enter') {

                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }

                  setCurrentCommand(command.toLowerCase());
                }
              }}
            />
          </div>

        </section>
        <section className="h-full relative before:absolute before:inset-0 before:border-[1px] before:border-neutral-800 before:pointer-events-none">
          {
            <Component command={currentCommand} />
          }
        </section>
      </div>
    </div>
  )
}

export default App
