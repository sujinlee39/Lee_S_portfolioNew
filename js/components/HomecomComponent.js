export default {
    
    template: `
    <section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <img src="images/hackathon.jpg" alt="hackathon">
        <span class="w-textBox">
        <h3>Project: HouseCom<br>ThermoSecurity</h3>
        <h4>Years: 2019</h4>
        <h4>Project Type: Web Design & Development, Motion Design</h4>
        <h4>Team Members: Taylor Dronfield, Hyeryn Kim, Gahyun Lee, Soyoon Lee, Sujin Lee</h4>
        <p>As this project took about 48hr to make all the full stack responsive web page. All the team members work hard to make it out of best. Generally, design a one-page feature web page for ThermoSecurity product and also build it in Cinema 4D and mockup the product as real as it is. Overly, done with design, front-end, and back-end as well the database shows up on the page.</p>
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