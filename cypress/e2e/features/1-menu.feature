Feature: Menu page

    Background:
        Given que estou na página inicial do site
     
    Scenario: Home
        When usuário clica em Home

    Scenario: Products
        When usuário clica em Products

    Scenario: cart
        When usuário clica em Cart
        
    Scenario: Signup/Login
        When o usuário clica em SignupLogin

    Scenario: Test Cases
        When o usuário clica em Test Cases

    Scenario: API Testing
        When o usuário clica em API Testing

    Scenario: Video Tutorials
        When o usuário clica em Video Tutorials

    Scenario: Contact us
        When usuário clica em Contact us
        And preencher nome
        And preencher email
        And título da mensagem
        And escreve uma mensagem
        Then envia a mensagem 
        And confirmação de mensagem enviada
    
    
    