function aplicarDesconto(produto) {
    if (produto.desconto && produto.quantidade_desconto) {
   
        const desconto = parseFloat(produto.quantidade_desconto) / 100;
        
        produto.preco_real_venda = produto.preco_real_venda * (1 - desconto);
        
        produto.preco = produto.preco_real_venda;
    }
    return produto;
}
