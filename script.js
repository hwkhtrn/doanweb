var ticketAmount = 0;

function decrByOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    if (x == 0) {
        document.getElementById(fieldId).value = x;
    } else {
        document.getElementById(fieldId).value = --x;
    }
    updateTicketAmount();
    console.log(ticketAmount);
}

function incrByOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    document.getElementById(fieldId).value = ++x;
    ++ticketAmount; //hàm xong thì tăng tA lên 1
    updateTicketAmount();
    console.log(ticketAmount);
}

function updateTicketAmount() {
    var a = Number(document.getElementById("quantity-field1").value);
    var b = Number(document.getElementById("quantity-field2").value);
    var c = Number(document.getElementById("quantity-field3").value);
    ticketAmount = a + b + c;
}

function checkTicketAmount(fieldId) {
    if (ticketAmount <= 7)
    {
        incrByOne(fieldId)
    } else {
        window.alert('The maximum amount of tickets is 8!');
    }
}

function toggleFocusMFH(element) {
    // Loại bỏ class "movie-info--hours-option-focus" khỏi tất cả các thẻ li trong ul
    document.querySelectorAll('ul.movie-info--hours-ulist li.movie-info--hours-list button.movie-info--hours-option').forEach(function(a) {
        a.classList.remove('movie-info--hours-option-focus');
    });

    // Thêm class "movie-info--hours-option-focus" vào thẻ li được nhấp
    element.classList.add('movie-info--hours-option-focus');
}

function toggleFocusCSS(element) {
     // Kiểm tra xem thẻ div có class "selected" không
    if (element.classList.contains('selected')) {
        // Nếu có, không làm gì cả
    } else {
        if (element.classList.contains('selecting') || element.classList.contains('selecting-double')) {
            element.classList.remove('selecting');
            element.classList.remove('selecting-double');
        } else {
            // Nếu không, thêm class "selecting"
            if (element.classList.contains('double')) {
                element.classList.add('selecting-double');
            } else {
                element.classList.add('selecting');
            }   
        }
    }
}

