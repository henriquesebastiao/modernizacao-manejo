<script lang="ts">
    import {focusTrap, ToastSettings, toastStore} from "@skeletonlabs/skeleton";
    import type {UsuarioLoginSchema} from "../../client";
    import {OpenAPI, UserService} from "../../client";
    import {goto} from "$app/navigation";

    OpenAPI.BASE = 'http://localhost:8000';

    let isFocused = true;

    let userLogin: UsuarioLoginSchema = {
        email: '',
        password: ''
    }

    const t: ToastSettings = {
        message: 'Login efetuado com sucesso!',
    };
    const e: ToastSettings = {
        message: 'Erro ao efetuar login!',
        background: 'bg-warning-600',
    };

    function handleSubmit(event: Event) {
        event.preventDefault();

        UserService.loginUserLoginPost(userLogin).then(() => {
            toastStore.trigger(t);
            goto('/');
        }).catch((err) => {
            console.log(err);
            toastStore.trigger(e);
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
                <input type="email" bind:value={userLogin.email} id="email" name="email"
                       class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="mb-4">
                <label for="password" class="label block mb-2">
                    <i class="pr-0.5 fa-solid fa-lock"></i>
                    <span>Senha:</span>
                </label>
                <input type="password" bind:value={userLogin.password} id="password" name="password"
                       class="input w-full px-4 py-2 border rounded">
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" class="btn">Entrar</button>
            </div>
        </form>
    </div>
</main>