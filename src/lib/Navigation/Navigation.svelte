<script lang="ts">
    import {drawerStore} from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav>
	<span>
		<a class="btn btn-sm" href="/" on:click={drawerClose}>INÍCIO</a>
		<a class="btn btn-sm" href="/about" on:click={drawerClose}>SOBRE</a>
		<a class="btn btn-sm" href="/" on:click={drawerClose}>BLOG</a>
		<a class="btn btn-sm" href="/pricing" on:click={drawerClose}>PLANOS</a>
		<a class="btn btn-sm" href="/" on:click={drawerClose}>SUPORTE</a>
	</span>
</nav>