import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
    return (
        <div className="mid-h-screen bg-background text-foreground overflow-x-hidden">
            {/* medium height for page,  */}
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* NavBar */}
            {/* Main Content */}
            {/* Footer */}
        </div>
    );
};

// export default Home;
