<script>
    import { onMount } from 'svelte';

    let data = {}
    onMount(async () => {
        try {
            const response = await fetch('http://localhost:8000/animal');
            data = await response.json();
        } catch (error) {
            console.error(error);
        }
    });

</script>
<main>
    {#if Object.keys(data).length > 0}
        <ul>
            {#each Object.entries(data) as [key, value]}
                <li>{value.id}</li>
                <li>{value.id_mae}</li>
            {/each}
        </ul>
    {:else}
        <p>Carregando...</p>
    {/if}
</main>