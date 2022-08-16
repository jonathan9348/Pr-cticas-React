import React, {useState} from 'react'

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
  return (
    <div>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='Nombre'>Nombre</label>
            <input type="text" 
                   id="nombre" 
                   name="nombre"
                   value={form.nombre}
                   onChange={handleChange}/>
                   <input type="submit"/>
        </form>
    </div>
  )
}
