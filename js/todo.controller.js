function todoController() {
  //define ctrl with global scope, so every 'this' refers to the same thing
  var ctrl = this;
  //create list of todos
  ctrl.list = [];

  ctrl.add = function() {
    var content = {
      title: ctrl.newTodo,
      completed: false
    }
    ctrl.list.unshift(content);
    ctrl.newTodo = "";
  }

  ctrl.removeTodo = function(item, index) {
      ctrl.list.splice(index, 1);
  }

  ctrl.remaining = function() {
    return ctrl.list.filter(function(item) {
      return !item.completed
    })
  }


}


angular
  .module('app')
  .controller('todoController', todoController)
