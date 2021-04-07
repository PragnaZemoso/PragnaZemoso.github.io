function displayPage(tabname,element){
    var tabcontent=document.getElementsByClassName("content");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    btnTabs=document.getElementsByClassName("btnTab");
    for(i=0;i<btnTabs.length;i++){
        btnTabs[i].style.backgroundColor="paleturquoise";
        btnTabs[i].style.color="black";
        btnTabs[i].style.borderStyle="solid";
        btnTabs[i].style.borderColor="teal";
        btnTabs[i].style.outline="none";
    }
    document.getElementById(tabname).style.display="block";
    element.style.backgroundColor="teal";
    element.style.borderStyle="dotted";
    element.style.borderColor="darkcyan";
    element.style.outline="none";
}