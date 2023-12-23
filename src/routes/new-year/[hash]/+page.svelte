<script lang="ts">
	import { firebaseDb } from '@lib/utils/firebase'
	import { onValue, ref } from 'firebase/database'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import Presentation from '@lib/components/presentation.svelte'
	import Slide from '@lib/components/slide.svelte'

	type firebaseData = {
		email: string
		name: string
		sound: string
	}

	const hash = $page.params.hash

	let person: firebaseData = {
		email: '',
		name: '',
		sound: '',
	}
	onMount(() => {
		const slideRef = ref(firebaseDb, `usersRegistered/${hash}`)

		onValue(slideRef, (snapshot) => {
			const data: firebaseData = snapshot.val()
			if (data) {
				person = data
			}
		})
	})
</script>

<Presentation>
	<Slide animate>
		<p class="font-bold text-8xl">Feliz año nuevo {person.name}!</p>
	</Slide>
	<Slide
		video="https://download-video.akamaized.net/v3-1/download/5151fb41-6bd9-4d60-8658-41d1783c18a8/ebd0bd5b/cGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ?__token__=st=1703274690~exp=1703361210~acl=%2Fv3-1%2Fdownload%2F5151fb41-6bd9-4d60-8658-41d1783c18a8%2Febd0bd5b%2FcGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ%2A~hmac=3a449497b3d75480a4d28f6678939e7711ab5e778a3f93276ed8f76f447a3bed&r=dXMtZWFzdDE%3D"
		animate
	>
		<p class="font-bold text-8xl">Esperamos que hayas tenido un muy buen año</p>
	</Slide>

	<Slide>
		<p class="font-bold text-8xl">Y que este año sea aún mejor</p>
	</Slide>
</Presentation>
