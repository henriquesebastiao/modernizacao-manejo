<script lang="ts">
	let procedureDate = new Date().toISOString().substr(0, 10);
	let procedimento: string = '';
	let enfermidade: string = '';
	let carencePeriod: number = 0;
	let farmaco = '';
	let observation: string = '';
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Procedimento veterinário</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label class="label">
					<span>Procedimento:</span>
					<input
						class="input rounded"
						type="text"
						placeholder="Ex: procedimento"
						bind:value={procedimento}
					/>
				</label>
				<label class="label">
					<span>Data de realização:</span>
					<input class="input rounded" type="date" bind:value={procedureDate} />
				</label>
				<label class="label">
					<span>Enfermidade:</span>
					<select class="input rounded" bind:value={enfermidade}>
						<option value="0">Selecione uma enfermidade</option>
						<option value="1">Enfermidade 1</option>
						<option value="2">Enfermidade 2</option>
						<option value="3">Enfermidade 3</option>
					</select>
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
