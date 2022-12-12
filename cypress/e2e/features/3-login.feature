Feature: Fazer login

    Background:
        Given que estou na página inicial do site
         When o usuário clica em SignupLogin

    Scenario:Usuário cadastrado loga no site
        And insira o email para logar
        And insira a senha
        Then clica em login

    Scenario: Usuário realizar logout
        And insira o email para logar
        And insira a senha
        Then clica em login
        And usuário clica em logout

    Scenario: Usuário adiciona email invalido
        And usuário inseri um email inválido
        And insira a senha
        Then clica em login
        And mensagem de erro "Your email or password is incorrect!"
  
    Scenario: Usuário adiciona senha invalida
        And insira o email para logar
        And usuário inseri uma senha inválida
        Then clica em login
        And mensagem de erro "Your email or password is incorrect!"