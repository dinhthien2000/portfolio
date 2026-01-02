/**
 * Quan sát các phần tử và thêm animation khi xuất hiện
 * @param {string} selector - CSS selector của phần tử
 * @param {string} animation - Tên lớp animation để thêm vào phần tử khi nó xuất hiện
 */


function observeElements(selector, animation) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // if (entry.isIntersecting) {
            //     entry.target.classList.add(animation);
            // }
            entry.target.classList.toggle(animation, entry.isIntersecting);
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
    });
}

/**
 * Quan sát các phần tử và thêm animation khi không xuất hiện
 * @param {string} selector - CSS selector của phần tử
 * @param {string} selectorShow - CSS selector của phần tử cần hiển thị khi không xuất hiện
 */


function reverstObserveElements(selector, selectorShow) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector(selectorShow).classList.add('hidden');
            } else {

                document.querySelector(selectorShow).classList.remove('hidden');
            }

        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
    });
}