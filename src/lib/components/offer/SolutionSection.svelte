<script lang="ts">
  import { Globe, Zap, Unlock, Check, Bot, BarChart3, Search, Languages, Wrench, MessageSquare } from "lucide-svelte";
</script>

<section class="section-dark section-padding">
  <div class="container-luxury">
    <!-- Header -->
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-28">
      <div class="lg:col-span-5">
        <span class="label-uppercase text-white/50 tracking-[0.2em] mb-6 block">
          Naša ponudba
        </span>
        <h2 class="headline-lg text-white">
          Kaj vam
          <span class="block text-[hsl(var(--primary))]">pripravimo</span>
        </h2>
      </div>

      <div class="lg:col-span-7 lg:pt-16">
        <p class="body-lg text-white/70 max-w-xl">
          Profesionalna spletna stran za slušne aparate, zasnovana za privabljanje novih pacientov. Vključen angleški prevod, brez skritih stroškov.
        </p>
      </div>
    </div>

    <!-- AI Optimization - Key Differentiator -->
    <div class="mb-16 p-8 lg:p-12 border-[3px] border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 relative overflow-hidden">
      <div class="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-[hsl(var(--primary))] font-mono border border-[hsl(var(--primary))] px-2 py-1">
        Ključna prednost
      </div>
      <div class="flex items-start gap-6">
        <div class="w-16 h-16 rounded-full border-2 border-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
          <Bot class="w-8 h-8 text-[hsl(var(--primary))]" />
        </div>
        <div>
          <h3 class="headline-md text-white mb-3">AI-optimizirana spletna stran</h3>
          <p class="text-white/70 mb-4">
            V dobi umetne inteligence je ključno, da vas najdejo tudi ChatGPT, Claude, Perplexity in drugi AI asistenti. Naše strani so strukturirane tako, da jih AI razume in navaja kot relevanten vir informacij.
          </p>
          <p class="text-white/50 text-sm">
            Optimizacija za AI iskalnike • Strukturirani podatki za strojno branje • Semantic HTML za boljše razumevanje
          </p>
        </div>
      </div>
    </div>

    <!-- Key Differentiators -->
    <div class="grid md:grid-cols-3 gap-px bg-white/10 mb-20">
      <article class="bg-[hsl(var(--charcoal))] p-8 lg:p-10 hover:bg-white/5 transition-colors duration-500">
        <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8">
          <Languages class="w-5 h-5 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-3">Kolikor jezikov želite</h3>
        <p class="text-white/60 text-sm leading-relaxed">
          Slovenščina, angleščina, nemščina... Vključimo toliko jezikov, kolikor jih potrebujete. Brez dodatnih stroškov.
        </p>
      </article>

      <article class="bg-[hsl(var(--charcoal))] p-8 lg:p-10 hover:bg-white/5 transition-colors duration-500">
        <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8">
          <Zap class="w-5 h-5 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-3">Začnemo takoj</h3>
        <p class="text-white/60 text-sm leading-relaxed">
          Brez dolgih čakalnih vrst. Pričnemo z delom takoj po potrditvi ponudbe.
        </p>
      </article>

      <article class="bg-[hsl(var(--charcoal))] p-8 lg:p-10 hover:bg-white/5 transition-colors duration-500">
        <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8">
          <Unlock class="w-5 h-5 text-[hsl(var(--primary))]" />
        </div>
        <h3 class="headline-sm text-white mb-3">Brez vezave</h3>
        <p class="text-white/60 text-sm leading-relaxed">
          Brez dolgoročne vezave. Prekinete lahko kadarkoli, vaši podatki ostanejo vam.
        </p>
      </article>
    </div>

    <!-- Expanded Services -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      <div class="p-6 border border-white/10 bg-white/5">
        <BarChart3 class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">Sledenje in statistika</h4>
        <p class="text-white/60 text-sm">
          Google Analytics, spremljanje konverzij, poročila o obiskovalcih - vse vključeno.
        </p>
      </div>

      <div class="p-6 border border-white/10 bg-white/5">
        <Search class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">SEO optimizacija</h4>
        <p class="text-white/60 text-sm">
          Optimizacija za Google, Bing, DuckDuckGo in druge iskalnike. Vključeni so vsi iskalniki, ne samo Google.
        </p>
      </div>

      <div class="p-6 border border-white/10 bg-white/5">
        <Wrench class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">CMS za urejanje</h4>
        <p class="text-white/60 text-sm">
          Enostaven sistem za urejanje vsebin. Spremenite besedila, slike, cene - brez programiranja.
        </p>
      </div>

      <div class="p-6 border border-white/10 bg-white/5">
        <MessageSquare class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">Neomejeni popravki</h4>
        <p class="text-white/60 text-sm">
          Prilagodljivi smo. Popravke vključujemo tekom razvoja brez dodatnih stroškov.
        </p>
      </div>

      <div class="p-6 border border-white/10 bg-white/5">
        <Globe class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">Odzivna podpora</h4>
        <p class="text-white/60 text-sm">
          Tudi po zaključku projekta smo tu za vas. Vzdrževanje vključuje odzivno podporo brez dodatnih stroškov.
        </p>
      </div>

      <div class="p-6 border border-white/10 bg-white/5">
        <Bot class="w-6 h-6 text-[hsl(var(--primary))] mb-4" />
        <h4 class="text-white font-semibold mb-2">Moderna tehnologija</h4>
        <p class="text-white/60 text-sm">
          Hitre, odzivne strani brez omejitev WordPressa. Pripravljena za prihodnost in nadgradnje.
        </p>
      </div>
    </div>

    <!-- What's Included -->
    <div class="border-t border-white/10 pt-12">
      <h3 class="headline-md text-white mb-8">Struktura spletne strani</h3>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          {#each ["Domača stran s ključnimi informacijami", "Ponudba slušnih aparatov (v-ušesni, za-ušesni)", "Težave s sluhom (tinitus, naglušnost, cerumen)", "Cenik storitev"] as item}
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check class="w-3 h-3 text-[hsl(var(--primary))]" />
              </div>
              <span class="text-white/80">{item}</span>
            </div>
          {/each}
        </div>

        <div class="space-y-4">
          {#each ["Naročilo na napotnico (ZZZS)", "Blog / Nasveti (3 članki)", "O nas stran", "Kontakt & Spletno naročanje"] as item}
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check class="w-3 h-3 text-[hsl(var(--primary))]" />
              </div>
              <span class="text-white/80">{item}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10">
        <p class="text-white/50 text-sm">
          Tehnična izvedba: Moderna platforma (ne WordPress), responsive dizajn, optimizacija hitrosti, SEO za vse iskalnike, AI optimizacija, GDPR skladnost, SSL certifikat, CMS za urejanje vsebin.
        </p>
      </div>
    </div>
  </div>
</section>
