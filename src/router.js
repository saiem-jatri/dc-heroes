import { createRouter, createWebHistory } from 'vue-router'
// import DcHeroes from "./components/DcHeroes.vue";
import Calendar from "./views/calendar.vue";
import dcHeroes from "./views/dcHeroesPage.vue";

const routes=[
    {path:'/dc-heroes',component:dcHeroes},
    {path:'/calendar',component:Calendar}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
