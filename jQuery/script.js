// jQuery & Bootstrap

$(function () {
    const $input = $('#input');
    const $buttonAdd = $('#button-addon2');
    const $list = $('.list-items');

    $buttonAdd.click(function () {
        if ($input.val().length > 0) {
            $list.append(
                `<div class="input-group mb-1">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" class="set-done">
                  </div>
                </div>
                <input type="text" class="input-item form-control" readonly value="${$input.val()}">
                <div class="input-group-append">
                    <button class="js_button-delete btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#confirmModal">Erase</button>
                </div>
              </div>
              `
            );
            $input.val(' ');
        }
    })

    

    $(document).on('change', '.set-done', function() {  //можно через родителя "body" или .list-item
        $(this).parents('.input-group').toggleClass('done'); //класс toggle добавляет или удаляет, это нужно что бы применить класс только к одному объекту
    });

    $(document).on('click', '.js_button-delete', function() {
        //$(this).parents('.input-group').remove();
    });
});