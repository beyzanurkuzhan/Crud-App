//Bağlantı kontrolü
//console.log('selam')
//! Düzenleme Modu Değişkenleri
let editMode = false;  //düzenleme modunu belirleyecek değişken
let editItem; //düzenleme elemanını belirleyecek değişken
let editItemId;  //düzenleme elemanının ıd si
// ! HTML'den elemanları çağırma
const form = document.querySelector(".form-wrapper"); //clas çağırmada . ile
const input = document.querySelector("#input");  // id çağırmada # ile çağrılır
const itemList = document.querySelector(".item-list");
const alert = document.querySelector(".alert");
//const deleteBtn = document.querySelector(".delete-btn");
const addButton = document.querySelector(`.submit-btn`);
//console.log(form, input);
// !!!!!!! FONKSİYONLAR
// form gönderildiğinde çalışacak fonksiyon
const addItem = (e) => {
    //sayfanın yenilenmesini iptal et
    e.preventDefault();
    const value = input.value;
    if (value !== "" && !editMode){
        //silme işlemi için benzersiz değere ihtiyacımız var bunun için id oluşturduk
      const id = new Data().getTime().toString();
        createElement(id, value);
        setToDefault(); 
        showAlert("Eleman eklendi", "succes");
        addToLocalStorage(id, value);
    }
    //console.log('Form Gönderildi');
    else if (value !== '' && editMode) {
editItem.innerHTML = value;
showAlert("Eleman Güncellendi", "succes");
setToDefault();
    }

};
// * Uyarı veren fonksiyon
const showAlert = (text, action) => {
    //alert kısmının içeriğini belirler
    alert.textContent = ` ${text}`;
    //alert kısmında class ekler
    alert.classList.add(`alert-${action}`);
    //alert kısmının içeriğini günceller ve eklenen classı kaldırır
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 2000);
};
// * Elemanları silen fonksiyon
const deleteItem = (e) => {
    //silmek istenen elemana eriş
    const element = e.target.parentElement.parentElement.
    parentElement;
    console.log(e);

    const id = element.dataset.id;
    //bu elemanı kaldır

    itemList.removeChild(element);
    showAlert("Eleman silindi", "danger");
};
// * Elemanları Güncelleyecek fonksiyon
const editItem = (e) => {
    const element = e.target.parentElement.parentElement.parentElement;
    const id = element.dataset.id;
    //Bu elemanı kaldır
    itemList.removeChild(element);
    showAlert("Eleman Silindi", "danger");  
};
//Elemanları Güncelleyecek fonksiyon
const editItem = (e) => {
    const element = e.target.parentElement.parentElement.parentElement; 
    editItem = e.target.parentElement.parentElement.
    previousElementSibling;
    input.value  = editItem.innerText;
    editMode = true;
    editItemId = element.dataset.id;
    addButton.textContent = `Düzenle`;
};
//* Varsayılan değeriere döndüren fonksiyon
const setToDefault = () => {
    input.value = "";
    editMode = false;
    editItemId = "";
    addButton.textContent = "Ekle";
};

// * Eleman oluşturan fonksiyon
const createElement = (id, value) => {
    //yeni bir div oluştur
  const newDiv = document.createElement("div");
  //bu dive attribute ekle
newDiv.setAttribute("data-id", id); //setattribüte ile bir elemana attribute ekleyebiliriz bu özellik bizden eklenecek elemanın adına ve bu özelliğin değerini ister.
  //bu dive class ekle
  newDiv.classList.add("item-list-item");
  //bu div in html içeriğini belirle
  newDiv.innerHTML = 
    ` <p class="item-name">${value}</p>
    <div class="btn-container">
        <button class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
           
        </button>
        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div> 
    `;
    // Dlete butonuna erişir
    const deleteBtn = newDiv.querySelector(".delete-btn");
   // console.log(deleteBtn);
   editBtn.addEventListener(`click`, editItem);

   // Edit butonuna eriş
   const editBtn = newDiv.querySelector(".delete-btn");
   //console.log(editBtn);
   editBtn.addEventListener("click", editItem);
   itemList.appendChild(newDiv);
   showAllert("Eleman eklendi", "succes");
 };
   // *Localstorage a kayıt yapan fonksiyon
   const addToLocalStorage = (id, value) => {
    const item = {id:id, value:value};
   localStorage.setItem('items bu isim değiştirebiliriz',JSON.stringify(item));
};


//!! Olay İzleyicileri
form.addEventListener("submit", addItem);










