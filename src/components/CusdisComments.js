import { ReactCusdis } from 'react-cusdis'

export default function CusdisComments (props){
  return(
      <ReactCusdis
      id = "cusdis-thread"
      attrs={{
        host: "https://cusdis.com",
        appId: "49da488c-98c0-4284-943e-fc2be8b8504b",
        pageId: props.attrs.pageId,
        pageTitle: props.attrs.pageTitle,
        pageUrl: props.attrs.pageUrl,
        theme: "auto",
      }}
    />
  )
}