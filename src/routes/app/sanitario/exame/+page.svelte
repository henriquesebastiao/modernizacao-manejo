<script lang="ts">
	import Exame from '../components/Exame.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-full overflow-scroll overflow-x-hidden px-4 py-4">
		<Exame />
	</div>
</div>
