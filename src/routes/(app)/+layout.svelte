<script lang="ts">
  import { setContext } from "svelte";
  import { getTranslations } from "$lib/i18n/translations";
  import type { Locale } from "$lib/i18n";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import FloatingCTA from "$lib/components/FloatingCTA.svelte";

  let { children } = $props();

  // Default to Slovenian
  let locale: Locale = $state("sl");

  // Get translations based on locale
  let t = $derived(getTranslations(locale));

  // Provide translations to all components
  setContext("t", t);
  setContext("locale", locale);

  function setLocale(newLocale: Locale) {
    locale = newLocale;
  }

  setContext("setLocale", setLocale);
</script>

<svelte:head>
  <title>ORL Medicina - Slušni aparati Danavox</title>
  <meta name="description" content="Danavox slušni aparati - danska kakovost z 80-letno tradicijo. ORL Medicina Ljubljana." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
  <FloatingCTA />
</div>
