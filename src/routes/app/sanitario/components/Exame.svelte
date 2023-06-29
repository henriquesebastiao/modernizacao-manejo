<script lang="ts">
	import Button from '$lib/components/system/Button.svelte';

	let examDate = new Date().toISOString().substr(0, 10);
	let exame: string = '';
	let resultado: string = '';
	let farmaco: string = '';
	let carencePeriod: number = 0;
	let descricao = '';
	let observation: string = '';

	$: canSubmit = exame && resultado && farmaco && carencePeriod && descricao && observation;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Exame</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label class="label">
					<span>Escolher exame:</span>
					<select class="input rounded" bind:value={exame}>
						<option value="0">Selecione um exame</option>
						<option value="1">Exame 1</option>
						<option value="2">Exame 2</option>
						<option value="3">Exame 3</option>
					</select>
				</label>
				<label class="label">
					<span>Data de realização:</span>
					<input class="input rounded" type="date" bind:value={examDate} />
				</label>
				<label class="label">
					<span>Resultado:</span>
					<select class="input rounded" bind:value={resultado}>
						<option value="0">Selecione um resultado</option>
						<option value="1">Resultado 1</option>
						<option value="2">Resultado 2</option>
						<option value="3">Resultado 3</option>
					</select>
				</label>
				<label class="label">
					<span>Descrição:</span>
					<input
						class="input rounded"
						type="text"
						placeholder="Ex: descrição"
						bind:value={descricao}
					/>
				</label>
				<label class="label">
					<span>Farmaco:</span>
					<input class="input rounded" type="text" placeholder="Ex: farmaco" bind:value={farmaco} />
				</label>
				<label class="label">
					<span>Período de carência (dias):</span>
					<input class="input rounded" type="number" bind:value={carencePeriod} />
				</label>
				<label class="label">
					<span>Observação</span>
					<textarea
						class="textarea rounded min-h-[100px] max-h-[150px]"
						rows="4"
						placeholder="..."
						bind:value={observation}
					/>
				</label>
			</div>
		</div>
		<div class="mt-3 flex items-center justify-center">
			<Button type="submit" disabled={!canSubmit}>Registrar</Button>
		</div>
	</div>
</div>
