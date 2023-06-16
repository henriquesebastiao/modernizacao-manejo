<script lang="ts">
    let data_desmama: string | null = null;
    let peso_desmama: string | null = null;
    let brinco_animal: string | null = null;
    let observation: string | null = null;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
    <div class="card shadow-2xl p-4 flex flex-col justify-between space-y-10">
        <div>
            <h1 class="font-bold text-3xl">Desmama</h1>
            <div class="flex w-full flex-col space-y-4 mt-7">
                <label class="label">
                    <i class="fa-solid fa-calendar-days mr-1"></i>
                    <span>Data da desmama:</span>
                    <input
                            class="input rounded"
                            type="date"
                            bind:value={data_desmama}
                    />
                </label>

                <label class="label">
                    <i class="fa-solid fa-tag mr-1"></i>
                    <span>Brinco do animal:</span>
                    <input
                            class="input rounded"
                            type="number"
                            bind:value={brinco_animal}
                    />
                </label>

                <label class="label">
                    <i class="fa-solid fa-weight-hanging mr-1"></i>
                    <span>Peso de desmama (Kg):</span>
                    <input class="input rounded" type="number" placeholder="Ex: 10" bind:value={peso_desmama} />
                </label>

                <label class="label">
                    <span>Observações:</span>
                    <textarea
                            class="textarea rounded min-h-[100px] max-h-[150px]"
                            rows="4"
                            placeholder="..."
                            bind:value={observation}></textarea>
                </label>
            </div>
        </div>
        <div class="mt-3 flex items-center justify-center">
            <button class="btn variant-filled font-bold">Registrar</button>
        </div>
    </div>
</div>
