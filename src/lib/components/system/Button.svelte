<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let disabled = false;
	export let type: 'button' | 'submit' | 'reset';
</script>

<div class:cursor-not-allowed={disabled}>
	<button
		{type}
		class={`btn variant-filled ${disabled && 'opacity-40 pointer-events-none'}`}
		on:click={() => dispatch('click')}
	>
		<slot />
	</button>
</div>
