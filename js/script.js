$("#submit-form").submit((e) => {
    alert("Comment Senting to Sever")
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxvTPuNrEwBQXPbIe0tn6PUDmJdFC0f4Xv3ZpOOM5KNQrU6vJhSIaDT/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})