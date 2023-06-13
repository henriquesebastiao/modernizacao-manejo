<script lang="ts">
  import type { PesoLogCreateSchema } from "../../../client";
  import { focusTrap, ToastSettings, toastStore } from "@skeletonlabs/skeleton";
  import { PesoLogService } from "../../../client";
  import {goto} from "$app/navigation";

  let isFocused = true;

  const date = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  let weightAttributes: PesoLogCreateSchema = {
    data: date(),
    peso: 0,
    animal_id: 0,
  };

  const t: ToastSettings = {
    message: 'Peso registrado com sucesso!',
  };
  const e: ToastSettings = {
    message: 'Erro ao registrar peso!',
    background: 'bg-warning-600',
  };

  function handleSubmit(event: Event) {
    event.preventDefault();

    PesoLogService.createPesoLogPost(weightAttributes)
      .then(() => {
        toastStore.trigger(t);
        goto("/peso");
      })
      .catch((err) => {
        console.log(err);
        toastStore.trigger(e);
      });
  }
</script>

<main class="container h-full mx-auto flex justify-center items-center">
  <form on:submit={handleSubmit} use:focusTrap={isFocused}>
    <div class=" card p-8">
      <div class="mb-4">
        <label class="label mb-2">
          <i class="pr-0.5 fa-solid fa-tag"></i>
          <span>Número:</span>
        <input class="input" type="search" bind:value={weightAttributes.animal_id} placeholder="Número do animal">
        </label>
      </div>

      <div class="mb-4">
        <label class="mb-2">
          <i class="pr-0.5 fa-solid fa-weight-hanging"></i>
          <span>Peso:</span>
        <input class="input" type="number" bind:value={weightAttributes.peso} placeholder="Peso do animal">
        </label>
      </div>

      <div class="mb-4">
        <label class="mb-2">
          <i class="pr-0.5 fa-solid fa-calendar-days"></i>
          <span>Data:</span>
        <input class="input" type="date" bind:value={weightAttributes.data} placeholder="Data da pesagem">
        </label>
      </div>

      <div class="flex items-center justify-center">
        <button type="submit" class="btn variant-filled-primary">Registrar</button>
      </div>
    </div>
  </form>
</main>