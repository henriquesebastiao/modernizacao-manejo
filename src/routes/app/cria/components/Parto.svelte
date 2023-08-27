<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let data_parto: string | null = null;
	let quantidade_bezerros: string | null = null;
	let inseminacao_cobertura: string | null = null;
	let brinco_animal: string | null = null;
	let retencao_placenta: string | null = null;
	let necessidade_auxilio_parto: string | null = null;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Parto</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label class="label">
					<i class="fa-solid fa-calendar-days mr-1" />
					<span>Data do parto:</span>
					<input class="input rounded" type="date" bind:value={data_parto} />
				</label>

				<label class="label">
					<i class="fa-solid fa-tag mr-1" />
					<span>Brinco animal:</span>
					<input class="input rounded" type="text" bind:value={brinco_animal} />
				</label>
				<label class="label">
					<i class="fa-solid fa-calendar-days mr-1" />
					<span>Inseminação / Cobertura:</span>
					<select class="select rounded" bind:value={inseminacao_cobertura}>
						<option value="inseminacao">Inseminação</option>
						<option value="cobertura">Cobertura</option>
					</select>
				</label>

				<label class="label">
					<i class="fa-solid fa-weight-hanging mr-1" />
					<span>Quantidade de bezerros:</span>
					<input
						class="input rounded"
						type="number"
						placeholder="Ex: 1"
						bind:value={quantidade_bezerros}
					/>
				</label>

				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">Retenção de placenta?</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={retencao_placenta} name="retencao_placenta" value="sim">
							<span>Sim</span>
						</RadioItem>
						<RadioItem bind:group={retencao_placenta} name="retencao_placenta" value="nao">
							<span>Não</span>
						</RadioItem>
					</RadioGroup>
				</div>

				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">Necessidade de auxílio no parto?</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem
							bind:group={necessidade_auxilio_parto}
							name="necessidade_auxilio_parto"
							value="sim"
						>
							<span>Sim</span>
						</RadioItem>
						<RadioItem
							bind:group={necessidade_auxilio_parto}
							name="necessidade_auxilio_parto"
							value="nao"
						>
							<span>Não</span>
						</RadioItem>
					</RadioGroup>
				</div>
			</div>
		</div>
		<div class="mt-3 flex items-center justify-center">
			<button class="btn variant-filled font-bold">Registrar</button>
		</div>
	</div>
</div>
