document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("contact-table-body");
    const API_URL = "http://localhost:3000/home";

    async function loadContacts() {
        try {
            console.log("Отправка запроса...");
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            const contacts = data.contacts || [];

            if (!Array.isArray(contacts)) {
                throw new Error("Формат данных не соответствует ожидаемому. Ожидался массив.");
            }

            tableBody.innerHTML = "";

            contacts.forEach((contact) => {
                console.log("Добавление контакта:", contact);
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td style="text-align: left;">${contact.department}</td>
                    <td style="text-align: center;">${contact.person}</td>
                    <td style="text-align: right;">${contact.phone}</td>
                `;

                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Ошибка при загрузке контактов:", error);

            tableBody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; color: #ff3333;">
                        Произошла ошибка при загрузке данных. Попробуйте позже.
                    </td>
                </tr>
            `;
        }
    }

    loadContacts();
});
