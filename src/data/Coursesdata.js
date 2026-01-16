import digitalArts from "../assets/courseimages/DigitalArt.jpeg"
import threeDArt from "../assets/courseimages/3DArt.png"
import gameDev from "../assets/courseimages/GameDev.jpg"

export default [
    {
        id: 1,
        courseImg: digitalArts,
        caption: "Digital Drawing",
        courseName: "Digital Drawing & Illustration",
        courseDesc: "Foundations of shape, color, and character design using Krita and Procreate workflows.",
        duration: 4
    },
    {
        id: 2,
        courseImg: threeDArt,
        caption: "3D Modelling",
        courseName: "3D Modelling (Blender)",
        courseDesc: "Model, texture and light simple assets. Build portfolio-ready 3D work.",
        duration: 6
    },
    {
        id: 3,
        courseImg: gameDev,
        caption: "Game Dev",
        courseName: "Game Development (Godot / Unreal)",
        courseDesc: "Learn to bring assets to life — simple mechanics, levels, and publishing a mini-game.",
        duration: 8
    }
]