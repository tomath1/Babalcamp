<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $departure = $_POST['departure'];
    $phone = $_POST['phone'];

    $mail = new PHPMailer(true);

    try {
        // إعداد SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'babalcamp@gmail.com';         // ضع بريدك Gmail
        $mail->Password = 'hzfcthqgzyekapvf';           // ضع كلمة مرور التطبيق Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // المرسل والمستلم
        $mail->setFrom('youremail@gmail.com', 'Babel Camp');
        $mail->addAddress('babalcamp@gmail.com');       // البريد الذي سيستلم الحجز

        // محتوى الرسالة
        $mail->isHTML(true);
        $mail->Subject = 'New Booking Submission';
        $mail->Body = "Email: $email<br>Departure Date: $departure<br>Phone: $phone";

        $mail->send();

        // إعادة توجيه لصفحة شكراً
        echo "<h2 style='text-align:center; color:green;'>Thank you! Your booking has been submitted.</h2>";

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
<?php
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'babalcamp@gmail.com';
$mail->Password = 'hzfcthqgzyekapvf';
$mail->SMTPSecure = 'tls';  // أو 'ssl' مع Port 465
$mail->Port = 587;           // 465 إذا SSL
?>
