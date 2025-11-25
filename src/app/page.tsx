import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
    </main>
  );
}
