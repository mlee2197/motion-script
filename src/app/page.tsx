import dynamic from "next/dynamic";
import Card from "@/components/Card";
import Hero from "../components/Hero";
import Tag from "@/components/Tag";

const Keyboard = dynamic(() => import("./animations/Keyboard"), { ssr: false });
const LetterTrail = dynamic(() => import("./animations/LetterTrail"), {
  ssr: false,
});
const NightDay = dynamic(() => import("./animations/NightDay"), { ssr: false });
const Penrose = dynamic(() => import("./animations/Penrose"));
const ShapeClip = dynamic(() => import("./animations/ShapeClip"), {
  ssr: false,
});
const TextStroke = dynamic(() => import("./animations/TextStroke"), {
  ssr: false,
});
const TextHover = dynamic(() => import("./animations/TextHover"));
const Pixel = dynamic(() => import("./animations/Pixel"), { ssr: false });
const StarWars = dynamic(() => import("./animations/StarWars"));
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const PlayRestart = dynamic(() => import("./animations/PlayRestart"), {
  ssr: false,
});
const OrigamiHeart = dynamic(() => import("./animations/OrigamiHeart"), {
  ssr: false,
});
const Bump = dynamic(() => import("./animations/Bump"));
const Shapes = dynamic(() => import("./animations/Shapes"), { ssr: false });
const Kaleidoscope = dynamic(() => import("./animations/Kaleidoscope"), {
  ssr: false,
});
const TurbulentText = dynamic(() => import("./animations/TurbulentText"), {
  ssr: false,
});
const Blob = dynamic(() => import("./animations/Blob"));
const LoadingBlob = dynamic(() => import("./animations/LoadingBlob"));

const Desert = dynamic(() => import("./animations/Desert"), { ssr: false });
const Crt = dynamic(() => import("./animations/Crt"), { ssr: false });
const Sunset = dynamic(() => import("./animations/Sunset"), { ssr: true });
const Fire = dynamic(() => import("./animations/Fire"), { ssr: false });

const JAVASCRIPT = "#f0db4f";
const SVG = "#ff8a65";
const CSS = "#2965f1";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <main>
        <Hero />
        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 md:px-[64px] lg:grid-cols-3">
          <Card
            tags={[CSS_PROPERTY_CATEGORIES.hover, COMPONENT_CATEGORIES.svg]}
            className="md:col-span-2"
          >
            <Keyboard />
          </Card>
          <Card
            title="Mechanical"
            className="md:col-span-2"
            description={
              <p>
                A mechanical keyboard that will copy your actual key presses.
                This animation required the most{" "}
                <Tag bgColor={JAVASCRIPT}>JavaScript</Tag> out of all the
                animations.
              </p>
            }
          >
            <Keyboard />
          </Card>
          <Card
            title="Greetings"
            description={
              <p>
                An animated greeting with letters that trail and form words.{" "}
                <Tag bgColor={JAVASCRIPT}>JavaScript</Tag> tracks the mouse
                position and renders new letters on the screen.
              </p>
            }
          >
            <LetterTrail />
          </Card>
          <Card
            title="Day & Night"
            description={
              <p>
                A smooth transition between day and night scenes. Each version
                of the sun was created using <Tag bgColor={SVG}>SVG</Tag>
              </p>
            }
          >
            <NightDay />
          </Card>
          <Card
            title="Penrose"
            description={
              <p>
                An animated Penrose triangle illusion using multiple{" "}
                <Tag bgColor={CSS}>CSS</Tag> animations. To make the ball move,
                I highlighted the <Tag bgColor={CSS}>offset-path</Tag> and{" "}
                <Tag bgColor={CSS}>offset-distance</Tag> properties. Then to
                give the illusion of rolling, I used an infinite gradient
                animation.
              </p>
            }
          >
            <Penrose />
          </Card>
          <Card
            title="Shapeshifter"
            description={
              <p>
                Morphing shapes using <Tag bgColor={CSS}>clip-path</Tag>{" "}
                animations. Each shape has the same number of clip path points
                and a unique color. Then a transition was added to give a
                shapeshipting effect.
              </p>
            }
          >
            <ShapeClip />
          </Card>
          <Card
            title="Stroke of Genius"
            description={
              <p>
                Text animation that highlights the SVG properties{" "}
                <Tag bgColor={SVG}>stroke</Tag>,{" "}
                <Tag bgColor={SVG}>stroke-dashoffset</Tag>, and{" "}
                <Tag bgColor={SVG}>stroke-dasharray</Tag>.
              </p>
            }
          >
            <TextStroke />
          </Card>
          <Card
            title="very mindful, very cutesy"
            description={
              <p>
                Inspired by a 2024 meme. This animation is a practical, playful
                text hover effect.
              </p>
            }
          >
            <TextHover />
          </Card>
          <Card
            title="Pixelchu"
            description={<p>A pixelated Pikachu animation.</p>}
          >
            <Pixel />
          </Card>
          <Card
            title="Star Wars"
            description={<p>Classic Star Wars opening crawl text animation.</p>}
          >
            <StarWars />
          </Card>
          <Card
            title="Perimeter"
            description={
              <p>An animation showcasing objects moving along a perimeter.</p>
            }
          >
            <Bump />
          </Card>
          <Card
            title="Molecules"
            description={<p>Animated blob-like molecules in motion.</p>}
          >
            <LoadingBlob />
          </Card>
          <Card
            title="Blobular"
            description={<p>Mesmerizing blob shape animations.</p>}
          >
            <Blob />
          </Card>
          <Card
            title="Glitched out"
            description={<p>Text with a glitch effect using SVG turbulence.</p>}
          >
            <TurbulentText />
          </Card>
          <Card
            title="Groovy"
            description={
              <p>A kaleidoscope animation with psychedelic patterns.</p>
            }
          >
            <Kaleidoscope />
          </Card>
          <Card
            title="Shapes and Sides"
            description={
              <p>Animated geometric shapes transforming and interacting.</p>
            }
          >
            <Shapes />
          </Card>
          <Card
            title="Campfire"
            description={<p>A cozy animated campfire scene.</p>}
          >
            <Fire />
          </Card>
          <Card
            title="Waves in the sun"
            description={<p>A serene sunset scene with animated waves.</p>}
          >
            <Sunset />
          </Card>
          <Card
            title="CRT"
            description={<p>Old-school CRT television effect animation.</p>}
          >
            <Crt />
          </Card>
          <Card
            title="Scavenger Hunt"
            description={
              <p>An interactive desert scene with hidden objects.</p>
            }
          >
            <Desert />
          </Card>
          <Card
            title="Origami"
            description={<p>An origami heart folding animation.</p>}
          >
            <OrigamiHeart />
          </Card>
          <Card
            title="Rocket Restart"
            description={
              <p>A playful rocket launch animation for restarting.</p>
            }
          >
            <PlayRestart />
          </Card>
          <Card
            title="Bump"
            description={
              <p>A mesmerizing bump animation with synchronized movements.</p>
            }
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
