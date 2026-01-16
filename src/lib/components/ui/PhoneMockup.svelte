<script lang="ts">
  /**
   * PhoneMockup - Clean, minimal phone frame
   * Shows Danavox app interface - scales proportionally
   */
  import { Volume2, Bluetooth } from "lucide-svelte";

  interface Props {
    /** Width of the mockup */
    width?: string;
  }

  let { width = '200px' }: Props = $props();
</script>

<div class="phone-mockup" style="--width: {width};">
  <!-- Phone Frame -->
  <div class="phone-frame">
    <!-- Notch -->
    <div class="notch"></div>

    <!-- Screen -->
    <div class="screen">
      <!-- App Header -->
      <div class="app-header">
        <span class="app-name">Danavox</span>
        <div class="status">
          <Bluetooth class="status-icon" />
          <span>Povezano</span>
        </div>
      </div>

      <!-- Volume Control -->
      <div class="volume-section">
        <Volume2 class="volume-icon" />
        <div class="volume-bar">
          <div class="volume-fill"></div>
        </div>
        <span class="volume-label">72%</span>
      </div>

      <!-- Battery Status -->
      <div class="battery-section">
        <div class="battery-item">
          <span class="ear">L</span>
          <div class="battery-bar"><div class="battery-fill" style="width: 85%"></div></div>
          <span>85%</span>
        </div>
        <div class="battery-item">
          <span class="ear">R</span>
          <div class="battery-bar"><div class="battery-fill" style="width: 92%"></div></div>
          <span>92%</span>
        </div>
      </div>
    </div>

    <!-- Home Indicator -->
    <div class="home-indicator"></div>
  </div>
</div>

<style>
  .phone-mockup {
    width: var(--width);
    /* Scale factor based on width - 200px = 1, 140px = 0.7 */
    font-size: calc(var(--width) * 0.05);
  }

  .phone-frame {
    background: #1a1a1a;
    border-radius: 1.6em;
    padding: 0.4em;
    position: relative;
  }

  .notch {
    position: absolute;
    top: 0.6em;
    left: 50%;
    transform: translateX(-50%);
    width: 3.5em;
    height: 1em;
    background: #000;
    border-radius: 0.8em;
    z-index: 10;
  }

  .screen {
    background: linear-gradient(180deg, #0d1a14 0%, #0a0f0d 100%);
    border-radius: 1.2em;
    padding: 2em 0.8em 1em;
    aspect-ratio: 9 / 16;
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow: hidden;
  }

  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9em;
    font-weight: 600;
    color: white;
    letter-spacing: 0.05em;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.2em;
    font-size: 0.5em;
    color: hsl(var(--primary));
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .status :global(.status-icon) {
    width: 1.2em;
    height: 1.2em;
  }

  .volume-section {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.6em;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0.5em;
  }

  .volume-section :global(.volume-icon) {
    width: 1.2em;
    height: 1.2em;
    color: hsl(var(--primary));
    flex-shrink: 0;
  }

  .volume-bar {
    flex: 1;
    height: 0.25em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.125em;
    overflow: hidden;
  }

  .volume-fill {
    width: 72%;
    height: 100%;
    background: hsl(var(--primary));
    border-radius: 0.125em;
  }

  .volume-label {
    font-size: 0.6em;
    color: white;
    font-weight: 500;
    min-width: 1.5em;
    text-align: right;
  }

  .battery-section {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.35em;
    padding: 0.5em;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0.5em;
  }

  .battery-item {
    display: flex;
    align-items: center;
    gap: 0.35em;
    font-size: 0.5em;
    color: rgba(255, 255, 255, 0.6);
  }

  .ear {
    width: 1.4em;
    height: 1.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.2em;
    font-weight: 600;
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.8);
  }

  .battery-bar {
    flex: 1;
    height: 0.2em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.1em;
    overflow: hidden;
  }

  .battery-fill {
    height: 100%;
    background: hsl(var(--primary));
    border-radius: 0.1em;
  }

  .home-indicator {
    position: absolute;
    bottom: 0.4em;
    left: 50%;
    transform: translateX(-50%);
    width: 3em;
    height: 0.2em;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.1em;
  }
</style>
