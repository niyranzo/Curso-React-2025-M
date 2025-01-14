import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

const stateInitial = {
    nombre:'',
    email:'',
    password:''
}

const RegistrarFormulario = () =>{
    const [formData, setFormData] = useState({stateInitial})
    const handlerSubmit = (e) =>{
        e.preventDefault();
        //validacion basica
        if(!formData.nombre.trim() || !formData.email.trim() || !formData.password.trim()){
            toast.error(`Datos incompletos`);
            return;
        }
        console.log("Datos completos");
        console.log(formData.nombre, formData.email, formData.password);
        toast.success(
            `Usuario Registrado con exito con el nombre: ${formData.nombre}`
        )

        //reiniciamos el estado a su valor inicial

        setFormData(stateInitial)
    }

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div className="max-w-md mx-auto p-6">
            <ToastContainer/>
            <form className="p-6 bg-white shadow-lg rounded-lg" onSubmit={handlerSubmit}>
                <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Registrar Usuario</h2>
                <div className="mb-4">
                    <label className="block text-gary-700 font-medium mb-2">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleInputChange} 
                        className="w-full px-3 border rounded-lg focus:outline-none focus:ring-blue-500" 
                        placeholder="Ingrese su nombre"
                    />

                    <label className="block text-gary-700 font-medium mb-2">Email</label>
                    <input 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange}  
                        name="email" 
                        className="w-full px-3 bprder" 
                        placeholder="Ingrese su email"
                    />

                    <label className="block text-gary-700 font-medium mb-2">Password</label>
                    <input 
                        type="password" 
                        value={formData.password} 
                        onChange={handleInputChange}  
                        name="password" 
                        className="w-full px-3 border" 
                        placeholder="Ingrese su password"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white rounded-lg">
                    Enviar
                </button>
            </form>
        </div>
        
    )
}
export default RegistrarFormulario