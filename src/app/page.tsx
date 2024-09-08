import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <main>
        <Hero />
      </main>
      <footer className="flex gap-6 container-padding-x container-padding-y">
        {/* TODO: update to use icons */}
        <a href="https://github.com/mattlee007/animation-suite">GitHub</a>
        <a href="https://www.linkedin.com/in/matthewlee1297/">Linkedin</a>
        <a href="mailto:mlee2197@gmail.com">Email</a>
        <a href="https://github.com/mlee2197/motion-script">Portfolio</a>
      </footer>
    </div>
  );
}
