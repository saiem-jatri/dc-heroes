import { createRouter, createWebHistory } from 'vue-router'
// import DcHeroes from "./components/DcHeroes.vue";
import Calendar  from "./views/calendar.vue";
import dcHeroes from "./views/dcHeroesPage.vue";
import Home from "./components/Home.vue";
import MarkDown from "./components/MarkDown.vue";
import Carousel from "./components/Carousel.vue";
import LoginModal from "./components/LoginModal.vue";
import Calculator from "./components/Calculator.vue";


const routes=[
    {path:'/dc-heroes',component:dcHeroes},
    {path:'/home',component:Home},
    {path:'/calendar',component:Calendar},
    {path:'/markdown',component:MarkDown},
    {path:'/carousel',component:Carousel},
    {path:'/LoginModal',component:LoginModal},
    {path:'/Calculator',component:Calculator},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
