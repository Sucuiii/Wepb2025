var container = document.getElementById('container');
var errorCount = 0;

window.onload = function() {
    container.textContent = add_new_chars(3);
};

function add_new_chars(x) {
    var n = Math.floor(Math.random() * x) + 1;
    var str = '';
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

// ➕ 新增一個專門加 N 個亂數字母的函式
function add_random_letters(count) {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

window.addEventListener("keyup", function(e) {
    var firstChar = container.textContent.substring(0, 1);

    if (e.key === firstChar) {
        container.textContent = container.textContent.substring(1);
        errorCount = 0;
    } else {
        container.textContent += e.key;
        errorCount++;

        if (errorCount >= 3) {
            container.textContent += add_random_letters(6);  // 加6個字母（不是6組字串）
            errorCount = 0;
        }
    }

    container.textContent += add_new_chars(3);  // 每次都加基本的亂數字串
});

