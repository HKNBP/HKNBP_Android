googleAnalytics();
function googleAnalytics() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        ga('set', 'dimension1', window.location.pathname.split("/").pop().split(".")[0]);
        ga('set', 'dimension2', "");
        ga('set', 'dimension3', "");
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-114310838-2', 'auto');
    ga('send', 'pageview');
    window.addEventListener('message', function(event) {
        // Ignores messages from untrusted domains.
        if (event.origin != 'http://hknbp.sourcekey.org/') return;
        ga('create', 'UA-114310838-2', 'auto', {
            clientId: event.data
        });
    });
    window.setTimeout(function () {
        googleAnalytics();
    }, 60000);
}