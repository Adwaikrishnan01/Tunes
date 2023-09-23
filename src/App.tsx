
import * as React from 'react'
import { useGetTrackByIdQuery } from './redux/services/services'
import { useGetGenreQuery } from './redux/services/services'
import { Card, CardFooter, Image, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {useState,useEffect} from 'react'



  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetTrackByIdQuery()


  const GenreCard: React.FC = () => {
  
    const [genres,setGenres]=useState([])
    const { data, error, isLoading } = useGetGenreQuery()
    
   
    
    useEffect(() => {
      if (data) {
        setGenres(data.content.items);
      }
    }, [data]);
    console.log("should", data);
    return (<>
      <div className='h-full flex flex-1'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>{genres.map((genre,index)=>(
            <div className='p-3 pb-10 bg-slate-800 inline-block rounded-md mr-3' key={index}>
              <Card isFooterBlurred className="w-72 h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                  <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover rounded-md"
                  src={genre?.images[0]?.url}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 
                border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center justify-center">
                    <p className="text-tiny text-white ">{genre.name}</p>
                  </div>
                </CardFooter>
              </Card></div>
          ))}
            
          </>
        ) : null}
      </div>

    </>)
  }


  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  const ContainerRow: React.FC = () => {
    return (
      <div className='flex p-4 overflow-scroll bg-slate-700'>
        <GenreCard />
      </div>
    )
  }
const App: React.FC = () => {
  return (
    <div className="App">

      <ContainerRow />

    </div>

  )
}
export default App