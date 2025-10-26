import Main from "@/app/components/Main";
import Hero from "./components/Home/Hero";
import Music from "./components/Home/Music";
import AboutMe from "./components/Home/AboutMe";

export default function Home() {
  return <Main>
    <Hero/>
    <AboutMe/>
    <Music/>
  </Main>
}