export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <img src="images/organ.jpg" alt="organ">
        <span class="w-textBox">
        <h3>Project: Organ Donation</h3>
        <h4>Years: 2019</h4>
        <h4>Project Type: Web Design & Poster & Brochure</h4>
        <h4>Team Members: Daffodil Ho, Soyoon Lee, Sujin Lee</h4>
        <p>For the organ donation project, we have researched a lot to create thoughtful theme of general wellness for people to attached their feelings. Overall, the theme colour as red, green, and white. Also, our team made the mockup for the package, shirt, brochure and sell sheet as well as website mockup.</p>
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