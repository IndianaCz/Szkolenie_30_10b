// console.log("Hello World!"); - sprawdzamy, czy jest podpięte
// alert("Uwaga"); - wbudowane w przeglądarkę
// var,const,let - zmienne w js 
// hoisting - dlatego nie używa się już varu, bo podlega hoistingowi- przez to nie wyrzuca błędu

// var nazwa_zmiennej = "wartość zmiennej";
// var first_name = "Jan";
// var last_name = "Kowalski";

// console.log (nazwa_zmiennej)

// let age = 25;
// console.log (age);

// const first_name = "Jan";
// console.log(first_name);
// Używamy const jeśli wiemy, że wartośc się nie zmienia / let - kiedy wiemy, że wartość sie będzie zmienmiać
// cudzysłów lub apostrofy używamy, gdy chcemy wpisać jakiś tekst, bo inaczej js będzie szukać funkcji / części kodu
// // Są różne typy danych: prymitywne/proste(przetrzymują tylko jedną wartośc danych) i złożone
// // Typy proste: string, number, boolean (prawda/fałsz), undefined, NaN, null
// // Zmienna const o typie danych string oraz zmienna let o typie danych string:
// const first_name = "Jan";
// let city = "Rzeszów";
// // Zmienna const o typie danych number:
// const num = 19;
// const second_num = 5;
// console.log(city.replace("e","w"));
// // konkatenacja np. dodawanie słów
// const result = `To jest ${first_name} i mieszka w ${city}`;
// console.log(result);
// // Słabo i dynamicznie typowany język. JS jest dynamicznie typowany - może sam zastępować typy danych.

// Pobieranie element ów z DOM (Document Object Model)
// const title = document.getElementById("Title");
// title.textContent = "Hello World!";
// title.style.color = "red";
// // title.classList.add("testowa");
// title.setAttribute("class","btn btn-danger");
// console.log(title);
// // query selector
// const desc = document.querySelector(".desc");
// console.log(desc);

// // Do pobrania wielu elementów:
// const items = document.querySelectorAll(".item");
// console.log(items);
// const name = document.getElementById("Name");
// console.log(name)
// const city = document.getElementById("City");
// const color = document.getElementById("Color");
// const animal = document.getElementById("Animal");
// console.log(city)
// console.log(color)
// console.log(animal)
// color.textContent = "Zielony"
// color.style.color = "green"

// const btn = document.createElement("button");
// btn.textContent = "Kup teraz!";
// btn.classList.add("przycisk");
// document.body.appendChild(btn);
const wrapper = document.getElementById("Products");
console.log(wrapper);

const card = document.createElement("div");

const cardTitle = document.createElement("h2");
cardTitle.classList.add("klasa1");
cardTitle.textContent = "Buty zimowe";
card.appendChild(cardTitle);

const card_price = document.createElement("p");
card_price.classList.add("price");
card_price.textContent = "Cena: 199,99zł";
card.appendChild(card_price);

const price_button = document.createElement("button");
price_button.classList.add("przycisk_zakupu");
price_button.textContent = "Kup teraz";
card.appendChild(price_button);


wrapper.appendChild(card);

// card.innerHTML = 
// `   
// <h2 class="klasa1">Buty zimowe</h2>
// <p class="price">Cena: 199,99zł</p>
// <button class="przycisk">Kup teraz</button>    

// `;
// wrapper.appendChild(card);
// console.log(card);



