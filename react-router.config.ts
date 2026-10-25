import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: false,
  basename: "/react_SPA/", // <-- 加上這一行，跟 Vite 的 base 完全對齊！
} satisfies Config;
