/* ---------- ŚCIEŻKA DO OBRAZÓW ---------- */
const IMAGE_PATH = "public/images";

/* ---------- RASY (pełne opisy + obrazki) ---------- */
const races = [
  { 
    name: "Krwawe Elfy", 
    faction: "Horda", 
    description: "Krwawe Elfy są spragnione magii. Otrzymujesz 1 dodatkową monetę zwycięstwa za każdy region magiczny, który Krwawe Elfy zajmują na koniec swojej tury  ", 
    image_url: `${IMAGE_PATH}/races/horde/blood_elves.png` 
  },
  { 
    name: "Gnomy", 
    faction: "Przymierze", 
    description: "Maszyny latające Gnomów pozwalają raz na turę przeprowadzić atak powietrzny na jakikolwiek region na każdej z plansz. Podczas ataku traktujesz region jak sąsiadujący. Dodatkowo przed atakiem, ale już po wyborze regionu, możesz rzucić kością Posiłków, by (potencjalnie) zmniejszyć koszt Podboju. Jeśli atak powietrzny jest ostatnim możliwym atakiem, możesz skorzystać z rzutu kością Posiłków dwukrotnie: pierwszy raz dzięki umiejętności rasowej Gnomów, a drugi raz zgodnie z zasadami ostatniego Podboju.", 
    image_url: `${IMAGE_PATH}/races/alliance/gnomes.png` 
  },
  { 
    name: "Nocne Elfy", 
    faction: "Przymierze", 
    description: "Nocne Elfy mogą podbijać regiony Lasów, płacąc 1 żeton Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton). Za każdym razem, gdy podbijesz region Lasów, połóż na nim żeton Ściany Ogników. Ściana Ogników jest traktowana jako 1 żeton obronny i pozostaje w regionie nawet wtedy, gdy Rasa jest Wymierająca, ale odkłada się go, gdy region zostanie podbity albo zostanie uznany za pusty.", 
    image_url: `${IMAGE_PATH}/races/alliance/night_elves.png` 
  },
  { 
    name: "Draenei", 
    faction: "Przymierze", 
    description: "Podczas każdej tury przeciwnika Draenei mogą przywołać Świętą Światłość: pierwszy żeton Rasy, który powinien zostać odrzucony (podczas Podboju albo w wyniku użycia Zdolności Specjalnej lub umiejętności rasowej), zostaje Ci na ręce i możesz go normalnie przełożyć. Wszystkie kolejne żetony odrzucasz jak zwykle.", 
    image_url: `${IMAGE_PATH}/races/alliance/draenei.png` 
  },
  { 
    name: "Gobliny", 
    faction: "Horda", 
    description: "Na końcu swojej tury Gobliny mogą podłożyć Bomby w sąsiadujących regionach zajętych przez <b>Aktywne</b> Rasy przeciwników. <br><br>W momencie wyboru Rasy Goblinów, potasuj 12 żetonów Bomb i połóż je na stosie awersem do dołu. Aby podłożyć Bombę w sąsiadującym regionie należącym do przeciwnika, weź żeton z wierzchu stosu i połóż go na planszy bez odwracania (w każdym regionie może znajdować się tylko 1 żeton Bomby). <br><br>Na początku Twojej następnej tury, jeśli region z żetonem Bomby wciąż będzie zajęty przez przeciwnika (nawet jeśli w międzyczasie ogłosi Wymieranie Rasy), odkryj żeton Bomby: eksplozja oznacza udany Podbój (przeciwnik traci 1 żeton Rasy, resztę żetonów bierze na rękę, by je normalnie rozłożyć), a region uznaje się za pusty. Niewypał nie daje żadnych efektów. W każdym przypadku żeton Bomby odkładasz do pudełka. <br> <br>Jeśli region zostanie porzucony przed następną turą, odłóż żeton Bomby na wierzch stosu bez sprawdzania awersu. Gdy ogłosisz Wymieranie Goblinów, żetony Bomb podłożone na końcu Twojej poprzedniej tury wybuchają, a ich efekt jest rozpatrywany zgodnie z zasadami. Jeśli stos z żetonami Bomb się wyczerpie, Gobliny nie mogą już umieszczać Bomb na planszy.", 
    image_url: `${IMAGE_PATH}/races/horde/goblins.png` 
  },
  { 
    name: "Orkowie", 
    faction: "Horda", 
    description: "Orkowie są urodzonymi zdobywcami. Każdy Podbój regionu zajmowanego przez Przymierze jest wart 1 dodatkową monetę zwycięstwa. Ta zdolność łączy się z bonusem frakcji.", 
    image_url: `${IMAGE_PATH}/races/horde/orcs.png` 
  },
  { 
    name: "Krasnoludy", 
    faction: "Przymierze", 
    description: "Krasnoludy mogą podbijać regiony Gór, płacąc 2 żetony Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/races/alliance/dwarves.png` 
  },
  { 
    name: "Ludzie", 
    faction: "Przymierze", 
    description: "Ludzie mogą wyznaczać strategiczne regiony dla graczy nienależących do Hordy. Na koniec każdej swojej tury połóż 2 żetony Celów Militarnych (zebrane z planszy, jeśli to konieczne) w 2 różnych regionach nienależących do Ras Przymierza. Jeśli 1 z graczy nienależących do Hordy (wliczając w to Ludzi) podbije region z żetonem Celu Militarnego, otrzymuje 2 dodatkowe monety zwycięstwa i oddaje Ci żeton z powrotem. Otrzymujesz także 2 dodatkowe monety zwycięstwa, jeśli to nie Ty podbiłeś ten region. Jeśli gracz z Hordy podbije region z żetonem Celu Militarnego, nic się nie dzieje, a żeton zostaje na miejscu.", 
    image_url: `${IMAGE_PATH}/races/alliance/humans.png` 
  },
  { 
    name: "Pandareni", 
    faction: "Neutralni", 
    description: "Na koniec każdej swojej tury Pandareni wręczają żeton Harmonii każdemu przeciwnikowi, którego Aktywna Rasa nie została przez nich zaatakowana w tej rundzie (także w 1. rundzie tym, którzy jeszcze nie mają swoich własnych Ras). Gracz, który otrzymał żeton Harmonii, musi zapłacić Pandarenom 2 monety zwycięstwa, zanim będzie mógł ich zaatakować (tzn. gdy ich region jest podbijany albo jakiś efekt powoduje usunięcie żetonów Rasy z zajmowanego regionu). Gracz płaci 2 monety zwycięstwa raz, nawet jeśli atakuje kilka regionów Pandarenów. Żetony Harmonii wracają do Pandarenów na początku każdej Twojej tury.", 
    image_url: `${IMAGE_PATH}/races/neutral/pandaren.png` 
  },
  { 
    name: "Eteryczni", 
    faction: "Neutralni", 
    description: "Eteryczni są zbieraczami Artefaktów: raz na turę możesz zabrać Artefakt z regionu sąsiadującego z 1 z zajmowanych przez nich regionów. Wówczas przesuwasz znacznik Artefaktu do zajmowanego regionu (możesz natychmiast użyć efektu Artefaktu) <b>ALBO</b> możesz podbić jakikolwiek sąsiadujący region, na którym leży znacznik Legendarnego Miejsca, płacąc 2 żetony Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/races/neutral/ethereals.png` 
  },
  { 
    name: "Koboldy", 
    faction: "Neutralni", 
    description: "Mieszkające w  podziemiach Koboldy mogą dostać się do dowolnej Jaskini i zaatakować dowolny region Jaskiń tak, jakby był sąsiadujący. Podczas pierwszego Podboju możesz traktować region Jaskiń jako region startowy i jeśli to zrobisz, nie płacisz dodatkowego żetonu Rasy (kosztów podróży).", 
    image_url: `${IMAGE_PATH}/races/neutral/kobolds.png` 
  },
  { 
    name: "Taureni", 
    faction: "Horda", 
    description: "Ci wojownicy nie mogą zajmować (ani podbijać) regionów z użyciem mniej niż 2 żetonów Rasy. Jednak wciąż tracą 1 żeton, gdy ich region zostanie podbity. W regionie zajmowanym przez Taurenów muszą znajdować się przynajmniej 2 żetony Rasy i to nawet w fazie Przygotowania jednostek. Jeśli w danym regionie pozostanie tylko 1 żeton Rasy Taurenów, musisz go przełożyć do innego regionu, który zajmują Taureni. Gdy ogłaszasz Wymieranie Taurenów, w każdym regionie możesz zostawić 2 żetony Rasy (zamiast 1).", 
    image_url: `${IMAGE_PATH}/races/horde/tauren.png` 
  },
  { 
    name: "Worgeni", 
    faction: "Przymierze", 
    description: "Na początku każdej swojej tury Worgeni muszą wybrać między ludzką postacią (natychmiast zdobywasz 2 dodatkowe monety zwycięstwa) albo postacią Worgenów (zapłać 1 monetę zwycięstwa, by wszystkie Podboje w tej turze kosztowały 1 żeton Rasy mniej niż normalnie, ale wciąż musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/races/alliance/worgen.png` 
  },
  { 
    name: "Porzuceni", 
    faction: "Horda", 
    description: "Porzuceni mogą rekrutować martwe jednostki wroga: za każdym razem, gdy wymuszają stratę żetonu Rasy (Aktywnej albo Wymierającej), możesz zapłacić 1 monetę zwycięstwa, żeby otrzymać dodatkowy żeton Rasy Porzuconych. Otrzymujesz dodatkowe żetony po ostatnim Podboju w turze przed fazą Przegrupowania (można ich użyć do Podboju dopiero w następnej rundzie).", 
    image_url: `${IMAGE_PATH}/races/horde/undead.png` 
  },
  { 
    name: "Nagi", 
    faction: "Neutralni", 
    description: "Nagi zwykle żyją pod wodą, więc w przeciwieństwie do innych Ras mogą podbijać regiony Mórz i Jezior. Podczas pierwszego Podboju możesz podbić region Mórz albo Jezior (wymaga 2 żetonów Rasy) i z niego rozpocząć ekspansję. Nagi pozostają w regionach Mórz i Jezior podczas Wymierania.", 
    image_url: `${IMAGE_PATH}/races/neutral/naga.png` 
  },
  { 
    name: "Trolle", 
    faction: "Horda", 
    description: "Trolle to przebiegli wojownicy, dlatego możesz podbić dowolny zajęty region, płacąc 1 żeton Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/races/horde/trolls.png` 
  }
];

