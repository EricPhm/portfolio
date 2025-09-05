import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavigationBar } from "../components/Navigationbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
    return (
        <div className="mid-h-screen bg-background text-foreground overflow-x-hidden">
            {/* medium height for page,  */}
            {/* Theme Toggle */}
            {/* Background Effects */}
            <StarBackground />
            {/* NavBar */}
            <NavigationBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <About />
                <SkillsSection />
            </main>
            {/* Footer */}
        </div>
    );
};

// export default Home;
