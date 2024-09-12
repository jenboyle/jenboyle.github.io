import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
//import Cubase from "./pages/Cubase";
//import Homepage from "./pages/Homepage";
//import PageNotFound from "./pages/PageNotFound";
//import AboutMe from "./pages/AboutMe";
//import BassTheory from "./pages/BassTheory";
//import JamTime from "./pages/JamTime";
//import Games from "./pages/Games";
//import Blogs from "./pages/Blogs";
//import Percussion from "./pages/Percussion";
//import Tips from "./pages/Tips";
//import MyGear from "./pages/MyGear";
//import Improvisation from "./pages/Improvisation";
//import Socials from "./components/Socials";
//import Header from "./components/Header";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Homepage = lazy(() => import("./pages/Homepage"));
const Cubase = lazy(() => import("./pages/Cubase"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const BassTheory = lazy(() => import("./pages/BassTheory"));
const JamTime = lazy(() => import("./pages/JamTime"));
const Games = lazy(() => import("./pages/Games"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Percussion = lazy(() => import("./pages/Percussion"));
const Tips = lazy(() => import("./pages/Tips"));
const MyGear = lazy(() => import("./pages/MyGear"));
const Improvisation = lazy(() => import("./pages/Improvisation"));
const Socials = lazy(() => import("./components/Socials"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="about_me" element={<AboutMe />}></Route>
              <Route path="improvisation" element={<Improvisation />}></Route>
              <Route path="my_gear" element={<MyGear />}></Route>
              <Route path="bass_theory" element={<BassTheory />}></Route>
              <Route path="jam_time" element={<JamTime />}></Route>
              <Route path="cubase" element={<Cubase />}></Route>
              <Route path="percussion" element={<Percussion />}></Route>
              <Route path="games" element={<Games />}></Route>
              <Route path="blogs" element={<Blogs />}></Route>
              <Route path="tips" element={<Tips />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </main>
      </HashRouter>

      <Socials />
    </>
  );
}

export default App;
