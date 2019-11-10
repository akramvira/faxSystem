jq(function() {
  getFaxes();

  loadDatepickers();
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
    altField: "#right-dateAlt",
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
