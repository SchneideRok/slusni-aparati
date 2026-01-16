<script lang="ts">
  import { AlertTriangle, Clock, Lock, HelpCircle, Box } from "lucide-svelte";
</script>

<section id="problem" class="section-padding bg-[#f5f5f0]">
  <div class="container-luxury">
    <!-- Header -->
    <div class="text-center mb-16 lg:mb-24">
      <span class="label-uppercase text-muted-foreground tracking-[0.2em] mb-6 block">
        Izzivi pri izbiri
      </span>
      <h2 class="headline-lg text-foreground max-w-2xl mx-auto">
        Na kaj morate biti
        <span class="text-[hsl(var(--primary))]">pozorni</span>
      </h2>
      <p class="body-lg text-muted-foreground mt-6 max-w-xl mx-auto">
        Pri izbiri partnerja za izdelavo spletne strani se pogosto pojavijo izzivi, ki jih je vredno poznati vnaprej.
      </p>
    </div>

    <!-- Pain Points -->
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 border border-border/60 bg-white">
          <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <AlertTriangle class="w-5 h-5 text-red-500" />
          </div>
          <h4 class="headline-sm text-foreground mb-2">Skrite cene</h4>
          <p class="text-muted-foreground text-sm">
            Dodatki za SSL, angleščino, vzdrževanje - cena hitro naraste.
          </p>
        </div>

        <div class="p-6 border border-border/60 bg-white">
          <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
            <Clock class="w-5 h-5 text-orange-500" />
          </div>
          <h4 class="headline-sm text-foreground mb-2">Neodzivnost po projektu</h4>
          <p class="text-muted-foreground text-sm">
            Po končanem projektu agencije pogosto "izginejo". Mi smo partner v vašem uspehu - tudi po lansiranju.
          </p>
        </div>

        <div class="p-6 border border-border/60 bg-white">
          <div class="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-4">
            <Lock class="w-5 h-5 text-yellow-600" />
          </div>
          <h4 class="headline-sm text-foreground mb-2">Vezave</h4>
          <p class="text-muted-foreground text-sm">
            Dolgoročne pogodbe brez možnosti prekinitve.
          </p>
        </div>

        <div class="p-6 border border-border/60 bg-white">
          <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <HelpCircle class="w-5 h-5 text-blue-500" />
          </div>
          <h4 class="headline-sm text-foreground mb-2">Počasne posodobitve</h4>
          <p class="text-muted-foreground text-sm">
            Potrebujete spremembo? Počakajte teden ali dva. Pri nas odgovorimo v urah.
          </p>
        </div>

        <div class="p-6 border border-border/60 bg-white md:col-span-2 lg:col-span-2">
          <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
            <Box class="w-5 h-5 text-purple-500" />
          </div>
          <h4 class="headline-sm text-foreground mb-2">WordPress omejitve</h4>
          <p class="text-muted-foreground text-sm mb-3">
            Tradicionalne WordPress strani so omejene v prilagodljivosti, hitrosti nalaganja in možnostih za nadaljnji razvoj. Težje jih je optimizirati za moderne iskalnike in AI.
          </p>
          <p class="text-sm font-medium text-[hsl(var(--primary))]">
            Mi ne delamo WordPressa. Razvijamo moderne, hitre spletne strani po meri.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
