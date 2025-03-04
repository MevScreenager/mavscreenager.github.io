import { JSX } from "react";

export interface ITag {
    name: string;
    about?: string | string[];
    example?: JSX.Element | JSX.Element[];
}
