import { useEffect, useState } from "react";

// stars: id, size, x, y, opacity, animationDuration
// meteor: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        // numOfStars depending on the size of windown
        const numOfStars =
            Math.floor(window.innerWidth * window.innerHeight) / 10000;

        const newStars = [];

        for (let i = 0; i < numOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // star random bewtween 1 and 4 pixels
                x: Math.random() * 100, // position of star, any position in percentage 100%
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, // duration between 2-6 seconds
            });
        }

        setStars(newStars);
    };

    const generateMeteor = () => {
        // numOfMeteors depending on the size of windown
        const numOfMeteors = 5;

        const newMeteors = [];

        for (let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // star random bewtween 1 and 4 pixels
                x: Math.random() * 100, // position of star, any position in percentage 100%
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3, // duration between 2-6 seconds
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s", // for seconds
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 1 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        opacity: meteor.delay,
                        animationDuration: meteor.animationDuration + "s", // for seconds
                    }}
                />
            ))}
        </div>
    );
};
