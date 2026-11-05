/// <reference types="vite/client" />

/**
 * Lets TypeScript understand static asset imports (images, fonts, etc.)
 * handled by Vite's asset pipeline.
 */
declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
