<script lang="ts">
	import {RadioGroup, RadioItem} from '@skeletonlabs/skeleton';
	import type {RacaSchema} from '../../../../client';
	import {RacaService} from '../../../../client';
	import {fade} from 'svelte/transition';
	import {onMount} from 'svelte';

	let races: RacaSchema[] = [];

	let idade = 'data_nascimento';
	let sexo = 'macho';
	let raca = 1;
	let brinco_do_animal = '';
	let brinco_da_mae: string | null = null;
	let primeiro_peso_do_animal: string | null = null;
	let idade_do_animal_em_meses: string | null = null;
	let data_de_nascimento_do_animal: string | null = null;

	const fetchRaces = async () => {
		races = await RacaService.getAllRacaGet();
	};

	onMount(async () => {
		await fetchRaces();
	});
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
	<div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
		<div>
			<h1 class="font-bold text-3xl">Adicionar animal</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-tag mr-1"></i>
						<span>Brinco do animal</span>
					</div>
					<input type="number" class="input rounded" bind:value={brinco_do_animal} />
				</label>
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-weight-hanging mr-1"></i>
						<span>Primeiro peso do animal</span>
					</div>
					<input type="number" class="input rounded" bind:value={primeiro_peso_do_animal} />
				</label>
				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">Idade do animal</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={idade} name="idade" value="meses">
							<span>Meses</span>
						</RadioItem>
						<RadioItem bind:group={idade} name="idade" value="data_nascimento">
							<span>Data de Nascimento</span>
						</RadioItem>
					</RadioGroup>
				</div>
				{#if idade === 'meses'}
					<label in:fade|local>
						<div class="mb-1 flex items-center space-x-1">
							<i class="fa-solid fa-calendar mr-1"></i>
							<span>Idade do animal em meses</span>
						</div>
						<input type="number" class="input rounded" bind:value={idade_do_animal_em_meses} />
					</label>
				{/if}
				{#if idade === 'data_nascimento'}
					<label in:fade|local>
						<div class="mb-1 flex items-center space-x-1">
							<i class="fa-solid fa-calendar mr-1"></i>
							<span>Data de nascimento do animal</span>
						</div>
						<input type="date" class="input rounded" bind:value={data_de_nascimento_do_animal} />
					</label>
				{/if}
				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">
						<i class="fa-solid fa-venus-mars mr-1"></i>
						<span>Sexo</span>
					</div>
					<RadioGroup
						active="variant-filled-primary"
						hover="hover:variant-soft-primary"
						class="flex flex-wrap justify-center items-center"
					>
						<RadioItem bind:group={sexo} name="idade" value="macho">
							<span>Macho</span>
						</RadioItem>
						<RadioItem bind:group={sexo} name="idade" value="femea">
							<span>Fêmea</span>
						</RadioItem>
					</RadioGroup>
				</div>
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-weight-hanging mr-1"></i>
						<span>Brinco da mãe</span>
					</div>
					<input type="number" class="input rounded" bind:value={brinco_da_mae} />
				</label>
				<div class="flex flex-col justify-center items-center mt-4">
					<div class="mb-2">
						<i class="fa-solid fa-tag mr-1"></i>
						<span>Raça</span>
					</div>
					<RadioGroup
						active="variant-filled-primary"
						hover="hover:variant-soft-primary"
						class="flex-wrap justify-center items-center"
					>
						{#each races as race}
							<RadioItem bind:group={raca} name={race.nome} value={race.id}>
								<span>{race.nome}</span>
							</RadioItem>
						{/each}
					</RadioGroup>
				</div>
			</div>
		</div>
		<div class="mt-3 flex items-center justify-center">
			<button class="btn variant-filled font-bold">Registrar</button>
		</div>
	</div>
</div>
