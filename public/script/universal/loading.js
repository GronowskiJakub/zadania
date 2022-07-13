let blocks = {}
export function isLoading(el){
    let place = document.querySelector(el)
    let block = document.createElement('div');
    block.setAttribute('id', 'loading-block');

    place.appendChild(block)
    blocks[el] = block
}
export function isLoaded(el){
    blocks[el].remove()
}