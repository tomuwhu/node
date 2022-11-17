$(() => {
    $("#b1").click( e => {
        data = {x: Math.round(Math.random()*10+1)}
        $.post("/", data, (res) => {
            $("#o").html(res.x) 
        })
    } )
})