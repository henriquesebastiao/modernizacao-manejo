<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChartExample from './Charts/ChartExample.svelte';
</script>

<div class="flex flex-col" in:fade>
	<h1 class="font-bold text-3xl">Relatório lote</h1>
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
				<th class="px-4 py-2 border-gray-400 border">Product</th>
				<th class="px-4 py-2 border-gray-400 border">Price</th>
				<th class="px-4 py-2 border-gray-400 border">Stock</th>
				<th class="px-4 py-2 border-gray-400 border">Category</th>
				<th class="px-4 py-2 border-gray-400 border">Category</th>
				<th class="px-4 py-2 border-gray-400 border">Category</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="border-gray-400 border px-4 py-2">T-Shirt</td>
				<td class="border-gray-400 border px-4 py-2">$20</td>
				<td class="border-gray-400 border px-4 py-2">50</td>
				<td class="border-gray-400 border px-4 py-2">Clothing</td>
				<td class="border-gray-400 border px-4 py-2">Clothing</td>
				<td class="border-gray-400 border px-4 py-2">Clothing</td>
			</tr>
			<tr>
				<td class="border-gray-400 border px-4 py-2">Sneakers</td>
				<td class="border-gray-400 border px-4 py-2">$80</td>
				<td class="border-gray-400 border px-4 py-2">20</td>
				<td class="border-gray-400 border px-4 py-2">Footwear</td>
				<td class="border-gray-400 border px-4 py-2">Footwear</td>
				<td class="border-gray-400 border px-4 py-2">Footwear</td>
			</tr>
			<tr>
				<td class="border-gray-400 border px-4 py-2">Backpack</td>
				<td class="border-gray-400 border px-4 py-2">$50</td>
				<td class="border-gray-400 border px-4 py-2">30</td>
				<td class="border-gray-400 border px-4 py-2">Accessories</td>
				<td class="border-gray-400 border px-4 py-2">Accessories</td>
				<td class="border-gray-400 border px-4 py-2">Accessories</td>
			</tr>
		</tbody>
	</table>
</div>
