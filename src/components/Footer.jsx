import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className=" px-4 bg-card relative border-t border-border flex flex-wrap justify-between">
            <p>
                {" "}
                &copy; {new Date().getFullYear()} EricPham.co. All rights
                reserved
            </p>
            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:pg-primary/70"
            >
                <ArrowUp />{" "}
            </a>
        </footer>
    );
};
