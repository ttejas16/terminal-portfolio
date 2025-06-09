import { ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";
import Visualizer from "../components/Visualizer";
import SpinningOrbit from "../components/SpinningOrbit";
import Breakout from "../components/Breakout";

export interface Project {
  info: string,
  thumbnailComponent?: () => ReactNode,
  tags: string[],
  link?: string,
  github: string,
}

export const projects: Project[] = [
  {
    info: "A C lexer/tokenizer from scratch. It scans C source code and prints the tokens in it",
    tags: ["C", "Lexical analysis"],
    thumbnailComponent: AnimatedText,
    github: "https://github.com/ttejas16/C-lexer"
  },
  {
    info: "A Sorting visualizer made using Python and Pygame. Supports merge, quick, selection, bubble and tim sort.",
    tags: ["Python", "Pygame", "Sorts"],
    thumbnailComponent: Visualizer,
    github: "https://github.com/ttejas16/Sorting-Visualizer-in-Python"
  },
  {
    info: "Sttacked -  A realtime chat site that supports group and private chats.",
    tags: ["React", "Javascript", "socket.io", "Postgres", "Shadcn"],
    github: "https://github.com/ttejas16/chat-app-frontend",
    link: "https://sttacked.onrender.com/"
  },
  {
    info: "Pandora -  3D solar system visualization paired with quzzing features.",
    tags: ["React", "Javascript", "ThreeJS", "Node"],
    thumbnailComponent: SpinningOrbit,
    github: "https://github.com/ttejas/pandora",
    link: "https://pandora-d5co.onrender.com/"
  },
  {
    info: "Snippy a code snippet managing tool which supports syntax highlighting.",
    tags: ["EJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/ttejas16/snippy"
  },
  {
    info: "Breakout - A small bricks out like game.",
    tags: ["Python", "Pygame"],
    thumbnailComponent: Breakout,
    github: "https://github.com/ttejas16/BreakOut"
  },
];