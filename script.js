function NavigateToSite(){
    var ddl = document.getElementById("ddlMyList");
    var selectedVal = ddl.options[ddl.selectedIndex].value;
 
    window.location = selectedVal;
}