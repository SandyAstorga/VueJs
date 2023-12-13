import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    test('Debe de hacer match con el snapshot', () => {
        
        // const wrapper = shallowMount( Counter)
        expect ( wrapper.html() ).toMatchSnapshot()

    })

    test('h2 debe de tener el valor por defecto "Counter', () => {
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        console.log( h2Value )

        expect( h2Value ).toBe('Counter')
    })

    test('El valor por defecto debe ser 100 en la etiqueta p ', async () => {
        
        //Wrapper

        //pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        // console.log(pTags)
        console.log(value)

        // expect segundo p === 100
        // expect(pTags[1].text()).toBe('100')
        expect( value ).toBe('100')
    })
    
    test('Debe de incrementar y decrementar el valor del contador ', async () => {
        
        const [incrementBtn, decrementBtn ] = wrapper.findAll('button')

        await incrementBtn.trigger('click')
        await incrementBtn.trigger('click')
        await incrementBtn.trigger('click')
        await decrementBtn.trigger('click')
        await decrementBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')

    })

    test('Debe establecer el valor por defecto', () => {

        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        console.log(start)

        expect(Number(value)).toBe(start)
    })

    test('Debe mostrar la prop de title ', () => {
        
        const title = 'Hello'
        const wrapper = shallowMount( Counter, {
            props: {
                title,
            }
        } )
        console.log(wrapper.html())
        expect(wrapper.find('h2').text()).toBe(title)
    }) 
    
    

})