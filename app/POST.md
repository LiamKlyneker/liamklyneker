I redesigned my portfolio (again) and this time I wanted to share some nice details and code snippets for you so you can replicate some of them in your projects.
https://www.liamklyneker.com/

GH Repo: https://github.com/LiamKlyneker/LiamKlyneker

I tried to avoid libraries for animations to achieve these results, I wanted to stick as much as I could to just use CSS and JavaScript.
Portfolio it’s powered by NextJS so some code snippets belongs to React logic.

1. Intro animations.

```
const Intro = () => (
  <section className="show-intro">
    <h1 className="show-title" />
    <div className="show-cta">
      <span className="random-blink">✺</span>
      ...
    </div>
  </section>
)
.show-intro {
  transform: scale(1);
  transition: transform 0.4s ease-in-out;
  animation: showIntro 0.7s ease-in-out;
}
@keyframes showIntro {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.show-title {
  opacity: 0;
  animation: showTitle 0.8s ease-in-out 0.2s forwards;
}
@keyframes showTitle {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.show-cta {
  opacity: 0;
  animation: showCta 0.7s ease-in-out 0.5s forwards;
}
@keyframes showCta {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.random-blink {
  animation: randomBlink 4s ease-in-out 3s infinite;
}
@keyframes randomBlink {
  0% {
    opacity: 1;
  }
  5% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

- Just bunch of animations with different delays to show the content in a nice way followed by a random blinking character to give a little bit of life to the page.

2. Changing text.

- Talking about life, I wanted to give a little bit of fun to the text so I separated in a component that changes its content from time to time.

```
const DynamicTitle = () => {
  const [title, setTitle] = useState("Design Engineer");

  useEffect(() => {
    const loop = () => {
      const randomIndex = Math.floor(Math.random() * titles.length);
      const delay = Math.floor(Math.random() * 2000) + 3000;
      setTitle(titles[randomIndex]);
      if (delay > 4100) {
        setTitle(cryptic);
        setTimeout(() => setTitle(titles[randomIndex]), 100);
        setTimeout(() => setTitle(cryptic), 200);
        setTimeout(() => setTitle(titles[randomIndex]), 350);
      }
      setTimeout(loop, delay);
    };
    setTimeout(loop, 1500);
  }, []);

  return (
    <h1 className="show-title">
      {title}
    </h1>
  )
}

const titles = [
  "Design Engineer",
  "UX/UI Designer",
  "Frontend Engineer",
  "Software Engineer",
  "Creative Ghost",
  "scroll_to know_more",
];
const cryptic = "⎍⎎⎒⌭ ⌿⎎⌿⍅⍆⎎⌿⌶";

```

- Loop function will be called every 3 to 5 seconds and will change the title to a random one from the titles array, the cryptic variable is just a random string of characters that will be shown for a few milliseconds to give a little bit glitch effect to the text and it will happen only if the delay is bigger than 4.1 seconds.
- Maybe this can be achieved in a better way, to many setTimeouts can be a little bit messy but it works for now.

3. Floating card.

```
<main>
  <div>
    <Intro />
    <FloatingCard />
  </div>
</main>
const Intro = () => (
  <section className="min-h-[88svh] max-w-screen-xl mx-auto sticky top-0 show-intro p-4">
    Intro content here...
  </section>
)
const FloatingCard = () => (
  <section className="min-h-screen p-4 flex flex-col">
    <div className="flex-1 rounded-xl bg-black"> --> Black Rounded Card
      <div className="max-w-screen-xl mx-auto">
        Floating card content here...
      </div>
    </div>
  </section>
```

- Intro section has sticky and top-0 classes so it can be hide when the user scrolls down and the Floating Card can be visible.
- Intro has a min-height of 88vh so the Floating Card can be visible in the bottom showing the user that there is more content to see.
- Floating Card has 3 wrappers, the first one is the invisible space that covers the whole device screen, the second one is the black rounded card that will ocuppy that space and the third one is the content inside the card constrained by the max-width of the screen, so that section will be looked nice in any screen size.

4. Main Header appearance and change bg to pink once Floating Card is visible.

```
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight - 125) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 opacity-0 data-[active=true]:opacity-100 transition-all duration-300 ease-in-out"
      data-active={showHeader}
    >
      Header content here...
    </header>
  )
}
- Header has a fixed position and it will be hidden by default.
- Trigger is just a regular scroll event listener that will check if the user has scrolled down more than the device height minus 125px (height where FloatingCard is fully visible) and if so, it will show the header with a transition.
- For that change I'm usign a simple data attribute but this can be achieved by adding another class using classnames library for instance.
```

5. Logo Glitch animation.

```
<figure className="glitch" data-text="⏃⎑⎅▽">
  ⏃⎑⎅▽
</figure>

