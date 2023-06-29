<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChartExample from './Charts/ChartExample.svelte';
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start" in:fade>
	<div class="card shadow-2xl p-4 flex flex-col justify-between space-y-10 max-[700px]:w-full">
		<div>
			<h1 class="font-bold text-3xl">Relatório lote</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<ChartExample />
			</div>
			<div class="overflow-x-auto">
				<table>
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
		</div>
	</div>
</div>
