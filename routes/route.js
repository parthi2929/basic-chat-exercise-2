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

exports.userRoute = function(request, response)
{
    var userURL = request.params.user;  
    var headlineParthi = "Welcome Parthi";
    if (userURL != "parthi")
    {
        headlineParthi = "Not a valid user";
    }
    console.log("User is : " + userURL);
    response.render(
        "userPage",
        {
            title:"Welcome user",
            headline: headlineParthi
        }
    );
}