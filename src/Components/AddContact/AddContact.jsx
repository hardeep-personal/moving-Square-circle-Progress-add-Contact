import React, { useEffect, useState } from 'react'


const AddContact = () => {

    const [items, setItems] = useState([]);
    var [i, setI] = useState(0);
    const contacts = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eva",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Julia",
        "Kevin",
        "Linda",
        "Michael",
        "Nora",
        "Oliver",
        "Pamela",
        "Quincy",
        "Rachel",
        "Samuel"

    ] // Initialize a state for the new item input

    const handleAddItem = () => {


        if (i > contacts.length - 1) {
            setI(0)
        } else {
            items.push(contacts[i]);

            setItems((prevItems) => [...prevItems]);
            setI(() => i++)
        }


    };

    const removeItem = (i) => {

        items.splice(i, 1)
        setItems(() => [...items]);





    }






    return (
        <>
            <div className=' w-full bg-slate-200 ' >
                <div className='text-center '>

                    <button onClick={handleAddItem} className='bg-cyan-600 text-white px-4 py-3 rounded my-5' >+ Add Contacts</button>
                    <ul className='w-2/4 flex flex-col justify-start m-auto h-80 overflow-auto'>
                        {items.map((item, index) => (

                            <div className='flex justify-between bg-white p-4 mt-2 rounded ' key={index}>
                                <div  >{item}</div>
                                <button onClick={() => { removeItem(index) }}>X</button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AddContact