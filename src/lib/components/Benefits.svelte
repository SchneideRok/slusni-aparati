<script lang="ts">
  import { Award, Shield, Bluetooth, Smartphone, Music, BadgeCheck } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { benefits } from "$lib/config/site";

  const t = getContext<Translations>("t");

  const iconMap: Record<string, typeof Award> = {
    Award,
    Shield,
    Bluetooth,
    Smartphone,
    Music,
    BadgeCheck,
  };
</script>

<section class="section-dark section-padding">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-28">
      <div class="lg:col-span-5">
        <span class="label-uppercase text-white/50 tracking-[0.2em] mb-6 block">
          Zakaj Danavox
        </span>
        <h2 class="headline-lg text-white">
          Tehnologija v službi
          <span class="block text-[hsl(var(--primary))]">naravnega zvoka</span>
        </h2>
      </div>

      <div class="lg:col-span-7 lg:pt-16">
        <p class="body-lg text-white/70 max-w-xl">
          80 let danske inovacije v enem aparatu. Vsak detajl je zasnovan za vaše udobje in naraven zvok, ki vas povezuje s svetom okoli vas.
        </p>
      </div>
    </div>

    <!-- Benefits Grid - Editorial Layout -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
      {#each benefits as benefit, i}
        {@const Icon = iconMap[benefit.icon]}
        <article
          class="group bg-[hsl(var(--charcoal))] p-8 lg:p-10 hover:bg-white/5 transition-colors duration-500"
          style="animation: fadeIn 0.6s ease forwards; animation-delay: {i * 0.1}s; opacity: 0;"
        >
          <!-- Number & Icon -->
          <div class="flex items-start justify-between mb-8">
            <span class="text-sm text-white/30 font-medium tabular-nums">
              0{i + 1}
            </span>
            <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[hsl(var(--primary))]/50 group-hover:bg-[hsl(var(--primary))]/10 transition-all duration-500">
              <Icon class="w-5 h-5 text-white/60 group-hover:text-[hsl(var(--primary))] transition-colors duration-500" />
            </div>
          </div>

          <!-- Content -->
          <h3 class="headline-sm text-white mb-3">{benefit.title}</h3>
          <p class="text-white/60 text-sm leading-relaxed">
            {benefit.description}
          </p>
        </article>
      {/each}
    </div>

    <!-- Bottom Feature Highlight -->
    <div class="mt-20 lg:mt-28 pt-12 border-t border-white/10">
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="text-center">
          <span class="headline-display text-[hsl(var(--primary))] mb-2 block">80+</span>
          <span class="text-white/60 text-sm">let tradicije</span>
        </div>
        <div class="text-center">
          <span class="headline-display text-[hsl(var(--primary))] mb-2 block">2.4</span>
          <span class="text-white/60 text-sm">GHz Bluetooth</span>
        </div>
        <div class="text-center">
          <span class="headline-display text-[hsl(var(--primary))] mb-2 block">IP68</span>
          <span class="text-white/60 text-sm">vodoodpornost</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
