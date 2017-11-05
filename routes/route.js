exports.home = function(request, response)
{
    response.render(
        "home",
        {
            title:"Basic Chat App",
            headline: "Welcome to Chat app"
        }
    );
}
