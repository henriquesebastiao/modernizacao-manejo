<script lang="ts">
	import {
		focusTrap,
		toastStore,
		RadioGroup,
		RadioItem,
		Stepper,
		Step
	} from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { UserService } from '../../client';
	import type { UserSchema } from '../../client';
	import { fade } from 'svelte/transition';

	let isFocused = true;
	let justify = 0;

	let user: UserSchema = {
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

		UserService.createUserPost(user)
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
		<form use:focusTrap={isFocused}>
			<Stepper
				stepTerm="Passo"
				buttonBackLabel="← Voltar"
				buttonNextLabel="Próximo →"
				buttonCompleteLabel="Registrar"
				on:complete={userRegister}
			>
				<Step active>
					<svelte:fragment slot="header">Usuário</svelte:fragment>
					<div class="flex flex-col w-full">
						<div class="flex flex-col justify-center items-center mb-6">
							<div class="mb-2">
								<span>Como pretende usar a plataforma?</span>
							</div>
							<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
								<RadioItem bind:group={justify} name="justify" value={1}>
									<i class="fa-solid fa-user" />
									<span>Produtor</span>
								</RadioItem>

								<RadioItem bind:group={justify} name="justify" value={2}>
									<i class="fa-solid fa-user-group" />
									<span>Consultor</span>
								</RadioItem>
							</RadioGroup>
						</div>
						<div class="flex flex-row justify-center">
							<!-- Nome Completo -->
							<div class="mx-4 mb-4 w-full">
								<label class="label mb-2">
									<i class="pr-0.5 fa-solid fa-user" />
									<span>Nome completo:</span>
								</label>
								<input
									type="text"
									name="name"
									class="input px-4 py-2 border rounded"
									placeholder="Digite seu nome completo"
								/>
							</div>
						</div>

						<div class="flex flex-row justify-center gap-6">
							<!-- Email -->
							<div class="mb-4">
								<label class="label block mb-2">
									<i class="fa-solid fa-at" />
									<span>E-mail:</span>
								</label>
								<input
									type="email"
									name="email"
									class="input w-full px-4 py-2 border rounded"
									placeholder="Digite seu e-mail"
									bind:value={user.email}
								/>
							</div>

							<!-- Senha -->
							<div class="mb-4">
								<label class="label block mb-2">
									<i class="fa-solid fa-key" />
									<span>Senha:</span>
								</label>
								<input
									type="password"
									name="password"
									class="input w-full px-4 py-2 border rounded"
									placeholder="Digite sua senha"
									bind:value={user.password}
								/>
							</div>
						</div>
					</div>
				</Step>
				<Step>
					<svelte:fragment slot="header">Propriedade</svelte:fragment>
				</Step>
			</Stepper>
		</form>
	</div>
</main>
