export default ({ router }) => {
    router.addRoutes([
        {
            path: '/:slug',
            name: 'dynamic-route',
            component: () =>
            import('./theme/TestGroundLayout.vue')
        }])
  }