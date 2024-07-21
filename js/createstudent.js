let elCreateStudent = document.querySelector(".create-student-form")
let studentsList = JSON.parse(window.localStorage.getItem("studentsList"))
elCreateStudent.addEventListener("submit", function(evt) {
    evt.preventDefault()
    const data = {
        id:studentsList.length? studentsList[studentsList.length-1].id+1:1,
        name:evt.target.name.value,
        email:evt.target.email.value,
        phone:evt.target.phone.value,
        enrollNumber:evt.target.enroll.value,
        date:evt.target.date.value,
    }
    studentsList.push(data)
    window.localStorage.setItem("studentsList", JSON.stringify(studentsList))

    setTimeout(() => {
        location.pathname ="./student.html"
    },600 )
} )