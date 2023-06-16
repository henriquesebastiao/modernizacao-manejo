<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let condicao_saida = 'venda';
	let brinco_do_animal: string = '';
	let peso_de_saida: string | null = null;
	let data_da_saida: string | null = null;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Saída de animal</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">
						<i class="fa-solid fa-arrow-right-from-bracket mr-1"></i>
						<span>Condição de saída:</span>
					</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={condicao_saida} name="condicao_saida" value="venda">
							<span>Venda</span>
						</RadioItem>
						<RadioItem bind:group={condicao_saida} name="condicao_saida" value="morte">
							<span>Morte</span>
						</RadioItem>
						<RadioItem bind:group={condicao_saida} name="condicao_saida" value="descarte">
							<span>Descarte</span>
						</RadioItem>
					</RadioGroup>
				</div>
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-tag mr-1"></i>
						<span>Brinco do animal</span>
					</div>
					<input type="text" class="input rounded" bind:value={brinco_do_animal} />
				</label>

				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-calendar-days mr-1"></i>
						<span>Data da saída:</span>
					</div>
					<input type="date" class="input rounded" bind:value={data_da_saida} />
				</label>

				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-weight-hanging mr-1"></i>
						<span>Peso de saída:</span>
					</div>
					<input type="text" class="input rounded" bind:value={peso_de_saida} />
				</label>
			</div>
		</div>
		<div class="mt-3 flex items-center justify-center">
			<button class="btn variant-filled font-bold">Registrar</button>
		</div>
	</div>
</div>
