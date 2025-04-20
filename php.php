<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// تضمين مكتبة PHPMailer
require 'vendor/autoload.php';  // تأكد من أنك قمت بتثبيت PHPMailer عبر Composer

// تأكد من أن النموذج تم إرساله عبر POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات من النموذج
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    // تحقق من البيانات (مثلاً التحقق من صحة البريد الإلكتروني)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "البريد الإلكتروني غير صالح.";
        exit;
    }

    // إعداد البريد الإلكتروني باستخدام PHPMailer
    $mail = new PHPMailer(true);

    try {
        // إعدادات الخادم
        $mail->isSMTP();                                            // تحديد نوع الاتصال SMTP
        $mail->Host = 'smtp.gmail.com';                               // خادم SMTP لجوجل
        $mail->SMTPAuth = true;                                       // تفعيل التوثيق
        $mail->Username = 'your-email@gmail.com';                     // البريد الإلكتروني المستخدم لإرسال الرسائل
        $mail->Password = 'your-email-password';                      // كلمة مرور حسابك في جوجل أو كلمة مرور التطبيق
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           // تشفير الاتصال
        $mail->Port = 587;                                            // المنفذ المستخدم (587 هو المنفذ الآمن للبريد الإلكتروني)

        // من وإلى
        $mail->setFrom('your-email@gmail.com', 'اسم الموقع');
        $mail->addAddress('acounntmotherofjesusmedia@gmail.com');      // عنوان البريد المستلم
        $mail->addReplyTo($email, $name);                             // تعيين عنوان البريد للرد

        // المحتوى
        $mail->isHTML(true);                                          // استخدام HTML في البريد
        $mail->Subject = "رسالة تواصل جديدة من: $name";               // الموضوع
        $mail->Body    = "<strong>الاسم:</strong> $name<br>
                          <strong>البريد الإلكتروني:</strong> $email<br>
                          <strong>الرسالة:</strong><br>$message"; // محتوى الرسالة

        // إرسال البريد
        $mail->send();
        echo "تم إرسال رسالتك بنجاح!";
    } catch (Exception $e) {
        echo "حدث خطأ أثناء إرسال الرسالة: {$mail->ErrorInfo}";
    }
}

// دالة لتنظيف المدخلات
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
