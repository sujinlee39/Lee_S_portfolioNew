export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <img src="images/bootcamp.jpg" alt="bootcamp">
        <span class="w-textBox">
        <h3>Project: Float:left (BootCamp)</h3>
        <h4>Years: 2019</h4>
        <h4>Project Type: Web Design & Development, Motion Design</h4>
        <h4>Team Members: Daffodil Ho, Jeffrey Helder, Soyoon Lee, Sujin Lee</h4>
        <p>Building a full stack one-page website with group members. It was about making our start-up company website. As a group, we thought about making a web-development company called, "float: left". At first, the logo was simple as the actually CSS font but we thought it might need more colour and tone to it so that is how our logo come out. Overall, we design and build this top to bottom and also, made the video using After Effects.</p>
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