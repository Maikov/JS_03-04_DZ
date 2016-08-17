var text = {
  // текст заголовка
  header: 'Тест по программированию',
    // массив вопросов и ответов
  value: [
    { 
      question: 'Вопрос №1',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4']
    },
    { 
      question: 'Вопрос №2',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    },
    { 
      question: 'Вопрос №3',
      answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    }
  ],
  // текст кнопки результатов
  button: 'Проверить мои результаты',

  createDom: function() { 
  
    var myForm = document.createElement('form');
    myForm.className = "form";
    // добавляем новый элемент на страницу
    document.body.appendChild(myForm);
    // создаем теги, классы, инпуты, даем им значения из массива
    var newTag = '<h1 class="title">' + this.header +'</h1>' + '<ol class="ol">';
    // создаем циклы
      for(var i = 0; i < this.value.length; i++) {
           newTag += '<li class="ol__item">' +
                     '<h2 class="ol__item--top">' + this.value[i].question + '</h2>';
    
        for(var a = 0; a < this.value[i].answer.length; a++) {
          newTag += '<label class="ol__item--ans">' +
                    '<input type="checkbox" name="answer' + i + '">' +
                    '<span>' + this.value[i].answer[a] + '</span></label>';
        } 
        
        newTag += '</li>';
      }
    
      newTag += '</ol>' +
                '<input type="submit" value="' + this.button + '" class="check_btn">';
     // добавляем теги в форму
      myForm.innerHTML = newTag;
  
  }

};

text.createDom();