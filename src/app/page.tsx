import dynamic from "next/dynamic";
import Card from "@/components/Card";
import Hero from "../components/Hero";
import {
  ANIMATION_TOOLS,
  COMPONENT_CATEGORIES,
  CSS_PROPERTY_CATEGORIES,
} from "@/static/categories";

const LetterTrail = dynamic(() => import("./animations/LetterTrail"));
const NightDay = dynamic(() => import("./animations/NightDay"));
const Penrose = dynamic(() => import("./animations/Penrose"));
const ShapeClip = dynamic(() => import("./animations/ShapeClip"), { ssr: false });
const TextStroke = dynamic(() => import("./animations/TextStroke"), { ssr: false });
const TextHover = dynamic(() => import("./animations/TextHover"));
const Pixel = dynamic(() => import("./animations/Pixel"), { ssr: false });
const StarWars = dynamic(() => import("./animations/StarWars"));
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const PlayRestart = dynamic(() => import("./animations/PlayRestart"), { ssr: false });
const OrigamiHeart = dynamic(() => import("./animations/OrigamiHeart"), { ssr: false });
const Bump = dynamic(() => import("./animations/Bump"));
const Shapes = dynamic(() => import("./animations/Shapes"), { ssr: false });
const Kaleidoscope = dynamic(() => import("./animations/Kaleidoscope"), { ssr: false });
const TurbulentText = dynamic(() => import("./animations/TurbulentText"), { ssr: false });
const Blob = dynamic(() => import("./animations/Blob"));
const LoadingBlob = dynamic(() => import("./animations/LoadingBlob"));

const Desert = dynamic(() => import("./animations/Desert"), { ssr: false });
const Crt = dynamic(() => import("./animations/Crt"), { ssr: false });
const Sunset = dynamic(() => import("./animations/Sunset"), { ssr: true });
const Fire = dynamic(() => import("./animations/Fire"), { ssr: false });

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <main>
        <Hero />
        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 md:px-[64px] lg:grid-cols-3">
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <LetterTrail />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <NightDay />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Penrose />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <ShapeClip />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <TextStroke />
          </Card>
           <Card
             tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
            >
            <TextHover />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Pixel />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <StarWars />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.has, CSS_PROPERTY_CATEGORIES.hover]}
            tool={ANIMATION_TOOLS.css}
          >
            <Bump />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <LoadingBlob />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Blob />
          </Card>
          <Card tags={[COMPONENT_CATEGORIES.card]}>
            <TurbulentText />
          </Card>
          <Card tags={[COMPONENT_CATEGORIES.card]}>
            <Kaleidoscope />
          </Card>
          <Card tags={[COMPONENT_CATEGORIES.card]}>
            <Shapes />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Fire />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.onLoad, COMPONENT_CATEGORIES.svg]}
          >
            <Sunset />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Crt />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
          >
            <Desert />
          </Card>
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.onLoad]}
            tool={ANIMATION_TOOLS.gsap}
          >
            <OrigamiHeart />
          </Card>
          <Card
            tags={[COMPONENT_CATEGORIES.button]}
            tool={ANIMATION_TOOLS.gsap}
          >
            <PlayRestart />
          </Card>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
