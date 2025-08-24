/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/opendocs/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        id: 'Dokumentasi',
        en: 'Documentation',
        pt: 'Documentação',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        id: 'Langkah Awal',
        en: 'Getting Started',
        pt: 'Começando',
      },

      items: [
        {
          href: '/docs',

          title: {
            id: 'Pengenalan',
            en: 'Introduction',
            pt: 'Introdução',
          },

          items: [],
        },

        {
          href: '/docs/adding-new-docs',

          title: {
            en: 'Adding new docs',
            pt: 'Adicionando novos documentos',
          },

          items: [],
        },

        {
          href: '/docs/customizing',

          title: {
            en: 'Customizing',
            pt: 'Personalizando',
          },

          items: [],
        },

        {
          title: {
            en: 'MDX',
          },

          label: {
            en: 'New',
            pt: 'Novo',
          },

          items: [
            {
              href: '/docs/mdx/frontmatter',

              title: {
                en: 'Frontmatter',
                pt: 'Cabeçalho de metadados',
              },

              label: {
                en: 'New',
                pt: 'Novo',
              },

              items: [],
            },

            {
              href: '/docs/mdx/code',

              title: {
                en: 'Code',
                pt: 'Código',
              },

              label: {
                en: 'New',
                pt: 'Novo',
              },

              items: [],
            },

            {
              href: '/docs/mdx/components',

              title: {
                en: 'Components',
                pt: 'Componentes',
              },

              label: {
                en: 'New',
                pt: 'Novo',
              },

              items: [],
            },
          ],
        },

        {
          href: '/docs/changelog',

          title: {
            en: 'Changelog',
            pt: 'Histórico de alterações',
          },

          items: [],
        },
      ],
    },
    {
      title: {
        id: 'HTML',
      },
      items: [
        {
          href: '/docs/html/what-is-html',
          title: {
            id: 'Apa itu HTML',
          },
          items: [],
        },
        {
          href: '/docs/html/flexbox',
          title: {
            id: 'Flexbox',
          },
          items: [],
        },
        {
          href: '/docs/html/flexbox/terminology',
          title: {
            id: 'Terminologi',
          },
          items: [],
        },
        {
          href: '/docs/html/flexbox/flex-container',
          title: {
            id: 'Flex Container',
          },
          items: [],
        },
        {
          href: '/docs/html/flexbox/flex-direction',
          title: {
            id: 'Flex Direction',
          },
          items: [],
        },
      ],
    },
  ],
} as const
