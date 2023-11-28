let today = new Date();
let classes=[];

classes[0]={
    subject: "Методи прийняття рішень",
    start_time: new Date('October 29, 2022 09:00:00'),
    teacher: "Кудін"
}
classes[1]={
    subject: "Непроцедурне програмування",
    start_time: new Date('October 29, 2022 10:30:00'),
    teacher: "Паткін"
}
classes[2]={
    subject: "Високопродуктивні обчислення",
    start_time: new Date('October 29, 2022 12:10:00'),
    teacher: "Циганков"
}
classes[3]={
    subject: "Системний аналіз",
    start_time: new Date('October 29, 2022 13:40:00'),
    teacher: "Доманецька"
}
classes[4]={
    subject: "Методи знань та онтологічний інжиніринг",
    start_time: new Date('October 29, 2022 15:10:00'),
    teacher: "Гайна"
}
classes[5]={
    subject: "Проектування та розробка веб-застосунків",
    start_time: new Date('October 29, 2022 16:40:00'),
    teacher: "Федусенко"
}

function addMinutes(date, minutes) {
    let new_date = date;
    new_date.setMinutes(date.getMinutes() + minutes);
    return new_date;
}

function subMinutes(date, minutes) {
    let new_date = date;
    new_date.setMinutes(date.getMinutes() - minutes);
    return new_date;
}

function result() {
    let time = today.getHours() + ":" + today.getMinutes();
    let html = "";

    if (time < "09:00") {
        html = "<h2>Пари ще не почалися</h2>";
    }
    else if (time > "18:00") {
        html = "<h2>Пари закінчилися</h2>";
    }
    else {
        html += "<table>";
        html += "<tr><td>Предмет</td>"+"<td>Початок пари</td><td>Викладач</td><td>Поточний час</td></tr>";
        html += "<tr>"
        for (let i in classes) {
            if (today >= classes[i].start_time && today <= addMinutes(classes[i].start_time, 80)) {
                subMinutes(classes[i].start_time, 80)
                html += "<td>" + classes[i].subject + "</td>"
                html += "<td>" + classes[i].start_time.getHours() + ":" + classes[i].start_time.getMinutes() + "</td>"
                html += "<td>" + classes[i].teacher + "</td>"
                html += "<td>" + time + "</td></tr>"
            }
            // else if (today >= addMinutes(classes[i].start_time, 80) && today <= classes[i + 1].start_time) {
            //     subMinutes(classes[i].start_time, 80)
            //     html = "<h2>Перерва після " + i + " пари</h2>";
            // }
        }
        html += "</table>";
    }

    document.getElementById('res').innerHTML=html;
}

let button=document.querySelector('.btn');
button.onclick=result;