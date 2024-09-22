import { Link } from "react-router-dom";
import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";

function AboutMe() {
  return (
    <>
      <GroovyHeader>About Me</GroovyHeader>
      <GroovyArticle>
        Join me in my bass journey. I have been playing bass in my spare time
        for a decade. I am a programmer and I always wanted to create a music
        website.
      </GroovyArticle>
      <GroovyArticle>
        Check out <Link to="/transcriptions">my transcriptions</Link> where I am
        adding songs I am learning by ear, these may not be perfect! Over the
        years I have struggled a bit with{" "}
        <Link to="/improvisation">improvisation</Link> so I have shared how I
        improvise. I have a lot of pedals - some info in the{" "}
        <Link to="/my_gear">gear</Link> section. The past year I have been
        dabbling into <Link to="/percussion">percussion</Link>. I am going to
        learn more <Link to="/">theory</Link>. A practice{" "}
        <Link to="/jam_time">jam</Link> area.
      </GroovyArticle>
    </>
  );
}
export default AboutMe;
