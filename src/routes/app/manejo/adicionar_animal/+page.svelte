<script>
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
</main>