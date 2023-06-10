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
        foot: ['Total', '']
    };

    $: {
        tableSimple.body = tableMapperValues(sourceData, ['id', 'nome']);
        tableSimple["foot"][1] = `<code class="code">${sourceData.length}</code>`;
    }

    onMount(() => {
        tableSimple.body = tableMapperValues(sourceData, ['id', 'nome']);
        tableSimple["foot"][1] = `<code class="code">${sourceData.length}</code>`;
    });
</script>

{#if sourceData.length > 0}
    <Table source={tableSimple}/>
{:else}
    <p>Aguardando dados...</p>
{/if}
