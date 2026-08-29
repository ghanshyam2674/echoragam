"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Instagram, Youtube, Cloud, Upload, Headphones, CheckCircle2,
  SlidersHorizontal, BarChart3, Mic2, Music, Pencil, ArrowUpFromLine,
  Quote, Star, Mail, Menu, X, Check, User, MessageCircle,
  ArrowRight, Sparkles, Waves,
} from "lucide-react";

const NAV = ["Home", "About", "Services", "Process", "Contact"];

const TRUST = ["Industry Standard Quality", "Fast Turnaround", "Artist Focused", "100% Satisfaction Guaranteed"];

const SERVICES = [
  { icon: SlidersHorizontal, title: "Mixing", desc: "Balance, clarity and depth" },
  { icon: BarChart3, title: "Mastering", desc: "Loud, powerful and streaming-ready" },
  { icon: Music, title: "Music Production", desc: "Full production from beat to final mix" },
  { icon: Mic2, title: "Beat Production", desc: "Custom beats for rappers, singers & content creators" },
  { icon: Pencil, title: "Song Editing", desc: "Vocal tuning, timing correction, audio clean-up" },
  { icon: ArrowUpFromLine, title: "Stem Mastering", desc: "Master your pre-mixed stems" },
];

const PROCESS = [
  { icon: Upload, label: "Send Your Track" },
  { icon: Sparkles, label: "We Work Our Magic" },
  { icon: Headphones, label: "Review & Feedback" },
  { icon: CheckCircle2, label: "Final Delivery" },
];

const CHECKS = [
  "Professional sound that stands out",
  "Affordable pricing for independent artists",
  "Quick delivery without compromising quality",
  "Friendly communication & creative support",
];

const FOOTER: Record<string, string[]> = {
  Explore: ["Home", "About", "Services", "Process", "Contact"],
  Services: ["Mixing", "Mastering", "Music Production", "Beat Production", "Song Editing"],
  Support: ["FAQs", "Terms of Service", "Privacy Policy"],
};

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══ NAVBAR ═══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          <a href="#" className="text-xl font-bold tracking-tight">Echo<span className="text-primary">ragam</span></a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {NAV.map((n) => (
              <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-primary transition-colors">{n}</a></li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              {[Instagram, Youtube, Cloud].map((Icon, i) => (
                <Icon key={i} className="h-4 w-4 cursor-pointer hover:text-primary transition-colors" />
              ))}
            </div>
            <Button size="sm" className="rounded-full px-5">Work With Us</Button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden bg-white border-b border-border px-4 pb-4 space-y-3">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="block text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>{n}</a>
            ))}
            <Button size="sm" className="w-full rounded-full">Work With Us</Button>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        {/* ═══ HERO ═══ */}
        <section id="home" className="relative min-h-[90vh] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-studio.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Music Production Label</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
              We Make Your Sound,{" "}
              <span className="italic text-primary" style={{ fontFamily: "Georgia, serif" }}>Professional.</span>
            </h1>
            <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              Echoragam is a music production label that helps artists, creators and brands bring their sound to life with industry-standard production, mixing &amp; mastering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full px-7 py-2.5 text-sm font-semibold">Work With Us</Button>
              <Button variant="outline" className="rounded-full px-7 py-2.5 text-sm font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white">Contact Us</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm">
                  <Check className="h-3.5 w-3.5 text-primary" />{t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section id="about" className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">About Echoragam</p>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Crafting Emotion Through Sound</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;re more than a label &mdash; we&apos;re a creative space for artists, rappers, singers, and creators who want their music to hit different. From the first draft to the final master, we bring out the emotion in every beat, every bar, and every note.
                </p>
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: User, label: "Artist First", desc: "Your vision drives everything we do" },
                    { icon: Waves, label: "Premium Quality", desc: "Industry-standard sound every time" },
                    { icon: MessageCircle, label: "Creative Support", desc: "Collaborate with experienced producers" },
                  ].map((f) => (
                    <div key={f.label} className="bg-white rounded-xl p-4 border border-border">
                      <f.icon className="h-5 w-5 text-primary mb-2" />
                      <h4 className="font-semibold text-sm">{f.label}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-6 inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Based in India | Working Worldwide
                </span>
              </div>
              <div className="relative">
                <img src="/producer-bw.jpg" alt="Producer at studio" className="rounded-2xl object-cover w-full h-[500px]" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">What We Do</p>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">Our Services</h2>
              <p className="mt-4 text-muted-foreground">Everything you need to take your music from raw idea to release-ready track.</p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="group bg-white rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <s.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section id="process" className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Our Process</p>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">Simple. Clear. Professional.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Process made easy so you can focus on creating music.</p>
            <Button className="mt-8 rounded-full px-7">Get Started</Button>
            <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-border" />
              {PROCESS.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center relative z-10">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute top-0 right-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center z-20">{i + 1}</span>
                  <p className="font-semibold text-sm mt-1">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY US + TESTIMONIAL ═══ */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-12 items-start">
            {/* Checklist */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Echoragam?</h3>
              <ul className="space-y-4">
                {CHECKS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-muted/50 rounded-2xl p-8 flex flex-col items-center text-center">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;They turned my raw track into something I didn&apos;t think was possible. The quality is insane — sounds like a major label release. Best decision I made for my music.&rdquo;
              </p>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 font-semibold text-sm">Independent Artist</p>
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold">Let&apos;s Create Something Amazing</h3>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">Your next hit song is just one step away. Let&apos;s make it happen.</p>
              </div>
              <Button variant="secondary" className="mt-6 rounded-full px-7 self-start font-semibold">
                Work With Us Today
              </Button>
              <Music className="h-20 w-20 text-white/10 mt-6 self-end" />
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</p>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Level Up Your Sound?</h2>
            <p className="mt-4 text-muted-foreground">Drop us a message and let&apos;s talk about your next project.</p>
            <Button size="lg" className="mt-8 rounded-full px-8 text-base font-semibold">
              <Mail className="h-4 w-4 mr-2" />hello@echoragam.com
            </Button>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-foreground text-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="text-xl font-bold text-white">Echo<span className="text-primary">ragam</span></a>
              <p className="mt-2 text-sm">Crafting emotion through sound</p>
              <div className="flex gap-3 mt-4">
                {[Instagram, Youtube, Cloud, Mail].map((Icon, i) => (
                  <Icon key={i} className="h-4 w-4 cursor-pointer hover:text-primary transition-colors" />
                ))}
              </div>
            </div>
            {/* Link Columns */}
            {Object.entries(FOOTER).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-3">{title}</h4>
                <ul className="space-y-2 text-sm">
                  {links.map((link) => (
                    <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
            © 2024 Echoragam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
