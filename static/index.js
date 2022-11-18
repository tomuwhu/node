$(() => {
    $("#b1").click(() =>
        $.post(
            "/", 
            { x: $("#i1").val() },
            res => $("#o").html(res.x)
        )
    )
    $("#i1").mousemove(() => $("#i1o").html($("#i1").val()))
})