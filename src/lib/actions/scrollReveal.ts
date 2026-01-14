/**
 * Scroll Reveal Action
 * Uses Intersection Observer to trigger smooth animations when elements scroll into view
 */

function isMobileDevice(): boolean {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 768px)").matches
  );
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export interface ScrollRevealOptions {
  animation?:
    | "fade"
    | "slide-up"
    | "slide-left"
    | "slide-right"
    | "scale"
    | "blur";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
  easing?: string;
  distance?: number;
}

const defaultOptions: ScrollRevealOptions = {
  animation: "slide-up",
  delay: 0,
  duration: 600,
  threshold: 0.1,
  once: true,
  rootMargin: "0px 0px -50px 0px",
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  distance: 40,
};

export function scrollReveal(
  node: HTMLElement,
  options: ScrollRevealOptions = {},
) {
  if (isMobileDevice() || prefersReducedMotion()) {
    return { destroy() {}, update() {} };
  }

  const opts = { ...defaultOptions, ...options };

  node.style.opacity = "0";
  node.style.transition = `opacity ${opts.duration}ms ${opts.easing}, transform ${opts.duration}ms ${opts.easing}`;
  node.style.transitionDelay = `${opts.delay}ms`;
  node.style.willChange = "opacity, transform";

  switch (opts.animation) {
    case "slide-up":
      node.style.transform = `translateY(${opts.distance}px)`;
      break;
    case "slide-left":
      node.style.transform = `translateX(${opts.distance}px)`;
      break;
    case "slide-right":
      node.style.transform = `translateX(-${opts.distance}px)`;
      break;
    case "scale":
      node.style.transform = "scale(0.95)";
      break;
    case "blur":
      node.style.transform = `translateY(${opts.distance! / 2}px)`;
      node.style.filter = "blur(10px)";
      node.style.transition = `opacity ${opts.duration}ms ${opts.easing}, transform ${opts.duration}ms ${opts.easing}, filter ${opts.duration}ms ${opts.easing}`;
      break;
    case "fade":
    default:
      break;
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!opts.once || !hasAnimated)) {
          hasAnimated = true;
          node.style.opacity = "1";
          node.style.transform = "translateY(0) translateX(0) scale(1)";

          if (opts.animation === "blur") {
            node.style.filter = "blur(0)";
          }

          setTimeout(() => {
            node.style.willChange = "auto";
          }, opts.duration! + opts.delay!);

          if (opts.once) {
            observer.unobserve(node);
          }
        }
      });
    },
    {
      threshold: opts.threshold,
      rootMargin: opts.rootMargin,
    },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    },
    update(newOptions: ScrollRevealOptions) {
      Object.assign(opts, newOptions);
    },
  };
}

export function scrollRevealStagger(
  node: HTMLElement,
  options: ScrollRevealOptions & { staggerDelay?: number } = {},
) {
  if (isMobileDevice() || prefersReducedMotion()) {
    return { destroy() {} };
  }

  const { staggerDelay = 100, ...restOptions } = options;
  const opts = { ...defaultOptions, ...restOptions };

  const children = Array.from(node.children) as HTMLElement[];

  children.forEach((child, index) => {
    child.style.opacity = "0";
    child.style.transition = `opacity ${opts.duration}ms ${opts.easing}, transform ${opts.duration}ms ${opts.easing}`;
    child.style.transitionDelay = `${opts.delay! + index * staggerDelay}ms`;
    child.style.willChange = "opacity, transform";

    switch (opts.animation) {
      case "slide-up":
        child.style.transform = `translateY(${opts.distance}px)`;
        break;
      case "scale":
        child.style.transform = "scale(0.95)";
        break;
      default:
        break;
    }
  });

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!opts.once || !hasAnimated)) {
          hasAnimated = true;

          children.forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "translateY(0) scale(1)";
          });

          const totalDuration =
            opts.duration! + opts.delay! + children.length * staggerDelay;
          setTimeout(() => {
            children.forEach((child) => {
              child.style.willChange = "auto";
            });
          }, totalDuration);

          if (opts.once) {
            observer.unobserve(node);
          }
        }
      });
    },
    {
      threshold: opts.threshold,
      rootMargin: opts.rootMargin,
    },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    },
  };
}
