import Vue from 'vue'
import App from './App.vue'
import { createApolloClient } from "@/utils"
import { default as ApolloProvider } from 'vue-apollo'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

Vue.use(ApolloProvider)
const endpoint = process.env.VUE_APP_API_ENDPOINT || `http://localhost:3000/graphql`;
const apolloProvider = new ApolloProvider({
  defaultClient: createApolloClient(endpoint)
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
