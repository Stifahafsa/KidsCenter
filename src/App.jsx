// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Gallery from "./components/Gallery";
// import Client from "./components/Client";
// import TeachersSection from "./components/TeacherCard";
// import HeroSlider from "./components/HeroPage";
// import PopularCourses from "./components/hafssa/PopularCourses";
// import SponsorSection from "./components/hafssa/SponsorSection";
// import ServicesSection from "./components/ServicesSection";
// // import HeroSli from "./components/HeroPage";


// function App() {
//   return (
//     // <Router>
//       // <Header />
//       // <main>
//       //   <Routes>
//       //     <Route path="/" element={<HeroSlider />} />
//       //     <Route path="/about" element={<ServicesSection />} />
//       //     <Route path="/courses" element={<PopularCourses />} />
//       //     <Route path="/events" element={<EventsPage />} />
//       //     <Route path="/news" element={<NewsPage />} />
//       //     <Route path="/team" element={<SponsorSection />} />
//       //     <Route path="/pages" element={<TeachersSection />} />
//       //     <Route path="/contact" element={<Client />} />
//       //     <Route path="/gallery" element={<Gallery />} />
//       //   </Routes>
//       // </main>
//     // </Router>
//     // <div>
//     //   <Header></Header>
//     //   <Gallery></Gallery>
//     //   {/* <Client></Client> */}
//     // </div>
//     <Header />
//     <div>
//       <HeroSlider />
//     </div>
//   );
// }

// export default App;


// Importation des composants globaux
import Header from "./components/Header";
import HeroSlider from "./components/HeroPage";

// Importation des sections de la landing page
import Gallery from "./components/Gallery";
import Client from "./components/Client";
import TeachersSection from "./components/TeacherCard";
import PopularCourses from "./components/hafssa/PopularCourses";
import SponsorSection from "./components/hafssa/SponsorSection";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <>
      {/* En-tête */}
      <Header />

      {/* Section Hero (Slider) */}
      {/* <HeroSlider /> */}

      {/* Section Services */}
      <ServicesSection />

      {/* Section des cours populaires */}
      <PopularCourses />

      {/* Section galerie */}
      <Gallery />

      {/* Section des enseignants */}
      <TeachersSection />

       {/* Section témoignages des clients */}
       <Client />

       <BlogSection />

      {/* Section sponsors */}
      <SponsorSection />

    </>
  );
}

export default App;

