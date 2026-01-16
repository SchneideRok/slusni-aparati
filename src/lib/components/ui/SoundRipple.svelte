<script lang="ts">
  /**
   * SoundRipple - Elegant concentric sound wave animation
   * Uses only site CSS variables for consistency
   */
  interface Props {
    /** Number of ripple rings */
    rings?: number;
    /** Size of the component */
    size?: 'sm' | 'md' | 'lg';
    /** Animation speed multiplier */
    speed?: number;
    /** Show center element */
    showCenter?: boolean;
  }

  let {
    rings = 4,
    size = 'md',
    speed = 1,
    showCenter = true
  }: Props = $props();

  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const ringArray = Array.from({ length: rings }, (_, i) => i);
</script>

<div
  class="sound-ripple relative flex items-center justify-center {sizeMap[size]}"
  style="--speed: {speed};"
>
  <!-- Ripple Rings -->
  {#each ringArray as i}
    <div
      class="ripple-ring absolute inset-0 rounded-full border border-[hsl(var(--primary))]"
      style="--delay: {i * 0.6}s;"
    ></div>
  {/each}

  <!-- Center Element -->
  {#if showCenter}
    <div class="center-dot w-3 h-3 rounded-full bg-[hsl(var(--primary))]"></div>
  {/if}
</div>

<style>
  .ripple-ring {
    opacity: 0;
    animation: ripple calc(2.5s / var(--speed, 1)) ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes ripple {
    0% {
      transform: scale(0.2);
      opacity: 0.6;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .center-dot {
    animation: pulse calc(1.5s / var(--speed, 1)) ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
  }
</style>
