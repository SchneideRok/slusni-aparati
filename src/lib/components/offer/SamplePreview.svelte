<script lang="ts">
  import { ExternalLink, Monitor, Smartphone, Tablet } from "lucide-svelte";
</script>

<section id="vzorec" class="section-cream section-padding">
  <div class="container-luxury">
    <!-- Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
        Rezultat pred odločitvijo
      </span>
      <h2 class="headline-lg text-foreground max-w-2xl mx-auto">
        Oglejte si
        <span class="text-[hsl(var(--primary))]">vzorčno stran</span>
      </h2>
      <p class="body-lg text-muted-foreground max-w-xl mx-auto mt-6">
        Pripravili smo popoln vzorec spletne strani za slušne aparate. Kliknite spodaj za ogled.
      </p>
    </div>

    <!-- Preview Container -->
    <div class="relative max-w-5xl mx-auto">
      <!-- Browser Frame -->
      <div class="bg-[hsl(var(--charcoal))] rounded-t-lg">
        <!-- Browser Header -->
        <div class="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div class="flex-1 flex justify-center">
            <div class="bg-white/10 rounded px-4 py-1 text-sm text-white/60 flex items-center gap-2">
              <Monitor class="w-3 h-3" />
              <span>slusni-aparati.vzorec.si</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Screenshot Preview -->
      <div class="relative bg-white border-x border-b border-border aspect-[16/10] overflow-hidden group">
        <!-- Actual iframe preview -->
        <iframe
          src="/"
          title="Vzorčna spletna stran"
          class="w-full h-full border-0 pointer-events-none"
          loading="lazy"
        ></iframe>

        <!-- Overlay with CTA -->
        <div class="absolute inset-0 bg-[hsl(var(--charcoal))]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-premium group/btn"
          >
            <span>Odprite vzorčno stran</span>
            <ExternalLink class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>

    <!-- Device Preview Badges -->
    <div class="flex items-center justify-center gap-8 mt-12">
      <div class="flex items-center gap-2 text-muted-foreground">
        <Monitor class="w-5 h-5" />
        <span class="text-sm">Namizni</span>
      </div>
      <div class="flex items-center gap-2 text-muted-foreground">
        <Tablet class="w-5 h-5" />
        <span class="text-sm">Tablični</span>
      </div>
      <div class="flex items-center gap-2 text-muted-foreground">
        <Smartphone class="w-5 h-5" />
        <span class="text-sm">Mobilni</span>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-12">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary group"
      >
        <span>Odprite vzorčno stran v novem zavihku</span>
        <ExternalLink class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
</section>
