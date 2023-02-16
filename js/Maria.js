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

$('#calHost').click(() => {
    $('#hHost').toggle(1000);
})
$('#mWpp').hide();
$('#mTrigger').click(()=>{
    $('#mWpp').show();
})  
$('#cl').click(()=>{
    $('#mWpp').hide();
})

function animate_string() 
{
    let content = $('#title').text();
    setTimeout(function word2(){
        setInterval(function words() 
        {
          content = content[content.length - 1] + content.substring(0, content.length - 1);
          $('#title').text(content);
        }, 100);
    },2000)

}

window.onload = animate_string();
