// поля форм попапов
export const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    buttonSelector: ".popup__button",
    inputErrorClass: "popup__form-error",
    inactiveButtonClass: "popup__botton_disabled",
} 

export const popup = document.querySelectorAll(".popup")
export const formNewMesto = document.forms.formNewMesto //форма "Новое место"
export const clickProfileEdit = document.querySelector(".profile__edit") //находим кнопку "редактировать профиль"
export const popupProfileEdit = document.querySelector(".popup-edit-profile") //находим попап "редактировать профиль"
export const submitProfileButton = popupProfileEdit.querySelector('.popup__button');
export const clickButtonAvatarEdit = document.querySelector(".profile__avatar-button") //кнопку "редактировать аватар"
export const popupAvatar = document.querySelector(".popup-avatar") //находим попап "редактировать аватар"
export const formNewAvatar = document.forms.formNewAvatar//форма "Новое место"
export const clickProfileAdd = document.querySelector(".profile__add") //находим кнопку "добавить новое место"
export const newItemPopup = document.querySelector(".new-item-form") //находим попап "добавить новое место"
export const profileName = document.querySelector(".profile__name") //находим имя h1
export const profileAvatarImg = document.querySelector(".profile__avatar") //находим аватар
export const profileSubname = document.querySelector(".profile__subname") //находим профессию
//карточки
export const cardsList = document.querySelector(".elements-grid") //находим список карточек
export const cardTemplate = document.querySelector(".cards-temlate").content //находим шаблон карточки
// Получаем ссылки на элементы модалки для просмотра увеличенных изображений
export const imgBigPopap = document.querySelector(".img-card-big")
export const modalImageElement = imgBigPopap.querySelector(".popup__image")
export const captionTextImg = imgBigPopap.querySelector(".popup__caption")
export const nameInput = document.querySelector("[name=nameInput]")
export const jobInput = document.querySelector("[name=jobInput]")
export const mestoTitle = formNewMesto.querySelector("[name=mesto-title]");
export const mestoLink = formNewMesto.querySelector("[name=mesto-link]");
export const avatarLinkInput = formNewAvatar.querySelector("[name=avatar-link]");

export const formProfileEdit = popupProfileEdit.querySelector(config.formSelector);
export const submitBtnFormProfileEdit = popupProfileEdit.querySelector(config.buttonSelector);
export const submitBtnNewItemForm = newItemPopup.querySelector(config.buttonSelector);
export const submitBtnNewAvatar = formNewAvatar.querySelector(config.buttonSelector);
// выберем все кнопки лайка
export const cardLikeButtom = cardsList.querySelectorAll(".card__like");
//export const cardLikesCount = newItem.querySelector(".card__likes");
