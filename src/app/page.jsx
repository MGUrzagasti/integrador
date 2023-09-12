import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className='flex container relative'>
                <Image src="/home-foto.webp" alt=""
                    height={500}
                    width={1400}
                ></Image>
                <div className=" absolute text-center  border-b-blue-950 text-4xl text-bold animate-bounce bg-sky-500 ">
                    <h1 >Trabajamos por una gran causa</h1>
                </div>
            </div>
            <br />
            <br />

            <div className="text-center text-3xl ml-1  pb-2  ">
                <h2>GC es una organización sin fines de lucro</h2>
            </div>
            <br />
            <br />
            <div className="flex items-center content-end text-4xl">
                <Image src="/gc.890707a6.png" alt=""
                    height={100}
                    width={100}
                ></Image>

                <h1 className="bg-cyan-500">que trabaja para promover el desarrollo integral de niños, niñas y adolescentes a través de la educación</h1>
                <Image src="/gc.890707a6.png" alt=""
                    height={100}
                    width={100}
                ></Image>
            </div>
            <br />
            <br />
            <h2 className="text-center text-3xl ml-1  pb-2  ">articulando los siguientes tres ejes:</h2>
            <br />
            <br />
            <br />
            <div className="flex justify-between">
                <div className="conteiner flex text-center">
                    <div>
                        <Image src="/imagenes/crecimiento.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                        <h2 className="text-4xl">Crecimiento</h2>
                    </div>

                </div>
                <div className="conteiner flex text-center">
                    <div>
                        <Image src="/wireframe-06.544b4887.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                        <h2 className="text-4xl">Conocimiento</h2>
                    </div>

                </div>
                <div className="conteiner flex text-center">
                    <div>
                        <Image src="/compañerismo.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                        <h2 className="text-4xl">Compañerismo</h2>
                    </div>

                </div>


            </div>
            <br />
            <br />
            <br />

            <div className='text-6xl grid justify-items-center font-bold'>
                <h1>Proyecto GC</h1>
            </div>
            <br />
            <br />
            <br />

            <div className='grid justify-items-center '>
                <iframe width="892" height="315" src="https://www.youtube.com/embed/QHtjlg1BU0s" title="100 - Primer Club de Robótica y Nuevas Tecnologías de González Catán - La Matanza." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <br />
            <br />
            <br />

        </>











    )
}
