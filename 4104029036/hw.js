$(document).ready(function() {                          //搜尋
    $('div.more').hide();
    $('a.more-options').click(function() {
        if ($('div.more').is(':hidden'))
            $('div.more').slideDown('slow');
        else
            $('div.more').slideUp('slow');
        return false;
    });
});

$(document).ready(function() {
    $('p.aj').hide();
    $('a.ajshort').hide();
    $('a.ajmore1').click(function() {
        $('p.aj').show();
        $(this).hide();
        $('a.ajmore2').hide();
        $('a.ajshort').show();
        return false;
    });
    $('a.ajmore2').click(function() {
        $('p.aj').show('slow');
        $(this).hide();
        $('a.ajmore1').hide();
        $('a.ajshort').show();
        return false;
    });
    $('a.ajshort').click(function() {
        $('p.aj').hide('500');
        $('a.ajmore1').show();
        $('a.ajmore2').show();
        $(this).hide();
        return false;
    });
    $('p.s').hide();
    $('a.ajshort1').hide();
    $('a.ajmore3').click(function() {
        $('p.s').fadeIn(1500);
        $(this).hide();
        $('a.ajshort1').show();
        return false;
    });
    $('a.ajshort1').click(function() {
        $('p.s').fadeOut('1500');
        $('a.ajmore3').show();
        $(this).hide();
        return false;
    });
});

$(document).ready(function() {
    var p = $('p.max'); //下面p的class改ID 上面改成p#more即可
    p.hide();
    $('a.maxmore').click(function() {
        p.toggle('fast');
        if ($(this).text() == '更多內容')
            $(this).text('隱藏內容');
        else
            $(this).text('更多內容');
        return false;
    });

    var p1 = $('p.ss'); //下面p的class改ID 上面改成p#more即可
    p1.hide();
    $('a.maxmore1').click(function() {
        p1.toggle('fast','swing');
        if ($(this).text() == '顯示星級')
            $(this).text('隱藏星級');
        else
            $(this).text('顯示星級');
        return false;
    });

});

$(document).ready(function() {
    $('p.fk').hide();
    $('a.fkshort').hide();
    $('a.fkmore').click(function() {
        $('p.fk').show('medium', function() {
            $('a.fkmore').hide();
            $('a.fkshort').show();
            alert("已經顯示更多內容...");
        });
        return false;
    });
    $('a.fkshort').click(function() {
        $('p.fk').hide('2000', function() {
            $('a.fkmore').show();
            $('a.fkshort').hide();
            alert("已經隱藏更多內容...");
        });
        return false;
    });

    var p2 = $('p.sss'); //下面p的class改ID 上面改成p#more即可
    p2.hide();
    $('a.fkmore1').click(function() {
        p2.toggle('fast','linear');
        if ($(this).text() == '顯示星級')
            $(this).text('隱藏星級');
        else
            $(this).text('顯示星級');
        return false;
    });

});


$(document).ready(function() {                      // 登入
    $('#open').click(function() {
        $('#login form').slideToggle('fast');
    });
});

$(document).ready(function() {
var p3 = $('p.r'); //下面p的class改ID 上面改成p#more即可
p3.hide();
$('a.rate').click(function() {
    p3.toggle('fast','linear');
    if ($(this).text()　== "點此給我們五顆星")
        $(this).text("確認送出");
    else
        $(this).text('點此給我們五顆星');
    return false;
});
});

$(document).ready(function() {
    $("div#one").click(function() {
        $(this).fadeTo("slow", 0.2);
    });
    $("div#two").click(function() {
        $(this).fadeTo("slow", 0.2);
    });
    $("div#three").click(function() {
        $(this).fadeTo("slow", 0.2);
    });
});
