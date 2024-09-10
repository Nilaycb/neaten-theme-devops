/***** 
* @author: Nilay Chandra Barman (https://github.com/Nilaycb)
* Copyright (c) 2020, All rights reserved.
* Copyrights licensed under the MIT License.
*******/

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    // Scroll Top Codes Begin
    function scrollToTop() {
        window.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    var scrollTop_elements = document.getElementsByClassName("nt-js-scroll-top"), i;
    for (i = 0; i < scrollTop_elements.length; i += 1) {
        scrollTop_elements[i].addEventListener("click", scrollToTop);
    }
    // Scroll Top Codes End
    
    
    function quotesSlider() {
        /** Quotes **/
        var quotes = [
            "&quot;There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.&quot; --- Albert Einstein",
            "&quot;I have not failed. I've just found 10,000 ways that won't work.&quot; --- Thomas A. Edison",
            "&quot;It is hard to fail, but it is worse never to have tried to succeed.&quot; --- Theodore Roosevelt"
        ], rand_quotes_index = Math.floor(Math.random() * quotes.length);
        
        document.getElementById("nt-cover-quotes").innerHTML = quotes[rand_quotes_index];
    }
    
    setInterval(quotesSlider, 5000); // 5 Seconds
    
    
    document.getElementById("nt-lastModifiedYear").innerHTML = new Date(document.lastModified).getFullYear();
    document.getElementById("nt-lastModifiedText").innerHTML = "Page Last Updated: " + document.lastModified;
});