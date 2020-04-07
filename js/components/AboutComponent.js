export default {
    
    template: `<section id="about" class="panel">
    <h2 class="hidden">About</h2>
    <div class="aboutMe">
    <img src="images/sujin.jpg" alt="photo of myself"/>
    <span class="textBox">
    <h2>Sujin Lee</h2>
    <h3>Web & Motion Designer</h3>
    <p>I’m 21 years old, study interactive media design at Fanshawe College. I did not have a coding background but still learning to code. Along with my design skills. I’m into web design, UX/UI, and motion as well. Trying to do new things all the time. Always, wondering and dreaming.</p>
    <button class="resume"><a href="images/resume.pdf">Resume</a></button></span>
    </div>


    <div class="list"> 
        <h2 class="hidden">Skills</h2>
    <div class="skills">
        <h2>Skills</h2>
        <p>Web Design</p>
        <p>UX/UI</p>
        <p>Graphic Design</p>
        <p>Motion Design</p>
        <p>Vdieo Editing</p>
    </div>
    <div class="skills">
        <h2>Code</h2>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Sass</p>
        <p>Javascript</p>
        <p>PHP</p>
    </div>
    <div class="skills">
        <h2>Tools</h2>
        <p>Photoshop</p>
        <p>Illustrator</p>
        <p>InDesign</p>
        <p>After Effects</p>
        <p>Cinema 4D</p>
    </div>
    </div>

</section>`,
   
    created: function() {
        console.log('about component rendered');
    },

    methods:{
    }
};