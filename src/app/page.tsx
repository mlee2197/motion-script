import Card from "@/components/Card";
import Hero from "../components/Hero";
import {
  ANIMATION_TOOLS,
  COMPONENT_CATEGORIES,
  CSS_PROPERTY_CATEGORIES,
} from "@/static/categories";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <main>
        <Hero />
        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 lg:px-6 lg:grid-cols-3">
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.has, CSS_PROPERTY_CATEGORIES.hover]}
            tool={ANIMATION_TOOLS.css}
          >
            <div className="relative flex items-center justify-center h-[248px] w-full">
              <div className="animation-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="box-col"
                  >
                    <div className="box">
                      <div className="box-1"/>
                    </div>
                    <div className="box">
                      <div className="box-2"/>
                    </div>
                    <div className="box">
                      <div className="box-3"/>
                    </div>
                    <div className="box">
                      <div className="box-4"/>
                    </div>
                    <div className="box">
                      <div className="box-5"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card
            tags={[COMPONENT_CATEGORIES.card, CSS_PROPERTY_CATEGORIES.hover]}
            tool={ANIMATION_TOOLS.gsap}
          >
            <div>Button</div>
          </Card>
        </div>
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
