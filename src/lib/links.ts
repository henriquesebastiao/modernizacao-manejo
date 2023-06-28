// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<
	string,
	Array<{
		title: string;
		slot?: string;
		badge: string;
		href: string;
		list: List;
		value: number;
		name: string;
	}>
> = {
	'/app/relatorios': [
		{
			title: 'Relatórios',
			name: 'relatorios',
			badge: 'fa-chart-line',
			href: 'relatorio_geral',
			value: 0,
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
			name: 'manejo',
			badge: 'fa-syringe',
			href: 'adicionar_animal',
			value: 1,
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
			name: 'sanitario',
			badge: 'fa-vial-circle-check',
			href: 'vacinacao',
			value: 2,
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
			name: 'cria',
			badge: 'fa-cow',
			href: 'desmama',
			value: 3,
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
			name: 'lotes',
			badge: 'fa-tree',
			href: 'troca_de_lote',
			value: 4,
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
			name: 'financeiro',
			badge: 'fa-cash-register',
			href: 'financeiro',
			value: 5,
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
	'/app/ajustes': [
		{
			slot: 'trail',
			name: 'ajustes',
			title: 'Ajustes',
			badge: 'fa-gear',
			href: 'user',
			value: 6,
			list: [
				{
					href: 'app/ajustes/user',
					label: 'Usuário',
					keywords: 'usuario',
					badge: 'fa-user'
				}
			]
		}
	]
};
