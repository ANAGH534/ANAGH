$("#submit-form").submit((e) => {
    alert("Comment Senting to Sever")
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxvTPuNrEwBQXPbIe0tn6PUDmJdFC0f4Xv3ZpOOM5KNQrU6vJhSIaDT/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            window.location.href = "success.html"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})