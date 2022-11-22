import { CardHero, ContainerHero, ContentHero, FormGroup, FormHero, ImageContainer, SectionHero } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import logoImg from '../../assets/logo.png'
import Image from "next/image";
import { api } from "../../lib/axios";

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
  } = useForm<PreRegisterFormInputs>({
    resolver: zodResolver(formSchema),
  });

  async function handlePreRegister(data: PreRegisterFormInputs) {
    const { name, phone, start_at, end_at } = data
    try {
      const response = await api.post('interests', {
        name,
        phone,
        start_at,
        end_at
      })

      toast.success('Sua solitação foi enviada com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error('Ops...Sua solitação deu erro! Tente novamente.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <SectionHero>
      <ContainerHero>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ContentHero>
          <CardHero>
            <ImageContainer>
              <Image src={logoImg} alt="Logo Chácara Kairós, no final da palavra Kairós tem um relógio minimalista em número romanos." width={320} />
            </ImageContainer>
            <p>
              Envie um solitação de interesse, preencher o formulário abaixo:
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