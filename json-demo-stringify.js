let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 4564,
  "numLikes": 986,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

//Objeto -> Cadena de caracteres
//cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(typeof infoCursoJSON);
console.log(infoCursoJSON);

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto);
