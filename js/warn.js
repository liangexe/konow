const warn = document.querySelector('.warn')
const warp = document.querySelector('.warn p')

    warn.addEventListener('click', function () {

        warn.classList.toggle('add');

        if(warn.classList.contains('add')){

        setTimeout(() => {
            warp.classList.add('opc');
        }, 800)

        } else if (warp.classList.contains('opc')) {

            warp.classList.remove('opc')

            setTimeout(() => {

                warn.classList.remove('add')

            }, 700)
        }

});