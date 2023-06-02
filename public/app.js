$(document).ready(function() {
    // Fetch data from the server
    function fetchData() {
        $.ajax({
            url: 'data.php',
            dataType: 'json',
            success: function(data) {
                // Process the data and create the chart
                var labels = [];
                var values = [];

                $.each(data, function(index, item) {
                    labels.push(item.label);
                    values.push(item.value);
                });

                var ctx = document.getElementById('chart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Data',
                            data: values,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        });
    }

    // Refresh data every 5 seconds
    setInterval(fetchData, 5000);

    // Initial data fetch
    fetchData();
});