const tailwindBreakpoints = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
};

function watchBreakpoint(bp, callback) {
    const query = tailwindBreakpoints[bp];
    if (!query) {
        throw new Error(`Breakpoint ${bp} không tồn tại`);
    }

    const mq = window.matchMedia(query);

    // gọi ngay lần đầu
    callback(mq.matches);

    // lắng nghe resize
    mq.addEventListener('change', (e) => {
        callback(e.matches);
    });
}
