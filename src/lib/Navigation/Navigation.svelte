<script lang="ts">
    import {drawerStore} from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav>
	<div class="max-lg:flex max-lg:justify-start max-lg:items-start max-lg:flex-col max-lg:space-y-4 max-lg:mt-4 max-lg:ml-1">
		<button><a class="btn btn-sm" href="/" on:click={drawerClose}>INÍCIO</a></button>
		<button><a class="btn btn-sm" href="/about" on:click={drawerClose}>SOBRE</a></button>
		<button><a class="btn btn-sm" href="/" on:click={drawerClose}>BLOG</a></button>
		<button><a class="btn btn-sm" href="/pricing" on:click={drawerClose}>PLANOS</a></button>
		<button><a class="btn btn-sm" href="/support" on:click={drawerClose}>SUPORTE</a></button>
	</div>
</nav>
