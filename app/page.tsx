'use client'
import React from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const testeapi = () => {

  const { register, setValue } = useForm();

  function buscarCep(event) {
    const buscarCEP = event.target.value

    if (buscarCEP.length == 8) {

      axios.get('https://viacep.com.br/ws/' + buscarCEP + '/json/').then(resultado => {
        const lista = resultado.data

        setValue('unidade', lista.uf)
        setValue('estado', lista.estado)
        setValue('localidade', lista.localidade)
        setValue('região', lista.regiao)
        setValue('logradouro', lista.logradouro)

      })
      
    } else {
      setValue('unidade', '')
      setValue('estado', '')
      setValue('localidade', '')
      setValue('região', '')
      setValue('logradouro', '')
    }
  }
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" >Teste API</a>
          </div>
        </nav>
        <hr></hr>
        <br></br>
        <div className='rounded  shadow'>

          <Form>
            <Form.Group className="mb-3 m-2 pt-2" controlId="buscarCEP">
              <Form.Label>Digite o CEP:</Form.Label>
              <Form.Control type="text" {...register("buscarsCEP")} onChange={buscarCep} />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="tempoativacao">
              <Form.Label>unidade:</Form.Label>
              <Form.Control type="text" {...register("tempoativacao")} />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="espacolivrec">
              <Form.Label>estado:</Form.Label>
              <Form.Control type="text" {...register("espacolivrec")} />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="espacolivred">
              <Form.Label>localidade:</Form.Label>
              <Form.Control type="text" {...register("espacolivred")} />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="cargacpu">
              <Form.Label>região:</Form.Label>
              <Form.Control type="text" {...register("cargacpu")} />
            </Form.Group>

            <Form.Group className="mb-3 m-2" controlId="memoriafisica">
              <Form.Label>logradouro:</Form.Label>
              <Form.Control type="text" {...register("memoriafisica")} />
            </Form.Group>

          </Form>

        </div>

        <br></br>
        <hr></hr>
      </div>
    </>
  )
}

export default testeapi
