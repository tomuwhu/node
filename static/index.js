x = 1
$(() => {
    $("#b1").click( e => {
        x = $("#i1").val()
        $.post("/", { x }, (res) => {
            $("#o").html(res.x) 
        })
    } )
    $("#i1").mousemove( () => {
        x = $("#i1").val()
        $("#i1o").html(x)
    })
})