// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/relatorios': [
		{
			title: 'Relatórios',
			list: [
				{
					href: 'app/relatorios/relatorio_geral',
					label: 'Relatório Geral',
					keywords: 'relatorio',
					badge: 'fa-chart-line'
				},
				{
					href: 'app/relatorios/relatorio_lote',
					label: 'Relatório Lote',
					keywords: 'relatorio',
					badge: 'fa-tree'
				}
			]
		}
	],
	'/manejo': [
		{
			title: 'Manejo',
			list: [
				{
					href: 'app/manejo/adicionar_animal',
					label: 'Adicionar animal',
					keywords: 'adicionar_animal'
				},
				{ href: 'app/manejo/vacinacao', label: 'Vacinação', keywords: 'vacinacao' },
				{ href: 'app/manejo/pesagem', label: 'Pesagem', keywords: 'pesagem' }
			]
		}
	],
	'/sanitario': [
		{
			title: 'Sanitário',
			list: [
				{
					href: 'app/sanitario/vacinacao',
					label: 'Vacinação',
					keywords: 'vacinacao'
				},
				{
					href: 'app/sanitario/procedimento',
					label: 'Procedimento',
					keywords: 'procedimento'
				},
				{
					href: 'app/sanitario/exame',
					label: 'Exame',
					keywords: 'exame'
				},
				{
					href: 'app/sanitario/outro',
					label: 'Outro',
					keywords: 'outro'
				}
			]
		}
	],
	'/cria': [
		{
			title: 'Cria',
			list: [
				{
					href: 'app/cria/desmama',
					label: 'Desmama',
					keywords: 'desmama'
				},
				{
					href: 'app/cria/parto',
					label: 'Parto',
					keywords: 'parto'
				}
			]
		}
	],
	'/lotes': [
		{
			title: 'Lotes',
			list: [
				{
					href: 'app/lotes/troca_de_lote',
					label: 'Troca de Lote',
					keywords: 'troca_de_lote'
				}
			]
		}
	]
};
