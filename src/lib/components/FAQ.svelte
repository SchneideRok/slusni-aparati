<script lang="ts">
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { faqItems } from "$lib/config/site";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Plus } from "lucide-svelte";

  const t = getContext<Translations>("t");
</script>

<section id="faq" class="section-padding border-t border-border">
  <div class="container-luxury">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
      <!-- Left: Header -->
      <div class="lg:col-span-4">
        <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
          Pogosta vprašanja
        </span>
        <h2 class="headline-lg text-foreground mb-6">
          Vse kar morate
          <span class="text-[hsl(var(--primary))]">vedeti</span>
        </h2>
        <p class="text-muted-foreground">
          Odgovori na najpogostejša vprašanja o slušnih aparatih, postopku naročanja in kritju ZZZS.
        </p>
      </div>

      <!-- Right: Accordion -->
      <div class="lg:col-span-8">
        <Accordion.Root type="single" class="space-y-0">
          {#each faqItems as item, i}
            <Accordion.Item
              value="item-{i}"
              class="border-b border-border last:border-b-0"
            >
              <Accordion.Trigger class="py-6 text-left hover:no-underline group w-full">
                <div class="flex items-start justify-between gap-4 w-full">
                  <div class="flex items-start gap-6">
                    <span class="text-sm text-muted-foreground font-medium tabular-nums mt-1">
                      0{i + 1}
                    </span>
                    <span class="headline-sm text-foreground text-left group-hover:text-[hsl(var(--primary))] transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <div class="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/10 transition-all">
                    <Plus class="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content>
                <div class="pb-6 pl-14">
                  <p class="text-muted-foreground leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          {/each}
        </Accordion.Root>
      </div>
    </div>
  </div>

  <!-- Wave divider to Contact -->
  <div class="wave-divider mt-16 lg:mt-24" style="--wave-color: hsl(var(--charcoal))">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-16 lg:h-24">
      <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
    </svg>
  </div>
</section>
