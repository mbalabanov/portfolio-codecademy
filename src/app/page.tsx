"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  { src: "/hero-1.svg", alt: "Placeholder hero slide one" },
  { src: "/hero-2.svg", alt: "Placeholder hero slide two" },
  { src: "/hero-3.svg", alt: "Placeholder hero slide three" },
];

function MarinLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0"
    >
      <rect width="64" height="64" rx="16" fill="#0d3b66" />
      <path
        d="M12 50V14h10l10 16 10-16h10v36h-9V29l-11 17h-1L21 29v21h-9z"
        fill="#f4d35e"
      />
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <nav className="site-nav container">
          <a className="brand" href="#top" aria-label="Back to top">
            <MarinLogo />
            <span>Marin</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container hero" aria-label="Hero slideshow">
          <div className="hero-frame">
            {heroSlides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`hero-image ${
                  activeSlide === index ? "is-active" : "is-hidden"
                }`}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            ))}
            <div className="hero-overlay">
              <h1>Web Development, Greek Sun, Zero Boring Pixels</h1>
              <p>Marin builds playful, practical websites with extra feta.</p>
            </div>
          </div>
          <div className="hero-dots" aria-label="Hero slide controls">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                className={activeSlide === index ? "dot active" : "dot"}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={activeSlide === index}
              />
            ))}
          </div>
        </section>

        <section id="about" className="container intro">
          <p>
            Marin is a web developer in Greece, powered by coffee, sea breeze,
            and suspicious levels of enthusiasm. He once tried to eat his own
            head, and honestly it might have worked if people had not stepped in
            and ruined the experiment.
          </p>
        </section>

        <section className="container two-columns" aria-label="About details">
          <article>
            <h2>How Marin Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              varius, lectus id vulputate commodo, eros libero feugiat dolor,
              et posuere ipsum nisl vitae neque. Donec ultricies tempor diam,
              sed tincidunt elit facilisis et.
            </p>
            <p>
              Morbi iaculis nibh vel odio lacinia, vitae pharetra erat cursus.
              Cras faucibus justo ac massa vehicula, id feugiat neque finibus.
              Nulla facilisi. Vivamus luctus finibus sem, sed pretium magna.
            </p>
          </article>
          <article>
            <h2>What Marin Builds</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              egestas tristique diam, vel volutpat justo suscipit ut. Sed
              feugiat risus at ipsum dapibus, a posuere odio tempor.
            </p>
            <p>
              Maecenas vulputate, magna sed fermentum molestie, erat mauris
              sagittis est, in ullamcorper nunc arcu sed metus. Etiam sed lorem
              vitae neque imperdiet lobortis quis non libero.
            </p>
          </article>
        </section>

        <section id="projects" className="container projects">
          <h2>Example Projects</h2>
          <div className="project-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <article key={index} className="project-card">
                <div className="project-thumb">Preview</div>
                <h3>Project {index + 1}</h3>
                <p>
                  Placeholder summary for this project. Replace with real details
                  and links when ready.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <p>Copyright © {new Date().getFullYear()} Marin. All rights reserved.</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
