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
<!-- سكريبت الظهور بعد التحميل -->
  <script>
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 800);
    });

    function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("open");
    }

    function openFullScreen(img) {
      const container = document.getElementById("fullscreen-container");
      const fullImg = document.getElementById("fullscreen-image");
      fullImg.src = img.src;
      container.style.display = "flex";
    }

    function closeFullScreen() {
      document.getElementById("fullscreen-container").style.display = "none";
    }

    function start() {
      window.location.href = "main.html";
    }

    function changeLanguage(lang) {
      alert("سيتم تحويل اللغة إلى: " + lang);
    }
  </script>
<script>
function sayAmen() {
  alert("آمين!");
}

function lightCandle() {
  const candleBtn = event.target;
  candleBtn.classList.toggle("candle-lit");
  candleBtn.innerText = candleBtn.classList.contains("candle-lit") ? "أُضيئت شمعة" : "أضئ شمعة";
}

function copyPrayer() {
  const prayer = document.getElementById("good-friday-prayer").innerText;
  navigator.clipboard.writeText(prayer).then(() => {
    alert("تم نسخ الصلاة!");
  });
}
function lightCandle() {
  const container = document.getElementById('candleContainer');
  const candle = document.createElement('div');
  candle.classList.add('candle');

  const flame = document.createElement('div');
  flame.classList.add('flame');

  candle.appendChild(flame);
  container.appendChild(candle);
}
function lightPrayer() {
  const section = document.getElementById("prayerSection");
  section.classList.add("glow");
}
</script>
<script>
  // إظهار الزر عند التمرير
  window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // تنفيذ الرجوع للأعلى
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
<script>
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
</script>
</script>
</body>
<button onclick="scrollToTop()" id="scrollTopBtn" title="رجوع لأعلى">↑</button>

