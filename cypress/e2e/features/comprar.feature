Feature: Adicionar produtos no carrinho e realizar a compra

   Background: Logar no site
        Given que estou na página inicial do site
        When o usuário clica em SignupLogin
        And insira o email para logar
        And insira a senha
        Then clica em login
    
   Scenario: adiconar produtos no carrinho
        When o usuário adiciona três itens ao carrinho
        And usuário clica no carrinho
        And usuário clica em fazer o check-out
        And clica em faça a encomenda
        And realiza o pagamento
        And clique no botão "Baixar fatura" e verifique se a fatura foi baixada com sucesso
        Then depois do pedido realizado, volte para a página inicial
   
   Scenario: Verificar a quantidade do produto no carrinho
        When o usuário clica no menu em produto
        And o usuário clica em "Exibir produto"
        And aumenta a quantidade para "4"
        And clica no botão "Adicionar ao carrinho"   
        And clica em "Ver Carrinho"
        And usuário clica em fazer o check-out
        And clica em faça a encomenda
        And realiza o pagamento
        Then depois do pedido realizado, volte para a página inicial

  