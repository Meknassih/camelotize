<script>
	import { tracks } from "./stores";
	let trackName, trackKey;

	function addTrack() {
		tracks.update((prev) => [...prev, { trackName, trackKey }]);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 mx-auto">
	<input
		class="border border-solid border-gray-300 rounded-md w-3/5 shadow p-2"
		type="text"
		bind:value={trackName}
	/>
	<input
		class="border border-solid border-gray-300 rounded-md w-1/5 shadow p-2"
		type="text"
		bind:value={trackKey}
	/>
	<button
		class="border border-solid border-gray-300 rounded-md w-auto  p-2 shadow"
		on:click={addTrack}>+</button
	>
</div>

<style>
</style>
