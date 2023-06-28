<script lang="ts">
    import Outro from "../components/Outro.svelte";
    import {fade} from "svelte/transition";
</script>

<div in:fade class="w-full h-full flex">
    <div class="w-full overflow-scroll overflow-x-hidden px-4 py-4">
        <Outro />
    </div>
</div>