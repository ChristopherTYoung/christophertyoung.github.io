// REQUIREMENT #8 - Event Listener
window.addEventListener("load", async function () {
    // REQUIREMENT #10 - AJAX to interact with an API
    let response = await fetch("https://www.googleapis.com/blogger/v3/blogs/7348106859157198878/posts?key=AIzaSyDu3W_cZdzG7-U9B4mcTNy_L3WsCKVY7BM");
    let data = await response.json();
    // REQUIREMENT #9 - Query Selector 1
    document.querySelector("#main").innerHTML +="<h1>" + data.items[0].title + "</h1>" + "<p>" + data.items[0].author.displayName + "</p>" + data.items[0].content;
});