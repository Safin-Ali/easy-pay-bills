
const handleDynaForm = func => ev => {
    ev.preventDefault();
    const form = ev.target;
    const filterChildrenInput = form.getElementsByTagName('input');
    if (!filterChildrenInput.length) return console.error('children has not input element');
    const initObj = {};
    const inputCollections = Array.from(filterChildrenInput);
    const filterNameInputOnly = inputCollections.filter(elm => !!elm.name);
    filterNameInputOnly.forEach(elm => {
        if(elm.files) return initObj[elm.name] = elm.files;
        initObj[elm.name] = elm.value
    });
    if (!Object.keys(initObj).length) return console.warn("Sorry :( can't return value!!! \n Reasone ==> can't findout input element. please add input element name attribute with unique value");
    const clearForm = () => form.reset();
    return func(initObj,clearForm,form)
};

export default handleDynaForm;