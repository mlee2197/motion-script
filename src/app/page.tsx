import Hero from "./Hero";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <main>
        <Hero />
      </main>
      <footer className="flex flex-col gap-6 md:flex-row ">
        <a href="https://github.com/mattlee007/animation-suite">GitHub</a>
        <a href="https://www.linkedin.com/in/matthewlee1297/">Linkedin</a>
        <a href="mailto:mlee2197@gmail.com">Email</a>
        <a href="https://github.com/mlee2197/motion-script">Portfolio</a>
      </footer>
    </div>
  );
}
