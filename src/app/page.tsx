import Hero from "./Hero";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <main>
        <Hero />
        {/* <h1 className="text-5xl">Animation Suite</h1>
        <h2 className="font-mono text-xl mt-4">Made by Matt Lee</h2> */}
      </main>
      <footer className="font-mono">
        <a href="https://github.com/mattlee007/animation-suite">GitHub</a>
        <a href="https://www.linkedin.com/in/matthewlee1297/">Linkedin</a>
        <a href="mailto:mlee2197@gmail.com">Email</a>
        <a href="https://github.com/mlee2197/motion-script">Portfolio</a>
      </footer>
    </div>
  );
}
