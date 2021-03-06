var students = [
{
    lname: "Reyes",
    name: "Celso",
    age: 21,
    birthday: {
      year: 2000,
      month: "Aprill",
      day: 26
    },
    Career: "IDYGS"
  }, 
  {
      lname: "Cruz",
      name: "Marlen",
      age: 22,
      birthday: {
        year: 1999,
        month: "August",
        day: 14
      },
      Career: "IDYGS"
    },
    {
      lname: "Ugalde",
      name: "Alberto",
      age: 21,
      birthday: {
        year: 2000,
        month: "April",
        day: 26
      },
      Career: "IDYGS"
    }, 
    {
      lname: "Mar",
      name: "Mar",
      age: 22,
      birthday: {
        year: 1999,
        month: "August",
        day: 14
      },
      Career: "IDYGS"
    },
    {
      lname: "Juan",
      name: "Lopez",
      age: 25,
      birthday: {
        year: 1996,
        month: "January",
        day: 29
      },
      Career: "IDYGS"
    },
    {
      lname: "John",
      name: "Smith",
      age: 20,
      birthday: {
        year: 2001,
        month: "May",
        day: 13
      },
      Career: "IDYGS"
    },
  ]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
  var templ = document.getElementById("tbodytempl").content.cloneNode(true);
  var tdnumber = templ.querySelector("span[name='tbodynumber']");
  var tdname = templ.querySelector("span[name='tbodyname']");
  var tdage = templ.querySelector("span[name='tbodyage']");
  var tdcareer = templ.querySelector("span[name='tbodycareer']");

  tdnumber.innerText = i + 1;
  tdname.innerText = students[i].lname + " " + students[i].name;
  tdage.innerText = students[i].age;
  tdcareer.innerText = students[i].Career;

  table.append(templ);
}