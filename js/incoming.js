jq(function(){
  

    getFaxes();
});


function getFaxes() {
    sendRequest({
      url: "/fax/inbox",
      callback: function(data) {
        
        let arrayData = [];

        for(var i in data){
            arrayData.push(
                {
                    ...data[i],
                    action:`<div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-sm btn-primary">مشاهده</button>
                            <button type="button" class="btn btn-sm btn-warning">بایگانی</button>
                            <button type="button" class="btn btn-sm btn-danger">حذف</button>
                        </div>`})
        }

        jq('#table').DataTable({
            data : arrayData,
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
                {data: 'visible', title:'فعال؟'},
                {data: 'action', title:'عملیات'}
            ]
        });
      }
    });
  }


