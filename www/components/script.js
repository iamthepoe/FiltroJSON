window.onload = function(){
    var url = 'https://profrodolfo.com.br/projeto/';
    var d = document.querySelector('.dados');

    function ExibirProdutos(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		d.innerHTML+= `
                    <div class="row line">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[i].nome}</h1>
                            <h3>${json[i].valor}</h3>
                        </div>
                    </div>
                	`;
            }
        }).catch();
    }

    ExibirProdutos();

    function ExibirPorNome(nome){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{
        	nome = nome.toUpperCase();      
            for(i = 0; i < json.length; i++){
            	if(json[i].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row line">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[i].nome}</h1>
                            <h3>${json[i].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPreco(preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            	if(json[i].valor<=preco){
            		d.innerHTML+= `
                    <div class="row line">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[i].nome}</h1>
                            <h3>${json[i].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPrecoENome(nome, preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
        	nome = nome.toUpperCase();
            for(i = 0; i < json.length; i++){
            	if(json[i].valor<=preco && json[i].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[i].nome}</h1>
                            <h3>${json[i].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }
    
    document.querySelector('#btn').addEventListener('click', ()=>{
    	d.innerHTML = '';
    	let nome = document.querySelector('#searchName').value;
    	let preco = Number(document.querySelector('#searchPrice').value);
    	if(!nome){
    		ExibirPorPreco(preco);
    	}else if(!preco){
    		ExibirPorNome(nome);
    	}else if(nome && preco){
    		ExibirPorPrecoENome(nome, preco);
    	}
    })
}