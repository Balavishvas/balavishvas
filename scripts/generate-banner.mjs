import { writeFileSync } from "node:fs";

const hour = Number(new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit", hour12: false, timeZone: "Asia/Kolkata"
}).format(new Date()));

let mode, title, subtitle, accent;
if (hour >= 5 && hour < 11) {
  mode = "LEARNING MODE"; title = "SYSTEM BOOT"; subtitle = "AI • DATA • EXPERIMENTS • DISCOVERY"; accent = "#38bdf8";
} else if (hour >= 11 && hour < 17) {
  mode = "BUILD MODE"; title = "SYSTEMS ACTIVE"; subtitle = "AI • AGENTS • RAG • BACKEND"; accent = "#22d3ee";
} else if (hour >= 17 && hour < 23) {
  mode = "EXPERIMENT MODE"; title = "DEEP BUILD"; subtitle = "RAG • AGENTS • SIMULATION • TOOLS"; accent = "#8b5cf6";
} else {
  mode = "DEEP WORK"; title = "NIGHT SHIFT"; subtitle = "IDEAS → SYSTEMS → WORKING SOFTWARE"; accent = "#a78bfa";
}

const lines = [
'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="360" viewBox="0 0 1200 360">',
'<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#050816"/><stop offset="100%" stop-color="#111827"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="' + accent + '"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>',
'<rect width="1200" height="360" rx="24" fill="url(#bg)"/>',
'<g opacity=".13" stroke="' + accent + '"><path d="M0 300H1200M0 240H1200M0 180H1200M0 120H1200"/><path d="M120 0V360M240 0V360M360 0V360M480 0V360M600 0V360M720 0V360M840 0V360M960 0V360M1080 0V360"/></g>',
'<circle cx="965" cy="90" r="54" fill="none" stroke="' + accent + '" stroke-width="2" opacity=".65"/><circle cx="965" cy="90" r="21" fill="' + accent + '" opacity=".16"/>',
'<path d="M870 278 C920 235 955 260 1000 205 S1080 160 1145 90" fill="none" stroke="url(#g)" stroke-width="3"/>',
'<circle cx="1000" cy="205" r="6" fill="#8b5cf6"/><circle cx="1145" cy="90" r="6" fill="' + accent + '"/>',
'<text x="70" y="88" fill="' + accent + '" font-family="monospace" font-size="17" letter-spacing="4">BALAVISHVAS // AI &amp; DATA SCIENCE</text>',
'<text x="70" y="142" fill="white" font-family="Arial,sans-serif" font-size="44" font-weight="700">' + title + '</text>',
'<text x="70" y="179" fill="#94a3b8" font-family="monospace" font-size="17">' + subtitle + '</text>',
'<rect x="70" y="220" width="560" height="66" rx="10" fill="#0b1222" stroke="#243047"/>',
'<text x="92" y="247" fill="#64748b" font-family="monospace" font-size="12">CURRENT MODE</text>',
'<text x="92" y="273" fill="#e2e8f0" font-family="monospace" font-size="18">' + mode + '</text>',
'<text x="70" y="325" fill="#475569" font-family="monospace" font-size="12">SYSTEM STATUS: ● ONLINE    TIMEZONE: IST    AUTO-UPDATED</text>',
'</svg>'
];
writeFileSync("banner.svg", lines.join("\n"));
