/* eslint-disable no-undef */
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {
      let dueDate = new Date();
      // eslint-disable-next-line no-undef
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate == today;
      });
    };
  
    const dueLater = () => {
      let dueDate = new Date();
      const today = formattedDate(dueDate);
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    const toDisplayableList = (list) => {
      
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
module.exports = todoList;