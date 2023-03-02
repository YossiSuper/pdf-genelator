const ejs = require("ejs")
const html_pdf = require("html-pdf")

exports.genelate = function(template_path,data,exports_path) {
    ejs.renderFile(template_path,{data:data},(err,data)=>{
        if (err) {
            throw Error(err)
      } else {
          let options = {
              "height": "11.25in",
              "width": "8.5in",
              "header": {
                  "height": "20mm"
              },
              "footer": {
                  "height": "20mm",
              },
          };
          pdf.create(data, options).toFile(exports_path, function (err, data) {
              if (err) {
                  throw Error(err)
              } else {
                  console.log("File created successfully");
              }
          });
      }
  });
    }    