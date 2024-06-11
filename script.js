// Dados fictícios para o gráfico
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2, 3],
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};


// Renderização do gráfico  
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);