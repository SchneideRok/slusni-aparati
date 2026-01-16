<script lang="ts">
  interface Props {
    variant?: 'essential' | 'advanced' | 'premium';
  }

  let { variant = 'essential' }: Props = $props();

  const colorMap = {
    essential: 'hsl(var(--sage))',
    advanced: 'hsl(var(--cream))',
    premium: 'hsl(var(--background))'
  };

  const accentMap = {
    essential: 'hsl(var(--primary))',
    advanced: 'hsl(var(--theme-accent))',
    premium: 'hsl(var(--foreground))'
  };
</script>

<div class="relative w-full h-full flex items-center justify-center" style="background: {colorMap[variant]}">
  <svg
    viewBox="0 0 200 200"
    class="w-3/5 h-3/5 opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-105"
    style="filter: drop-shadow(0 10px 30px rgba(0,0,0,0.05))"
  >
    <!-- Behind-the-ear body -->
    <path
      d="M 60 40 Q 50 45 45 55 L 40 85 Q 38 95 45 100 L 55 105 Q 65 108 75 100 L 80 70 Q 82 60 75 50 Z"
      fill={accentMap[variant]}
      opacity="0.15"
    />

    <!-- Connecting tube -->
    <path
      d="M 45 100 Q 60 120 80 135"
      stroke={accentMap[variant]}
      stroke-width="3"
      fill="none"
      opacity="0.2"
      stroke-linecap="round"
    />

    <!-- In-ear receiver -->
    <ellipse
      cx="85"
      cy="140"
      rx="15"
      ry="20"
      fill={accentMap[variant]}
      opacity="0.15"
    />

    <!-- Microphone ports -->
    <circle cx="65" cy="55" r="2" fill={accentMap[variant]} opacity="0.25" />
    <circle cx="65" cy="62" r="2" fill={accentMap[variant]} opacity="0.25" />

    <!-- Sound wave accent for premium -->
    {#if variant === 'premium'}
      <path
        d="M 120 100 Q 125 100 125 105 Q 125 110 120 110"
        stroke={accentMap[variant]}
        stroke-width="1.5"
        fill="none"
        opacity="0.12"
        stroke-linecap="round"
      />
      <path
        d="M 130 95 Q 137 95 137 105 Q 137 115 130 115"
        stroke={accentMap[variant]}
        stroke-width="1.5"
        fill="none"
        opacity="0.10"
        stroke-linecap="round"
      />
    {/if}
  </svg>

  <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
</div>
