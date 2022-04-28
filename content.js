// Definition of mutationObserver instance
const mutationObserver = new MutationObserver(entries => {
// Get the innerHTML element that will be modify during your DOM modification
    var navbarinnerHTML = document.querySelector("#profile_legend_account").innerHTML
    if (navbarinnerHTML === "caisse-epargne") {
     // Change the background color if caisse-epargne
        document.querySelector("#main_navigation > div.nui-main-header > div").style.background = "#e10808"
    }
    else (
     // Keep the default background if else
        document.querySelector("#main_navigation > div.nui-main-header > div").style.background = ""
    )

    if (navbarinnerHTML === "caisse-epargne" && document.querySelector("#mainHeader > div") != null) {
        document.querySelector("#mainHeader > div").style.background = "#e10808"
    }

})

// Wait until window is loaded
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
            // Use of mutationObserver instance
            mutationObserver.observe(childNavbar, { childList: true, subtree: true })
        }, 4500);
    } else {
        // FOR CLIENTSIDE

        const childNavbar = document.querySelector("#profile_menu_button > div.productProfile_body")
        // Use of mutationObserver instance
        mutationObserver.observe(childNavbar, { childList: true, subtree: true })
    }
});


