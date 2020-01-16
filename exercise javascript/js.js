class personne {
    constructor(a,b,c,d,e){
    this.fname=a;
    this.lname=b;
    this.date=c;
    this.place=d;
    this.tel=e;
    }
    }
    
    function ajouter(){
    
        var pers= new personne (
            document.getElementById("fname").value,
        document.getElementById("lname").value,
        document.getElementById("date").value,
        document.getElementById("place").value,
        document.getElementById("tel").value);
    
    
    // Création de la ligne
    var TR = document.createElement ("tr");
    
    // Création de la première cellule
    var TD1  = document.createElement ("td");
    var TXT1 = document.createTextNode (pers.fname);
    TD1.appendChild (TXT1);
    
    // Création de la deuxième cellule
    var TD2  = document.createElement ("td");
    var TXT2 = document.createTextNode (pers.lname);
    TD2.appendChild (TXT2);
    // Création de la 3eme cellule
    var TD3  = document.createElement ("td");
    var TXT3 = document.createTextNode (pers.date);
    TD3.appendChild (TXT3);
    // Création de la 4eme cellule
    var TD4  = document.createElement ("td");
    var TXT4 = document.createTextNode (pers.place);
    TD4.appendChild (TXT4);
    // Création de la 5 eme cellule
    var TD5  = document.createElement ("td");
    var TXT5 = document.createTextNode (pers.tel);
    TD5.appendChild (TXT5);
    
    
    // On assemble les cellules a la ligne
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR.appendChild(TD3);
    TR.appendChild(TD4);
    TR.appendChild(TD5);
    
    
    // On assemble la ligne au tableau
    document.getElementById ('montableau').appendChild (TR);
    
    }

