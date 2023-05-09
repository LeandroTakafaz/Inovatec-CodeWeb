viewport = $('#container').innerWidth();
tb = $('#thumbs');
divWidth = tb.outerWidth();

$('#container').mousemove(function (e) {
    tb.css({ left: ((viewport - divWidth) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + "px" });
});