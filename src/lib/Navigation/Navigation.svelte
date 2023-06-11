<script lang="ts">
    import {drawerStore} from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav>
	<span>
		<a class="btn btn-sm" href="/">INÍCIO</a>
		<a class="btn btn-sm" href="/sobre">SOBRE</a>
		<a class="btn btn-sm" href="/">BLOG</a>
		<a class="btn btn-sm" href="/">PLANOS</a>
		<a class="btn btn-sm" href="/">SUPORTE</a>
	</span>
</nav>