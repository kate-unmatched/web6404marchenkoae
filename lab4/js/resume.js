document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form");
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const fileInput = document.getElementById("file");
    const responseMessage = document.getElementById("response-message");

    const validateInput = (input, errorMessageId, validationFn, errorText) => {
        const errorMessage = document.getElementById(errorMessageId);
        if (!validationFn(input)) {
            errorMessage.innerText = errorText;
            errorMessage.style.display = "block";
            return false;
        }
        errorMessage.style.display = "none";
        return true;
    };

    const isNotEmpty = (value) => value.trim() !== "";
    const isEmail = (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) &&
        /^[a-zA-Z0-9._%+-]+$/.test(value.split('@')[0]);
    const isPhone = (value) => /^\+?\d{10,15}$/.test(value);
    const isPDF = (fileInput) => {
        const file = fileInput.files && fileInput.files[0];
        return file && file.type === "application/pdf";
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const isNameValid = validateInput(nameInput.value, "name-error", isNotEmpty, "Имя не должно быть пустым");
        const isEmailValid = validateInput(
            emailInput.value,
            "email-error",
            isEmail,
            "Введите корректный email (только латиница)"
        );
        const isPhoneValid = validateInput(phoneInput.value, "phone-error", isPhone, "Введите корректный номер телефона");
        const isFileValid = validateInput(fileInput, "file-error", isPDF, "Прикрепите файл формата PDF");

        if (isNameValid && isEmailValid && isPhoneValid && isFileValid) {
            const formData = new FormData(form);

            const data = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                fileName: fileInput.files[0]?.name || "No file uploaded",
            };

            console.log("Отправка данных...", data);

            try {
                const response = await fetch("http://localhost:3000/home", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    responseMessage.innerText = "Ваше сообщение успешно отправлено!";
                    responseMessage.style.display = "block";
                    form.reset();
                } else {
                    throw new Error(`Ошибка: ${response.status}`);
                }
            } catch (error) {
                console.error("Ошибка при отправке данных:", error);
                responseMessage.innerText = "Произошла ошибка при отправке данных.";
                responseMessage.style.display = "block";
            }
        } else {
            responseMessage.innerText = "Проверьте правильность заполнения формы.";
            responseMessage.style.display = "block";
        }
    });
});
