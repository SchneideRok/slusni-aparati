<script lang="ts">
  import { onMount } from "svelte";
  import { Phone, Menu, X } from "lucide-svelte";
  import { siteConfig } from "$lib/config/site";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import type { Locale } from "$lib/i18n";

  const t = getContext<Translations>("t");
  const setLocale = getContext<(locale: Locale) => void>("setLocale");

  let mobileMenuOpen = $state(false);
  let currentLocale = $state<Locale>("sl");
  let scrolled = $state(false);

  const navLinks = [
    { href: "#ponudba", label: () => t.nav.products },
    { href: "#stanja", label: () => t.nav.conditions },
    { href: "#zzzs", label: () => t.nav.zzzs },
    { href: "#cenik", label: () => t.nav.pricing },
    { href: "#kontakt", label: () => t.nav.contact },
  ];

  function toggleLocale() {
    currentLocale = currentLocale === "sl" ? "en" : "sl";
    setLocale(currentLocale);
  }

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' : ''}"
>
  <div class="container-luxury">
    <div class="flex items-center justify-between h-20 lg:h-24">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="https://orlmedicina.si/wp-content/uploads/2023/06/Group-1534.svg"
          alt="ORL Medicina"
          class="h-10 lg:h-12 w-auto"
        />
      </a>

      <!-- Desktop Navigation - Center -->
      <nav class="hidden lg:flex items-center gap-10">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-link text-[0.8125rem] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            {link.label()}
          </a>
        {/each}
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-6">
        <!-- Language Toggle -->
        <button
          onclick={toggleLocale}
          class="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          <span class="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
            {currentLocale.toUpperCase()}
          </span>
        </button>

        <!-- Phone - Desktop -->
        <a
          href="tel:{siteConfig.contact.phone}"
          class="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(var(--primary))] transition-colors"
        >
          <Phone class="w-4 h-4" />
          <span>{siteConfig.contact.phoneDisplay}</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          class="lg:hidden p-2 -mr-2 text-foreground"
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div
      class="lg:hidden fixed inset-0 top-20 bg-background z-40"
      style="animation: fadeIn 0.3s ease"
    >
      <div class="container-luxury py-8">
        <nav class="space-y-1">
          {#each navLinks as link, i}
            <a
              href={link.href}
              class="block py-4 text-2xl font-serif text-foreground border-b border-border/30 hover:text-[hsl(var(--primary))] transition-colors"
              style="animation: slideUp 0.4s ease forwards; animation-delay: {i * 0.05}s; opacity: 0;"
              onclick={() => mobileMenuOpen = false}
            >
              {link.label()}
            </a>
          {/each}
        </nav>

        <div class="mt-10 pt-8 border-t border-border/30 space-y-6">
          <!-- Phone CTA -->
          <a
            href="tel:{siteConfig.contact.phone}"
            class="btn-primary w-full justify-center"
          >
            <Phone class="w-4 h-4" />
            <span>Pokličite nas</span>
          </a>

          <!-- Language -->
          <button
            onclick={toggleLocale}
            class="flex items-center justify-center gap-3 w-full py-3 text-sm font-medium text-muted-foreground"
          >
            <span class="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
              {currentLocale.toUpperCase()}
            </span>
            <span>{currentLocale === "sl" ? "Switch to English" : "Slovenščina"}</span>
          </button>
        </div>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer for fixed header -->
<div class="h-20 lg:h-24"></div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-link {
    position: relative;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
</style>
