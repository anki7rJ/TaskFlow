import { useEffect } from "react";

export default function Modal({ children, onClose }) {

    useEffect(()=>{
      function handleKeyDown(e){
        if(e.key==='Escape'){
          onClose()
        }
      }

      window.addEventListener("keydown",handleKeyDown)

      return ()=>{
        window.removeEventListener("keydown",handleKeyDown)
      }
    },[onClose])

    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}

