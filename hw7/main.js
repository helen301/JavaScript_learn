const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ]
function addElement() {

    const  playList = document.getElementById("ol");

    const ul = document.createElement("li");

    for (let i = 0; i <= playList.length; i++) {
        ul.appendChild(playList[i].author);
        ul.appendChild(playList[i].song);
    }

    // ul.appendChild(name);

    // document.getElementsByName("li").appendChild(name);

}

console.log(addElement());