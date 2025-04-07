document.addEventListener('DOMContentLoaded', function() {
    // --- ハンバーガーメニューの処理 ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active'); // activeクラスを付け外し
        });
    }

    // --- FAQのアコーディオン機能 ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // クリックされた要素の親(.faq-item)にactiveクラスを付け外し
                item.classList.toggle('active');

                // (オプション) 他の開いている項目を閉じる場合
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item) {
                //         otherItem.classList.remove('active');
                //     }
                // });
            });
        }
    });

    // --- 現在のページをナビゲーションでハイライト ---
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split("/").pop(); // 現在のファイル名を取得

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active'); // 一致したらactiveクラスを追加
        }
    });

});