.glitch {
  position: relative;
  font-weight: bold;
  letter-spacing: 3px;
  z-index: 1;
}
.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
.glitch:before {
  animation: glitch-it 7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #ff034f;
  z-index: -1;
}
.glitch:after {
  animation: glitch-it 7s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #060cff;
  z-index: -2;
}
```

- This is a simple glitch animation that will be applied to the logo, it will show the logo text and a copy of it with different colors and a little bit of opacity.

6. Big “highlighted project” title onScroll animation with background change.

```
export function OnScrollAnimatedTitle(props: OnScrollAnimatedTitleProps) {
  const { title } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentScrolled, setPercentScrolled] = useState<number>(0);

  const handleAnimationOnScroll = () => {
    const offsetTop = containerRef.current?.offsetTop;
    const offsetHeight = containerRef.current?.offsetHeight;
    if (
      offsetTop &&
      offsetHeight &&
      window.scrollY > offsetTop &&
      window.scrollY < offsetTop + offsetHeight
    ) {
      const percentScrolled =
        (window.scrollY - offsetTop) / (offsetHeight - window.innerHeight);
      setPercentScrolled(percentScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleAnimationOnScroll);
    return () => {
      window.removeEventListener("scroll", handleAnimationOnScroll);
    };
  }, []);

  const fontSizeCalc = (1 - percentScrolled) * 90;

  return (
    <section
      className="h-[300vh] pt-[100vh]"
      style={{ backgroundColor: `rgba(255, 3, 79, ${1 - percentScrolled})` }}
      ref={containerRef}
    >
      <div className="sticky top-[50vh] transform -translate-y-1/2 w-screen flex justify-end">
        <h2
          className="text-white -tracking-wider whitespace-nowrap w-fit"
          style={{
            fontSize: `${fontSizeCalc >= 9 ? fontSizeCalc : 9}vw`,
          }}
        >
          {title}
        </h2>
      </div>
    </section>
  );
}
```

- We give a height of 300vh to the main section so the user can have enough space to scroll down and see the animation.
- The next wrapper it will be placed in the middle of the screen and in the right side of the screen and it will be sticky so it will follow the user while scrolling down.
- As the user scrolls down, the title size will be reduced by assigning a font-size calculated by the percentScrolled state, same for the background color, its opacity value inside that rgba will be reduced by the percentScrolled state.

7. Native Images Carrousel

```
<section
  className="flex py-8 px-4 lg:px-16 gap-6 overflow-x-scroll w-screen relative snap-x snap-mandatory scroll-pl-4 lg:scroll-pl-8 xl:scroll-pl-16 carousel"
>
  {items.map((item) => (
    <article
      key={item.id}
      className="bg-lk-blue h-[220px] min-w-[300px] md:h-[400px] md:min-w-[500px] lg:h-[600px] lg:min-w-[900px] snap-start rounded-lg overflow-hidden relative"
    >
      <picture>
        <Image
          src={item.imageSrc}
          alt={item.label}
          width={900}
          height={600}
          sizes="(min-width: 1024px) 900px, 300px"
          className="w-full h-full object-contain"
        />
      </picture>
    </article>
  ))}
</section>

.carousel::-webkit-scrollbar {
  height: 8px;
}
.carousel::-webkit-scrollbar-track {
  background-color: #141414;
}
.carousel::-webkit-scrollbar-thumb {
  background-color: #060cff;
  border-radius: none;
  height: 8px;
}
.carousel.carousel--green::-webkit-scrollbar {
  height: 2px;
}
.carousel.carousel--green::-webkit-scrollbar-thumb {
  background-color: #50f900;
}
```

- This is a simple carrousel that will show the images in a horizontal scroll, it will be responsive and it will show the scrollbar all the time as part of the design.

8. Right fluorescent light.

```
<section className="relative">
  <span
    className="absolute top-0 right-12 md:right-24 lg:right-28 xl:right-52 w-0.5 lg:w-1 h-1/2 bg-gradient-to-b from-transparent to-lk-pink"
  />
  <span
    className="absolute bottom-0 right-12 md:right-24 lg:right-28 xl:right-52 w-0.5 lg:w-1 h-1/2 bg-gradient-to-t from-transparent to-lk-pink"
  />
  <div className="w-full max-w-screen-xl mx-auto">
    Content here...
  </div>
</section>
```

- This is a simple gradient line that will be placed in the right side of the screen, it will be responsive and it will be placed in the middle of the screen in the x-axis, its height will depends on the content inside the section.

9. Strange Characters Animated Titles.

```
const GlitchTitle = (props: GlitchTitleProps) => {
  const { title } = props;
  const [titleToGlitch, setTitleToGlitch] = useState(title);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * title.length);
      const randomCharacter = title[randomIndex];
      const newTitle = title.replace(
        randomCharacter,
        crypticCharacters[Math.floor(Math.random() * crypticCharacters.length)]
      );
      setTitleToGlitch(newTitle);
    }, 900);
    return () => clearTimeout(timeout);
  }, [titleToGlitch]);

  return (
    <h2 className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit text-[12vw] lg:text-[9vw]">
      {titleToGlitch}
    </h2>
  );
}
const crypticCharacters = ["⎍", "⎎", "⎒", "⌭", "⌿", "⍅", "⍆", "⌿", "⌶"];
```

- This is a simple animation that will replace a random character of the title with a random cryptic character from the crypticCharacters array every 900ms.
