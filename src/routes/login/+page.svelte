<script lang="ts">
	import { focusTrap, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import type { UsuarioLoginSchema } from '../../client';
	import { OpenAPI, UserService } from '../../client';
	import { goto } from '$app/navigation';

	OpenAPI.BASE = 'https://api.henriquesebastiao.com';

	let isFocused = true;

	let userLogin: UsuarioLoginSchema = {
		email: '',
		password: ''
	};

	const t: ToastSettings = {
		message: 'Login efetuado com sucesso!'
	};
	const e: ToastSettings = {
		message: 'Erro ao efetuar login!',
		background: 'bg-warning-600'
	};

	function handleSubmit(event: Event) {
		event.preventDefault();

		UserService.loginUserLoginPost(userLogin)
			.then(() => {
				toastStore.trigger(t);
				goto('/');
			})
			.catch((err) => {
				console.log(err);
				toastStore.trigger(e);
			});
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
				<input
					type="email"
					bind:value={userLogin.email}
					id="email"
					name="email"
					class="input w-full px-4 py-2 border rounded"
				/>
			</div>
			<div class="mb-4">
				<label for="password" class="label block mb-2">
					<i class="pr-0.5 fa-solid fa-lock"></i>
					<span>Senha:</span>
				</label>
				<input
					type="password"
					bind:value={userLogin.password}
					id="password"
					name="password"
					class="input w-full px-4 py-2 border rounded"
				/>
			</div>
			<div class="flex items-center justify-center mt-9">
				<button type="submit" class="btn variant-filled">Entrar</button>
			</div>
		</form>
		<div class="w-full flex items-center justify-center mt-7">
			<button on:click={() => goto('/register')}>
				<p class="text-xs underline opacity-50 hover:opacity-100 transition-all">
					Não possui uma conta? clique aqui para registrar.
				</p>
			</button>
		</div>
	</div>
</main>
