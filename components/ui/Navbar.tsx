import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {

    const { theme } =  useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value,
    }}>
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            alt="Pokemon Logo"
            width={70}
            height={70}
        />
        
        <Link href='/' passHref style={{display:'flex'}}>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon App</Text>   
        </Link>

        <Spacer css={{ flex:1 }}/>    
        <Link href='/favorites'>
            <Text color="white" h5>Favoritos</Text>    
        </Link>
        

    </div>
  )
}