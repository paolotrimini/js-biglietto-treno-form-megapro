// console.log('hello');
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;


generaBtn.addEventListener('click', function(){
    // console.log('ho cliccato sul pulsante genera');
    var name = document.getElementById('name').value;
    // console.log(name);
    // console.log(document.getElementById('name'));

    var distanza = parseInt(document.getElementById('distance').value);
    var eta = document.getElementById('eta').value;
    //console.log(name, distanza, eta);

    if (name !== '' && distanza > 0 && eta !== ''){
        costoTotale = costo * distanza;
        // blocco else if per sconto
        console.log(costoTotale);
        if (eta == 1 ){     // minorenne
            // console.log('minorenne', eta);

            var sconto = costoTotale * 0.2;
            costoTotale = costoTotale - sconto;
            document.getElementById('sconto').innerHTML = 'Sconto <br> minorenne';

        } else if (eta == 3){ // over 65
            // console.log('over65', eta);

            var sconto = costoTotale * 0.4;
            costoTotale = costoTotale - sconto;
            document.getElementById('sconto').innerHTML = 'Sconto <br> Over 65';
        }

        document.getElementById('costo-totale').innerHTML = costoTotale + ' &#8364;';

        var cp = Math.floor(Math.random() * (100000-90000)) + 90000;
        document.getElementById('codCp').innerHTML = cp;

        var numCarrozza = Math.floor(Math.random() * 30 ) + 1; // num.carrozze 1 - 30
        document.getElementById('carrozza').innerHTML = numCarrozza;

        document.getElementById('nominativo').innerHTML = name;

    } else{ // altre fasce età
        console.log('nah');
    }
});

annullaBtn.addEventListener('click', function(){
    //console.log('ho cliccato sul pulsante annulla')

    document.getElementById('nominativo').innerHTML = '';
    document.getElementById('sconto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codCp').innerHTML = '';
    document.getElementById('costo-totale').innerHTML = '';


});