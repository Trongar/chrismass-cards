import { c as create_ssr_component, v as validate_component } from './ssr-v4j075pT.js';
import { P as Presentation, S as Slide } from './firebase-UjkLanM6.js';
import 'firebase/database';
import 'reveal.js';
import 'reveal.js/plugin/markdown/markdown.js';
import 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/plugin/math/math.js';
import 'reveal.js/plugin/notes/notes.js';
import 'firebase/app';

const Slides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new Audio();
  return `${`${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Slide, "Slide").$$render($$result, { animate: true }, {}, {
        default: () => {
          return `<p class="font-bold text-8xl" data-svelte-h="svelte-1cdbzjx">No hay nadie en la sala</p>`;
        }
      })}`;
    }
  })}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-9gurkc_START -->${$$result.title = `<title>Animotion</title>`, ""}<!-- HEAD_svelte-9gurkc_END -->`, ""} ${validate_component(Slides, "Slides").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4f5VlOLT.js.map
