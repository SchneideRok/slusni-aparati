<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Alert, AlertDescription, AlertTitle } from "$lib/components/ui/alert";
  import { AlertCircle, CheckCircle, MapPin, Phone, Mail, Clock, Send, Loader2, ArrowRight } from "lucide-svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import { siteConfig, products, conditions } from "$lib/config/site";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";

  const t = getContext<Translations>("t");

  interface ContactFormProps {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }

  let contactForm: ContactFormProps = $state({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  let isSubmitting = $state(false);
  let submitStatus: 'idle' | 'success' | 'error' = $state('idle');

  const serviceOptions = [
    ...products.map(p => ({ value: p.id, label: p.title })),
    ...conditions.map(c => ({ value: c.id, label: c.title })),
    { value: "zzzs", label: "Napotnica ZZZS" },
    { value: "other", label: "Drugo" },
  ];

  let triggerContent = $derived(serviceOptions.find(s => s.value === contactForm.service)?.label ?? "Izberite storitev");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = 'idle';

    await new Promise(resolve => setTimeout(resolve, 1500));

    submitStatus = 'success';
    contactForm = { name: "", email: "", phone: "", service: "", message: "" };
    isSubmitting = false;
  }
</script>

<section id="kontakt" class="section-dark section-padding">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-white/50 tracking-[0.2em] mb-6 block">
        Kontakt
      </span>
      <h2 class="headline-lg text-white max-w-2xl mx-auto">
        Stopite v stik
        <span class="text-[hsl(var(--primary))]">z nami</span>
      </h2>
      <p class="body-lg text-white/60 max-w-xl mx-auto mt-6">
        Smo tu za vas. Odgovorimo v roku 24 ur.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
      <!-- Left: Contact Info -->
      <div>
        <div class="space-y-12">
          <!-- Quick Contact Cards -->
          <div class="space-y-4">
            <!-- Phone -->
            <a
              href="tel:{siteConfig.contact.phone}"
              class="group flex items-center gap-6 p-6 border border-white/10 hover:border-[hsl(var(--primary))]/50 hover:bg-white/5 transition-all duration-300"
            >
              <div class="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/10 transition-all">
                <Phone class="w-6 h-6 text-white/60 group-hover:text-[hsl(var(--primary))] transition-colors" />
              </div>
              <div class="flex-1">
                <span class="text-sm text-white/40 block mb-1">Telefon</span>
                <span class="text-xl font-semibold text-white">{siteConfig.contact.phoneDisplay}</span>
              </div>
              <ArrowRight class="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <!-- Email -->
            <a
              href="mailto:{siteConfig.contact.email}"
              class="group flex items-center gap-6 p-6 border border-white/10 hover:border-[hsl(var(--primary))]/50 hover:bg-white/5 transition-all duration-300"
            >
              <div class="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/10 transition-all">
                <Mail class="w-6 h-6 text-white/60 group-hover:text-[hsl(var(--primary))] transition-colors" />
              </div>
              <div class="flex-1">
                <span class="text-sm text-white/40 block mb-1">E-pošta</span>
                <span class="text-lg text-white">{siteConfig.contact.email}</span>
              </div>
              <ArrowRight class="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <!-- Info Grid -->
          <div class="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <MapPin class="w-5 h-5 text-[hsl(var(--primary))]" />
                <span class="text-sm text-white/40">Lokacija</span>
              </div>
              <p class="text-white text-sm leading-relaxed">
                {siteConfig.contact.address}
              </p>
            </div>

            <div>
              <div class="flex items-center gap-3 mb-4">
                <Clock class="w-5 h-5 text-[hsl(var(--primary))]" />
                <span class="text-sm text-white/40">Delovni čas</span>
              </div>
              <div class="text-white text-sm space-y-1">
                <p>Pon - Pet: {siteConfig.contact.businessHours.weekdays}</p>
                <p>Sob: {siteConfig.contact.businessHours.saturday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="bg-white/5 p-8 lg:p-12 border border-white/10">
        <div class="mb-8">
          <h3 class="headline-sm text-white mb-2">Pošljite povpraševanje</h3>
          <p class="text-white/50 text-sm">
            Izpolnite obrazec in odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>

        <form onsubmit={handleSubmit} class="space-y-6">
          <div class="space-y-2">
            <Label for="name" class="text-white/70 text-sm">Ime in priimek *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Vnesite ime in priimek"
              bind:value={contactForm.name}
              required
              autocomplete="name"
              class="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(var(--primary))]/50 rounded-none h-12"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label for="email" class="text-white/70 text-sm">E-pošta *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="vas@email.si"
                bind:value={contactForm.email}
                required
                autocomplete="email"
                class="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(var(--primary))]/50 rounded-none h-12"
              />
            </div>

            <div class="space-y-2">
              <Label for="phone" class="text-white/70 text-sm">Telefon</Label>
              <Input
                id="phone"
                name="tel"
                type="tel"
                placeholder="+386 ..."
                bind:value={contactForm.phone}
                autocomplete="tel"
                class="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(var(--primary))]/50 rounded-none h-12"
              />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="service" class="text-white/70 text-sm">Storitev</Label>
            <Select.Root type="single" bind:value={contactForm.service}>
              <Select.Trigger id="service" class="w-full bg-white/5 border-white/10 text-white rounded-none h-12">
                <span class={contactForm.service ? "text-white" : "text-white/30"}>
                  {triggerContent}
                </span>
              </Select.Trigger>
              <Select.Content class="bg-[hsl(var(--charcoal))] border-white/10 rounded-none">
                <Select.Group>
                  {#each serviceOptions as service}
                    <Select.Item value={service.value} label={service.label} class="text-white hover:bg-white/10">
                      {service.label}
                    </Select.Item>
                  {/each}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div class="space-y-2">
            <Label for="message" class="text-white/70 text-sm">Sporočilo *</Label>
            <Textarea
              id="message"
              placeholder="Opišite vaše potrebe ali vprašanje..."
              rows={4}
              bind:value={contactForm.message}
              required
              class="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(var(--primary))]/50 rounded-none resize-none"
            />
          </div>

          {#if submitStatus === 'success'}
            <Alert class="border-[hsl(var(--primary))]/50 bg-[hsl(var(--primary))]/10 rounded-none">
              <CheckCircle class="w-4 h-4 text-[hsl(var(--primary))]" />
              <AlertTitle class="text-[hsl(var(--primary))]">Sporočilo poslano</AlertTitle>
              <AlertDescription class="text-white/70">
                Hvala za vaše sporočilo. Odgovorili vam bomo v najkrajšem možnem času.
              </AlertDescription>
            </Alert>
          {/if}

          {#if submitStatus === 'error'}
            <Alert variant="destructive" class="rounded-none">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Napaka</AlertTitle>
              <AlertDescription>
                Prišlo je do napake. Prosimo, poskusite znova.
              </AlertDescription>
            </Alert>
          {/if}

          <button
            type="submit"
            class="w-full h-14 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white font-medium flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              <Loader2 class="w-5 h-5 animate-spin" />
              <span>Pošiljanje...</span>
            {:else}
              <Send class="w-5 h-5" />
              <span>Pošlji sporočilo</span>
            {/if}
          </button>
        </form>

        <p class="text-xs text-white/30 mt-6 text-center">
          Z oddajo obrazca se strinjate z našo politiko zasebnosti.
        </p>
      </div>
    </div>
  </div>
</section>
