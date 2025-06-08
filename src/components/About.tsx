import useFadeIn from "../hooks/useFadeIn"

type Language = {
  name: string,
  url: string
}

const langugages: Language[] = [
  { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Typescript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Postgres", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Mongodb", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Scala", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" }
]

const socialLinks = [
  { name: "Github", url: "https://github.com/ttejas16", iconUrl: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "Instagram", url: "https://instagram.com/ttejas16", iconUrl: "https://cdn.simpleicons.org/instagram/ffffff" },
  { name: "Gmail", url: "mailto:jagtaptejas128@gmail.com", iconUrl: "https://cdn.simpleicons.org/gmail/ffffff" },
]

function About() {
  const { rootRef, animatedClassName } = useFadeIn();

  return (
    <div
      ref={rootRef}
      className="p-3 xl:px-6 xl:py-6 text-xs md:text-sm xl:text-base flex flex-col h-full">
      <div className={`${animatedClassName}`}>
        <div>Hellew I'm <span className="text-primary">Tejas</span>. A developer from Pune, India.</div>
        <div>I like to bulid things for web but(emphasized 'but') also I like to write <span className="text-teal-400 text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.8)]">C</span>.</div>
        <div className="mt-4 xl:mt-6">
          I have completed my <span className="text-primary">Bachelors in Computer Science</span> in 2024 and
          <br />currently looking for job opportunities.
        </div>
        <div className="mt-4 xl:mt-6">
          I prefer to use <span className="text-teal-500">Javascript, Typescript, React</span> but can learn any tech as required.
        </div>
      </div>
      <div className={`${animatedClassName}`}>
        Overall things that I know:
        <div className="mt-6 grid grid-cols-4 xl:grid-cols-6 w-max">
          {
            langugages.map((lang, index) => {
              return (
                <div key={index} className="px-4 py-3 border-[1px] border-primary/60" title={lang.name}>
                  <img src={lang.url} alt="" className="w-7 h-7" />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={`flex items-center mt-auto ${animatedClassName}`}>
        <span className="mr-2">Links:</span>
        {
          socialLinks.map((social, index) => {
            return (
              <div title={social.name} key={index} className="w-10 h-10 p-2 hover:bg-neutral-800 rounded-md duration-200">
                <a href={social.url} target="_blank">
                  <img src={social.iconUrl} alt={social.name} />
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About;
