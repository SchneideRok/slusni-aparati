<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
</script>

<section class="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
  <!-- Grid pattern background -->
  <div
    class="absolute inset-0 opacity-[0.03]"
    style="background-image: linear-gradient(to right, #f5f5f0 1px, transparent 1px), linear-gradient(to bottom, #f5f5f0 1px, transparent 1px); background-size: 60px 60px;"
  ></div>

  <!-- Decorative accent lines -->
  <div class="hidden lg:block absolute top-16 right-0 w-[100px] h-[3px] bg-[#f5f5f0]"></div>
  <div class="hidden lg:block absolute top-16 right-[100px] w-[50px] h-[3px] bg-[#ff2d00]"></div>

  <div class="max-w-6xl mx-auto px-4 lg:px-8 relative">
    <!-- Header -->
    <div class="mb-12 lg:mb-20">
      <h2
        class="text-[42px] lg:text-[80px] xl:text-[100px] leading-none text-[#f5f5f0]"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        WHY <span class="text-[#ff2d00]">GALOR?</span>
      </h2>
      <div class="flex items-center gap-2 mt-1 lg:mt-4">
        <div class="w-12 lg:w-24 h-[3px] bg-[#ff2d00]"></div>
        <span
          class="text-[11px] lg:text-[14px] uppercase tracking-wider text-[#8a8a8a]"
          style="font-family: 'Space Mono', monospace;"
        >
          / THE ANTI-AGENCY
        </span>
      </div>
    </div>

    <!-- Differentiator Cards -->
    <div class="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mb-16 lg:mb-20">
      <!-- Card 1: Direct Engineer Access -->
      <article
        class="relative bg-[#f5f5f0] border-[3px] border-[#f5f5f0] p-6 lg:p-8"
        style="transform: rotate(-1.5deg); box-shadow: 8px 8px 0 #ff2d00;"
      >
        <span
          class="inline-block text-[11px] uppercase tracking-wider text-[#ff2d00] mb-3 lg:mb-4"
          style="font-family: 'Space Mono', monospace;"
        >
          / 01
        </span>
        <h3
          class="text-[28px] lg:text-[36px] leading-tight text-[#0a0a0a] mb-3 lg:mb-4"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          DIRECT ENGINEER ACCESS
        </h3>
        <p
          class="text-[13px] lg:text-[14px] leading-relaxed text-[#4a4a4a]"
          style="font-family: 'Space Mono', monospace;"
        >
          No account managers. No middlemen. You talk directly to the people building your product. Questions answered in hours, not days.
        </p>
      </article>

      <!-- Card 2: Fast Delivery -->
      <article
        class="relative bg-[#f5f5f0] border-[3px] border-[#f5f5f0] p-6 lg:p-8"
        style="transform: rotate(1deg); box-shadow: 8px 8px 0 #ff2d00;"
      >
        <span
          class="inline-block text-[11px] uppercase tracking-wider text-[#ff2d00] mb-3 lg:mb-4"
          style="font-family: 'Space Mono', monospace;"
        >
          / 02
        </span>
        <h3
          class="text-[28px] lg:text-[36px] leading-tight text-[#0a0a0a] mb-3 lg:mb-4"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          FAST DELIVERY
        </h3>
        <p
          class="text-[13px] lg:text-[14px] leading-relaxed text-[#4a4a4a]"
          style="font-family: 'Space Mono', monospace;"
        >
          We don't do 6-month roadmaps. AI-powered workflow means we move faster than traditional agencies. No meetings about meetings.
        </p>
      </article>

      <!-- Card 3: Modern Stack -->
      <article
        class="relative bg-[#f5f5f0] border-[3px] border-[#f5f5f0] p-6 lg:p-8"
        style="transform: rotate(-0.5deg); box-shadow: 8px 8px 0 #ff2d00;"
      >
        <span
          class="inline-block text-[11px] uppercase tracking-wider text-[#ff2d00] mb-3 lg:mb-4"
          style="font-family: 'Space Mono', monospace;"
        >
          / 03
        </span>
        <h3
          class="text-[28px] lg:text-[36px] leading-tight text-[#0a0a0a] mb-3 lg:mb-4"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          MODERN STACK ONLY
        </h3>
        <p
          class="text-[13px] lg:text-[14px] leading-relaxed text-[#4a4a4a]"
          style="font-family: 'Space Mono', monospace;"
        >
          No WordPress. No Wix. Modern, maintainable, scalable code. Next.js, React, TypeScript. Built for the future, not the past.
        </p>
      </article>
    </div>

    <!-- Bottom statement -->
    <div class="pt-8 border-t border-[#2a2a2a]">
      <p
        class="text-[24px] lg:text-[36px] xl:text-[48px] text-center text-[#f5f5f0] leading-tight"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        NOT AN AGENCY. A <span class="text-[#ff2d00]">PARTNER</span> IN YOUR SUCCESS.
      </p>
    </div>

    <!-- CTA -->
    <div class="mt-12 flex justify-center">
      <a
        href="https://galor.agency"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 border-[3px] border-[#f5f5f0] bg-transparent px-8 py-4 text-[#f5f5f0] uppercase text-[12px] font-bold tracking-wider hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all"
        style="font-family: 'Space Mono', monospace; box-shadow: 4px 4px 0 #f5f5f0;"
      >
        <span>Visit galor.agency</span>
        <ArrowUpRight class="w-4 h-4" />
      </a>
    </div>

    <!-- Anti-Agency badge -->
    <div class="mt-12 flex justify-center">
      <div
        class="inline-block border-[2px] border-[#f5f5f0]/30 px-4 py-2"
        style="transform: rotate(2deg);"
      >
        <span
          class="text-[10px] uppercase tracking-[0.2em] text-[#f5f5f0]/40"
          style="font-family: 'Space Mono', monospace;"
        >
          Anti-Agency Energy
        </span>
      </div>
    </div>
  </div>
</section>
