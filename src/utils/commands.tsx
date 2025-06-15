import { ReactNode } from "react";

import Projects from "../components/Projects";
import About from "../components/About";
import Home from "../components/Home";

export type CommandMap = {
  home: () => ReactNode,
  projects: () => ReactNode,
  about: () => ReactNode,
}

export const commands: CommandMap = {
  home: Home,
  projects: Projects,
  about: About,
}