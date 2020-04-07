<?php

if(empty($_POST)){
    echo 'Error!';
    exit;
}
//Valiate all data;
$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'rladkanro512@gmail.com';

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
}

if(isset($_POST['message'])){
    $message = $_POST['message'];
}

// Send out email
$headers = array(
    'FROM'=>$name.'<'.$email.'>'
);

if(mail($recipient, $subject, $message, $headers)){
    echo '<p class="c-text">Thank you for contacting me, '.$name.'</p>';
}else{
    echo '<p class="c-text">Sorry but the email did not go through..</p>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="icon" type="image/png" href="../images/favicon.ico">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <title>Sujin Lee | Web & Motion Designer</title>
</head>
<body id="dataBody">
    <div id="goHome">
        <button><a href="../index.html">Go Home</a></button>
    </div>
</body>
</html>