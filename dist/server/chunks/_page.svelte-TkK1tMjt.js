import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-v4j075pT.js';
import { P as Presentation, S as Slide } from './firebase-UjkLanM6.js';
import 'firebase/database';
import { p as page } from './stores-uzpiFiy6.js';
import 'reveal.js';
import 'reveal.js/plugin/markdown/markdown.js';
import 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/plugin/math/math.js';
import 'reveal.js/plugin/notes/notes.js';
import 'firebase/app';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.hash;
  let person = { email: "", name: "", sound: "" };
  $$unsubscribe_page();
  return `${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Slide, "Slide").$$render($$result, { animate: true }, {}, {
        default: () => {
          return `<p class="font-bold text-8xl">Feliz año nuevo ${escape(person.name)}!</p>`;
        }
      })} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          video: "https://download-video.akamaized.net/v3-1/download/5151fb41-6bd9-4d60-8658-41d1783c18a8/ebd0bd5b/cGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ?__token__=st=1703274690~exp=1703361210~acl=%2Fv3-1%2Fdownload%2F5151fb41-6bd9-4d60-8658-41d1783c18a8%2Febd0bd5b%2FcGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ%2A~hmac=3a449497b3d75480a4d28f6678939e7711ab5e778a3f93276ed8f76f447a3bed&r=dXMtZWFzdDE%3D",
          animate: true
        },
        {},
        {
          default: () => {
            return `<p class="font-bold text-8xl" data-svelte-h="svelte-yhqumi">Esperamos que hayas tenido un muy buen año</p>`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="font-bold text-8xl" data-svelte-h="svelte-cypbpx">Y que este año sea aún mejor</p>`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-TkK1tMjt.js.map
