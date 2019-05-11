$(function(){
    $.get("data/customers.json", function(data){

        console.log(document.cookie);
        var show = data;
        var customer = show[document.cookie];

        var id = 'Customer ID : ' + customer.customerID;
        var company = 'Company : ' + customer.companyName;
        var name = 'Name : ' + customer.contactName;
        var title = 'Title : ' + customer.contactTitle;
        var address = '<p>Adrees : </p><p>Street : ' + customer.address.street + '</p>'
                        + '<p>City : ' + customer.address.city + '</p>'
                        + '<p>Region : ' + customer.address.region + '</p>'
                        + '<p>Postal Code : ' + customer.address.postalCode + '</p>'
                        + '<p>Country : ' + customer.address.country + '</p>'
                        + '<p>Phone : ' + customer.address.phone + '</p>' ; 

        var main = customer.contactName;
                        
        $('#title').append(main);
        $('#cid').append(id);
        $('#name').append(name);
        $('#company').append(company);
        $('#contact').append(title);
        $('#address').append(address);
                        
        

        
    
    })

})

function setCookies(i){
    document.cookie = i ;
}

    // $("#title, #name").html(customer.contactName);
    // $("#id").html(customer.customerID);
    // $("#company").html(customer.companyName);
    // $("#contact").html(customer.contactTitle);
    // $("#address").html(customer.adress);