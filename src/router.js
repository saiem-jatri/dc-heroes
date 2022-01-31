import { createRouter, createWebHistory } from 'vue-router'
// import DcHeroes from "./components/DcHeroes.vue";
import Calendar  from "./views/calendar.vue";
import dcHeroes from "./views/dcHeroesPage.vue";
import Home from "./components/Home.vue";
import MarkDown from "./components/MarkDown.vue";

const routes=[
    {path:'/dc-heroes',component:dcHeroes},
    {path:'/home',component:Home},
    {path:'/calendar',component:Calendar},
    {path:'/markdown',component:MarkDown}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
