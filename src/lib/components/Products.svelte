<script lang="ts">
  import { onMount, getContext } from "svelte";
  import { ArrowRight, ArrowLeft } from "lucide-svelte";
  import type { Translations } from "$lib/i18n/translations";
  import HearingAidPlaceholder from "$lib/components/ui/HearingAidPlaceholder.svelte";

  const t = getContext<Translations>("t");

  // Track image load errors
  let imageErrors: Record<string, boolean> = $state({});

  // Danavox product lineup with actual images
  const productLineup = [
    {
      id: "brisa-3",
      name: "Brisa 3",
      tier: "Essential",
      description: "Zanesljiva kakovost za vsakodnevno uporabo",
      descriptionEn: "Reliable quality for everyday use",
      price: "od 590 €",
      features: ["Osnovna Bluetooth povezava", "16 kanalov", "Odpornost na vlago"],
      image: "https://i0.wp.com/orlmedicina.si/wp-content/uploads/2025/01/Mask-group-1-1024x284.png",
      color: "bg-[hsl(var(--sage))]",
    },
    {
      id: "brisa-7",
      name: "Brisa 7",
      tier: "Advanced",
      description: "Napredna tehnologija za aktivne posameznike",
      descriptionEn: "Advanced technology for active individuals",
      price: "od 1.190 €",
      features: ["Izboljšan govor v hrupu", "24 kanalov", "Aplikacija za pametni telefon"],
      image: "https://i0.wp.com/orlmedicina.si/wp-content/uploads/2025/01/Mask-group-2-1024x284.png",
      color: "bg-[hsl(var(--cream))]",
    },
    {
      id: "brisa-9",
      name: "Brisa 9",
      tier: "Premium",
      description: "Vrhunska izkušnja za najbolj zahtevne",
      descriptionEn: "Premium experience for the most demanding",
      price: "od 1.890 €",
      features: ["360° prostorski zvok", "32 kanalov", "AI samoprilagajanje"],
      image: "https://i0.wp.com/orlmedicina.si/wp-content/uploads/2025/01/Mask-group-3-1024x284.png",
      color: "bg-background",
    },
  ];

  let scrollContainer: HTMLElement;
  let canScrollLeft = $state(false);
  let canScrollRight = $state(true);

  function updateScrollState() {
    if (!scrollContainer) return;
    canScrollLeft = scrollContainer.scrollLeft > 20;
    canScrollRight = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 20;
  }

  function scrollTo(direction: 'left' | 'right') {
    if (!scrollContainer) return;
    const cardWidth = scrollContainer.querySelector('.product-card')?.clientWidth ?? 400;
    const gap = 32;
    const scrollAmount = cardWidth + gap;

    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  onMount(() => {
    updateScrollState();
    scrollContainer?.addEventListener('scroll', updateScrollState, { passive: true });
    return () => scrollContainer?.removeEventListener('scroll', updateScrollState);
  });
</script>

<section id="ponudba" class="section-padding overflow-hidden">
  <!-- Editorial Header -->
  <div class="container-luxury mb-16 lg:mb-24">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
      <div>
        <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
          Danavox Kolekcija
        </span>
        <h2 class="headline-lg text-foreground">
          Izberite svoj
          <span class="block text-[hsl(var(--primary))]">popoln zvok</span>
        </h2>
      </div>

      <div class="lg:text-right">
        <p class="body-lg text-muted-foreground max-w-md lg:ml-auto">
          Tri ravni tehnologije, prilagojene vašim potrebam in življenjskemu slogu. Vsi modeli vključujejo dansko kakovost in 2-letno garancijo.
        </p>
      </div>
    </div>
  </div>

  <!-- Horizontal Scroll Navigation -->
  <div class="container-luxury mb-8">
    <div class="flex items-center justify-end gap-4">
      <button
        onclick={() => scrollTo('left')}
        class="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollLeft}
        aria-label="Prejšnji izdelek"
      >
        <ArrowLeft class="w-5 h-5" />
      </button>
      <button
        onclick={() => scrollTo('right')}
        class="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollRight}
        aria-label="Naslednji izdelek"
      >
        <ArrowRight class="w-5 h-5" />
      </button>
    </div>
  </div>

  <!-- Product Cards - Horizontal Scroll -->
  <div
    bind:this={scrollContainer}
    class="horizontal-scroll pb-8"
  >
    <div class="flex gap-8 pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
      {#each productLineup as product, i}
        <article
          class="product-card group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px]"
          style="animation: fadeSlideUp 0.8s ease forwards; animation-delay: {i * 0.15}s;"
        >
          <!-- Product Image -->
          <div class="relative {product.color} aspect-[4/3] mb-6 overflow-hidden">
            {#if !imageErrors[product.id]}
              <img
                src={product.image}
                alt={product.name}
                class="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                onerror={() => imageErrors[product.id] = true}
              />
            {:else}
              <HearingAidPlaceholder variant={product.tier.toLowerCase() as 'essential' | 'advanced' | 'premium'} />
            {/if}

            <!-- Tier Badge -->
            <div class="absolute top-6 left-6 z-10">
              <span class="label-uppercase text-xs tracking-[0.15em] text-muted-foreground bg-white/80 dark:bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                {product.tier}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-4">
            <div class="flex items-baseline justify-between">
              <h3 class="headline-sm text-foreground">{product.name}</h3>
              <span class="text-sm font-medium text-[hsl(var(--primary))]">{product.price}</span>
            </div>

            <p class="text-muted-foreground">
              {product.description}
            </p>

            <!-- Features -->
            <ul class="space-y-2 pt-2">
              {#each product.features as feature}
                <li class="flex items-center gap-3 text-sm text-muted-foreground">
                  <span class="w-1 h-1 rounded-full bg-[hsl(var(--primary))]"></span>
                  {feature}
                </li>
              {/each}
            </ul>

            <!-- CTA -->
            <div class="pt-4">
              <a
                href="#kontakt"
                class="btn-text-arrow text-sm font-medium text-foreground"
              >
                Povpraševanje <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </article>
      {/each}

      <!-- End Card - Contact CTA -->
      <article
        class="product-card flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] flex items-center justify-center"
        style="animation: fadeSlideUp 0.8s ease forwards; animation-delay: 0.6s;"
      >
        <div class="text-center space-y-6 p-8">
          <span class="label-uppercase text-muted-foreground tracking-[0.2em]">
            Ne veste kateri?
          </span>
          <h3 class="headline-sm text-foreground">
            Svetujemo vam brezplačno
          </h3>
          <p class="text-muted-foreground max-w-xs mx-auto">
            Naši strokovnjaki vam pomagajo izbrati najprimernejši model za vaše potrebe.
          </p>
          <a href="#kontakt" class="btn-outline inline-flex">
            <span>Naročite se na posvet</span>
          </a>
        </div>
      </article>

      <!-- Spacer for scroll end -->
      <div class="w-8 flex-shrink-0"></div>
    </div>
  </div>

  <!-- Product Types Section -->
  <div class="container-luxury mt-20 lg:mt-32">
    <div class="grid md:grid-cols-2 gap-px bg-border">
      <!-- In-ear -->
      <a href="/ponudba/v-usesni" class="group bg-background p-8 lg:p-12 hover:bg-[hsl(var(--sage))] transition-colors duration-500">
        <div class="flex items-start justify-between mb-8">
          <span class="label-uppercase text-muted-foreground tracking-[0.15em]">01</span>
          <ArrowRight class="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
        </div>
        <h3 class="headline-md text-foreground mb-4">V-ušesni aparati</h3>
        <p class="text-muted-foreground">
          Diskretni aparati po meri, ki se popolnoma prilegajo vašemu ušesu. Idealni za aktivne posameznike.
        </p>
      </a>

      <!-- Behind-ear -->
      <a href="/ponudba/za-usesni" class="group bg-background p-8 lg:p-12 hover:bg-[hsl(var(--cream))] transition-colors duration-500">
        <div class="flex items-start justify-between mb-8">
          <span class="label-uppercase text-muted-foreground tracking-[0.15em]">02</span>
          <ArrowRight class="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
        </div>
        <h3 class="headline-md text-foreground mb-4">Za-ušesni aparati</h3>
        <p class="text-muted-foreground">
          Zmogljivi aparati z najnovejšo tehnologijo. Bluetooth povezava, polnilna baterija in aplikacija.
        </p>
      </a>
    </div>
  </div>

</section>

<style>
  /* Animation keyframes are defined globally in app.css */
</style>
