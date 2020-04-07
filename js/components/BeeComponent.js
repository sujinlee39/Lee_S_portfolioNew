export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <video controls>
        <source src="images/bee.mp4" type="video/mp4" data-desc-src="assets/bee.mp4">
        <source src="images/bee.webm" type="video/webm" data-desc-src="assets/bee.webm">
        </video>
        <span class="w-textBox">
        <h3>Project: Bee Project</h3>
        <h4>Years: 2020</h4>
        <h4>Project Type: Motion Design</h4>
        <h4>Team Members: Sujin Lee, Megan Nguyen</h4>
        <p>Bee Project video is about a short campaign to not harm bees. Worked as in-class projects with a two pairs. Animated with text and a logo image.</p>
        </span>
    </div>
    </section>
    `,
   
    created: function() {
        console.log('bootcamp component rendered');
    },

    methods:{
    }
};