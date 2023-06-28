// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<
	string,
	Array<{ title: string; slot?: string; badge: string; href: string; list: List }>
> = {
	'/app/relatorios': [
		{
			title: 'Relatórios',
			badge: 'fa-chart-line',
			href: 'app/relatorios/relatorio_geral',
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
	'/app/manejo': [
		{
			title: 'Manejo',
			badge: 'fa-syringe',
			href: 'app/relatorios/relatorio_geral',
			list: [
				{
					href: 'app/manejo/adicionar_animal',
					label: 'Adicionar animal',
					keywords: 'adicionar_animal',
					badge: 'fa-cow'
				},
				{
					href: 'app/manejo/vacinacao',
					label: 'Vacinação',
					keywords: 'vacinacao',
					badge: 'fa-syringe'
				},
				{
					href: 'app/manejo/pesagem',
					label: 'Pesagem',
					keywords: 'pesagem',
					badge: 'fa-weight-scale'
				}
			]
		}
	],
	'/app/sanitario': [
		{
			title: 'Sanitário',
			badge: 'fa-vial-circle-check',
			href: 'app/sanitario/relatorio_geral',
			list: [
				{
					href: 'app/sanitario/vacinacao',
					label: 'Vacinação',
					keywords: 'vacinacao',
					badge: 'fa-syringe'
				},
				{
					href: 'app/sanitario/procedimento',
					label: 'Procedimento',
					keywords: 'procedimento',
					badge: 'fa-user-doctor'
				},
				{
					href: 'app/sanitario/exame',
					label: 'Exame',
					keywords: 'exame',
					badge: 'fa-stethoscope'
				},
				{
					href: 'app/sanitario/outro',
					label: 'Outro',
					keywords: 'outro',
					badge: 'fa-circle-plus'
				}
			]
		}
	],
	'/app/cria': [
		{
			title: 'Cria',
			badge: 'fa-cow',
			href: 'app/relatorios/relatorio_geral',
			list: [
				{
					href: 'app/cria/desmama',
					label: 'Desmama',
					keywords: 'desmama',
					badge: 'fa-circle-xmark'
				},
				{
					href: 'app/cria/parto',
					label: 'Parto',
					keywords: 'parto',
					badge: 'fa-heart-pulse'
				}
			]
		}
	],
	'/app/lotes': [
		{
			title: 'Lotes',
			badge: 'fa-tree',
			href: 'app/lotes/',
			list: [
				{
					href: 'app/lotes/troca_de_lote',
					label: 'Troca de Lote',
					keywords: 'troca_de_lote',
					badge: 'fa-rotate'
				}
			]
		}
	],
	'/app/financeiro': [
		{
			title: 'Financeiro',
			badge: 'fa-cash-register',
			href: 'app/Financeiro/',
			list: [
				{
					href: 'app/financeiro/financeiro',
					label: 'Financeiro',
					keywords: 'financeiro',
					badge: 'fa-calculator'
				}
			]
		}
	],
	'/app/settings': [
		{
			slot: 'trail',
			title: 'Ajustes',
			badge: 'fa-gear',
			href: 'app/settings/',
			list: [
				{
					href: 'app/financeiro/financeiro',
					label: 'Financeiro',
					keywords: 'financeiro',
					badge: 'fa-calculator'
				}
			]
		}
	]
};
