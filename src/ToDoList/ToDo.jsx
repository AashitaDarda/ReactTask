import React, { useState } from "react";
import List from "./List";
import Alert from "./AlertTodo";

const ToDo = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIdEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({show: false, msg:"", type: ""});

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name){
        showAlert(true,"danger","Please Enter To-do Items");
      } else if(name && isEditing){
        setList(
          list.map((item) => {
            if(item.id === editId){
              return {...item, title:name}
            }
            return item
          })
        );
        setName("");
        setEditId(null);
        setIdEditing(false);
        showAlert(true, "success" , "Item Updated");
      }
      else{
        showAlert(true, "success", "Item Added to the List");
        const newItem = {id: new Date().getTime().toString(), title:name};
        setList([...list, newItem]);
        setName("");
      }
    };
    const showAlert = (show = false, type = "" ,msg="") => {
      setAlert({show, type, msg});
    };
    const deleteItems = (id) => {
      showAlert(true, "danger", "Item Deleted");
      setList(list.filter((item) => item.id !== id))
    };
    const editItems = (id) => {
      const editItem = list.find((item) => item.id === id);
      setEditId(id);
      setIdEditing(true);
      setName(editItem.title);
    };
    const clearList = () => {
      showAlert(true, "danger","All items are removed from list");
      setList([]);
    };

    return(
        <div className="Todos">
            <br /><br />
            <section className="section-center">
                <form onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                    <div className="center_div">
                        <h1>ToDo List</h1>
                    </div>
                    <div className="mb-3 todoform">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Items... "
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        />
                        <button type="submit" className="btn btn-success align-right mx-3">
                            {isEditing ? "Edit" : "Add Task"}
                        </button>
                    </div> 
                </form>
                <hr />
                {list.length > 0 &&(
                    <div style={{marginTop:"2rem"}} className="center_div">
                        <List Items={list} deleteItems={deleteItems} editItems={editItems} />
                        <div className="text-center">
                            <button className="btn btn-warning my-3" onClick={clearList}>
                                    Clear Items
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <br /><br />
        </div>
        
    )
};

export default ToDo;