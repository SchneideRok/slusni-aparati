<script lang="ts">
  import { Award, Shield, Bluetooth, Smartphone, Music, BadgeCheck } from "lucide-svelte";
  import { getContext } from "svelte";
  import type { Translations } from "$lib/i18n/translations";
  import { benefits } from "$lib/config/site";
  import AnimatedStat from "$lib/components/ui/AnimatedStat.svelte";
  import SoundRipple from "$lib/components/ui/SoundRipple.svelte";

  const t = getContext<Translations>("t");

  const iconMap: Record<string, typeof Award> = {
    Award,
    Shield,
    Bluetooth,
    Smartphone,
    Music,
    BadgeCheck,
  };
</script>

<section class="benefits-section">
  <div class="container-luxury">
    <!-- Editorial Header -->
    <header class="benefits-header">
      <div class="header-left">
        <span class="section-label">Zakaj Danavox</span>
        <h2 class="section-title">
          Tehnologija v službi
          <span class="title-accent">naravnega zvoka</span>
        </h2>
      </div>

      <div class="header-right">
        <p class="section-intro">
          80 let danske inovacije v enem aparatu. Vsak detajl je zasnovan za vaše udobje in naraven zvok, ki vas povezuje s svetom okoli vas.
        </p>
        <div class="ripple-container">
          <SoundRipple size="md" rings={4} speed={1.2} />
        </div>
      </div>
    </header>

    <!-- Benefits Grid - Editorial Asymmetric Layout -->
    <div class="benefits-grid">
      {#each benefits as benefit, i}
        {@const Icon = iconMap[benefit.icon]}
        <article class="benefit-card" style="--index: {i};">
          <div class="card-number">
            <span class="number-text">0{i + 1}</span>
            <div class="number-line"></div>
          </div>

          <div class="card-content">
            <div class="card-icon">
              <Icon class="icon" />
            </div>
            <h3 class="card-title">{benefit.title}</h3>
            <p class="card-description">{benefit.description}</p>
          </div>

          <div class="card-hover-accent"></div>
        </article>
      {/each}
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stats-line"></div>
      <div class="stats-grid">
        <AnimatedStat value={80} label="let tradicije" suffix="+" delay={0} />
        <AnimatedStat value={2.4} label="GHz Bluetooth" delay={150} />
        <AnimatedStat value={68} label="vodoodpornost" prefix="IP" delay={300} />
      </div>
    </div>

  </div>
</section>

<style>
  .benefits-section {
    background: hsl(var(--charcoal));
    padding: 6rem 0 8rem;
    overflow: hidden;
  }

  /* Header Styles */
  .benefits-header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    .benefits-header {
      grid-template-columns: 5fr 7fr;
      gap: 5rem;
      align-items: start;
    }
  }

  .section-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 400;
    line-height: 1.1;
    color: white;
    margin: 0;
  }

  .title-accent {
    display: block;
    color: hsl(var(--primary));
    font-style: italic;
  }

  .header-right {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding-top: 0.5rem;
  }

  @media (min-width: 1024px) {
    .header-right {
      padding-top: 2rem;
    }
  }

  .section-intro {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.6);
    max-width: 28rem;
    margin: 0;
  }

  .ripple-container {
    display: none;
    flex-shrink: 0;
    margin-left: auto;
  }

  @media (min-width: 1024px) {
    .ripple-container {
      display: flex;
    }
  }

  /* Benefits Grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media (min-width: 768px) {
    .benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .benefits-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Benefit Card */
  .benefit-card {
    position: relative;
    background: hsl(var(--charcoal));
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: background-color 0.4s ease;
    animation: cardReveal 0.8s ease-out forwards;
    animation-delay: calc(var(--index) * 0.1s);
  }

  @media (min-width: 1024px) {
    .benefit-card {
      padding: 3rem 2.5rem;
    }
  }

  .benefit-card:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  @keyframes cardReveal {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card-number {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .number-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.25);
    letter-spacing: 0.05em;
  }

  .number-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), transparent);
  }

  .card-content {
    flex: 1;
  }

  .card-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    transition: all 0.4s ease;
  }

  .benefit-card:hover .card-icon {
    border-color: hsl(var(--primary) / 0.4);
    background: hsl(var(--primary) / 0.08);
  }

  .card-icon :global(.icon) {
    width: 1.25rem;
    height: 1.25rem;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.4s ease;
  }

  .benefit-card:hover .card-icon :global(.icon) {
    color: hsl(var(--primary));
  }

  .card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.375rem;
    font-weight: 500;
    color: white;
    margin: 0 0 0.75rem;
    letter-spacing: -0.01em;
  }

  .card-description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .card-hover-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: hsl(var(--primary));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .benefit-card:hover .card-hover-accent {
    transform: scaleX(1);
  }

  /* Stats Section */
  .stats-section {
    margin-top: 5rem;
    padding-top: 4rem;
    position: relative;
  }

  .stats-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 640px) {
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
  }
</style>
