import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProgramacionView from "../views/ProgramacionView.vue"
import FunctionView from "../views/FunctionView.vue"
import ContactView from "../views/ContactView.vue"
import ActivitiesView from "../views/ActivitiesView.vue"
import ComprarUnoView from "../views/ComprarUno.vue"
import ComprarDosView from "../views/ComprarDos.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/Programacion',
            name: 'Programacion',
            component: ProgramacionView
        },
        {
            path: '/Function',
            name: 'Function',
            component: FunctionView
        },
        {
            path: '/About',
            name: 'About',
            component: AboutView
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: ContactView
        },
        {
            path: '/Activities',
            name: 'Activities',
            component: ActivitiesView
        },
        {
            path: '/ComprarUno',
            name: 'ComprarUno',
            component: ComprarUnoView
        },
        {
            path: '/ComprarDos',
            name: 'ComprarDos',
            component: ComprarDosView
        }    
    ]
})

export default router