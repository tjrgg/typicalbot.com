$(document).foundation();

$("#sidebar .item").hover(function() {
    if (!$(this).attr("class").split(/\s+/).includes("current")) {
        $(this).addClass("selected")
    }

}, function() {
    if (!$(this).attr("class").split(/\s+/).includes("current")) {
        $(this).removeClass("selected")
    }
})

$("#sidebar .item").click(function() {
    if (!$(this).attr("class").split(/\s+/).includes("current")) {
        $(".current").removeClass("current")
        $(".selected").removeClass("selected")
        $(this).addClass("current")
        $(this).addClass("selected")
    }
})

$("#roadmap-menu-button").click(function() {
    var enabled = $("body").attr("class") ? $("body").attr("class").split(/\s+/).includes("roadmap_menu_enabled") : false
    if (enabled) {
        $("#roadmap-menu-button").html("<i class=\"fal fa-bars fa-2x\"></i> <h5>Open menu</h5>")
        $("body").removeClass("roadmap_menu_enabled")
    } else {
        $("#roadmap-menu-button").html("<i class=\"fal fa-times fa-2x\"></i> <h5>Close menu</h5>")
        $("body").addClass("roadmap_menu_enabled")
    }
})

$("#menu_toggle").click(function() {
    var enabled = $("body").attr("class") ? $("body").attr("class").split(/\s+/).includes("menu_toggle") : false
    if (enabled) {
        $(this).html("<i class=\"fal fa-bars fa-lg\"></i>")
        $("body").removeClass("menu_toggle")
    } else {
        $(this).html("<i class=\"fal fa-times fa-lg\"></i>")
        $("body").addClass("menu_toggle")
    }
})
