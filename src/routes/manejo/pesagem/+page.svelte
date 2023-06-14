<script lang="ts">
	import type { PesoLogCreateSchema } from '../../../client';
	import { PesoLogService, OpenAPI } from '../../../client';
	import { focusTrap } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	OpenAPI.BASE = import.meta.env.VITE_API_URL;

	let isFocused = true;

	const date = () => {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${year}-${month}-${day}`;
	};

	let weightAttributes: PesoLogCreateSchema = {
		data: date(),
		peso: 0,
		animal_id: 0
	};

	function handleSubmit(event: Event) {
		event.preventDefault();

		PesoLogService.createPesoLogPost(weightAttributes)
			.then(() => {
				goto('/');
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<form on:submit={handleSubmit} use:focusTrap={isFocused}>
		<div class="card p-8 flex flex-col space-y-8">
			<div>
				<div class="mb-4">
					<label class="label mb-2">
						<i class="pr-0.5 fa-solid fa-tag" />
						<span>Número:</span>
						<input
							class="input w-full px-4 py-2 border rounded"
							type="search"
							bind:value={weightAttributes.animal_id}
							placeholder="Número do animal"
						/>
					</label>
				</div>
				<div class="mb-4">
					<label class="mb-2">
						<i class="pr-0.5 fa-solid fa-weight-hanging" />
						<span>Peso:</span>
						<input
							class="input w-full px-4 py-2 border rounded"
							type="number"
							bind:value={weightAttributes.peso}
							placeholder="Peso do animal"
						/>
					</label>
				</div>
				<div class="mb-4">
					<label class="mb-2">
						<i class="pr-0.5 fa-solid fa-calendar-days" />
						<span>Data:</span>
						<input
							class="input w-full px-4 py-2 border rounded"
							type="date"
							bind:value={weightAttributes.data}
							placeholder="Data da pesagem"
						/>
					</label>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<button type="submit" class="btn variant-filled-primary">Registrar</button>
			</div>
		</div>
	</form>
</main>
