<script lang="ts">
  import { Bot, Mail, Calendar, FileText, Users, ArrowRight } from "lucide-svelte";
</script>

<section class="py-20 lg:py-32 bg-[#f5f5f0] relative overflow-hidden">
  <!-- Grid pattern background -->
  <div
    class="absolute inset-0 opacity-[0.02]"
    style="background-image: linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px); background-size: 60px 60px;"
  ></div>

  <div class="max-w-6xl mx-auto px-4 lg:px-8 relative">
    <!-- Header - GALOR Style -->
    <div class="mb-12 lg:mb-20">
      <h2
        class="text-[42px] lg:text-[80px] xl:text-[100px] leading-none text-[#0a0a0a]"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        OPPORTUNITY <span class="text-[#ff2d00]">IDENTIFICATION</span>
      </h2>
      <div class="flex items-center gap-2 mt-1 lg:mt-4">
        <div class="w-12 lg:w-24 h-[3px] bg-[#ff2d00]"></div>
        <span
          class="text-[11px] lg:text-[14px] uppercase tracking-wider text-[#5a5a5a]"
          style="font-family: 'Space Mono', monospace;"
        >
          / ADDITIONAL SERVICES
        </span>
      </div>
      <p
        class="text-[#5a5a5a] max-w-2xl mt-6 text-[14px] lg:text-[16px] leading-relaxed"
        style="font-family: 'Space Mono', monospace;"
      >
        With our broad experience applying AI, we help you find opportunities to unlock the value.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
      <!-- AI Chatbot -->
      <article
        class="p-8 lg:p-10 border-[3px] border-[#0a0a0a] bg-white relative group hover:translate-x-1 hover:-translate-y-1 transition-transform"
        style="box-shadow: 6px 6px 0 #0a0a0a;"
      >
        <div
          class="absolute top-4 right-4 text-[9px] uppercase tracking-widest text-[#ff2d00] px-2 py-0.5 border border-[#ff2d00]"
          style="font-family: 'Space Mono', monospace;"
        >
          Recommended
        </div>
        <Bot class="w-10 h-10 text-[#ff2d00] mb-6" />
        <h3
          class="text-[24px] lg:text-[28px] text-[#0a0a0a] mb-3"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          AI CHATBOT FOR CONSULTING
        </h3>
        <p
          class="text-[#5a5a5a] text-[13px] lg:text-[14px] mb-6 leading-relaxed"
          style="font-family: 'Space Mono', monospace;"
        >
          Intelligent assistant on your website that answers common questions about hearing aids, helps with selection, and guides visitors to booking. Works 24/7.
        </p>
        <ul class="space-y-3 text-[13px] text-[#5a5a5a]" style="font-family: 'Space Mono', monospace;">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#ff2d00]"></span>
            Answers product questions
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#ff2d00]"></span>
            Helps choose the right device
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#ff2d00]"></span>
            Guides to booking
          </li>
        </ul>
      </article>

      <!-- CRM & Email Campaigns -->
      <article
        class="p-8 lg:p-10 border-[3px] border-[#0a0a0a] bg-white group hover:translate-x-1 hover:-translate-y-1 transition-transform"
        style="box-shadow: 6px 6px 0 #0a0a0a;"
      >
        <Users class="w-10 h-10 text-[#0a0a0a] mb-6" />
        <h3
          class="text-[24px] lg:text-[28px] text-[#0a0a0a] mb-3"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          CRM & EMAIL CAMPAIGNS
        </h3>
        <p
          class="text-[#5a5a5a] text-[13px] lg:text-[14px] mb-6 leading-relaxed"
          style="font-family: 'Space Mono', monospace;"
        >
          Complete patient relationship management. Track contacts, history, and automate personalized email campaigns for follow-ups and retention.
        </p>
        <ul class="space-y-3 text-[13px] text-[#5a5a5a]" style="font-family: 'Space Mono', monospace;">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Patient contact database
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Automated email sequences
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Follow-up reminders
          </li>
        </ul>
      </article>

      <!-- Online Booking System -->
      <article
        class="p-8 lg:p-10 border-[3px] border-[#0a0a0a] bg-white group hover:translate-x-1 hover:-translate-y-1 transition-transform"
        style="box-shadow: 6px 6px 0 #0a0a0a;"
      >
        <Calendar class="w-10 h-10 text-[#0a0a0a] mb-6" />
        <h3
          class="text-[24px] lg:text-[28px] text-[#0a0a0a] mb-3"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          ADVANCED BOOKING SYSTEM
        </h3>
        <p
          class="text-[#5a5a5a] text-[13px] lg:text-[14px] mb-6 leading-relaxed"
          style="font-family: 'Space Mono', monospace;"
        >
          Online appointment booking system with calendar sync, automatic reminders, and appointment request management.
        </p>
        <ul class="space-y-3 text-[13px] text-[#5a5a5a]" style="font-family: 'Space Mono', monospace;">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Real-time calendar
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            SMS/Email reminders
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Google Calendar integration
          </li>
        </ul>
      </article>

      <!-- Document Automation -->
      <article
        class="p-8 lg:p-10 border-[3px] border-[#0a0a0a] bg-white group hover:translate-x-1 hover:-translate-y-1 transition-transform"
        style="box-shadow: 6px 6px 0 #0a0a0a;"
      >
        <FileText class="w-10 h-10 text-[#0a0a0a] mb-6" />
        <h3
          class="text-[24px] lg:text-[28px] text-[#0a0a0a] mb-3"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          DOCUMENT AUTOMATION
        </h3>
        <p
          class="text-[#5a5a5a] text-[13px] lg:text-[14px] mb-6 leading-relaxed"
          style="font-family: 'Space Mono', monospace;"
        >
          Automate patient documentation, reports, and forms. Digital signatures, automatic PDF generation, and seamless integration with your workflow.
        </p>
        <ul class="space-y-3 text-[13px] text-[#5a5a5a]" style="font-family: 'Space Mono', monospace;">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Auto-generated reports
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            Digital forms & signatures
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-[#0a0a0a]"></span>
            PDF export & archiving
          </li>
        </ul>
      </article>
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <p
        class="text-[#5a5a5a] text-[14px] mb-6"
        style="font-family: 'Space Mono', monospace;"
      >
        Interested in additional services? Let's talk.
      </p>
      <a
        href="#kontakt"
        class="inline-flex items-center gap-3 border-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-8 py-4 text-[#f5f5f0] uppercase text-[12px] font-bold tracking-wider hover:bg-[#ff2d00] hover:border-[#ff2d00] transition-all"
        style="font-family: 'Space Mono', monospace; box-shadow: 4px 4px 0 #0a0a0a;"
      >
        <span>Contact us</span>
        <ArrowRight class="w-4 h-4" />
      </a>
    </div>
  </div>
</section>
