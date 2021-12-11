function Aluno (nome,faltas,notas) {
    this.nome = nome;
    this.qtdfaltas = faltas;
    this.notas = notas;
    this.media = function () {  
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i]  
        }
        return soma / this.notas.length
        
    } ,
    this.faltas = function () {
        return this.qtdfaltas + 1
    }
    
}


const aluno1 = new Aluno ("Guilherme",5,[5,8,9,10]);
const aluno2 = new Aluno ("Pedro",8,[7,8,9,9]);
const aluno3 = new Aluno ("Manuela",8,[7,8,9,9]);
const aluno4 = new Aluno ("Isabela",3,[8,8,8,9]);
const aluno5 = new Aluno ("Lucas",7,[8,9,10,10]);

//console.log(aluno1.media()) //imprimi a média do aluno
//console.log(aluno1.faltas()) imprimi a quantidade de faltas mais 1


module.exports = {
    novoAluno: function (nome,faltas,notas) {
        const novoAluno = new Aluno(nome,faltas,notas);
        this.alunos.push(novoAluno);
    },
    alunos: [aluno1, aluno2, aluno3, aluno4, aluno5],
    mediaNotas: function (aluno) {
        soma = 0
        for(let i = 0; i < aluno.notas.length; i++) {
            soma = soma + aluno.notas[i]
        } return soma / aluno.notas.length
    }
}

function Curso (nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam) {
    this.nomeDoCurso = nomeDoCursoParam;
    this.notaDeAprovacao = notaDeAprovacaoParam;
    this.faltasMaximas = faltasMaximasParam;
    this.listaDeEstudantes = listaDeEstudantesParam;
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado
        if (alunoAvaliado.media() >= this.notaDeAprovacao && alunoAvaliado < this.faltasMaximas) {
            return aprovado = true
        } else if (alunoAvaliado.media() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado == this.faltasMaximas) {
            return aprovado = true
        } else {
            return aprovado = false
    }
},
    this.alunosAprovados = function () {
        let listaAlunosAprovados = []

        for(let i=0;i<this.listaDeEstudantes.length;i++){
            listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
            console.log(this.aprovarAluno(this.listaDeEstudantes[i]))
        }
            
            console.log(listaAlunosAprovados) //Passo 5

    }

}
const ProgImperativa = new Curso ("Programação Imperativa", 5, 10, [aluno1]) //Passo 6 
ProgImperativa.alunosAprovados()
 

