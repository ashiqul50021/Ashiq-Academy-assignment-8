import React from 'react';
import './Group.css'

const Group = (props) => {
    const { group } = props;
    let totalQuantity = 0;
    let total = 0;
    // console.log(props.group)

    for (const teachers of group) {
        if(!teachers.quantity){
            teachers.quantity = 1;
        }
        total = total + teachers.sellary * teachers.quantity;
        totalQuantity = totalQuantity + teachers.quantity;
    }
    
    return (
        <div>
            <h3>Summary</h3>
            <h5>Teacher: {totalQuantity}</h5>
            <p>Total:$ {total}</p>
            <p>Added Teacher</p>
            <hr />
            {
                group.map(teachers => (
                    <div className="teacher">
                        <div><p className="t-name">{teachers.name}</p></div>
                        <div><img className="t-img" src={teachers.img} alt="" /></div>
                        <br />
                    </div>
                    
                ))
            }
        </div>
    );
};

export default Group;