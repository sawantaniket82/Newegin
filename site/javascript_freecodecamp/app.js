// var fs = require('fs');

// fs.readFile('../javascript_freecodecamp/index.html','utf8',function (err,data) {
//  console.log(data) ;  
// })

// fs.writeFile('app2.js','console.log("done!!!")',function(err) {
    

//     console.log("Error somewhere");
//     }
// )

fs.appendFile('app2.js', 'console.log("done!!!")', function (err) {


    console.log("Error somewhere");
    console.log("function(a,b){console.log(" ");}")
}
)
