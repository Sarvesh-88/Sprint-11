import React from 'react'; 
interface InputProps { label: string; placeholder?: string; id: string; } 
export const Input = ({ label, placeholder, id }: InputProps) => { 
  return ( 
    <div className="input-group"> 
      <label htmlFor={id}>{label}</label> 
      <input id={id} type="text" placeholder={placeholder} /> 
    </div> 
  ); 
}; 
