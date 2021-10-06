<script>
	import { tracks } from "./stores";
	import KeyDropdown from "./KeyDropdown.svelte";
	let trackName, trackKey;

	function addTrack() {
		tracks.update((prev) => [...prev, { trackName, trackKey }]);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 mx-auto">
	<input
		class="border border-solid border-gray-300 rounded-xl flex-grow shadow p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-10"
		type="text"
		bind:value={trackName}
	/>
	<KeyDropdown {trackKey} />
	<button
		class="border-2 border-solid border-indigo-500 hover:bg-indigo-100 rounded-xl flex-none h-10 w-10"
		on:click={addTrack}
		><i class="text-indigo-500 text-lg ri-add-line" /></button
	>
</div>

<style>
</style>
