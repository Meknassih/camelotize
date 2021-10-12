<script>
	const keys = [
		{
			value: "1a",
			display: "1A (A♭m)",
		},
		{
			value: "2a",
			display: "2A (E♭m)",
		},
		{
			value: "3a",
			display: "3A (B♭m)",
		},
		{
			value: "4a",
			display: "4A (Fm)",
		},
		{
			value: "5a",
			display: "5A (Cm)",
		},
		{
			value: "6a",
			display: "6A (Gm)",
		},
		{
			value: "7a",
			display: "7A (Dm)",
		},
		{
			value: "8a",
			display: "8A (Am)",
		},
		{
			value: "9a",
			display: "9A (Em)",
		},
		{
			value: "10a",
			display: "10A (Bm)",
		},
		{
			value: "11a",
			display: "11A (F♯m)",
		},
		{
			value: "12a",
			display: "12A (D♭m)",
		},
		{
			value: "1b",
			display: "1B (B)",
		},
		{
			value: "2b",
			display: "2B (F♯)",
		},
		{
			value: "3b",
			display: "3B (D♭)",
		},
		{
			value: "4b",
			display: "4B (A♭)",
		},
		{
			value: "5b",
			display: "5B (E♭)",
		},
		{
			value: "6b",
			display: "6B (B♭)",
		},
		{
			value: "7b",
			display: "7B (F)",
		},
		{
			value: "8b",
			display: "8B (C)",
		},
		{
			value: "9b",
			display: "9B (G)",
		},
		{
			value: "10b",
			display: "10B (D)",
		},
		{
			value: "11b",
			display: "11B (A)",
		},
		{
			value: "12b",
			display: "12B (E)",
		},
	];
	export let trackKey = "1a",
		disabled = false;
</script>

<select
	name="trackKeyDropdown"
	bind:value={trackKey}
	{disabled}
	class="border border-solid border-gray-300 rounded-xl flex-grow-0 p-2 shadow"
>
	{#each keys as key}
		<option value={key.value}>{key.display}</option>
	{/each}
</select>

<style>
</style>
