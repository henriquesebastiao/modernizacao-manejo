<script lang="ts">
    import {AppBar, Drawer, drawerStore, LightSwitch} from "@skeletonlabs/skeleton";
    import Navigation from "$lib/Navigation/Navigation.svelte";

    function drawerOpen(): void {
        drawerStore.open({});
    }

</script>

<Drawer>
    <h2 class="p-4">Navigation</h2>
    <hr/>
    <Navigation/>
</Drawer>

<AppBar>
    <svelte:fragment slot="lead">
        <div class="flex items-center">
            <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20"/>
								<rect y="30" width="100" height="20"/>
								<rect y="60" width="100" height="20"/>
							</svg>
						</span>
            </button>
            <button class="btn btn-sm mr-4">
						<span>
                            <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                              <circle cx="50" cy="40" r="35" fill="#000000"/>
                              <circle cx="40" cy="30" r="7" fill="#FFFFFF"/>
                              <circle cx="60" cy="30" r="7" fill="#FFFFFF"/>
                              <path d="M30 50 L70 50 Q70 70 50 70 Q30 70 30 50 Z" fill="#000000"/>
                            </svg>
						</span>
            </button>
            <strong class="text-xl uppercase">Skeleton</strong>
        </div>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <a class="btn btn-sm" href="/">Home</a>
        <LightSwitch />
    </svelte:fragment>
</AppBar>