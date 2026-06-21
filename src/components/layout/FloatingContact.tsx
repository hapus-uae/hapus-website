"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { company } from "@/data/company";

// Persistent floating contact widget, bottom-right on every screen. A green
// WhatsApp-style FAB that springs open into a small speed-dial (Call +
// WhatsApp). Green is the universal "message us" cue, so it reads instantly.
export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Call us",
      href: `tel:${company.phoneHref}`,
      icon: Phone,
      bg: "bg-[#2D6CDF]",
      hover: "hover:bg-[#2257bd]",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${company.whatsappHref}`,
      icon: WhatsappLogo,
      bg: "bg-[#25D366]",
      hover: "hover:bg-[#1faa52]",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
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
                className={`flex items-center gap-3 rounded-full py-2.5 pl-4 pr-3 text-white shadow-lg transition-colors ${action.bg} ${action.hover}`}
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em]">
                  {action.label}
                </span>
                <action.icon weight="fill" className="size-4" />
              </motion.a>
            ))
          : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Contact us"}
        aria-expanded={open}
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-[transform,background-color] hover:bg-[#1faa52] active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X weight="bold" className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsappLogo weight="fill" className="size-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
