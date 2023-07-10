"use client"
import React, { useState } from 'react';1
import styles from './carta.module.css';
import clasecarta from "./cartaclase";
import { useDrag } from 'react-dnd';
interface CartaProps {
    carta:clasecarta,
    movible:boolean
  }
const Carta: React.FC<CartaProps> = ({carta,movible}) => {
  const imagen = `/carta_${carta.getColor()}.png`;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'draggable',
    item:carta,
    canDrag : movible,

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className={styles.carta} ref={drag} >
      <img src={imagen} alt={carta.getColor()} />
      {carta.getTipo() != "duelos" && <span>{carta.getNumero()}</span>}
    </div>
  );
};


export default Carta;
