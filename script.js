//массив карточек
const primordialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
        alt: "Архыз",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
        alt: "Челябинская область",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
        alt: "Иваново",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
        alt: "Камчатка",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
        alt: "Холмогорский район",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
        alt: "Байкал",
    },
];
const clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку "редактировать профиль"
const popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
const clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку "добавить новое место"
const newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
const profileName = document.querySelector(".profile__name"); //находим имя h1
const profileSubname = document.querySelector(".profile__subname"); //находим профессию
//карточки
const cardsList = document.querySelector(".elements-grid"); //находим список карточек
const cardTemplate = document.querySelector(".cards-temlate").content; //находим шаблон карточки
const cardElement = cardTemplate.querySelector(".card"); //находим карточку в шаблоне
const cardImg = cardElement.querySelector(".card__image"); //находим картинку в карточке в шаблоне
// Получаем ссылки на элементы модалки для просмотра увеличенных изображений
const imgBigPopap = document.querySelector(".img-card-big");
const modalImageElement = imgBigPopap.querySelector(".popup__image");
const captionTextImg = imgBigPopap.querySelector(".popup__caption");

// Обработчик отправки формы "редактировать профиль"
function formSubmitHandler(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector("[name=nameInput]").value;
    const jobInput = document.querySelector("[name=jobInput]").value;
    profileName.textContent = nameInput;
    profileSubname.textContent = jobInput;
    popupProfileEdit.querySelector("form").reset();
}
popupProfileEdit.addEventListener("submit", formSubmitHandler);
// Обработчик отправки формы "новое место"
function formSubmitMesto(evt) {
    evt.preventDefault();
    //Получения введенных значений в поля
    const name = document.querySelector("[name=mesto-title]").value;
    const link = document.querySelector("[name=mesto-link]").value;
    const point = {
        name,
        link,
        alt: name,
    };
    renderCard(point);
    newItemForm.querySelector("form").reset();
}
newItemForm.addEventListener("submit", formSubmitMesto);

//ПОПАПы открытие-закрытие
function openPopup(popup) {
    popup.classList.add("popup_opened");
}
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}
clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
});
clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemForm);
});
popupProfileEdit.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(popupProfileEdit);
});
newItemForm.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(newItemForm);
});
imgBigPopap.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(imgBigPopap);
});

//функция для инициализации карточки
function createCard(point) {
    const newItem = cardTemplate.querySelector(".card").cloneNode(true);
    //обрабатываем лайк
    newItem
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    //удаляем карточку
    const deleteButton = newItem.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        newItem.remove();
    });
    newItem.querySelector(".card__title").textContent = point.name;
    newItem.querySelector(".card__image").src = point.link;
    newItem.querySelector(".card__image").alt = point.name;
    //клик по картинке
    newItem
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
            modalImageElement.src = point.link;
            modalImageElement.alt = point.alt;
            captionTextImg.textContent = point.alt;
            openPopup(imgBigPopap);
        });
    return newItem;
}
//Выводим новую карточку
function renderCard(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
}
//Выводим массив карточек
primordialCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
});
