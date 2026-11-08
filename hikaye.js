/* ==========================================================
   PLIK HISTORII: teksty książki i interakcje znajdują się tutaj.
   Obrazy znajdują się w tym samym folderze pod nazwami "strona1", "strona2", ...
   (jpg, png lub webp). Jeśli chcesz, możesz też dodać obraz o nazwie "okładka",
   który zostanie użyty jako okładka.
   ========================================================== */

window.HIKAYE = {

  // Teksty na okładce (używane, gdy nie ma obrazu okładki)
  baslik: "Nasz Jeden Dzień",
  altBaslik: "dzień, który jeszcze się nie wydarzył",

  // Numer strony = numer obrazu (strona1 → 1)
  sayfalar: {

    1: {
      // Unoszące się cząsteczki w tle: serce, gwiazda, sakura, śnieg, liść, wyłączone
      parcacik: "kalp",

      // Tekst opowiadany w chmurce po kliknięciu na twarz w prawym dolnym rogu.
      // Jeśli napiszesz kilka linijek, po każdym dotknięciu przejdzie do następnej.
      konusma: [
        "Kiedy wyszedłem z pracy, dzień już dawno się skończył, ale moje myśli były wciąż w tym samym miejscu: w domu.",
        "Zanim otworzyłem drzwi, usłyszałem ze środka ciche odgłosy małych stópek. Moja jedyna żona i nasz kot znowu szli w stronę drzwi."
      ],

      // Mała notatka z tyłu strony po lewej stronie (opcjonalnie)
      arka: "w niektóre dni wystarczy sam Twój uśmiech."
    },

    2: {
      parcacik: "yildiz",
      konusma: [
        "Razem otworzyli drzwi. Ty się uśmiechałaś, a nasz kot ocierał się o moje nogi.",
        "Zupełnie nie rozumiem, dokąd zniknęło całe moje zmęczenie."
      ]
    },

    3: {
      parcacik: "kalp",
      konusma: [
        "W kuchni znowu my we dwójkę. Ty przygotowujesz składniki, a ja udaję, że pomagam.",
        "Gotowanie z Tobą jest piękniejsze niż jedzenie najsmaczniejszego dania na świecie."
      ]
    },

    4: {
      parcacik: "yildiz",
      konusma: [
        "Nakryliśmy do stołu, jak zwykle opowiadam Ci o moim dniu. Mała Luna siedzi obok nas przy stole i nas obserwuje.",
        "Kiedy wzięłaś kęs i zamknęłaś oczy, pomyślałem sobie, że warto było czekać na to cały dzień."
      ]
    },

    5: {
      parcacik: "kar",
      konusma: [
        "Potem film na kanapie. Kocyk, Ty, ja i kot wciśnięty między nas dwójkę.",
        "Nawet nie pamiętam końca filmu. Patrząc na Ciebie, nie mogłem obejrzeć ani trochę."
      ]
    }
  },

  // Ostatnia strona
  final: {
    baslik: "Ciąg dalszy nastąpi…",
    metin: "Ten dzień jeszcze się nie wydarzył. Ale przeżyjemy go razem.",
    konusma: [
      "To wszystko jeszcze się nie stało. Ale każdego dnia jesteśmy coraz bliżej.",
      "Nie mogę się doczekać każdego zwykłego wieczoru, który z Tobą spędzę. Kocham Cię."
    ]
  }
};