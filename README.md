# Luentomuistiinpanosovellus

## Kuvaus

Luentomuistiinpanosovellus on moderni React-sovellus, jonka avulla käyttäjä voi hallita muistiinpanojaan opintojaksojen luennoilta.  
Jokainen muistiinpano liitetään tiettyyn opintojaksoon, ja käyttäjä voi helposti:

- Lisätä uusia opintojaksoja
- Kirjoittaa muistiinpanoja valittuun opintojaksoon
- Selailla ja hakea kaikkia muistiinpanoja tai valittujen kurssien muistiinpanoja

Kaikki tallennukset tapahtuvat paikallisesti, ja sovellus hakee käynnistyessään oletuskurssit ja muistiinpanot.

---

## Sovelluksen rakenne

- **App.jsx** – Sovelluksen pääkomponentti, määrittelee reitit ja Layoutin
- **Layout.jsx / Layout komponentti App.jsx:ssa** – Ylläpitää headeria, footeria ja Outlet-alueen reiteille
- **Header.jsx** – Fixed header, sisältää sovelluksen nimen ja navigaation
- **Footer.jsx** – Fixed footer, sisältää copyright-tekstin
- **Home.jsx** – Etusivu, esittelee sovelluksen ja tarjoaa navigointipainikkeet
- **AddCourse.jsx** – Lomake uuden kurssin lisäämiseen
- **AddNoteToCourse.jsx** – Lomake uuden muistiinpanon lisäämiseen valittuun kurssiin
- **ListNotes.jsx** – Listaa muistiinpanot; mahdollisuus suodattaa kurssin mukaan
- **CourseRow.jsx** – Yksittäinen muistiinpano listalla, sisältää poistonapin
- **Note.jsx** – Yksittäinen muistiinpano lomakkeessa lisäyksen jälkeen
- **stores/useDataStore.js** – Zustand-pohjainen store kaikkien kurssien ja muistiinpanojen hallintaan

---

## Teknologia

- React + React Router
- TailwindCSS (tyylittely ja responsiivisuus)
- Zustand (state management)
- JavaScript / JSX

---

## Asennus ja käynnistys kehitysversiona

1. **Asenna projektin riippuvuudet**

```bash
npm install
```

2. **Käynnistä sovellus kehitystilassa**

```bash
npm run dev
```

3. **Avaa selaimessa:**

```bash
http://localhost:5173
```
