//async function postMethod() {
//    await fetch("/Home/AddUser")
//}

function preview() {
    fade('#alert');
    const model = buildModel();
    $.post('/Home/AddUser', model,
        result => {
            $('#preview-body').empty();
            $('#preview-subject').empty();
            $('#preview-body').append(result.Body);
            $('#preview-subject').append(result.Subject);
            $('#preview').modal('show');
            if (result.Error) {
                showAlert(`Error parsing template. Error: ${result.Error}`);
            }
        })
        .fail(function () {
            showAlert('Please ensure json model is formatted correctly.');
        });
}