<script lang="ts">
  import { Phone, Mail, MapPin, ArrowRight } from "lucide-svelte";
  import { siteConfig } from "$lib/config/site";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";

  const t = getContext<Translations>("t");

  const quickLinks = [
    { href: "#ponudba", label: "Slušni aparati" },
    { href: "#stanja", label: "Težave s sluhom" },
    { href: "#zzzs", label: "ZZZS napotnica" },
    { href: "#faq", label: "Pogosta vprašanja" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const legalLinks = [
    { href: "/zasebnost", label: "Zasebnost" },
    { href: "/pogoji", label: "Pogoji uporabe" },
  ];
</script>

<footer class="bg-[hsl(var(--charcoal))] text-white">
  <!-- Main Footer -->
  <div class="container-luxury py-16 lg:py-24">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
      <!-- Brand Column -->
      <div class="lg:col-span-4">
        <a href="/" class="inline-block mb-6">
          <img
            src="https://orlmedicina.si/wp-content/uploads/2023/06/Group-1534.svg"
            alt="ORL Medicina"
            class="h-10 w-auto brightness-0 invert"
          />
        </a>
        <p class="text-white/60 mb-6 max-w-xs">
          Danska kakovost slušnih aparatov z 80-letno tradicijo. Pooblaščeni partner ZZZS.
        </p>

        <!-- Danavox Badge -->
        <div class="inline-flex items-center gap-3 px-4 py-2 border border-white/10">
          <img
            src="https://i0.wp.com/orlmedicina.si/wp-content/uploads/2025/01/GN_Danavox_Logo_Pos_RGB_01-95h-2.png"
            alt="Danavox"
            class="h-6 w-auto brightness-0 invert"
          />
          <span class="text-sm text-white/50">Partner</span>
        </div>
      </div>

      <!-- Navigation Column -->
      <div class="lg:col-span-2">
        <h4 class="label-uppercase text-white/40 tracking-[0.15em] mb-6">Navigacija</h4>
        <ul class="space-y-3">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="text-white/70 hover:text-white transition-colors text-sm">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact Column -->
      <div class="lg:col-span-3">
        <h4 class="label-uppercase text-white/40 tracking-[0.15em] mb-6">Kontakt</h4>
        <ul class="space-y-4">
          <li>
            <a href="tel:{siteConfig.contact.phone}" class="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <Phone class="w-4 h-4 text-[hsl(var(--primary))]" />
              <span class="text-sm">{siteConfig.contact.phoneDisplay}</span>
            </a>
          </li>
          <li>
            <a href="mailto:{siteConfig.contact.email}" class="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <Mail class="w-4 h-4 text-[hsl(var(--primary))]" />
              <span class="text-sm">{siteConfig.contact.email}</span>
            </a>
          </li>
          <li class="flex items-start gap-3 text-white/70">
            <MapPin class="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
            <span class="text-sm">{siteConfig.contact.address}</span>
          </li>
        </ul>
      </div>

      <!-- CTA Column -->
      <div class="lg:col-span-3">
        <h4 class="label-uppercase text-white/40 tracking-[0.15em] mb-6">Naročite se</h4>
        <p class="text-white/60 text-sm mb-6">
          Brezplačen pregled sluha in svetovanje pri izbiri aparata.
        </p>
        <a
          href="tel:{siteConfig.contact.phone}"
          class="group inline-flex items-center gap-3 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 px-6 py-3 transition-colors"
        >
          <Phone class="w-4 h-4" />
          <span class="font-medium">Pokličite nas</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-white/10">
    <div class="container-luxury py-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-white/40">
          &copy; {new Date().getFullYear()} ORL Medicina d.o.o. Vse pravice pridržane.
        </p>

        <div class="flex items-center gap-6">
          {#each legalLinks as link}
            <a href={link.href} class="text-sm text-white/40 hover:text-white/70 transition-colors">
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>
