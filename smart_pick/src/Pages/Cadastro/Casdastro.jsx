import React from 'react'
import Style from './Cadastro.module.css'

import Input from '../../Form/Input';
import Button from '../../Form/Button';

function Cadastro() {

  return (
    <div className={Style.body}>
      <h1>Cadastrar</h1>

        <form>

          
          <Input
            type="Text"
            name="txt_categoria"
            id="txt_categoria"
            placeholder="Digite o nome da categoria"
            />

          <Input 
            type="Text"
            name="txt_item"
            id="txt_item"
            placeholder="Digite o nome do item"
            />

          <Input 
            type="Text"
            name="txt_item"
            id="txt_item"
            placeholder="Digite o nome do item"
            />

          <Input 
            type="Text"
            name="txt_item"
            id="txt_item"
            placeholder="Digite o nome do item"
            />

          <Button
            label="Cadastrar Sorteio"
            />

        </form>

    </div>
  );

};

export default Cadastro;