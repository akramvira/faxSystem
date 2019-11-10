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



//pie
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["بایگانی شده", "ارسال شده", "دریافت شده"],
        datasets: [{
            data: [100, 80, 100],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
        }]
    },
    options: {
        responsive: true
    }
});