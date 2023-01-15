import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/children/ProductCard'
import { getPizzas } from '../Redux/features/pizzas/pizzaasThunk'

const Menu = () => {
    // const sousesArr = useSelector(state => state.souses.souses)
    const {burgers, status} = useSelector(state => state.burgers)
    const dispatch = useDispatch();
    // const newArr = useSelector(state => state.desserts.desserts)
    // const pizzas = useSelector(state => state.pizzas.pizzas)
    // const salads = useSelector(state => state.salads.salads)
    // const liquids = useSelector(state => state.liquid.liquids)

    useEffect(() => {

        if(burgers.length === 0) {
            dispatch(getPizzas())
        }

    }, []);

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10'>
            <h1 className='text-5xl'>Our menu</h1>
            <div className="container grid grid-cols-4 max-xl:grid-cols-3 mt-[90px] max-lg:grid-cols-1 gap-5 px-6 max-lg:mt-16 max-md:grid-cols-2 max-[540px]:grid-cols-1">
                {
                    burgers.length == 0 ? <h1>{status}</h1> :
                    burgers.map(item => <ProductCard key={item.id} item={item} />)
                }
                {/* {newArr.map(item => <ProductCard key={item.id} item={item} />)}
                {sousesArr.map(item => <ProductCard key={item.id} item={item} />)}
                {pizzas.map(item => <ProductCard key={item.id} item={item} />)}
                {salads.map(item => <ProductCard key={item.id} item={item} />)}
                {liquids.map(item => <ProductCard key={item.id} item={item} />)} */}
            </div>
        </div>
    )
}
export default Menu