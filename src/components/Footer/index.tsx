import { ContainerFooter } from './styles'
import logoImg from '../../assets/logo.png'
import Image from 'next/image'


export function Footer() {
  return (
    <ContainerFooter media={{ "@lg": 'lg' }}>
      <Image src={logoImg} alt="Logo Chácara Kairós, no final da palavra Kairós tem um relógio minimalista em número romanos." width={320} />
      <p>&copy; Copyright 2022 - Sweetspot Mídia</p>
    </ContainerFooter>
  )
}