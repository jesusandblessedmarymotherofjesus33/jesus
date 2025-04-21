<?php
// إعدادات الاتصال بقاعدة البيانات
$host     = 'localhost';
$dbname   = 'support_db';
$username = 'root';     // غيّر حسب استضافتك
$password = '';         // غيّر حسب استضافتك

try {
    // الاتصال بقاعدة البيانات
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // التحقق من الطلب
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name    = htmlspecialchars($_POST["name"]);
        $email   = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        // حفظ البيانات
        $stmt = $pdo->prepare("INSERT INTO support_messages (name, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $message]);

        echo "تم حفظ رسالتك بنجاح. سنرد عليك قريبًا.";
    } else {
        echo "يرجى استخدام النموذج لإرسال البيانات.";
    }
} catch (PDOException $e) {
    echo "خطأ في الاتصال: " . $e->getMessage();
}
?>
<?php
// إعدادات الاتصال بقاعدة البيانات
$host     = 'localhost';
$dbname   = 'support_db';
$username = 'root';     // غيّر حسب استضافتك
$password = '';         // غيّر حسب استضافتك

try {
    // الاتصال بقاعدة البيانات
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // التحقق من الطلب
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name    = htmlspecialchars($_POST["name"]);
        $email   = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        // حفظ البيانات
        $stmt = $pdo->prepare("INSERT INTO support_messages (name, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $message]);

        echo "تم حفظ رسالتك بنجاح. سنرد عليك قريبًا.";
    } else {
        echo "يرجى استخدام النموذج لإرسال البيانات.";
    }
} catch (PDOException $e) {
    echo "خطأ في الاتصال: " . $e->getMessage();
}
?>
