<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  interface Props {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    delay?: number;
  }

  let { value, label, suffix = '', prefix = '', delay = 0 }: Props = $props();

  let isVisible = $state(false);
  let container: HTMLElement;

  // Create tweened store with delay from props
  const count = tweened(0, {
    duration: 2000,
    easing: cubicOut,
    delay: delay
  });

  onMount(() => {
    const targetValue = value;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          isVisible = true;
          count.set(targetValue);
        }
      },
      { threshold: 0.3 }
    );

    if (container) observer.observe(container);
    return () => observer.disconnect();
  });

  // Format the displayed value
  const displayValue = $derived(() => {
    const rounded = Number.isInteger(value) ? Math.round($count) : Math.round($count * 10) / 10;
    return `${prefix}${rounded}${suffix}`;
  });
</script>

<div
  bind:this={container}
  class="relative text-center group/stat"
>
  <div class="relative inline-block">
    <span
      class="headline-display text-[hsl(var(--primary))] mb-2 block tabular-nums transition-all duration-500 group-hover/stat:scale-105"
      style="text-shadow: 0 0 40px hsl(var(--primary) / 0.15)"
    >
      {displayValue()}
    </span>

    <div
      class="absolute inset-0 bg-[hsl(var(--primary))] opacity-0 blur-3xl transition-opacity duration-700 group-hover/stat:opacity-5"
      aria-hidden="true"
    ></div>
  </div>

  <span class="text-white/60 text-sm tracking-[0.05em] block mt-2">
    {label}
  </span>

  <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px bg-white/10 scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-700"></div>
</div>
