import dynamic from "next/dynamic";
import Card from "@/components/Card";
import Hero from "../components/Hero";
import Tag from "@/components/Tag";

import TextScramble from "./animations/TextScramble";
import RippleEffect from "./animations/RippleEffect";
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

const JAVASCRIPT = "#BE8B23";
const SVG = "#ff8a65";
const CSS = "#2965f1";
const GSAP = "#25A63B";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <main>
        <Hero />
        <div className="grid gap-6 px-4 py-8 md:grid-cols-2 md:px-[64px] lg:grid-cols-3">
          <Card
            title="Mechanical"
            className="md:col-span-2"
            description={
              <p>
                A mechanical keyboard that will copy your actual key presses.
                This animation required the most{" "}
                <Tag bgColor={JAVASCRIPT}>JavaScript</Tag> out of all the
                animations.
                <br />
                <br />
                <b>How to:</b> type in the textbox to see the keyboard type. You can change the backlight of the keyboard by clicking on the lightbulb key
              </p>
            }
          >
            <Keyboard />
          </Card>
          <Card
            title="Scrambled"
            description={
              <p>
                Scramble animate any text you&apos;ve written!
                <br />
                <br />
                <b>How to:</b> typing in the provided text box and press &quot;Scramble&quot;
              </p>
            }
          >
            <TextScramble />
          </Card>
          <Card
            title="Ripple Effect"
            description={
              <p>
                Explore the mesmerizing rainy day water ripple scene, crafted using <Tag bgColor={GSAP}>GSAP</Tag>'s bounce and stagger features.
                <br />
                <br />
                <b>How to:</b> Click the play button to initiate the animation.
              </p>
            }
          >
            <RippleEffect />
          </Card>
          <Card
            title="Greetings"
            description={
              <p>
                An animated greeting with letters that trail and form words.{" "}
                <Tag bgColor={JAVASCRIPT}>JavaScript</Tag> tracks the mouse
                position and renders new letters on the screen.
                <br />
                <br />
                <b>How to:</b> move your mouse over the area
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
                <br />
                <br />
                <b>How to:</b> move your mouse over the area
              </p>
            }
          >
            <NightDay />
          </Card>
          <Card
            title="Penrose"
            description={
              <p>
                I highlighted the <Tag bgColor={CSS}>offset-path</Tag> and{" "}
                <Tag bgColor={CSS}>offset-distance</Tag> properties to make a CSS-only Penrose triangle illusion.
                A moving gradient gives the ball the illusion of rolling.
                <br />
                <br />
                <b>How to:</b> move your mouse over the area
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
                <br />
                <br />
                <b>How to:</b> move the slider to change the number of sides
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
                <br />
                <br />
                <b>How to:</b> press the play button
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
                text <Tag bgColor={CSS}>hover</Tag> effect.
                <br />
                <br />
                <b>How to:</b> hover over the text
              </p>
            }
          >
            <TextHover />
          </Card>
          <Card
            title="Pixelchu"
            description={<p>
              A pixelated Pikachu animation showing off the SVG <Tag bgColor={SVG}>feTile</Tag>.
              <br />
              <br />
              <b>How to:</b> hover over to see non-pixelated Pikachu
            </p>}
          >
            <Pixel />
          </Card>
          <Card
            title="Star Wars"
            description={<p>Classic Star Wars opening crawl text animation.
              <br />
              <br />
              <b>How to:</b> Watch and enjoy!</p>
            }
          >
            <StarWars />
          </Card>
          <Card
            title="Perimeter"
            description={
              <p>Showcases one of the possibilities of the <Tag bgColor={CSS}>:has()</Tag> selector.<br />
                <br />
                <b>How to:</b> hover your mouse over the boxes</p>
            }
          >
            <Bump />
          </Card>
          <Card
            title="Molecules"
            description={<p>Animated blob-like molecules in motion.<br />
              <br />
              <b>How to:</b> Watch and enjoy!</p>}
          >
            <LoadingBlob />
          </Card>
          <Card
            title="Blobular"
            description={<p>Mesmerizing blob shape animations. Achieved with <Tag bgColor={CSS}>Blur</Tag> and <Tag bgColor={CSS}>Contrast</Tag> filters.<br />
              <br />
              <b>How to:</b> hover your mouse over the area</p>}
          >
            <Blob />
          </Card>
          <Card
            title="Glitched out"
            description={<p>Text with a glitch effect using SVG <Tag bgColor={SVG}>feTurbulence</Tag>.<br />
              <br />
              <b>How to:</b> press the play button</p>}
          >
            <TurbulentText />
          </Card>
          <Card
            title="Groovy"
            description={
              <p>A kaleidoscope animation with psychedelic patterns. The pattern is built with <Tag bgColor={SVG}>feTurbulence</Tag> while the lighting effect is through <Tag bgColor={SVG}>feGaussianBlur</Tag> and <Tag bgColor={CSS}>contrast</Tag>.<br />
                <br />
                <b>How to:</b> Watch and enjoy!</p>
            }
          >
            <Kaleidoscope />
          </Card>
          <Card
            title="Shapes and Sides"
            description={
              <p>Animated geometric <Tag bgColor={CSS}>clip-path</Tag> shapes transforming and interacting.
                <br />
                <br />
                <b>How to:</b> hover your mouse over the area
              </p>
            }
          >
            <Shapes />
          </Card>
          <Card
            title="Campfire"
            description={<p>
              Using and animating <Tag bgColor={SVG}>feTurbulence</Tag> and <Tag bgColor={SVG}>feDisplacementMap</Tag> generated a cozy animated campfire scene.
              <br />
              <br />
              <b>How to:</b> press the play button
            </p>}
          >
            <Fire />
          </Card>
          <Card
            title="Waves in the sun"
            description={<p>
              A serene sunset scene with animated <Tag bgColor={SVG}>feTurbulence</Tag> waves.
              <br />
              <br />
              <b>How to:</b> Watch and enjoy!
            </p>}
          >
            <Sunset />
          </Card>
          <Card
            title="CRT"
            description={<p>
              Old-school CRT television effect animation. It uses the <Tag bgColor={SVG}>fractalNoise</Tag> version of feTurbulence.
              <br />
              <br />
              <b>How to:</b> click the on/off switch on the top right of the CRT TV
            </p>}
          >
            <Crt />
          </Card>
          <Card
            title="Scavenger Hunt"
            description={
              <p>
                An interactive desert scene with hidden objects. The desert was generated with <Tag bgColor={SVG}>feTurbulence</Tag>
                <br />
                <br />
                <b>How to:</b> hover your mouse over the area to find the hidden items
              </p>
            }
          >
            <Desert />
          </Card>
          <Card
            title="Origami"
            description={<p>
              An origami heart folding animation. <Tag bgColor={GSAP}>GSAP</Tag> was used to make the sequenced folding much simpler to code.
              <br />
              <br />
              <b>How to:</b> press the play button
            </p>}
          >
            <OrigamiHeart />
          </Card>
          <Card
            title="Rocket Restart"
            description={
              <p>
                A playful rocket launch animation for restarting. A mix of rotation, stroke, and scale animations brewed up this animation with <Tag bgColor={GSAP}>GSAP</Tag> for sequencing ease.
                <br />
                <br />
                <b>How to:</b> press the play button
              </p>
            }
          >
            <PlayRestart />
          </Card>
          <Card
            title="Bump"
            description={
              <p>
                A mesmerizing bump hover animation with synchronized movements. Highlights the potential of the <Tag bgColor={CSS}>:has()</Tag> selector and <Tag bgColor={CSS}>skew</Tag> transform.
                <br />
                <br />
                <b>How to:</b> hover over a square
              </p>
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
