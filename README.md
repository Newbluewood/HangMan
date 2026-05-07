# Vesala (Hangman)

Jednostavna **igra vešanja** u pregledaču: dve skrivene reči istovremeno, zajednički životi i tastatura sa slovima srpske latinice (uključujući **Lj**, **Nj**, **Č**, **Ć**, **Dž**).

## Tehnologije

- HTML5, CSS (flex, prilagodljivi raspored)
- JavaScript (ES moduli) — bez npm-a, bundlera ili frejmvorka

## Struktura projekta

| Putanja | Opis |
|--------|------|
| `index.html` | Stranica, raspored (vešala, životi, polja za reči, tastatura) |
| `assets/style.css` | Stilovi i pomoćne klase (širine/visine, kontejneri) |
| `assets/images/` | Grafika vešala, policajac, konfete (GIF) |
| `src/Veshala.js` | Klasa `Vesala` — logika reči, pogađanja, pobeda |
| `src/index.js` | Povezivanje sa DOM-om, događaji, dva paralelna „kruga“ igre |

## Kako pokrenuti

ES moduli zahtevaju **HTTP server** (otvaranje `index.html` direktno iz fajl sistema često ne radi zbog CORS-a).

Primeri:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx --yes serve .
```

Zatim u pregledaču otvori `http://localhost:8080` (ili port koji alat ispiše).

## Kako igrati

1. Izaberi slovo na tastaturi (biće označeno kao izabrano).
2. Pritisni **Try** da potvrdiš pogađanje — slovo se primenjuje na **obe** reči.
3. Pogrešno slovo smanjuje zajedničke živote (polazno 10).
4. Dugme **2** (klasa `another`) sakriva/prikazuje drugu reč.
5. Dugme **Try** (bez slova) može da animira/skloni figuru policajca (vizuelni dodatak).

Trenutne reči u kodu su u `src/index.js` kao `recA` i `recB` (podrazumevano: `METAFORA`, `STRUKTURALNO`).

## Poznato / napomene za razvoj

- U `src/Veshala.js` na kraju fajla ostaje **testni primer** koji se izvršava pri učitavanju modula (`console.log` i instanca za `BABAROGA`) — za produkciju ima smisla ukloniti ga ili izdvojiti u poseban test.
- U `index.html` nekoliko kontejnera deli isti `id` (`container2-child3-g1-g2`), što nije validan HTML — bolje jedinstveni `id` ili samo klase.
- Provera pobede u `index.js` trenutno prikazuje konfete kada je rešena **prva** reč (`igra1.reseno()`); druga reč može ostati van logike pobede ako želiš „pobeda tek kad su obe rešiene“.

## Licencija

Projekat nema `LICENSE`; dodaj po želji.
