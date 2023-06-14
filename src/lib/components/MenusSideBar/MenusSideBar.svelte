<script lang="ts">
    import { page } from '$app/stores';

    import {AppRail, AppRailTile, drawerStore} from "@skeletonlabs/skeleton";
    import { menuNavLinks} from "$lib/links.ts";

    // Local
    let currentRailCategory: keyof typeof menuNavLinks | undefined;

    // Lifecycle
    page.subscribe((page) => {
        // ex: /basePath/...
        let basePath: string = page.url.pathname.split('/')[1];
        if (!basePath) return;
        // Translate base path to link section
        if (['relatorios'].includes(basePath)) currentRailCategory = '/relatorios';
        if (['manejo'].includes(basePath)) currentRailCategory = '/manejo';
        if (['animais'].includes(basePath)) currentRailCategory = '/animais';
    });

    // Reactive
    $: submenu = menuNavLinks[currentRailCategory ?? '/relatorios'];
    $: listBoxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');

    //Icons
    let icons = {
        relatorio_geral: 'fa-chart-line',
        relatorio_lote: 'fa-tree',
        vacinacao: 'fa-syringe',
        pesagem: 'fa-weight',
        animais: 'fa-cow',
        add: 'fa-plus',
        utilities: 'fa-gear',
    }

    function getIcons(icon: string) {
        // Arrumar um jeito mais bonito de fazer isso, mas tá funcionando
        const map = {
            "â": "a",
            "Â": "A",
            "à": "a",
            "À": "A",
            "á": "a",
            "Á": "A",
            "ã": "a",
            "Ã": "A",
            "ê": "e",
            "Ê": "E",
            "è": "e",
            "È": "E",
            "é": "e",
            "É": "E",
            "î": "i",
            "Î": "I",
            "ì": "i",
            "Ì": "I",
            "í": "i",
            "Í": "I",
            "õ": "o",
            "Õ": "O",
            "ô": "o",
            "Ô": "O",
            "ò": "o",
            "Ò": "O",
            "ó": "o",
            "Ó": "O",
            "ü": "u",
            "Ü": "U",
            "û": "u",
            "Û": "U",
            "ú": "u",
            "Ú": "U",
            "ù": "u",
            "Ù": "U",
            "ç": "c",
            "Ç": "C"
        };
        const re = " "
        let icon_return = icon.replace(/[\W\\[\] ]/g, function(a) {
            return map[a] || a
        }).toLowerCase().replace(re, "_");

        return icons[icon_return];
    }
</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">

    <!-- App Rail -->
    <AppRail background="bg-transparent" border="border-r border-surface-500/30">
        <AppRailTile bind:group={currentRailCategory} name="relatorios" value={'/relatorios'}>
            <svelte:fragment slot="lead"><i class="fa-solid fa-gauge text-2xl"></i></svelte:fragment>
            <span>Relatórios</span>
        </AppRailTile>

        <hr class="opacity-30" />

        <AppRailTile bind:group={currentRailCategory} name="manejo" value={'/manejo'}>
            <svelte:fragment slot="lead"><i class="fa-solid fa-syringe text-2xl"></i></svelte:fragment>
            <span>Manejo</span>
        </AppRailTile>

        <hr class="opacity-30" />

        <AppRailTile bind:group={currentRailCategory} name="animais" value={'/animais'}>
            <svelte:fragment slot="lead"><i class="fa-solid fa-cow text-2xl"></i></svelte:fragment>
            <span>Animais</span>
        </AppRailTile>

        <hr class="opacity-30" />

        <AppRailTile bind:group={currentRailCategory} name="add" value={'/add'}>
            <svelte:fragment slot="lead"><i class="fa-solid fa-plus text-2xl"></i></svelte:fragment>
            <span>Adicionar</span>
        </AppRailTile>

        <hr class="opacity-30" />

        <AppRailTile slot="trail" bind:group={currentRailCategory} name="utilities" value={'/utilities'}>
            <svelte:fragment slot="lead"><i class="fa-solid fa-gear text-2xl"></i></svelte:fragment>
            <span>Ajustes</span>
        </AppRailTile>
    </AppRail>

    <!-- Nav Links -->
    <section class="p-4 pb-20 space-y-4 overflow-y-auto">
        {#each submenu as segment, i}
            <!-- Title -->
            <p class="font-bold pl-4 text-2xl">{segment.title}</p>
            <!-- Nav List -->
            <nav class="list-nav">
                <ul>
                    {#each segment.list as { href, label, badge }}
                        <li on:keypress on:click={drawerStore.close}>
                            <a {href} class={listBoxItemActive(href)} data-sveltekit-preload-data="hover">
                                <span class="flex-auto">
                                    <!-- Ícone obtido com função -->
                                    <span class="mr-1.5"><i class="fa-solid {getIcons(label)}"></i></span>
                                    {label}
                                </span>
                                {#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
            <!-- Divider -->
            {#if i + 1 < submenu.length}<hr class="!my-6 opacity-50" />{/if}
        {/each}
    </section>
</div>