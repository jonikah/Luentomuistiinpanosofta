# Luentomuistiinpanosovellus

## Kuvaus

Luentomuistiinpanosovellus on moderni React-sovellus, jonka avulla käyttäjä voi hallita muistiinpanojaan opintojaksojen luennoilta.  
Jokainen muistiinpano liitetään tiettyyn opintojaksoon, ja käyttäjä voi helposti:

- Lisätä uusia opintojaksoja
- Kirjoittaa muistiinpanoja valittuun opintojaksoon
- Selailla ja hakea kaikkia muistiinpanoja tai valittujen kurssien muistiinpanoja

Kaikki tallennukset tapahtuvat paikallisesti Zustand-storeen, mutta sovellus hakee käynnistyessään oletuskurssit ja muistiinpanot JSON-muodossa kahdesta erillisestä API-endpointista:
- [Kurssit](https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses)
- [Muistiinpanot](https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes)
---

## Sovelluksen rakenne

- **App.jsx** – Sovelluksen pääkomponentti, määrittelee reitit ja Layoutin
- **Layout.jsx / Layout komponentti App.jsx:ssa** – Ylläpitää headeria, footeria ja Outlet-alueen reiteille
- **Header.jsx** – Fixed header, sisältää sovelluksen nimen ja navigaation
- **Footer.jsx** – Fixed footer, sisältää copyright-tekstin
- **Home.jsx** – Etusivu, esittelee sovelluksen ja tarjoaa navigointipainikkeet
- **AddCourse.jsx** – Lomake uuden kurssin lisäämiseen
- **AddNoteToCourse.jsx** – Lomake uuden muistiinpanon lisäämiseen valittuun kurssiin
- **ListNotes.jsx** – Listaa muistiinpanot; mahdollisuus suodattaa kurssin mukaan sekä hakea tekstisisällön perusteella.
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

1. **Kloonaa projekti GitHubista**
```bash
git clone https://github.com/jonikah/Luentomuistiinpanosofta.git
```

2. **Siirry projektihakemistoon**
```bash
cd Luentomuistiinpanosofta
```

3. **Asenna riippuvuudet**
```bash
npm install
```
4. **Käynnistä sovellus kehitystilassa**
```bash
npm run dev
```

5. **Avaa selaimessa**
```bash
http://localhost:5173
```





<img width="1466" height="1349" alt="image" src="https://github.com/user-attachments/assets/a7202a63-3239-4f78-88c7-d159b27ecfd2" />




<img width="1466" height="1352" alt="image" src="https://github.com/user-attachments/assets/af4ed71e-d26b-4ff0-a8b6-cdf1b0af9eee" />



<img width="1464" height="1339" alt="image" src="https://github.com/user-attachments/assets/8cb58856-13a6-453f-8ca7-8806bb439d7a" />



<img width="1466" height="1357" alt="image" src="https://github.com/user-attachments/assets/825b2ea2-60d2-49f1-a6aa-9c05cf397e36" />




