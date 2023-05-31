let actvlink = document.querySelectorAll('.leftgroup>ul>li>a')

actvlink.forEach(a => {
    a.addEventListener('click', function(){
        actvlink.forEach(anc => anc.classList.remove('active'));
        this.classList.add('active');
    });
});