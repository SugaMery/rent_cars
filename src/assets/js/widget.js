var tpw_whatsapp = {
    url: tpw_settings.pluginUrl,
    intro_message: tpw_settings.intro_message,
    name: tpw_settings.name,
    link: tpw_settings.link,
    status: tpw_settings.status,
    button: tpw_settings.button,
    position: tpw_settings.position,
    profileImage: tpw_settings.profileImage,
    windowHtml: tpw_settings.windowHtml,
    buttonStyle: tpw_settings.button_style,
}

jQuery(document).ready(function() {

    if (tpw_whatsapp.link != "" && tpw_whatsapp.windowHtml == "off") {

        if (tpw_whatsapp.profileImage) {
            tpw_image = '<div class="photo"><img src="' + tpw_whatsapp.profileImage + '"></div>';
            tpw_class = "";
        } else {
            tpw_image = "";
            tpw_class = "img";
        }

        var tpw_widgetHtml = '<div class="tpw_container ' + tpw_whatsapp.position + '"><div class="tpw_widget_icon"><div class="qty_cont"></div><img src="' + tpw_whatsapp.buttonStyle + '"></div></div>';
        var tpw_windowtHtml = '<div class="tpwin_container ' + tpw_whatsapp.position + '"><div class="close"></div><div class="header ' + tpw_class + '">' + tpw_image + '<div class="info"><p class="name">' + tpw_whatsapp.name + '</p><p class="status">' + tpw_whatsapp.status + '</p></div></div><div class="body"><div class="message">' + tpw_whatsapp.intro_message + '</div></div><div class="footer"><a class="btn" href="' + tpw_whatsapp.link + '" target="_blank"><img src="' + tpw_whatsapp.url + '/assets/img/ic.png">' + tpw_whatsapp.button + '</a><a class="banner" target="_blank" href="https://autochat.uy/"><img src="' + tpw_whatsapp.url + '/assets/img/autocht.png"></a></div></div>';
        jQuery("body").append(tpw_widgetHtml);
        jQuery("body").append(tpw_windowtHtml);

        jQuery(".tpw_container").on("click", function() {
            tpw_setCookie("tpw_open", '1', 1);
            jQuery(".tpwin_container").fadeToggle();
            jQuery(".tpw_qty").fadeOut("fast");
        });

        jQuery(".tpwin_container .close").on("click", function() {
            jQuery(".tpwin_container").fadeOut();
        });

        setTimeout(function() {
            var tpw_st = tpw_getCookie("tpw_open");
            if (tpw_st == "") {
                tpw_add_qty(1);
            }
        }, 7000);

    } else {

        if (tpw_whatsapp.link != "") {
            var tpw_widgetHtml = '<div class="tpw_container ' + tpw_whatsapp.position + '"><div class="tpw_widget_icon"><div class="qty_cont"></div><a href="' + tpw_whatsapp.link + '" target="_blank"><img src="' + tpw_whatsapp.buttonStyle + '"></a></div></div>';
            jQuery("body").append(tpw_widgetHtml);
        }


    }


});

function tpw_add_qty(tpw_num) {

    var tpw_html = '<div class="tpw_qty">' + tpw_num + '</div>';
    jQuery(".qty_cont").append(tpw_html);

}

/***Cookies***/

function tpw_setCookie(tpw_cname, tpw_cvalue, tpw_exdays) {
    var tpw_d = new Date();
    tpw_d.setTime(tpw_d.getTime() + (tpw_exdays * 24 * 60 * 60 * 1000));
    var tpw_expires = "expires=" + tpw_d.toUTCString();
    document.cookie = tpw_cname + "=" + tpw_cvalue + ";" + tpw_expires + ";path=/";
}


function tpw_getCookie(tpw_cname) {
    var tpw_name = tpw_cname + "=";
    var tpw_decodedCookie = decodeURIComponent(document.cookie);
    var tpw_ca = tpw_decodedCookie.split(';');
    for (var i = 0; i < tpw_ca.length; i++) {
        var tpw_c = tpw_ca[i];
        while (tpw_c.charAt(0) == ' ') {
            tpw_c = tpw_c.substring(1);
        }
        if (tpw_c.indexOf(tpw_name) == 0) {
            return tpw_c.substring(tpw_name.length, tpw_c.length);
        }
    }
    return "";
}