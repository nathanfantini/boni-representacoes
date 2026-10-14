"use client";

import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/content";
import { Monogram } from "./Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-sand-200/80 bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <a href="#topo" className="flex items-center gap-3 text-ink" aria-label="Boni Representações — início">
          <Monogram className="h-10 w-10 text-gold-500" />
          <span className="leading-none">
            <span className="block font-serif text-2xl font-medium tracking-wide">Boni</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-luxe text-graphite-500">
              Representações
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[12px] font-medium uppercase tracking-[0.18em] text-graphite-600 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold hidden !px-6 !py-3 lg:inline-flex">
          Fale conosco
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`absolute h-px w-6 bg-ink transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
          />
          <span
            className={`absolute h-px w-6 bg-ink transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <nav className="container-site flex flex-col gap-1 pb-10 pt-4" aria-label="Menu móvel">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-sand-200 py-4 font-serif text-2xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-8"
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
