Knygų rezervacijos aplikacija PHP programuotojo kvalifikacijos egzaminui.

Aplikacija kurta naudojant LARAVEL, kuris yra PHP programavimo kalbos karkasas, taikant objektinio programavimo principus. Vartotojo sąsajai kurti naudotas REACT, JavaScript kalbos karkasas. Duomenų bazei naudojamas MySQL.

***

Aplikacijos funkcijos yra prieinamos tik prisijungusiam (autentifikuotam) vartotojui, kuris identifikuojamas pagal vartotojo vardą, slaptažodį ir priskirtą rolę. Vartotojai skirstomi į dvi roles: 
- vartotojas:
    - gali prisijungti;
    - gali matyti knygų kategorijas;
    - gali matyti knygų sąrašą;
    - gali naudotis knygų paieška;
    - gali matyti detalią knygų informaciją;
    - gali rezervuoti laisvas knygas;
    - gali pažymėti knygą, kaip norimą skaityti;
- administratorius:
    - gali prisijungti;
    - gali matyti vartotojų sąrašą;
    - gali sukurti vartotoją;
    - gali redaguoti vartotoją;
    - gali trinti vartotoją;
    - gali matyti knygų sąrašą;
    - gali sukurti knygą;
    - gali redaguoti knygą;
    - gali trinti knygą;
    - gali matyti knygų kategorijas;
    - gali sukurti knygų kategoriją;
    - gali redaguoti knygų kategoriją;
    - gali trinti knygų kategoriją;

***

Duomenų bazės struktūra:

Lentelės:
- Knygos:
    - ISBN: INTEGER (primary key)
    - Pavadinimas: VARCHAR(255)
    - Aprašymas: TEXT
    - Kategorija: VARCHAR(255) (foreign key --> Kategorijos)
    - Nuoroda į paveikslėlį: VARCHAR(255)
    - Puslapių skaičius: INTEGER(4)
    - Kiekis: INTEGER(2)
- Kategorijos:
    - ID: INTEGER (primary key)
    - Kategorijos pavadinimas: VARCHAR(255)
- Vartotojai:
    - ID: INTEGER (primary key)
    - El. paštas: VARCHAR(255)
    - Slaptažodis: VARCHAR(255)
- Rolės:
    - ID: INTEGER (primary key)
    - Rolės pavadinimas: VARCHAR(255)
- Vartotojų rolės:
    - Vartotojo ID: INTEGER (foreign key --> Vartotojai)
    - Rolės ID: INTEGER (foreign key --> Rolės)
- Statusas:
    - ID: INTEGER (primary key)
    - Statuso pavadinimas: VARCHAR(255)
- Rezervacijos:
    - ID: INTEGER (primary key)
    - Vartotojo ID: INTEGER (foreign key --> Vartotojai)
    - Knygos ISBN: INTEGER (foreign key --> Knygos)

***

Kaip pasileisti?

- klonuokite aplikaciją iš GitHub repositorijos naudodami GitHub Desktop programą;
- susikurkite lokalią repositoriją savo įrenginyje;
- GitHub Desktop pasirinkite "Atidaryti aplikaciją su Visual Studio Code";
- komandinėje eilutėje pasileiskite komandą "npm run watch";
- komandinėje eilutėje pasileiskite komandą "php artisan serve";
- sveikinu, jūs pasileidote knygų rezervacijos aplikaciją!