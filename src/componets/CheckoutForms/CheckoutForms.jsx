import { useState } from "react"


export const CheckoutForms = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPhone, setConfirmPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    const handleConfirm = (e) =>{
        e.preventDefault()

        if (email !== confirmEmail) {
            alert('Los correos electrónicos no coinciden.');
            return;
        }

        if (phone !== confirmPhone) {
            alert('Los números de teléfono no coinciden.');
            return;
        }

        if (!name || !phone || !confirmPhone || !email || !confirmEmail) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

  return (
    <div className="container">
        <form onSubmit={handleConfirm}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" value={name} onChange={({target})=> setName(target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="number" className="form-control" value={phone} onChange={({target})=> setPhone(target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar Telefono</label>
                <input type="number" className="form-control" value={confirmPhone} onChange={({target})=> setConfirmPhone(target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={({target})=> setEmail(target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar Email</label>
                <input type="email" className="form-control" value={confirmEmail} onChange={({target})=> setConfirmEmail(target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Crear Orden</button>
        </form>
    </div>
  )
}