import Vue from 'vue';
import Vuetify from 'vuetify';
import es from 'vuetify/src/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
  },
});
