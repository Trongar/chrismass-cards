<script lang="ts">
	import { Presentation, Slide } from '@components'
	import { onValue, ref } from 'firebase/database'
	import { onMount } from 'svelte'
	import { firebaseDb } from '@lib/utils/firebase'
	type firebaseData = {
		[key: string]: {
			email: string
			name: string
			sound: string
		}
	}
	type firebaseDataReg = Array<firebaseData[keyof firebaseData]>

	let people: firebaseDataReg = []

	let peopleCount = 0
	const audioPlayer = new Audio()

	const runAnnouncer = (sound: string) => {
		audioPlayer.pause()
		audioPlayer.src = sound
		audioPlayer.play()
	}

	// Escuchar cambios en el valor de la slide actual en Firebase
	onMount(() => {
		const slideRef = ref(firebaseDb, 'usersRegistered')

		onValue(slideRef, (snapshot) => {
			const data: firebaseData = snapshot.val()
			if (data) {
				people = Object.values(data)
				peopleCount = people.length
			}
		})
	})
</script>

{#if !(peopleCount > 0)}
	<Presentation>
		<Slide animate>
			<p class="font-bold text-8xl">No hay nadie en la sala</p>
		</Slide>
	</Presentation>
{:else}
	<Presentation>
		<Slide animate>
			<p class="font-bold text-8xl">Listo!</p>
		</Slide>
		{#each people as person}
			<Slide
				video="https://download-video.akamaized.net/v3-1/download/5151fb41-6bd9-4d60-8658-41d1783c18a8/ebd0bd5b/cGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ?__token__=st=1703274690~exp=1703361210~acl=%2Fv3-1%2Fdownload%2F5151fb41-6bd9-4d60-8658-41d1783c18a8%2Febd0bd5b%2FcGV4ZWxzLW1hdGhldXMtZGUtbW9yYWVzLWd1Z2VsbWltLTE1NzEzMzQwICg3MjBwKS5tcDQ%2A~hmac=3a449497b3d75480a4d28f6678939e7711ab5e778a3f93276ed8f76f447a3bed&r=dXMtZWFzdDE%3D"
				animate
				on:in={() => runAnnouncer(person.sound)}
			>
				<p class="font-bold text-8xl">Bienvenido {person.name}</p>
			</Slide>
		{/each}
	</Presentation>
{/if}
