Feature: Buger Eats

   Background:
      Given acessar o site

   Scenario: verifica se está  no site
      Then verá a logo
      And a mensagem "Seja um parceiro entregador pela Buger Eats"

   Scenario: Cadastro para fazer entregas no Buger Eats
      When clica em Cadastre-se para fazer entregas
      And completar o cadastro
      
      
