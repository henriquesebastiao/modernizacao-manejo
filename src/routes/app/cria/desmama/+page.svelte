<script lang="ts">
    import Desmama from "../components/Desmama.svelte";
    import {fade} from "svelte/transition";
</script>

<div in:fade class="w-full h-full flex">
    <div class="w-full overflow-scroll overflow-x-hidden px-4 py-4">
        <Desmama />
    </div>
</div>