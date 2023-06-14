<script>
    import {AppRail, AppRailAnchor, AppRailTile} from "@skeletonlabs/skeleton";

    let currentTile = 0;
</script>

<div>
    <AppRail width="w-[8%]">
        <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-gauge"></i>
            </svelte:fragment>
            <span>Relatório</span>
        </AppRailTile>

        <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-syringe"></i>
            </svelte:fragment>
            <span>Manejo</span>
        </AppRailTile>

        <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-sliders"></i>
            </svelte:fragment>
            <span>Planos</span>
        </AppRailTile>

        <AppRailTile bind:group={currentTile} name="tile-4" value={3} title="tile-4">
            <svelte:fragment slot="lead">
                <i class="fa-solid fa-gear"></i>
            </svelte:fragment>
            <span>Configurações</span>
        </AppRailTile>
    </AppRail>

</div>