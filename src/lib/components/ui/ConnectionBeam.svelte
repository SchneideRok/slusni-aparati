<script lang="ts">
  /**
   * ConnectionBeam - Simple animated connection line
   * Connects hearing aid to phone with flowing animation
   */
  import { Bluetooth } from "lucide-svelte";

  interface Props {
    /** Show Bluetooth icon in center */
    showIcon?: boolean;
  }

  let { showIcon = true }: Props = $props();
</script>

<div class="connection-beam relative h-1 w-full max-w-xs mx-auto">
  <!-- Track -->
  <div class="absolute inset-0 bg-white/10 rounded-full"></div>

  <!-- Animated beam -->
  <div class="beam absolute inset-0 rounded-full overflow-hidden">
    <div class="beam-glow"></div>
  </div>

  <!-- Center icon -->
  {#if showIcon}
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[hsl(var(--charcoal))] border border-[hsl(var(--primary))] flex items-center justify-center z-10">
      <Bluetooth class="w-4 h-4 text-[hsl(var(--primary))]" />
    </div>
  {/if}
</div>

<style>
  .beam-glow {
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      hsl(var(--primary)) 50%,
      transparent 100%
    );
    animation: flow 2s ease-in-out infinite;
  }

  @keyframes flow {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
</style>
