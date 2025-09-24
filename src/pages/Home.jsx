import React from "react";
import { StarBackground } from "../components/StarBackground";
import { NavigationBar } from "../components/Navigationbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

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
            <main className="">
                <HeroSection />
                <About />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};
