import {GlobalStyle} from '@/styles/GlobalStyle'
import {theme} from '@/styles/theme'
import {ComponentType, PropsWithChildren, ReactNode} from 'react'
import {SafeAreaView} from 'react-native'
import {ThemeProvider} from 'styled-components/native'

function Layout({children}: PropsWithChildren<{children: ReactNode}>) {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={GlobalStyle.root}>{children}</SafeAreaView>
    </ThemeProvider>
  )
}

export default Layout

export function withLayout<P>(Component: ComponentType<P>) {
  type WithLayoutProps = {
    children?: ReactNode
  } & P
  const WithLayout: ComponentType<WithLayoutProps> = (props: WithLayoutProps) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return WithLayout
}
