import { CardHero, ContainerHero, ContentHero, FormGroup, FormHero, ImageContainer, SectionHero, WhatsAppButton } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import logoImg from '../../assets/logo.png'
import Image from "next/image";
import { api } from "../../lib/axios";
import InputMask from "react-input-mask";
import { WhatsappLogo } from "phosphor-react";
import { format, formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string(),
  start_at: z.date(),
  end_at: z.date(),
});

type PreRegisterFormInputs = z.infer<typeof formSchema>

export function Hero() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PreRegisterFormInputs>({
    resolver: zodResolver(formSchema),
  });

  async function handlePreRegister(data: PreRegisterFormInputs) {
    const { name, phone, start_at, end_at } = data
    try {
      await api.post('interests', {
        name,
        phone,
        start_at,
        end_at
      })

      toast.success('Sua solitação foi enviada com sucesso! Você será direcionado para nosso WhatsApp', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      reset()

      const whatsAppButton = document.getElementById("whatsapp") as HTMLAnchorElement

      const messageWhatsApp = `https://wa.me/5519997193094?text=Oi, me chamo ${name}, tudo bom?%0A interessado em reserva na seguinte data: ${format(new Date(start_at), 'dd/MM/yyyy')} - ${format(new Date(end_at), 'dd/MM/yyyy')}%0A%0APoderia me dar mais informações.`
      whatsAppButton.href = messageWhatsApp

      whatsAppButton.click()
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
    <>
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
                  required
                  {...register('name')}
                />

                <label htmlFor="phone">Celular</label>
                <InputMask
                  type="text"
                  mask="+5\5 (99) 9 9999-9999"
                  maskChar=" "
                  placeholder="(00) 0 0000-000"
                  required
                  {...register('phone')}
                />

                <FormGroup media={{ '@lg': 'lg' }}>
                  <div>
                    <label htmlFor="start_at">Data inicial</label>
                    <input
                      id="start_at"
                      type="date"
                      required
                      {...register('start_at', { valueAsDate: true })}
                    />
                  </div>

                  <div>
                    <label htmlFor="end_at">Data final</label>
                    <input
                      id="end_at"
                      type="date"
                      required
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

      <WhatsAppButton id="whatsapp" href="">
        <WhatsappLogo size={32} color="white" />
      </WhatsAppButton>
    </>
  )
}
