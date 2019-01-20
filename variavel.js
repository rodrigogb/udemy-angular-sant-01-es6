if(true) {
   var serie = 'Game of Thrones';
}

console.log(serie); // com o var, serie sofre a elevação e é válida fora do escopo que foi criada

if(true) {
    let serie2 = 'Friends';
}

console.log(serie2); // com let, serie2 só fica disponível dentro de seu bloco, nao podendo ser utilizada fora dele

const filme = 'Titanic'; // const terá esse valor para sempre. Não poderá ser motificada.
