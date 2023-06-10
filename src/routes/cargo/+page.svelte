<script lang="ts">
  import { CargoService, OpenAPI } from "../../client";
  OpenAPI.BASE = 'http://localhost:8000';

  async function fetchData() {
    const cargo = await CargoService.getAllCargosCargoGet();
    console.log(cargo);
    console.log(cargo[0]);
    console.log(cargo[0].id);
  }
fetchData();
</script>
