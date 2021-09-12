<script>
	import TrackInput from "./TrackInput.svelte";
	import Track from "./Track.svelte";
	import { tracks } from "./stores";
</script>

<div class="container flex flex-1 flex-col flex-nowrap gap-4">
	{#each $tracks as track}
		<Track {...track} />
	{/each}
	<TrackInput />
</div>

<style>
</style>
