<script>
	// @ts-nocheck

	import Chart from 'svelte-frappe-charts';
	import Button from '$lib/components/system/Button.svelte';

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9]
			}
		]
	};

	let chartRef;

	const onExport = () => {
		chartRef.exportChart();
	};
</script>

<div>
	<Chart {data} colors={['#ffffff', '#013b20']} type="pie" bind:this={chartRef} />
	<div class="flex items-end justify-end m-3">
		<Button on:click={onExport}>Baixar gráfico</Button>
	</div>
</div>
