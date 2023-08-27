<script lang="ts">
	import { fade } from 'svelte/transition';
	import RelatorioLote from '../components/RelatorioLote.svelte';
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-full overflow-scroll overflow-x-hidden px-4 py-4">
		<RelatorioLote />
	</div>
</div>
