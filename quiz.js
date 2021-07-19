// press F12 and use "employees" in console
//
// you can also import all constants in your project using:
//
//   <script src="https://nmatei.github.io/simple-quiz-app/public/js/questions/constants.js"></script>
//
var employees = [{
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27"
}, {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44"
}, {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17"
}, {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63"
}, {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37"
}, {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40"
}, {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26"
}, {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70"
}, {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72"
}, {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98"
}];

function collectFristNames(employees) {
    console.info("employees", employees);
    if (!employees) {
        console.info("you did not provide any value");      
    }
    var firstNames = employees.map(function (employee){
        return `${employee.firstName}`;
    })
    return firstNames;
}
console.info(collectFristNames(employees));

function calculateAverageSalary(employees) {
    var sum = 0;
    var i=0;
    employees.forEach(function(employee, index) {
        sum+=parseFloat(`${employee.salary}`);
        i = index;
    });
    return sum/(i+1);
}
console.info(calculateAverageSalary(employees));

function calculateAverageFemaleSalary(employees) {
    var sum = 0;
    var i=0;
    employees.forEach(function(employee, index) {
        if (`${employee.gender}`=="Female") {
        sum+=parseFloat(`${employee.salary}`);
        i+=1;
        console.info(i);
        }
    });
    return sum/i;
}
console.info(calculateAverageFemaleSalary(employees));

function splitEmployees(employees) {
    var f=[];
    var m=[];
    employees.forEach(function(employee, index) {
        if (`${employee.gender}`=="Female") {
        f.push(employee);
        } else {
            m.push(employee);
        }
    });
    return {f,m};
}
console.info(splitEmployees(employees));