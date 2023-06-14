export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
    '/relatorios': [
        {
            title: 'Relatórios',
            list: [
                { href: '/teste/relatorio_geral', label: 'Relatório Geral', keywords: 'relatorio' },
                { href: '/teste/relatorio_lote', label: 'Relatório Lote', keywords: 'relatorio' },
            ]
        }
    ],
    '/manejo': [
        {
            title: 'Manejo',
            list: [
                { href: '/manejo', label: 'Vacinação', keywords: 'vacinacao' },
                { href: '/manejo/pesagem', label: 'Pesagem', keywords: 'pesagem' },
            ]
        }
    ],
    '/animais': [
        {
            title: 'Animais',
            list: [
                { href: '/animais', label: 'Animais', keywords: 'animais' },
            ]
        }
    ]
}