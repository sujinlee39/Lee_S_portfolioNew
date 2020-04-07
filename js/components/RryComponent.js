export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <img src="images/fip.jpg" alt="fip">
        <span class="w-textBox">
        <h3>Project: RRY(RedRibbonYouth)</h3>
        <h4>Years: 2020</h4>
        <h4>Project Type: Web Design & Development, Motion Design</h4>
        <h4>Team Members: Daffodil Ho, Megan Nguyen, Jeffrey Helder, Soyoon Lee, Sujin Lee</h4>
        <p>RRY (RedRibbonYouth) campaign project is for a real client as a work of final assignment for school as well. Our team build a campaign website to give a message to people. About we are all same even though we have HIV/AIDS. I have created a promotional video to give a meaningful and touching message.</p>
        </span>
        <video controls id="l-video">
        <source src="images/fip.mp4" type="video/mp4" data-desc-src="assets/fip.mp4">
        <source src="images/fip.webm" type="video/webm" data-desc-src="assets/fip.webm">
        </video>
    </div>
    </section>
    `,
   
    created: function() {
        console.log('bootcamp component rendered');
    },

    methods:{
    }
};