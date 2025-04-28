import { ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";
import Visualizer from "../components/Visualizer";
import SpinningOrbit from "../components/SpinningOrbit";

interface Project {
    info: string,
    thumbnailComponent?: () => ReactNode,
    tags: string[]
}

const projects: Project[] = [
    {
        info: "A C lexer/tokenizer from scratch. It scans C source code and prints the tokens in it",
        tags: ["C", "Lexical analysis"],
        thumbnailComponent: AnimatedText
    },
    {
        info: "A Sorting visualizer made using Python and Pygame. Supports merge, quick, selection, bubble and tim sort.",
        tags: ["Python", "Pygame", "Sorts"],
        thumbnailComponent: Visualizer
    },
    {
        info: "Sttacked -  A realtime chat site that supports group and private chats.",
        tags: ["React", "Javascript", "socket.io", "Postgres", "Shadcn"],
    },
    {
        info: "Pandora -  3D solar system visualization paired with quzzing features.",
        tags: ["React", "Javascript", "ThreeJS", "Node"],
        thumbnailComponent: SpinningOrbit
    },
    {
        info: "Snippy a code snippet managing tool which supports syntax highlighting.",
        tags: ["EJS", "ExpressJS", "MongoDB"],
    },
    {
        info: "Breakout - A small bricks out like game.",
        tags: ["Python", "Pygame"],
    },
];

export default projects;