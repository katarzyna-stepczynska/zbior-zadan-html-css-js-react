// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings) => {
  // dataEntries = 10; // zakres stron do wyswietlenia? czy powinno byc w array?
  // settings = { // wyswietla mi bład w konsoli
  //   actualPageIdx, // aktualna strona
  //   entriesOnPage // max ilość stron
  // };
  let entriesOnSelectedPage; // ilosc elementów do wyswietlenia
  let startPage; // początek strony wyswietlanej
  let endPage; // koniec strony wyswietlanej

  if (settings.actualPageIdx < 1) {
    settings.actualPageIdx = 1;
  } else if (settings.actualPageIdx > settings.entriesOnPage) {
    settings.actualPageIdx = settings.entriesOnPage;
  }
  if (settings.entriesOnPage <= dataEntries) {
    startPage = 1;
    endPage = settings.entriesOnPage;
  } else {
    let beforePage = Math.floor(dataEntries / 2);
    let afterPage = Math.ceil(dataEntries / 2) - 1;
    if (settings.actualPageIdx <= beforePage) {
      startPage = 1;
      endPage = dataEntries;
    } else if (settings.actualPageIdx + afterPage >= settings.entriesOnPage) {
      startPage = settings.entriesOnPage - dataEntries + 1;
      endPage = settings.entriesOnPage;
    } else {
      startPage = settings.actualPageIdx - beforePage;
      endPage = settings.actualPageIdx + afterPage;
    }
  }
  entriesOnSelectedPage = Array.from(endPage - startPage); // nie wiem jak sprawdzic czy działa bo mam problem z settings
  return entriesOnSelectedPage;
};
const settingsNow = {
  // tu mam problem bo nie wiem jak inaczej wywołac dwa klucze dla jednego parametru funkcji
  actualPageIdx: 9,
  entriesOnPage: 50,
};
paginateArray(10, settingsNow);

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony
