function checkPwLength(dom_object) {
    var val = dom_object.val();

    var length = new RegExp('.{8,}');

    if (!length.test(val)) {
        dom_object[0].setCustomValidity('Le mot de passe doit faire au moins 8 caractères');
    } else {
        dom_object[0].setCustomValidity('');
    }

}

function pwValidate(dom_object, message) {
    dom_object.queue(function() {
        $("#password, #password_conf").each(function() {
            this.setCustomValidity(message);
            $(this).dequeue();
        });
    }).queue(function() { 
        checkPwLength(dom_object);
        $(this).dequeue();
    });
}

$("#password, #password_conf").keyup(function () {
    var dom_obj = $(this);
    if ($('#password').val() !== $('#password_conf').val()) {
        pwValidate(dom_obj, 'Confirmation du mot de passe échouée');
    } else {
        pwValidate(dom_obj, '');
    }
});