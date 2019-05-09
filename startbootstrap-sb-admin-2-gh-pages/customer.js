$(function (){
    $.get("data/customers.json", function(data){
        var customers = data;
        var tableHead = '<tr><th>ID</th><th>Company Name</th><th>Contact Name</th><th>Contact Title</th></tr>';

        $('#custable').append(tableHead);

        for (var index in customers) {
            var customer = customers[index];
            var tableRow = '<tr><td>'+customer.customerID+'</td><td>'+customer.companyName+'</td><td><a href="custdetail.html">'+customer.contactName+'</a></td><td>'+customer.contactTitle+'</td></tr>';

            $('#custable').append(tableRow);
        }
    })
})