/* ---------- ZDOLNOŚCI (pełne opisy + format) ---------- */
const abilities = [
  { 
    name: "Archeolodzy", 
    description: "Ta Rasa uczonych uwielbia badać stare rzeczy i dziwne miejsca: otrzymujesz 1 dodatkową monetę zwycięstwa za każdy Artefakt i każde Legendarne Miejsce w regionach, które kontrolują Archeolodzy na koniec Twojej tur", 
    image_url: `${IMAGE_PATH}/abilities/archeologists.png` 
  },
  { 
    name: "Bagnołazy", 
    description: "Bagnołazy dają 1 dodatkową monetę zwycięstwa za każdy region Bagien, który kontrolują na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/swamp_walkers.png` 
  },
  { 
    name: "Czempioni", 
    description: "Rasa kontroluje 1 potężnego Czempiona. Raz na turę możesz podbić jakikolwiek sąsiadujący z nią region za darmo niezależnie od liczby żetonów przeciwnika i żetonów obronnych znajdujących się na nim. Po Podboju umieść żeton Czempiona w tym regionie. Czempion liczy się jak 1 żeton Rasy podczas obrony. Jeśli inny gracz podbije region z Czempionem, bierze go do niewoli. Nie odrzucasz żetonu Rasy. Musisz natychmiast zapłacić przeciwnikowi 1 monetę zwycięstwa okupu, by odzyskać żeton Czempiona. Przełóż go jak normalne żetony Rasy. Możesz użyć go ponownie w następnej turze.", 
    image_url: `${IMAGE_PATH}/abilities/champions.png` 
  },
  { 
    name: "Górale", 
    description: "Górale dają 1 dodatkową monetę zwycięstwa za każdy region Gór, który kontrolują na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/mountaineers.png` 
  },
  { 
    name: "Górnicy", 
    description: "Górnicy pragną kamieni szlachetnych: otrzymujesz 1 dodatkową monetę zwycięstwa za każdy region Jaskiń, który kontrolują Górnicy na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/miners.png` 
  },
  { 
    name: "Kowale", 
    description: "Kowale potrafią wykuć potężną broń: możesz podbić każdy region, płacąc 1 żeton Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/abilities/smiths.png` 
  },
  { 
    name: "Magowie Portali", 
    description: "Dwa razy na turę Magowie Portali mogą wymienić wszystkie żetony (z wyjątkiem znaczników Gór i Legendarnych Miejsc) pomiędzy 2 regionami magicznymi.", 
    image_url: `${IMAGE_PATH}/abilities/portal_mages.png` 
  },
  { 
    name: "Mistrzowie Bitew", 
    description: "Mistrzowie Bitew żyją, by zwyciężać. Za każdym razem, gdy podbijesz zajęty region, otrzymujesz 1 dodatkową monetę zwycięstwa.", 
    image_url: `${IMAGE_PATH}/abilities/battle_masters.png` 
  },
  { 
    name: "Mokradłowcy", 
    description: "Przed Podbojem regionu Bagien kontrolowanego przez Mokradłowców przeciwnik musi Ci zapłacić 1 monetę zwycięstwa. Ta zdolność pozostaje Aktywna, gdy ogłosisz Wymieranie Rasy.", 
    image_url: `${IMAGE_PATH}/abilities/marshfolk.png` 
  },
  { 
    name: "Obrońcy", 
    description: "Na koniec swojej tury połóż znacznik Wieży Strażniczej na każdym regionie Pól Obrońców, wokół których kontrolują najwięcej regionów sąsiadujących (tzn. kontrolujesz więcej regionów sąsiadujących niż jakakolwiek Aktywna albo Wymierająca Rasa), i usuń każdą Wieżę Strażniczą z regionów Pól, gdy ten warunek nie będzie już spełniony. Wieża Strażnicza sprawia, że region jest odporny na Podboje i efekty Zdolności Specjalnych i umiejętności rasowych.", 
    image_url: `${IMAGE_PATH}/abilities/defenders.png` 
  },
  { 
    name: "Odkrywcy", 
    description: "Odkrywcy dają 1 dodatkową monetę zwycięstwa za każdą planszę, na której zajmują przynajmniej 1 region na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/explorers.png` 
  },
  { 
    name: "Rolnicy", 
    description: "Rolnicy dają 1 dodatkową monetę zwycięstwa za każdy region Pól, który kontrolują na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/farmers.png` 
  },
  { 
    name: "Rybacy", 
    description: "Rybacy dają 1 dodatkową monetę zwycięstwa za każdy region sąsiadujący z Morzem albo Jeziorem, który kontrolują na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/fishers.png` 
  },
  { 
    name: "Siłacze", 
    description: "Siłacze to mistrzowie manipulacji: 3 razy na turę możesz przesunąć 1 żeton Rasy przeciwnika (Aktywnej albo Wymierającej) z regionów sąsiadujących z Siłaczami do jakiegokolwiek innego regionu kontrolowanego przez tę samą Rasę (jeśli nie ma takich, odrzuć ten żeton do zasobnika). Możesz to zrobić w 3 różnych regionach albo kilka razy w tym samym regionie. <br><br>◆ żetony Murloków są zawsze odrzucane; <br>◆ Ściany Ogników i Twierdze (jeśli jakieś się tam znajdują) są odrzucane (liczy się to jako użycie Zdolności) przed żetonami Rasy; <br>◆ z tej Zdolności Specjalnej trzeba skorzystać przed ostatnim Podbojem w turze.", 
    image_url: `${IMAGE_PATH}/abilities/strongmen.png` 
  },
  { 
    name: "Tropiciele", 
    description: "Tropiciele to miłośnicy lasów: otrzymujesz 1 dodatkową monetę zwycięstwa za każdy region Lasów, który kontrolują Tropiciele na koniec Twojej tury.", 
    image_url: `${IMAGE_PATH}/abilities/trackers.png` 
  },
  { 
    name: "Wartownicy", 
    description: "Wartownicy to doskonali budowniczowie fortyfikacji: połóż 1 znacznik Twierdzy w każdym regionie, który zajmują Wartownicy. Twierdza wzmacnia obronę regionu o 1 (jakby był tam dodatkowy żeton Rasy) i zostaje w regionie z Rasą Wymierającą. Odrzuć znacznik Twierdzy, jeśli region został podbity albo jest pusty. <br><br>Na planszach może znajdować się maksymalnie 10 znaczników Twierdz, ale tylko 1 znacznik w każdym regionie.", 
    image_url: `${IMAGE_PATH}/abilities/guards.png` 
  },
  { 
    name: "Władcy Bestii", 
    description: "Oswojone bestie mogą być użyteczne w walce. Na początku każdej swojej tury odrzucasz wszystkie żetony Bestii. Po sprawdzeniu, jak wiele regionów Wzgórz kontrolują Władcy Bestii, weź odpowiednią liczbę żetonów Bestii. Możesz używać ich jak żetonów Rasy do Podbojów i przegrupowania na koniec tury. Gdy region Władców Bestii z przynajmniej 1 żetonem Bestii zostanie podbity, musisz odrzucić 1 żeton Bestii, a pozostałe w nim żetony Rasy (w tym Bestii) wziąć na rękę i rozłożyć zgodnie z zasadami.", 
    image_url: `${IMAGE_PATH}/abilities/beastmasters.png` 
  },
  { 
    name: "Zdobywcy", 
    description: "Za każdym razem, gdy podbijasz region z przynajmniej 2 żetonami Rasy broniącymi regionu, otrzymujesz taką liczbę dodatkowych monet zwycięstwa, ile wynosi liczba tych żetonów Rasy.", 
    image_url: `${IMAGE_PATH}/abilities/conquerors.png` 
  },
  { 
    name: "Zielarze", 
    description: "Zielarze wykorzystują moc roślin i dają 1 dodatkową monetę zwycięstwa za każdy region Wzgórz, który kontrolują na koniec tury.", 
    image_url: `${IMAGE_PATH}/abilities/herbalists.png` 
  },
  { 
    name: "Żeglarze", 
    description: "Żeglarze to eksperci od podróżowania. Nie płacisz dodatkowego żetonu Rasy jako kosztów podróży, gdy podbijasz region startowy, który nie sąsiaduje z zajmowanymi przez Żeglarzy regionami.", 
    image_url: `${IMAGE_PATH}/abilities/sailors.png` 
  }
];

