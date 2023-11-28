let today = new Date();
let students=[];

students[0]={
    last_name: "Гринчак",
    first_and_middle_name: "Максим Юрійович",
    year: "3",
    group: "31"
}

students[1]={
    last_name: "Колесник",
    first_and_middle_name: "Даниїл Вікторович",
    year: "3",
    group: "31"
}

students[2]={
    last_name: "Кандиба",
    first_and_middle_name: "Роман Романович",
    year: "3",
    group: "32"
}

students[3]={
    last_name: "Ковальчук",
    first_and_middle_name: "Ігор Св'ятославович",
    year: "2",
    group: "21"
}

students[4]={
    last_name: "Коземко",
    first_and_middle_name: "Олег Богданович",
    year: "2",
    group: "22"
}

students[5]={
    last_name: "Городь",
    first_and_middle_name: "Максим Костянтинович",
    year: "1",
    group: "11"
}

students[6]={
    last_name: "Кілочко",
    first_and_middle_name: "Св'ятослав Андрійович",
    year: "1",
    group: "11"
}

students[7]={
    last_name: "Цинайко",
    first_and_middle_name: "Св'ятослав Олександрович",
    year: "4",
    group: "41"
}

students[8]={
    last_name: "Качурко",
    first_and_middle_name: "Павло Васильович",
    year: "4",
    group: "42"
}

c = () => {
    return a + b;
};

function result() {
    let text_last_name = document.getElementById('last_name').value;
    let text_year = document.getElementById('year').value;
    let text_group = document.getElementById('group').value;
    let html = "";

    let a=3, b = 5;

    let d = a + c() + '1';
    alert(d);

    if (text_year === text_group[0]) {
        const found_student = students.find(({last_name}) => last_name === text_last_name);
        let found_student_str = found_student.last_name + " " + found_student.first_and_middle_name;
        html="<h3>Знайдено: " + found_student_str + "</h3>"
        if (text_group !== found_student.group) {
            html+="<h3>Попередження: Цей студент з іншої групи — " + found_student.group + "</h3>"
        }
    }
    else {
        html="<h3>Помилка: Курс не відповідає номеру групи</h3>"
    }

    document.getElementById('result').innerHTML=html;
}

let button=document.querySelector('.btn');
button.onmouseover=result;