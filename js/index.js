jq(function(){
    updateFaxCount();
    setInterval(updateFaxCount, 10000);
    //setInterval(updateFaxesStatus, 3000);


});


function updateFaxCount(){
    sendRequest(
        {
            url:'/dashboard',
            callback: function(data){
                
                jq('#receive-count').text(data['receive']);
                jq('#sent-count').text(data['send']);
                jq('#archive-count').text(data['archive']);
                jq('#all-count').text(data['all']);
                
                
                jq('#sending-file .count').text(data['sending']['count']);

                var sendingFiles = data['sending']['data'];

                var sendingFileList = '';
                for( var i = 0 ; i< sendingFiles.length ; i++){
                    sendingFileList +=  `
                    <h5 class="card-title file-title">- ${sendingFiles[i]['namefile']}</h5>
                    <p class="card-text">
                        <span class="file-name p-1">از: ${sendingFiles[i]['from']}</span>
                        <span class="file-from p-1">به:${sendingFiles[i]['to']}</span>
                        <span class="file-from p-1">ntries:${sendingFiles[i]['ntries']}</span>
                        <span class="file-from p-1">state:${sendingFiles[i]['state']}</span>
                        <span class="file-from p-1">فایل:${sendingFiles[i]['file']}</span>
                        <span class="file-from p-1">تاریخ:${sendingFiles[i]['date']}</span>
                    </p>
                    `;
                }

                jq('#sending-file .files').html(sendingFileList);
               


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