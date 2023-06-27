<script lang="ts">
	let date = new Date().toISOString().substr(0, 10);
	let outro: string = '';
	let resultado: string = '';
	let farmaco: string = '';
	let carencePeriod: number = 0;
	let objetivo = '';
	let observation: string = '';
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Outro</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label class="label">
					<span>Nome:</span>
					<input class="input rounded" type="text" placeholder="Ex: nome" bind:value={outro} />
				</label>
				<label class="label">
					<span>Data de realização:</span>
					<input class="input rounded" type="date" bind:value={date} />
				</label>
				<label class="label">
					<span>Objetivo:</span>
					<input
						class="input rounded"
						type="text"
						placeholder="Ex: objetivo"
						bind:value={objetivo}
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
			<button class="btn variant-filled font-bold">Registrar</button>
		</div>
	</div>
</div>
