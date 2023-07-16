import React from 'react'
import { useState } from 'react'

function Home() {

    const [name, setName] = useState([])
    const [todo, setTodo] = useState('')
    const date = new Date();
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div className="app">
            <div className="mainHeading">
                <h1>TODO..</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoops, it's {day} 🌝  </h2>
            </div>
            <div className="input">
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." />
                <i onClick={() => setName([...name, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
            </div>
            <div className="todos">
                {
                    name.map((data) => {
                        console.log(data, "data from maap")
                        return (
                            < div className="todo" >
                                <div className="left">
                                    <input type="checkbox" onChange={(e) => {
                                        const updated = name.map((item) => {
                                            if (item.id === data.id) {
                                                const new1 = {
                                                    ...item,
                                                    status: !item.status
                                                }
                                                return new1
                                            }
                                            return item

                                        })
                                        setName(updated)
                                    }}
                                    />
                                    <p>{data.text}</p>
                                </div>
                                <div className="right">

                                    <button className="fas fa-times"
                                        onClick={(e) => {
                                            const deleted = name.filter((item) => item.id !== data.id)
                                            alert("Delete the task?");
                                            setName(deleted);
                                        }

                                        }
                                    >
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );

}


export default Home
