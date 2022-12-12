// REQUIREMENT #11 - a JavaScript class
class GoogleAPI {
    // Free to use code from the google api
    authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/blogger" })
            .then(function () { console.log("Sign-in successful"); clientIsLoaded = true; },
                function (err) { console.error("Error signing in", err); });
    }
    loadClient() {
        gapi.client.setApiKey("AIzaSyDu3W_cZdzG7-U9B4mcTNy_L3WsCKVY7BM");
        return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/blogger/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
    }
    execute(title, content, draft) {
        return gapi.client.blogger.pages.insert({
            "blogId": "7348106859157198878",
            "isDraft": draft,
            "resource": {
                "title": `${title}`,
                "content": `${content}`
            }
        })
            .then(function (response) {
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    }
}
var draft = false;
var clientIsLoaded = false;
var google = new GoogleAPI();
// code from googleAPI
gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "712979888110-4471m7m95b4m5u269stfnbkpdthbtrcp.apps.googleusercontent.com"});
});
// async function MakeAPost() {

//     errorMessage.innerHTML = "";
//     console.log(title);
//     if(clientIsLoaded) {

//     } else {
//         console.log("Client is not loaded");
//     }
// }
async function Authorize() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('postcontent').value;
    await google.authenticate();
    await google.loadClient();
    google.execute(title, content, draft);
}
document.querySelector('.draft').addEventListener('click', function (e) {
    if(e.target.value == "draft") {
        draft = true;
    }
    else if(e.target.value == "notdraft") {
        draft = false;
    }
});
// document.querySelector('#authorize').addEventListener('click', Authorize)
document.querySelector('#submitpost').addEventListener('click', Authorize);
