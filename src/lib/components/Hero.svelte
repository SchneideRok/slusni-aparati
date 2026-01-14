<script lang="ts">
  import { onMount, getContext } from "svelte";
  import { ArrowRight, ArrowDown, Phone } from "lucide-svelte";
  import { siteConfig } from "$lib/config/site";
  import type { Translations } from "$lib/i18n/translations";

  const t = getContext<Translations>("t");

  let mounted = false;

  onMount(async () => {
    mounted = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const { gsap } = await import("gsap");

    // Elegant entrance sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }});

    tl.fromTo(".hero-label",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(".hero-title span",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 },
      "-=0.4"
    )
    .fromTo(".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.4"
    )
    .fromTo(".hero-image-container",
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
      "-=1"
    )
    .fromTo(".hero-scroll",
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      "-=0.2"
    );
  });
</script>

<section class="relative min-h-screen flex flex-col">
  <!-- Main Hero Content -->
  <div class="flex-1 flex items-center">
    <div class="container-luxury w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-0">

        <!-- Left: Editorial Text Content -->
        <div class="space-y-8 lg:space-y-10">
          <!-- Label -->
          <div class="hero-label">
            <span class="label-uppercase text-muted-foreground tracking-[0.2em]">
              Danavox Partner · Ljubljana
            </span>
          </div>

          <!-- Main Headline - Editorial Style -->
          <h1 class="hero-title headline-display text-foreground">
            <span class="block overflow-hidden">
              <span class="block">Slišite</span>
            </span>
            <span class="block overflow-hidden">
              <span class="block">svet</span>
            </span>
            <span class="block overflow-hidden">
              <span class="block text-[hsl(var(--primary))]">jasneje</span>
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-subtitle body-lg text-muted-foreground max-w-md">
            Danska kakovost slušnih aparatov z 80-letno tradicijo.
            Individualna prilagoditev za vaše potrebe.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:{siteConfig.contact.phone}"
              class="hero-cta btn-primary group"
            >
              <Phone class="w-4 h-4" />
              <span>Naročite se</span>
              <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#ponudba"
              class="hero-cta btn-outline"
            >
              <span>Odkrijte ponudbo</span>
            </a>
          </div>
        </div>

        <!-- Right: Product Image -->
        <div class="hero-image-container relative">
          <!-- Subtle background -->
          <div class="absolute inset-0 bg-[hsl(var(--sage))] -z-10"></div>

          <!-- Product Image -->
          <div class="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://i1.wp.com/orlmedicina.si/wp-content/uploads/2025/01/Mask-group-1-1024x284.png"
              alt="Danavox Premium Slušni Aparati"
              class="w-full h-full object-contain p-8 lg:p-12"
            />

            <!-- Floating Info Card -->
            <div class="absolute bottom-6 left-6 right-6 p-6 bg-white/95 dark:bg-black/80 backdrop-blur-sm">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="label-uppercase text-muted-foreground mb-1">Premium kolekcija</p>
                  <p class="headline-sm text-foreground">Brisa 9</p>
                </div>
                <a
                  href="#ponudba"
                  class="btn-text-arrow text-sm font-medium text-foreground"
                >
                  Več <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom: Scroll Indicator & Trust Strip -->
  <div class="border-t border-border/50">
    <div class="container-luxury">
      <div class="flex items-center justify-between py-6">
        <!-- Scroll hint -->
        <a href="#ponudba" class="hero-scroll flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown class="w-4 h-4 animate-bounce" />
          <span class="text-sm tracking-wide">Odkrijte več</span>
        </a>

        <!-- Trust Indicators -->
        <div class="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></span>
            <span>ZZZS Partner</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></span>
            <span>Brezplačen pregled</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></span>
            <span>80+ let tradicije</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Bounce animation for scroll indicator */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(4px);
    }
  }

  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }
</style>
