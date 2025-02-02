document.addEventListener('DOMContentLoaded', function() {
    const postLinks = document.querySelectorAll('.post-card a');
    
    // 为每个文章链接绑定点击事件
    postLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.xiaohongshu.com', '_blank');  // 跳转到小红书官网
        });
    });

    // 监听滚动事件，改变背景渐变和字体大小
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero h1');
        
        // 计算滚动的百分比：页面滚动的距离 / 页面高度
        const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

        // 动态改变背景渐变
        if (scrollPosition > 100) {
            heroSection.classList.add('hero-scrolled');
        } else {
            heroSection.classList.remove('hero-scrolled');
        }

        // 动态调整背景渐变的透明度和色调
        const gradientOpacity = Math.min(0.8 + (scrollPercentage * 0.2), 1);  // 透明度从0.8到1
        heroSection.style.background = `linear-gradient(135deg, rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 0, 0, 0.8))`;

        // 动态调整字体大小：根据滚动百分比动态调整标题的大小
        const baseFontSize = 3.5;  // 初始字体大小为 3.5rem
        const minFontSize = 2.5;   // 滚动至最大时最小字体大小为 2.5rem
        const fontSize = baseFontSize - (scrollPercentage * (baseFontSize - minFontSize));  // 根据滚动百分比减小字体大小

        // 设置字体大小
        heroTitle.style.fontSize = `${fontSize}rem`;

        // 使标题的字母间距也随滚动改变，以增强动感效果
        const letterSpacing = Math.min(2 + (scrollPercentage * 3), 5); // 字母间距从 2 到 5px
        heroTitle.style.letterSpacing = `${letterSpacing}px`;
    });
});
