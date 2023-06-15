<!-- <script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    let idade = 'data_nascimento';
    let sexo = 'macho';

    let raca = 'nelore';

</script>

<main class="container h-full mx-auto flex justify-center items-center">
    <form>
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-row mb-2">
                <div class="m-4">
                    <div class="mb-2">
                        <i class="fa-solid fa-tag mr-1"></i>
                        <span>Brinco do animal:</span>
                    </div>
                    <input
                            type="number"
                            class="input w-full px-4 py-2 border rounded"
                    />
                </div>
                <div class="m-4">
                    <div class="mb-2">
                        <i class="fa-solid fa-weight-hanging mr-1"></i>
                        <span>Primeiro peso do animal:</span>
                    </div>
                    <input
                            type="number"
                            class="input w-full px-4 py-2 border rounded"
                    />
                </div>
            </div>
            <div class="flex justify-center gap-4">
                <div class="flex flex-col justify-center items-center">
                    <div class="mb-2">
                        Idade do animal:
                    </div>
                    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
                        <RadioItem bind:group={idade} name="idade" value="meses">
                            <span>Meses</span>
                        </RadioItem>
                        <RadioItem bind:group={idade} name="idade" value="data_nascimento">
                            <span>Data de Nascimento</span>
                        </RadioItem>
                    </RadioGroup>
                </div>
                <div>
                    {#if idade === 'meses'}
                        <div class="m-4">
                            <div class="mb-2">
                                <i class="fa-solid fa-calendar mr-1"></i>
                                <span>Idade do animal em meses:</span>
                            </div>
                            <input
                                    type="number"
                                    class="input w-full px-4 py-2 border rounded"
                            />
                        </div>
                    {/if}
                    {#if idade === 'data_nascimento'}
                        <div class="m-4">
                            <div class="mb-2">
                                <i class="fa-solid fa-calendar mr-1"></i>
                                <span>Data de nascimento do animal:</span>
                            </div>
                            <input
                                    type="date"
                                    class="input w-full px-4 py-2 border rounded"
                            />
                        </div>
                    {/if}
                </div>
            </div>
            <div class="flex justify-center gap-4">
                <div class="flex flex-col justify-center items-center">
                    <div class="mb-2">
                        Sexo:
                    </div>
                    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
                        <RadioItem bind:group={sexo} name="idade" value="macho">
                            <span>Macho</span>
                        </RadioItem>
                        <RadioItem bind:group={sexo} name="idade" value="femea">
                            <span>Fêmea</span>
                        </RadioItem>
                    </RadioGroup>
                </div>
                <div class="flex flex-col justify-center items-center m-4">
                    <div class="mb-2">
                        <i class="fa-solid fa-tag mr-1"></i>
                        <span>Brinco da mãe:</span>
                    </div>
                    <input
                            type="number"
                            class="input w-full px-4 py-2 border rounded"
                    />
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-col justify-center items-center m-4">
                    <div class="mb-2">
                        <i class="fa-solid fa-tag mr-1"></i>
                        <span>Raça:</span>
                    </div>
                    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
                        <RadioItem bind:group={raca} name="raca" value="guzera">
                            <span>Guzerá</span>
                        </RadioItem>
                        <RadioItem bind:group={raca} name="raca" value="nelore">
                            <span>Nelore</span>
                        </RadioItem>
                        <RadioItem bind:group={raca} name="raca" value="giro">
                            <span>Giro</span>
                        </RadioItem>
                    </RadioGroup>
                </div>
                <div class="m-4">
                    <div class="mb-2">
                        <i class="fa-solid fa-tag mr-1"></i>
                        <span>Lote:</span>
                    </div>
                    <input
                            type="text"
                            class="input w-full px-4 py-2 border rounded"
                    />
                </div>
            </div>
            <button type="button" class="btn variant-filled mt-8">Adicionar animal</button>
        </div>
    </form>
</main> -->

<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

	let idade = 'data_nascimento';
	let sexo = 'macho';
	let raca = 'nelore';
</script>

<div class="w-full h-full flex items-center justify-center">
	<div class="card w-[600px] h-[820px] shadow-2xl p-4 flex flex-col justify-between">
		<div>
			<h1 class="font-bold text-3xl">Adicionar animal</h1>
			<div class="flex w-full flex-col space-y-4 mt-7">
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-tag mr-1" />
						<span>Brinco do animal</span>
					</div>
					<input type="number" class="input rounded-none" />
				</label>
				<label>
					<div class="mb-1 flex items-center space-x-1">
						<i class="fa-solid fa-weight-hanging mr-1" />
						<span>Primeiro peso do animal</span>
					</div>
					<input type="number" class="input rounded-none" />
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
							<i class="fa-solid fa-calendar mr-1" />
							<span>Idade do animal em meses</span>
						</div>
						<input type="number" class="input rounded-none" />
					</label>
				{/if}
				{#if idade === 'data_nascimento'}
					<label in:fade|local>
						<div class="mb-1 flex items-center space-x-1">
							<i class="fa-solid fa-calendar mr-1" />
							<span>Data de nascimento do animal</span>
						</div>
						<input type="date" class="input rounded-none" />
					</label>
				{/if}
				<div class="flex flex-col justify-center items-center">
					<div class="mb-2">
						<i class="fa-solid fa-venus-mars mr-1" />
						<span>Sexo</span>
					</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
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
						<i class="fa-solid fa-weight-hanging mr-1" />
						<span>Brinco da mãe</span>
					</div>
					<input type="number" class="input rounded-none" />
				</label>
				<div class="flex flex-col justify-center items-center mt-4">
					<div class="mb-2">
						<i class="fa-solid fa-tag mr-1" />
						<span>Raça</span>
					</div>
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={raca} name="raca" value="guzera">
							<span>Guzerá</span>
						</RadioItem>
						<RadioItem bind:group={raca} name="raca" value="nelore">
							<span>Nelore</span>
						</RadioItem>
						<RadioItem bind:group={raca} name="raca" value="giro">
							<span>Giro</span>
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
