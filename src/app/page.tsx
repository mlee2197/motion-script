import Card from "@/components/Card";
import Hero from "../components/Hero";
import {
  ANIMATION_TOOLS,
  COMPONENT_CATEGORIES,
  CSS_PROPERTY_CATEGORIES,
} from "@/static/categories";
import Footer from "@/components/Footer";
import PlayRestart from "./animations/PlayRestart";
import OrigamiHeart from "./animations/OrigamiHeart";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <main>
        <Hero />
        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 md:px-[48px] lg:grid-cols-3">
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.has, CSS_PROPERTY_CATEGORIES.hover]}
            tool={ANIMATION_TOOLS.css}
          >
            <div className="relative flex items-center justify-center h-[248px] w-full">
              <div className="animation-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="box-col">
                    <div className="box">
                      <div className="box-1" />
                    </div>
                    <div className="box">
                      <div className="box-2" />
                    </div>
                    <div className="box">
                      <div className="box-3" />
                    </div>
                    <div className="box">
                      <div className="box-4" />
                    </div>
                    <div className="box">
                      <div className="box-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card
            tags={[COMPONENT_CATEGORIES.button]}
            tool={ANIMATION_TOOLS.gsap}
          >
            <PlayRestart />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.onLoad]}
            tool={ANIMATION_TOOLS.gsap}
          >
            <OrigamiHeart />
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
