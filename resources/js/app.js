import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import vuetify from "./Plugins/vuetify"
import link from "@/Plugins/links";

createInertiaApp({

  resolve: name => {
   
    if (name.toString().indexOf('|') === -1) {

      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
      return pages[`./Pages/${name}.vue`];

    } else {
      // Separa a string para pelo sinal de | quando existir 
      const parts = name.toString().split("|")

      // Pega a primeira parte que deve ser o nome do módulo
      const module = parts[0]

      // Pega a segunda parte que deve ser o aquivo e ou diretorio a ser carregado
      const file = parts[1] + '.vue'
      
      // monta o caminho completo par ao arquivo 
      const path = `/Modules/${module}/resources/js/Pages/${file}`

      return import(path);
    }
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