// inventory.js

let inventory = [
    "Арбат",
    "БЦ Фреш Плаза",
    "БЦ Эгершельд",
    "Дальпресс на Комсомольской",
    "Кафе на 3 рабочей",
    "Кафе на березовой",
    "Кафе на Стрельникова",
    "Пит-стоп на Бородинской",
    "Питстоп на ботсаду2",
    "Пит-стоп на Маяке",
    "Пит-стоп на набережной 2",
    "Пит-стоп под Некрасовским мостом",
    "Приморгражданпроект",
    "ПТК Искра",
    "ПТК Луговая на 1 этаже возле эскалатора",
    "ПТК Луговая на 2 этаже",
    "Реми на Борисенко",
    "Реми на Ильичева",
    "ТД Славянский",
    "ТРЦ Голубиная падь",
    "ТРЦ Снеговая падь",
    "ТТЦ Дазэл",
    "ТТЦ Дазэл Столовая",
    "ТЦ Надежда",
    "ТЦ Первореченский центр.вход",
    "Офис Ильичева 22а"
];

function populateInventory() {
    const tradingPointSelect = document.getElementById('trading-point');
    const inventoryList = document.getElementById('inventory-list');

    // Clear existing options and list items
    tradingPointSelect.innerHTML = '<option value="">Выберите торговую точку</option>';
    inventoryList.innerHTML = '';

    // Populate select options
    inventory.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        tradingPointSelect.appendChild(option);
    });

    // Populate inventory list
    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });
}

populateInventory();

function addItem() {
    const newItemInput = document.getElementById('new-item');
    const newItem = newItemInput.value.trim();

    if (newItem) {
        inventory.push(newItem);
        populateInventory();
        newItemInput.value = '';
    } else {
        alert('Пожалуйста, введите новую позицию.');
    }
}

function authorizeAdmin() {
    const adminPassword = document.getElementById('admin-password').value;

    if (adminPassword === '1478') {
        document.getElementById('inventory-management').style.display = 'block';
    } else {
        alert('Неверный пароль.');
    }
}
