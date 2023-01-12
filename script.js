const contar = () => {
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)
    let res = document.getElementById("res")

    if (inicio == 0 || fim == 0) {
        res.innerHTML = "Impossivel contar!"
        alert("[ERRO] Faltam dados!")
        
    } else {
        res.innerHTML = "Contando: <br>"
        if (passo <= 0 ) {
            alert("Passo invalido! Considerando passo 1" )
            passo = 1
        }
        if(inicio < fim) {
            for(let c = inicio;c <= fim; c +=passo) {
                res.innerHTML= res.innerHTML + ` ${c} \u{1f449}`
            }
        } else {
            for(let c = inicio; c>= fim; c = c-=passo) {
                res.innerHTML = res.innerHTML + `${c} \u{1f449}`
            }
        }
        res.innerHTML = res.innerHTML + `\u{1f3c1}`  
    }
}