const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.GlimeQUN.js","app":"_app/immutable/entry/app.Op0NENzL.js","imports":["_app/immutable/entry/start.GlimeQUN.js","_app/immutable/chunks/scheduler.LPWQixpI.js","_app/immutable/chunks/singletons.KGvev7Qz.js","_app/immutable/entry/app.Op0NENzL.js","_app/immutable/chunks/scheduler.LPWQixpI.js","_app/immutable/chunks/index.dl6Ymxdh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0--XXvUQMj.js')),
			__memo(() => import('./chunks/1-uU9OdmXd.js')),
			__memo(() => import('./chunks/2-xkjrnJYD.js')),
			__memo(() => import('./chunks/3-wygUVZjr.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/new-year/[hash]",
				pattern: /^\/new-year\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
