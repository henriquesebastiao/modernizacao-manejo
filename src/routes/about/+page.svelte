<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
</script>

<body class="flex items-center justify-center" in:fade>
	<div class="w-[60%] rounded card text-token">
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead">
					<i class="fa-regular fa-user-group"></i>
				</svelte:fragment>
				<svelte:fragment slot="summary">
					<span>Quem somos?</span>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Nosso objetivo é simplificar e otimizar as tarefas diárias dos criadores de gado de
						corte, oferecendo ferramentas poderosas para o controle completo do rebanho, desde o
						nascimento dos bezerros até a venda dos animais. Com nossa plataforma, os produtores
						podem acompanhar o desempenho individual de cada animal, gerenciar registros sanitários,
						controlar a alimentação e rastrear o histórico de manejo, tudo em um só lugar.
					</p>
					<p>
						Acreditamos que a tecnologia pode impulsionar a produtividade e a rentabilidade da
						pecuária de corte. Por isso, nos esforçamos para oferecer recursos avançados, como
						análise de dados, inteligência artificial e integração com dispositivos de
						monitoramento, permitindo aos produtores tomar decisões mais informadas e estratégicas.
					</p>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</body>
