import React from 'react'; 
interface CardProps { title: string; content: string; } 
export const Card = ({ title, content }: CardProps) => { 
  return ( 
    <div className="card-container" data-testid="card-wrapper"> 
      <h2>{title}</h2> 
      <p>{content}</p> 
    </div> 
  ); 
}; 
