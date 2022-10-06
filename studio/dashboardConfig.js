export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633eedf419f90c0d8278303c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-14o7brk1',
                  apiId: 'facc07ac-5a90-408d-86a9-18599044ea57'
                },
                {
                  buildHookId: '633eedf4d97b900d33493f6b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w2kjxenf',
                  apiId: '52319b3c-f6fa-432f-9234-f3905cce91b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rombey86/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w2kjxenf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
