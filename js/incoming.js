jq(function() {
  getFaxes();
  loadDatepickers();

  jq('#search').on('click', function(){
    getfilteredData();
  });

});

function getFaxes() {
  sendRequest({
    url: "/fax/inbox",
    callback: function(data) {
      let arrayData = [];

      for (var i in data) {
        arrayData.push({
          ...data[i],
          action: `<div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-sm btn-primary" onclick="viewItem(${
                                  data[i]["id"]
                                })">مشاهده</button>
                                <button type="button" class="btn btn-sm btn-warning"  onclick="archiveItem(${
                                  data[i]["id"]
                                })">بایگانی</button>
                                <button type="button" class="btn btn-sm btn-danger"  onclick="deleteItem(${
                                  data[i]["id"]
                                })">حذف</button>
                            </div>`
        });
      }

      jq("#table").DataTable({
        data: arrayData,
        columns: [
          { data: "id", title: "ردیف" },
          { data: "comments", title: "توضیحات" },
          { data: "created_at", title: "ایجاد شده در" },
          { data: "dst", title: "مفصد" },
          { data: "file", title: "فایل" },
          { data: "ntries", title: "وات؟" },
          { data: "src", title: "مبدا" },
          { data: "state", title: "استیت؟" },
          { data: "style", title: "استایل؟" },
          { data: "timesend", title: "زمان ارسال" },
          { data: "type", title: "نوع" },
          { data: "updated_at", title: "بروزرسانی" },
          { data: "user_id", title: " کاربر" },
          { data: "visible", title: "فعال؟" },
          { data: "action", title: "عملیات" }
        ]
      });
    }
  });
}

function viewItem(itemId) {}
function archiveItem(itemId) {}
function deleteItem(itemId) {}

function loadDatepickers() {
  jq("#date1, #date2").persianDatepicker({
    formatDate: "YYYY/MM/DD",
    altFormat: "YY/MM/DD",
    calendarType: "persian",
    toolbox: {
      calendarSwitch: {
        enabled: true
      }
    },
    navigator: {
      scroll: {
        enabled: false
      }
    },

    onSelect: function(date) {
        console.log('time selecter')
    }
  });
}

function getfilteredData(){

    var date1 =  jq('#date1-alt').val();
    var src1= jq('#src1').val();
    var dst1= jq('#dst1').val();

    var date2 =  jq('#date2-alt').val();
    var src2= jq('#src2').val();
    var dst2= jq('#dst2').val();

debugger;


var data = {
    date1 : date1,
    src1 : src1,
    dst1 : dst1,
    date2 : date2,
    src2 : src2,
    dst2 : dst2,
}

// set method post
// data send


    sendRequest({
    url: "/fax/inbox",
    callback: function(data) {
      let arrayData = [];

      for (var i in data) {
        arrayData.push({
          ...data[i],
          action: `<div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-sm btn-primary" onclick="viewItem(${
                                  data[i]["id"]
                                })">مشاهده</button>
                                <button type="button" class="btn btn-sm btn-warning"  onclick="archiveItem(${
                                  data[i]["id"]
                                })">بایگانی</button>
                                <button type="button" class="btn btn-sm btn-danger"  onclick="deleteItem(${
                                  data[i]["id"]
                                })">حذف</button>
                            </div>`
        });
      }

      jq("#table").DataTable({
        data: arrayData,
        columns: [
          { data: "id", title: "ردیف" },
          { data: "comments", title: "توضیحات" },
          { data: "created_at", title: "ایجاد شده در" },
          { data: "dst", title: "مفصد" },
          { data: "file", title: "فایل" },
          { data: "ntries", title: "وات؟" },
          { data: "src", title: "مبدا" },
          { data: "state", title: "استیت؟" },
          { data: "style", title: "استایل؟" },
          { data: "timesend", title: "زمان ارسال" },
          { data: "type", title: "نوع" },
          { data: "updated_at", title: "بروزرسانی" },
          { data: "user_id", title: " کاربر" },
          { data: "visible", title: "فعال؟" },
          { data: "action", title: "عملیات" }
        ]
      });
    }
  });

}
