<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
</script>

<header class="sticky top-0 z-50 bg-[#f5f5f0] border-b-[3px] border-[#0a0a0a]">
  <div class="max-w-6xl mx-auto px-4 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <!-- GALOR Logo - Brutalist style with Bebas Neue -->
      <a
        href="https://galor.agency"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 group"
      >
        <div
          class="border-[3px] border-[#0a0a0a] bg-[#f5f5f0] px-3 py-1.5 lg:px-4 lg:py-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          style="transform: rotate(-2deg); box-shadow: 4px 4px 0 #0a0a0a;"
        >
          <span
            class="text-[24px] lg:text-[28px] tracking-tight text-[#0a0a0a]"
            style="font-family: 'Bebas Neue', sans-serif;"
          >
            GALOR
          </span>
        </div>
        <span
          class="hidden md:block text-[10px] uppercase tracking-[0.15em] text-[#5a5a5a]"
          style="font-family: 'Space Mono', monospace;"
        >
          Development Agency
        </span>
      </a>

      <!-- Right side -->
      <div class="flex items-center gap-4">
        <a
          href="mailto:info@galor.agency"
          class="hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors"
          style="font-family: 'Space Mono', monospace;"
        >
          info@galor.agency
        </a>
        <a
          href="https://galor.agency"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 border-[2px] border-[#0a0a0a] px-3 py-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all"
          style="font-family: 'Space Mono', monospace; box-shadow: 2px 2px 0 #0a0a0a;"
        >
          <span>galor.agency</span>
          <ArrowUpRight class="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>
</header>
