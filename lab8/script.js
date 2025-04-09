var container = document.getElementById('container');
var errorCount = 0;  // 記錄連續錯誤次數

window.onload = function() {
    container.textContent = add_new_chars(3);  // 一開始產生亂數字串
};

function add_new_chars(x) {
    var n = Math.floor(Math.random() * x) + 1;
    var str = '';
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

window.addEventListener("keyup", function(e) {
    var firstChar = container.textContent.substring(0, 1);

    if (e.key === firstChar) {
        // 打對了，消掉第一個字母
        container.textContent = container.textContent.substring(1);
        errorCount = 0;  // 重設錯誤次數
    } else {
        // 打錯了，記錄錯誤次數
        container.textContent += e.key;
        errorCount++;

        if (errorCount >= 3) {
            // 連錯三次，額外加 6 組亂數字串
            for (let i = 0; i < 6; i++) {
                container.textContent += add_new_chars(3);
            }
            errorCount = 0;  // 重設錯誤次數
        }
    }

    // 不管有沒有錯都要再加一組亂數字串
    container.textContent += add_new_chars(3);
});
