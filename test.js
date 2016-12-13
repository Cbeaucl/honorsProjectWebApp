var count = 0;

function loadTFIDF() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var cList = $('#TFIDFlist')
            $.each(obj.simdocs, function(i) {
                var li = $('<li/>').text(obj.simdocs[i]).appendTo(cList);
            });
            $("#TFIDFdiv").fadeIn();
        }
    };
    var name;
    name = document.getElementById("searchTerm").value;
    xhttp.open("GET", "http://127.0.0.1:5000/get_TFIDF_Data?documentName=" + name, true);
    xhttp.send();
}

function loadLDA() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var cList = $('#LDAlist')
            $.each(obj.simdocs, function(i) {
                var li = $('<li/>').text(obj.simdocs[i]).appendTo(cList);
            });
            $("#LDAdiv").fadeIn();
        }
    };
    var name;
    name = document.getElementById("searchTerm").value;
    xhttp.open("GET", "http://127.0.0.1:5000/get_LDA_Data?documentName=" + name, true);
    xhttp.send();
}

function loadLSA() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var cList = $('#LSAlist')
            $.each(obj.simdocs, function(i) {
                var li = $('<li/>').text(obj.simdocs[i]).appendTo(cList);
            });
            $("#LSAdiv").fadeIn();
            document.getElementById("loadingWheel").style.display = 'none';
        }
    };
    var name;
    name = document.getElementById("searchTerm").value;
    xhttp.open("GET", "http://127.0.0.1:5000/get_LSA_Data?documentName=" + name, true);
    xhttp.send();
}

function loadEverything() {
    $(".test").fadeOut();
    $("ul").empty();
    document.getElementById("loadingWheel").style.display = 'inline-block';
    loadLDA();
    loadTFIDF();
    loadLSA();
}

$(document).ready(function() {
	$(".test").hide();
    $('#searchTerm').keypress(function(e) {
        if (e.keyCode == 13) loadEverything();
    });
});




function removeOverlay() {
    $("#overlay").remove();
}