<script lang="ts">
  import { Check, Sparkles, ArrowRight } from "lucide-svelte";
</script>

<section class="section-padding">
  <div class="container-luxury">
    <!-- Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
        Cenik
      </span>
      <h2 class="headline-lg text-foreground max-w-2xl mx-auto">
        Jasna cena,
        <span class="text-[hsl(var(--primary))]">brez presenečenj</span>
      </h2>
    </div>

    <!-- Pricing Cards -->
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
      <!-- Standard -->
      <div class="border border-border/60 bg-white p-8 lg:p-10">
        <div class="mb-8">
          <span class="label-uppercase text-muted-foreground tracking-[0.15em]">Osnovna ponudba</span>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="headline-display text-foreground">2.500</span>
            <span class="text-muted-foreground">€</span>
          </div>
          <p class="text-muted-foreground mt-2">Enkratno plačilo</p>
        </div>

        <ul class="space-y-3 mb-8">
          {#each ["Izdelava spletne strani po meri", "Do 10 podstrani", "Slovenščina + angleščina", "Responsive dizajn", "SEO on-site optimizacija", "GDPR skladnost + SSL"] as item}
            <li class="flex items-start gap-3 text-sm">
              <Check class="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
              <span class="text-muted-foreground">{item}</span>
            </li>
          {/each}
        </ul>

        <a href="#kontakt" class="btn-outline w-full justify-center">
          <span>Izberite</span>
        </a>
      </div>

      <!-- Migration - Highlighted -->
      <div class="border-2 border-[hsl(var(--primary))] bg-white p-8 lg:p-10 relative">
        <!-- Badge -->
        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
          <div class="bg-[hsl(var(--primary))] text-white px-4 py-1.5 text-xs font-medium tracking-wide uppercase flex items-center gap-2">
            <Sparkles class="w-3 h-3" />
            <span>Priporočeno</span>
          </div>
        </div>

        <div class="mb-8">
          <span class="label-uppercase text-muted-foreground tracking-[0.15em]">Z migracijo obstoječe strani</span>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="headline-display text-foreground">2.000</span>
            <span class="text-muted-foreground">€</span>
          </div>
          <p class="text-[hsl(var(--primary))] font-medium mt-2">Prihranite 500 €</p>
        </div>

        <ul class="space-y-3 mb-8">
          {#each ["Vse iz osnovne ponudbe", "Prenos obstoječe strani k nam", "Migracija brez izpada", "Vzdrževanje obeh strani", "Prioritetna obravnava"] as item}
            <li class="flex items-start gap-3 text-sm">
              <Check class="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
              <span class="text-muted-foreground">{item}</span>
            </li>
          {/each}
        </ul>

        <a href="#kontakt" class="btn-premium w-full justify-center">
          <span>Izberite</span>
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Monthly Pricing -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-[hsl(var(--sage))] p-8 lg:p-12">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span class="label-uppercase text-muted-foreground tracking-[0.15em] mb-4 block">Mesečno vzdrževanje</span>
            <div class="flex items-baseline gap-2">
              <span class="headline-lg text-foreground">50</span>
              <span class="text-muted-foreground">€ / mesec / stran</span>
            </div>
          </div>
          <div class="space-y-2">
            {#each ["SSD gostovanje + SSL", "Dnevne varnostne kopije", "24/7 monitoring", "1 ura uredniške podpore"] as item}
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <Check class="w-4 h-4 text-[hsl(var(--primary))]" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- What's Included Summary -->
    <div class="max-w-4xl mx-auto mt-16">
      <h3 class="headline-sm text-foreground text-center mb-8">Kaj je vključeno v ceno</h3>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 border border-border/60 bg-white">
          <div class="headline-md text-[hsl(var(--primary))] mb-2">2 jezika</div>
          <p class="text-muted-foreground text-sm">Slovenščina in angleščina vključeni</p>
        </div>
        <div class="text-center p-6 border border-border/60 bg-white">
          <div class="headline-md text-[hsl(var(--primary))] mb-2">Brez vezave</div>
          <p class="text-muted-foreground text-sm">Prekinete lahko kadarkoli</p>
        </div>
        <div class="text-center p-6 border border-border/60 bg-white">
          <div class="headline-md text-[hsl(var(--primary))] mb-2">Hiter začetek</div>
          <p class="text-muted-foreground text-sm">Pričnemo takoj po potrditvi</p>
        </div>
      </div>
    </div>
  </div>
</section>
