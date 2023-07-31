import React from 'react'
import { useState } from 'react'

function Note() {

    const [students, setStudents] = useState([]);

    return (
        <div>
            <input placeholder='Filter' />
            <br />
            <br />
            <form>
                <input name='name' placeholder='İsim gir' />
                <input name='skor' placeholder='Notu gir' />
                <button>Add</button>
            </form>
            <br />
            <br />
            <button>Sırala</button>

        </div>
    )
}

export default Note