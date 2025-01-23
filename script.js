// script.js

function addPosition() {
    alert("Добавлено новое позиция!");
}

function saveOrder() {
    const tradingPoint = document.getElementById('trading-point').value;
    const employeeSurname = document.getElementById('employee-surname').value;

    if (!tradingPoint || !employeeSurname) {
        alert("Пожалуйста, выберите торговую точку и введите фамилию сотрудника.");
        return;
    }

    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = `
        <p><strong>Торговая точка:</strong> ${tradingPoint}</p>
        <p><strong>Фамилия сотрудника:</strong> ${employeeSurname}</p>
        <p><strong>Заявка сохранена!</strong></p>
    `;
}

function shareWhatsApp() {
    const tradingPoint = document.getElementById('trading-point').value;
    const employeeSurname = document.getElementById('employee-surname').value;

    if (!tradingPoint || !employeeSurname) {
        alert("Пожалуйста, выберите торговую точку и введите фамилию сотрудника.");
        return;
    }

    const message = `Торговая точка: ${tradingPoint}\nФамилия сотрудника: ${employeeSurname}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}
