import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

// import NavBar from "./components/NavBar";
// import cloudImg from "../src/assets/cloud.png";
// import portfolioImage from "../src/assets/avatar.jpg";

// function App() {
//     return (
//         <div className="portfolio-layout">
//             <NavBar />

//             {/* Welcome section */}
//             <section>
//                 <div className="hero-section">
//                     {/* <img src={portfolioImage} alt="hero-avatar" /> */}
//                     <div className="hero-background">
//                         <div className="hero-box">
//                             <h1>Welcome to my portfolio</h1>
//                             <p>
//                                 My name is Eric Pham, a recent graduate from
//                                 Seattle University with a degree in computer
//                                 science. Welcome to my portfolio website where I
//                                 showcase my passion for coding and building
//                                 innovative software solutions.
//                             </p>
//                             <button className="cta-button">
//                                 View My Projects
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* About me section */}
//             <section>
//                 <div>Hello i am about</div>
//             </section>

//             {/* My projects */}
//         </div>
//     );
// }

// export default App;
{
    /* 
<header> // for the welcome section
<main>   // for your main content
<aside>  // if you add a sidebar later
<footer> // for contact info or links 
*/
}
