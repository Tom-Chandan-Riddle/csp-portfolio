import Hero from "@/components/Hero";
import BestShots from "@/components/BestShots";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <BestShots />
      <Projects />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
