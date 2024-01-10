//isprazniti prvi select
//u njega dodati sve iz niza
//dodati listener na change
//u odnosu na odabir isprazniti drugi select i popuniti ga ILI ga sakriti a prikazati input
let petSelect = document.getElementById("petType");
Array.from(petSelect.children).forEach((element) => {
  element.remove();
});

petTypes.forEach((el) => {
  const listItem = document.createElement("option");
  listItem.value = el.id;
  listItem.innerHTML = el.name;
  petSelect.appendChild(listItem);
});
