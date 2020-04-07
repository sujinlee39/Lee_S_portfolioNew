export default {
    
    template: `<section class="w-info">
    <router-link to="/work" class="w-back">〱Back</router-link>
    <div class="w-itext">
        <video controls>
        <source src="images/limitless.mp4" type="video/mp4" data-desc-src="assets/limitless.mp4">
        <source src="images/limitless.webm" type="video/webm" data-desc-src="assets/limitless.webm">
        </video>
        <span class="w-textBox">
        <h3>Project: Sports Data Visualization</h3>
        <h4>Years: 2020</h4>
        <h4>Project Type: Style Design & Motion Design</h4>
        <h4>Team Members: Sujin Lee, Megan Nguyen</h4>
        <p>Sport science data visualization project work with two pairs. The first part of the work was creating a style guide. Out team come up with this concept called "Limitless" is a fitness campaign that celebrates 'the determination for hitting a specific milestone at the gym'. For the motion part, track the motion to create HUDS + GUIS as real as possible. To make all the elements go together, keep the colour theme as a blueish tone.</p>
        </span>
    </div>
    </section>
    `,
   
    created: function() {
        console.log('sportdata component rendered');
    },

    methods:{
    }
};