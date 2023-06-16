export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
    '/relatorios': [
        {
            title: 'Relatórios',
            list: [
                { href: 'app/relatorios/relatorio_geral', label: 'Relatório Geral', keywords: 'relatorio' },
                { href: 'app/relatorios/relatorio_lote', label: 'Relatório Lote', keywords: 'relatorio' },
            ]
        }
    ],
    '/manejo': [
        {
            title: 'Manejo',
            list: [
                { href: 'app/manejo/adicionar_animal', label: 'Adicionar animal', keywords: 'adicionar_animal' },
                { href: 'app/manejo/vacinacao', label: 'Vacinação', keywords: 'vacinacao' },
                { href: 'app/manejo/pesagem', label: 'Pesagem', keywords: 'pesagem' },
            ]
        }
    ],
    '/sanitario': [
        {
            title: 'Sanitário',
            list: [
                { href: 'app/sanitario', label: 'Sanitário', keywords: 'sanitario' },
            ]
        }
    ],
    '/cria': [
        {
            title: 'Cria',
            list: [
                { href: 'app/cria', label: 'Cria', keywords: 'cria' },
            ]
        }
    ],
    '/lotes': [
        {
            title: 'Lotes',
            list: [
                { href: 'app/lotes', label: 'Lotes', keywords: 'lotes' },
            ]
        }
    ],
}