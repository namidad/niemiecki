(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(2),d=a.n(r),i=(a(15),a(3)),s=a(4),l=a(7),u=a(5),c=a(8),k=(a(16),a(6)),m=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={slowka:k,index:0,div1:{},div2:{},div3:{},correct:0,incorrect:0},a.handleClick=function(t){if(1===t){var e=a.state.slowka;"der"===a.state.slowka[a.state.index].rodzajnik?(e[a.state.index].amount--,0===e[a.state.index].amount&&e.splice(a.state.index,1),a.setState({slowka:e,correct:a.state.correct+1,div1:{background:"green",pointerEvents:"none"},div2:{pointerEvents:"none"},div3:{pointerEvents:"none"}})):"die"===a.state.slowka[a.state.index].rodzajnik?(e[a.state.index].amount++,a.setState({div1:{background:"red",pointerEvents:"none"},div2:{background:"green",pointerEvents:"none"},div3:{pointerEvents:"none"},incorrect:a.state.incorrect+1})):(e[a.state.index].amount++,a.setState({div1:{background:"red",pointerEvents:"none"},div2:{pointerEvents:"none"},div3:{background:"green",pointerEvents:"none"},incorrect:a.state.incorrect+1}))}else if(2===t){var n=a.state.slowka;"die"===a.state.slowka[a.state.index].rodzajnik?(n[a.state.index].amount--,0===n[a.state.index].amount&&n.splice(a.state.index,1),a.setState({slowka:n,correct:a.state.correct+1,div2:{background:"green",pointerEvents:"none"},div1:{pointerEvents:"none"},div3:{pointerEvents:"none"}})):"der"===a.state.slowka[a.state.index].rodzajnik?(n[a.state.index].amount++,a.setState({div1:{background:"green",pointerEvents:"none"},div2:{background:"red",pointerEvents:"none"},div3:{pointerEvents:"none"},incorrect:a.state.incorrect+1})):(n[a.state.index].amount++,a.setState({div1:{pointerEvents:"none"},div3:{background:"green",pointerEvents:"none"},div2:{background:"red",pointerEvents:"none"},incorrect:a.state.incorrect+1}))}else{var o=a.state.slowka;"das"===a.state.slowka[a.state.index].rodzajnik?(o[a.state.index].amount--,0===o[a.state.index].amount&&o.splice(a.state.index,1),a.setState({slowka:o,correct:a.state.correct+1,div3:{background:"green",pointerEvents:"none"},div2:{pointerEvents:"none"},div1:{pointerEvents:"none"}})):"der"===a.state.slowka[a.state.index].rodzajnik?(o[a.state.index].amount++,a.setState({div1:{background:"green",pointerEvents:"none"},div2:{pointerEvents:"none"},div3:{background:"red",pointerEvents:"none"},incorrect:a.state.incorrect+1})):(o[a.state.index].amount++,a.setState({div1:{pointerEvents:"none"},div2:{background:"green",pointerEvents:"none"},div3:{background:"red",pointerEvents:"none"},incorrect:a.state.incorrect+1}))}},a.handleChange=function(){var t=Math.floor(Math.random()*a.state.slowka.length);a.setState({index:t,div1:{background:"white",pointerEvents:"auto"},div2:{background:"white",pointerEvents:"auto"},div3:{background:"white",pointerEvents:"auto"}})},a}return Object(c.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.state.slowka),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"testContainer"},o.a.createElement("h1",{className:"wordBox"},this.state.slowka[this.state.index].translated),o.a.createElement("div",{className:"answerBox"},o.a.createElement("div",{style:this.state.div1,onClick:function(e){return t.handleClick(1)}},"der"),o.a.createElement("div",{style:this.state.div2,onClick:function(e){return t.handleClick(2)}},"die"),o.a.createElement("div",{style:this.state.div3,onClick:function(e){return t.handleClick(3)}},"das")),o.a.createElement("div",null,o.a.createElement("div",{onClick:this.handleChange,className:"nextWord"},"Nastepne s\u0142\xf3wko"),o.a.createElement("div",{className:"stats"},o.a.createElement("div",null,"Zosta\u0142o s\u0142\xf3wek: ",this.state.slowka.length),o.a.createElement("div",null,"Poprawne odpowiedzi: ",this.state.correct),o.a.createElement("div",null,"Bledne odpowiedzi: ",this.state.incorrect)))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t){t.exports=[{word:"litera",rodzajnik:"der",translated:"Buchstabe",amount:2},{word:"spotkanie",rodzajnik:"das",translated:"Wiedersehen",amount:2},{word:"maszyna",rodzajnik:"der",translated:"Automat",amount:2},{word:"dziecko",rodzajnik:"das",translated:"Baby",amount:2},{word:"banan",rodzajnik:"die",translated:"Banane",amount:2},{word:"komputer",rodzajnik:"der",translated:"Computer",amount:2},{word:"film",rodzajnik:"der",translated:"Film",amount:2},{word:"zdj\u0119cie",rodzajnik:"das",translated:"Foto",amount:2},{word:"bankomat",rodzajnik:"der",translated:"Geldautomat",amount:2},{word:"gitara",rodzajnik:"die",translated:"Gitarre",amount:2},{word:"hotel",rodzajnik:"das",translated:"Hotel",amount:2},{word:"internet",rodzajnik:"das",translated:"Internet",amount:2},{word:"kawa",rodzajnik:"der",translated:"Kaffee",amount:2},{word:"muzeum",rodzajnik:"das",translated:"Museum",amount:2},{word:"poczta",rodzajnik:"die",translated:"Post",amount:2},{word:"radio",rodzajnik:"das",translated:"Radio",amount:2},{word:"sms",rodzajnik:"die",translated:"SMS",amount:2},{word:"taxi",rodzajnik:"das",translated:"Taxi",amount:2},{word:"telefon",rodzajnik:"das",translated:"Telefon",amount:2},{word:"uniwersytet",rodzajnik:"die",translated:"Universit\xe4t",amount:2},{word:"s\u0142owo",rodzajnik:"das",translated:"Wort",amount:2},{word:"przyk\u0142ad",rodzajnik:"das",translated:"Beispiel",amount:2},{word:"przeprosiny",rodzajnik:"die",translated:"Entschuldingung",amount:2},{word:"nazwisko",rodzajnik:"der",translated:"Familienname",amount:2},{word:"kobieta",rodzajnik:"die",translated:"Frau",amount:2},{word:"pan",rodzajnik:"der",translated:"Herr",amount:2},{word:"imi\u0119",rodzajnik:"der",translated:"Name",amount:2},{word:"telefon",rodzajnik:"das",translated:"Handy",amount:2},{word:"kawiarnia",rodzajnik:"das",translated:"Caf\xe9",amount:2},{word:"zegar",rodzajnik:"die",translated:"Uhr",amount:2},{word:"pytanie",rodzajnik:"die",translated:"Frage",amount:2},{word:"obraz",rodzajnik:"das",translated:"Bild",amount:2},{word:"tabela",rodzajnik:"die",translated:"Tabelle",amount:2},{word:"o\u0142\xf3wek",rodzajnik:"der",translated:"Bleistift",amount:2},{word:"ksi\u0105\u017cka",rodzajnik:"das",translated:"Buch",amount:2},{word:"CD",rodzajnik:"die",translated:"CD",amount:2},{word:"okno",rodzajnik:"das",translated:"Fenster",amount:2},{word:"zeszyt",rodzajnik:"das",translated:"Heft",amount:2},{word:"d\u0142ugopis",rodzajnik:"der",translated:"Kugelschreiber",amount:2},{word:"lampa",rodzajnik:"die",translated:"Lampe",amount:2},{word:"numer",rodzajnik:"die",translated:"Nummer",amount:2},{word:"papier",rodzajnik:"das",translated:"Papier",amount:2},{word:"krzes\u0142o",rodzajnik:"der",translated:"Stuhl",amount:2},{word:"st\xf3\u0142",rodzajnik:"der",translated:"Tish",amount:2},{word:"auto",rodzajnik:"das",translated:"Auto",amount:2},{word:"bus",rodzajnik:"der",translated:"Bus",amount:2},{word:"hamburger",rodzajnik:"der",translated:"Hamburger",amount:2},{word:"pizza",rodzajnik:"die",translated:"Pizza",amount:2},{word:"policja",rodzajnik:"die",translated:"Polizei",amount:2},{word:"zdanie",rodzajnik:"der",translated:"S\xe4tz",amount:2},{word:"wc",rodzajnik:"das",translated:"WC",amount:2}]},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.fe1a8290.chunk.js.map