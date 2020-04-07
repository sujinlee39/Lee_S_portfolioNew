export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <video controls>
        <source src="images/sportnet.mp4" type="video/mp4" data-desc-src="assets/sportnet.mp4">
        <source src="images/sportnet.webm" type="video/webm" data-desc-src="assets/sportnet.webm">
        </video>
        <span class="w-textBox">
        <h3>Project: Sportnet</h3>
        <h4>Years: 2019</h4>
        <h4>Project Type: Motion Design</h4>
        <h4>Team Members: Sujin Lee</h4>
        <p>SportsNet Project was rebuilding the opening for SportsNet using Cinema 4D. After the building 3D renders, use the After-effects to edit the light, camera effect and add the audio as well.</p>
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