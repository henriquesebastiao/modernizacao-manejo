// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; badge: string; list: List }>> = {
	'/relatorios': [
		{
			title: 'Relatórios',
			badge: 'fa-chart-line',
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
			badge: 'fa-syringe',
			list: [
				{
					href: 'app/manejo/adicionar_animal',
					label: 'Adicionar animal',
					keywords: 'adicionar_animal',
					badge: 'fa-syringe'
				},
				{
					href: 'app/manejo/vacinacao',
					label: 'Vacinação',
					keywords: 'vacinacao',
					badge: 'fa-tree'
				},
				{ href: 'app/manejo/pesagem', label: 'Pesagem', keywords: 'pesagem', badge: 'fa-tree' }
			]
		}
	],
	'/sanitario': [
		{
			title: 'Sanitário',
			badge: 'fa-vial-circle-check',
			list: [
				{
					href: 'app/sanitario/vacinacao',
					label: 'Vacinação',
					keywords: 'vacinacao',
					badge: 'fa-tree'
				},
				{
					href: 'app/sanitario/procedimento',
					label: 'Procedimento',
					keywords: 'procedimento',
					badge: 'fa-tree'
				},
				{
					href: 'app/sanitario/exame',
					label: 'Exame',
					keywords: 'exame',
					badge: 'fa-tree'
				},
				{
					href: 'app/sanitario/outro',
					label: 'Outro',
					keywords: 'outro',
					badge: 'fa-tree'
				}
			]
		}
	],
	'/cria': [
		{
			title: 'Cria',
			badge: 'fa-cow',
			list: [
				{
					href: 'app/cria/desmama',
					label: 'Desmama',
					keywords: 'desmama',
					badge: 'fa-tree'
				},
				{
					href: 'app/cria/parto',
					label: 'Parto',
					keywords: 'parto',
					badge: 'fa-tree'
				}
			]
		}
	],
	'/lotes': [
		{
			title: 'Lotes',
			badge: 'fa-tree',
			list: [
				{
					href: 'app/lotes/troca_de_lote',
					label: 'Troca de Lote',
					keywords: 'troca_de_lote',
					badge: 'fa-tree'
				}
			]
		}
	],
	'/financeiro': [
		{
			title: 'Financeiro',
			badge: 'fa-cash-register',
			list: [
				{
					href: 'app/financeiro/financeiro',
					label: 'Financeiro',
					keywords: 'financeiro',
					badge: 'fa-tree'
				}
			]
		}
	]
};
