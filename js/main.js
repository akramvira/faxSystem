
function createReciverRow(){
    var a = 0;
    var rcRow = `<div class="reciever-row">
                    <input class="dst-number" /> 
                    <input class="dst-ext" /> 
                    <input class="time-delay" /> 
                </div>
                `;


    //var parentDiv = jq()
    //parentDiv.append(rcRow);
}


function submit(){
    //jq('.reciever-row').each(function(){
    // })
}


function sendRequest(options) {

    options.requestMethod = options.requestMethod || 'GET';
    options.method = options.method || 'GET';
    options.data = options.data || '';


    jq.ajax({
        type: options.requestMethod,
        url: 'http://localhost:3000' + options.url,
        data: {
            _token: jq("meta[name='csrf-token']").attr("content"),
            _method: options.method,
            data: options.data
        },
        headers: {
            'X-CSRF-TOKEN': jq('meta[name="csrf-token"]').attr('content')
        },
        success: function (data) {
            if (typeof  options.callback == 'function')
            options.callback(data);
        },
        complete: function (data) {
           // if (typeof  options.callback == 'function')options.callback(data.responseJSON);
           // doAfterAjax();
        },
        error: function (data) {
            if(data.status == 401)
            {
                //logout();
            }
        }
    });
}


