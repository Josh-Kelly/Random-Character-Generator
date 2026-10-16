function unique(list) {
  return [...new Set(list)];
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function buildName(culture, gender) {
  const male = unique(culture.maleFirst);
  const female = unique(culture.femaleFirst);
  const last = unique(culture.last);
  const pat = culture.patronymics;

  const firstPool = gender === "male" ? male : female;
  if (firstPool.length === 0 || (last.length === 0 && !pat)) {
    return null;
  }

  const first = pick(firstPool);
  let surname;

  // Patronymic surname (e.g. Sigurdson / Sigurdsdottir), built from a male first name
  if (pat && male.length && Math.floor(Math.random() * pat.chance) === 0) {
    surname = pick(male) + (gender === "male" ? pat.male : pat.female);
  } else {
    surname = last.length ? pick(last) : "";
  }

  return surname ? `${first} ${surname}` : first;
}

function generateName() {
  const cultureKey = document.getElementById("cultureSelect").value;
  const genderChoice = document.getElementById("genderSelect").value;
  const culture = NAME_DATA[cultureKey];
  const output = document.getElementById("nameOutput");
  const note = document.getElementById("nameNote");

  const gender =
    genderChoice === "random"
      ? Math.random() < 0.5
        ? "male"
        : "female"
      : genderChoice;

  const name = buildName(culture, gender);

  if (name === null) {
    output.value = "";
    note.textContent = `No ${gender} names have been added for ${culture.label} yet.`;
    return;
  }

  note.textContent = "";
  output.value = `${name} (${gender})`;
}

function populateCultures() {
  const select = document.getElementById("cultureSelect");
  Object.keys(NAME_DATA).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = NAME_DATA[key].label;
    select.appendChild(option);
  });
}

populateCultures();
