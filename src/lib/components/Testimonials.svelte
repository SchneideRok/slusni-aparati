<script lang="ts">
  import { Star, Quote } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";

  const t = getContext<Translations>("t");

  const testimonials = [
    {
      name: "Marija K.",
      age: "67 let",
      quote: "Po letih trpljenja s tinitusem sem končno našla rešitev. Danavox aparat mi je spremenil življenje - spet lahko uživam v pogovorih z družino.",
      rating: 5,
    },
    {
      name: "Franc P.",
      age: "72 let",
      quote: "Izjemno profesionalna ekipa. Postopek z ZZZS napotnico je bil preprost, aparat pa deluje odlično. Bluetooth povezava s televizijo je fantastična.",
      rating: 5,
    },
    {
      name: "Ana M.",
      age: "58 let",
      quote: "Diskretni v-ušesni aparat je točno to, kar sem potrebovala. Nihče ne opazi, da ga nosim, zvok pa je naraven in jasen.",
      rating: 5,
    },
  ];
</script>

<section class="section-cream section-padding">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-24">
      <div class="lg:col-span-5">
        <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
          Mnenja strank
        </span>
        <h2 class="headline-lg text-foreground">
          Zgodbe
          <span class="text-[hsl(var(--primary))]">zadovoljnih</span>
        </h2>
      </div>

      <div class="lg:col-span-7 lg:pt-16">
        <p class="body-lg text-muted-foreground max-w-xl">
          Vaše izkušnje so naša največja nagrada. Preberite, kako so naši slušni aparati izboljšali življenja naših strank.
        </p>
      </div>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      {#each testimonials as testimonial, i}
        <article
          class="group relative p-6 rounded-lg transition-all duration-500 hover:bg-white/50 dark:hover:bg-black/10"
          style="animation: fadeSlideUp 0.7s ease forwards; animation-delay: {i * 0.15}s;"
        >
          <!-- Corner accent -->
          <div class="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-0 left-0 w-full h-px bg-[hsl(var(--primary))]/30"></div>
            <div class="absolute top-0 left-0 h-full w-px bg-[hsl(var(--primary))]/30"></div>
          </div>

          <!-- Quote Icon -->
          <div class="mb-6">
            <Quote class="w-10 h-10 text-[hsl(var(--primary))]/30 transition-all duration-300 group-hover:text-[hsl(var(--primary))]/50 group-hover:scale-110" />
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-6">
            {#each Array(testimonial.rating) as _}
              <Star class="w-4 h-4 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
            {/each}
          </div>

          <!-- Quote -->
          <blockquote class="text-foreground text-lg leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-4 pt-6 border-t border-border">
            <div class="w-12 h-12 rounded-full bg-[hsl(var(--sage))] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span class="text-[hsl(var(--primary))] font-serif text-lg font-medium">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <p class="font-medium text-foreground">{testimonial.name}</p>
              <p class="text-sm text-muted-foreground">{testimonial.age}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Animation keyframes are defined globally in app.css */
</style>
