import { CardHero, ContainerHero, ContentHero, FormHero, SectionHero } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  phone: z.number().min(10),
  rg: z.number().min(10),
  cpf: z.number().min(10),

  cep: z.number().min(10),
  address: z.number().min(10),
  city: z.number().min(10),
  district: z.number().min(10),
});

export function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <SectionHero>
      <ContainerHero>
        <ContentHero>
          <CardHero>
            <h1>
              Chácara Kairós!
            </h1>

            <p>
              Preencha o formúlario abaixo!
            </p>

            <FormHero onSubmit={handleSubmit(d => console.log(d))}>
              <input type="text" placeholder="Nome" {...register('name')} />
              <input type="text" placeholder="Celular" {...register('phone')} />
              <input type="text" placeholder="RG" {...register('rg')} />
              <input type="text" placeholder="CPF" {...register('cpf')} />

              <input type="text" placeholder="CEP" {...register('cep')} />

              {/* <input type="text" placeholder="Endereço" {...register('address')} />
              <input type="text" placeholder="Cidade" {...register('city')} />
              <input type="text" placeholder="Bairro" {...register('district')} />
               */}

              <button type="submit">
                Enviar mensagem
              </button>
            </FormHero>
          </CardHero>
        </ContentHero>
      </ContainerHero>
    </SectionHero>
  )
}