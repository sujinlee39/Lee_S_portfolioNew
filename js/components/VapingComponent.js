export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <video controls>
        <source src="images/vaping.mp4" type="video/mp4" data-desc-src="assets/vaping.mp4">
        <source src="images/vaping.webm" type="video/webm" data-desc-src="assets/vaping.webm">
        </video>
        <span class="w-textBox">
        <h3>Project: Vaping Project</h3>
        <h4>Years: 2020</h4>
        <h4>Project Type: Poster & Motion Design</h4>
        <h4>Team Members: Daffodil Ho, Soyoon Lee, Sujin Lee</h4>
        <p>Vaping project is about creating awareness of teenager vaping. Our team created a poster with some facts about vaping. I have created an awareness video to tell the story more visual way.</p>
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