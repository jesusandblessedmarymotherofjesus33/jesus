function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scrolling when sidebar is open
    }
}

// Close sidebar when clicking outside (on overlay)
document.getElementById('sidebar-overlay').addEventListener('click', toggleSidebar);

// Optional: Close sidebar on swipe (for mobile)
let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
    if (touchstartX - touchendX > 70) { // Swiped left (to close sidebar from right)
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    }
    if (touchendX - touchstartX > 70) { // Swiped right (to open sidebar from left, not applicable in RTL sidebar)
        // You might want to enable this if your sidebar opens from left
        // const sidebar = document.getElementById('sidebar');
        // if (!sidebar.classList.contains('active')) {
        //     toggleSidebar();
        // }
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});
        // الحصول على المودال (النافذة المنبثقة)
        var modal = document.getElementById("articleModal");

        // الحصول على عنصر الـ <span> الذي يغلق المودال
        var span = document.getElementsByClassName("close-button")[0];

        // الحصول على جميع العناصر التي تفتح المودال (أزرار "اقرأ المزيد")
        var readMoreButtons = document.querySelectorAll(".read-more");

        // كائن لتخزين محتوى المقالات (في سيناريو حقيقي، سيأتي هذا من قاعدة بيانات)
        var articles = {
            article1: {
                title: "أهمية الصلاة في الحياة اليومية",
                content: `
                    <p>الصلاة هي جانب أساسي من جوانب الحياة المسيحية، فهي بمثابة خط اتصال مباشر مع الله. لا تتعلق فقط بطلب الأشياء، بل أيضًا ببناء علاقة، والتعبير عن الامتنان، وطلب الإرشاد. تساعد الصلاة المنتظمة المؤمنين على:</p>
                    <ul>
                        <li>تطوير اتصال أعمق مع الإله.</li>
                        <li>إيجاد السلام والراحة في الأوقات المضطربة.</li>
                        <li>الحصول على الوضوح والحكمة في قرارات الحياة.</li>
                        <li>تقوية الإيمان والثقة في خطة الله.</li>
                        <li>ممارسة التواضع والاستسلام.</li>
                    </ul>
                    <p>سواء كانت صلاة رسمية، أو محادثة عفوية، أو تأملًا هادئًا، فإن تخصيص وقت للصلاة يمكن أن يحول مسيرتك اليومية مع المسيح.</p>
                `
            },
            article2: {
                title: "فهم تعاليم يسوع المسيح",
                content: `
                    <p>تشكل تعاليم يسوع المسيح، كما وردت في الأناجيل، حجر الزاوية للمسيحية. تركز رسائله على المحبة والرحمة والمغفرة وخدمة الآخرين. تشمل الموضوعات الرئيسية ما يلي:</p>
                    <ul>
                        <li><strong>محبة الله والقريب:</strong> أعظم الوصايا تدور حول المحبة غير الأنانية.</li>
                        <li><strong>المغفرة:</strong> علم يسوع الغفران الجذري، حتى للأعداء.</li>
                        <li><strong>التواضع والخدمة:</strong> جسّد وشجع خدمة الآخرين قبل النفس.</li>
                        <li><strong>ملكوت الله:</strong> مفهوم مركزي، يشير إلى ملكوت الله والحقيقة الروحية.</li>
                        <li><strong>التضحية والفداء:</strong> تضحيته النهائية من أجل خلاص البشرية.</li>
                    </ul>
                    <p>توفر دراسة أمثاله وعظاته رؤى عميقة حول عيش حياة متوافقة مع مشيئة الله.</p>
                `
            },
            article3: {
                title: "دور الإيمان في التغلب على التحديات",
                content: `
                    <p>الإيمان أكثر من مجرد اعتقاد؛ إنه ثقة واتكال على الله، خاصة عند مواجهة الصعوبات. في الكتاب المقدس المسيحي، غالبًا ما يُقدم الإيمان كدرع ومصدر للقوة. عندما تنشأ التحديات، يمكّن الإيمان المؤمنين من:</p>
                    <ul>
                        <li>البقاء متفائلين في خضم الشدائد.</li>
                        <li>الإيمان بتدبير الله وإرشاده.</li>
                        <li>إيجاد الشجاعة للمثابرة.</li>
                        <li>رؤية العقبات كفرص للنمو الروحي.</li>
                        <li>الاستناد إلى سيادة الله، مع العلم أنه متحكم في كل شيء.</li>
                    </ul>
                    <p>تنمية إيمان قوي من خلال الصلاة وقراءة الكتاب المقدس والشركة يمكن أن يجهز الأفراد للتنقل في عواصف الحياة بمرونة وسلام.</p>
                `
            }
            // أضف المزيد من محتوى المقالات هنا، مع مطابقة data-article-id
        };

        // عندما يضغط المستخدم على زر "اقرأ المزيد"، افتح النافذة المنبثقة
        readMoreButtons.forEach(button => {
            button.onclick = function() {
                var articleId = this.dataset.articleId;
                var article = articles[articleId];
                if (article) {
                    document.getElementById("modalTitle").innerHTML = article.title;
                    document.getElementById("modalBody").innerHTML = article.content;
                    modal.style.display = "block";
                }
            }
        });

        // عندما يضغط المستخدم على <span> (x)، أغلق النافذة المنبثقة
        span.onclick = function() {
            modal.style.display = "none";
        }

        // عندما يضغط المستخدم في أي مكان خارج النافذة المنبثقة، أغلقها
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }