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
        <div className="grid gap-6 px-4 py-8">
          <Card
            component={COMPONENT_CATEGORIES.button}
            selector={CSS_PROPERTY_CATEGORIES.has}
            tools={[ANIMATION_TOOLS.css]}
          >
            <div>Button</div>
          </Card>
          <Card
            component={COMPONENT_CATEGORIES.card}
            selector={CSS_PROPERTY_CATEGORIES.hover}
            tools={[ANIMATION_TOOLS.css]}
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
