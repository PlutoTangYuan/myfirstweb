// 更新当前时间（匹配文艺风格式）
function updateTime() {
    const now = new Date();
    
    // 获取年月日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');

    // 获取时分秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 格式化时间
    const dateString = `${year}年${month}月${day}日`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 更新到页面
    document.getElementById('current-time').innerHTML = `${dateString} | ${timeString}`;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 页面加载时立即执行
document.addEventListener('DOMContentLoaded', updateTime);


// 逐字显示文本（让动画更柔和）
function revealText(element, delay = 120, callback = null) {
    const text = element.innerText;
    element.innerText = ''; // 清空原文本
    let i = 0;

    for (const char of text) {
        const span = document.createElement('span'); // 每个字一个 <span>
        span.innerText = char;
        span.style.opacity = "0"; // 初始透明
        span.style.transition = `opacity 0.5s ease ${i * delay}ms, transform 0.5s ease ${i * delay}ms`;
        span.style.transform = "translateY(10px)"; // 轻微上下浮动

        element.appendChild(span);

        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        }, i * delay);

        i++;
    }

    // 动画结束后执行回调（如副标题或按钮）
    if (callback) {
        setTimeout(callback, text.length * delay);
    }
}


// 页面加载完成后，执行动画
document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero-content p');
    const button = document.querySelector('.hero-content .btn'); // 确保按钮被正确选中
    const heroContent = document.querySelector('.hero-content'); // 确保给 `.hero-content` 添加 `show`

    // 先执行主标题
    revealText(title, 100, () => {
        // 让副标题可见，并逐字显示
        subtitle.style.visibility = 'visible';
        revealText(subtitle, 75, () => {
            // 确保 `.hero-content` 添加 `show` 类，使 `.btn` 可见
            heroContent.classList.add('show');
        });
    });
});




