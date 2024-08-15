document.querySelectorAll('.collapse-area .heading').forEach(heading => {
    heading.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block'; 
            content.offsetHeight; // 触发重绘，确保动画生效
            content.style.padding = '10px 15px';
            requestAnimationFrame(() => {
                content.style.height = content.scrollHeight + 'px';
                this.firstElementChild.style.transform = 'rotate(90deg)'
            });
        } else {
            content.style.height = '0px';
            content.style.padding = '0px 15px';
            this.firstElementChild.style.transform = 'rotate(0deg)'
            content.addEventListener('transitionend', function () {
                if (content.style.height === '0px') {
                    content.style.display = 'none';
                }
            }, { once: true });
        }
    });
});