describe('Pruebas en demoComponent', () =>{

test(' Prueba de test unitarias' , () => {
    // 1. Inicializacion 

    const message1  = 'Hola jonnathan'
    // 2 . Estimulo 

    const message2 = message1.trim();
    // 3. Observar el comportamiento 

    expect( message1 ).toBe( message2 )
});

});