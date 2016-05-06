
$(document).ready(function() {
    var moretext = "Read bio >";
    var lesstext = "Close";


    $('.more').each(function() {
        var content = $(this).html();

        var html = '<span class="morecontent closed">' +
            '<a href="" class="morelink">' + moretext + '</a>' +
            '<a href="" class="lesslink">' + lesstext + '</a>' +
            '<span class="content">' + content + '</span></span>';

        $(this).html(html);
    }).css('display', 'inline');

    $(".morelink, .lesslink").click(function(){
        var container = $(this).parent();
        var content = container.find('.content');
        if(container.hasClass('closed')) {
            // expand up to natural height
            var h = content[0].scrollHeight;
            content.css('max-height', h + 'px');
            // close the other ones
            $('.morecontent:not(.closed)').not(container[0])
                .addClass('closed')
                .find('.content').css('max-height', '0px');
        } else {
            content.css('max-height', '0px');
        }
        container.toggleClass('closed');
        return false;
    });
});
