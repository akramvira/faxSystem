// jq(function() {
//   sendRequest({
//     url: "/extesions",
//     callback: function(data) {
//       var options = "";
//       var extesions = data["data"]["extesions"];
//       for (var i = 0; i < extesions.length; i++) {
//         options += `<option value=${extesions[i]}>${extesions[i]}</option>`;
//       }
//
//       jq("#extensions").append(options);
//     }
//   });

  jq("#addRow").on("click", function() {
    var row = `
    <div class="row form-group  receiver">
    <div class="col-3 ">
      <input
        type="text"
        class="form-control number"
        id="DestinationNumber"
        placeholder="شماره مقصد"
      />
    </div>
    <div class="col-3">
      <input
        type="text"
        class="form-control extension"
        id="ExtentionNumber"
        placeholder="شماره داخلی"
      />
    </div>
    <div class="col-3">
      <input
        type="text"
        class="form-control delay"
        id="Palse"
        placeholder="وقفه / ثانیه"
      />
    </div>
  </div>
        `;

    jq("#receivers").append(row);
  });

  jq("#submitForm").on("click", function() {
    var receivers = [];

    jq("#receivers .receiver").each(function(i) {
      var number = jq(this)
        .find(".number")
        .val();
      var extension = jq(this)
        .find(".extension")
        .val();
      var delay = jq(this)
        .find(".delay")
        .val();

      receivers.push({
        number: number,
        extension: extension,
        delay: delay
      });
    });

    var file = jq("#validatedCustomFile")[0].files[0];

    if (
      !file ||
      !(
        file.type == "application/pdf" ||
        file.type == "image/jpeg" ||
        file.type == "image/png" ||
        file.type == "image/tiff" ||
        file.type == "image/jpg"
      )
    ) {
      alert("file is not ok");
      return;
      // jq('#file-error').text('فرمت فایل صحیح نیست.');
      // setTimeout(() => {
      //     jq('#file-error').text('');
      // }, 3000);
    }

    let isVertical = jq("#isVertical").prop("checked");

    // let extension = jq("#extensions").val();
    //
    // if (extension == "0") {
    //   alert("select and extension");
    //   return;
    // }

    var formData = new FormData();

    formData.append("file", file);
    formData.append("receivers", receivers);
    formData.append("isVertical", isVertical);
    // formData.append("extension", extension);

    jq.ajax({
      type: "POST",
      url: "http://localhost:3000/new-fax",
      data: formData,
      // headers: {
      //     'X-CSRF-TOKEN':  localStorage.getItem('token')
      // },
      success: function(data) {
        alert("fax sent successfully");
      },
      complete: function(data) {
        // if (typeof  options.callback == 'function')options.callback(data.responseJSON);
        // doAfterAjax();
      },
      error: function(data) {
        if (data.status == 401) {
          //logout();
        }
      },
      contentType: false,
      processData: false
    });
  });

  jq("#clearForm").on("click", function() {

    jq("#isVertical").prop("checked", false);

    // jq("#extentions").val("0");
    
    jq("#receivers").html(`
    <div class="row form-group  receiver">
    <div class="col-3 ">
      <input
        type="text"
        class="form-control number"
        id="DestinationNumber"
        placeholder="شماره مقصد"
      />
    </div>
    <div class="col-3">
      <input
        type="text"
        class="form-control extension"
        id="ExtentionNumber"
        placeholder="شماره داخلی"
      />
    </div>
    <div class="col-3">
      <input
        type="text"
        class="form-control delay"
        id="Palse"
        placeholder="وقفه / ثانیه"
      />
    </div>
  </div>
    `);


    jq('#file').val('');

  });
});