/* ---------- ARTEFAKTY i LEGENDARNE MIEJSCA (pełne opisy + format) ---------- */
const artifacts = [
  { 
    name: "Egida Aggramara", 
    description: "Na koniec swojej tury połóż żeton Egidy Aggramara w 1 z zajmowanych przez siebie regionów. Region jest odporny na Podboje i efekty Zdolności Specjalnych i umiejętności rasowych, dopóki przeciwnik nie zapłaci właścicielowi Egidy Aggramara 2 monet zwycięstwa", 
    image_url: `${IMAGE_PATH}/artifacts/aegis_of_aggramar.png` 
  },
  { 
    name: "Ostrze Mrozu", 
    description: "Raz na turę możesz użyć Ostrza Mrozu, by podbić region, płacąc 2 żetony Rasy mniej niż normalnie (musisz zapłacić przynajmniej 1 żeton).", 
    image_url: `${IMAGE_PATH}/artifacts/frostmourne.png` 
  },
  { 
    name: "Prochy Al’ara", 
    description: "Jeśli Twoje wojska kontrolują Prochy Al’ara, raz na turę możesz podbić jakikolwiek region na planszy. Dalej musisz zapłacić normalny koszt Podboju, tak jakby ten region był regionem sąsiadującym.", 
    image_url: `${IMAGE_PATH}/artifacts/ashes_of_alar.png` 
  },
  { 
    name: "Serce Azeroth", 
    description: "Na koniec swojej tury połóż Serce Azeroth na 1 z regionów, który zajmujesz. Każdy przeciwnik, który kontroluje Aktywną Rasę zajmującą co najmniej 1 region sąsiadujący z Sercem Azeroth, płaci Ci po 1 monecie zwycięstwa.", 
    image_url: `${IMAGE_PATH}/artifacts/heart_of_azeroth.png` 
  },
  { 
    name: "Zgładziciel", 
    description: "Jeśli Twoje wojska kontrolują Zgładziciela, raz na turę możesz podbić jakikolwiek 1 region za pomocą tylko 1 żetonu Rasy, ale musisz najpierw zapłacić 2 monety zwycięstwa podbijanemu. Jeśli podbijany jest region, który nie ma właściciela, należy dołożyć monety do stosu monet.", 
    image_url: `${IMAGE_PATH}/artifacts/slayer.png` 
  },
  { 
    name: "Kamień Spotkania", 
    description: "Jeśli Twoje jednostki zajmują Kamień Spotkania, nie płacisz dodatkowego żetonu Rasy, gdy podbijasz niesąsiadujący region startowy.", 
    image_url: `${IMAGE_PATH}/artifacts/meeting_stone.png` 
  },
  { 
    name: "Kaplica Świetlistej Nadziei", 
    description: "Jeśli Twoje jednostki zajmują Kaplicę Świetlistej Nadziei, nie tracisz żadnego żetonu, gdy jesteś atakowany. Gdy region, w którym leży znacznik Kaplicy Świetlistej Nadziei, zostanie podbity przez inną Rasę, gracz, który go do tej pory zajmował, jeszcze raz korzysta z efektu, jaki dawało to Legendarne Miejsce, dlatego nie odrzuca po ataku 1 żetonu Rasy, tylko bierze go na rękę.", 
    image_url: `${IMAGE_PATH}/artifacts/chapel_of_hope.png` 
  },
  { 
    name: "Karazhan", 
    description: "Jeśli Twoje jednostki zajmują Karazhan, otrzymujesz 1 dodatkową monetę zwycięstwa za wszystkie INNE kontrolowane przez Ciebie regiony tego samego rodzaju co region, w którym znajduje się Karazhan.", 
    image_url: `${IMAGE_PATH}/artifacts/karazhan.png` 
  },
  { 
    name: "Mroczny Portal", 
    description: "Jeśli Twoje jednostki zajmują Mroczny Portal, otrzymujesz 2 dodatkowe monety zwycięstwa na koniec tury.", 
    image_url: `${IMAGE_PATH}/artifacts/dark_portal.png` 
  },
  { 
    name: "Pole Bitew", 
    description: "Jeśli Twoje jednostki zajmują Pole Bitew, możesz dwukrotnie skorzystać z bonusu frakcji po pokonaniu tej samej Rasy (tzn. podbijając 2 regiony – albo więcej – tej samej Rasy z przeciwnej frakcji w tej samej turze, możesz otrzymać 2 dodatkowe monety zwycięstwa). <br><br>Rasa neutralna zajmująca Pole Bitew może wybrać, czy w danej turze walczy po stronie Przymierza, czy Hordy, i skorzystać z bonusu frakcji i bonusu Pola Bitew (zob. wyżej). Na koniec tury ta Rasa znów staje się neutralna. W następnej turze, jeśli kontrolujący Rasę neutralną wciąż ma znacznik Pola Bitew, ponownie może dokonać wyboru pomiędzy 2 frakcjami niezależnie od wcześniejszego wyboru.", 
    image_url: `${IMAGE_PATH}/artifacts/battlefield.png` 
  },
  { 
    name: "Studnia Wieczności", 
    description: "Po odkryciu należy przesunąć znacznik Studni Wieczności do regionu Jezior albo Mórz na tej samej planszy (jeśli nie ma takiego, losujesz inny znacznik Legendarnego Miejsca). Rasa, która na koniec swojej tury zajmuje więcej regionów sąsiadujących z regionem, w którym znajduje się Studnia Wieczności, niż pozostali gracze, otrzymuje 2 dodatkowe monety zwycięstwa, nawet jeśli jest to Rasa Wymierająca. W przypadku remisu nikt nie otrzymuje tej premii.", 
    image_url: `${IMAGE_PATH}/artifacts/well_of_eternity.png` 
  },
  { 
    name: "Uzdrowicielka Dusz", 
    description: "Podczas przegrupowania Aktywna Rasa zajmująca region ze znacznikiem Uzdrowicielki Dusz otrzymuje 1 dodatkowy żeton Rasy (pod warunkiem, że co najmniej 1 został w zasobniku na żetony).", 
    image_url: `${IMAGE_PATH}/artifacts/soul_healer.png` 
  }
];


