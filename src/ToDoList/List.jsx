import React from "react";
import {FaEdit,FaTrash} from "react-icons/fa";

const List = ({Items, deleteItems, editItems}) => {
    return(
        <div className="List container">
            {Items.map((item) => {
                const {id,title} = item;
                return(
                    <ul className = "list-group list-group-flush" key={id}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {title}
                            <div style={{float: "right"}}>
                            <button className="edit-btn" 
                                type="button"
                                onClick={() => editItems(id)}>
                                    <FaEdit />
                                </button>
                                <button className="delete-btn" 
                                type="button"
                                onClick={() => deleteItems(id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </li>

                    </ul>
                )
            })}
        </div>
    )
}

export default List