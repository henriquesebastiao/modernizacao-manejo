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
          console.log(sourceData)
      })
      .catch(error => {
          console.error('Erro ao obter os cargos:', error);
      });

    const tableSimple: TableSource = {
        head: ['ID', 'Nome'],
        body: tableMapperValues(sourceData, ['id', 'nome']),
        meta: tableMapperValues(sourceData, ['nome', 'id']),
        foot: ['Total', '<code class="code">5</code>']
    };

</script>
<main class=".table-container">
    <Table source={tableSimple}/>
</main>