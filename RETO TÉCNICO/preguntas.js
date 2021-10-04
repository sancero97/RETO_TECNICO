let preguntas = [ 
    {
        "categoria": "BIOLOGÍA",
        "pregunta": "¿Dónde realizan las plantas la fotosíntesis?",
        "respuesta": "En las hojas",
        "incorrecta1": "En la raíz",
        "incorrecta2": "En el tallo",
        "incorrecta3": "En el aire"
    },
    {
        "categoria": "BIOLOGÍA",
        "pregunta": "¿Qué músculo impulsa la sangre por todo nuestro cuerpo?",
        "respuesta": "El corazón",
        "incorrecta1": "El cerebro",
        "incorrecta2": "La lengua",
        "incorrecta3": "Los pulmones"
    },
    {
        "categoria": "BIOLOGÍA",
        "pregunta": "¿Qué necesitan las células para dividirse?",
        "respuesta": " Energía",
        "incorrecta1": "Sangre",
        "incorrecta2": "Nada",
        "incorrecta3": "Otra célula"
    },
    {
        "categoria": "BIOLOGÍA",
        "pregunta": "¿Cuántas fases tiene la fotosíntesis?",
        "respuesta": "Luminosa y oscura",
        "incorrecta1": "Primaria y secundaria",
        "incorrecta2": "No tiene fases",
        "incorrecta3": "Activa y pasiva"
    },
    {
        "categoria": "BIOLOGÍA",
        "pregunta": "Las células reproductoras se dividen por...",
        "respuesta": "Meiosis",
        "incorrecta1": "Metamorfosis",
        "incorrecta2": "Mitosis",
        "incorrecta3": "Otra célula"
    },
    {
        "categoria": "CINE",
        "pregunta": "¿Cuál es la película que más Oscars ha ganado en la historia?",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Titanic",
        "incorrecta2": "Ben Hurs",
        "incorrecta3": "El señor de los anillos: el retorno del Rey"
    },
    {
        "categoria": "CINE",
        "pregunta": "¿Cuántas veces Arnold Schwarzenegger ha interpretado al Terminator T800?",
        "respuesta": "6",
        "incorrecta1": "5",
        "incorrecta2": "4",
        "incorrecta3": "7"
    },
    {
        "categoria": "CINE",
        "pregunta": "En la película Mujer bonita, el galán es Richard Gere. ¿Qué otro actor fue considerado para este papel?",
        "respuesta": "A y B",
        "incorrecta1": "Al Pacino",
        "incorrecta2": "Daniel Day Lewys",
        "incorrecta3": "Denis Quaid"
    },
    {
        "categoria": "CINE",
        "pregunta": "¿Cuál fue la primera directora en ganar un Oscar de la Academia?",
        "respuesta": "Kathryn Bigelow",
        "incorrecta1": "Ida Lupino",
        "incorrecta2": "Sophia Coppola",
        "incorrecta3": "Lina Wertmüller"
    },
    {
        "categoria": "CINE",
        "pregunta": "¿En cuál de estas películas de Martin Scorsese no participa Joe Pesci?",
        "respuesta": "Los infiltrados",
        "incorrecta1": "Casino",
        "incorrecta2": "El Irlandés",
        "incorrecta3": "Buenos muchachos"
    },
    {
        "categoria": "MATEMÁTICAS",
        "pregunta": "¿Qué es un polinomio?",
        "respuesta": "CarEs la suma-resta de un conjunto de monomios",
        "incorrecta1": "Una ecuación canónica",
        "incorrecta2": "Una ecuación",
        "incorrecta3": "Una ecuación irracional"
    },
    {
        "categoria": "MATEMÁTICAS",
        "pregunta": "¿Qué es un Dominio?",
        "respuesta": "Conjunto de valores de la variable independiente para los cuales existe la función",
        "incorrecta1": "Conjunto de valores de la variable independiente para los cuales no existe la función",
        "incorrecta2": "Tener posesión de un objeto",
        "incorrecta3": "Someter a una persona a tu voluntad"
    },
    {
        "categoria": "MATEMÁTICAS",
        "pregunta": "¿Qué es una incógnita?",
        "respuesta": " Un número del que desconocemos su valor",
        "incorrecta1": " Un conjunto de número que son divisibles entre 2",
        "incorrecta2": "Un número del que desconocemos su valor",
        "incorrecta3": "Un conjunto de números con relación mediante una ecuación"
    },
    {
        "categoria": "MATEMÁTICAS",
        "pregunta": "¿Qué es una raíz de índice n?",
        "respuesta": "Un número que elevado a n da como resultado el radicando",
        "incorrecta1": "Un número que dividido por n da como resultado el radicando",
        "incorrecta2": "Un número multiplicado por otro que es primo",
        "incorrecta3": "Parte enterrada en el suelo de un árbol"
    },
    {
        "categoria": "MATEMÁTICAS",
        "pregunta": "¿Qué es un exponente?",
        "respuesta": "En una potencia, es el número que expresa cuántas veces hay que multiplicar la base por sí misma",
        "incorrecta1": " Un número que tiende a infinito",
        "incorrecta2": "En una potencia, es el número que expresa cuántas veces hay que dividir la base por sí misma",
        "incorrecta3": "Un número que se expone a un alto riesgo"
    },
    {
        "categoria": "TECNOLOGÍA",
        "pregunta": "Steve Jobs y Steve Wozniak eran conocidos fundadores de Apple Inc., pero había un tercer fundador. ¿Cómo se llamaba?",
        "respuesta": "Ronald Wayne",
        "incorrecta1": "Paul Allen",
        "incorrecta2": "Chris Knight",
        "incorrecta3": "Linus Torvalds"
    },
    {
        "categoria": "TECNOLOGÍA",
        "pregunta": "Enfermedad que ataca al hígado.",
        "respuesta": "Hepatitis",
        "incorrecta1": "Renitis",
        "incorrecta2": "Bulimia",
        "incorrecta3": "Onicomicosis"
    },
    {
        "categoria": "TECNOLOGÍA",
        "pregunta": "Hablando de Apple, ¿en qué año se estrenó el primer iPhone?",
        "respuesta": "2005",
        "incorrecta1": "2021",
        "incorrecta2": "2007",
        "incorrecta3": "2008"
       
    },
    {
        "categoria": "TECNOLOGÍA",
        "pregunta": "En este año se envió el primer mensaje de texto SMS.",
        "respuesta": "1992",
        "incorrecta1": "1997",
        "incorrecta2": "2002",
        "incorrecta3": "2003",
        
    },
    {
        "categoria": "TECNOLOGÍA",
        "pregunta": "A principios del 2019, Amazon anunció que había sobrepasado esta cifra en ventas de dispositivos Alexa.",
        "respuesta": "100 millones",
        "incorrecta1": "30 millones",
        "incorrecta2": "50 millones",
        "incorrecta3": "10 millones"
      
    },
    {
        "categoria": "FÍSICA",
        "pregunta": "¿Cuál es la fórmula FÍSICA del agua?",
        "respuesta": "Es la línea que describe en su movimiento",
        "incorrecta1": "Es el sentido del movimiento",
        "incorrecta2": "Es la dirección y sentido del movimiento",
        "incorrecta3": "Es la dirección del movimiento"
    },
    {
        "categoria": "FÍSICA",
        "pregunta": "¿En qué unidad se mide la presión?",
        "respuesta": "Pascales",
        "incorrecta1": "Newton",
        "incorrecta2": "Kg",
        "incorrecta3": "m/s"
    },
    {
        "categoria": "FÍSICA",
        "pregunta": "Una masa de kilogramo, ¿a qué peso equivale en newton?",
        "respuesta": "9.8N",
        "incorrecta1": "7.2N",
        "incorrecta2": "5.8N",
        "incorrecta3": "6.3N"
    },
    {
        "categoria": "FÍSICA",
        "pregunta": "¿Dónde nació Isaac Newton?",
        "respuesta": "Inglaterra",
        "incorrecta1": "Finlandia",
        "incorrecta2": "Escocia",
        "incorrecta3": "Dinamarca"
    },
    {
        "categoria": "FÍSICA",
        "pregunta": "¿Quién originó esta frase?: Dadme un punto de apoyo y moveré el mundo",
        "respuesta": "Arquímedes",
        "incorrecta1": "Sócrates",
        "incorrecta2": "Aristóteles",
        "incorrecta3": "Demócrito"
    }
  ]
  let rondas=
    [
      "CINE","BIOLOGÍA","TECNOLOGÍA","MATEMÁTICAS", "FÍSICA"
    ]