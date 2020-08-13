(function(){
    const quotes = [
        {
            quote: "Man patīk tie cilvēki, kuriem nepatīk tas, kas man nepatīk.",
            author: "Pēteris Kļava"
        },
        {
            quote: "Labākais veids, kā uzzināt, vai cilvēkam vari uzticēties, ir uzticēties.",
            author: "Ernests Hemingvejs"
        },
        {
            quote: "Dzīves jēga ir atvērti un klātesoši izdzīvot tieši tos notikumus, kurus liktenis man liek priekšā.",
            author: "Juris Rubenis"
        },
        {
            quote: "Nekas nav skaistāks kā uzdrīkstēties kļūt kādam par mīlestību.",
            author: "Andrejs Mediņš"
        },
        {
            quote: "Mīlestība ir, kad mīl nevis tāpēc, ka tu esi labs, bet tāpēc, ka tu esi. Vienkārši esi.",
            author: "Indra Krūmiņa"
        },
        {
            quote: "Vēlme būt atšķirīgam ir ļoti parasta vēlme. Atbrīvoties un būt parastam – tas patiesībā ir neparasti.",
            author: "Ošo"
        },
        {
            quote: "Dzīvot vajag savlaicīgi. Nomirt mēs visi paspēsim, bet vai paspēsim dzīvot?",
            author: "Līga Reitere"
        },
        {
            quote: "No jums aiziet tikai tas, kas traucē un aizkavē jūsu pašattīstību. Netverieties pie vecā.",
            author: "Valērijs Siņeļņikovs"
        },
        {
            quote: "Radīt nozīmē izgudrot, eksperimentēt, augt, riskēt, pārkāpt noteikumus, pieļaut kļūdas un priecāties.",
            author: "Mērija Lū Kuka"
        },
        {
            quote: "Cilvēka garīgumu nenosaka tas, kam viņš tic. To nosaka mīlestības kvalitāte.",
            author: "Deivids Maginlijs"
        },
        {
            quote: "Laiks ir visdārgākais pasaulē, jo mēs to neradām, tikai patērējam vai piepildām.",
            author: "Rihards Vālands"
        },
        {
            quote: "Grūti uzkundzēties tiem, kas spēj eksistēt pieticīgi, pašpietiekami un harmonijā ar savām tradīcijām.",
            author: "Kaspars Kļaviņš"
        }
    ];

    const btn = document.getElementById('generate-btn');

    btn.addEventListener('click', function(){
        let random = Math.floor(Math.random()*quotes.length);

        document.getElementById('quote').textContent = quotes[random].quote;
        document.getElementById('author').textContent = quotes[random].author;

    });
})();