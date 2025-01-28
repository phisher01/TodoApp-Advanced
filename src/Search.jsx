import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import "./Search.css";
import Edit from './Edit';
import Icon from "./Icon";
import Option from "./Option";

export default function Search({deleteSearchItem,EditTodo ,EditSearch,setSearchItems, onEditSearchItem,deleteTodo, searchItems,markAsDone ,input,changeInput,search,markAsDoneSearchitem}) {
 


  return (
    <div className="search">
      <form onSubmit={search}>
        <TextField
          id="standard-basic"
          value={input}
          onChange={changeInput}
          label="Search"
          variant="standard"
          size= "small"
        />
        &nbsp;
        <Button variant="text" type="submit">
          Search
        </Button>
      </form>
      <br /><br />


      <div>
  {searchItems.length > 0 && (
    <>
      <h3>Search Results</h3>
      <ul className="search-list">
        {searchItems.map((searchitem) => {
          console.log(searchitem)
          return (
            <li key={searchitem.id} style={{ marginBottom: "10px" }}>
              {searchitem.isEdit ? (
                <Edit EditTodo={EditTodo} EditSearch={EditSearch} task={searchitem}></Edit> // Rendered if `isEdit` is true
              ) : (
                <>
                  {/* Task text with conditional styling */}
                  <span
                    style={
                      searchitem.isDone
                        ? { textDecoration: "line-through", color: "red" }
                        : {}
                    }
                  >
                    {searchitem.task}
                  </span>
                  {/* Options rendering */}
                  {searchitem.isOptions && (
                    <Option
                      onEdit={onEditSearchItem}
                      deleteSearchItem={deleteSearchItem}
                      markAsDoneSearchitem={markAsDoneSearchitem}
                      deleteTodo={deleteTodo}
                      markAsDone={markAsDone}
                      task={searchitem}
                    />
                  )}
                  {/* Icon rendering */}
                  <Icon
                    specificTask={searchitem}
                    tasks={searchItems}
                    changeTasks={setSearchItems}
                  />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  )}
</div>


      </div>
  );
}
