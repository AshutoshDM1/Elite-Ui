import Footer from "@/components/common/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { GrainGradient, LiquidMetal } from "@paper-design/shaders-react";

const LogoShader = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-20" >
            <div className="h-[280px] w-[800px] overflow-hidden flex justify-center items-center" >
                <LiquidMetal
                    width={680}
                    height={420}
                    image="/images/component2/text.svg"
                    colorBack="#ffffff"
                    colorTint="#FFFFFF"
                    shape="diamond"
                    repetition={2}
                    softness={0.1}
                    shiftRed={0.3}
                    shiftBlue={0.3}
                    distortion={0.07}
                    contour={0.4}
                    angle={70}
                    speed={1}
                    scale={0.6}
                    fit="contain"
                    className="select-none pointer-events-none"
                />
            </div>
            <div className="relative h-[280px] w-[700px] bg-white dark:bg-black rounded-lg flex justify-center items-center overflow-hidden" >
                {/* Grain Gradient Layer - positioned absolutely */}
                <div className="absolute inset-0 z-10 mix-blend-screen flex justify-center items-center">
                    <GrainGradient
                        width={700}
                        height={280}
                        colors={["#7300ff", "#eba8ff", "#00bfff", "#2b00ff", "#7300ff",]}
                        colorBack="#000000"
                        softness={0.5}
                        intensity={0.5}
                        noise={0.25}
                        shape="ripple"
                        speed={1}
                    />
                </div>

                {/* White layer with text cutout using mix-blend-mode */}
                <div className="absolute inset-0 z-0 flex justify-center items-center">
                    <h3
                        className="text-[160px] font-bold leading-none text-black"
                        style={{
                            mixBlendMode: 'multiply'
                        }}
                    >
                        100xDEV
                    </h3>
                </div>
            </div>
        </div>
    )
}
const ProfileDrawerPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="min-h-screen flex justify-center items-center relative" >
                <LogoShader />
            </div>
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>
            <Footer />
        </div>
    )
}

export default ProfileDrawerPage;
