export default {
    
    template: `<section id="work" class="panel">
    <h2 class="hidden">Work</h2>
    <h3>Please check out my previous works :)</h3>
    <p>Design, Front-end, 3D motion, and Video</p>
    <div class="w-data">
        <div class="work-panel">
        <router-link to="/bootcamp"><img src="images/bootcamp.jpg" alt="bootcamp" class="thumb"></router-link>
        <router-link to="/sportdata"><img src="images/limitless.jpg" alt="limitless" class="thumb"></router-link>
        <router-link to="/organ"><img src="images/organ.jpg" alt="organ" class="thumb"></router-link>
        <router-link to="sportnet"><img src="images/sportnet.jpg" alt="sportnet" class="thumb"></router-link>
        <router-link to="homecom"><img src="images/hackathon.jpg" alt="hackathon" class="thumb"></router-link>
        <router-link to="morphing"><img src="images/morphing.gif" alt="morphing" class="thumb"></router-link>
        <router-link to="ontario"><img src="images/ontariosummer.jpg" alt="ontariosummer" class="thumb"></router-link>
        <router-link to="vaping"><img src="images/vaping.gif" alt="vaping" class="thumb"></router-link>
        <router-link to="rry"><img src="images/fip.jpg" alt="fip" class="thumb"></router-link>
        <router-link to="bee"><img src="images/bee.jpg" alt="bee" class="thumb"></router-link>
        </div>
    </div>
</section>`,
   
    created: function() {
        console.log('work component rendered');
    },

    methods:{
    }
};