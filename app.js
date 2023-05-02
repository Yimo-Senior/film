const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (4 + clickCounter) > 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
                - 290}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    })

    console.log(movieLists[i].querySelectorAll("img").length)
})

//点击房子图标跳转回index.html
function goHome() {
    window.location.href = "index.html";
}


// 获取下拉列表元素
var dropdown = document.getElementById("dropdown");
// 获取图标元素
var icon = document.querySelector(".fa-caret-down");
// 获取图片元素
var img = document.querySelector(".profile-picture");
// 添加点击事件监听器
document.addEventListener("click", function (e) {
    // 检查点击的目标是否在下拉列表或图标或图片内
    if (!dropdown.contains(e.target) && !icon.contains(e.target) && !img.contains(e.target)) {
        // 如果不在，就隐藏下拉列表
        dropdown.style.display = "none";
    } else {
        // 如果在，就切换下拉列表的显示状态
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    }
});
