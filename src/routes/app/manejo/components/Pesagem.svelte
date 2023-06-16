<script lang="ts">
    import type {ToastSettings} from '@skeletonlabs/skeleton';
    import {focusTrap, toastStore} from '@skeletonlabs/skeleton';
    import type {PesoLogCreate} from "../../../../client";
    import {PesoLogService} from "../../../../client";


    const s: ToastSettings = {
        message: 'Pesagem adicionada com sucesso!'
    };

    const e: ToastSettings = {
        message: 'Erro ao adicionar pesagem!',
        background: 'bg-warning-600'
    };

    let pesoLog: PesoLogCreate = {
        data: '',
        peso: 0,
        ref: ''
    };

    function handleSubmit(event: Event) {
        event.preventDefault();

        PesoLogService.createPesoLogPost(pesoLog)
            .then((res) => {
                console.log(res);
                toastStore.trigger(s);
            })
            .catch((err) => {
                console.log(err);
                toastStore.trigger(e);
            });
    }

    let isFocused = true;
</script>

<div class="w-full h-full flex items-center justify-center max-lg:items-start">
    <div class="card w-[600px] shadow-2xl p-4 flex flex-col justify-between space-y-10">
        <form on:submit={handleSubmit} use:focusTrap={isFocused}>
            <div>
                <h1 class="font-bold text-3xl">Registrar pesagem</h1>
                <div class="flex w-full flex-col space-y-4 mt-7">
                    <label class="label">
                        <span>Identificador</span>
                        <input
                                class="input rounded"
                                type="text"
                                placeholder="Ex: farmaco"
                                bind:value={pesoLog.ref}
                        />
                    </label>
                    <label class="label">
                        <span>Peso (KG)</span>
                        <input class="input rounded" type="number" placeholder="Ex: 10" bind:value={pesoLog.peso}/>
                    </label>
                    <label class="label">
                        <span>Data de pesagem</span>
                        <input class="input rounded" type="date" bind:value={pesoLog.data}/>
                    </label>
                </div>
                <div class="mt-3 flex items-center justify-center">
                    <button type="submit" class="btn variant-filled font-bold">Registrar</button>
                </div>
            </div>
        </form>
    </div>
</div>
