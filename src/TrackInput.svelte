<script>
	import { tracks } from "./stores";
	let trackName, trackKey;

	function addTrack() {
		tracks.update((prev) => [...prev, { trackName, trackKey }]);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 mx-auto">
	<input
		class="border border-solid border-gray-300 rounded-xl w-3/5 shadow p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-10"
		type="text"
		bind:value={trackName}
	/>
	<input
		class="border border-solid border-gray-300 rounded-xl w-1/5 shadow p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-10"
		type="text"
		bind:value={trackKey}
	/>
	<button
		class="border-2 border-solid border-indigo-500 hover:bg-indigo-100 rounded-xl h-10 w-10"
		on:click={addTrack}
		><i class="text-indigo-500 text-lg ri-add-line" /></button
	>
</div>

<style>
</style>
