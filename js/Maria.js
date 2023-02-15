$('#all').hide();
$('#cal').click((e) => {
    switch ($(e.target).text()) {
        case "Calculate":
            $(e.target).text("Back");
            break;
        case "Back":
            $(e.target).text("Calculate");
            break;
    }
    $('#all').toggle(1000);
})
$('#mWpp').hide();
$('#mTrigger').click(()=>{
    $('#mWpp').show();
})  
$('#cl').click(()=>{
    $('#mWpp').hide();
})