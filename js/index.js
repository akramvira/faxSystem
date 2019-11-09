jq(function(){
    setInterval(updateFaxCount, 10000);
    //setInterval(updateFaxesStatus, 3000);


});


function updateFaxCount(){
    sendRequest(
        {
            url:'/dashboard-data',
            callback: function(data){
                jq('#newFaxCount').text(data['data']);
            }
        }
    )
}

function updateFaxesStatus(){}