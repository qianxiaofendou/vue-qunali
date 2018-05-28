import { window } from 'ssr-window'
const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver
const observer = (el, target, options) => {
    console.log(el)
    const mutationObserver = new ObserverFunc((mutations) => {
        mutations.forEach((mutation) => {
            console.log('aa', el.slide)
        //   swiper.emit('observerUpdate', mutation)
        })
    })

    mutationObserver.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    })
}

export default observer
