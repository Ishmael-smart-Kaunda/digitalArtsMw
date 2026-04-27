
import digitalArts from "../assets/courseimages/DigitalArt.jpeg"
import threeDArt from "../assets/courseimages/3DArt.png"
import gameDev from "../assets/courseimages/GameDev.jpg"


export default [
    {
        id: 11,
        courseImg: digitalArts,
        title: "Game Development Fundamentals",
        info: {
            description: "introduction to core principles of game creation, player interaction, logic, and building a complete simple game",
            takeAways: {
                takeAway1: "Hands on projects",
                takeAway2: "Expert instructions",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: 8,
            type: "Beginner"
        },
        tools: "Krita, Photopea, Procreate",
        pathname:"#sketching"
    },
    {
        id: 12,
        courseImg: threeDArt,
        title: "Foundation of Game Development in Unity",
        info: {
            description: "Project-based Unity courses covering scripting mechanics, collisions, UI, and building a playable mini game.",
            takeAways: {
                takeAway1: "Hands-on projects",
                takeAway2: "Expert instructions",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: 6,
            type: "Begnner → Intermediate"
        },
        tools: "Blender, Substance alternatives",
        pathname:"#modelling"
    },
    {
        id: 13,
        courseImg: gameDev,
        title: "Intermediate Game Development with Godot",
        info: {
            description: "Advanced Godot course focusing on complex systems, UI, AI, optimisation, and producing a polished portfolio-ready game.",
            takeAways: {
                takeAway1: "Hands-on projects",
                takeAway2: "Expert instruction",
                takeAway3: "Certificate on completion"
            }
        },
        bagdes: {
            duration: 8,
            type: "Intermediate"
        },
        tools: "Godot or Unreal (you choose)",
        pathname:"#gameDevelopment"
    }
]