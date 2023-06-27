<script lang="ts">
	import { RadioGroup, RadioItem, Step, Stepper } from '@skeletonlabs/skeleton';
	import type { AnimalSchema, BreedSchema } from '../../../../client';
	import { AnimalBreedService, Sexo } from '../../../../client';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let breeds: BreedSchema[] = [];

	let animal: AnimalSchema = {
		id: 0,
		tag: 0,
		sisbov: 0,
		gender: Sexo.M,
		breed_id: 0,
		father_id: 0,
		mother_id: 0,
		origin_id: 0,
		birth_date: '',
		buy_date: '',
		sell_date: ''
	};

	let idade = 'data_nascimento';
	let sexo = 'macho';
	let raca = 'Giro';
	let brinco_do_animal = '';
	let brinco_da_mae: string | null = null;
	let primeiro_peso_do_animal: string | null = null;
	let idade_do_animal_em_meses: string | null = null;
	let data_de_nascimento_do_animal: string | null = null;

	$: ageValidator =
		idade === 'data_nascimento' ? data_de_nascimento_do_animal : idade_do_animal_em_meses;

	const fetchRaces = async () => {
		breeds = await AnimalBreedService.animalBreedGetAll();
		console.log(breeds);
	};

	const addAnimal = async () => {
		const animal = {
			brinco_do_animal,
			brinco_da_mae,
			primeiro_peso_do_animal,
			idade_do_animal_em_meses,
			data_de_nascimento_do_animal,
			sexo,
			raca
		};
		console.log(animal);
	};

	onMount(async () => {
		await fetchRaces();
	});
</script>

<div class="flex justify-center items-center h-full">
	<div class="card w-[600px] shadow-2xl p-4">
		<Stepper
			buttonBackLabel="← Voltar"
			buttonCompleteLabel="Registrar"
			buttonNextLabel="Próximo →"
			on:complete={addAnimal}
			stepTerm="Passo"
		>
			<Step active locked={!brinco_do_animal || !primeiro_peso_do_animal}>
				<svelte:fragment slot="header">Adicionar animal</svelte:fragment>
				<div class="flex w-full flex-col space-y-4 mt-7">
					<label>
						<div class="mb-1 flex items-center space-x-1">
							<i class="fa-solid fa-tag mr-1" />
							<span>Brinco do animal</span>
						</div>
						<input bind:value={brinco_do_animal} class="input rounded" type="number" />
					</label>
					<label>
						<div class="mb-1 flex items-center space-x-1">
							<i class="fa-solid fa-weight-hanging mr-1" />
							<span>Primeiro peso do animal</span>
						</div>
						<input bind:value={primeiro_peso_do_animal} class="input rounded" type="number" />
					</label>
				</div>
				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">
						<i class="fa-solid fa-venus-mars mr-1" />
						<span>Sexo</span>
					</div>
					<RadioGroup
						active="variant-filled-primary"
						class="flex flex-wrap justify-center items-center"
						hover="hover:variant-soft-primary"
					>
						<RadioItem bind:group={sexo} name="idade" value="macho">
							<span>Macho</span>
						</RadioItem>
						<RadioItem bind:group={sexo} name="idade" value="femea">
							<span>Fêmea</span>
						</RadioItem>
					</RadioGroup>
				</div>
			</Step>
			<Step locked={!brinco_da_mae || !ageValidator}>
				<svelte:fragment slot="header">Adicionar animal</svelte:fragment>
				<div class="flex w-full flex-col space-y-4 mt-7">
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
								<i class="fa-solid fa-calendar mr-1" />
								<span>Idade do animal em meses</span>
							</div>
							<input type="number" class="input rounded" bind:value={idade_do_animal_em_meses} />
						</label>
					{/if}
					{#if idade === 'data_nascimento'}
						<label in:fade|local>
							<div class="mb-1 flex items-center space-x-1">
								<i class="fa-solid fa-calendar mr-1" />
								<span>Data de nascimento do animal</span>
							</div>
							<input type="date" class="input rounded" bind:value={data_de_nascimento_do_animal} />
						</label>
					{/if}
					<div class="flex w-full flex-col space-y-4 mt-7">
						<label>
							<div class="mb-1 flex items-center space-x-1">
								<i class="fa-solid fa-weight-hanging mr-1" />
								<span>Brinco da mãe</span>
							</div>
							<input bind:value={brinco_da_mae} class="input rounded" type="number" />
						</label>
						<div class="flex flex-col justify-center items-center mt-4">
							<div class="mb-2">
								<i class="fa-solid fa-tag mr-1" />
								<span>Raça</span>
							</div>
							<RadioGroup
								active="variant-filled-primary"
								class="flex-wrap justify-center items-center"
								hover="hover:variant-soft-primary"
							>
								{#each breeds as breed}
									<RadioItem bind:group={raca} name={breed.nome} value={breed.nome}>
										<span>{breed.nome}</span>
									</RadioItem>
								{/each}
							</RadioGroup>
						</div>
					</div>
				</div>
			</Step>
		</Stepper>
	</div>
</div>
