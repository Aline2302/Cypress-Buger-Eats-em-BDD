Feature: Cadastrar novo usuário

    Background:
        Given que estou na página inicial do site
       
    Scenario: Cadrastro no site
        When o usuário clica em SignupLogin
        And insira um email válido
        And insira o "nome"
        And clica em Signup
        And completa o formulário
        Then verificar se a conta foi criada com sucesso 
     