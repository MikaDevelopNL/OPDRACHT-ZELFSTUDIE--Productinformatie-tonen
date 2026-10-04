# Productinformatie tonen

Een kleine interactieve productpagina voor een fietsenwinkel. De pagina toont twee fietsen en laat de gebruiker met een knop de specificaties van een fiets bekijken.

## Functionaliteit

* Twee fietsproducten worden weergegeven.
* Elk product heeft een titel, omschrijving en prijs.
* Met de knop "Meer informatie..." worden de specificaties van de betreffende fiets getoond.
* De specificaties kunnen weer verborgen worden door opnieuw op de knop te klikken.
* Wanneer de specificaties van één fiets worden geopend, worden de specificaties van de andere fiets automatisch gesloten.

## Gebruikte technieken

### HTML

* Semantische HTML-structuur
* Productkaarten
* Buttons
* Productinformatie en specificaties

### CSS

* CSS Grid
* Flexbox
* Gradients
* Responsive basislayout
* Klassen gebruiken om informatie te tonen en te verbergen

### JavaScript

* `querySelectorAll()`
* `forEach()`
* `addEventListener()`
* `parentElement`
* `querySelector()`
* `classList.toggle()`
* `classList.add()`
* `classList.remove()`
* `if`-statement

## Wat ik heb geleerd

Tijdens deze opdracht heb ik geoefend met het koppelen van een klik op een specifieke button aan de juiste productinformatie.

Ik heb geleerd hoe ik vanuit een button via de DOM naar het bijbehorende product kan gaan en vervolgens de juiste `.extra-info` kan selecteren.

Daarnaast heb ik geoefend met het openen en sluiten van elementen met CSS-klassen en JavaScript.

## Projectstructuur

```text
Productinformatie tonen/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Git

Tijdens het project is Git gebruikt om de voortgang bij te houden.

Belangrijke commando's:

```bash
git status
git add .
git commit -m "Beschrijving van wijziging"
git push
```

`git status` gebruik ik om te controleren wat er gewijzigd is.

Met `git add .` voeg ik de wijzigingen toe aan de volgende commit.

Met `git commit -m` sla ik een logisch afgeronde wijziging op in de Git-geschiedenis.

Met `git push` stuur ik de commits naar GitHub.
