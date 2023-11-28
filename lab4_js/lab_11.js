resultDiv = document.getElementById('result');

class Flat {
    constructor(address, numOfRooms, price, repair) {
        this.address = address;
        this.numOfRooms = numOfRooms;
        this.price = price;
        this.repair = repair;
    }
    show() {
        let html = "";
        html += "<tr>";
        html += "<td>" + this.address + "</td>";
        html += "<td>" + this.numOfRooms + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "<td>" + this.repair + "</td>";
        html += "</tr>";
        return html;
    }
}

let flats = [];

flats[0] = new Flat("Hrinchenka 6", 3, 50000, "Euro");
flats[1] = new Flat("Lomonosova 38", 1, 20000, "Soviet");
flats[2] = new Flat("Pecherska 34", 2, 90000, "Modern");
flats[3] = new Flat("Kostiantynivska 32", 3, 70000, "Irish");
flats[4] = new Flat("Vasylkivska 100", 4, 100000, "Post-modern");
flats[5] = new Flat("льулульсль", 4, 100000, "Post-modern");
flats[6] = new Flat("fhejenenje", 5, 1000, "Post-modern");
flats[7] = new Flat("Vasylkivska 100", 4, 100000, "Post-modern");

function result() {
    let html = "";
    resultDiv.innerHTML = html;
    html += "<table>";
    html += "<tr><td>Адреса</td><td>К-сть кімнат</td><td>Ціна</td><td>Ремонт</td></tr>";
    for (let i = 0; i < flats.length; i++) {
        html += flats[i].show();
    }
    html += "</table>";
    resultDiv.innerHTML = html;
}