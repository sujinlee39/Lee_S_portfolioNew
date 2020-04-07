export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <img src="images/ontariosummer.jpg" alt="ontariosummer">
        <span class="w-textBox">
        <h3>Project: Ontario Summer</h3>
        <h4>Years: 2020</h4>
        <h4>Project Type: Web Design & Development, Motion Design</h4>
        <h4>Team Members: Nour al-Osman, Daffodil Ho, Jeffrey Helder, Soyoon Lee, Sujin Lee</h4>
        <p>Ontario Summer project was to build in full website with a promotion video within 48 hrs. I took the role of motion designer to create a 30-second promotion video to tell the summer actives and explore what is like during summer in Ontario. Also, others work on web design, logo design, front-end, and back-end.</p>
        </span>
        <video controls id="l-video">
        <source src="images/ontario.mp4" type="video/mp4" data-desc-src="assets/ontario.mp4">
        <source src="images/ontario.webm" type="video/webm" data-desc-src="assets/ontario.webm">
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