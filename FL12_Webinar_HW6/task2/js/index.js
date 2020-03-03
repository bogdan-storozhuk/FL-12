const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $searchInput = $("#search-input");

const todos = [{
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

(function ($) {
  $.fn.todolist = function (todos) {
    function fillTodoList() {
      _this.empty();
      todos.forEach(element => {
        addListElement(element.text)
      });
    }

    function addListElement(itemText) {
      let listItem = $(`<li class="item"></li>`),
        listItemText = $(`<span class="item-text"></span>`).text(itemText),
        listItemDeleteButton = $(`<button class="item-remove">Remove</button>`);
      listItem.append(listItemText);
      listItem.append(listItemDeleteButton);
      _this.append(listItem);
    }
    $add.on('click', (event) => {
      event.preventDefault();
      if (!$input.val()) return;
      todos.push({
        text: $input.val(),
        done: false
      });
      addListElement(todos[todos.length - 1].text);
    });
    $(document).on('click', '.item-remove', (event) => {
      let itemText = $(event.target).siblings('span').text(),
        index = todos.findIndex(item => item.text === itemText);
      todos.splice(index, 1);
      $(event.target).parent('li').remove();
    });

    $(document).on('click', '.item-text', (event) => {
      let index = todos.findIndex(item => item.text === $(event.target).text());
      todos[index].done = !todos[index].done;
      todos[index].done ? $(event.target).css({
        'textDecoration': 'line-through'
      }) : $(event.target).css({
        'textDecoration': 'none'
      });
    });
    $searchInput.on('input', (event) => {
      $('.item-text').each((index, textElement) => {
        let textValue = $(textElement).text(),
          inputValue = $(event.target).val();
        if (textValue.toLowerCase().indexOf(inputValue) === -1) {
          $(textElement).parent('li').css({
            'display': 'none'
          });
        } else {
          $(textElement).parent('li').css({
            'display': 'list-item'
          });
        }
      });
    });
    const _this = this;
    fillTodoList();
    return this;
  };
})(jQuery);

$list.todolist(todos);