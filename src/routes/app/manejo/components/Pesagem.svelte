<script lang="ts">
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { focusTrap, toastStore } from '@skeletonlabs/skeleton';
	import type { PesoLogCreate } from '../../../../client';
	import { PesoLogService } from '../../../../client';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	const s: ToastSettings = {
		message: 'Pesagem adicionada com sucesso!'
	};

	const e: ToastSettings = {
		message: 'Erro ao adicionar pesagem!',
		background: 'bg-warning-600'
	};

	let pesoLog: PesoLogCreate = {
		data: new Date().toISOString().substr(0, 10),
		peso: 0,
		ref: ''
	};

	let loading = false;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		loading = true;

		try {
			const res = await PesoLogService.createPesoLogPost(pesoLog);
			console.log(res);
			toastStore.trigger(s);
			pesoLog.peso = 0;
			pesoLog.ref = '';
		} catch (err) {
			console.log(err);
			toastStore.trigger(e);
		} finally {
			loading = false;
		}
	};

	let isFocused = true;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		{#if loading}
			<div class="flex items-center justify-center flex-col space-y-6">
				<h1 class="font-bold text-2xl">Carregando...</h1>
				<ProgressRadial width="w-24" value={undefined} />
			</div>
		{:else}
			<form on:submit={handleSubmit} use:focusTrap={isFocused}>
				<div>
					<h1 class="font-bold text-3xl">Registrar pesagem</h1>
					<div class="flex w-full flex-col space-y-4 mt-7">
						<label class="label">
							<span>Identificador</span>
							<input
								class="input rounded"
								type="text"
								placeholder="Ex: farmaco"
								bind:value={pesoLog.ref}
							/>
						</label>
						<label class="label">
							<span>Peso (KG)</span>
							<input
								class="input rounded"
								type="number"
								placeholder="Ex: 10"
								bind:value={pesoLog.peso}
							/>
						</label>
						<label class="label">
							<span>Data de pesagem</span>
							<input class="input rounded" type="date" bind:value={pesoLog.data} />
						</label>
					</div>
					<div class="mt-3 flex items-center justify-center">
						<button type="submit" class="btn variant-filled font-bold">Registrar</button>
					</div>
				</div>
			</form>
		{/if}
	</div>
</div>
