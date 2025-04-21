import { ReactNode } from "react";

import Projects from "../components/Projects";
import About from "../components/About";
import Home from "../components/Home";
import Help from "../components/Help";

export type CommandMap = {
    help: () => ReactNode,
    home: () => ReactNode,
    projects: () => ReactNode,
    about: () => ReactNode,
}

export const commands: CommandMap = {
    help: Help,
    home: Home,
    projects: Projects,
    about: About,
}