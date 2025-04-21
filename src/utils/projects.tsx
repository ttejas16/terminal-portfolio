import { ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";

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
];

export default projects;