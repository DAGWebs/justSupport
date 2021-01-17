$(document).ready(
    $("#username").on('keyup click', () => {
        var password = $("#username");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            password.addClass('text-danger is-invalid');
            $(".form-errors").addClass('alert alert-danger text-center').html("Username is a required field!").show();
            disablebtn();
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(password.val().length < 6) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("Username requires at least 6 characters!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),
    $("#email").on('keyup click', () => {
        var password = $("#email");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The email field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(!validateEmail(password.val())) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("A valid email is required!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),
    $("#fname").on('keyup click', () => {
        var password = $("#fname");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The first name field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(password.val().length < 2) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("The first name requires at least 2 characters!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),
    $("#lname").on('keyup click', () => {
        var password = $("#lname");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The last name field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(password.val().length < 2) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("The last name requires at least 2 characters!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),
    $("#discord").on('keyup click', () => {
        var password = $("#discord");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The discord field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(!validateDiscord(password.val())){
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("Please enter a valid discord!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),
    $("#password").on('keyup click', () => {
        var password = $("#password");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The password field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');
        }
    }),
    $("#cpassword").on('keyup click', () => {
        var password = $("#cpassword");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The confirm password field is required!").show();
            disablebtn();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtn(false);
            password.addClass('text-success is-valid');

            if(password.val() !== $('#password').val()) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("Your passwords dont Match!").show();
                disablebtn();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtn(false);
                password.addClass('text-success is-valid');
            }
        }
    }),

    $('#regBTN').on('click', (e) => {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/userApi",
            data: {
                username: $('#username').val(),
                email: $('#email').val(),
                lname: $('#lname').val(),
                fname: $('#fname').val(),
                discord: $('#discord').val(),
                password: $('#password').val()
            },
            dataType: "JSON",
            success: function (res) {
                console.log(res.msg);
                if(res.msg === "success") {
                    window.location.replace("/login");
                } else if(res.msg === 'email in use') {
                    $(".form-errors").addClass('alert alert-danger text-center').html("The email you selected is already in use!").show();
                    disablebtn();
                } else if(res.msg === 'username in use') {
                    $(".form-errors").addClass('alert alert-danger text-center').html("The username you selected is already in use!").show();
                    disablebtn();
                } else if(res.msg === 'discord in use') {
                    $(".form-errors").addClass('alert alert-danger text-center').html("The discord you selected is already in use!").show();
                    disablebtn();
                } else {
                    $(".form-errors").addClass('alert alert-danger text-center').html("An unknown error has accured!").show();
                    disablebtn();
                }
            },
            failure: function (res){
                $(".form-errors").addClass('alert alert-danger text-center').html("Something went wrong please refresh the page and try again!").show();
            }
        });
    }),

    $("#logusername").on('keyup click', () => {
        var password = $("#logusername");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("Username Discord or Email is required!").show();
            disablebtnlogin();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtnlogin(false);
            password.addClass('text-success is-valid');
        }
    }),

    $("#logpassword").on('keyup click', () => {
        var password = $("#logpassword");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The password field is required!").show();
            disablebtnlogin();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtnlogin(false);
            password.addClass('text-success is-valid');
        }
    }),

    $("#logBTN").on('click', (e) => {
        e.preventDefault();
        var username = $("#logusername").val();
        var password = $("#logpassword").val();
        $.ajax({
            type: "post",
            url: "/userApi/" + username,
            data: {
                username: username,
                password: password
            },
            dataType: "JSON",
            success: function (res) {
                console.log(res.msg);
                if(res.msg === "success") {
                    window.location.replace("/login");
                } else if(res.msg === 'bad creds') {
                    $(".form-errors").addClass('alert alert-danger text-center').html("Your credintials are inccorect!").show();
                    disablebtn();
                } else if(res.msg === 'validation incomplete') {
                    $(".form-errors").addClass('alert alert-danger text-center').html(`Hello, ${res.name} your email has not been validated yet!`).show();
                    disablebtn();
                } else if(res.msg === 'login done') {
                    window.location.replace("/dashboard");
                }
            },
            failure: function (res){
                $(".form-errors").addClass('alert alert-danger text-center').html("Something went wrong please refresh the page and try again!").show();
            }
        });
    }),

    $("#resetusername").on('keyup click', () => {
        var password = $("#resetusername");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The username field is required!").show();
            disablebtnloginReset();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtnloginReset(false);
            password.addClass('text-success is-valid');
        }
    }),

    $("#resetemail").on('keyup click', () => {
        var password = $("#resetemail");

        if(password.val() === '') {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").addClass('alert alert-danger text-center').html("The email field is required!").show();
            disablebtnloginReset();
            password.addClass('text-danger is-invalid');
        } else {
            password.removeClass('text-danger is-invalid');
            password.removeClass('text-success is-valid');
            $(".form-errors").html("").hide();
            disablebtnloginReset(false);
            password.addClass('text-success is-valid');
            if(!validateEmail(password.val())) {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").addClass('alert alert-danger text-center').html("A valid email is required!").show();
                disablebtnloginReset();
                password.addClass('text-danger is-invalid');
            } else {
                password.removeClass('text-danger is-invalid');
                password.removeClass('text-success is-valid');
                $(".form-errors").html("").hide();
                disablebtnloginReset(false);
                password.addClass('text-success is-valid');
            }
        }
    }),

    $("#resetBTN").on('click', (e) => {
        e.preventDefault();
        var username = $("#resetusername").val();
        var email = $("#resetemail").val();
        $.ajax({
            type: "get",
            url: "/userApi/" + username,
            data: {
                username: username,
                email: email
            },
            dataType: "JSON",
            success: function (res) {
                console.log(res.msg);
                if(res.msg === "return") {
                    $(".form-errors").removeClass('alert alert-danger');
                    $(".form-errors").addClass('alert alert-success text-center').html("If your email and password exist an email will be sent to you!").show();
                }  else if(res.msg === "email sent") {
                    $(".form-errors").removeClass('alert alert-danger');
                    $(".form-errors").hide();
                    $(".form-errors").addClass('alert alert-danger text-center').html("An email has already been sent to you! Please wait to request another one.").show();
                }
            },
            failure: function (res){
                $(".form-errors").addClass('alert alert-danger text-center').html("Something went wrong please refresh the page and try again!").show();
            }
        });
    })
    
);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateDiscord(discord) {
    const re = /^((.{2,32})#\d{4})/;
    return re.test(String(discord).toLowerCase());
}

function disablebtn(cond = true) {
    if(cond) {
       return $('#regBTN').attr('disabled', true);
    } else {
        $('#regBTN').attr('disabled', false);
    }
}

function disablebtnlogin(cond = true) {
    if(cond) {
       return $('#logBTN').attr('disabled', true);
    } else {
        $('#logBTN').attr('disabled', false);
    }
}

function disablebtnloginReset(cond = true) {
    if(cond) {
       return $('#resetBTN').attr('disabled', true);
    } else {
        $('#resetBTN').attr('disabled', false);
    }
}
