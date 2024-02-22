document.addEventListener('DOMContentLoaded', function () {
    // Dados de exemplo para os gráficos
    const porcentagemData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '% de Variação',
            backgroundColor: '#9c27b0',
            data: [2, -1, 3, -2, 1, 4],
        }]
    };

    const pizzaData = {
        labels: ['Renda Fixa', 'Criptomoedas', 'Ações', 'Outros'],
        datasets: [{
            data: [40, 20, 30, 10],
            backgroundColor: ['#9c27b0', '#ffffff', '#000000', '#f50057'],
        }]
    };

    // Configuração do gráfico de porcentagem
    const porcentagemConfig = {
        type: 'line',
        data: porcentagemData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Período'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '% de Variação'
                    }
                }
            }
        }
    };

    // Configuração do gráfico de pizza
    const pizzaConfig = {
        type: 'doughnut',
        data: pizzaData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
            }
        }
    };

    // Inicializa os gráficos
    const porcentagemChart = new Chart(document.getElementById('porcentagem-chart'), porcentagemConfig);
    const pizzaChart = new Chart(document.getElementById('pizza-chart'), pizzaConfig);
});
