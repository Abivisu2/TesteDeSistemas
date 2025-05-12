const Login = require("./classes/Login");

describe("Realizar teste para login bem sucedido", () =>{

    beforeEach(() => {
        // DADO - GIVEN
        login = new Login();
    })

    test("Login bem-sucedido!", () => {

        //WHEN - QUANDO
        const resultado = login.authenticate("admin", "1234");
        // THEN - ENTÃO
        expect(resultado).toBe("Login bem-sucedido!");
    })
    
    test("Login Mal-sucedido!", () => {

        //WHEN - QUANDO
        const resultado = login.authenticate("abi", "12345");
        // THEN - ENTÃO
        expect(resultado).toBe("Usuário ou senha incorretos.");
    })

})