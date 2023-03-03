"use client";
import './globals.css'
import { HeaderBackground, Header, HeaderTitle, HeaderButtons, Footer} from './styles'
import styled from 'styled-components'
import { user, add } from './components/icons';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <title>Ecommerce</title>
      </head>
      <body>
          <HeaderBackground/>
          <Header>
            <HeaderTitle>
              <h1>Online-Shop</h1>   
            </HeaderTitle> 
            <HeaderButtons>
                  <button className="RegisterLogin">
                    <span>
                      <Image src={user} alt="ícone de usuário" width={57} height={44}/>
                      <p>Register/Login</p>
                    </span>
                  </button>
                  <button className="Sell">
                    <span>
                      <Image src={add} alt="ícone de adicionar" width={57} height={44}/>
                      <p>Sell</p>
                    </span>
                  </button>
            </HeaderButtons>
          </Header>
          {children}
          <Footer>
          </Footer>
      </body>
    </html>
  )
}
