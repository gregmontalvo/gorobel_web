/** Club photos served from /public/photos (copied from the old WordPress media library). */
export const PHOTOS = {
  floor: "/photos/suelo.jpg",
  group: "/photos/grupo.jpg",
  coach: "/photos/entrenador.jpg",
  rig: "/photos/jaula.jpg",
  grappling: "/photos/jiujitsu.jpg",
  kickboxingA: "/photos/kickboxing-1.png",
  kickboxingB: "/photos/kickboxing-2.png",
} as const;

export type PhotoKey = keyof typeof PHOTOS;

/** Photo for each home activity, in the order of `home[locale].activities.items`. */
export const ACTIVITY_PHOTOS: PhotoKey[] = [
  "rig",
  "coach",
  "group",
  "floor",
  "kickboxingA",
  "grappling",
  "group",
  "coach",
  "kickboxingB",
];
