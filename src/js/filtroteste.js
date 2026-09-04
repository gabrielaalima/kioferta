const livros = [
    { titulo = "php", preco: 15.60, descricao: "aprenda php na pratica"}
    {titulo = "phyton", preco: 20.00, descricao: "aprenda phyton na pratica"}
    {titulo = "java", preco: 30.00, descricao: "aprenda java na pratica"}
]

const livroselecionado = livros.filter(livros => livros.titulo === "php")
console.log(livroselecionado)