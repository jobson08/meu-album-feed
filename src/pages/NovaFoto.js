import React, { Component } from 'react'
import './NovaFoto.css'
import {
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Card,
    CardBody,
  } from "reactstrap";
export class NovaFoto extends Component {
    render() {
        return (
 <div className="Nova-foto container">
    <Card className="Card-input">
      <CardBody>
        <form>

          <FormGroup>
            <Label for="tipoTitulo">Titulo</Label>
            <Input type="text" name="Titulo" id="tipoTitulo" placeholder="Titulo" />
            <FormText color="muted">
              Digite o titulo da imagens.
            </FormText>
          </FormGroup>

      <FormGroup>
            <Label for="tipoDescricao">Descrição</Label>
            <Input type="text" name="descricao" id="tipoDescricao" placeholder="Descrição" />
            <FormText color="muted">
              Digite a descrição da imagens.
            </FormText>
     </FormGroup>

          <div>
            <Label for="exampleEmail">Imagens</Label>
            <Input type="file" name="email"id="exampleEmail" />
            <FormText color="muted">
             Adiciona uma Imagens
            </FormText>
          </div>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  </div>
        )
    }
}

export default NovaFoto
