<script lang="ts">
  import OfferNavbar from "$lib/components/offer/OfferNavbar.svelte";
  import OfferHero from "$lib/components/offer/OfferHero.svelte";
  import ProblemSection from "$lib/components/offer/ProblemSection.svelte";
  import SolutionSection from "$lib/components/offer/SolutionSection.svelte";
  import SamplePreview from "$lib/components/offer/SamplePreview.svelte";
  import OfferPricing from "$lib/components/offer/OfferPricing.svelte";
  import TrustSection from "$lib/components/offer/TrustSection.svelte";
  import GalorAbout from "$lib/components/offer/GalorAbout.svelte";
  import AdditionalServices from "$lib/components/offer/AdditionalServices.svelte";
  import OfferCTA from "$lib/components/offer/OfferCTA.svelte";
</script>

<svelte:head>
  <title>Ponudba | GALOR</title>
  <meta name="description" content="Ponudba za izdelavo spletne strani za ORL Medicina - slušni aparati Danavox. GALOR d.o.o." />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-[#f5f5f0]">
  <OfferNavbar />
  <OfferHero />
  <ProblemSection />
  <SolutionSection />
  <SamplePreview />
  <OfferPricing />
  <TrustSection />
  <GalorAbout />
  <AdditionalServices />
  <OfferCTA />
</div>
