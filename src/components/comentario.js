import React from "react";
import { formatRelative } from "date-fns";
import {ptBR} from 'date-fns/locale'
import "./comentario.css"
import imagemUsuario from './user3.png'

//JSX
//childrem pega os filhos daquele component comentário
const Comentario = (props) => (
    <div className="Comentario">
        <input
              type="checkbox"
              checked={props.selecionado}
              onClick={props.onClick}
              className="checkbox"
            />
        <img className="avatar" src={imagemUsuario} alt={props.nome} />
        
        <div className="conteudo">
            <h2 className="nome">{props.nome}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{formatRelative(props.data, new Date(), { locale: ptBR} )}</p>
            <button type="button" className="button" onClick={props.onRemove}>&times;</button>
        </div>
    </div>

);

export default Comentario;