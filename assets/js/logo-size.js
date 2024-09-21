var $div = $("#header");
var $elem = $("#logo");
var $size = 24;
var $device;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            //console.log("Class attribute changed to:", attributeValue);
            if (attributeValue === "reveal alt") {
                if ($device === "Mobile") {
                    //console.log("Case 1:", $device);
                    $elem.width(parseInt($size * 1.5) + "%");
                } else {
                    //console.log("Case 2:", $device);
                    $elem.width(parseInt($size * 2.5) + "%");
                }
            } else {
                if ($device === "Mobile") {
                    //console.log("Case 3:", $device);
                    $elem.width(parseInt($size * 1.05) + "%");
                } else {
                    //console.log("Case 4:", $device);
                    $elem.width(parseInt($size * 1.4) + "%");
                }
            }
        }
    });
});
observer.observe($div[0], {
    attributes: true
});

if ($(window).width() < 760) {
    //console.log("Case 5:", $device);
    $device = "Mobile";
}
else {
    //console.log("Case 6:", $device);
    $device = "PC";
}

$(window).on('resize', function () {
    if ($(window).width() < 760) {
        //console.log("Case 7:", $device);
        $device = "Mobile";
    }
    else {
        //console.log("Case 8:", $device);
        $device = "PC";
        if ($div.attr('class') === "alt") {
            if ($device !== "Mobile") {
                $logoSize = $(document).width() * 0.03;
                if ($logoSize < 55 && $logoSize > 28) {
                    $elem.width(parseInt($logoSize) + "%");
                }
                //console.log($logoSize);
            }
        }
        
    }
});

if ($div.attr('class') !== "alt") {
    if ($device === "Mobile") {
        //console.log("Case 9:", $device);
        $elem.width(parseInt($size * 1.05) + "%");
    } else {
        //console.log("Case 10:", $device);
        $elem.width(parseInt($size * 1.4) + "%");
    }
}