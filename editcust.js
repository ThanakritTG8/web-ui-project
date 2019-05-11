$(function(){
    $.get("data/customers.json", function(data){

        console.log(document.cookie);
        var show = data;
        var customer = show[document.cookie];

        var id = customer.customerID;
        var company = customer.companyName;
        var name = customer.contactName;
        var title = customer.contactTitle;
        var street = customer.address.street;
        var city = customer.address.city;
        var region = customer.address.region;
        var post = customer.address.postalCode;
        var country = customer.address.country ;
        var phone = customer.address.phone ; 
                        
        $('#name').val(name);
        $('#id').val(id);
        $('#company').val(company);
        $('#contactTitle').val(title);
        $('#street').val(street);
        $('#city').val(city);
        $('#region').val(region);
        $('#post').val(post);
        $('#country').val(country);
        $('#phone').val(phone);
                        
        

        
    
    })

})

function setCookies(i){
    document.cookie = i ;
}