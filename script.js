// فتح وإغلاق القائمة الجانبية
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let body = document.body;

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
    } else {
        sidebar.classList.add("open");
        body.classList.add("menu-open");
    }
}

// التنقل إلى صفحة السيرة
function start() {
    window.location.href = "main.html";
}

// تغيير اللغة
function changeLanguage(lang) {
    if (lang === "ar") {
        document.documentElement.lang = "ar";
        alert("تم تغيير اللغة إلى العربية");
    } else {
        document.documentElement.lang = "en";
        alert("Language changed to English");
    }
}
// فتح وإغلاق القائمة الجانبية
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let body = document.body;

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
    } else {
        sidebar.classList.add("open");
        body.classList.add("menu-open");
    }
}

// التنقل إلى صفحة السيرة
function start() {
    window.location.href = "main.html";
}

// تغيير اللغة
function changeLanguage(lang) {
    if (lang === "ar") {
        document.documentElement.lang = "ar";
        alert("تم تغيير اللغة إلى العربية");
    } else {
        document.documentElement.lang = "en";
        alert("Language changed to English");
    }
}