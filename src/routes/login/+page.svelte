<script lang="ts">
    import {focusTrap} from "@skeletonlabs/skeleton";

    let isFocused = true;
</script>

<main class="container h-full mx-auto flex justify-center items-center">
    <div class="card rounded-lg p-8">
        <form use:focusTrap={isFocused}>
            <div class="mb-4">
                <label for="email" class="label block mb-2">
                    <i class="pr-0.5 fa-regular fa-envelope"></i>
                    <span>Email:</span>
                </label>
                <input type="email" id="email" name="email" class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="mb-4">
                <label for="password" class="label block mb-2">
                    <i class="pr-0.5 fa-solid fa-lock"></i>
                    <span>Senha:</span>
                </label>
                <input type="password" id="password" name="password" class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="flex items-center justify-center" >
            <button type="submit" class="btn">Entrar</button>
            </div>
        </form>
    </div>
</main>