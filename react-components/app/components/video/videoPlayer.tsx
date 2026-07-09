import { useEffect, useRef } from "react"

type Props = {
    src: string,
    isPlaying: boolean
}

export function VideoPlayer({ src, isPlaying }: Props) {
    // executar uma ação direta no proprio video
    const videoTag = useRef<HTMLVideoElement>(null); // referencia direta pra um elemento do DOM

    useEffect(() => {
        if (isPlaying) {
            videoTag.current?.play()
        }else{
            videoTag.current?.pause()
        }

    },[isPlaying])
    
    return (
        <video ref={videoTag} src={src} loop playsInline/>
    )
}