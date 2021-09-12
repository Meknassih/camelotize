<script>
	import TrackInput from "./TrackInput.svelte";
	import Track from "./Track.svelte";
	import { solutions } from "./stores";
</script>

<div class="container rounded-2xl bg-indigo-50">
	<div class="grid grid-cols-1 mx-auto divide-y divide-indigo-200">
		{#each $solutions as solution}
			<div
				class="flex flex-1 flex-col flex-nowrap gap-4 mx-4 md:mx-8 py-8"
			>
				{#each solution as track}
					<Track {...track} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
</style>
