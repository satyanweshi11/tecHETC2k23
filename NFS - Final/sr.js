let typeData = new Typed(".role" , {
    strings:[
        "Need for Speed",
        "TecHETC 2k23"
    ],
    loop:true,
    typeSpeed: 110,
    backDelay: 4000,
    backSpeed: 80,
    })
    let typeData1 = new Typed(".role1" , {
        strings:[
            "Most Wanted",
            "version 8.0"
        ],
        loop:true,
        typeSpeed: 115,
        backDelay: 3950,
        backSpeed: 110,
        })
        
        const audio = new Audio("nfssound.mp3");
     
        $( window ).on( "load", ()=>{
            audio.play()
        } );
