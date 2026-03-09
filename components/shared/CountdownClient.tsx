"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2026-11-01T10:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownClient() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: t.d, l: "días" },
    { v: t.h, l: "horas" },
    { v: t.m, l: "min" },
    { v: t.s, l: "seg" },
  ];

  return (
    <div className="flex items-center gap-4">
      {units.map(({ v, l }, i) => (
        <div key={l} className="flex items-center gap-4">
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-display font-black text-white tabular-nums">
              {pad(v)}
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">{l}</span>
          </div>
          {i < 3 && (
            <span className="text-white/30 text-3xl font-display font-black -mt-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
