<script>
	import { focusTrap, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

	let isFocused = true;
	let justify = 0;
</script>

<main class="container h-full mx-auto flex justify-center items-center" in:fade>
	<div>
		<form use:focusTrap={isFocused}>
			<div class="flex flex-col justify-center items-center mb-10">
				<div class="mb-4">
					<span>Como pretende usar a plataforma?</span>
				</div>
				<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
					<RadioItem bind:group={justify} name="justify" value={1}>
						<i class="fa-solid fa-user"></i>
						<span>Produtor</span>
					</RadioItem>

					<RadioItem bind:group={justify} name="justify" value={2}>
						<i class="fa-solid fa-user-group"></i>
						<span>Consultor</span>
					</RadioItem>
				</RadioGroup>
			</div>
			<div class="flex flex-row">
				<!-- Nome Completo -->
				<div class="mb-4 mr-5">
					<label class="label block mb-2">
						<i class="pr-0.5 fa-solid fa-user"></i>
						<span>Nome completo:</span>
					</label>
					<input
						type="text"
						name="name"
						class="input w-full px-4 py-2 border rounded"
						placeholder="Digite seu nome completo"
					/>
				</div>

				<!-- Email -->
				<div class="mb-4">
					<label class="label block mb-2">
						<i class="fa-solid fa-at"></i>
						<span>E-mail:</span>
					</label>
					<input
						type="email"
						name="email"
						class="input w-full px-4 py-2 border rounded"
						placeholder="Digite seu e-mail"
					/>
				</div>
			</div>

			<div class="flex flex-row">
				<!-- Telefone -->
				<div class="mb-4 mr-5">
					<label class="label block mb-2">
						<i class="fa-solid fa-phone"></i>
						<span>Telefone:</span>
					</label>
					<input
						type="tel"
						name="phone"
						class="input w-full px-4 py-2 border rounded"
						placeholder="(00) 00000-0000"
						pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
					/>
				</div>

				<!-- Senha -->
				<div class="mb-4">
					<label class="label block mb-2">
						<i class="fa-solid fa-key"></i>
						<span>Senha:</span>
					</label>
					<input
						type="password"
						name="password"
						class="input w-full px-4 py-2 border rounded"
						placeholder="Digite sua senha"
					/>
				</div>
			</div>

			<!-- Botão -->
			<div class="flex items-center justify-center mt-9">
				<button type="submit" class="btn variant-filled gap-4">
					<span>Avançar</span>
					<i class="fa-solid fa-arrow-right-long"></i>
				</button>
			</div>
		</form>
	</div>
</main>