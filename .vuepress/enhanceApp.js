export default ({ router }) => {
    router.addRoutes([
        {
            path: '/:slug',
            name: 'dynamic-route',
            component: () =>
            import('./components/Article.vue')
        }])
  }