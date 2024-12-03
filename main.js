function berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag) {
    let now = new Date();
    let geboorteDatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag);
    let verschilInMilliseconden = now - geboorteDatum;
    let leeftijdInJaren = verschilInMilliseconden / (1000 * 60 * 60 * 24 * 365.25);
    return leeftijdInJaren.toFixed(2);
}

// Hardcoded testwaarden
let geboorteJaar = 2008;
let geboorteMaand = 4;
let geboorteDag = 15;

let leeftijd = berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag);
console.log(`Je bent ${leeftijd} jaar oud.`);
