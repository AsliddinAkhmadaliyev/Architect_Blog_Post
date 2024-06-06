import { Card }   from '@material-tailwind/react';
import { AboutMe, BlogPost, Home, Portfolio, Services } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <Card className="bg-fixed relative banner h-screen w-full rounded-none flex items-center justify-start">
      <Navbar/>
      <div className='bg-fixed author__fon w-full'>
        <Home/>
      </div>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <BlogPost/>
    </Card>
  )
}

export default App;