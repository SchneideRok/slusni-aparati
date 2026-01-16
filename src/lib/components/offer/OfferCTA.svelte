<script lang="ts">
  import { Mail, ArrowRight, ArrowUpRight } from "lucide-svelte";
</script>

<section id="kontakt" class="py-20 lg:py-32 bg-[#f5f5f0]">
  <div class="max-w-4xl mx-auto px-4 lg:px-8">
    <div class="text-center">
      <!-- Header -->
      <span
        class="text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a] mb-6 block"
        style="font-family: 'Space Mono', monospace;"
      >
        / Let's Talk
      </span>
      <h2
        class="text-[42px] lg:text-[64px] text-[#0a0a0a] mb-6 leading-none"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        READY TO <span class="text-[#ff2d00]">TALK?</span>
      </h2>
      <p
        class="text-[#5a5a5a] text-[14px] max-w-lg mx-auto mb-12"
        style="font-family: 'Space Mono', monospace;"
      >
        Write to us and let's schedule a short consultation where we answer all your questions.
      </p>

      <!-- Contact Button -->
      <div class="flex justify-center mb-16">
        <a
          href="mailto:info@galor.agency?subject=Ponudba%20-%20ORL%20Medicina"
          class="inline-flex items-center gap-3 border-[3px] border-[#0a0a0a] bg-[#ff2d00] px-8 py-4 text-white uppercase text-[12px] font-bold tracking-wider hover:bg-[#c92100] transition-colors group"
          style="font-family: 'Space Mono', monospace; box-shadow: 6px 6px 0 #0a0a0a;"
        >
          <Mail class="w-5 h-5" />
          <span>Write to us</span>
          <ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <!-- Signature -->
      <div class="border-t-[3px] border-[#0a0a0a] pt-12 max-w-md mx-auto">
        <p
          class="text-[#5a5a5a] text-xs uppercase tracking-wider mb-4"
          style="font-family: 'Space Mono', monospace;"
        >
          Offer prepared by
        </p>
        <div
          class="inline-block border-[3px] border-[#0a0a0a] bg-white px-6 py-3 mb-4"
          style="transform: rotate(-1deg); box-shadow: 4px 4px 0 #0a0a0a;"
        >
          <span
            class="text-[28px] tracking-tight text-[#0a0a0a]"
            style="font-family: 'Bebas Neue', sans-serif;"
          >
            GALOR
          </span>
        </div>
        <p
          class="text-[#0a0a0a] text-lg"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          GALOR d.o.o.
        </p>
        <p
          class="text-[#5a5a5a] text-xs uppercase tracking-wider mt-2"
          style="font-family: 'Space Mono', monospace;"
        >
          January 2026
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-8 border-t-[3px] border-[#0a0a0a] bg-[#0a0a0a]">
  <div class="max-w-6xl mx-auto px-4 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <!-- Left side -->
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <!-- GALOR Logo -->
        <a
          href="https://galor.agency"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
        >
          <div
            class="border-[2px] border-[#f5f5f0] px-3 py-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style="box-shadow: 2px 2px 0 #f5f5f0;"
          >
            <span
              class="text-[20px] tracking-tight text-[#f5f5f0]"
              style="font-family: 'Bebas Neue', sans-serif;"
            >
              GALOR
            </span>
          </div>
        </a>

        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p
            class="text-[10px] uppercase tracking-wider text-[#f5f5f0]/50"
            style="font-family: 'Space Mono', monospace;"
          >
            Offer valid 30 days from issue date.
          </p>
          <p
            class="text-[10px] uppercase tracking-wider text-[#f5f5f0]/50"
            style="font-family: 'Space Mono', monospace;"
          >
            © 2026 GALOR d.o.o.
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-6">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[11px] uppercase tracking-wider text-[#ff2d00] hover:text-[#f5f5f0] transition-colors"
          style="font-family: 'Space Mono', monospace;"
        >
          View sample page →
        </a>
        <a
          href="https://galor.agency"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#f5f5f0]/70 hover:text-[#f5f5f0] transition-colors group"
          style="font-family: 'Space Mono', monospace;"
        >
          galor.agency
          <ArrowUpRight class="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  </div>
</footer>
