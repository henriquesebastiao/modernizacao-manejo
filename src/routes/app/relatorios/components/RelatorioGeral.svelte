<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChartExample from './Charts/ChartExample.svelte';
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
				<th class="px-4 py-2 border-gray-400 border">Name</th>
				<th class="px-4 py-2 border-gray-400 border">Age</th>
				<th class="px-4 py-2 border-gray-400 border">Email</th>
				<th class="px-4 py-2 border-gray-400 border">Email</th>
				<th class="px-4 py-2 border-gray-400 border">Email</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">John Doe</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">32</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">johndoe@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">johndoe@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">johndoe@example.com</td>
			</tr>
			<tr>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">Jane Smith</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">28</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">janesmith@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">janesmith@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">janesmith@example.com</td>
			</tr>
			<tr>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">Bob Johnson</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">45</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">bobjohnson@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">bobjohnson@example.com</td>
				<td class="border-gray-400 border px-4 py-2 max-w-xs">bobjohnson@example.com</td>
			</tr>
		</tbody>
	</table>
</div>
