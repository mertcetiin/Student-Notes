import React, { useState } from 'react';

function Note() {
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const skor = e.target.skor.value;

        if (!name || !skor) {
            return;
        }

        const newStudents = { name, skor };
        setStudents([...students, newStudents]);

        e.target.name.value = '';
        e.target.skor.value = '';
    }

    const onFilter = (e) => {
        setFilter(e.target.value);
    }

    const filteredStudents = students.filter((eleman) =>
        eleman.name.toLowerCase().includes(filter.toLowerCase())
    );

    const onSort = () => {
        const sortedStudents = [...students].sort((a, b) => b.skor - a.skor)
        setStudents(sortedStudents);
    }

    return (
        <div>
            <input placeholder='Filter' onChange={onFilter} />
            <br />
            <br />
            <form onSubmit={onSubmit}>
                <input name='name' placeholder='İsim gir' />
                <input type='number' name='skor' placeholder='Notu gir' />
                <button className='add' type='submit'>Add</button>
                {
                    filteredStudents.map((item, id) => (
                        <div key={id}>
                            <h2>{item.name}</h2>
                            <p>Note: {item.skor}</p>
                        </div>
                    ))
                }
            </form>
            <br />
            <br />
            <button className='sort' onClick={onSort}>Sort by (High to Low)</button>
        </div>
    )
}

export default Note;
