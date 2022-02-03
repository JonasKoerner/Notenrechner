let n1,n2,n3,n4,n5; // Speicher für Notenpunkte der einzelnen Felder
let summe = 0;
let anzahlNoten = 0;
let ergebnis;
/*
    function tfAuslesen liest Textfelder aus und berechnet im Anschluss den Durchschnitt nachdem die Eingaben auf
    geprüft wurden
 */
function tfAuslesen () {
    n1 = parseInt(document.getElementById("tfNote1").value); // Auslesen Notenfeld 1 und Umwandlung in Zahl
    n2 = parseInt(document.getElementById("tfNote2").value); // siehe oben fpr Notenfeld2
    n3 = parseInt(document.getElementById("tfNote3").value);
    n4 = parseInt(document.getElementById("tfNote4").value);
    n5 = parseInt(document.getElementById("tfNote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" +n5); // Ausgabe auf der Konsole der eingelesenen Werte

    // Es werden die einzelnen Eingaben auf Plausibilität geprüft
    punktePruefen(n1);
    punktePruefen(n2);
    punktePruefen(n3);
    punktePruefen(n4);
    punktePruefen(n5);

    ergebnis = summe / anzahlNoten; //Rechenoperation um das Ergebnis zu erhalten

    document.getElementById("ausgabe").innerHTML = ergebnis; // gibt ein Element-Objekt zurück,
    // das das Element darstellt, dessen id-Eigenschaft der angegebenen Zeichenfolge entspricht

    if(ergebnis <= 5)
    {
        document.getElementById("ausgabe").style.color = "crimson"
    }
    if(ergebnis > 5 && ergebnis < 12)
    {
        document.getElementById("ausgabe").style.color = "orange"
    }

    if(ergebnis >= 12)
    {
        document.getElementById("ausgabe").style.color = "green"
    }

    //andere Variante

    if(ergebnis <= 5)
    {
        document.getElementById("ausgabe").style.color = "crimson"
    }else {
        if (ergebnis <= 12){
            document.getElementById("ausgabe").style.color = "orange"
        } else {
            document.getElementById("ausgabe").style.color = "green"
        }
    }
}

function punktePruefen(punkte) {
    if(isNaN(punkte))
    {
        console.log(punkte + " ist keine Zahl!")
    }else if(punkte >= 0 && punkte <= 15){
        summe = summe + punkte;
        anzahlNoten = anzahlNoten + 1;
    }else{
        console.log(punkte + " Sind keine gültigen Notenpunkte!")
    }
}