import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" }, // # stand for id since it not redirect to another the page
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });
    return (
        <>
            <nav
                className={cn(
                    "fixed w-full z-40 transition-all duration-300",
                    // show the blur for the nav bar
                    isScrolled
                        ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                        : "py-5"
                )}
            >
                <div className="container flex items-center justify-between">
                    <a
                        className="text-xl font-bold text-primary flex items-center"
                        href="#hero"
                    >
                        <span className="relative z-10">
                            {" "}
                            <span className="text-glow text-foreground">
                                Eric Pham
                            </span>{" "}
                            Portfolio
                        </span>
                    </a>

                    {/* desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* menu btn */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground bg-background/95 backdrop-blur-md z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            <div>
                {/* mobile nav outside the nav to prevent each time open the menu it needs to get back to the top of page*/}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                // close menu right away and smooth-scroll
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false); // close first
                                    setTimeout(() => {
                                        document
                                            .querySelector(item.href)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }, 300); // match your transition duration
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
