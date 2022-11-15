import { CardHero, ContainerHero, ContentHero, FormGroup, FormHero, SectionHero } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  phone: z.number().min(10),
  start_at: z.number().min(10),
  end_at: z.number().min(10),
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
              <label htmlFor="full-name">Nome Completo</label>
              <input id="full-name" type="text" placeholder="João Silva" {...register('name')} />

              <label htmlFor="phone">Celular</label>
              <input id="phone" type="text" placeholder="+55 (00) 00000-000" {...register('phone')} />

              <FormGroup media={{ '@lg': 'lg' }}>
                <div>
                  <label htmlFor="phone">Data inicial</label>
                  <input type="date" {...register('start_at')} />
                </div>

                <div>
                  <label htmlFor="phone">Data final</label>
                  <input type="date" {...register('end_at')} />
                </div>
              </FormGroup>

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