// REQUIREMENT #8 - Event Listener
window.addEventListener("load", async function () {
    let response = await fetch("https://www.googleapis.com/blogger/v3/blogs/7348106859157198878/posts?key=AIzaSyDu3W_cZdzG7-U9B4mcTNy_L3WsCKVY7BM");
    let data = await response.json();
    for (var post in data.items) {
        // REQUIREMENT #9 - Query Selector 2
        document.querySelector("#my_adventures").innerHTML += "<h1>" + data.items[post].title + "</h1>" + "<p>" + data.items[post].author.displayName + "</p>" + data.items[post].content;
    }
});

//API KEY = AIzaSyDu3W_cZdzG7-U9B4mcTNy_L3WsCKVY7BM
