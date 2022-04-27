
const mutationObserver = new MutationObserver(entries => {

    var navbarinnerHTML = document.querySelector("#profile_legend_account").innerHTML
    if (navbarinnerHTML === "caisse-epargne") {
        document.querySelector("#main_navigation > div.nui-main-header > div").style.background = "#e10808"
    }
    else (
        document.querySelector("#main_navigation > div.nui-main-header > div").style.background = ""
    )
    if (navbarinnerHTML === "caisse-epargne" && document.querySelector("#mainHeader > div") != null) {
        document.querySelector("#mainHeader > div").style.background = "#e10808"
    }

})

window.addEventListener("load", function () {
    // FOR SERVERSIDE
    if (window.name === 'datacloud') {
        setTimeout(() => {
            var navbarinnerHTML = document.querySelector("#profile_legend_account").innerHTML
            if (navbarinnerHTML === "caisse-epargne") {
                document.querySelector("#mainHeader > div").style.background = "#e10808"
            }
            else (
                document.querySelector("#mainHeader > div").style.background = ""
            )
            const childNavbar = document.querySelector("#profile_menu_button > div.productProfile_body")
            mutationObserver.observe(childNavbar, { childList: true, subtree: true })
        }, 4500);
    } else {
        // FOR CLIENTSIDE

        const childNavbar = document.querySelector("#profile_menu_button > div.productProfile_body")
        mutationObserver.observe(childNavbar, { childList: true, subtree: true })
    }
});


