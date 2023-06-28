<script lang="ts">
	import Button from '$lib/components/system/Button.svelte';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { focusTrap, ProgressRadial, toastStore } from '@skeletonlabs/skeleton';
	import type { Body_Token_login_for_access_token, Token } from '../../client';
	import { TokenService } from '../../client';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { user } from '../../store';
	import { onMount } from 'svelte';

	let isFocused = true;
	let loading = false;

	let userLogin: Body_Token_login_for_access_token = {
		username: '',
		password: ''
	};

	$: disabled = !userLogin.username || !userLogin.password;

	const t: ToastSettings = {
		message: 'Login efetuado com sucesso!'
	};

	const e: ToastSettings = {
		message: 'Erro ao efetuar login!',
		background: 'bg-warning-600'
	};

	let token: Token;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		loading = true;

		try {
			token = await TokenService.tokenLoginForAccessToken(userLogin);
			toastStore.trigger(t);
			localStorage.setItem('isLoggedIn', 'true');
			localStorage.setItem('token', token.access_token);
			$user.isLoggedIn = true;
			await goto('/app/relatorios');
		} catch (err) {
			console.log(err);
			toastStore.trigger(e);
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		if ($user.isLoggedIn || localStorage.getItem('isLoggedIn')) {
			goto('/app/relatorios');
		}
	});
</script>

<main class="container h-full mx-auto flex justify-center items-center" in:fade>
	{#if loading}
		<div class="flex items-center justify-center flex-col space-y-6">
			<h1 class="font-bold text-2xl">Carregando...</h1>
			<ProgressRadial width="w-24" value={undefined} />
		</div>
	{:else}
		<div class="card rounded-lg p-8">
			<form on:submit={handleSubmit} use:focusTrap={isFocused}>
				<div class="mb-4">
					<label for="email" class="label block mb-2">
						<i class="pr-0.5 fa-regular fa-envelope" />
						<span>Email:</span>
					</label>
					<input
						type="email"
						bind:value={userLogin.username}
						id="email"
						name="email"
						class="input w-full px-4 py-2 border rounded"
					/>
				</div>
				<div class="mb-4">
					<label for="password" class="label block mb-2">
						<i class="pr-0.5 fa-solid fa-lock" />
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
					<Button type="submit" {disabled}>Entrar</Button>
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
	{/if}
</main>
