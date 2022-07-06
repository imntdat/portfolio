import { createApp } from "vue"

import Antd from "ant-design-vue"

import router from "@/router"
import App from "@/App.vue"

import "@/plugins/antdv/ant.less"

const app = createApp(App)

app.use(router).use(Antd)

app.mount("#app")
