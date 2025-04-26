import { ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";
import Visualizer from "../components/Visualizer";

interface Project {
    info: string,
    thumbnailComponent?: () => ReactNode,
    tags: string[]
}

const projects: Project[] = [
    {
        info: "A C lexer from scratch. It scans C source code and prints the tokens in it",
        tags: ["C", "Lexical analysis"],
        thumbnailComponent: AnimatedText
    },
    {
        info: "A Sorting visualizer made using Python and Pygame. Supports merge, quick, selection, bubble and tim sort.",
        tags: ["Python", "Pygame", "Sorts"],
        thumbnailComponent: Visualizer
    },
];

export default projects;