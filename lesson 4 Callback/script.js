function yourLanguage(lang, callback) {
  console.log("Я изучаю " + lang);
  callback();
}

function done() {
  console.log("Это язык программирования");
}

yourLanguage("Javascript", done);
