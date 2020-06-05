
var ufo = data;

var inputElement = d3.select("#ufo-form-input");
// Get the value property of the input element
var inputValue = inputElement.property("value");
// Use the form input to filter the data by blood type
var country = "us";
var datetime = "1/7/2010";
var city = "edgartown";
var state = "ma";
var shape = "circle";

// var resultFilter = ufo.filter(function(report){
// return (report.country == country && report.datetime='1/7/2010');
// });

// filter by date/time, city, state, country, shape
var resultFilter = ufo.filter(
    (report) => report.country == country  && report.datetime ==datetime && 
    report.city == city && report.state == state && report.shape == shape);

console.log(resultFilter);


// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// console.log(person);

// var search = {
//     country: country,
//     datetime:datetime,
//     city:city,
//     state:state,
//     shape:shape,
// };


// console.log(Object.values(search));



// Object.entries(search).forEach(([key,value])=>
        // console.log(`Key: ${key} and Value: ${value}`));

