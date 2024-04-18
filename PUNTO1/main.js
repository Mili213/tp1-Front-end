
        let numbers = [];
        let outputElement = document.getElementById('output');

        function Resultados() {
            outputElement.innerHTML = `
                <p>Suma de todos los números: ${sumar()}</p>
                <p>Promedio de todos los números: ${calcularPromedio()}</p>
                <p>Número máximo: ${encontrarMaximo()}</p>
                <p>Número mínimo: ${encontrarMinimo()}</p>
                <p>Arreglo después de modificaciones: [${numbers.join(', ')}]</p>
            `;
        }

        function sumar() {
            return numbers.reduce((acc, curr) => acc + curr, 0);
        }

        function calcularPromedio() {
            return (sumar() / numbers.length).toFixed(2);
        }

        function encontrarMaximo() {
            return Math.max(...numbers);
        }

        function encontrarMinimo() {
            return Math.min(...numbers);
        }

        function eliminarPrimerUltimo() {
            numbers.shift();
            numbers.pop();
            Resultados();
        }

        function agregarNuevo() {
            numbers.push(Math.floor(Math.random() * 100) + 1);
            Resultados();
        }

        function ordenar() {
            numbers.sort((a, b) => a - b);
            Resultados();
        }

        function invertir() {
            numbers.reverse();
            Resultados();
        }
        
        
        for (let i = 0; i < 10; i++) {
            numbers.push(Math.floor(Math.random() * 100) + 1);
        }

     
        Resultados();
   
