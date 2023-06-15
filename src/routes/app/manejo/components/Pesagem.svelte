<script lang="ts">
	let weightDate = new Date().toISOString().substr(0, 10);
	let brinco: string = '';
	let peso: string | null = null;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] h-[450px] shadow-2xl p-4 flex flex-col justify-between">
		<div>
			<h1 class="font-bold text-3xl">Registrar pesagem</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label class="label">
					<span>Brinco</span>
					<input
						class="input rounded"
						type="text"
						placeholder="Ex: farmaco"
						bind:value={brinco}
					/>
				</label>
				<label class="label">
					<span>Peso (KG)</span>
					<input class="input rounded" type="number" placeholder="Ex: 10" bind:value={peso} />
				</label>
				<label class="label">
					<span>Data de pesagem</span>
					<input class="input rounded" type="date" bind:value={weightDate} />
				</label>
			</div>
		</div>
		<div class="mt-3 flex items-center justify-center">
			<button class="btn variant-filled font-bold">Registrar</button>
		</div>
	</div>
</div>
