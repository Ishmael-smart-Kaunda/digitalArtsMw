
import digitalArts from "../assets/courseimages/DigitalArt.jpeg"
import threeDArt from "../assets/courseimages/3DArt.png"
import gameDev from "../assets/courseimages/GameDev.jpg"


export default [
    {
        id: 11,
        courseImg: digitalArts,
        title: "Introduction to Dynamic Sketching",
        info: {
            description: "Observational drawing couse ro build foundational sketching skills, perspective, organic forms, and redesign projects.",
            takeAways: {
                takeAway1: "Hands-on projects",
                takeAway2: "Expert instruction",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: 8,
            type: "Beginner → Intermediate"
        },
        tools: "Krita, Photopea, Procreate",
        pathname:"#sketching"
    },
    {
        id: 12,
        courseImg: threeDArt,
        title: "Digital Portrait Painting",
        info: {
            description: "Portrait drawing using the reilly method, anatomy studies, value work, and final polished portraits.",
            takeAways: {
               takeAway1: "Hands-on projects",
                takeAway2: "Expert instruction",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: 8,
            type: "Hands-on"
        },
        tools: "Blender, Substance alternatives",
        pathname:"#digital-portrait"
    },
    {
        id: 13,
        courseImg: gameDev,
        title: "Character Design & Visual Storytelling",
        info: {
            description: "Character design and storytelling through composition in a final comic or illustration.",
            takeAways: {
                takeAway1: "Hands-on projects",
                takeAway2: "Expert instruction",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: "8",
            type: "Project-based"
        },
        tools: "Godot or Unreal (you choose)",
        pathname:"#character-design"
    }
]