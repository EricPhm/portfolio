import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        //  this to keep the theme even refreshj page
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const themeToggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            // when refresh the page, the value still there
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            return;
        }
        document.documentElement.classList.add("dark");
        // when refresh the page, the value still there
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    };

    return (
        <button
            onClick={themeToggle}
            className={cn(
                "fixed max-sm:hidden top-3.5 right-2 z-50 p-2 rounded-full",
                "focus:outline-hidden"
            )}
        >
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
