$(function(){

    $.get("data/products.json", function(data){
        var i = 0;
        for(i=0; i<=data.length ; i++){
            var total = 0;
            total += i;  
             
           } 
        $("#money").append(total);
    })

    $.get("data/customers.json", function(data){
        var i = 0;
        for(i=0 ; i<=data.length ; i++){
            var total = 0
            total += i;
        }
        $("#customer").append(total);
    })

    $.get("data/suppliers.json", function(data){
        var i = 0;
        for(i=0 ; i<=data.length ; i++){
            var total = 0;
            total += i;
        }
        $("#supply").append(total);
    })

    $.get("data/orders.json",function(data){
        var i = 0;
        for(i=0 ; i<=data.length ; i++){
            var total = 0;
            total += i;
        }
        $("#order").append(total);
    })

})