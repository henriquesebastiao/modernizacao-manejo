<script lang="ts">
	export let disabled = false;
	export let type: 'button' | 'submit' | 'reset';
</script>

<div class:cursor-not-allowed={disabled}>
	<button {type} class={`btn variant-filled ${disabled && 'opacity-40 pointer-events-none'}`}>
		<slot />
	</button>
</div>
