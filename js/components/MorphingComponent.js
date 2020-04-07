export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <video controls>
        <source src="images/morphing.mp4" type="video/mp4" data-desc-src="assets/morphing.mp4">
        <source src="images/morphing.webm" type="video/webm" data-desc-src="assets/morphing.webm">
        </video>
        <span class="w-textBox">
        <h3>Project: IKEA (Morphing)</h3>
        <h4>Years: 2019</h4>
        <h4>Project Type: Motion Design</h4>
        <h4>Team Members: Sujin Lee</h4>
        <p>Morphing Project was making objects morph after others. I have used the IKEA as the morph objects. After rendering in Cinema 4D. Edit the video in the After effects to add the sound and some effects to the video.</p>
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