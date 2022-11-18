$(() => {
    $("#i1o").click(() =>
        $.post(
            "/", 
            { x: $("#i1").val() },
            res => $("#o").html(res.x)
        )
    )
    $("#i1").mousemove(() => $("#i1o").html(2**$("#i1").val()))
})