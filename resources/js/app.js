import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import vuetify from "./Plugins/vuetify"
import link from "@/Plugins/links";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    vuetify.theme.global.name.value = localStorage.getItem("theme") || "light";
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(vuetify)
      .use(link)
      .mount(el)
  },
})