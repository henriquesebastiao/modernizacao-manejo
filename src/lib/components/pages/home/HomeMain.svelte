<script>
	import HomeMainComponents from './HomeMainComponents.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center" in:fade>
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<h1 class="!text-5xl md:!text-6xl max-w-[600px]">A tecnologia aliada a pecuária.</h1>
		<p class="!text-xl max-w-[475px]">
			Potencialize o poder do seu rebanho com a nossa ferramenta de gestão de gado: simplifique,
			mensure, supere!
		</p>
		<div class="flex gap-4">
			<a href="/register" class="btn variant-filled">
				<span>Cadastrar</span>
				<i class="fa-solid fa-arrow-right-long" />
			</a>
			<a href="/static" class="btn variant-soft">Saiba Mais</a>
		</div>
	</div>

	<!-- Components -->
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<HomeMainComponents />
	</div>
</div>
