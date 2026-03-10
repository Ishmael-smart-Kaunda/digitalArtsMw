
import video3D from '../assets/videos/3D rendering/3D.mp4'
import drawingVideo from '../assets/videos/Sketching/sketching.mp4'
import gameVideo from '../assets/videos/game videos/game.MP4'

export default  [     
                    {
                        id:1,
                          
                        courseName:"3d modelling",
                        description: `This 3D Modelling Program introduces students to the world of digital creation 
                                      using professional 3D tools. The course teaches the foundations of 3D graphics, Blender 
                                      workflow, cinematic composition, and lighting techniques used in film, advertising, 
                                      games, and digital media production.`,
                        videoFile:video3D,
                        audiences:[
                                    {
                                       id:1,
                                       audience:'Students interested in 3D art, animation, and digital media'
                                    },
                                    {
                                       id:2,
                                       audience:'Beginners exploring Blender and computer graphics'
                                    },
                                    {
                                       id:3,
                                       audience:'Aspiring filmmakers and visual storytellers'
                                    },
                                    {
                                       id:4,
                                       audience:'Digital artists expanding into 3D creation'
                                    },
                                    {
                                       id:5,
                                       audience:'Anyone interested in creative technology and visual production'
                                    }

                                  ],
                        outcomes: [
                                    {
                                        id:1,
                                        outcome:"Understand the fundamentals of 3D graphics and digital creation"
                                
                                    },
                                    {
                                        id:2,
                                        outcome:"Navigate and work confidently inside Blender"
                                
                                    },
                                    {
                                        id:3,
                                        outcome:"Apply film composition techniques to digital scenes"
                                
                                    },
                                    {
                                        id:4,
                                        outcome:"Understand lighting principles used in professional media production"
                                
                                    },
                                    {
                                        id:5,
                                        outcome:"Produce rendered 3D scenes with intentional camera framing and lighting"
                                
                                    },
                                  ],
                        modules:  [
                                  {
                                    id:1,
                                    moduleName:"level 1 : Introduction to 3D & Digital creation ",
                                    lesson: {
                                        heading:"What students learn",
                                        criteria:[
                                                {    
                                                    id:1,
                                                    criterion :'What 3D graphics are and where they are used in real-world industries'
                                                },
                                                {   
                                                    id:2,
                                                    criterion :'The evolution of computer graphics and CGI in film'
                                                },
                                                {
                                                    id:3,
                                                    criterion :'The difference between 2D and 3D visual production '
                                                }, 
                                                {
                                                    id:4,
                                                    criterion :'Core 3D concepts including vertices, edges, faces, and meshes ' 
                                                },
                                                {
                                                    id:5,
                                                    criterion :'Understanding the X, Y, and Z axes in a 3D environment'
                                                },
                                                {
                                                    id:6,
                                                    criterion :'Introduction to Blender as a professional 3D creation tool'
                                                },
                                                {
                                                    id:7,
                                                    criterion:'Overview of Blender capabilities including modeling, lighting, animation, and rendering'
                                                }, 
                                                
                                                ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Opening and navigating Blender',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Viewing and interacting with the default 3D objects',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Rotating the 3D viewport',  
                                                    },
                                                    {
                                                    id:4,
                                                    practice :'Moving and positioning objects within a scene',  
                                                    }, 
                                                     
                                                
                                                    ],
                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                        {
                                                        id:1,
                                                        project :'A basic Blender scene with manipulated objects',
                                                        },
                                                        {
                                                        id:2,
                                                        project :'First interaction with a 3D workspace',
                                                        },
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {   id:1,
                                                            outcome :`Students gain a foundational understanding of 3D graphics and digital creation, and 
                                                                      become comfortable navigating a 3D environment using Blender.`
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },


                                {
                                    id:2,
                                    moduleName:"level 2 : Blender Interface & 3D Workflow",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'The main components of the Blender interface'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Understanding the viewport, outliner, properties panel, and timeline'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'The difference between Object Mode and Edit Mode'
                                                        }, 
                                                    {
                                                        id:4,
                                                            criterion :'Navigation techniques such as orbiting, panning, and zooming' 
                                                        },
                                                    {
                                                        id:5,
                                                            criterion :'Transform tools including move, rotate, and scale'
                                                        },
                                                    {
                                                        id:6,
                                                            criterion :' Basic scene composition and camera placement'},
                                                    {
                                                        id:7,
                                                            criterion:'Introduction to rendering a simple scene'}, 
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Creating simple 3D scenes using primitive objects',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Viewing and interacting with the default 3D objects',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Adding cameras and lighting elements',  
                                                    },
                                                    {
                                                    id:4,
                                                    practice :'Rendering a basic image from the scene',  
                                                    }, 
                                                     
                                                
                                                    ],


                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'A simple rendered scene created in Blender',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Functional gameplay systems',
                                                    },
                                                    {
                                                    id:3,
                                                    project :'Polished interactive experience',  
                                                    },   
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students develop confidence working inside Blender and can build and render a simple 
                                                                      3D scene independently.`
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },



                                {
                                    id:3,
                                    moduleName:"level 3 : Film Fundamentals for 3D Artists",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Why film language and visual storytelling are important in 3D creation'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'The relationship between camera choices and emotional impact'
                                                    },
                                                    
                                                    {
                                                        id:4,
                                                            criterion :'Core composition principles used in filmmaking and digital media'},
                                                    {
                                                        id:5,
                                                            criterion :'Rule of thirds, leading lines, and visual balance'},
                                                    {
                                                        id:6,
                                                            criterion :'Using negative space and depth in visual design'},
                                                    {
                                                        id:7,
                                                            criterion:'Understanding shot types such as wide, medium, and close-up'}, 

                                                     {
                                                        id:8,
                                                            criterion:'Basic camera movement including pan, tilt, and dolly'}, 
                                                      
                                                     {
                                                        id:9,
                                                            criterion:'Focal length concepts and how cameras influence perspective'},
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Adding and positioning cameras inside Blender',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Switching to camera view and adjusting framing',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Experimenting with composition techniques',  
                                                    }, 
                                                    {
                                                    id:4,
                                                    practice :'Creating visually balanced shots within a 3D scene',  
                                                    },   
                                                ],

                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                        {
                                                        id:1,
                                                        project :'A well-framed cinematic camera shot in Blender',
                                                        },
                                                        {
                                                        id:2,
                                                        project :'A scene demonstrating composition and visual storytelling',
                                                        },
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students understand how to apply filmmaking principles to improve the visual quality 
                                                                      and storytelling power of their 3D renders. 
                                                                      `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                {
                                    id:4,
                                    moduleName:"level 4 : Lighting Fundamentals",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'How lighting affects mood, realism, and storytelling'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'The principles of light direction, intensity, and color temperature'
                                                    },
                                                    
                                                    {
                                                        id:3,
                                                            criterion :'The difference between hard light and soft light'},
                                                    {
                                                        id:4,
                                                            criterion :'The emotional impact of shadows and contrast'},
                                                    {
                                                        id:5,
                                                            criterion :'The three-point lighting system (key, fill, and back light)'},
                                                    {
                                                        id:6,
                                                            criterion:'Common lighting setups used in portrait, product, and cinematic visuals'}, 

                                                     {
                                                        id:7,
                                                            criterion:'How lighting works in Blender environments'}, 
                                                      
                                                     
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Adding different types of lights in Blender',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Adjusting light position and intensity',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Observing shadow behavior and scene mood changes',  
                                                    }, 
                                                    {
                                                    id:4,
                                                    practice :'Matching lighting setups to visual references',  
                                                    },   
                                                ],

                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                        {
                                                        id:1,
                                                        project :'A fully lit 3D scene with a clear visual mood',
                                                        },
                                                        {
                                                        id:2,
                                                        project :'A rendered image demonstrating lighting control',
                                                        },
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students develop the ability to use lighting creatively to
                                                                      enhance the atmosphere, realism, and visual storytelling of a 3D scene.
                                                                      `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                
                                
                            ]     


                    },


                        /* DIGITAL DRAWING*/


                    {
                        id:2,
                        courseName:"digital drawing",  
                        description: `The Dynamic Sketching Program teaches students how to observe and interpret the real 
                                      world through drawing. Using structured exercises and observational studies, students 
                                      develop strong sketching fundamentals that support careers in illustration, concept art, 
                                      design, and visual storytelling.`,
                        videoFile:drawingVideo,
                        audiences:[
                                    {
                                       id:1,
                                       audience:'All interested in illustration and concept art'
                                    },
                                    {
                                       id:2,
                                       audience:'Those learning drawing fundamentals'
                                    },
                                    {
                                       id:3,
                                       audience:'Artists interested in visual design and storytelling'
                                    },
                                    {
                                       id:4,
                                       audience:'Creators preparing for animation, game art, or entertainment design'
                                    },
                                    {
                                       id:5,
                                       audience:'Anyone wanting to improve observational drawing skills'
                                    }

                                  ],
                        outcomes: [
                                    {
                                        id:1,
                                        outcome:"Develop strong foundational sketching skills"
                                
                                    },
                                    {
                                        id:2,
                                        outcome:"Improve hand control and drawing confidence"
                                
                                    },
                                    {
                                        id:3,
                                        outcome:"Understand form construction and perspective"
                                
                                    },
                                    {
                                        id:4,
                                        outcome:"Learn to observe and analyze real-world subjects"
                                
                                    },
                                    {
                                        id:5,
                                        outcome:"Apply lighting, texture, and depth techniques in drawing"
                                
                                    },
                                    {
                                        id:6,
                                        outcome:"Transform observations into original design concepts"
                                
                                    },
                                  ],

                        
                        modules:  [
                                  {
                                    id:1,
                                    moduleName:"LEVEL 1 : Sketching Foundations",
                                    lesson: {
                                        heading:"What students learn",
                                        criteria:[
                                                {    
                                                    id:1,
                                                    criterion :'The importance of warming up the hand before drawing'
                                                },
                                                {   
                                                    id:2,
                                                    criterion :'Developing hand and arm control for confident line work'
                                                },
                                                {
                                                    id:3,
                                                    criterion :'Line control, line weight, and drawing efficiency'}, 
                                                {
                                                    id:4,
                                                    criterion :'Understanding basic drawing materials and sketching workflow' },
                                                {
                                                    id:5,
                                                    criterion :'Breaking down objects into simple shapes and forms'},
                                                {
                                                    id:6,
                                                    criterion :'Basic design awareness in sketching'},
                                                
                                                ],
                                            },
                                    practice:{
                                                 heading:"What students practice on",
                                                 practices:[
                                                     {
                                                        id:1,
                                                        practice:'Daily warm-up drawing exercises'
                                                     }, 
                                                     { 
                                                        id:2,
                                                        practice:'Controlled line drawing and mark making '
                                                     },
                                                     {
                                                        id:3,
                                                        practice:'Hand and arm dexterity exercises'
                                                     },
                                                     {
                                                        id:4,
                                                        practice:'Sketching simple objects using basic forms '
                                                    }
                                                 ],
                                             },
                                     
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                        {
                                                        id:1,
                                                        project :'Warm-up sketch sheets',
                                                        },
                                                        {
                                                        id:2,
                                                        project :'Simple object sketches using basic geometric forms',
                                                        },
                                                           
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {   id:1,
                                                            outcome :`Students develop drawing confidence, hand control, and the ability to simplify objects 
                                                                      into fundamental shapes.`
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },

                                {
                                    id:2,
                                    moduleName:"level 2 : Perspective & Form Construction",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Basic perspective principles '
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Understanding how perspective affects objects in space'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Drawing ellipses correctly in perspective'
                                                        }, 
                                                    {
                                                        id:4,
                                                            criterion :'Constructing objects using simple forms' 
                                                        },
                                                    {
                                                        id:5,
                                                            criterion :'Analyzing structure through form breakdown'
                                                        },
                                                    
                                                    ],
                                            },
                                    practice:{
                                                 heading:"what students practice on",
                                                 practices:[
                                                     {
                                                        id:1,
                                                        practice:'Perspective exercises'
                                                     }, 
                                                     { 
                                                        id:2,
                                                        practice:'Drawing cylinders, cubes, and spheres in perspective'
                                                     },
                                                     {
                                                        id:3,
                                                        practice:'Applying ellipse techniques'
                                                     },
                                                     {
                                                        id:4,
                                                        practice:'Form construction exercises'
                                                    }
                                                 ],
                                             },
                                             
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                        id:1,
                                                        project :'Perspective sketch pages',
                                                    },
                                                    {
                                                        id:2,
                                                        project :'Constructed objects using geometric forms',
                                                    },
                                                       
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                    {   
                                                        id:1,
                                                        outcome :`Students gain the ability to build believable structures and objects using perspective 
                                                                and form construction techniques.`
                                                    },
                                                    ],
                                            },                                                                                                                       
                                },

                                {
                                    id:3,
                                    moduleName:"level 3 : Organic Forms & Surface Detail",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Creating convincing volumes using organic forms'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Using contour lines to describe form'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Applying textures to simple forms'}, 
                                                    {
                                                        id:4,
                                                            criterion :' Observing natural shapes and translating them into sketches'
                                                    },
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students creat",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Organic form drawing exercises',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Contour line studies',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Texture studies and experiments',  
                                                    }, 
                                                    {
                                                    id:4,
                                                    practice :'Applying textures to basic shapes',  
                                                    },  
                                                
                                                    ],
                                            }, 
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'Organic form sketches',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Applying textures to basic shapes ',
                                                    },
                                                      
                                                
                                                    ],
                                            },
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students learn how to communicate volume and surface detail effectively through line 
                                                                      and texture. `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                 },
                                 {
                                    id:4,
                                    moduleName:"level 4 : Organic Forms & Surface Detail",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Creating convincing volumes using organic forms'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Using contour lines to describe form'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Applying textures to simple forms'}, 
                                                    {
                                                        id:4,
                                                            criterion :' Observing natural shapes and translating them into sketches'
                                                    },
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Organic form drawing exercises',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Contour line studies',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Texture studies and experiments',  
                                                    },
                                                    {
                                                    id:4,
                                                    practice :'Applying textures to basic shapes',  
                                                    },    
                                                    
                                                
                                                    ],
                                            }, 
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'Organic form sketches',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Texture studies and form analysis drawings',
                                                    },
                                                      
                                                
                                                    ],
                                            },
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students learn how to communicate volume and surface detail effectively through line 
                                                                      and texture. `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                {
                                    id:5,
                                    moduleName:"level 5 : Lighting, Texture & Depth",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                        criterion :'How light interacts with objects and surfaces'
                                                    },
                                                    {   
                                                        id:2,
                                                        criterion :'Basic lighting principles in drawing'
                                                    },
                                                    {
                                                        id:3,
                                                        criterion :'Understanding highlights, shadows, and form shadows'}, 
                                                    {
                                                        id:4,
                                                        criterion :'Creating depth and volume in sketches'
                                                    },
                                                    {
                                                        id:5,
                                                        criterion :'Combining simple forms to create complex structures'
                                                    },
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                        id:1,
                                                        practice :'Lighting studies',
                                                    },
                                                    {
                                                        id:2,
                                                        practice :'Value and shading exercises',
                                                    },
                                                    {
                                                        id:3,
                                                        practice :'Form combination sketches',  
                                                    }, 
                                                     {
                                                        id:4,
                                                        practice :'Depth and volume drawing exercises',  
                                                    },  
                                                
                                                    ],
                                            }, 
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                        id:1,
                                                        project :'Shaded form drawings',
                                                    },
                                                    {
                                                        id:2,
                                                        project :'Lighting and texture studies',
                                                    },
                                                      
                                                
                                                    ],
                                            },
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {   
                                                          id:1,
                                                          outcome :`Students understand how to use lighting and shading to 
                                                                    create depth, volume, and realism in their drawings. `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                {
                                    id:6,
                                    moduleName:"level 6 : Observational Drawing",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                        criterion :'How to draw directly from observation'
                                                    },
                                                    {   
                                                        id:2,
                                                        criterion :'Breaking complex subjects into simple thumbnail sketches'
                                                    },
                                                    {
                                                        id:3,
                                                        criterion :'Developing a visual vocabulary through observation'}, 
                                                    {
                                                        id:4,
                                                        criterion :'Understanding how to complete a full drawing from life'
                                                    },
                                                    
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Outdoor observational sketching',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Drawing plants and natural forms',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Thumbnail sketching and quick studies',  
                                                    }, 
                                                     {
                                                    id:4,
                                                    practice :'Translating observation into structured drawings',  
                                                    },  
                                                
                                                    ],
                                            }, 
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'Observational drawings from nature',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Thumbnail sketches and study pages',
                                                    },
                                                      
                                                
                                                    ],
                                            },
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                      {   
                                                        id:1,
                                                        outcome :`Students strengthen their ability to 
                                                                  observe real-world subjects and translate them into accurate and expressive drawings. `
                                                      },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                {
                                    id:7,
                                    moduleName:"level 7 : Concept Development & Redesign",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Transforming observational sketches into original design concepts'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Using natural forms as inspiration for creative work'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Designing characters, environments, props, and vehicles'}, 
                                                    {
                                                        id:4,
                                                            criterion :'Understanding layout and visual composition'
                                                    },
                                                    
                                                    
                                                    ],
                                            },
                                    practice: {
                                            heading:"What students practice on",
                                            practices:[ 
                                                    {
                                                    id:1,
                                                    practice :'Concept sketching exercises',
                                                    },
                                                    {
                                                    id:2,
                                                    practice :'Redesigning real-world forms into imaginative designs',
                                                    },
                                                    {
                                                    id:3,
                                                    practice :'Layout experimentation and composition planning',  
                                                    }, 
                                                     
                                                
                                                    ],
                                            }, 
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                        id:1,
                                                        project :'Original concept designs inspired by observational sketches',
                                                    },
                                                    {
                                                        id:2,
                                                        project :'Environment, character, or prop design sketches',
                                                    },
                                                      
                                                
                                                    ],
                                            },
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                    {   
                                                        id:1,
                                                        outcome :`Students develop the ability to turn real-world observations into creative design ideas suitable for
                                                                  entertainment and visual media industries. `
                                                    },
                                                    ],
                                            },                          
                                                

                                                
                                },  
                            ]
                    },

                     /*GAME DEVELOPMENT COURSE OUTLINE CONTENT */
                    {
                        id:3,
                        courseName:"game development",  
                        description: `Our Game Development Program is designed to equip students with practical, industry-relevant skills 
                                    in designing and building interactive digital games. The program focuses on core principles that apply 
                                    across all major game engines.`,
                        videoFile:gameVideo,
                        audiences:[
                                    {
                                       id:1,
                                       audience:'Students interested in game design & interactive media'
                                    },
                                    {
                                       id:2,
                                       audience:'Beginners exploring Blender and computer graphics'
                                    },
                                    {
                                       id:3,
                                       audience:'Aspiring developers & creators'
                                    },
                                    {
                                       id:4,
                                       audience:'Digital artists expanding into interactive content'
                                    },
                                    {
                                       id:5,
                                       audience:'Anyone passionate about building games'
                                    }

                                  ],
                        outcomes: [
                                    {
                                        id:1,
                                        outcome:'Understand core game development principles'
                                    },
                                    {
                                        id:2,
                                        outcome:'Design and build playable games'
                                    },
                                    {
                                        id:3,
                                        outcome:'Apply logic and system-based thinking'
                                    },
                                    {
                                        id:4,
                                        outcome:'Develop problem-solving skills'
                                    },
                                    {
                                        id:5,
                                        outcome:'Build a professional game development portfolio'
                                    },
                                    {
                                        id:6,
                                        outcome:'Be prepared for creative technology careers'
                                    },
                                  ],
                        modules:  [
                                  {
                                    id:1,
                                    moduleName:"level 1 : Game Development Foundations ",
                                    lesson: {
                                        heading:"What students learn",
                                        criteria:[
                                                {    
                                                    id:1,
                                                    criterion :'Introduction to game design principles (What is a game, what makes it fun etc ...)'
                                                },
                                                {   
                                                    id:2,
                                                    criterion :'Understanding game mechanics & player experience'
                                                },
                                                {
                                                    id:3,
                                                    criterion :'Game engine fundamentals (scenes, objects, components)'}, 
                                                {
                                                    id:4,
                                                    criterion :'Basic logic & scripting concepts' },
                                                {
                                                    id:5,
                                                    criterion :'Player movement systems'},
                                                {
                                                    id:6,
                                                    criterion :'Collisions & interactions'},
                                                {
                                                    id:7,
                                                    criterion:'Scoring & win/lose systems'}, 
                                                {
                                                    id:8,
                                                    criterion:'Introduction to UI & sound integration'},
                                                ],
                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                        {
                                                        id:1,
                                                        project :'A fully playable basic game prototype',
                                                        },
                                                        {
                                                        id:2,
                                                        project :'A simple Game Design Document',
                                                        },
                                                        {
                                                        id:3,
                                                        project :'Interactive 2D or 3D game demo ',  
                                                        },   
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {   id:1,
                                                            outcome :`Students understand how games are structured and 
                                                            can build a simple playable game from start to finish.`
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                {
                                    id:2,
                                    moduleName:"level 2 : Game play Systems & Development",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Advanced game mechanics'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'Level design principles'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Enemy behaviour systems'
                                                        }, 
                                                    {
                                                        id:4,
                                                            criterion :'Game state management' 
                                                        },
                                                    {
                                                        id:5,
                                                            criterion :'User Interface systems'
                                                        },
                                                    {
                                                        id:6,
                                                            criterion :'Asset integration (3D models, animations, audio)'},
                                                    {
                                                        id:7,
                                                            criterion:'Optimization basics'}, 
                                                    {
                                                        id:8,
                                                            criterion:'Structured development workflow'},
                                                    ],
                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'A multi-level playable game prototype',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Functional gameplay systems',
                                                    },
                                                    {
                                                    id:3,
                                                    project :'Polished interactive experience',  
                                                    },   
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students can design and develop more 
                                                                    complex gameplay systems and produce portfolio-ready game 
                                                                    projects.`
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },

                                {
                                    id:3,
                                    moduleName:"level 3 : Professional Game Development",
                                    lesson: {
                                            heading:"What students learn",
                                            criteria:[
                                                    {    
                                                        id:1,
                                                            criterion :'Advanced scripting & architecture'
                                                    },
                                                    {   
                                                        id:2,
                                                            criterion :'AI behaviour systems'
                                                    },
                                                    {
                                                        id:3,
                                                            criterion :'Advanced UI systems'}, 
                                                    {
                                                        id:4,
                                                            criterion :'Basic logic & scripting concepts'},
                                                    {
                                                        id:5,
                                                            criterion :'Game polishing & feedback systems'},
                                                    {
                                                        id:6,
                                                            criterion :'Optimization & performance improvement'},
                                                    {
                                                        id:7,
                                                            criterion:'Team-based development workflow'}, 
                                                    {
                                                        id:8,
                                                            criterion:'Introduction to publishing & deployment'},
                                                    ],
                                            },
                                    project: {
                                            heading:"What students creat",
                                            projects:[ 
                                                    {
                                                    id:1,
                                                    project :'A complete polished game project',
                                                    },
                                                    {
                                                    id:2,
                                                    project :'Professional presentation & game pitch',
                                                    },
                                                    {
                                                    id:3,
                                                    project :'Portfolio-ready final build',  
                                                    },   
                                                
                                                    ],
                                            }, 
                                    outcome: {
                                            heading:"Outcome",
                                            outcomes:[
                                                        {      id:1,
                                                            outcome :`Students are prepared for freelance 
                                                                        work, indie development, internships, or further specialization in 
                                                                        game development. `
                                                        },
                                                    ],
                                            },                          
                                                

                                                
                                },
                                
                                
                            ]
                    }
]