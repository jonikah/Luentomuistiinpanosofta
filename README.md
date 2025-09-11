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





<img width="976" height="1045" alt="image" src="https://github.com/user-attachments/assets/665833f2-e22e-4090-b713-c968ee223778" />


<img width="976" height="1046" alt="image" src="https://github.com/user-attachments/assets/280b263f-7a2b-41cf-afbf-3d25e5ae0f46" />


<img width="979" height="1047" alt="image" src="https://github.com/user-attachments/assets/7c5ddbae-983b-4517-aea6-04aeec7bd537" />


<img width="974" height="1046" alt="image" src="https://github.com/user-attachments/assets/8cfe2390-a39d-457c-92b8-c10e43c8ee0d" />



