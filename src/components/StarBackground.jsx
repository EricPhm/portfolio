import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
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
        </div>
    );
};
