(function($){
    $.fn.my = function(options){
        var setting = $.extend({
            color:"red",
            backgroundColor:"pink"
        },options);
        return this.css({
            color:setting.color,
            backgroundColor:setting.backgroundColor
        });
    }
})(jQuery);