<script>
	import { tracks } from "./stores";
	import KeyDropdown from "./KeyDropdown.svelte";
	let trackName, trackKey;

	function addTrack() {
		tracks.update((prev) => [...prev, { trackName, trackKey }]);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 w-full">
	<input
		class="border border-solid border-gray-300 rounded-xl flex-1 shadow p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-10 w-full"
		type="text"
		bind:value={trackName}
	/>
	<KeyDropdown {trackKey} />
	<button
		class="hover:bg-indigo-100 rounded-full flex-shrink h-10 w-10"
		on:click={addTrack}
		><i class="text-indigo-500 text-lg ri-add-line" /></button
	>
</div>

<style>
</style>
