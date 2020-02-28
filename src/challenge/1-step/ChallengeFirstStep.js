import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Form,
  Select,
  Subtext,
  FiguresBlock,
  Subtitle,
  FiguresItem,
  TopContainer,
} from './ChallengeFirstStep.style.js';
import { ActionButton } from '../components/ActionButton';

export const ChallengeFirstStep = ({ saveAndNextStep, duration, name }) => {
  const numbers = [
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
  ];
  const [durationSaved, setDurationSaved] = useState(duration);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data first step', data);
    const { name } = data;
    saveAndNextStep({ name, duration: durationSaved });
  };

  // console.log('errors', errors);

  return (
    <>
      <TopContainer>
        <img src="/img/baslessteaks.png" alt="title" />
        <Subtitle>LE CHALLENGE</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <span>Je défie </span>
          <Input
            name="name"
            ref={register}
            defaultValue={name}
            // ref={register({
            //   required: { value: true, message: 'Le prénom est obligatoire.' },
            //   maxLength: {
            //     value: 10,
            //     message: 'Le prénom ne peut pas dépasser 10 caractères',
            //   },
            //   pattern: {
            //     value: /^[A-Z][A-Za-z\é\è\ê\-]+$/i,
            //     message: 'Le prénom n’est pas valide',
            //   },
            // })}
            placeholder="Michel"
          />
          <br />
          <span> de se passer de viande pendant </span>
          <Select
            name="duration"
            ref={register}
            onChange={e => setDurationSaved(e.target.value)}
            defaultValue={durationSaved}
          >
            {numbers.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Select>
          <span> jours.</span>
          {errors?.name?.type && errors?.name?.message && (
            <p>{errors.name.message}</p>
          )}
          <div style={{ margin: '30px 0' }}>
            <ActionButton type="submit" color="#FF7793">
              SUIVANT
            </ActionButton>
          </div>
          <Subtext>Michel en sera-t-il capable ?</Subtext>
        </Form>
      </TopContainer>
      <FiguresBlock>
        <FiguresItem>
          <div>
            <img src="/img/home1.png" alt="-50%" />
          </div>
          <span style={{ marginLeft: '10px' }}>
            D’émissions de CO2 alimentaire pendant le défi
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '30%' }}>
            <img src="/img/home2.png" alt="2/3" />
          </div>
          <span style={{ marginLeft: '10px' }}>
            Des participants diminuent leur consommation de viande après le défi
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '25%' }}>
            <img src="/img/home3.png" alt="743" />{' '}
          </div>
          <span style={{ marginLeft: '10px' }}>
            Steaks épargnés depuis le lancement  de Bas Les Steaks
          </span>
        </FiguresItem>
      </FiguresBlock>
      <div>
        <img src="/img/commentmarche.png" />
      </div>
    </>
  );
};
