import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// use tailwinf merge to easily combine classname in 1 single line
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
