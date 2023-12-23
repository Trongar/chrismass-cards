export async function load({
	params,
}: {
	params: {
		[key: string]: string
	}
}) {
	const { hash } = params
	return { hash }
}
export const ssr = false
