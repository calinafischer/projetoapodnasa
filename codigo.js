

$("#botao").click(function (event) {
    event.preventDefault();
    let date = $("#data").val()
    let Vurl = "https://api.nasa.gov/planetary/apod?api_key=Pb1Af2AJ9ZgJZSVSvQJMZlmUQ4UncE7MzAxvuic6&date=" + date
    
    
    $.ajax({
        url: Vurl,
        success: function (response){
            $("#img").attr("src" , response.url)
        }
    })
});


  

