<script lang="ts">
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
			await goto('/app/relatorios/relatorio_geral');
		} catch (err) {
			console.log(err);
			toastStore.trigger(e);
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		if ($user.isLoggedIn || localStorage.getItem('isLoggedIn')) {
			goto('/app/relatorios/relatorio_geral');
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
		<div
			class="card variant-glass-tertiary rounded-3xl flex my-16 mx-6 min-w-[35%] flex-col justify-center px-6 py-12 lg:px-8 shadow-xl"
		>
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<svg
					class="fill-token mx-auto h-10 w-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="500"
					viewBox="0 0 375 374.999991"
					height="500"
					preserveAspectRatio="xMidYMid meet"
					><path
						class="bg-surface-50"
						d="M 367.46875 120.425781 C 366.039062 118.246094 363.613281 116.9375 361.003906 116.875 L 313.195312 116.5 C 334.707031 97.511719 340.984375 56.289062 337.9375 30.015625 C 337.566406 27.089844 335.578125 24.535156 332.78125 23.539062 C 329.980469 22.542969 326.875 23.226562 324.699219 25.34375 C 321.777344 28.210938 318.667969 31.386719 315.433594 34.683594 C 295.667969 54.796875 271.109375 79.828125 245 79.828125 L 192.90625 51.933594 C 192.78125 51.871094 192.65625 51.746094 192.53125 51.683594 C 191.664062 51.183594 190.730469 50.8125 189.796875 50.6875 C 187.933594 50.375 186.066406 50.75 184.390625 51.683594 C 184.265625 51.746094 184.140625 51.808594 184.015625 51.933594 L 132.109375 79.703125 C 106.371094 79.019531 82.1875 54.421875 62.667969 34.558594 C 59.433594 31.261719 56.328125 28.148438 53.40625 25.28125 C 51.292969 23.226562 48.121094 22.542969 45.324219 23.476562 C 42.527344 24.472656 40.535156 26.964844 40.164062 29.953125 C 37.054688 56.167969 43.394531 97.386719 64.84375 116.375 L 14.800781 116.75 C 12.1875 116.75 9.765625 118.121094 8.335938 120.300781 C 6.90625 122.480469 6.65625 125.21875 7.714844 127.648438 C 18.28125 152.492188 33.386719 176.152344 64.285156 176.152344 C 71.433594 176.152344 79.453125 174.84375 88.40625 172.042969 L 126.449219 297.007812 C 130.863281 311.515625 143.980469 321.292969 159.148438 321.292969 L 217.773438 321.292969 C 232.941406 321.292969 246.058594 311.515625 250.472656 297.007812 L 260.230469 264.878906 L 285.347656 182.253906 C 287.085938 179.140625 288.578125 175.964844 289.886719 172.851562 C 297.84375 175.09375 304.992188 176.152344 311.394531 176.152344 C 342.289062 176.152344 357.398438 152.492188 367.964844 127.648438 C 369.148438 125.40625 368.898438 122.601562 367.46875 120.425781 Z M 247.613281 253.171875 L 208.695312 241.714844 C 207.140625 241.28125 205.585938 240.84375 203.972656 240.535156 L 214.539062 230.695312 C 222.871094 223.035156 229.644531 216.808594 233.3125 207.222656 C 245.125 209.089844 254.636719 207.78125 262.40625 204.480469 Z M 114.265625 203.421875 C 122.347656 207.46875 132.605469 209.277344 145.597656 207.222656 C 149.328125 216.808594 156.105469 223.035156 164.433594 230.695312 L 175.375 240.84375 C 174.628906 241.03125 173.820312 241.15625 173.074219 241.40625 L 129.496094 253.421875 Z M 89.089844 120.609375 L 137.640625 94.582031 L 180.785156 71.484375 L 180.785156 224.59375 L 175.003906 219.175781 C 165.738281 210.644531 160.765625 206.039062 158.964844 197.445312 C 158.902344 197.011719 158.839844 196.636719 158.777344 196.199219 C 158.777344 196.074219 158.714844 196.015625 158.714844 195.890625 C 158.402344 194.019531 158.28125 191.964844 158.21875 189.664062 L 158.21875 177.023438 C 157.96875 164.507812 147.960938 154.667969 135.402344 154.609375 L 99.46875 154.484375 Z M 287.460938 120.300781 C 287.148438 120.796875 286.902344 121.359375 286.777344 121.917969 L 276.890625 154.484375 L 243.695312 154.609375 C 231.199219 154.667969 221.191406 164.507812 220.878906 177.210938 L 220.878906 189.539062 C 220.820312 191.964844 220.632812 194.082031 220.320312 196.074219 C 220.320312 196.136719 220.257812 196.199219 220.257812 196.261719 C 220.195312 196.636719 220.074219 197.011719 220.074219 197.382812 C 218.269531 206.101562 213.296875 210.707031 203.972656 219.238281 L 196.386719 226.273438 L 196.386719 71.609375 Z M 142.613281 191.84375 C 124.648438 194.519531 113.210938 188.042969 104.816406 170.113281 L 135.339844 170.234375 C 139.320312 170.234375 142.488281 173.347656 142.550781 177.210938 L 142.550781 189.847656 C 142.550781 190.535156 142.613281 191.21875 142.613281 191.84375 Z M 271.109375 175.964844 C 263.027344 189.476562 252.273438 194.269531 236.359375 191.902344 C 236.421875 191.21875 236.421875 190.472656 236.421875 189.726562 L 236.421875 177.398438 C 236.484375 173.410156 239.65625 170.296875 243.632812 170.296875 L 272.789062 170.234375 Z M 322.957031 49.378906 C 321.777344 73.910156 312.886719 99.566406 298.589844 107.972656 L 267.257812 91.222656 C 288.828125 83.066406 307.726562 64.820312 322.957031 49.378906 Z M 55.207031 49.378906 C 70.4375 64.820312 89.398438 83.066406 110.910156 91.222656 L 79.578125 107.972656 C 65.277344 99.503906 56.390625 73.910156 55.207031 49.378906 Z M 27.171875 132.441406 L 75.972656 132.066406 L 83.679688 157.347656 C 53.964844 166.625 39.105469 155.726562 27.171875 132.441406 Z M 217.835938 305.785156 L 159.210938 305.785156 C 151.128906 305.785156 144.167969 300.679688 141.617188 293.085938 L 148.890625 293.085938 C 154.050781 293.085938 158.21875 288.851562 158.21875 283.746094 C 158.21875 278.640625 153.988281 274.40625 148.890625 274.40625 L 136.707031 274.40625 C 136.398438 274.40625 136.148438 274.46875 135.898438 274.59375 L 134.035156 268.429688 L 177.179688 256.535156 C 186.066406 254.105469 195.390625 254.167969 204.28125 256.785156 L 243.074219 268.179688 L 241.148438 274.46875 C 241.148438 274.46875 241.085938 274.46875 241.085938 274.46875 L 228.898438 274.46875 C 223.742188 274.46875 219.574219 278.640625 219.574219 283.808594 C 219.574219 288.976562 223.800781 293.148438 228.898438 293.148438 L 235.425781 293.148438 C 232.878906 300.679688 225.917969 305.785156 217.835938 305.785156 Z M 292.992188 157.597656 L 300.765625 132.066406 L 348.757812 132.441406 C 336.945312 155.480469 322.210938 166.4375 292.992188 157.597656 Z M 292.992188 157.597656 "
						fill-opacity="1"
						fill-rule="nonzero"
					/><path
						class="bg-surface-50"
						d="M 194.707031 359.957031 L 181.21875 359.957031 C 109.789062 359.957031 51.664062 301.738281 51.664062 230.199219 L 51.664062 176.214844 C 51.664062 171.605469 55.394531 167.871094 59.996094 167.871094 C 64.59375 167.871094 68.324219 171.605469 68.324219 176.214844 L 68.324219 230.199219 C 68.324219 292.523438 118.929688 343.207031 181.15625 343.207031 L 194.648438 343.207031 C 256.875 343.207031 307.476562 292.523438 307.476562 230.199219 L 307.476562 179.328125 C 307.476562 174.71875 311.207031 170.984375 315.808594 170.984375 C 320.410156 170.984375 324.136719 174.71875 324.136719 179.328125 L 324.136719 230.199219 C 324.261719 301.738281 266.136719 359.957031 194.707031 359.957031 Z M 194.707031 359.957031 "
						fill-opacity="1"
						fill-rule="nonzero"
					/></svg
				>
				<h2 class="select-none mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
					Acesse sua conta
				</h2>
			</div>

			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form on:submit={handleSubmit} use:focusTrap={isFocused} class="space-y-6">
					<div>
						<label for="email" class="select-none block text-sm font-medium leading-6">Email:</label
						>
						<div class="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								bind:value={userLogin.username}
								autocomplete="email"
								required
								class="input variant-filled-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between">
							<label for="password" class="select-none block text-sm font-medium leading-6"
								>Senha:</label
							>
							<div class="text-sm">
								<a href="#" class="font-semibold text-success-500 hover:text-success-400"
									>Esqueceu sua senha?</a
								>
							</div>
						</div>
						<div class="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								bind:value={userLogin.password}
								autocomplete="current-password"
								required
								class="input variant-filled-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							{disabled}
							class="flex w-full justify-center rounded-md variant-filled-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-xl hover:variant-soft-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Entrar</button
						>
					</div>
				</form>

				<div class="flex flex-col">
					<p class="select-none mt-10 text-center text-sm text-gray-500">Não é membro?</p>
					<button
						on:click={() => goto('/register')}
						class="font-semibold leading-6 text-success-500 text-sm hover:text-success-400"
						>Teste por 14 dias gratuitamente</button
					>
				</div>
			</div>
		</div>
	{/if}
</main>
