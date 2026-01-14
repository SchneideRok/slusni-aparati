<script lang="ts">
  import { Phone } from "lucide-svelte";
  import { siteConfig } from "$lib/config/site";
</script>

<!-- Mobile floating CTA - elegant minimal design -->
<a
  href="tel:{siteConfig.contact.phone}"
  class="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-[hsl(var(--primary))] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
  aria-label="Pokličite nas"
>
  <Phone class="w-5 h-5 text-white" />

  <!-- Subtle pulse ring -->
  <span class="absolute inset-0 bg-[hsl(var(--primary))] animate-ping opacity-30"></span>
</a>

<style>
  @keyframes ping {
    75%, 100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  .animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style>
