import MainComponent from "./components/MainComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import WorkComponent from "./components/WorkComponent.js";
import BootcampComponent from "./components/BootcampComponent.js";
import SportdataComponent from "./components/SportdataComponent.js";
import OrganComponent from "./components/OrganComponent.js";
import SportnetComponent from "./components/SportnetComponent.js";
import HomecomComponent from "./components/HomecomComponent.js";
import MorphingComponent from "./components/MorphingComponent.js";
import OntarioComponent from "./components/OntarioComponent.js";
import VapingComponent from "./components/VapingComponent.js";
import RryComponent from "./components/RryComponent.js";
import BeeComponent from "./components/BeeComponent.js";


const routes = [
   { path: '/', name: 'Main', component: MainComponent},
   { path: '/about', name: 'About', component: AboutComponent},
   { path: '/work', name: 'Work', component: WorkComponent},
   { path: '/bootcamp', name: 'Bootcamp', component: BootcampComponent},
   { path: '/sportdata', name: 'Sportdata', component: SportdataComponent},
   { path: '/organ', name: 'Organ', component: OrganComponent},
   { path: '/sportnet', name: 'Sportnet', component: SportnetComponent},
   { path: '/homecom', name: 'Homecom', component: HomecomComponent},
   { path: '/morphing', name: 'Morphing', component: MorphingComponent},
   { path: '/ontario', name: 'Ontario', component: OntarioComponent},
   { path: '/vaping', name: 'Vaping', component: VapingComponent},
   { path: '/rry', name: 'Rry', component: RryComponent},
   { path: '/bee', name: 'Bee', component: BeeComponent}
]


const router = new VueRouter({
    routes 
  })


  const vm = new Vue({
    data: {
      


    },

    methods: {
     


    },

    router
}).$mount("#app");

const myVM = (() => {

  let burger = document.querySelector('#burger'),
      burgerContent = document.querySelector('#mainNav'),
      navFiller = document.querySelector('#mobileNavCon'),
      btns = document.querySelectorAll('a');

      btns.forEach(btn => {
        btn.addEventListener('click', function(){
          btns.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        })
      })


      function burgerMenu() {
        burgerContent.classList.toggle("slideToggle");
        navFiller.classList.toggle("blank");
      };

      burger.addEventListener("click", burgerMenu, false);


})();