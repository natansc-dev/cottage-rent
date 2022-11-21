import { CardHero, ContainerHero, ContentHero, FormGroup, FormHero, ImageContainer, SectionHero } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import logoImg from '../../assets/logo.png'
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string(),
  start_at: z.date(),
  end_at: z.date(),
});

type PreRegisterFormInputs = z.infer<typeof formSchema>

export function Hero() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function handlePreRegister(data: any) {
    console.log(data)
  }

  return (
    <SectionHero>
      <ContainerHero>
        <ContentHero>
          <CardHero>
            <ImageContainer>
              <Image src={logoImg} alt="Logo Chácara Kairós, no final da palavra Kairós tem um relógio minimalista em número romanos." width={320} />
            </ImageContainer>
            <p>
              Preencha o formúlario abaixo!
            </p>

            <FormHero onSubmit={handleSubmit(handlePreRegister)}>
              <label htmlFor="full-name">Nome Completo</label>
              <input
                id="full-name"
                type="text"
                placeholder="João Silva"
                {...register('name')}
              />

              <label htmlFor="phone">Celular</label>
              <input
                id="phone"
                type="text"
                placeholder="+55 (00) 00000-000"
                {...register('phone')}
              />

              <FormGroup media={{ '@lg': 'lg' }}>
                <div>
                  <label htmlFor="phone">Data inicial</label>
                  <input
                    type="date"
                    {...register('start_at', { valueAsDate: true })}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Data final</label>
                  <input
                    type="date"
                    {...register('end_at', { valueAsDate: true })}
                  />
                </div>
              </FormGroup>

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </FormHero>
          </CardHero>
        </ContentHero>
      </ContainerHero>
    </SectionHero>
  )
}