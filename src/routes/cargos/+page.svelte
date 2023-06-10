<script lang="ts">
    import type {TableSource} from '@skeletonlabs/skeleton';
    import {Table, tableMapperValues} from '@skeletonlabs/skeleton';

    import {onMount} from 'svelte';
    import { CargoService, OpenAPI} from '../../client'

    OpenAPI.BASE = 'http://localhost:8000';

    let sourceData = [];

    CargoService.getAllCargosCargoGet()
      .then(response => {
          sourceData = response;
          console.log(sourceData);
      })
      .catch(error => {
          console.error('Erro ao obter os cargos:', error);
      });

    let tableSimple: TableSource = {
        head: ['ID', 'Nome'],
        body: [],
        meta: [],
        foot: ['Total', '<code class="code">5</code>']
    };

    $: {
        tableSimple.body = tableMapperValues(sourceData, ['id', 'nome']);
        tableSimple.meta = tableMapperValues(sourceData, ['nome', 'id']);
    }

    onMount(() => {
        tableSimple.body = tableMapperValues(sourceData, ['id', 'nome']);
        tableSimple.meta = tableMapperValues(sourceData, ['nome', 'id']);
    });
</script>

<main class=".table-container">
    {#if sourceData.length > 0}
        <Table source={tableSimple}/>
    {:else}
        <p>Aguardando dados...</p>
    {/if}
</main>
