function todoApp() {
  return {
    //set directive as an element in html
    restrict:'E',
    //set nickname for todoController
    controller: 'todoController as todo',
    template: `
      <div class="todoDiv">
        <form class="todoInput" ng-submit="todo.add(); started=true">
          <input type="text" ng-model="todo.newTodo" placeholder="What needs to be completed?" name="">
        </form>

        <ul class="todos">
          <li ng-repeat="item in todo.list">

            <input
            type="checkbox"
            id="todo-{{ $index }}"
            ng-model="item.completed"
            >

            <label class="toggle" for="todo-{{ $index }}"></label>

            <p
            ng-dblclick="showEdit=true"
            ng-hide="showEdit"
            ng-class="{'checked': item.completed}">
              {{item.title}}
            </p>

            <div ng-show="showEdit">
              <input
              type="text"
              ng-model="item.title"
              ng-blur="showEdit = false"
              todo-auto-focus="showEdit">
            </div>

            <a
            href=""
            ng-click="todo.removeTodo(item,$index)">
              X
            </a>

          </li>
        </ul>

        <p class="remaining">
          <span ng-show="todo.remaining().length > 0">
            You have {{todo.remaining().length}} of {{todo.list.length}} items left
          </span>
          <span ng-show="todo.remaining().length === 0 && started">
            You finished everything!
          </span>
        </p>

      </div>



    `
  }
}



angular
  .module('app')
  .directive('todoApp', todoApp)
