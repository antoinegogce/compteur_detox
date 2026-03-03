"use client";

import { useState, useEffect } from "react";

const START = new Date("2026-03-03T00:01:00").getTime();
const END = new Date("2026-03-24T00:01:00").getTime();
const TOTAL = END - START;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function Home() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return (
      <div className="container">
        <p className="motto">
          21 jours — pas d&apos;écrans récréatifs, pas de podcasts, pas de
          vidéos.
        </p>
      </div>
    );
  }

  const finished = now >= END;
  const remaining = Math.max(0, END - now);
  const elapsed = Math.min(TOTAL, Math.max(0, now - START));
  const percent = Math.min(100, (elapsed / TOTAL) * 100);

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return (
    <div className="container">
      <p className="motto">
        21 jours — pas d&apos;écrans récréatifs, pas de podcasts, pas de
        vidéos.
      </p>

      {finished ? (
        <div className="victory">
          <p className="victory-title">Défi accompli.</p>
          <p className="victory-sub">
            21 jours. Tu l&apos;as fait. Silence, discipline, clarté.
          </p>
        </div>
      ) : (
        <div className="countdown">
          <div className="unit">
            <span className="value">{pad(days)}</span>
            <span className="label">jours</span>
          </div>
          <div className="unit">
            <span className="value">{pad(hours)}</span>
            <span className="label">heures</span>
          </div>
          <div className="unit">
            <span className="value">{pad(minutes)}</span>
            <span className="label">minutes</span>
          </div>
          <div className="unit">
            <span className="value">{pad(seconds)}</span>
            <span className="label">secondes</span>
          </div>
        </div>
      )}

      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percent.toFixed(2)}%` }}
          />
        </div>
        <span className="progress-text">{percent.toFixed(1)} %</span>
      </div>
    </div>
  );
}
