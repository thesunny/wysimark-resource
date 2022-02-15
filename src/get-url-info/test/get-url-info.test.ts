import { getUrlInfo } from ".."

describe("getUrlInfo", () => {
  it("should get url info from a file", async () => {
    const url = "https://site.com/f/acme/articles/123/abcde.jpg"
    const info = getUrlInfo(url)
    expect(info).toEqual({ type: "generic", url })
  })

  it("should get url info from an original image", async () => {
    const url = "https://site.com/f/acme/articles/123/abcde--640x480.jpg"
    const info = getUrlInfo(url)
    expect(info).toEqual({
      type: "image",
      url,
      width: 640,
      height: 480,
    })
  })

  it("should get url info from a query image", async () => {
    const url =
      "https://site.com/f/acme/articles/123/abcde--640x480.jpg?size=320x240"
    const info = getUrlInfo(url)
    expect(info).toEqual({
      type: "image-query",
      url,
      width: 320,
      height: 240,
      original: {
        type: "image",
        url: "https://site.com/f/acme/articles/123/abcde--640x480.jpg",
        width: 640,
        height: 480,
      },
    })
  })
})
