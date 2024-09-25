javascript:(function(){ 


function loaded(){
    return $('#notes').length > 0
};
function waitUntilLoaded(){
    if(!loaded()) {
        window.setTimeout(waitUntilLoaded, 100); /* checks every 100 milliseconds*/
    } 
    else {
    /* do stuff */
    data = {
        txt_log_name: "Run",
        txt_log_date: "09/24/2024",
        txt_log_mint_time: "1",
        txt_log_sec_time: "0",
        txt_log_distance: "1",
        txtwoutdesc: "workout desc",
        notes : "notes here"
        };
    for (let x in data) {
        document.getElementById(x).value = data[x];
        };
    //saverunnerlog()
    }
};
if(!loaded()){
    $.colorbox({href:'log_modification.php?case=new&id=0&wDate=2024-09-25'})
}
waitUntilLoaded();


})();