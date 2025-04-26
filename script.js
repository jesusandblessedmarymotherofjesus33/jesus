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
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // تحديث النصوص في الصفحة
    document.getElementById("site-title").textContent = langData[lang].siteTitle;
    document.getElementById("main-title").textContent = langData[lang].mainTitle;
    document.getElementById("menu-title").textContent = langData[lang].menuTitle;
    document.getElementById("menu-bio").textContent = langData[lang].menuBio;
    document.getElementById("menu-support").textContent = langData[lang].menuSupport;
    document.getElementById("menu-lang").textContent = langData[lang].menuLang;
    document.getElementById("welcome-title").textContent = langData[lang].welcomeTitle;
    document.getElementById("welcome-text").textContent = langData[lang].welcomeText;
    document.getElementById("start-btn").textContent = langData[lang].startBtn;
    document.getElementById("about-title").textContent = langData[lang].aboutTitle;
    document.getElementById("about-text").textContent = langData[lang].aboutText;
    document.getElementById("image-title").textContent = langData[lang].imageTitle;
    document.getElementById("prayer-title").textContent = langData[lang].prayerTitle;
    document.getElementById("prayer-text").textContent = langData[lang].prayerText;
    document.getElementById("gallery-title").textContent = langData[lang].galleryTitle;
}

// تعيين اللغة الافتراضية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    changeLanguage("ar");
});
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // حفظ اللغة المختارة في localStorage
    localStorage.setItem("selectedLanguage", lang);

    // تحديث النصوص في الصفحة
    document.getElementById("site-title").textContent = langData[lang].siteTitle;
    document.getElementById("main-title").textContent = langData[lang].mainTitle;
    document.getElementById("menu-title").textContent = langData[lang].menuTitle;
    document.getElementById("menu-bio").textContent = langData[lang].menuBio;
    document.getElementById("menu-support").textContent = langData[lang].menuSupport;
    document.getElementById("menu-lang").textContent = langData[lang].menuLang;
    document.getElementById("welcome-title").textContent = langData[lang].welcomeTitle;
    document.getElementById("welcome-text").textContent = langData[lang].welcomeText;

    let startButton = document.getElementById("start-btn");
    if (startButton) {
        startButton.textContent = langData[lang].startBtn;
        startButton.setAttribute("data-lang", lang); // تخزين اللغة المختارة في الزر
    }

    document.getElementById("about-title").textContent = langData[lang].aboutTitle;
    document.getElementById("about-text").textContent = langData[lang].aboutText;
    document.getElementById("image-title").textContent = langData[lang].imageTitle;
    document.getElementById("prayer-title").textContent = langData[lang].prayerTitle;
    document.getElementById("prayer-text").textContent = langData[lang].prayerText;
    document.getElementById("gallery-title").textContent = langData[lang].galleryTitle;
}

// عند تحميل الصفحة، استرجاع اللغة المختارة
document.addEventListener("DOMContentLoaded", function () {
    let savedLang = localStorage.getItem("selectedLanguage") || "ar";
    changeLanguage(savedLang);
});

// عند الضغط على زر "ابدأ"، تأكد من أن الصفحة التالية تحتفظ بنفس اللغة
document.getElementById("start-btn").addEventListener("click", function () {
    let lang = this.getAttribute("data-lang") || "ar";
    localStorage.setItem("selectedLanguage", lang);
    window.location.href = "nextpage.html"; // استبدل "nextpage.html" بالصفحة المطلوبة
});
}


</script>
</script>ک

