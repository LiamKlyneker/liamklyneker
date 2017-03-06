function __callAndFillTemplates(templates){
    templates.forEach(function(template){
        $.ajax({
            url     : 'templates/' + template + '.html',
            async   : false,
            success : function(html){
                $('#main-render').append(html);
            }
        });
    });
}
