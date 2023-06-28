<script lang="ts">
	import { focusTrap, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { UserService } from '../../client';
	import type { UserCreate } from '../../client';
	import { fade } from 'svelte/transition';

	let isFocused = true;

	let user: UserCreate = {
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	};

	const t: ToastSettings = {
		message: 'Usuário criado com sucesso!'
	};

	const e: ToastSettings = {
		message: 'Erro ao criar usuário!',
		background: 'bg-red-600'
	};

	function userRegister(event: Event) {
		event.preventDefault();

		UserService.userCreate(user)
			.then((response) => {
				console.log(response);
				toastStore.trigger(t);
			})
			.catch((error) => {
				console.log(error);
				toastStore.trigger(e);
			});
	}
</script>

<main class="w-full h-full mx-auto flex justify-center items-center" in:fade>
	<div class="card w-[600px] shadow-2xl p-4 mx-4">
		<form use:focusTrap={isFocused} on:submit={userRegister}>
			<div class="flex flex-row justify-center">
				<div class="mx-4 mb-4 w-full">
					<label class="label mb-2">
						<i class="pr-0.5 fa-solid fa-user" />
						<span>Nome:</span>
						<input
							type="text"
							name="name"
							class="input px-4 py-2 border rounded"
							placeholder="Digite seu nome"
							bind:value={user.first_name}
						/>
					</label>
				</div>
				<div class="mx-4 mb-4 w-full">
					<label class="label mb-2">
						<i class="pr-0.5 fa-solid fa-user" />
						<span>Sobrenome:</span>
						<input
							type="text"
							name="name"
							class="input px-4 py-2 border rounded"
							placeholder="Digite seu sobrenome"
							bind:value={user.last_name}
						/>
					</label>
				</div>
			</div>
			<div class="flex flex-row justify-center gap-6">
				<div class="mx-4 mb-4 w-full">
					<label class="label block mb-2">
						<i class="fa-solid fa-at" />
						<span>E-mail:</span>
						<input
							type="email"
							name="email"
							class="input w-full px-4 py-2 border rounded"
							placeholder="Digite seu e-mail"
							bind:value={user.email}
						/>
					</label>
				</div>
				<div class="mx-4 mb-4 w-full">
					<label class="label block mb-2">
						<i class="fa-solid fa-key" />
						<span>Senha:</span>
						<input
							type="password"
							name="password"
							class="input w-full px-4 py-2 border rounded"
							placeholder="Digite sua senha"
							bind:value={user.password}
						/>
					</label>
				</div>
			</div>
			<div class="py-2 text-center font-semibold">
				<button class="btn variant-filled-primary" type="submit">Cadastrar</button>
			</div>
		</form>
	</div>
</main>
