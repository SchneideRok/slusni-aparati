<script lang="ts">
  import { Volume2, EarOff, Droplets, ArrowRight } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { conditions } from "$lib/config/site";

  const t = getContext<Translations>("t");

  const iconMap: Record<string, typeof Volume2> = {
    Volume2,
    EarOff,
    Droplets,
  };

  const conditionImages = [
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", // Tinnitus
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", // Hearing loss
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80", // Earwax
  ];
</script>

<section id="stanja" class="section-cream section-padding">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
        Težave s sluhom
      </span>
      <h2 class="headline-lg text-foreground max-w-2xl mx-auto">
        Razumemo vaše
        <span class="text-[hsl(var(--primary))]">težave</span>
      </h2>
      <p class="body-lg text-muted-foreground max-w-xl mx-auto mt-6">
        Strokovna diagnostika in sodobne rešitve za pogosta stanja, ki vplivajo na kakovost vašega sluha.
      </p>
    </div>

    <!-- Conditions Grid - Magazine Style -->
    <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {#each conditions as condition, i}
        {@const Icon = iconMap[condition.icon]}
        <a
          href="/stanja/{condition.slug}"
          class="group block"
          style="animation: fadeSlideUp 0.7s ease forwards; animation-delay: {i * 0.15}s;"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] mb-6 overflow-hidden bg-[hsl(var(--sage))]">
            <img
              src={conditionImages[i]}
              alt={condition.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-[hsl(var(--charcoal))]/0 group-hover:bg-[hsl(var(--charcoal))]/20 transition-colors duration-500"></div>

            <!-- Icon Badge -->
            <div class="absolute top-6 left-6">
              <div class="w-12 h-12 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center">
                <Icon class="w-5 h-5 text-[hsl(var(--primary))]" />
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="headline-sm text-foreground">{condition.title}</h3>
              <ArrowRight class="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <p class="text-muted-foreground">
              {condition.description}
            </p>
          </div>
        </a>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div class="mt-16 lg:mt-24 text-center">
      <p class="text-muted-foreground mb-6">
        Niste prepričani, katera težava vas muči?
      </p>
      <a href="#kontakt" class="btn-primary">
        <span>Naročite se na brezplačni pregled</span>
        <ArrowRight class="w-4 h-4" />
      </a>
    </div>
  </div>
</section>

<style>
  /* Animation keyframes are defined globally in app.css */
</style>
