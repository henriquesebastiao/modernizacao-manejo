<script lang="ts">
    import {focusTrap} from "@skeletonlabs/skeleton";

    import type {UsuarioLoginSchema} from "../../client";
    import {OpenAPI, UsuRioService} from "../../client";
    import {goto} from "$app/navigation";

    OpenAPI.BASE = 'http://localhost:8000';

    let isFocused = true;

    let email = '';
    let password = '';

    function handleSubmit(event: Event) {
        event.preventDefault();

        const usuarioLogin: UsuarioLoginSchema = {
            email,
            password
        }
        UsuRioService.loginUsuarioLoginPost(usuarioLogin).then(() => {
            goto('/');
        }).catch((err) => {
            console.log(err);
        })
    }

</script>

<main class="container h-full mx-auto flex justify-center items-center">
    <div class="card rounded-lg p-8">
        <form on:submit={handleSubmit} use:focusTrap={isFocused}>
            <div class="mb-4">
                <label for="email" class="label block mb-2">
                    <i class="pr-0.5 fa-regular fa-envelope"></i>
                    <span>Email:</span>
                </label>
                <input type="email" bind:value={email} id="email" name="email"
                       class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="mb-4">
                <label for="password" class="label block mb-2">
                    <i class="pr-0.5 fa-solid fa-lock"></i>
                    <span>Senha:</span>
                </label>
                <input type="password" bind:value={password} id="password" name="password"
                       class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" class="btn">Entrar</button>
            </div>
        </form>
    </div>
</main>