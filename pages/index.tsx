import { NextPage } from "next";
import { Button } from '@nextui-org/react'; 
import { Layout } from '../components/layouts'

const HomePage:NextPage = () =>{
  return(
    <Layout>
      <Button color='gradient'>Click Me</Button>
    </Layout>
  )
}

export default HomePage; 
