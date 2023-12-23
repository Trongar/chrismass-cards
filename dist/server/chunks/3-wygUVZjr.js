async function load({
  params
}) {
  const { hash } = params;
  return { hash };
}
const ssr = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-TkK1tMjt.js')).default;
const universal_id = "src/routes/new-year/[hash]/+page.ts";
const imports = ["_app/immutable/nodes/3.A031DJRM.js","_app/immutable/chunks/scheduler.LPWQixpI.js","_app/immutable/chunks/index.dl6Ymxdh.js","_app/immutable/chunks/firebase.py3j3ZiR.js","_app/immutable/chunks/stores.r5e3Dee8.js","_app/immutable/chunks/singletons.KGvev7Qz.js"];
const stylesheets = ["_app/immutable/assets/firebase.vnVu2nrR.css"];
const fonts = ["_app/immutable/assets/manrope-cyrillic-wght-normal.tc1pcmBl.woff2","_app/immutable/assets/manrope-greek-wght-normal.PilIel9p.woff2","_app/immutable/assets/manrope-vietnamese-wght-normal.rzxPwudx.woff2","_app/immutable/assets/manrope-latin-ext-wght-normal.-trWxN4o.woff2","_app/immutable/assets/manrope-latin-wght-normal.1panvsZo.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-wght-normal.abYgcALZ.woff2","_app/immutable/assets/jetbrains-mono-greek-wght-normal.VtST8Y2j.woff2","_app/immutable/assets/jetbrains-mono-vietnamese-wght-normal.cvsqbrb2.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-wght-normal.qJtheMis.woff2","_app/immutable/assets/jetbrains-mono-latin-wght-normal.AI7HGr_Q.woff2"];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-wygUVZjr.js.map
