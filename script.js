document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير الهيدر عند التمرير
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // لو المستخدم نزل أكتر من 50 بكسل
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. ظهور الأقسام والعناصر (Fade-in on Scroll)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    // Intersection Observer للتعامل مع ظهور العناصر عند السكرول
    const observerOptions = {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // العنصر يظهر لما 20% منه يكون مرئي
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // توقف عن مراقبة العنصر بعد ظهوره
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // لا توقف عن مراقبة العناصر الصغيرة هنا لو عايزها تختفي وتظهر تاني
                // لكن لو عايزها تظهر مرة واحدة بس، ممكن تستخدم observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // راقب الأقسام الكبيرة
    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // راقب العناصر الفردية (الآيات والصلوات)
    fadeInItems.forEach((item, index) => {
        // يمكن إضافة تأخير بسيط لكل عنصر ليعطي تأثير تسلسلي
        item.style.transitionDelay = `${index * 0.1}s`;
        itemObserver.observe(item);
    });

    // 3. Smooth Scrolling for Navigation Links (اختياري لتحسين تجربة المستخدم)
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير الهيدر عند التمرير
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. ظهور الأقسام والعناصر (Fade-in on Scroll)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // العنصر يظهر لما 10% منه يكون مرئي
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // لا توقف عن مراقبة العناصر الصغيرة هنا لو عايزها تختفي وتظهر تاني
                // observer.unobserve(entry.target); // uncomment if you want them to animate only once
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    fadeInItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        itemObserver.observe(item);
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // حساب مكان العنصر مع الأخذ في الاعتبار ارتفاع الهيدر الثابت
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. الوضع الليلي (Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');

    // تحقق من تفضيل المستخدم المحفوظ
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // تغيير الأيقونة للشمس
    }

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // وضع ليلي: أيقونة الشمس
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // وضع نهاري: أيقونة القمر
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // 5. زر البحث ووظيفة البحث
    const searchToggleBtn = document.getElementById('search-toggle-btn');
    const searchBarContainer = document.getElementById('search-bar-container');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchInput = document.getElementById('search-input');
    const searchableItems = document.querySelectorAll('.verse-box, .prayer-box, .hymn-card, .about-section, .contact-section'); // العناصر التي يمكن البحث فيها

    searchToggleBtn.addEventListener('click', function() {
        searchBarContainer.classList.toggle('active'); // إظهار/إخفاء شريط البحث
        if (searchBarContainer.classList.contains('active')) {
            searchInput.focus(); // التركيز على حقل البحث عند ظهوره
        } else {
            searchInput.value = ''; // مسح البحث عند إخفاء الشريط
            filterContent(''); // إعادة إظهار كل المحتوى
        }
    });

    closeSearchBtn.addEventListener('click', function() {
        searchBarContainer.classList.remove('active');
        searchInput.value = '';
        filterContent(''); // إعادة إظهار كل المحتوى
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filterContent(searchTerm);
    });

    function filterContent(searchTerm) {
        searchableItems.forEach(item => {
            const itemText = item.getAttribute('data-search-term') || item.textContent.toLowerCase(); // البحث في data-search-term أو textContent
            const matches = itemText.includes(searchTerm);

            if (matches || searchTerm === '') {
                item.style.display = 'block'; // أو 'grid' أو 'flex' حسب العنصر الأب
                // بالنسبة للأقسام الكبيرة، ممكن نحتاج نظهر العنصر الأب بتاعها
                if (item.classList.contains('section-container')) {
                    item.style.display = 'block';
                } else if (item.closest('.verses-grid') || item.closest('.hymns-grid')) {
                    // عشان نظهر الآيات والترانيم اللي جوه الـ grid صح
                    item.style.display = 'block';
                } else if (item.closest('.prayers-section') && item.classList.contains('prayer-box')) {
                    item.style.display = 'block';
                } else if (item.classList.contains('hymn-card')) {
                    item.style.display = 'block';
                }
            } else {
                item.style.display = 'none';
            }

            // لو العنصر هو قسم كبير، تأكد من إخفائه لو كل محتواه مخفي
            if (item.classList.contains('section-container') && searchTerm !== '') {
                const innerItems = item.querySelectorAll('.fade-in-item');
                let allInnerHidden = true;
                innerItems.forEach(innerItem => {
                    if (innerItem.style.display !== 'none') {
                        allInnerHidden = false;
                    }
                });
                if (allInnerHidden) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير الهيدر عند التمرير
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. ظهور الأقسام والعناصر (Fade-in on Scroll)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // العنصر يظهر لما 10% منه يكون مرئي
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // لا توقف عن مراقبة العناصر الصغيرة هنا لو عايزها تختفي وتظهر تاني
                // observer.unobserve(entry.target); // uncomment if you want them to animate only once
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    fadeInItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        itemObserver.observe(item);
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // حساب مكان العنصر مع الأخذ في الاعتبار ارتفاع الهيدر الثابت
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. الوضع الليلي (Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');

    // تحقق من تفضيل المستخدم المحفوظ
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // تغيير الأيقونة للشمس
    }

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // وضع ليلي: أيقونة الشمس
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // وضع نهاري: أيقونة القمر
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // 5. زر البحث ووظيفة البحث
    const searchToggleBtn = document.getElementById('search-toggle-btn');
    const searchBarContainer = document.getElementById('search-bar-container');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchInput = document.getElementById('search-input');
    const searchableItems = document.querySelectorAll('.verse-box, .prayer-box, .hymn-card, .about-section, .contact-section'); // العناصر التي يمكن البحث فيها

    searchToggleBtn.addEventListener('click', function() {
        searchBarContainer.classList.toggle('active'); // إظهار/إخفاء شريط البحث
        if (searchBarContainer.classList.contains('active')) {
            searchInput.focus(); // التركيز على حقل البحث عند ظهوره
        } else {
            searchInput.value = ''; // مسح البحث عند إخفاء الشريط
            filterContent(''); // إعادة إظهار كل المحتوى
        }
    });

    closeSearchBtn.addEventListener('click', function() {
        searchBarContainer.classList.remove('active');
        searchInput.value = '';
        filterContent(''); // إعادة إظهار كل المحتوى
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filterContent(searchTerm);
    });

    function filterContent(searchTerm) {
        searchableItems.forEach(item => {
            const itemText = item.getAttribute('data-search-term') || item.textContent.toLowerCase(); // البحث في data-search-term أو textContent
            const matches = itemText.includes(searchTerm);

            if (matches || searchTerm === '') {
                item.style.display = 'block'; // أو 'grid' أو 'flex' حسب العنصر الأب
                // بالنسبة للأقسام الكبيرة، ممكن نحتاج نظهر العنصر الأب بتاعها
                if (item.classList.contains('section-container')) {
                    item.style.display = 'block';
                } else if (item.closest('.verses-grid') || item.closest('.hymns-grid')) {
                    // عشان نظهر الآيات والترانيم اللي جوه الـ grid صح
                    item.style.display = 'block';
                } else if (item.closest('.prayers-section') && item.classList.contains('prayer-box')) {
                    item.style.display = 'block';
                } else if (item.classList.contains('hymn-card')) {
                    item.style.display = 'block';
                }
            } else {
                item.style.display = 'none';
            }

            // لو العنصر هو قسم كبير، تأكد من إخفائه لو كل محتواه مخفي
            if (item.classList.contains('section-container') && searchTerm !== '') {
                const innerItems = item.querySelectorAll('.fade-in-item');
                let allInnerHidden = true;
                innerItems.forEach(innerItem => {
                    if (innerItem.style.display !== 'none') {
                        allInnerHidden = false;
                    }
                });
                if (allInnerHidden) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير الهيدر عند التمرير
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. ظهور الأقسام والعناصر (Fade-in on Scroll)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    fadeInItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        itemObserver.observe(item);
    });

    // 3. Smooth Scrolling for Navigation Links (في السايدبار الآن)
    const sidebar = document.getElementById('my-sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    const mainContent = document.getElementById('main-content');
    const sidebarOverlay = document.getElementById('sidebar-overlay');


    sidebarLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = header.offsetHeight;
                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                // إغلاق السايدبار بعد الضغط على الرابط
                closeSidebar();
            }
        });
    });

    // 4. وظيفة القائمة الجانبية (Sidebar)
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');

    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.style.display = 'block';
        document.body.classList.add('sidebar-open'); // لإضافة overflow: hidden
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.style.display = 'none';
        document.body.classList.remove('sidebar-open'); // لإزالة overflow: hidden
    }

    openSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar); // إغلاق عند الضغط على الـ overlay

    // 5. وظيفة البحث (الآن داخل السايدبار)
    const sidebarSearchInput = document.getElementById('sidebar-search-input');
    const sidebarSearchBtn = document.getElementById('sidebar-search-btn'); // الزر بجانب حقل البحث في السايدبار
    const searchableItems = document.querySelectorAll('.verse-box, .prayer-box, .hymn-card, #saints-stories-section .box, #miracles-section .box, #daily-devotions-section .box, .about-section, .contact-section');

    // لا نحتاج لزر بحث منفصل لفتح شريط بحث Overlay، البحث أصبح داخل السايدبار
    // searchToggleBtn و searchBarContainer و closeSearchBtn السابقين لم يعد لهم وجود

    sidebarSearchInput.addEventListener('input', function() {
        const searchTerm = sidebarSearchInput.value.toLowerCase().trim();
        filterContent(searchTerm);
    });

    // يمكنك إضافة event listener لزر البحث بجانب الحقل إذا أردت تفعيل البحث بالضغط عليه
    sidebarSearchBtn.addEventListener('click', function() {
        const searchTerm = sidebarSearchInput.value.toLowerCase().trim();
        filterContent(searchTerm);
    });

    function filterContent(searchTerm) {
        // أولاً، إخفاء كل العناصر والأقسام
        searchableItems.forEach(item => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.section-container').forEach(section => {
            section.style.display = 'none';
        });


        // ثانياً، إظهار العناصر والأقسام المطابقة للبحث
        searchableItems.forEach(item => {
            const itemText = item.getAttribute('data-search-term') || item.textContent.toLowerCase();
            const matches = itemText.includes(searchTerm);

            if (matches || searchTerm === '') {
                // إظهار العنصر نفسه
                if (item.classList.contains('verse-box') || item.classList.contains('prayer-box') || item.classList.contains('hymn-card') || item.classList.contains('box')) {
                     item.style.display = 'block';
                } else if (item.classList.contains('section-container')) { // الأقسام الرئيسية نفسها
                    item.style.display = 'block';
                }

                // إظهار القسم الأب للعنصر لو كان العنصر داخل قسم
                let parentSection = item.closest('.section-container');
                if (parentSection) {
                    parentSection.style.display = 'block';
                }
            }
        });

        // إذا كان شريط البحث فارغاً، أظهر كل الأقسام الرئيسية وكل عناصرها
        if (searchTerm === '') {
            document.querySelectorAll('.section-container').forEach(section => {
                section.style.display = 'block';
            });
            searchableItems.forEach(item => {
                 // تأكد من ظهور العناصر داخل الجريدز بشكل صحيح
                if (item.classList.contains('verse-box') || item.classList.contains('prayer-box') || item.classList.contains('hymn-card') || item.classList.contains('box')) {
                    item.style.display = 'block';
                }
            });
        }
    }
});
