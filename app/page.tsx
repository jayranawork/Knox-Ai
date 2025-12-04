"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon, Check } from "lucide-react";
import { toast } from "sonner";
import { WavyBackground } from "@/components/ui/wavy-background";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

type Feature = {
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  mostPopular?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: "Launch-ready in hours",
    description:
      "Spin up a polished landing page in an afternoon instead of weeks. Focus on your product, not pixel-pushing.",
  },
  {
    title: "Built for early-stage founders",
    description:
      "Validate ideas quickly, capture email signups, and share a credible link with investors and early adopters.",
  },
  {
    title: "Beautiful by default",
    description:
      "Designed with modern UI best practices so your startup looks professional from day one.",
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for validating a new idea and collecting your first signups.",
    features: ["1 landing page", "Basic analytics", "Email capture"],
  },
  {
    name: "Growth",
    price: "$29",
    description: "For founders starting to scale traffic and run experiments.",
    features: ["Unlimited pages", "A/B testing", "Priority support"],
    mostPopular: true,
  },
  {
    name: "Scale",
    price: "$79",
    description: "For teams that need a polished presence and serious reliability.",
    features: ["Custom domains", "Team access", "Advanced insights"],
  },
];

function ScrollToTopButton() {
  const handleClick = () => {
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-4 z-30">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        
        <Button
          variant="outline"
          size="icon"
          aria-label="Back to top"
          onClick={handleClick}
        >
          <ArrowUpIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function KnoxNavbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <ResizableNavbar className="top-4">
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex items-center gap-4">
            <NavbarButton href="#contact" variant="primary">
              Get early access
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-700 dark:text-neutral-300"
              >
                <span className="block py-1 text-base">{item.name}</span>
              </a>
            ))}
            <div className="mt-4 flex w-full flex-col gap-3">
              <NavbarButton
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get early access
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <KnoxNavbar />
      <ScrollToTopButton />
      <section id="home" className="relative">
        <WavyBackground
          containerClassName="pt-24"
          className="mx-auto max-w-3xl px-4 text-center space-y-6"
          colors={["#38bdf8", "#818cf8", "#c084fc", "#22d3ee"]}
          waveOpacity={0.6}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-200">
              Introducing
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <EncryptedText
                text="KNOX"
                encryptedClassName="text-slate-400"
                revealedClassName="text-white"
                revealDelayMs={40}
              />{" "}
              <span className="text-slate-200">AI</span>
            </h1>
            <p className="text-base text-slate-100 sm:text-lg">
              Launch your startup landing page in hours, not weeks. KNOX AI
              gives you a beautiful, conversion-focused template with subtle
              motion and a wavy hero that feels alive.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  toast("You’re on the early access list.", {
                    description: "We’ll email you as soon as KNOX AI opens the beta.",
                  })
                }
              >
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/40 bg-white/5 text-white hover:bg-white/10"
                onClick={() =>
                  toast("Demo coming soon", {
                    description: "We’re putting the final touches on the KNOX AI walkthrough.",
                  })
                }
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </WavyBackground>
      </section>
      <section id="about" className="py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-muted md:h-80 md:w-1/2">
            <Image
              src="/pexels-startup-stock-photos-7097.jpg"
              alt="Founders collaborating in a modern workspace"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-center md:w-1/2 md:text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About LaunchPad
            </h2>
            <p className="text-muted-foreground">
              LaunchPad is a starter-friendly landing page kit for founders who
              want to ship quickly without hiring a designer or developer. It
              gives you a clean, conversion-focused layout that looks great on
              day one and grows with your product.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re validating a new idea, opening a private
              beta, or preparing for your first investor meetings, LaunchPad
              helps you tell a clear story, capture interest, and launch with
              confidence.
            </p>
          </div>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-center sm:text-4xl">
            Features
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Everything you need to launch a credible landing page in record
            time.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="group"
              >
                <Card className="relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/80 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/60 group-hover:shadow-lg">
                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                      <span className="text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6 text-sm text-muted-foreground">
                    {feature.description}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-center sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Simple, transparent plans designed for early-stage startups.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card
                  className={`flex h-full flex-col rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm transition-all duration-200 ${
                    plan.mostPopular
                      ? "bg-primary/10 border-primary/70 shadow-xl md:-translate-y-2"
                      : "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  }`}
                >
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-semibold text-muted-foreground">
                        {plan.name}
                      </div>
                      {plan.mostPopular && (
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-primary">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-xs font-medium uppercase text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-6 text-sm text-muted-foreground">
                    <p>{plan.description}</p>
                    <div className="space-y-4">
                      <Button
                        className="w-full"
                        variant={plan.mostPopular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                      <ul className="space-y-2 text-left">
                        {plan.features.map((item: string) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <Check className="h-3 w-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-center sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Everything you need to know before you launch with LaunchPad.
          </p>
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do I need to know how to code to use LaunchPad?
                </AccordionTrigger>
                <AccordionContent>
                  Nope. LaunchPad is built so non-technical founders can launch
                  a credible landing page by editing copy and a few settings.
                  You can always hand it to a developer later if you want to
                  customize it further.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I use LaunchPad for more than one idea?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. You can duplicate the layout, swap in new copy and
                  images, and reuse it for as many experiments or startup ideas
                  as you like.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How long does it take to launch my first page?
                </AccordionTrigger>
                <AccordionContent>
                  Most founders ship a solid first version in an afternoon.
                  The structure, sections, and components are already in place—
                  you&apos;re mainly focusing on your message.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What happens when I&apos;m ready to grow beyond a simple
                  landing page?
                </AccordionTrigger>
                <AccordionContent>
                  LaunchPad is built on Next.js and shadcn/ui, so your
                  developer can extend it into a full marketing site or product
                  without rebuilding from scratch.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-center sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Tell us a bit about your startup and we&apos;ll get back to you.
          </p>
          <div className="mt-8">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4" id="contact-form">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Alex Founder" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="message">
                      Tell us about your startup
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="What are you building and how can we help?"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Send message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="border-t bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LaunchPad. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-foreground">
              Back to top
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

