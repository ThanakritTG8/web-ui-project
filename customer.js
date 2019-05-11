$(function () {
    $.get("data/customers.json", function (data) {
        var customers = data;
        var tableHead = '<tr><th>ID</th><th>Company Name</th><th>Contact Name</th><th>Contact Title</th></tr>';

        $('#custable').append(tableHead);

        var i = 0;
        for (i = 0 ; i<customers.length ; i++) {
            var tableRow = '<tr><td>' + customers[i].customerID + '</td><td>' + customers[i].companyName + '</td><td><a href="custdetail.html" onclick="setCookies(' + i + ')">' + customers[i].contactName + '</a></td><td>' + customers[i].contactTitle + '</td></tr>';

            $('#custable').append(tableRow);
        }
    })
})

function setCookies(i){
    document.cookie = i ;
}

// var customer = list_obj[index];

    // $("#title, #name").html(customer.contactName);
    // $("#id").html(customer.customerID);
    // $("#company").html(customer.companyName);
    // $("#contact").html(customer.contactTitle);
    // $("#address").html(customer.adress);