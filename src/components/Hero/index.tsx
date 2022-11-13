import { CardHero, ContainerHero, ContentHero, SectionHero } from "./styles";

export function Hero() {
  return (
    <SectionHero>
      <ContainerHero>
        <ContentHero>
          <CardHero>
            <h1>
              Oportunidade única para você conquistar o seu imóvel!
            </h1>

            <p>
              Fale com o nosso corretor, Murilo Ramos, sempre que precisar!
            </p>

            <button type="submit">
              Enviar mensagem
            </button>
          </CardHero>
        </ContentHero>
      </ContainerHero>
    </SectionHero>
  )
}