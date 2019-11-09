jq(function() {
  jq("#submitLogin").on("click", function(e) {
    var username = jq("#username").val();
    var password = jq("#password").val();

    debugger;
    login(
      {
        data:{
            username: username,
            password: password
        },
        url: "/login",
        method: 'POST'
      },
      function() {
        alert("وارد شدید");
      }
    );

   
    e.preventDefault();

  });


});



function login(options) {

    options.method = options.method || 'GET';
    options.data = options.data || {};


    jq.ajax({
        type: options.method,
        url: 'http://localhost:3000/login',
        data: {
            _method: options.method,
            data: options.data
        },
        headers: {
        },
        success: function (data) {
            location.href="index.html";
        },
        complete: function (data) {
            location.href="index.html";
           // doAfterAjax();
        },
        error: function (error) {
            
            debugger;
            // if(error.status == 401)
            // {
            //     //logout();
            // }
            // else if(error.status == 406){

                jq('#error').text('نام یا نام کاربری غلط است.');;
                clearError();
            //}
        }
    });


    function clearError(){
        setTimeout(function(){
            jq('#error').text('');
        }, 3000);
    }
}