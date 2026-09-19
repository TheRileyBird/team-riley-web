/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Which market this build is for. Injected by astro.config.mjs. */
  readonly SITE_VERTICAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
