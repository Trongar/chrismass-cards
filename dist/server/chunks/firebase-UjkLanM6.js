import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object } from './ssr-v4j075pT.js';
import 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';
import Math from 'reveal.js/plugin/math/math.js';
import Notes from 'reveal.js/plugin/notes/notes.js';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function svelte(hljs) {
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10
      }),
      {
        begin: /^(\s*)(<script(\s*context="module")?>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
        contains: [
          {
            begin: /^(\s*)(\$:)/gm,
            end: /(\s*)/gm,
            className: "keyword"
          }
        ]
      },
      {
        begin: /^(\s*)(<style.*>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true
      },
      {
        begin: /\{/gm,
        end: /\}/gm,
        subLanguage: "javascript",
        contains: [
          {
            begin: /[\{]/,
            end: /[\}]/,
            skip: true
          },
          {
            begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
            className: "keyword",
            relevance: 10
          }
        ]
      }
    ]
  };
}
function registerLanguages(hljs) {
  hljs.registerLanguage("svelte", svelte);
}
({
  // presentation size respecting aspect ratio
  width: 960,
  height: 700,
  // content padding
  margin: 0.04,
  // smallest and largest possible scale
  minScale: 0.2,
  maxScale: 2,
  // plugins
  plugins: [Markdown, Highlight, Math.KaTeX, Notes],
  // syntax highlight options
  highlight: {
    // add new languages
    beforeHighlight: registerLanguages,
    // disable automatic syntax highlighting
    highlightOnLoad: false
  },
  // slide controls
  controls: true,
  // slide progress bar
  progress: true,
  // slide transition
  transition: "slide",
  // bring your own layout
  disableLayout: false,
  // display mode used to show slides
  display: "block",
  // center slides on the screen
  center: true,
  // auto-animate duration
  autoAnimateDuration: 1,
  // auto-animate easing
  autoAnimateEasing: "ease",
  // animate unmatched elements
  autoAnimateUnmatched: true,
  // hide cursor
  hideInactiveCursor: true,
  // time before cursor is hidden (ms)
  hideCursorTime: 5e3,
  // show current slide
  hash: true
});
const Presentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="reveal"><div class="slides">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "animate",
    "animateEasing",
    "animateUnmatched",
    "animateId",
    "animateRestart",
    "background",
    "gradient",
    "image",
    "video",
    "iframe",
    "interactive",
    "transition"
  ]);
  let { animate = null } = $$props;
  let { animateEasing = null } = $$props;
  let { animateUnmatched = null } = $$props;
  let { animateId = null } = $$props;
  let { animateRestart = null } = $$props;
  let { background = null } = $$props;
  let { gradient = null } = $$props;
  let { image = null } = $$props;
  let { video = null } = $$props;
  let { iframe = null } = $$props;
  let { interactive = null } = $$props;
  let { transition = null } = $$props;
  delete $$restProps.class;
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.animateEasing === void 0 && $$bindings.animateEasing && animateEasing !== void 0)
    $$bindings.animateEasing(animateEasing);
  if ($$props.animateUnmatched === void 0 && $$bindings.animateUnmatched && animateUnmatched !== void 0)
    $$bindings.animateUnmatched(animateUnmatched);
  if ($$props.animateId === void 0 && $$bindings.animateId && animateId !== void 0)
    $$bindings.animateId(animateId);
  if ($$props.animateRestart === void 0 && $$bindings.animateRestart && animateRestart !== void 0)
    $$bindings.animateRestart(animateRestart);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.video === void 0 && $$bindings.video && video !== void 0)
    $$bindings.video(video);
  if ($$props.iframe === void 0 && $$bindings.iframe && iframe !== void 0)
    $$bindings.iframe(iframe);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  return `<section${spread(
    [
      {
        "data-auto-animate": escape_attribute_value(animate)
      },
      {
        "data-auto-animate-easing": escape_attribute_value(animateEasing)
      },
      {
        "data-auto-animate-unmatched": escape_attribute_value(animateUnmatched)
      },
      {
        "data-auto-animate-id": escape_attribute_value(animateId)
      },
      {
        "data-auto-animate-restart": escape_attribute_value(animateRestart)
      },
      {
        "data-background-color": escape_attribute_value(background)
      },
      {
        "data-background-gradient": escape_attribute_value(gradient)
      },
      {
        "data-background-image": escape_attribute_value(image)
      },
      {
        "data-background-video": escape_attribute_value(video)
      },
      {
        "data-background-iframe": escape_attribute_value(iframe)
      },
      {
        "data-background-interactive": escape_attribute_value(interactive)
      },
      {
        "data-transition": escape_attribute_value(transition)
      },
      {
        class: escape_attribute_value($$props.class || "")
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</section>`;
});
var define_import_meta_env_default = { VITE_APP_FIREBASE_API_KEY: "AIzaSyCMqcNZt5-_dHnuFDvMdF7ZcQQCRyS8TtQ", VITE_APP_FIREBASE_AUTH_DOMAIN: "difrenosa-back.firebaseapp.com", VITE_APP_FIREBASE_DATABASE_URL: "https://difrenosa-back-default-rtdb.firebaseio.com", VITE_APP_FIREBASE_PROJECT_ID: "difrenosa-back", VITE_APP_FIREBASE_STORAGE_BUCKET: "difrenosa-back.appspot.com", VITE_APP_FIREBASE_MESSAGINGSENDER_ID: "83403312843", VITE_APP_FIREBASE_APP_ID: "1:83403312843:web:aa97782bbda88f1acfd54e", BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const firebaseConfig = {
  apiKey: "AIzaSyCMqcNZt5-_dHnuFDvMdF7ZcQQCRyS8TtQ",
  authDomain: "difrenosa-back.firebaseapp.com",
  databaseURL: "https://difrenosa-back-default-rtdb.firebaseio.com",
  projectId: "difrenosa-back",
  storageBucket: "difrenosa-back.appspot.com",
  messagingSenderId: define_import_meta_env_default.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:83403312843:web:aa97782bbda88f1acfd54e"
};
const firebaseApp = initializeApp(firebaseConfig);
getDatabase(firebaseApp);

export { Presentation as P, Slide as S };
//# sourceMappingURL=firebase-UjkLanM6.js.map
