<script>
	import { tracks } from "./stores";
	import KeyDropdown from "./KeyDropdown.svelte";
	export let trackName,
		trackKey,
		hasDeleteButton = true;

	function removeTrack() {
		tracks.update((prev) =>
			prev.filter((element) => element.trackName != trackName)
		);
	}
</script>

<div class="flex flex-1 flex-row flex-nowrap gap-4 w-full">
	<input
		disabled
		size="0"
		class="border border-solid border-gray-300 rounded-xl flex-1 p-2 w-full shadow"
		type="text"
		bind:value={trackName}
	/>
	<KeyDropdown {trackKey} disabled={true} />
	{#if hasDeleteButton}
		<button
			class="hover:bg-pink-100 rounded-full flex-shrink h-10 w-10"
			on:click={removeTrack}
			><i class="text-pink-500 text-lg ri-delete-bin-7-line" /></button
		>{/if}
</div>

<style>
</style>
