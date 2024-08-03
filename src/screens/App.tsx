import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {SafeAreaView, Text} from 'react-native'
import {RecoilRoot} from 'recoil'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView>
          <Text>baseball</Text>
        </SafeAreaView>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
