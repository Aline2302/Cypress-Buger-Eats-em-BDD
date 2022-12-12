Feature: Delete usuário cadastrado

    Background:
        Given que estou na página inicial do site
         When o usuário clica em SignupLogin
         
    Scenario: Deletar conta
        And insira um email válido
        And insira o "nome"
        And clica em Signup
        And completa o formulário
        