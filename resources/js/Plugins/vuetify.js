// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { md1, md2, md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const light  = {
    dark: false,
    colors: {
        app:  '#153376',
        footer: '#153376',
        background: '#ededed',
        primary: '#385db0',
        accent: '#1976D2',
        secondary: '#FF8F00',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#16b530',
        disabled: '#d6d6d6',
        imput_border: '#aaaaaa',
        tht_txt: '#858585',
        tht_roxo1: '#692fae',
        tht_roxo2: '#5d48ab',
        tht_azul1: '#5261ab',
        tht_azul2: '#467aa5',
        tht_verde1: '#2fac9e',
        tht_verde2: '#3b93a2',
        tht_verde_dark: '#08544c',
        tht_rosa: '#f24d99',
        tht_laranja: '#ff6600',
        tht_amarelo: '#ffc800',
        tht_preto: '#000000',
        tht_cinza1: '#262626',
        tht_cinza2: '#404040',
        tht_cinza3: '#737373',
        tht_cinza4: '#8c8c8c',
        tht_cinza5: '#a6a6a6',
        tht_cinza6: '#bfbfbf',
        tht_silver: '#ededed',
        tht_dark: '#161617',

    }
}

const dark = {
    dark: true,
    colors: {
        app:  '#212121',
        footer: '#212121',
        background: '#424242',
        primary: '#9db8f2',
        accent: '#1976D2',
        secondary: '#FF8F00',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#16b530',
        disabled: '#363636',
        imput_border: '#aaaaaa',
        tht_txt: '#ededed',
        tht_roxo1: '#692fae',
        tht_roxo2: '#5d48ab',
        tht_azul1: '#5261ab',
        tht_azul2: '#467aa5',
        tht_verde1: '#2fac9e',
        tht_verde2: '#3b93a2',
        tht_verde_dark: '#08544c',
        tht_rosa: '#f24d99',
        tht_laranja: '#ff6600',
        tht_amarelo: '#ffc800',
        tht_preto: '#000000',
        tht_cinza1: '#262626',
        tht_cinza2: '#404040',
        tht_cinza3: '#737373',
        tht_cinza4: '#8c8c8c',
        tht_cinza5: '#a6a6a6',
        tht_cinza6: '#bfbfbf',
        tht_silver: '#ededed',
        tht_dark: '#161617',
       
    }
}


const vuetify = createVuetify({
    components,
    directives,
    blueprint: md2,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
        },
        // styles: { configFile: '../assets/scss/settings.scss' }
    },

})




export default vuetify