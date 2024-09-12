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
import Image from "next/image";

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
          <Card tags={[COMPONENT_CATEGORIES.svg]} tool={ANIMATION_TOOLS.css}>
            <div className="relative h-[248px]">
              <h1>Hello</h1>
              <svg width="250" height="250">
                <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence baseFrequency="0.1 0.1" />
                  <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" />
                </filter>
              </svg>
              {/* https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/ */}
              <Image
                id="test"
                src="/stock.jpg"
                alt="noise"
                fill
              />
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
