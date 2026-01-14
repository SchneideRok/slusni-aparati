<script lang="ts">
  import { Check, Ear, Headphones, Stethoscope, ArrowRight } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { siteConfig } from "$lib/config/site";

  const t = getContext<Translations>("t");

  const pricingItems = [
    {
      icon: Ear,
      title: "V-ušesni aparati",
      subtitle: "Diskretna eleganca",
      priceFrom: "490",
      priceZZZS: "od 0",
      features: ["Diskretna oblika", "Po meri ušesa", "Daljinsko upravljanje"],
      popular: false,
    },
    {
      icon: Headphones,
      title: "Za-ušesni aparati",
      subtitle: "Vrhunska tehnologija",
      priceFrom: "690",
      priceZZZS: "od 0",
      features: ["Bluetooth povezava", "Polnjenje USB-C", "Mobilna aplikacija", "Najboljša kakovost zvoka"],
      popular: true,
    },
    {
      icon: Stethoscope,
      title: "Pregled sluha",
      subtitle: "Brez obveznosti",
      priceFrom: "0",
      priceZZZS: "0",
      features: ["Avdiometrija", "Svetovanje", "Preizkus aparatov", "Brez obveznosti"],
      popular: false,
    },
  ];
</script>

<section id="cenik" class="section-padding border-t border-border">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
        Cenik
      </span>
      <h2 class="headline-lg text-foreground max-w-2xl mx-auto">
        Transparentne
        <span class="text-[hsl(var(--primary))]">cene</span>
      </h2>
      <p class="body-lg text-muted-foreground max-w-xl mx-auto mt-6">
        Z napotnico ZZZS lahko dobite aparat brezplačno ali z minimalno doplačilom.
      </p>
    </div>

    <!-- Pricing Grid -->
    <div class="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
      {#each pricingItems as item, i}
        {@const Icon = item.icon}
        <div
          class="bg-background p-8 lg:p-10 flex flex-col {item.popular ? 'bg-[hsl(var(--sage))]' : ''}"
          style="animation: fadeIn 0.6s ease forwards; animation-delay: {i * 0.1}s;"
        >
          {#if item.popular}
            <span class="label-uppercase text-[hsl(var(--primary))] tracking-[0.15em] text-xs mb-6">
              Priporočamo
            </span>
          {:else}
            <span class="h-6 mb-6"></span>
          {/if}

          <!-- Icon -->
          <div class="w-14 h-14 rounded-full border border-border flex items-center justify-center mb-6 {item.popular ? 'border-[hsl(var(--primary))]/30 bg-background' : ''}">
            <Icon class="w-6 h-6 text-[hsl(var(--primary))]" />
          </div>

          <!-- Title -->
          <h3 class="headline-sm text-foreground mb-1">{item.title}</h3>
          <p class="text-muted-foreground text-sm mb-6">{item.subtitle}</p>

          <!-- Price -->
          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="headline-md text-foreground">{item.priceFrom}</span>
              <span class="text-muted-foreground">EUR</span>
            </div>
            <p class="text-sm text-[hsl(var(--primary))] mt-1">Z ZZZS: {item.priceZZZS} EUR</p>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-8 flex-1">
            {#each item.features as feature}
              <li class="flex items-center gap-3 text-sm text-muted-foreground">
                <Check class="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                {feature}
              </li>
            {/each}
          </ul>

          <!-- CTA -->
          <a
            href="tel:{siteConfig.contact.phone}"
            class="{item.popular ? 'btn-primary' : 'btn-outline'} w-full justify-center"
          >
            <span>Naročite se</span>
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      {/each}
    </div>

    <!-- ZZZS Note -->
    <div class="text-center mt-12 max-w-2xl mx-auto">
      <p class="text-sm text-muted-foreground">
        * Cene so informativne in odvisne od modela aparata. Z veljavno napotnico ZZZS je doplačilo minimalno ali ga ni. Za natančen izračun nas kontaktirajte.
      </p>
    </div>
  </div>
</section>

<style>
  /* Animation keyframes are defined globally in app.css */
</style>
