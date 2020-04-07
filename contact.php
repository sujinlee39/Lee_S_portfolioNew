<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="icon" type="image/png" href="images/favicon.ico">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Sujin Lee | Web & Motion Designer</title>
</head>
<body>
    <section id="contact" class="panel">
    <h2 class="hidden">Contact</h2>
    <h3>Please contact me if you have any questions!</h3>
    <a id="close" href="index.html">X</a>
    <div id="form">
        <form action="data/data.php" method="post">
            <label for="name">Name*</label>
            <input id="name" type="text" name="name" placeholder="Name" required>

            <label for="email">Email*</label>
            <input id="email" type="text" name="email" placeholder="Email" required>

            <label for="subject">Subject*</label>
            <input id="subject" type="text" name="subject" placeholder="Subject" required>

            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Messsage.."></textarea>

            <button type="submit" id="submit-btn">Send</button>
        </form>
    </div>
    </section>
    <footer id="mainFooter">
        <h1 class="hidden">Main Footer</h1>
        <ul>
            <li><a href="https://www.instagram.com/sujin_l2e.98/" id="instagram"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sujinl2e98" id="linkedin"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/sujinlee39" id="github"><i class="fab fa-github"></i></a></li>
        </ul>
        <p>© 2020 All Rights Reserved</p>
    </footer>
</body>
</html>
