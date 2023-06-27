<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChartExample from './Charts/ChartExample.svelte';
	import { onMount } from 'svelte';
	import type { AnimalSchema } from '../../../../client';
	import { AnimalService } from '../../../../client';

	let animals: AnimalSchema[] = [];

	onMount(async () => {
		animals = await AnimalService.animalGetAll();
	});
</script>

<div class="flex flex-col" in:fade>
	<h1 class="font-bold text-3xl">Relatório geral</h1>
	<div class="mt-10 flex space-x-6">
		<div class="w-[550px] card shadow-2xl">
			<ChartExample />
		</div>
	</div>
</div>

<div class="overflow-x-auto">
	<table class="card table-auto shadow-2xl mt-10">
		<thead>
			<tr>
				<th class="px-4 py-2 border-gray-400 border">tag</th>
				<th class="px-4 py-2 border-gray-400 border">sisbov</th>
				<th class="px-4 py-2 border-gray-400 border">gender</th>
				<th class="px-4 py-2 border-gray-400 border">mother_id</th>
				<th class="px-4 py-2 border-gray-400 border">father_id</th>
				<th class="px-4 py-2 border-gray-400 border">data</th>
			</tr>
		</thead>
		<tbody>
			{#each animals as animal}
				<tr>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.tag}</td>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.sisbov}</td>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.gender}</td>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.mother_id}</td>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.father_id}</td>
					<td class="border-gray-400 border px-4 py-2 max-w-xs">{animal.birth_date}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
