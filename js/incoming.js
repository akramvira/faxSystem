jq(function(){
  

    getFaxes();
});


function getFaxes() {
    sendRequest({
      url: "/fax/inbox",
      callback: function(data) {
        

        data = [{
            comments: "RECV  to modem ttyI117",
            created_at: "2019-11-10 12:22:56",
            dst: 117,
            file: "recvq/fax000000001.tif",
            id: 14,
            ntries: 0,
            src: 118,
            state: 0,
            style: null,
            timesend: "1568210940",
            type: 2,
            updated_at: "2019-11-10 12:22:56",
            user_id: 2,
            visible: 1,
        },
        {
            comments: "RECV  to modem ttyI117",
            created_at: "2019-11-10 12:22:56",
            dst: 117,
            file: "recvq/fax000000001.tif",
            id: 14,
            ntries: 0,
            src: 118,
            state: 0,
            style: null,
            timesend: "1568210940",
            type: 2,
            updated_at: "2019-11-10 12:22:56",
            user_id: 2,
            visible: 1,
        }]
        jq('#table').DataTable({
            data : data,
            columns:[
                {data: 'id', title:'ردیف'},
                {data: 'comments',  title:'توضیحات'},
                {data: 'created_at',  title:'ایجاد شده در'},
                {data: 'dst',  title:'مفصد'},
                {data: 'file',  title:'فایل'},
                {data: 'ntries',  title:'وات؟'},
                {data: 'src',  title:'مبدا'},
                {data: 'state',  title:'استیت؟'},
                {data: 'style',  title:'استایل؟'},
                {data: 'timesend',  title:'زمان ارسال'},
                {data: 'type',  title:'نوع'},
                {data: 'updated_at',  title:'بروزرسانی'},
                {data: 'user_id',  title:' کاربر'},
                {data: 'visible', title:'فعال؟'}
            ]
        });
      }
    });
  }


