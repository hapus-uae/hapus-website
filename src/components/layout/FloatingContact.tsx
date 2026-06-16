"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, WhatsappLogo, Plus } from "@phosphor-icons/react";
import { company } from "@/data/company";

// Mobile-only floating speed-dial: call + WhatsApp. Springs open from a single
// FAB. Hidden on lg+ where the header CTA and footer cover contact.
export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Call",
      href: `tel:${company.phoneHref}`,
      icon: Phone,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${company.whatsappHref}`,
      icon: WhatsappLogo,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 lg:hidden">
      <AnimatePresence>
        {open
          ? actions.map((action, i) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                  delay: i * 0.04,
                }}
                className="flex items-center gap-3 border border-line bg-panel/95 py-2.5 pl-4 pr-3 backdrop-blur-md"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone">
                  {action.label}
                </span>
                <action.icon weight="fill" className="size-4 text-bone" />
              </motion.a>
            ))
          : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className="flex size-14 items-center justify-center border border-accent bg-accent text-white shadow-lg shadow-accent/20 transition-transform active:scale-95"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
          <Plus weight="bold" className="size-6" />
        </motion.span>
      </button>
    </div>
  );
}
