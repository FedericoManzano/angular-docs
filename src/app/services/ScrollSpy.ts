import * as $ from "jquery"

const init = () => {
    configScroll()
    clickScroll()
    $(window).on("scroll", (e) => {     
        configScroll()
    })

    $(".scroll-spy ul li a").on("click", (e) => {
        $(".scroll-spy ul li a").each((index, ele) => {
            $(ele).removeClass("select")
        })

        $(e.target).addClass("select")
    })
}


const configScroll = () => {
    $(".scroll-item").each((index, ele) => {         
        let wScrollTop = $( window ).scrollTop()
        let eleOffsettop = $( ele ).offset()?.top 


        if(wScrollTop !== undefined && eleOffsettop !== undefined) {
            if( wScrollTop >= eleOffsettop - 200 ) {
                let id = $(ele).attr("id")
                $(".scroll-spy ul li a").each((index, ele) => {
                    if( $(ele).data("scroll") === "#" + id ) {
                        $(ele).addClass("select")
                        let h = $(ele).offset()?.top
                        
                    } else {
                        $(ele).removeClass("select")
                    }
                })
            }
        }
        
    })
}

const clickScroll = () => {
    $(".scroll-spy ul li a").on("click", (e) => {
        $(e.target).addClass("select")
        let id = $(e.target).data("scroll")

        let h = $(id).offset()?.top
        let wScrollTop = $(window).scrollTop()
        console.log(h)
        if(wScrollTop !== undefined && h !== undefined) {

            
                $(window).scrollTop(h - 20)
                $(".scroll-spy ul li a").removeClass("select")
                $(e.target).addClass("select")
            

            
        }
    })
}

const ScrollSpy = {
    init: () => init()
}

export default ScrollSpy