/* ---------- RENDERING ---------- */
function placeholder(src, alt) {
  // returns <img> html or fallback
  if (src && src.trim()) return `<img src="${src}" alt="${alt}" />`;
  return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#bbb;background:#f2f4f6;">${alt ? alt[0] : '+'}</div>`;
}

/* inject races into categories */
function renderRaces() {
  $('.category-list').empty();
  const groups = { 'Przymierze':[], 'Horda':[], 'Neutralni':[] };
  races.forEach(r => groups[r.faction].push(r));
  for (const faction of Object.keys(groups)) {
    const $list = $(`.category-list[data-faction="${faction}"]`);
    groups[faction].forEach(r => {
      const $r = $(`
        <div class="race" data-name="${escapeHtml(r.name)}">
          <div class="race-thumb" data-thumb>${r.image_url ? `<img src="${r.image_url}" alt="${escapeHtml(r.name)}">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#bbb;background:#f2f4f6;">${r.name.charAt(0)}</div>`}</div>
          <div class="race-info">
            <h3>${escapeHtml(r.name)}</h3>
            <p title="${escapeHtml(r.description)}">${escapeHtml(r.description)}</p>
          </div>
          <div class="race-actions" title="Szczegóły">ℹ️</div>
        </div>
      `);
      $list.append($r);
    });
  }

  // make race-thumb and entire .race clickable to show details
  $('.race, .race-thumb, .race-actions').off('click').on('click', function(e){
    // find the race element (closest .race)
    const $race = $(e.target).closest('.race');
    if ($race.length === 0) return;
    const name = $race.attr('data-name');
    const r = races.find(x => x.name === name);
    if (!r) return;
    showModal(renderDetailHtml(r.name, r.description, r.image_url));
  });
}

/* abilities */
function renderAbilities() {
  const $ab = $('#abilitiesList').empty();
  abilities.forEach(a => {
    const $card = $(`
      <div class="ability" data-name="${escapeHtml(a.name)}">
        <div style="min-width:56px;height:56px;border-radius:8px;overflow:hidden;background:#f2f4f6">${a.image_url ? `<img src="${a.image_url}" alt="${escapeHtml(a.name)}">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#bbb;">${a.name.charAt(0)}</div>`}</div>
        <div class="a-text"><strong>${escapeHtml(a.name)}</strong><div style="font-size:12px;color:#555;margin-top:6px">${escapeHtml(a.description)}</div></div>
      </div>
    `);
    $ab.append($card);
    $card.on('click', ()=> showModal(renderDetailHtml(a.name, a.description, a.image_url)));
  });
}

/* initial artifact list used in modal for selection */
function renderArtifactGrid(containerSelector, selectable=true) {
  const $ct = $(containerSelector).empty();
  const $grid = $('<div class="art-grid"></div>');
  artifacts.forEach((a, idx) => {
    const $card = $(`
      <div class="art-card" data-idx="${idx}">
        <div>${a.image_url ? `<img src="${a.image_url}" alt="${escapeHtml(a.name)}">` : `<div style="width:72px;height:72px;display:flex;align-items:center;justify-content:center;background:#f2f4f6;border-radius:8px;color:#bbb">${a.name.charAt(0)}</div>`}</div>
        <div style="flex:1">
          <h3>${escapeHtml(a.name)}</h3>
          <p>${escapeHtml(a.description)}</p>
        </div>
      </div>
    `);
    $grid.append($card);
    if (selectable) {
      $card.on('click', function(){
        const index = +$(this).attr('data-idx');
        const slotIndex = $(containerSelector).data('slotTarget');
        if (typeof slotIndex === 'number') {
          assignArtifactToSlot(slotIndex, artifacts[index]);
          hideModal();
        }
      });
    } else {
      // $card.on('click', function(){
      //   showModal(renderDetailHtml(a.name, a.description, a.image_url));
      // });
    }
  });
  $ct.append($grid);
}

/* ---------- SLOT management ---------- */
function assignArtifactToSlot(slotIndex, artifact) {
  const $slot = $(`.slot[data-slot-index="${slotIndex}"]`);
  $slot.data('artifact', artifact);
  // update visuals
  const $imgWrap = $slot.find('[data-slot-img]');
  $imgWrap.html(artifact.image_url ? `<img src="${artifact.image_url}" alt="${escapeHtml(artifact.name)}">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#888;background:#f2f4f6">${artifact.name.charAt(0)}</div>`);
  $slot.find('[data-slot-title]').text(artifact.name);
  $slot.find('[data-slot-desc]').text(artifact.description);
  $slot.find('[data-remove]').show();
//   $slot.find('.slot-open').text('Zmień').removeClass('ghost');
}

function clearSlot(slotIndex) {
  const $slot = $(`.slot[data-slot-index="${slotIndex}"]`);
  $slot.removeData('artifact');
  $slot.find('[data-slot-img]').text('+');
  $slot.find('[data-slot-title]').text('Wybierz artefakt');
  $slot.find('[data-slot-desc]').text('Kliknij + aby wybrać legendarne miejsce lub artefakt.');
  $slot.find('[data-remove]').hide();
  $slot.find('.slot-open').text('Wybierz').addClass('ghost');
}

/* ---------- Modal helpers ---------- */
function showModal(htmlContent, options = {}) {
  $('#modalInner').html(htmlContent);
  $('#modalBackdrop').fadeIn(150).css('display','flex');
  // if caller passed a callback for after open, run it
  if (options.afterOpen) options.afterOpen();
}
function hideModal() { $('#modalBackdrop').fadeOut(120, function(){ $('#modalInner').empty(); }); }

function renderDetailHtml(title, description, image_url) {
  return `
    <h2>${escapeHtml(title)}</h2>
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="width:140px;height:140px;border-radius:8px;overflow:hidden;background:#f2f4f6">${ image_url ? `<img src="${image_url}" alt="${escapeHtml(title)}" style="width:100%;height:100%;object-fit:cover">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#bbb">${title.charAt(0)}</div>` }</div>
      <div style="flex:1"><p style="white-space:normal;color:#333">${escapeHtml(description)}</p></div>
    </div>
  `;
}

/* ---------- small utility ---------- */
function escapeHtml(unsafe) {
  return unsafe;

  if (!unsafe && unsafe !== '') return '';
  return String(unsafe).replace(/[&<>"'`=\/]/g, function(s) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"})[s];
  });
}

/* ---------- events binding ---------- */
$(function(){
  // initial render
  renderRaces();
  renderAbilities();

  // init slots (clear)
  for (let i=0;i<3;i++) clearSlot(i);

  // slot open handlers
  $('.slot-open').on('click', function(){
    const $slot = $(this).closest('.slot');
    const idx = +$slot.attr('data-slot-index');
    // show modal with full artifact list and set target slot
    $('#modalInner').data('slotTarget', idx);
    renderArtifactGrid('#modalInner', true);
    $('#modalBackdrop').fadeIn(150).css('display','flex');
  });
  // also clicking the left image area
  $('[data-slot-img]').on('click', function(){
    const $slot = $(this).closest('.slot');
    const idx = +$slot.attr('data-slot-index');
    $('#modalInner').data('slotTarget', idx);
    renderArtifactGrid('#modalInner', true);
    $('#modalBackdrop').fadeIn(150).css('display','flex');
  });

  // remove handlers
  $('[data-remove]').on('click', function(){
    const $slot = $(this).closest('.slot');
    const idx = +$slot.attr('data-slot-index');
    clearSlot(idx);
  });

  // show all artifacts button
  $('#showAllArtifacts').on('click', function(){
    // show artifact modal in non-select mode: clicking shows details only
    renderArtifactGrid('#modalInner', false);
    $('#modalBackdrop').fadeIn(150).css('display','flex');
  });

  // close modal
  $('#modalClose, #modalBackdrop').on('click', function(e){
    // if click on backdrop (not the modal content) OR on close icon, hide modal
    if (e.target.id === 'modalBackdrop' || e.target.id === 'modalClose' || $(e.target).hasClass('close')) {
      hideModal();
    }
  });

  // prevent clicking inside modal content from closing (stop propagation)
  $(document).on('click', '.modal', function(e){ e.stopPropagation(); });

  // allow also clicking on the race image specifically to open details (already handled via .race click)
  // ensure category list scrollbars are visible (native) — no extra code needed

  // Accessibility: allow ESC to close modal
  $(document).on('keydown', function(e){
    if (e.key === "Escape") hideModal();
  });

  // Make sure category-list scrollable area shows pointer events for inner elements
  // (Nothing else required.)
});


