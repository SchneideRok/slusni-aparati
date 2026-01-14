<script lang="ts">
  import { FileText, Stethoscope, Package, Phone, ArrowRight, CheckCircle2 } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { siteConfig } from "$lib/config/site";

  const t = getContext<Translations>("t");

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Pridobite napotnico",
      description: "Pri osebnem zdravniku ali ORL specialistu dobite napotnico za slušni aparat."
    },
    {
      number: "02",
      icon: Stethoscope,
      title: "Opravite pregled",
      description: "Brezplačni avdiometrični pregled in svetovanje pri izbiri aparata."
    },
    {
      number: "03",
      icon: Package,
      title: "Prevzemite aparat",
      description: "ZZZS povrne del stroškov, razliko poravnate pri nas."
    },
  ];
</script>

<section id="zzzs" class="section-sage section-padding">
  <div class="container-luxury">
    <!-- Two Column Layout -->
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <!-- Left: Content -->
      <div>
        <span class="label-uppercase text-[hsl(var(--primary))] tracking-[0.2em] mb-6 block">
          ZZZS Partner
        </span>
        <h2 class="headline-lg text-foreground mb-6">
          Povrnitev stroškov preko
          <span class="text-[hsl(var(--primary))]">zdravstvenega zavarovanja</span>
        </h2>
        <p class="body-lg text-muted-foreground mb-12">
          Kot pooblaščeni partner ZZZS vam pomagamo pri celotnem postopku uveljavljanja pravice do slušnega aparata. Postopek je preprost in hiter.
        </p>

        <!-- Steps -->
        <div class="space-y-8">
          {#each steps as step, i}
            {@const Icon = step.icon}
            <div
              class="flex gap-6"
              style="animation: fadeSlideRight 0.6s ease forwards; animation-delay: {i * 0.15}s; opacity: 0;"
            >
              <!-- Number & Line -->
              <div class="flex flex-col items-center">
                <div class="w-14 h-14 rounded-full border-2 border-[hsl(var(--primary))]/30 flex items-center justify-center bg-background">
                  <Icon class="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                {#if i < steps.length - 1}
                  <div class="w-px h-full bg-[hsl(var(--primary))]/20 my-2"></div>
                {/if}
              </div>

              <!-- Content -->
              <div class="pb-8">
                <span class="text-sm text-[hsl(var(--primary))] font-medium mb-1 block">
                  Korak {step.number}
                </span>
                <h3 class="headline-sm text-foreground mb-2">{step.title}</h3>
                <p class="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: CTA Card -->
      <div class="lg:sticky lg:top-32">
        <div class="bg-[hsl(var(--charcoal))] p-8 lg:p-12">
          <!-- Trust Badge -->
          <div class="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
            <CheckCircle2 class="w-6 h-6 text-[hsl(var(--primary))]" />
            <span class="text-white/70">Pooblaščeni ZZZS partner</span>
          </div>

          <h3 class="headline-md text-white mb-4">
            Potrebujete pomoč pri napotnici?
          </h3>
          <p class="text-white/60 mb-8">
            Pokličite nas in vam pomagamo pri celotnem postopku. Svetovanje je brezplačno.
          </p>

          <!-- Phone CTA -->
          <a
            href="tel:{siteConfig.contact.phone}"
            class="group flex items-center justify-between w-full p-6 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 transition-colors"
          >
            <div class="flex items-center gap-4">
              <Phone class="w-6 h-6 text-white" />
              <div>
                <span class="text-sm text-white/70 block">Pokličite nas</span>
                <span class="text-xl font-semibold text-white">{siteConfig.contact.phoneDisplay}</span>
              </div>
            </div>
            <ArrowRight class="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </a>

          <!-- Additional Info -->
          <div class="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
            <div>
              <span class="text-white/40 text-sm block mb-1">Delovni čas</span>
              <span class="text-white text-sm">{siteConfig.contact.businessHours.weekdays}</span>
            </div>
            <div>
              <span class="text-white/40 text-sm block mb-1">Sobota</span>
              <span class="text-white text-sm">{siteConfig.contact.businessHours.saturday}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeSlideRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
