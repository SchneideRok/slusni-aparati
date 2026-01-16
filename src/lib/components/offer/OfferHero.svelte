<script lang="ts">
  import { ArrowDown } from "lucide-svelte";
</script>

<section class="relative min-h-[80vh] flex items-center section-cream">
  <div class="container-luxury w-full py-20 lg:py-32">
    <div class="max-w-4xl">
      <!-- Label -->
      <div class="mb-8">
        <span class="label-uppercase text-muted-foreground tracking-[0.2em]">
          Ponudba za ORL Medicina d.o.o.
        </span>
      </div>

      <!-- Main Headline -->
      <h1 class="headline-display text-foreground mb-8">
        <span class="block overflow-visible">
          <span class="block">Spletna stran,</span>
        </span>
        <span class="block overflow-visible pb-2">
          <span class="block text-[hsl(var(--primary))]">ki prinaša paciente</span>
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="body-lg text-muted-foreground max-w-2xl mb-12">
        Ne iščemo strank. Iščemo partnerje, ki želijo rasti. Vi poskrbite za paciente, mi poskrbimo, da vas najdejo. Brez vezave. Brez skritih stroškov. Samo rezultati.
      </p>

      <!-- CTA -->
      <a
        href="#vzorec"
        class="btn-primary group"
      >
        <span>Oglejte si vzorec</span>
        <ArrowDown class="w-4 h-4 transition-transform group-hover:translate-y-1" />
      </a>
    </div>
  </div>

  <!-- Bottom indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
    <a href="#problem" class="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
      <span class="text-sm tracking-wide">Zakaj mi?</span>
      <ArrowDown class="w-4 h-4 animate-bounce" />
    </a>
  </div>
</section>

<style>
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }
  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }
</style>
