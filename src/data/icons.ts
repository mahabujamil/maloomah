// Stroke icon bodies on a 24x24 grid. Category ids double as icon names.
// Shared by Icon.astro and scripts/make-images.ts.
export const ICONS: Record<string, string> = {
  science:
    '<path d="M9 3h6"/><path d="M10 3v6.2L4.6 18.4A2 2 0 0 0 6.3 21.5h11.4a2 2 0 0 0 1.7-3.1L14 9.2V3"/><path d="M7.5 15h9"/>',
  space:
    '<circle cx="12" cy="12" r="5"/><path d="M4.3 15.4c-1.9 2.3-2.6 4.2-1.8 5 1.4 1.4 6.6-1.4 11.5-6.3s7.7-10.1 6.3-11.5c-.8-.8-2.7-.1-5 1.8"/>',
  health:
    '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/><path d="M3.5 11.5H9l1.2-2.2 2.3 4.4 1.5-2.2h6.5"/>',
  technology:
    '<rect x="5" y="5" width="14" height="14" rx="2.5"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  history:
    '<path d="M3 21h18"/><path d="M4.5 18h15"/><path d="M6.5 18v-7M10 18v-7M14 18v-7M17.5 18v-7"/><path d="M12 3 3.5 8h17Z"/>',
  geography:
    '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z"/>',
  money:
    '<circle cx="8.5" cy="8.5" r="5.5"/><path d="M17.7 10.6a5.5 5.5 0 1 1-7.1 7.1"/><path d="M7.5 6.8h1.2v3.6"/><path d="m16.7 13.9.8.8-2.6 2.6"/>',
  psychology:
    '<path d="M12 5a3 3 0 1 0-6 .1 4 4 0 0 0-2.5 5.8 4 4 0 0 0 .6 6.6A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 6 .1 4 4 0 0 1 2.5 5.8 4 4 0 0 1-.6 6.6A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/>',
  sports:
    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8"/><path d="M18 2H6v7a6 6 0 0 0 12 0Z"/>',
  culture:
    '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z"/>',
  search: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.6-4.6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.2 2"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  whatsapp:
    '<path d="M3.5 20.5 5 16.3A8.5 8.5 0 1 1 8 19.2Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1.2-1 .8a5 5 0 0 1-2.5-2.5l.8-1-1.2-2Z"/>',
  facebook: '<path d="M17 2.5h-3a4.5 4.5 0 0 0-4.5 4.5v3h-3v4h3v7.5h4V14h3l1-4h-4V7.5a1 1 0 0 1 1-1h3Z"/>',
  telegram: '<path d="m21.5 3-19 7.4 6.4 2.3 2.3 6.8L15 15l5 4Z"/><path d="m8.9 12.7 9.4-6.9"/>',
  x: '<path d="M4 4l6.8 9L4 20.5h1.6l5.9-6.5 4.9 6.5H20l-7.1-9.4L19.3 4h-1.6l-5.5 6L7.6 4Z"/>',
  bulb: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.7v.5h6V16c0-.7.3-1.3.8-1.7A6.5 6.5 0 0 0 12 2.5Z"/>',
  sparkle: '<path d="M12 3l1.8 5.4L19 10.2l-5.2 1.8L12 17.5l-1.8-5.5L5 10.2l5.2-1.8Z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z"/>',
  refresh: '<path d="M20.5 12a8.5 8.5 0 0 1-15 5.5M3.5 12a8.5 8.5 0 0 1 15-5.5"/><path d="M18.5 2.5v4h-4M5.5 21.5v-4h4"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6.5 9-6.5"/>',
  book: '<path d="M4 19.5V5a2.5 2.5 0 0 1 2.5-2.5H20v17H6.5A2.5 2.5 0 0 0 4 22h16"/>',
};
