function adduser()
{
    p1=document.getElementById("player1name").value;
    p2=document.getElementById("player2name").value;
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);
    window.location="game_page.html";
}
