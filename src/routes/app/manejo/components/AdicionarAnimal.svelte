<script lang="ts">
	import {RadioGroup, RadioItem, Step, Stepper} from '@skeletonlabs/skeleton';
	import type {AnimalCreate, RacaSchema} from '../../../../client';
	import {RacaService, Sexo} from '../../../../client';
	import {fade} from 'svelte/transition';
	import {onMount} from 'svelte';

	let races: RacaSchema[] = [];

    let animal: AnimalCreate = {
        chip: '',
        brinco: '',
        origem: '',
        raca_id: 0,
        mae_id: 0,
        pai_id: 0,
        sexo: Sexo.MACHO,
        data_entrada: '',
        peso: 0,
        data_nascimento: '',
    };

    let idade = 'data_nascimento';
    let sexo = 'macho';
    let raca = 'Giro';
    let brinco_do_animal = '';
    let brinco_da_mae: string | null = null;
    let primeiro_peso_do_animal: string | null = null;
    let idade_do_animal_em_meses: string | null = null;
    let data_de_nascimento_do_animal: string | null = null;

    $: ageValidator = idade === 'data_nascimento' ? data_de_nascimento_do_animal : idade_do_animal_em_meses;

    const fetchRaces = async () => {
        races = await RacaService.getAllRacaGet();
        console.log(races)
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
                stepTerm="Passo"
                buttonBackLabel="← Voltar"
                buttonNextLabel="Próximo →"
                buttonCompleteLabel="Registrar"
                on:complete={addAnimal}
        >
            <Step active locked={!brinco_do_animal || !primeiro_peso_do_animal}>
                <svelte:fragment slot="header">Adicionar animal</svelte:fragment>
                <div class="flex w-full flex-col space-y-4 mt-7">
                    <label>
                        <div class="mb-1 flex items-center space-x-1">
                            <i class="fa-solid fa-tag mr-1"/>
                            <span>Brinco do animal</span>
                        </div>
                        <input type="number" class="input rounded" bind:value={brinco_do_animal}/>
                    </label>
                    <label>
                        <div class="mb-1 flex items-center space-x-1">
                            <i class="fa-solid fa-weight-hanging mr-1"/>
                            <span>Primeiro peso do animal</span>
                        </div>
                        <input type="number" class="input rounded" bind:value={primeiro_peso_do_animal}/>
                    </label>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class="mb-2">
                        <i class="fa-solid fa-venus-mars mr-1"/>
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
                                <i class="fa-solid fa-calendar mr-1"/>
                                <span>Idade do animal em meses</span>
                            </div>
                            <input type="number" class="input rounded" bind:value={idade_do_animal_em_meses}/>
                        </label>
                    {/if}
                    {#if idade === 'data_nascimento'}
                        <label in:fade|local>
                            <div class="mb-1 flex items-center space-x-1">
                                <i class="fa-solid fa-calendar mr-1"/>
                                <span>Data de nascimento do animal</span>
                            </div>
                            <input type="date" class="input rounded" bind:value={data_de_nascimento_do_animal}/>
                        </label>
                    {/if}
                    <div class="flex w-full flex-col space-y-4 mt-7">
                        <label>
                            <div class="mb-1 flex items-center space-x-1">
                                <i class="fa-solid fa-weight-hanging mr-1"/>
                                <span>Brinco da mãe</span>
                            </div>
                            <input type="number" class="input rounded" bind:value={brinco_da_mae}/>
                        </label>
                        <div class="flex flex-col justify-center items-center mt-4">
                            <div class="mb-2">
                                <i class="fa-solid fa-tag mr-1"/>
                                <span>Raça</span>
                            </div>
                            <RadioGroup
                                    active="variant-filled-primary"
                                    hover="hover:variant-soft-primary"
                                    class="flex-wrap justify-center items-center"
                            >
                                {#each races as race}
                                    <RadioItem bind:group={raca} name={race.nome} value={race.nome}>
                                        <span>{race.nome}</span>
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
