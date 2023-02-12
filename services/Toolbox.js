class Toolbox{

    static formHandler(selector,fun){
        let formElement = document.querySelector(selector);
        formElement.addEventListener('submit', e=>{
            e.preventDefault();
            console.log(formElement.elements)
            const data = Array.from(formElement.elements)
                .filter(item =>!item.name)
                .map(element=>{
                    const {name,value} = element;
                    return{name,value};
                })
        })
    }
}