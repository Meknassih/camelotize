<script>
	import { tracks } from "./stores";
	export let trackName,
		trackKey,
		hasDeleteButton = true;

	function removeTrack() {
		tracks.update((prev) =>
			prev.filter((element) => element.trackName != trackName)
		);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 mx-auto">
	<input
		disabled
		class="border border-solid border-gray-300 rounded-xl {hasDeleteButton
			? 'w-3/5'
			: 'w-4/5'} p-2 shadow"
		type="text"
		bind:value={trackName}
	/>
	<input
		disabled
		class="border border-solid border-gray-300 rounded-xl w-1/5 p-2 shadow"
		type="text"
		bind:value={trackKey}
	/>
	{#if hasDeleteButton}
		<button
			class="border-2 border-solid border-pink-500 hover:bg-pink-100 rounded-xl h-10 w-10"
			on:click={removeTrack}
			><i class="text-pink-500 text-lg ri-delete-bin-7-line" /></button
		>{/if}
</div>

<style>
</style>
