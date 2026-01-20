<script lang="ts">
  import { Shield, RefreshCw, HeadphonesIcon, FileCheck } from "lucide-svelte";
</script>

<section class="section-dark section-padding">
  <div class="container-luxury">
    <!-- Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-white/50 tracking-[0.2em] mb-6 block">
        Brez tveganja
      </span>
      <h2 class="headline-lg text-white max-w-2xl mx-auto">
        Zakaj nam
        <span class="text-[hsl(var(--primary))]">zaupati</span>
      </h2>
    </div>

    <!-- Trust Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <div class="text-center">
        <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 bg-white/5">
          <Shield class="w-7 h-7 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-2">Brez vezave</h3>
        <p class="text-white/60 text-sm">
          Prekinete lahko kadarkoli. Vaši podatki ostanejo vam.
        </p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 bg-white/5">
          <RefreshCw class="w-7 h-7 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-2">Dnevne kopije</h3>
        <p class="text-white/60 text-sm">
          Avtomatske varnostne kopije vsak dan. Nikoli ne izgubite podatkov.
        </p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 bg-white/5">
          <HeadphonesIcon class="w-7 h-7 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-2">Osebna podpora</h3>
        <p class="text-white/60 text-sm">
          Direkten stik z razvijalcem. Brez posrednikov ali čakalnih vrst.
        </p>
      </div>

      <div class="text-center">
        <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 bg-white/5">
          <FileCheck class="w-7 h-7 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-2">Rezultat vnaprej</h3>
        <p class="text-white/60 text-sm">
          Oglejte si vzorčno stran preden se odločite.
        </p>
      </div>
    </div>

    <!-- Process Steps -->
    <div class="border-t border-white/10 pt-12">
      <h3 class="headline-md text-white text-center mb-6">Naslednji koraki</h3>

      <!-- Meeting suggestion -->
      <p class="text-white/70 text-center max-w-2xl mx-auto mb-12 text-sm lg:text-base">
        Predlagam kratek sestanek v živo, kjer se pogovorimo o vaših ciljih, odgovorim na morebitna vprašanja in skupaj pogledamo, kako lahko digitalna prisotnost podpre rast vašega posla.
      </p>

      <div class="grid md:grid-cols-4 gap-8">
        {#each [
          { step: "01", title: "Sestanek", desc: "Pogovorimo se o vaših ciljih" },
          { step: "02", title: "Vsebine", desc: "Zberemo gradiva in besedila" },
          { step: "03", title: "Razvoj", desc: "Oblikujemo in programiramo" },
          { step: "04", title: "Lansiranje", desc: "Testiramo in objavimo" }
        ] as item}
          <div class="relative">
            <div class="text-[hsl(var(--primary))]/30 text-6xl font-serif mb-4">{item.step}</div>
            <h4 class="headline-sm text-white mb-2">{item.title}</h4>
            <p class="text-white/60 text-sm">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
