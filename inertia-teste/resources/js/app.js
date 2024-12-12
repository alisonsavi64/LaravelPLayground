import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import Layout from './Shared/Layout.vue';

createInertiaApp({
  resolve: async name => {
    const page = await import(`./Pages/${name}.vue`);
    page.default.layout = page.default.layout ?? Layout;
    return page.default;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .component('Head', Head)
      .mount(el);
  },
  progress: {
    delay: 250,
    color: '#29d',
    includeCSS: true,
    showSpinner: false,
  },
});
