import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProgramacionView from "../views/ProgramacionView.vue"
import FunctionView from "../views/FunctionView.vue"
import ContactView from "../views/ContactView.vue"
import ActivitiesView from "../views/ActivitiesView.vue"
import ComprarUnoView from "../views/ComprarUno.vue"
import ComprarDosView from "../views/ComprarDos.vue"
import HistorialComponentVue from "@/components/HistorialComponent.vue"
import AdminPanelView from "../views/AdminPanelView.vue"
import LoginView from "../views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginView
        },    
        {
            path: '/Home',
            name: 'Home',
            component: HomeView
        },
     
        {
            path: '/AdminPanel',
            name: 'AdminPanel',
            component: AdminPanelView
        },
        {
            path: '/Programacion',
            name: 'Programacion',
            component: ProgramacionView
        },
        {
            path: '/Function/:Id',
            name: 'Function',
            component: FunctionView
        },
        {
            path: '/Historial',
            name: 'Historial',
            component: HistorialComponentVue
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
            path: '/ComprarUno/:Id',
            name: 'ComprarUno',
            component: ComprarUnoView
        },
        {
            path: '/ComprarDos/:Id',
            name: 'ComprarDos',
            component: ComprarDosView
        }    
    ]
})

export default router