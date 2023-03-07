import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
// Types
import { CartoonType } from './Root';

export const cartoonLoader = async ({ params }: LoaderFunctionArgs): Promise<CartoonType> => {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  if (!results.ok) throw new Error('Something went wrong!');

  const cartoon = await results.json();

  return cartoon;
};

const Cartoon = () => {
  const cartoon = useLoaderData() as CartoonType;

  return (
    <>
      <h2>{cartoon.name}</h2>
      <img src={pokemon.sprites.front_default} />
    </>
  );
};

export default Cartoon;