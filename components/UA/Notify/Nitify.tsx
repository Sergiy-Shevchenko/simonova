'use client'
import Clock from '../../../public/clock.svg'
import { toast } from "react-toastify";

    const Notify = () => {

      const notify = () => { toast.success('Працюємо', {
            icon: Clock,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
      )}
        return (
            // <div className='container'>
            //           <button onClick={notify}>Ж М И</button>
            // </div>
<>``</>
            
            )
    }
    
    export {Notify}   
    

   
