<script>
	import Head from "./Head.svelte";
	import Tracklist from "./Tracklist.svelte";
	import { tracks, solutions } from "./stores";
	import SolutionTracklist from "./SolutionTracklist.svelte";
	import Hero from "./Hero.svelte";

	function findSolutions() {
		fetch(
			"https://europe-west3-studier-75345.cloudfunctions.net/camelotize-all",
			{
				body: JSON.stringify(
					$tracks.map((element) => ({
						name: element.trackName,
						key: element.trackKey,
					}))
				),
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				method: "post",
			}
		).then((response) => {
			if (response.status == 200) {
				response.json().then((solutionsParsed) => {
					const solutionsTransformed = solutionsParsed.map(
						(element) =>
							element.map((subelement) => ({
								trackName: subelement.name,
								trackKey: subelement.key,
							}))
					);
					console.log(solutionsTransformed);
					solutions.set(solutionsTransformed);
				});
			}
		});
	}
</script>

<main>
	<Head />
	<div class="grid grid-cols-1 justify-items-center m-4 md:m-12 gap-4">
		<Hero />
		<Tracklist />
		<div class="container flex justify-center m-8">
			<button
				class="border border-solid border-gray-300 rounded-md p-2 shadow"
				on:click={findSolutions}>Find solutions</button
			>
		</div>
		<SolutionTracklist />
	</div>
</main>

<style>
</style>
