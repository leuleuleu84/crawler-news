// const NOTIFICATIONS_INTERVAL = 5000;

// var feedUrl2contentLength = {};

// function runNotificationsTimer(url, title, icon, text) {
//     setInterval(function(){
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url, true);
//         xhr.onload = function(e) {

//             var oldContentLength = feedUrl2contentLength[url];

//             if (!oldContentLength || oldContentLength != e.target.responseText.length) {
//                 showNotification(title, icon, text);

//                 feedUrl2contentLength[url] = e.target.responseText.length;
//             }

//         };
//         xhr.send(null);
//     }, 20000);
// }

// function showNotification(title, icon, text) {
//     var opt = {
//         type: "basic",
//         title: title,
//         message: text,
//         iconUrl : icon
//     };

//     chrome.notifications.create("alert-notification", opt, function(notificationId){
//         setTimeout(function(){
//             chrome.notifications.clear(notificationId, function(){});
//         }, 5000);
//     });
// }

//     runNotificationsTimer('http://vnexpress.net/rss/so-hoa.rss', 'Tong hop tin', 'img/48NEWS.png', 'New post is available');

// document.addEventListener('DOMContentLoaded', function () {
    
// });
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "category.html";
    chrome.tabs.create({ url: newURL });
});