import React from "react"
import { useState, useEffect, useRef } from "react"

const Content = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const contentRef = useRef(null)
  const accessKey = "mADgL0bAQCn7JI1sjg-Aheugje-8b5anr7S5UCmcAQo"

  useEffect(() => {
    const fetchImages = async () => {
      // if (isLoading) return
      // setIsLoading(true)
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=nature&client_id=${accessKey}`
        )
        const data = await response.json()
        console.log(`fetchImages: ${page}, ${data.results.length} images`)
        setImages((prev) => [...prev, ...data.results])
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
    console.log(`fetchImages:${page}`)
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
        console.log("Scrolled to bottom-ish of container!")
        setPage((prev) => prev + 1)
      }

      const container = contentRef.current
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleShare = (imgSrc, imgAlt) => {
    if (navigator.share) {
      navigator
        .share({
          title: imgAlt,
          url: imgSrc,
        })
        .then(() => {})
        .catch((error) => console.error("Error sharing the image:", error))
    } else {
      alert("Sharing is not supported in this browser.")
    }
  }

  return (
    <div className="content" ref={contentRef}>
      {images.map((image) => (
        <div key={image.id} className="imageCard">
          <h2 className="imageCardHeader">
            <button className="detailsBtn">
              <img src="/detailsIcon.svg"></img>
            </button>

            <p>{image.user.name}</p>

            <button
              className="shareBtn"
              onClick={() =>
                handleShare(
                  image.urls.raw,
                  image.alt_description || "Image failed to load :("
                )
              }
            >
              <img src="/shareIcon.svg"></img>
            </button>
          </h2>
          <img
            src={`${image.urls.raw}&w=400&h=400&fit=crop`}
            alt={image.alt_description || "Image failed to load :("}
          ></img>
        </div>
      ))}
    </div>
  )
}

export default Content
